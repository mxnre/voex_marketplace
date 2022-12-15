import { BaseLayout } from '@ui'
import { CollectionItem } from '@voex'
import { useContext, useEffect, useState } from 'react'
import contractAddresses from 'utils/contractAddresses'
import Moralis from 'moralis'
import { findStrData } from 'apis/strApi'

import { NFTOwner, NftOwnerCollection } from '@_types/nft'
import { StrFindResult, StrNft } from '@_types/strApi'
import { UserContext } from 'context/PreferencesProvider'
import { useRouter } from 'next/router'
import nftmarket_abi from '../contracts/nftmarket.json'
import { useMoralis } from 'react-moralis'
import { toast } from 'react-toastify'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { nft } from "@assets"
import clsx from "clsx"
import { from } from "form-data"
interface ListedNFT {
  contractAdress: string
  tokenId: Number
  seller: string
  owner: string
  price: Number
  tokenURI: string
  listed: boolean
  id:string 
}
const MyProfile = () => {
  const router = useRouter()
  const { user }: any = useMoralis()
  const userContext = useContext(UserContext)
  const { isWeb3Enabled, isAuthenticated } = useMoralis()
  const [avatar, setAvatar] = useState<string | null>()
  const [username, setUsername] = useState<string | null>()
  const [NFTs, setNFTs] = useState<NFTOwner[]>([])
  const [isAllowed, setIsAllowed] = useState(false)
  const [listedNfts, setListedNfts] = useState<ListedNFT[]>([])
  const [ownedNfts, setOwnedNfts] = useState<ListedNFT[]>([])
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const [showModal,setShowModal] = useState(false)
  const [price,setPrice] = useState<string>('')
  const [errorMessage,setErrorMessage] = useState<boolean>(false);
  const [currentTokenId,setCurrentTokenId] = useState<string>('')
  const [id,setId]=useState<number>(0);
  const [nftCount,setNftCount] = useState<number>(0);
  const [countPerPage, setCountPerPage] = useState<number>(3);
  const [pageRange, setPageRange] = useState<number[]>([0, countPerPage]);
  const [selectedPageNumber, setSelectedPageNumber] = useState<number>(0);

  const handleSelectPageNumber = (pageNumber: number) => () => {
    const from = (pageNumber - 1) * countPerPage;
    const to = pageNumber * countPerPage;
    setPageRange([from, to]);
    setSelectedPageNumber(pageNumber)
    
  }

  useEffect(()=>{getNFTs()},[])

  useEffect(() => {
    if (isAuthenticated && isWeb3Enabled && userContext.user) {
      if (selectedTab === 0) {
        getNFTs()
      } else if (selectedTab === 1) {
        getMyListedNfts()
      } else if (selectedTab === 2) {
        getMyOwnedNfts()
      }
    }
  }, [isAuthenticated, isWeb3Enabled, userContext.user, selectedTab])

  useEffect(() => {
    if (userContext.user) {
      setAvatar(userContext.user.avatar_url)
      setUsername(userContext.user.username)
      // getNFTs()
      // getMyListedNfts()
    }
  }, [userContext.user])

  useEffect(() => {
    if (!userContext.user) {
      router.push('/login')
    }
  }, [userContext.user])

  const nftListing = (price:string,currentTokenId:string,id:number) => async () => {
      
      await Moralis.executeFunction({
        functionName: 'listNft',
        abi: nftmarket_abi,
        contractAddress: contractAddresses.NFT_MARKET_ADDRESS,
        params: {
          _nftContract: contractAddresses.NFT_MINT_ADDRESS,
          _tokenId: parseInt(currentTokenId),
          _price: Moralis.Units.ETH(price),
        },
        msgValue: Moralis.Units.ETH('0.0001'),
      })

      toast.success('NFT listed succesfuly')
      setShowModal(false);
      await axios.delete(
        `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}/api/nfts/${id}`,
      )
      
      getNFTs()
    // })
  }

  const getNFTs = async () => {
    await Moralis.start({
      appId: process.env.NEXT_PUBLIC_MORALIS_APP_ID,
      serverUrl: process.env.NEXT_PUBLIC_MORALIS_SERVER_URL,
    })

    const options: any = {
      chain: 'goerli',
      token_address: contractAddresses.NFT_MINT_ADDRESS,
    }

    const rinkebyNFTs = (await Moralis.Web3API.account.getNFTsForContract(
      options,
    )) as NftOwnerCollection
    const nft_strapi: StrFindResult<StrNft> = await findStrData(
      `/api/nfts?pagination[limit]=9999&filters[address][$eq]=${user.attributes.ethAddress}&filters[status][$eq]=created`,
    )
    const cidObj: any = {}
    nft_strapi.data.forEach(({ id, attributes: strNft }) => {
      strNft['id'] = id
      cidObj[strNft.cid] = strNft
    })

    let nfts: any = await Promise.all(
      rinkebyNFTs.result.map(async (nftOwner: NFTOwner) => {
        if (!nftOwner.token_uri) {
          return
        }
        const cid = nftOwner.token_uri.split('ipfs/')[1]

        const strNft = cidObj[cid] as StrNft
        if (!strNft) {
          return
        } else {
          nftOwner.flag = strNft.flag
          nftOwner.id = strNft.id
        }
        return nftOwner
      }),
    )
    setNFTs(nfts.filter((nft: NFTOwner) => nft))
    setNftCount(NFTs.length);
  }

  const getMyListedNfts = async () => {
  
    let nfts: ListedNFT[] = []
    const listedNfts = (await Moralis.executeFunction({
      functionName: 'getMyListedNfts',
      abi: nftmarket_abi,
      contractAddress: contractAddresses.NFT_MARKET_ADDRESS,
    })) as ListedNFT[]

    nfts = await Promise.all(
      listedNfts.map(async (listedNft: ListedNFT) => {
        const cid = listedNft.tokenURI.split('ipfs/')[1]
        const { data } = await axios.get('https://ipfs.io/ipfs/' + cid)
        data.tokenId = Number(listedNft.tokenId)
        return data
      }),
    )
    setListedNfts(nfts)
    setNftCount(listedNfts.length)
  }

  const getMyOwnedNfts = async () => {
    let nfts: ListedNFT[] = []
    const ownedNfts = (await Moralis.executeFunction({
      functionName: 'getOwnedNfts',
      abi: nftmarket_abi,
      contractAddress: contractAddresses.NFT_MARKET_ADDRESS,
    })) as ListedNFT[]

    nfts = await Promise.all(
      ownedNfts.map(async (ownedNft: ListedNFT) => {
        const cid = ownedNft.tokenURI.split('ipfs/')[1]
        const { data } = await axios.get('https://ipfs.io/ipfs/' + cid)

        data.tokenId = Number(ownedNft.tokenId)
        return data
      }),
    )
    setOwnedNfts(nfts)
    setNftCount(ownedNfts.length)
  }

  
  const handleInputPriceModal = (token_id:string,id:number) => {
      
    setShowModal(true);
    setCurrentTokenId(token_id)
    setId(id)
  }
  const handleSwitch = () => { 
    let Nfts = [];
    if(isAllowed){
       Nfts = NFTs.filter((nft)=>nft.flag)
       console.log(Nfts.length);
    } else {
      Nfts = NFTs.filter((nft)=>!nft.flag)
      console.log(Nfts.length);
    }

    return (
      Nfts.length > 0 ? (
        Nfts.slice(pageRange[0], pageRange[1]).map((nft: NFTOwner, idx: number) => {
          console.log(nft);
       
          const metadata = JSON.parse(nft.metadata)
          var fileType = 'image'
          metadata?.type !== undefined
            ? (fileType = metadata?.type?.split('/')[0])
            : (fileType = 'image')
          return (
            <div className=" d-flex mt-3 mx-2 py-3" key={idx}>
              <CollectionItem
                tokenID={nft.token_id}
                name={metadata.name}
                collectionType={fileType}
                itemType={fileType}
                collectionName={nft.name}
                artistName="@artistname"
                eth="1.10ETH"
                usd="1,000.23 USD"
                endTime="8h 32m 54S"
                img={metadata.image}
                onClickListing={(token_id,id)=>handleInputPriceModal(token_id,id)}
                className={!isAllowed && 'invisible'}
                type="Listing"
                id={parseInt(nft.id)}
              />
            </div>
          )
        })
      ):<div style={{marginLeft:'300px',marginTop:'-35px'}}>No exist nfts.</div>
    )
  }


  if (!userContext.user) {
    return <BaseLayout />
  }

  return (
    <BaseLayout>
      <div className="px-[120px]">
        <div className="d-flex myProfile mb-3">
          <img
            className="bg-round-8"
            src={
              userContext.user
                ? process.env.NEXT_PUBLIC_ADMIN_BASE_URL +
                  userContext.user.avatar_url
                : ''
            }
            alt="user profile"
            style={style.image}
          />
          <div className="ms-md-5 person-info">
            <h1>{username}</h1>
            <button style={style.btn_nickname} className="btn-main-hover">
              @artistname
            </button>
          </div>
        </div>
        <div className="d-flex main">
          <div className="col-12 col-md-2 person-info">
            <div className="d-flex d-flex">
              <div className="">
                <h2 className="text-white mb-0">120</h2>
                <p>Following</p>
              </div>
              <div className="" style={style.marginFollow}>
                <h2 className="text-white mb-0">140</h2>
                <p>Followers</p>
              </div>
            </div>
            <button
              style={{ width: '50%', height: '40px' }}
              className="btn-main mb-3 mt-3"
            >
              Follow
            </button>
            <div>
              <h3 className="text-white mb-3">Follow on</h3>
              <div className="d-flex align-items-center">
                <i className="fa-brands fa-instagram"></i>
                <p className="ms-2">@Intagram_username</p>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa-brands fa-twitter"></i>
                <p className="ms-2">@Twiterusername</p>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-thermometer"></i>
                <p className="ms-2">@EtH.username</p>
              </div>
            </div>

            <div className="mt-5 person-info">
              <h3 className="text-white mb-3">Bio</h3>
              <p className="text-white">
                Nulla varius ac risus at commodo. Vestibulum nec nibh massa.
                Praesent commodo odio sem, a efficitur tellus vestibulum eu.
                Vivamus vel faucibus risus, ac euismod elit. Duis efficitur
                blandit lectus sit amet pulvinar.
              </p>
            </div>
            <div className="mt-5 person-info mb-5 mb-md-0">
              <h3 className="text-white mb-3">Joined</h3>
              <p className="text-white">December 2021</p>
            </div>
          </div>
          <div
            className="col-12 col-md-10 px-[80px]"
            style={{ width: '1000px', marginLeft: '30px' }}
          >
            <div
              className="nav d-flex row m-3"
              style={{
                position: 'relative',
                height: '55px',
                borderBottom: '2px solid #521ab5',
              }}
            >
              <div
                className={`z-10 cursor-pointer col-12 col-md-3 d-flex  ps-5 align-items-center`}
                style={selectedTab === 0 ? style.selected : {}}
                onClick={(e) => setSelectedTab(0)}
              >
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-image"></i>
                  <p
                    className="text-white ms-3 fs-5"
                    style={{ cursor: 'pointer' }}
                  >
                    Created
                  </p>
                </div>
              </div>
              <div
                className={`z-10 cursor-pointer col-12 col-md-3 d-flex  ps-5 align-items-center `}
                style={selectedTab === 1 ? style.selected : {}}
                onClick={(e) => setSelectedTab(1)}
              >
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-table-cells-large"></i>
                  <p
                    className="text-white ms-3 fs-5"
                    style={{ cursor: 'pointer' }}
                  >
                    Listed
                  </p>
                </div>
              </div>
              <div
                className={`z-10 cursor-pointer col-12 col-md-3 d-flex  ps-5 align-items-center `}
                style={selectedTab === 2 ? style.selected : {}}
                onClick={(e) => setSelectedTab(2)}
              >
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-table-cells-large"></i>
                  <p
                    className="text-white ms-3 fs-5"
                    style={{ cursor: 'pointer' }}
                  >
                    Owned
                  </p>
                </div>
              </div>
              <div
                className={'col-12 col-md-3 ps-5 '}
                style={{
                  transition: 'all 0.4s ease-in-out',
                  position: 'absolute',
                  backgroundColor: '#521ab5',
                  width: 202,
                  height: '100%',
                  left: selectedTab * 202,
                }}
              ></div>
            </div>
            {selectedTab === 0 && (
              <div className="d-flex align-items-center justify-end mx-3">
                <div className="mr-4">
                  {isAllowed ? 'Allowed' : 'Not allowed'}
                </div>
                <div
                  className={`container_allow_switch ${
                    !isAllowed && 'container_allow_switch_inactive'
                  }`}
                  onClick={()=>setIsAllowed(!isAllowed)}
                >
                  <input
                    onClick={()=>setIsAllowed(!isAllowed)}
                    type="checkbox"
                    className={`allow_switch_input ${
                      isAllowed
                        ? 'allow_switch_active'
                        : 'allow_switch_inactive'
                    }`}
                  ></input>
                </div>
              </div>
            )}
            <div className="justify-content-center justify-content-lg-start d-flex flex-wrap m-3">
              <div>
                {selectedTab === 0 && (
                  <div className="d-flex flex-row">
                    {
                      handleSwitch()
                    }
                  </div>
                )}
              </div>
              <div>
                {selectedTab === 1 && (
                  <div className="d-flex flex-row">
                    {
                    listedNfts.slice(pageRange[0], pageRange[1]).map((nft: any, idx) => {
                      var fileType = 'image'
                      nft?.type !== undefined
                        ? (fileType = nft?.type?.split('/')[0])
                        : (fileType = 'image')
                      nft['itemType'] = fileType
                      nft['image'] = nft.image
                      return (
                        <div className="d-flex mt-3 py-3 mr-4" key={idx}>
                          <CollectionItem
                            tokenID={nft.tokenId}
                            name={nft.name}
                            collectionName="voex"
                            collectionType={fileType}
                            itemType={fileType}
                            artistName="@artistname"
                            eth="Ether"
                            usd="1,000USD"
                            endTime="8h 32m 54s"
                            img={nft.image}
                            id={nft.id}
                            // onClickListing={nftListing(nft.tokenId)}
                            // handleView={handleViewCollectionItem(nft)}
                          ></CollectionItem>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
              <div>
                {selectedTab === 2 && (
                  <div className="d-flex flex-row">
                    {ownedNfts.slice(pageRange[0], pageRange[1]).map((nft: any, idx) => {
                      var fileType = 'image'
                      nft?.type !== undefined
                        ? (fileType = nft?.type?.split('/')[0])
                        : (fileType = 'image')
                      nft['itemType'] = fileType
                      nft['image'] = nft.image

                      return (
                        <div className="d-flex mt-3 py-3 mr-4" key={idx}>
                          <CollectionItem
                            tokenID={nft.tokenId}
                            name={nft.name}
                            collectionName="voex"
                            collectionType={fileType}
                            itemType={fileType}
                            artistName="@artistname"
                            eth="Ether"
                            usd="1,000USD"
                            endTime="8h 32m 54s"
                            img={nft.image}
                            id={nft.id}
                            // handleView={handleViewCollectionItem(nft)}
                          ></CollectionItem>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
            
            {
              nftCount > 0 && (
                <div className="mt-6 mb-5 px-4 pagination d-flex justify-content-center">
                  <button className=" me-4">
                    {' '}
                    <i className="fa-solid fa-chevron-left"></i> Prev page{' '}
                  </button>
                  {Array.from(Array(Math.ceil(nftCount / countPerPage)), (e, i) => {
                    return <button 
                    className={clsx("pagination_page m-2",
                    selectedPageNumber === i + 1 && 'pagination_selected' )}
                    key={i}
                    onClick={handleSelectPageNumber(i + 1)}
                    > {i + 1} </button>
                  })}
                  <button className="ms-4">
                    {' '}
                    Next page <i className="fa-solid fa-chevron-right"></i>{' '}
                  </button>
                </div>
              )
            }


          </div>
        </div>
      </div>
      {
      <Modal
          size="sm" show={showModal} onHide={()=>{setShowModal(false);setPrice('')
          }}
          aria-labelledby="example-modal-sizes-title-sm"
        >
           <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className="d-flex flex-column justify-center">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="price must be greater than 0 and less than 0.0001"
                autoFocus
                value={price}
                onChange={(e)=>{
                  setPrice(e.target.value);
                  if(e.target.value < '0.0001' && e.target.value > '0'){
                    setErrorMessage(false);
                  } else {
                    setErrorMessage(true);
                  }
                }}
                
              />
             {
              
              errorMessage?(<Form.Label className="text-red-600">price is less than 0.0001</Form.Label>):''
             }
            <Button variant="btn-primary" className="custom-btn btn-hover" style={{borderRadius:'4px',height:'6', backgroundColor:'#3e10c7'}} onClick={nftListing(price,currentTokenId,id)}>OK</Button>{' '}
            </Form.Group>
          </Form>
        </Modal.Body>
        </Modal>
      }
    </BaseLayout>
  )
}

const style = {
  image: {
    width: 250,
    height: 250,
  },
  marginFollow: {
    marginLeft: '5em',
  },
  btnFollow: {
    width: '35%',
    height: '4em',
    marginTop: '1em',
    marginBottom: '2em',
    fontSize: '0.95em',
    fontWeight: 'bold',
  },
  selected: {},
  allowed: {
    backgroundColor: 'rgb(84 62 122)',
  },
  not_allowed: {
    backgroundColor: 'rgb(134 88 211)',
  },
  nav: {
    position: 'relative',
    height: '55px',
    borderBottom: '2px solid #521ab5',
  },
  nav_allow: {
    height: '30px',
  },
  btn_nickname: {
    fontSize: '0.9em',
    height: '50px',
  },
  switchTag: {
    position: 'absolute',
    backgroundColor: '#521ab5',
    width: 202,
    height: '100%',
  },
  
}

export default MyProfile

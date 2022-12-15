import React, { useState, useEffect } from 'react'
import { mask, user } from '@assets'
import { BaseLayout } from '@ui'
import { CollectionItem } from '@voex'
import { useRouter } from 'next/router'
import Moralis from 'moralis'
import { Nft, NFTOwner, NftOwnerCollection } from '@_types/nft'
import { StrFindResult, StrNft } from '@_types/strApi'
import { findStrData } from 'apis/strApi'
import nftmarket_abi from 'contracts/nftmarket.json'
import contractAddresses from 'utils/contractAddresses'
import { useListedNfts } from '@hooks/web3'
import { useMoralis } from 'react-moralis'
import axios from 'axios'
interface ListedNFT {
  contractAdress: string
  tokenId: Number
  seller: string
  owner: string
  price: Number
  tokenURI: string
  listed: boolean
}
const MarketPlace = () => {
  const { isWeb3Enabled, isWeb3EnableLoading, isAuthenticated } = useMoralis()
  const router = useRouter()
  const [visible, setVisible] = useState(true)
  const [Nfts, setNfts] = useState<ListedNFT[]>([])

  // const getNFTs = async () => {
  //   await Moralis.start({
  //     appId: process.env.NEXT_PUBLIC_MORALIS_APP_ID,
  //     serverUrl: process.env.NEXT_PUBLIC_MORALIS_SERVER_URL,
  //   })

  //   const options: any = {
  //     chain: 'rinkeby',
  //     address:  process.env.NFT_MINT_ADDRESS,
  //     // address:'0x2eA9B45B3C99662a378bA39202E2F5D57ED91496'
  //   }

  //   const rinkebyNFTs = (await Moralis.Web3API.token.getNFTOwners(
  //     options,
  //   )) as NftOwnerCollection

  //   console.log(rinkebyNFTs);

  //   const nft_strapi: StrFindResult<StrNft> = await findStrData('/api/nfts')

  //   const cidObj: any = {}
  //   nft_strapi.data.forEach(({ attributes: strNft }) => {
  //     cidObj[strNft.cid] = strNft
  //   })

  //   let nfts: NFTOwner[] = []
  //   rinkebyNFTs.result.forEach((nftOwner: NFTOwner) => {
  //     const cid = nftOwner.token_uri.split('ipfs/')[1]
  //     const strNft = cidObj[cid] as StrNft
  //     if (strNft && strNft.flag) nfts.push(nftOwner)
  //   })

  //   setNFTs(nfts)
  // }

  const getNFTs = async () => {
    const tokenIds = []
    let nfts: ListedNFT[] = []
    const listedNfts = (await Moralis.executeFunction({
      functionName: 'getListedNfts',
      abi: nftmarket_abi,
      contractAddress: contractAddresses.NFT_MARKET_ADDRESS,
    })) as ListedNFT[]

    nfts = await Promise.all(
      listedNfts.map(async (listedNft: ListedNFT) => {
        console.log(listedNft,'listedNft');
        const cid = listedNft.tokenURI.split('ipfs/')[1]
        const { data } = await axios.get('https://ipfs.io/ipfs/' + cid)

        data.tokenId = Number(listedNft.tokenId)
        data.price = Number(listedNft.price)
        return data
      }),
    )
    setNfts(nfts)
   
  }

  useEffect(() => {
    if (isAuthenticated && isWeb3Enabled) {
      getNFTs()
    }
  }, [isAuthenticated, isWeb3Enabled])

  // useEffect(()=>{
  //   getNFTs()
  // })

  const handleViewCollectionItem = (item: any) => () => {
   
    localStorage.setItem('selected_item', JSON.stringify(item))
    router.push(`/buy/${item.tokenId}`)
  }

  return (
    <BaseLayout>
      <main>
        <div className="mb-4 d-flex flex-wrap">
          <div className="row m-0 row-cols-1 col-12  mb-3">
            <div className="row d-flex flex-wrap align-middle justify-content-start">
              {!visible ? (
                <div
                  className="lg_co d-flex justify-content-end"
                  style={{
                    backgroundColor: '#401091',
                    borderRadius: '8px',
                    position: 'absolute',
                  }}
                >
                  <div
                    className="card"
                    style={{ backgroundColor: '#401091', paddingTop: '10px' }}
                  >
                    <h5 className="card-title fs-4 text-end text-white">
                      <button onClick={() => setVisible(true)}>
                        <i className="fa-solid fa-bars"></i>
                      </button>
                    </h5>
                  </div>
                </div>
              ) : null}
              {visible ? (
                <div className="col-lg-3 d-flex justify-content-center degFilter">
                  <div className="card degFilter">
                    <h5 className="card-title fs-4 text-end text-white">
                      <button onClick={() => setVisible(false)}>x</button>
                    </h5>
                    <div className="row d-flex justify-content-center">
                      <div className="col-10 justify-content-center">
                        <h3 className="text-white">Price range</h3>
                        <div className="row">
                          <div className="col-6">
                            <label htmlFor="">Min</label>
                            <input
                              className="form-control input"
                              type="number"
                              style={{
                                borderRadius: '7px',
                                width: '100%',
                                backgroundColor: 'white',
                              }}
                              placeholder="ETH"
                            />
                          </div>
                          <div className="col-6">
                            <label htmlFor="">Max</label>
                            <input
                              className="form-control input"
                              type="number"
                              style={{
                                borderRadius: '7px',
                                width: '100%',
                                backgroundColor: 'white',
                              }}
                              placeholder="ETH"
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn-main"
                            style={{ width: '100%', height: '50px' }}
                          >
                            Set Price
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row d-flex justify-content-center">
                      <div className="col-10 justify-content-center">
                        <h3 className="text-white">Sale type</h3>
                        <div className="row">
                          <div className="col-6">
                            <button
                              className="btn-main"
                              style={{ width: '90%', height: '50px' }}
                            >
                              Buy
                            </button>
                          </div>
                          <div className="col-6">
                            <button
                              className="btn-main"
                              style={{ width: '90%', height: '50px' }}
                            >
                              Auction
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row d-flex justify-content-center">
                      <div className="col-10 escroll">
                        <h3 className="text-white">Collection</h3>
                        <ul className="">
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Collection
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '100%',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Collection
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '100%',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Collection
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '100%',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Collection
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '100%',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Collection
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '100%',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Collection
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '100%',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr />
                    <div className="row d-flex justify-content-center">
                      <div className="col-10 escroll">
                        <h3 className="text-white">Artist</h3>
                        <ul>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Artist
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '7px',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Artist
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '7px',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Artist
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '7px',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Artist
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '7px',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Artist
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '7px',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Artist
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '7px',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr />
                    <div className="row d-flex justify-content-center">
                      <div className="col-10 escroll">
                        <h3 className="text-white">Category</h3>
                        <ul>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Category
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '7px',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Category
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '7px',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Category
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '7px',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Category
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '7px',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Category
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '7px',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item mb-2" href="#">
                              <input type="checkbox" name="" id="" /> Category
                              Name{' '}
                              <img
                                src={user.src}
                                alt="user profile"
                                style={{
                                  width: '20px',
                                  borderRadius: '7px',
                                  display: 'inline-flex',
                                  marginLeft: '5px',
                                }}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr style={{ borderColor: 'white', border: '1px' }} />
                </div>
              ) : null}
              <div
                className={visible ? 'col-12 col-lg-9' : 'col-12 col-lg-11'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}
              >
                <div className="text-white text-center">
                  <h1 className="text-white">Marketplace</h1>
                  <p style={{ color: '#CBCBCB' }}>**10,725 NFTs</p>
                </div>
                <div className="col-12 justify-content-center m-3 justify-content-lg-start mt-2 d-flex flex-wrap">
                  {/* {NFTs.map((nft: any, idx: number) => {
                    const metadata = JSON.parse(nft.metadata)
                    var fileType = 'image'
                    metadata?.type !== undefined
                      ? (fileType = metadata?.type?.split('/')[0])
                      : (fileType = 'image')
                    nft['itemType'] = fileType
                    nft['image'] = metadata.image

                    return (
                      <div className=" d-flex mt-3 mx-3 py-3" key={idx}>
                        <CollectionItem
                          tokenID={nft.token_id}
                          name={metadata.name}
                          collectionName={nft.name}
                          collectionType={fileType}
                          artistName="@artistname"
                          eth={fileType}
                          usd="1,000.23 USD"
                          endTime="8h 32m 54S"
                          img={metadata.image}
                          itemType={fileType}
                          onClick={handleViewCollectionItem(nft)}
                        ></CollectionItem>
                      </div>
                    )
                  })} */}
                  {Nfts.map((nft: any, idx) => {
                    console.log(nft,'nft');
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
                          handleView={handleViewCollectionItem(nft)}
                          id={nft.id}
                        ></CollectionItem>
                      </div>
                    )
                  })}
                </div>
                <div className="mt-6 mb-5 px-4 pagination d-flex justify-content-center">
                  <button className=" me-4">
                    {' '}
                    <i className="fa-solid fa-chevron-left"></i> Prev page{' '}
                  </button>
                  <button className="pagination_page pagination_selected ">
                    {' '}
                    1{' '}
                  </button>
                  <button className="pagination_page"> 2 </button>
                  <button className="pagination_page"> 3 </button>
                  <button className="pagination_page"> 4 </button>
                  <button className="pagination_page"> 5 </button>
                  <button className="pagination_page"> 6 </button>

                  <button className="ms-4">
                    {' '}
                    Next page <i className="fa-solid fa-chevron-right"></i>{' '}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </BaseLayout>
  )
}

const style = {
  container: {
    marginLeft: '10em',
    marginTop: '2em',
    marginRight: '10em',
  },
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
  created: {
    backgroundColor: '#5217B5',
  },
  owned: {
    backgroundColor: '#401091',
  },
  nav: {
    height: '95px',
  },
  btn_nickname: {
    fontSize: '0.9em',
    height: '50px',
  },
  user: {
    width: '25px',
    margin: '5px',
    borderRadius: '4px',
  },
  WebKitCSSMatrix: {
    background: '#e1e1e1',
    borderRadius: '4px',
  },
}

export default MarketPlace

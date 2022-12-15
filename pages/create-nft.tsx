import React, { useContext, useEffect, useRef } from 'react'
import { useForm } from '@hooksVoex'
import { BaseLayout } from '@ui'
import Router from 'next/router'
import {
  InputCreateNft,
  InputWithModalAttributeNft,
  InputWithModalPropertyNft,
  SwitchPropertieNft,
  ContainerPage,
} from '@voex'

import { Button, Upload } from 'antd'

import { useState } from 'react'
import { PinataRes } from '@_types/nft'
import axios from 'axios'
import { useWeb3 } from '@providers/web3'
import { ethers } from 'ethers'
import { toast } from 'react-toastify'
import { useMoralis } from 'react-moralis'
import { NftMeta2 } from '@_types/nft'
import { useIPFS } from '../hooks/useIPFS'
import abi from '../contracts/nftmint.json'
import { UserContext } from 'context/PreferencesProvider'
import contractAddresses from "utils/contractAddresses"
const initialState = {
  Explicit_content: false,
  Freezing: '',
  Supply: '',
  Unlock_content: false,
  blockChain: 'ETH',
  collection: '',
  description: '',
  externalLink: '',
  name: '',
}

const CreateNft = () => {
  const { mintNft } = useIPFS()
  const userContext = useContext(UserContext)
  const [uploading, setUploading] = useState(false)
  const [fileUploadRefresher, setFileUploadRefresher] = useState(1)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const { ethereum, contract } = useWeb3()
  const { isAuthenticated, user, Moralis }: any = useMoralis()
  const [nftURI, setNftURI] = useState('')
  const [price, setPrice] = useState('0.1')
  const [hasURI, setHasURI] = useState(false)
  const [nftMeta, setNftMeta] = useState<any>({
    Explicit_content: true,
    Freezing: 'Si',
    Supply: '2',
    Unlock_content: true,
    blockChain: 'ETH',
    collection: 'SINGLE',
    description: '',
    externalLink: 'ETH',
    name: '',
    image: '',
    traits: [],
    levels: [],
    stats: [],
  })

  const onFileChange = ({ file: newFile }: any) => {
    setFile(newFile)
  }

  const clearUpload = () => {
    setFile(null)
    setFileUploadRefresher(0)
    setFileUploadRefresher(1)
  }

  const mintAndGo = async () => {
    if (!isAuthenticated) return toast.error('please connect wallet')
    setUploading(true)
    const cid = await mintNft(name, description, file)
  
    const _tokenURI = `https://ipfs.moralis.io:2053/ipfs/${cid}`
    const minter = await Moralis.executeFunction({
      functionName: 'mint',
      abi,
      contractAddress: contractAddresses.NFT_MINT_ADDRESS,
      params: {
        _tokenURI,
      },
    })

    await axios.post(process.env.NEXT_PUBLIC_ADMIN_BASE_URL + `/api/nfts`, {
      data: {
        cid: cid,
        address: user.attributes.ethAddress,
        flag: false,
        status:'created'
      },
    })
    setUploading(false)
    setName('')
    setDescription('')
    clearUpload()
    toast.success('NFT created succefuly!')
  }

  // const getSignedData = async () => {
  //   const messageToSign = await axios.get('/api/verify')
  //   const accounts = (await ethereum?.request({
  //     method: 'eth_requestAccounts',
  //   })) as string[]
  //   const account = accounts[0]

  //   const signedData = await ethereum?.request({
  //     method: 'personal_sign',
  //     params: [
  //       JSON.stringify(messageToSign.data),
  //       account,
  //       messageToSign.data.id,
  //     ],
  //   })

  //   return { signedData, account }
  // }

  // const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
  // 	if (!e.target.files || e.target.files.length === 0) {
  // 		console.error('Select a file');
  // 		return;
  // 	}
  // 	const file = e.target.files[0];
  // 	const buffer = await file.arrayBuffer();
  // 	const bytes = new Uint8Array(buffer);

  // 	try {
  // 		const { signedData, account } = await getSignedData();
  // 		const promise = axios.post('/api/verify-image', {
  // 			address: account,
  // 			signature: signedData,
  // 			bytes,
  // 			contentType: file.type,
  // 			fileName: file.name.replace(/\.[^/.]+$/, ''),
  // 		});

  // 		const res = await toast.promise(promise, {
  // 			pending: 'Uploading image',
  // 			success: 'Image uploaded',
  // 			error: 'Image upload error',
  // 		});

  // 		const data = res.data as PinataRes;

  // 		const obj = {
  // 			...nftMeta,
  // 			image: `${process.env.NEXT_PUBLIC_PINATA_DOMAIN}/ipfs/${data.IpfsHash}`,
  // 		};

  // 		setNftURI(`${process.env.NEXT_PUBLIC_PINATA_DOMAIN}/ipfs/${data.IpfsHash}`);
  // 		setNftMeta(obj);

  // 	} catch (e: any) {
  // 		console.error(e.message);
  // 	}
  // };

  // const uploadMetadata = async (param: any) => {
  //   try {
  //     const { signedData, account } = await getSignedData()

  //     const promise = axios.post('/api/verify', {
  //       address: account,
  //       signature: signedData,
  //       nft: param,
  //     })

  //     const res = await toast.promise(promise, {
  //       pending: 'Uploading metadata',
  //       success: 'Metadata uploaded',
  //       error: 'Metadata upload error',
  //     })

  //     const data = res.data as PinataRes
  //     setNftURI(
  //       `${process.env.NEXT_PUBLIC_PINATA_DOMAIN}/ipfs/${data.IpfsHash}`,
  //     )
  //     const Uri = `${process.env.NEXT_PUBLIC_PINATA_DOMAIN}/ipfs/${data.IpfsHash}`

  //     createNft(Uri)
  //   } catch (e) {
  //     console.error(e.message)
  //   }
  // }

  // const createNft: any = async (uri: any) => {
  //   try {
  //     const nftRes = await axios.get(nftURI)
  //     const content = nftRes.data
  //     const tx = await contract?.mintToken(
  //       uri,
  //       ethers.utils.parseEther(price),
  //       {
  //         value: ethers.utils.parseEther((0.025).toString()),
  //       },
  //     )
  //     await toast.promise(tx!.wait(), {
  //       pending: 'Minting Nft Token',
  //       success: 'Nft has ben created',
  //       error: 'Minting error',
  //     })
  //   } catch (e) {
  //     console.error(e.message)
  //   }
  // }

  const { values, handleInputChange }: any = useForm(initialState)


  // const onPreview = async (file: any) => {
  //   let src = file.url
  //   if (!src) {
  //     src = await new Promise((resolve) => {
  //       const reader = new FileReader()
  //       reader.readAsDataURL(file.originFileObj)
  //       reader.onload = () => resolve(reader.result)
  //     })
  //   }
  //   const image = new Image()
  //   image.src = src
  //   const imgWindow: any = window.open(src)
  //   imgWindow.document.write(image.outerHTML)
  // }

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault()
  //   console.clear()

  //   //property
  //   const properties: any = []
  //   const levels: any = []
  //   const stats: any = []
  //   //incluir en el array con includes los campos que tengan al inico property
  //   const keysProperties = Object.keys(values).filter((key) =>
  //     key.includes('property'),
  //   )
  //   keysProperties.forEach((key) => {
  //     const property = {
  //       name: key,
  //       value: values[key],
  //     }
  //     properties.push(property)
  //   })

  //   const keysLevels = Object.keys(values).filter((key) =>
  //     key.includes('Level'),
  //   )
  //   keysLevels.forEach((key) => {
  //     const level = {
  //       name: key,
  //       value: values[key],
  //     }
  //     levels.push(level)
  //   })

  //   const keysStats = Object.keys(values).filter((key) => key.includes('Stats'))
  //   keysStats.forEach((key) => {
  //     const stat = {
  //       name: key,
  //       value: values[key],
  //     }
  //     stats.push(stat)
  //   })

  //   const arrayProperties = []
  //   //for de dos en dos

  //   for (let i = 0; i < properties.length; i += 2) {
  //     const property = {
  //       name: properties[i].value,
  //       value: properties[i + 1].value,
  //     }
  //     arrayProperties.push(property)
  //   }

  //   const arrayLevels = []
  //   //for de dos en dos

  //   for (let i = 0; i < levels.length; i += 3) {
  //     const level = {
  //       name: levels[i].value,
  //       min: levels[i + 1].value,
  //       max: levels[i + 2].value,
  //     }
  //     arrayLevels.push(level)
  //   }

  //   const arrayStats = []
  //   //for de dos en dos

  //   for (let i = 0; i < stats.length; i += 3) {
  //     const stat = {
  //       name: stats[i].value,
  //       min: stats[i + 1].value,
  //       max: stats[i + 2].value,
  //     }
  //     arrayStats.push(stat)
  //   }
  //   await new Promise((resolve) => setTimeout(resolve, 3000))
  //   //esperar 3 segundos
  //   const nft = {
  //     ...values,
  //     image: nftURI,
  //     traits: arrayProperties,
  //     levels: arrayLevels,
  //     stats: arrayStats,
  //   }

  //   setNftMeta(nft)
  //   await uploadMetadata(nft)
  // }

  // const final = async () => {
  //   await createNft()
  // }

  useEffect(() => {
    if (!userContext.user) {
      Router.push('/login')
    }
  }, [])

  if (!userContext.user) {
    return <BaseLayout />
  }

  return (
    <BaseLayout>
      <ContainerPage>
        <div className="d-flex flex-column align-items-center mb-5 ">
          <div className="col-10 col-md-7 ">
            <h1 className="text-white text-center">Create New Item</h1>
            
            <form className="mt-5" >
              
              <div className="mt-4 text-white col-10 mx-5">
            <h6 className="text-white">Required fields*</h6>
              <div>
                <h6 className="mb-4"> Image, Video, Audio, or 3D Model *</h6>
                {/* {nftMeta.image === '' ? (
									<div
										className='col-10  d-flex align-items-center justify-content-center border create_nft_border'
									>
										<i className='fa-regular fa-image h1 text-secondary'></i>
									</div>
								) : (
									<img src={nftMeta.image} className='create_nft_image' />
								)} */}
                {fileUploadRefresher && (
                  <Upload
                    accept="*/*"
                    file={file}
                    listType="picture-card"
                    onChange={onFileChange}
                    // onPreview={onPreview}
                    onRemove={() => {
                      clearUpload()
                      return true
                    }}
                    beforeUpload={() => {
                      return false
                    }}
                  >
                    {!file && '+ Upload'}
                  </Upload>
                )}
              </div>
                <InputCreateNft
                  title="Name *"
                  nameInput="name"
                  typeInput="textArea"
                  placeholder="Item name"
                  onChange={(e) => setName(e.target.value)}
                  valueInput={name}
                />
                <InputCreateNft
                  title="External link"
                  caption=" VOEX will include a link to this URL on this item’s detail page, so that uses can click to learn more about it. You are
                            welcome to link to your own webpage with more details."
                  placeholder="http://yoursite.io/item/123"
                  typeInput="text"
                  nameInput="externalLink"
                  onChange={handleInputChange}
                  // onChange={e=>setExternalLink(e.target.value)}
                  valueInput={values.externalLink}
                />

                <InputCreateNft
                  title="Description"
                  caption="The description will be included on the item’s detail page underneath its image. Markdown syntax is supported."
                  placeholder="Provide a detailed description of your item"
                  typeInput="textArea"
                  nameInput="description"
                  onChange={(e) => setDescription(e.target.value)}
                  valueInput={description}
                />

                <div>
                  <label className="mb-2 fw-bold fs-5"> Collection</label>
                  <p className="fs-6">
                    This is the collection where your item will appear.
                  </p>
                  <select
                    value={values.collection}
                    onChange={handleInputChange}
                    className="form-select"
                    name="collection"
                  >
                    <option className="text-secondary" value="DEFAULT" disabled>
                      Select collection
                    </option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                  </select>
                </div>

                <InputWithModalPropertyNft
                  title="Properties"
                  caption="Textual traits that show up as rectangles"
                  basicName="modal1"
                  modalTitle="Add properties"
                  values={values}
                  onChange={handleInputChange}
                  modalCaption="Properties show up underneath your item, are clickable, and can be filtered in your collections’s sidebar."
                />

                <InputWithModalAttributeNft
                  title="Levels"
                  caption="Numerical traits that show as a progress bar"
                  titleModal="Add levels"
                  basicName="Level"
                  captionModal="Levels show up underneath your item, are clickable, and can be filtered in your collection’s sidebar."
                  values={values}
                  onChange={handleInputChange}
                />

                <InputWithModalAttributeNft
                  title="Stats"
                  caption="Numerical traits that just show as numbers"
                  titleModal="Add Stats"
                  basicName="Stats"
                  icon="fa-solid fa-star"
                  captionModal="Stats show up underneath your item, are clickable, and can be filtered in your collection’s sidebar."
                  values={values}
                  onChange={handleInputChange}
                />

                <SwitchPropertieNft
                  icon="fa fa-lock"
                  name="Unlock_content"
                  setValue={handleInputChange}
                  title="Unlockable Content"
                  caption="Include unlockable content that can only be revealed by the owner of the item."
                />

                <SwitchPropertieNft
                  icon="fa-solid fa-triangle-exclamation"
                  title="Explicit & Sensitive Content"
                  caption="Set this item as explicit and sensitive content"
                  name="Explicit_content"
                  setValue={handleInputChange}
                />

                <InputCreateNft
                  title="Supply"
                  caption="The number of items that can be minted No gas cost to you!"
                  placeholder="1"
                  customClass="mt-4"
                  nameInput="Supply"
                  onChange={handleInputChange}
                  valueInput={values.Supply}
                />

                <div>
                  <label className="mb-2 fw-bold fs-5"> Blockchain</label>

                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="blockChain"
                    value={values.blockChain}
                    onChange={handleInputChange}
                  >
                    <option value="ETH">Ethereum</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <InputCreateNft
                  customClass="mt-4"
                  title="Freezing metadata"
                  caption="Freezing your metadata will allow you to permanently lock and store all of this item’s content in decentralized file storage."
                  placeholder="To freeze your metadata, you must create your item first."
                  nameInput="Freezing"
                  onChange={handleInputChange}
                  valueInput={values.Freezing}
                />

                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  style={{ width: '100%' }}
                  className="btn_purple mt-4"
                  loading={uploading}
                  onClick={() => mintAndGo()}
                >
                  Create
                </Button>
                {/* <button className='btn_purple mt-4' typeof='submit'>
									create
								</button> */}
              </div>
            </form>
          </div>
        </div>
      </ContainerPage>
    </BaseLayout>
  )
}

export default CreateNft

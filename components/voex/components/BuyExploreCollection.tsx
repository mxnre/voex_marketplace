import React, { useState, useEffect } from 'react'
import { mask, user } from '@assets'
import { BaseLayout } from '@ui'
import { CollectionItem } from '@voex'
import { useRouter } from 'next/router'
import Moralis from 'moralis'

export const BuyExploreCollection = () => {
  const router = useRouter()
  const [NFTs, setNFTs] = useState([])
  const [acquired, setAcquired] = useState(false)

  const getNFTs = async () => {
    // await Moralis.start({
    //   appId: process.env.NEXT_PUBLIC_MORALIS_APP_ID,
    //   serverUrl: process.env.NEXT_PUBLIC_MORALIS_SERVER_URL,
    // })

    // const options: any = {
    //   chain: 'rinkeby',
    //   address: '0xa36d476Be4759aa9d676e7E92b1b100d6C6D90B2',
    //   limit:'5'
   
    // }
    // const rinkebyNFTs = await Moralis.Web3API.token.getNFTOwners(options)
    // const nftResult: any = rinkebyNFTs.result
   const nftResult :any = localStorage.getItem('allowed_nfts');
  
    setNFTs(JSON.parse(nftResult))
  }

  useEffect(() => {
    if (!acquired) {
      getNFTs()
    }
  }, [acquired])
  
  const handleViewCollectionItem = (item: any) => () => {
    localStorage.setItem('selected_item', JSON.stringify(item))
    router.push(`/buy/${item.token_id}`)
  }

  return (
    <>
      <div className="d-flex flex-column  align-items-center justify-content-center py-5 mb-5 ">
        <div className="col-11 col-xl-8  d-flex justify-content-between align-items-center     d-flex flex-wrap  mt-4">
          <h2 className="text-white">Explore the collection</h2>
          <button className="btn-main-hover px-4">View all</button>
        </div>
        <div></div>
        <div className="col-12 justify-content-center mt-5 d-flex flex-wrap">
          {NFTs.map((nft: any, idx) => {
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
          })}
        </div>
      </div>
      
    </>
  )
}

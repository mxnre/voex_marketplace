import { audioImg, docImg, nftImg, user, videoImg } from '@assets'
import { useNft } from 'use-nft'
import { useEffect } from 'react'
import  contractAddress  from "../../../utils/contractAddresses"

interface Props {
  img: string
  collectionName: string
  collectionType: string
  name: string
  eth: string
  usd: string
  artistName: string
  endTime?: string
  userListed?: string
  tokenID: string
  bfImg: string
}
export const CollectionItemDefalut = ({
  img,
  collectionName,
  collectionType,
  name,
  eth,
  usd,
  artistName,
  endTime,
  userListed,
  tokenID,
  bfImg,
}: Props) => {
  const { loading, error, nft } = useNft(
    contractAddress.NFT_MINT_ADDRESS,
    tokenID,
  )

  const ShowNftInfo = () => {
    console.log(nft);
    switch (collectionType) {
      case 'image':
        return <img className="collection_item_img" src={bfImg} />
        break
      case 'audio':
        return <img className="collection_item_img" src={audioImg.src} />
        break
      case 'video':
        return <img className="collection_item_img" src={videoImg.src} />
        break
      case 'application':
        return <img className="collection_item_img" src={docImg.src} />
        break
      default:
        return <img className="collection_item_img" src={bfImg} />
        break
    }
  }
  return (
    <div className="collection_item  mt-3 ">
      <div>
        <div>
          <div className=" thankYouUser position-absolute m-2 mt-2 ">
            <img src={img} />
            <strong className="">@{name}</strong>
          </div>
          <ShowNftInfo />
        </div>

        <div className="px-3">
          <div className="  mt-3 bg-transparent d-flex ">
            <img className="buy_nft_collection_img me-2" src={img} />
            <strong className="text-dark">{collectionName}</strong>
          </div>
          <h3 className="mt-2 mb-0 text-dark font_family_primary">
            {nft?.name}
          </h3>
        </div>
      </div>

      <div className="p-3 d-flex mt-3 bg-secondary-light text-dark ">
        <div className="col-6 p-1 text-dark">
          <div>
            <strong className="text-dark">Current Bid</strong>
          </div>
          <div className="d-flex flex-column">
            <strong className="text-purple fs-5">{eth}</strong>
            <small className="text-dark">{usd}</small>
          </div>
        </div>
        <div className="col-6 p-1 text-dark">
          <div className="d-flex flex-column">
            {endTime ? (
              <>
                <strong className="text-dark">Ending in </strong>
                <strong className="text-purple fs-5">{endTime}</strong>
              </>
            ) : (
              <>
                <strong className="text-dark">Listed by </strong>
                <div className="  mt-3 bg-transparent d-flex ">
                  <img className="buy_nft_collection_img me-2" src={user.src} />
                  <strong className="text-dark">{userListed}</strong>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

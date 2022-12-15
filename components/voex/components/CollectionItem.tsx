import { user } from '@assets'
import ShowNftInfo from '@voex/components/ShowNftInfo'

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
  itemType: string
  className?: boolean | string
  onClick?: () => void
  onClickListing?:(tokenID:string,id:number)=>void
  handleView?:()=>void
  type?: string
  price?:number
  id:number | 0
}
export const CollectionItem = ({
  img,
  collectionName,
  name,
  eth,
  usd,
  artistName,
  endTime,
  userListed,
  itemType,
  className,
  tokenID,
  id,
  onClickListing,
  handleView: onClickView,
  type,
  price
}: Props) => {
  return (
    <div className="collection_item  mt-3" onClick={onClickView}>
      <div>
        <div className="">
          <div className=" thankYouUser position-absolute m-2 mt-2 ">
            {/* <img src={img} /> */}
            <strong className="">{artistName}</strong>
          </div>
        </div>
        <div className="collection_item_img">
          <ShowNftInfo img={img} type={itemType} className="h-full" />
        </div>
        <div className="px-3">
          <div className="  mt-3 bg-transparent d-flex ">
            <strong className="text-dark">{collectionName}</strong>
          </div>
          <h3 className="mt-2 mb-0 text-dark font_family_primary">{name}</h3>
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
          {type && (
            <div
              className={
                `d-flex justify-content-center align-items-center py-3 ` +
                className
              }
            >
              <button
                style={{ backgroundColor: '#16053a' }}
                className="px-2 py-2 rounded-[2px] mr-2"
                onClick={(e) => {
                  e.stopPropagation()
                  onClickListing && onClickListing(tokenID,id)
                }}
              >
                Listing
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

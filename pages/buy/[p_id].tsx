import { BaseLayout } from "@ui";
import { BuyNftHeader,BuyNftDetail,BuyExploreCollection } from "@voex";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Moralis from "moralis/types";
import constants from 'utils/constants'



interface NFT {
  description?:string
  fileType?:string
  image?:string
  itemType?:string
  name?:string
  tokenId?:number
  type?:string
  price:number
}
const Buy = () => {

  const router = useRouter()
  const { p_id } = router.query
  const [nft, setNft] = useState<NFT>()
  useEffect(() => {
    let item: any = localStorage.getItem('selected_item') || ''
    let decimal = constants.DECIMAL;
    let cid = localStorage.getItem('cid')
    if (item) {
      item = JSON.parse(item)
      // const metadata = JSON.parse(item.metadata)
      var fileType = 'image'
      item?.type !== undefined
        ? (fileType = item?.type?.split('/')[0])
        : (fileType = 'image')
      item['image'] = item.image
      item['fileType'] = fileType
      item['price'] = item.price / decimal
      setNft(item)
    }
  }, [p_id])
  return (
    <BaseLayout>
    {nft &&<BuyNftHeader Nft ={nft} />}
     <BuyNftDetail/>
     {/* <BuyExploreCollection/> */}
    </BaseLayout>
  );
};
export default Buy;

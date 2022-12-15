import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useMoralis } from 'react-moralis'
import ShowNftInfo from '@voex/components/ShowNftInfo'
import PreviewModal from '@voex/components/modal/PreviewModal'
import CheckOutModal from './modal/CheckOutModal'
import contractAddresses from 'utils/contractAddresses'
import Router from 'next/router'
import constants from 'utils/constants'
interface NFT {
  description?: string
  fileType?: string
  image?: string
  name?: string
  tokenId?: number
  type?: string
  price:number | 0
  itemType?: string
}
export const BuyNftHeader = ({ Nft }: { Nft: NFT }) => {
  const { isAuthenticated, Moralis }: any = useMoralis()
  const [showPreviewModal, setShowPreviewModal] = useState(false)
  const [showCheckOutModal, setShowCheckOutModal] = useState(false)
  
  const handleView = () => {
    setShowPreviewModal(true)
  }
  const handleBuyNow = async () => {
    if (!isAuthenticated) return toast.error('please connect wallet')
    setShowCheckOutModal(true)
  }

  // const completPurchase = async () => {
    
  //   return;
  //   // Moralis.executeFunction({
  //   //   functionName: 'approve',
  //   //   abi: nftmint_abi,
  //   //   contractAddress: contractAddresses.NFT_MINT_ADDRESS,
  //   //   params: {
  //   //     to: contractAddresses.NFT_MARKET_ADDRESS,
  //   //     tokenId: parseInt(token_id),
  //   //   },
  //   // }).then(async () => {
  //   //   confirm('Approved correctly.Would you buy NFT?')
  //      await Moralis.executeFunction({
  //       functionName: 'buyNft',
  //       abi: nftmarket_abi,
  //       contractAddress: contractAddresses.NFT_MARKET_ADDRESS,
  //       params: {
  //         _nftContract: contractAddresses.NFT_MINT_ADDRESS,
  //         _tokenId: parseInt(token_id),
  //       },
  //       msgValue: Moralis.Units.ETH('0.001'),
  //     })
  //     setShowCheckOutModal(false)
  //     Router.push('/marketpalce')
  //   // })
  // }


  return (
    <>
      <div className="degradd" style={{ marginTop: '50px' }}>
        <div className="container_thankYou d-flex justify-content-center  me-5 ">
          <div className="d-flex flex-wrap-reverse ms-5 p-3 col-12 justify-content-center">
            <div className="col-12  d-flex  justify-content-start   col-xl-6  ">
              <div>
                <h1 className="text-start text-white m-0 title_detail_nft  ">
                  {Nft.name}
                </h1>
                <div>
                  <small className="fs-6">Minted on Jan 19, 2022</small>
                </div>

                <div className=" d-flex flex-wrap justify-content-between mt-5  col-12 col-md-11 col-lg-10 col-xl-8 ">
                  <div className="mt-2 col-12 col-md-6">
                    <span>Created by</span>
                    <div className=" thankYouUser mt-2 ">
                      <img src={''} />
                      <strong className="">@artistname</strong>
                    </div>
                  </div>

                  <div className="mt-2 col-12 col-md-6">
                    <span>Collection</span>
                    <div className="  mt-3 bg-transparent d-flex ">
                      <img className="buy_nft_collection_img me-2" src={''} />
                      <strong className="">Collection Name</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <h4 className="text-white m-0">Current price</h4>
                  <div className=" d-flex align-items-center ">
                    <i className="fa-brands fa-ethereum fs-2 me-3"></i>
                    <span className="fs-1 fw-bold">{Nft.price} ETH</span>
                  </div>
                  <small>{constants.ETH_TO_USD * Nft.price}USD</small>
                </div>

                <div className="d-flex  justify-content-between col-12 col-md-11 col-lg-11 col-xl-12 ">
                  <button
                    className="btn-main mt-5  px-5 me-3"
                    onClick={handleBuyNow}
                  >
                    <i className="fa-brands fa-ethereum fs-4 me-2"></i>
                    <span className="fs-5">Buy Now</span>
                  </button>

                  <button className="btn-main-hover mt-5  px-3">
                    <span className="fs-4">Buy with Credit Card</span>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-12 d-flex justify-content-start justify-content-xl-center justify-content-xl-start col-xl-6"
              onClick={handleView}
            >
              <ShowNftInfo
                img={Nft.image}
                type={Nft.itemType}
                preview={true}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <PreviewModal
        open={showPreviewModal}
        onClose={() => setShowPreviewModal(false)}
        className="w-[70%] h-[70%]"
      >
        <ShowNftInfo
          img={Nft.image}
          type={Nft.itemType}
          preview={true}
          className="w-full"
          autoPlay={true}
        />
      </PreviewModal>
      {showCheckOutModal && (
        <CheckOutModal
          show={showCheckOutModal}
          // tokenId={Nft.tokenId}
          onHide={() => setShowCheckOutModal(false)}
          nft={Nft}
        ></CheckOutModal>
      )}
    </>
  )
}

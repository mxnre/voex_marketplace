import Modal from 'react-bootstrap/Modal'
import constants from 'utils/constants'
import Moralis from 'moralis'
import nftmarket_abi from 'contracts/nftmarket.json'
import contractAddresses from 'utils/contractAddresses'
import Router, { useRouter } from 'next/router'
// import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const CheckOutModal = (props: any) => {
  const nft = props.nft
  const router = useRouter()

  const handleBuyNow =async (nft: any) => {
    await Moralis.executeFunction({
      functionName: 'buyNft',
      abi: nftmarket_abi,
      contractAddress: contractAddresses.NFT_MARKET_ADDRESS,
      params: {
        _nftContract: contractAddresses.NFT_MINT_ADDRESS,
        _tokenId: parseInt(nft.tokenId),
      },
      msgValue: Moralis.Units.ETH('0.0001'),
    })
    Router.push('/marketplace');
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Complete Checkout{nft.tokenId}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-row justify-center align-middle mx-[30px]">
          <div className="mx-4">
            <img src={nft.image}></img>
          </div>
          <div className="mx-4">
            <h4>{nft.description}</h4>
            <h4>{nft.itemType}</h4>
            <br />{' '}
            <i className="fa-brands fa-ethereum fs-4 me-2">{nft.price}</i>
            {nft.price * constants.ETH_TO_USD}USD
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn-main mt-5 px-3 me-3"
          onClick={() => handleBuyNow(nft)}
        >
          <i className="fa-brands fa-ethereum fs-4 me-2"></i>
          <span className="fs-5">Complete purchase</span>
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default CheckOutModal

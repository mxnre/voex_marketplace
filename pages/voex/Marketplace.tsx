import { BaseLayout } from '@ui'
import { mask, user } from '@assets'
import CollectionItem from "@voex/components/CollectionItem"
import Link from 'next/link'
const MarketPlace = () => {
  return (
    <BaseLayout>
      <main>
        <div className="mb-4 d-flex flex-wrap">
          <div className="row row-cols-1">
            <div className="row d-flex flex-wrap align-middle justify-content-start">
              <div
                className="col-12 col-lg-2 d-flex justify-content-center"
                style={{ backgroundColor: '#401091' }}
              >
                <div className="card" style={{ backgroundColor: '#401091' }}>
                  <h5 className="card-title fs-4 text-end text-white">
                    <button>x</button>
                  </h5>
                  <div className="row ">
                    <h3 className="text-white">Price range</h3>
                    <div className="col-2"></div>
                    <div className="col-5">
                      <label htmlFor="">Min</label>
                      <input
                        className="form-control input"
                        type="number"
                        style={{
                          borderRadius: '7px',
                          width: '80%',
                          backgroundColor: 'white',
                        }}
                        placeholder="ETH"
                      />
                    </div>
                    <div className="col-5">
                      <label htmlFor="">Max</label>
                      <input
                        className="form-control input"
                        type="number"
                        style={{
                          borderRadius: '7px',
                          width: '80%',
                          backgroundColor: 'white',
                        }}
                        placeholder="ETH"
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="btn-main" style={{ width: '80%' }}>
                        Set Price
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="row d-flex justify-content-center">
                    <h3 className="text-white">Sale type</h3>
                    <div className="col-5">
                      <button className="btn-main" style={{ width: '90%' }}>
                        Buy
                      </button>
                    </div>
                    <div className="col-5">
                      <button className="btn-main" style={{ width: '90%' }}>
                        Auction
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="row d-flex justify-content-center">
                    <h3 className="text-white">Collection</h3>
                    <div className="col-8">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Collection
                            Name{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Collection
                            Name{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Collection
                            Name{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Collection
                            Name{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Collection
                            Name{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Collection
                            Name{' '}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <div className="row d-flex justify-content-center">
                    <h3 className="text-white">Artist</h3>
                    <div className="col-8">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Artist Name{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Artist Name{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Artist Name{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Artist Name{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Artist Name{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Artist Name{' '}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <div className="row d-flex justify-content-center">
                    <h3 className="text-white">Category</h3>
                    <div className="col-8">
                      <ul>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Category
                            Name{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Category
                            Name{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Category
                            Name{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Category
                            Name{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Category
                            Name{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <input type="checkbox" name="" id="" /> Category
                            Name{' '}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <hr style={{ borderColor: 'white', border: '1px' }} />
              </div>
              <div className="col-12 col-lg-8">
                <div className="text-white text-center">
                  <h1 className="text-white">Marketplace</h1>
                  <p style={{ color: '#CBCBCB' }}>10,725 NFTs</p>
                </div>
                <div className="col-12 justify-content-center mt-2 d-flex flex-wrap">
                        
                  <div className=" d-flex mt-3 mx-2 py-3">
                    <CollectionItem
                      name="NFT NAME 123"
                      collectionName="Collection Name"
                      collectionType="image"
                      artistName="@artistname"
                      eth="1.10ETH"
                      usd="1,000.23 USD"
                      endTime="8h 32m 54S"
                      img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
                    />
                  </div>
                  <div className=" d-flex mt-3 mx-2 py-3">
                    <CollectionItem
                      name="NFT NAME 123"
                      collectionName="Collection Name"
                      collectionType="image"
                      artistName="@artistname"
                      eth="1.10ETH"
                      usd="1,000.23 USD"
                      endTime="8h 32m 54S"
                      img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
                    />
                  </div>
                  <div className=" d-flex mt-3 mx-2 py-3">
                    <CollectionItem
                      name="NFT NAME 123"
                      collectionName="Collection Name"
                      collectionType="image"
                      artistName="@artistname"
                      eth="1.10ETH"
                      usd="1,000.23 USD"
                      endTime="8h 32m 54S"
                      img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
                    />
                  </div>
                  <div className=" d-flex mt-3 mx-2 py-3">
                    <CollectionItem
                      name="NFT NAME 123"
                      collectionName="Collection Name"
                      collectionType="image"
                      artistName="@artistname"
                      eth="1.10ETH"
                      usd="1,000.23 USD"
                      endTime="8h 32m 54S"
                      img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
                    />
                  </div>
                  <div className=" d-flex mt-3 mx-2 py-3">
                    <CollectionItem
                      name="NFT NAME 123"
                      collectionName="Collection Name"
                      collectionType="image"
                      artistName="@artistname"
                      eth="1.10ETH"
                      usd="1,000.23 USD"
                      endTime="8h 32m 54S"
                      img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
                    />
                  </div>
                  <div className=" d-flex mt-3 mx-2 py-3">
                    <CollectionItem
                      name="NFT NAME 123"
                      collectionName="Collection Name"
                      collectionType="image"
                      artistName="@artistname"
                      eth="1.10ETH"
                      usd="1,000.23 USD"
                      endTime="8h 32m 54S"
                      img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
                    />
                  </div>
                </div>
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
}

export default MarketPlace

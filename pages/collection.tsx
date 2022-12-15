import { BaseLayout } from "@ui";
import { mask, user } from "@assets";
import React, {  useEffect } from 'react';
import Dropdownn from '../../components/voex/components/Dropdownn';
import { CollectionItem } from "@voex";

export const Collection = () => {
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap.bundle");
    },[])
    return (
        <BaseLayout>
    <div>
        <div className="main h1-title text-white">
          <main>
            <div className="row text-white d-flex">
                <div className="col-lg-3">
                    <img src={user.src} style={style.image} alt="user profile" className="card-img"/>
                </div>
                <div className="col-lg-9 pt-5">
                    <h1 className="title_detail_nft bold_title">NFT Collections</h1>
                    <p className="mb-2" style={{color:'#CBCBCB'}}>Last updated Last updated Last updated Last updated</p>
                    <div className="fw-bold d-flex align-middle mb-3" style={{width:'10em',backgroundColor:'#fff',borderRadius:'7px'}}>
                        <img src={user.src} className="user"/><span className="text-start" style={{color:'#000',margin:'12px 0',fontSize:'12px'}}>@arucha</span>
                    </div>
                    <p style={{color:'#CBCBCB',fontSize:'14px'}}>Last updated on Feb 1, 2022 at 10:58am</p>
                </div>
            </div>
         
            <div className="row text-white mb-3 pt-4 d-flex">
                <nav className="col-lg-9 navbar-expand-lg navbar-dark bg d-flex align-middle  justify-content-center justify-content-lg-start text-center" style={{backgroundColor:'#401091',borderRadius:'7px'}}>
                    <div className="container-fluid navbar-collapse align-middle">	                                         
                        <div className="col-3 mb-3 pt-3">
                            <p className="fs-1 fw-bold">
                                3,000
                            </p>
                            <p>Items</p>
                        </div>                   
                        <div className="col-3 mb-3 pt-3">
                            <p className="fs-1 fw-bold">
                                1608
                            </p>
                            <p>Owners</p>
                        </div>
                        <div className="col-3 mb-3 pt-3">
                            <p className="fs-1 fw-bold">
                                <i className="fa-brands fa-ethereum"></i>0.20 ETH
                            </p>
                            <p>Floor Price</p>
                        </div>
                        <div className="col-3 mb-3 pt-3">
                            <p className="fs-1 fw-bold">
                                270k
                            </p>
                            <p>Volume</p>
                        </div>                       
                    </div>
                </nav>
                <div className="col-lg-3 navbar-expand-lg navbar-dark bg d-flex align-middle justify-content-center pt-5" style={{margin:'auto'}}>
                    <button className="btn-main fs-6" style={{borderRadius:'6px'}}><i className="fa-solid fa-share-nodes"></i> Buy</button>
                </div>
            </div>
            <div>
                <ul className="nav justify-content-center d-flex text-center">
                    <li className="nav-item col-4 col-lg-2">
                        <a className="nav-link active text-white fs-2" aria-current="page" href="#">Items</a>
                    </li>
                    <li className="nav-item col-4 col-lg-2">
                        <a className="nav-link text-white fs-2" href="#">Activity</a>
                    </li>
                </ul>
                <div className="col-12 col-lg-12">
                            <div className="col-12 justify-content-center d-flex flex-wrap">
                                <div className=" d-flex mt-2 mx-3 py-3">
                                    <CollectionItem name="NFT Name 123" collectionType="image" collectionName="Collection Name" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" endTime="8h 32m 54S" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
                                </div>
                                <div className=" d-flex mt-2 mx-3 py-3">
                                    <CollectionItem name="NFT Name 123" collectionType="image" collectionName="Collection Name" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" endTime="8h 32m 54S" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
                                </div>
                                <div className=" d-flex mt-2 mx-3 py-3">
                                    <CollectionItem name="NFT Name 123" collectionType="image" collectionName="Collection Name" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" endTime="8h 32m 54S" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
                                </div>
                                <div className=" d-flex mt-2 mx-3 py-3">
                                    <CollectionItem name="NFT Name 123" collectionType="image" collectionName="Collection Name" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" endTime="8h 32m 54S" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
                                </div>
                                <div className=" d-flex mt-2 mx-3 py-3">
                                    <CollectionItem name="NFT Name 123" collectionType="image" collectionName="Collection Name" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" endTime="8h 32m 54S" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
                                </div>
                                <div className=" d-flex mt-2 mx-3 py-3">
                                    <CollectionItem name="NFT Name 123" collectionType="image" collectionName="Collection Name" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" endTime="8h 32m 54S" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
                                </div>
                                <div className=" d-flex mt-2 mx-3 py-3">
                                    <CollectionItem name="NFT Name 123" collectionType="image" collectionName="Collection Name" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" endTime="8h 32m 54S" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
                                </div>
                                <div className=" d-flex mt-2 mx-3 py-3">
                                    <CollectionItem name="NFT Name 123" collectionType="image" collectionName="Collection Name" artistName="@artistname" eth="1.10ETH" usd="1,000.23 USD" endTime="8h 32m 54S" img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg" />
                                </div>
                            </div>
                        </div>
            </div>
         
            
            <div className='mt-6 mb-5 px-4 pagination d-flex justify-content-center'>
                <button className=' me-4'>
                    {' '}
                    <i className='fa-solid fa-chevron-left'></i> Prev page{' '}
                </button>
                <button className='pagination_page pagination_selected '> 1 </button>
                <button className='pagination_page'> 2 </button>
                <button className='pagination_page'> 3 </button>
                <button className='pagination_page'> 4 </button>
                <button className='pagination_page'> 5 </button>
                <button className='pagination_page'> 6 </button>

                <button className='ms-4'>
                    {' '}
                    Next page <i className='fa-solid fa-chevron-right'></i>{' '}
                </button>
            </div>

          </main>
        </div>
    </div>
    </BaseLayout>
    );
}   
const style = {
    container: {
        marginLeft: "10em",
        marginTop: "2em",
        marginRight: "10em",

    },
    image: {
        width: 250,
        height: 250,
    }
}
export default Collection;
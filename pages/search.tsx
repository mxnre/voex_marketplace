import { BaseLayout } from "@ui";
import { CollectionItem, FeaturedNFTs } from "@voex";
import { useState } from "react";

const Search = () => {
  const [option, setoption] = useState("ALL");

  const handleClick = (e: any) => setoption(e.target.name);
  return (
    <BaseLayout>
      <div className="d-flex flex-column  align-items-center justify-content-center mb-5 mt-5">
        <h1 style={{fontSize:"3rem"}} className="text-white d-block   ">Search results</h1>
        <h2 className="d-block fs-6 text-secondary">43,746 results</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-11 col-xl-9 col-xxl-9  ">
          <div className="d-flex flex-wrap ">
            <button
              name="All"
              onClick={handleClick}
              style={{ width: "110px" }}
              className={`${
                option === "ALL" ? "btn-main " : "btn-main-hover"
              } py-3 m-2`}
            >
              ALL{" "}
            </button>
            <button
              name="Collections"
              onClick={handleClick}
              style={{ width: "110px" }}
              className={`${
                option === "Collections" ? "btn-main " : "btn-main-hover"
              } py-3 m-2`}
            >
              Collections{" "}
            </button>
            <button
              name="NFTs"
              onClick={handleClick}
              style={{ width: "110px" }}
              className={`${
                option === "NFTs" ? "btn-main " : "btn-main-hover"
              } py-3 m-2`}
            >
              NFTs{" "}
            </button>
            <button
              name="Profiles"
              onClick={handleClick}
              style={{ width: "110px" }}
              className={`${
                option === "Profiles" ? "btn-main " : "btn-main-hover"
              } py-3 m-2`}
            >
              Profiles{" "}
            </button>
            <button
              name="Blog"
              onClick={handleClick}
              style={{ width: "110px" }}
              className={`${
                option === "Blog" ? "btn-main " : "btn-main-hover"
              } py-3 m-2`}
            >
              Blog
            </button>
          </div>
          <div className="d-flex flex-wrap  justify-content-center justify-content-md-evenly  justify-content-xxl-around mb-5 ">
            <div className="col-12 justify-content-center  justify-content-xl-start mt-5 d-flex flex-wrap">
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
                  userListed="@username"
                  artistName="@artistname"
                  eth="1.10ETH"
                  usd="1,000.23 USD"
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
                  userListed="@username"
                  artistName="@artistname"
                  eth="1.10ETH"
                  usd="1,000.23 USD"
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
                  userListed="@username"
                  artistName="@artistname"
                  eth="1.10ETH"
                  usd="1,000.23 USD"
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
                  userListed="@username"
                  artistName="@artistname"
                  eth="1.10ETH"
                  usd="1,000.23 USD"
                  img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
                />
              </div>
            </div>

           
          </div>
        </div>

       
      
      </div>
      <div className="d-flex justify-content-center bg-purple py-5">
        <div className="col-11 col-xl-9 col-xxl-9  ">
            <h3 className="fs-1">Featured NFTs</h3>
            <div className="d-flex flex-wrap  justify-content-center justify-content-md-evenly  justify-content-xxl-around mb-5 ">
            <div className="col-12 justify-content-center  justify-content-xl-start mt-5 d-flex flex-wrap">
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
                  userListed="@username"
                  artistName="@artistname"
                  eth="1.10ETH"
                  usd="1,000.23 USD"
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
                  userListed="@username"
                  artistName="@artistname"
                  eth="1.10ETH"
                  usd="1,000.23 USD"
                  img="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-mobileMasterAt3x.jpg"
                />
              </div>
    
            </div>

           
          </div>
            </div>
            </div>
    </BaseLayout>
  );
};

export default Search;

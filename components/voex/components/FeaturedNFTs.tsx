import { CollectionItemDefalut } from "./CollectionItemDefalut";
import { mask1, mask2, mask3, mask4, user } from "@assets";

export const FeaturedNFTs = () => {
  return (
    <div className=" text-white d-flex justify-content-center py-5">
      <div className=" col-11 col-xl-9 col-xxl-9 py-5">
        <h3 className="title_detail_nft text-white ">
          Featured
          <br /> NFTs
        </h3>
        <div className="d-flex flex-wrap  justify-content-between">
          <p className="col-12 col-lg-7 mt-2">
          What you should see next on VoEx.
          </p>
          <div className="mt-2">
            <button className=" btn-main-hover">View All</button>
          </div>
        </div>

        <div className="d-flex flex-wrap  justify-content-center justify-content-md-evenly  justify-content-xxl-around mb-5 ">
          <div className="col-12 justify-content-start mt-5 d-flex flex-wrap">
            <div className=" d-flex mt-3 mx-2 py-3">
              <CollectionItemDefalut
                name="NFT NAME"
                collectionName="FTC"
                collectionType="image"
                artistName="@ken"
                eth="1.10ETH"
                usd="1,000.23 USD"
                endTime="8h 32m 54S"
                img={user.src}
                bfImg={mask1.src}
              />
            </div>
            <div className=" d-flex mt-3 mx-2 py-3">
              <CollectionItemDefalut
                name="NFT NAME"
                collectionName="Kibbe-booko"
                collectionType="image"
                userListed="@user"
                artistName="@ken"
                eth="1.10ETH"
                usd="1,000.23 USD"
                img={user.src}
                bfImg={mask2.src}
              />
            </div>

            <div className=" d-flex mt-3 mx-2 py-3">
              <CollectionItemDefalut
                name="NFT NAME"
                collectionName="LincolnLobby"
                collectionType="image"
                artistName="@ken"
                eth="1.10ETH"
                usd="1,000.23 USD"
                endTime="8h 32m 54S"
                img={user.src}
                bfImg={mask3.src}
              />
            </div>
            <div className=" d-flex mt-3 mx-2 py-3">
              <CollectionItemDefalut
                name="NFT NAME"
                collectionName="Reason"
                collectionType="image"
                artistName="@ken"
                eth="1.10ETH"
                usd="1,000.23 USD"
                endTime="8h 32m 54S"
                img={user.src}
                bfImg={mask4.src}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

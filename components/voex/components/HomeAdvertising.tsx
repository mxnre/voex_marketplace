import { walletIcon, Group32, nutIcon, imageIcon } from "@assets";
import React from "react";
import { AdvertisingItem } from "./AdvertisingItem";

export const HomeAdvertising = () => {
  return (
    <div className=" bg-white-text-dark d-flex justify-content-center py-5">
      <div className=" col-11 col-xl-9 col-xxl-9 py-5">
        <h3 className="fs-1 text-center text-xl-start">Create and sell your NFTs</h3>

        <div className="d-flex flex-wrap  justify-content-center justify-content-xl-between">
          <div className="m-1 mt-2">
            <AdvertisingItem
              img={walletIcon.src}
              title="Set up your wallet"
              description="Create your wallet on MetaMask at metamask.io."
            />
          </div>

          <div className="m-1 mt-2">

            <AdvertisingItem
              img={imageIcon.src}
              title="Create your collection"
              description="Your NFTs will now be available for sale on VoEx."
            />
          </div>

          <div className="m-1 mt-2">
            <AdvertisingItem
              img={Group32.src}
              title="Mint your NFTs"
              description="We’ll work with you to help visualize your project."
            />
          </div>

          <div className="m-1 mt-2">

            <AdvertisingItem
              img={nutIcon.src}
              title="List them for sale"
              description="We’ll help spread the word within the VoEx community."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

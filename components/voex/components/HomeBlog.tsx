import { mask, bg1, bg2 } from "@assets";
import React from "react";
import { HomeBlogItem } from "./HomeBlogItem";

export const HomeBlog = () => {
  return (
    <div className=" bg-purple d-flex justify-content-center py-5">
      <div className=" col-11 col-xl-9 col-xxl-9 py-5">
        <h3 style={{fontSize:"4rem"}} className=" font_dm  text-center text-xl-start mb-5">Blog</h3>

        <div className="mt-1">
          <HomeBlogItem
            imgUrl={bg1.src}
            text="NFT's Higher Purpose"
            tagetUrl = "https://forum.freedomfest.com/nfts-higher-purpose/"
          />
        </div>
        <div className="mt-3">
          <HomeBlogItem
            imgUrl={bg2.src}
            text="Visit VoEx at FreedomFest, July 13th-16th, Booth #731"
            tagetUrl = "https://forum.freedomfest.com"
          />
        </div>
      </div>
    </div>
  );
};

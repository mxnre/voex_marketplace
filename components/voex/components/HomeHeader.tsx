import { bg1, bg2, bg3, bg4, user } from "@assets";
import React from "react";
import { Carousel } from "react-bootstrap";

type directionType = 'Next'|'Previous';
const directionButtons = (direction:directionType) => {
  return (
    <span
      aria-hidden="true"
      className={direction === "Next" ? "button-next" : "button-prev"}
    >
     {direction=="Next"?<i className="fa-solid fa-angle-right home_carousel_right"></i>:<i className="text-white  fa-solid fa-chevron-left home_carousel_left "></i>}
    </span>
  );
};
export const HomeHeader = () => {
  return (
    <div className=" degradd ">
      <div className="container_thankYou d-flex justify-content-center  me-5  pb-5">
        <div className="d-flex flex-wrap-reverse ms-5 p-3 col-12 justify-content-center ">
          <div className="col-12 d-flex justify-content-start align-items-center col-xl-5 me-5  ">
            <div>
              <h1 className="text-start text-white m-0 title_detail_nft ">
                Dedicated to improving the human condition
              </h1>

              <div>
                <p>
                  VoEx is an NFT marketplace that provides the tools for nonprofit institutions to deepen relationships with their supporters and community and monetize their intellectual property.
                </p>
              </div>

              <div className="d-flex justify-content-center justify-content-lg-start flex-wrap   col-12 col-md-11 col-lg-11 col-xl-12 ">
                <div className="row justify-content-center justify-content-lg-start">
                  <button className="col-6 col-lg-6 btn-main mt-5  px-xl-4 me-4">
                    <i className="fa-brands fa-ethereum fs-6 me-2"></i>
                    <span className="fs-6">Explore Marketplace</span>
                  </button>

                  <button className="col-6 col-lg-6 btn-main-hover mt-5 px-xl-4 me-4">
                    <span className="fs-6">View collections</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 px-0 px-xl-4  d-flex flex-col     justify-content-start justify-content-xl-center  justify-content-xl-start  col-xl-6">
            <Carousel className=" home_carousel"
            indicators={false}
            nextIcon={directionButtons("Next")}
            prevIcon={directionButtons("Previous")}
            >
              <Carousel.Item>
                <img className=" img_detail_nft" src={bg1.src} />
                <div
                  style={{
                    width: "550px",
                    maxWidth: "100%",
                  }}
                  className="d-flex mt-3 justify-content-between  "
                >
                  <h2 className="text-white fs-4   "> NFT 1 </h2>
                  <div className=" thankYouUser  ">
                    <img className="" src={user.src} />
                    <strong className="">@ken</strong>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className=" img_detail_nft" src={bg2.src} />
                <div
                  style={{
                    width: "550px",
                    maxWidth: "100%",
                  }}
                  className="d-flex mt-3 justify-content-between  "
                >
                  <h2 className="text-white fs-4   "> NFT 2 </h2>
                  <div className=" thankYouUser  ">
                    <img className="" src={user.src} />
                    <strong className="">@ken</strong>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className=" img_detail_nft" src={bg3.src} />
                <div
                  style={{
                    width: "550px",
                    maxWidth: "100%",
                  }}
                  className="d-flex mt-3 justify-content-between  "
                >
                  <h2 className="text-white fs-4   "> NFT 3 </h2>
                  <div className=" thankYouUser  ">
                    <img className="" src={user.src} />
                    <strong className="">@ken</strong>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className=" img_detail_nft" src={bg4.src} />
                <div
                  style={{
                    width: "550px",
                    maxWidth: "100%",
                  }}
                  className="d-flex mt-3 justify-content-between  "
                >
                  <h2 className="text-white fs-4   "> NFT 4 </h2>
                  <div className=" thankYouUser  ">
                    <img className="" src={user.src} />
                    <strong className="">@ken</strong>
                  </div>
                </div>
              </Carousel.Item>

              
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

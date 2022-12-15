import { BaseLayout } from "@ui";
import { mask, user } from "@assets";

const ThankYou = () => {
  return (
    <BaseLayout>
      <div className="  container_thankYou   me-5 ">
        <div className="d-flex flex-wrap-reverse ms-5 p-3 col-12  justify-content-center ">
          <div className="col-12  d-flex  justify-content-start  col-xl-6  ">
            <div className=" col-12 col-md-8 col-lg-12">
              <h1 className="text-start text-white title_detail_nft  ">
                Thank you{" "}
              </h1>
              <p className="me-5  ">
                Nulla varius ac risus at commodo. Vestibulum nec nibh massa.
                Praesent commodo odio sem, a efficitur tellus vestibulum eu.
                Vivamus vel faucibus risus, ac euismod elit. Duis efficitur
                blandit lectus.
              </p>
              <button className="btn-main mt-5">Explore Marketplace</button>
            </div>
          </div>

          <div className="col-12  d-flex  justify-content-start   col-xl-6">
            <div>
              <img
                className="col-12 col-md-11 col-lg-10 col-xl-8 img_detail_nft"
                src={mask.src}
              />
              <div className="d-flex mt-3 justify-content-between col-12 ">
                <h2 className="text-white fs-4   "> NFT Name 123 </h2>
                <div className=" thankYouUser ">
                  <img className="" src={user.src} />
                  <strong className="">@artistname</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ThankYou;

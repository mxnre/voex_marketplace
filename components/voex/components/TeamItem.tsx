import { founder } from "@assets";
import React from "react";
interface Props{
  img:string;
  email:string;
  name:string;
  description:string;
  description2:string;
  positionInTheCompany:string;

}
export const TeamItem = ({name,description,description2,email,img,positionInTheCompany}:Props) => {
  return (
    <div className="d-flex flex-wrap">
      <div className="col-12 col-lg-3  px-3 d-flex flex-column align-items-center align-items-sm-center  align-items-xxl-end mb-4">
        <img className="rounded-circle col-7 col-sm-4 col-lg-12 col-xl-8 col-xxl-6 " src={img} />
        <div className=" col-7 col-sm-4 col-lg-12 col-xl-6 text-center">
        <small className="text-white  fs-6 ">{email}</small>
        </div>
      </div>
      <div  className="col col-xxl-8 d-flex flex-column aling-items-center  px-4 px-sm-5 px-xl-0 pe-xl-5">
        <h2 className="text-white d-flex align-items-center title_detail_nft fs-1">
          {name}
        </h2>
        <h4>
          <strong className="text-white">{positionInTheCompany}</strong>
        </h4>
       <div >
       <p >
          <span>
           {description}
          </span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span>
           {description2}
          </span>
        </p>
       </div>
      </div>
    </div>
  );
};

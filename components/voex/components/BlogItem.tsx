import React from "react";

interface Props {
  title: string;
  urlImg: string;
  shortDescription: string;
}
export const BlogItem = ({ urlImg,title, shortDescription }: Props) => {
  const urlBase = "NEXT_PUBLIC_ADMIN_BASE_URL";
  return (
    <div className=" blog-item mt-5  ">
      <div>
        <img src={urlBase + urlImg} />
        <div className="p-2">
          <h2 className="text-dark fs-1  m-0">{title}</h2>
          <h4 className="fs-5 fw-normal text-dark">{shortDescription}</h4>
        </div>
      </div>
    </div>
  );
};

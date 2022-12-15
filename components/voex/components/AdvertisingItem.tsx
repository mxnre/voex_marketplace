import React from 'react'

interface Props {
    img:string,
    title:string,
    description:string,

}
export const AdvertisingItem = ({img,title,description}:Props) => {
  return (
    <div className='p-1' style={{width: '310px'}}>
    <img src={img}/>
    <h4 className="mt-5 mb-3">{title}</h4>
    <p className="text-dark text-break fs-6 ">{description}</p>
  </div>
  )
}

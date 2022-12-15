import React from 'react'

interface Props {
  text: string
  imgUrl: string
  tagetUrl: string
}
export const HomeBlogItem = ({ text, imgUrl, tagetUrl }: Props) => {
  return (
    <div className='homeBlogItem col-12 d-flex align-items-center bg-white'>
      <img className='col-2 col-xl-1' src={imgUrl} />
      <a href={tagetUrl}><p className='fs-4 ms-3 text-dark fw-bold'>{text}</p></a>
    </div>
  )
}

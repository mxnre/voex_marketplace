import React, { ReactNode } from 'react'
import { audioImg, docImg, nftImg, user, videoImg } from '@assets'

interface Props {
  img?: string
  className?: string
  type?: string
  preview?: boolean
  autoPlay?: boolean
}
const ShowNftInfo = ({
  img,
  type,
  preview = false,
  autoPlay = false,
  className = '',
}: Props) => {
  switch (type) {
    case 'image':
      return (
        <>
          {autoPlay ? (
            <div
              className={`flex justify-center w-full h-full bg-contain bg-no-repeat bg-center`}
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          ) : (
            <div
              className={`flex justify-center w-full h-full bg-cover bg-no-repeat bg-center flex-auto`}
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          )}
        </>
      )
    case 'audio':
      return (
        <div className={`flex justify-center ${className} items-center h-full`}>
          {autoPlay ? (
            <>
              <audio
                autoPlay={autoPlay}
                className="w-full"
                controls={autoPlay}
                controlsList="nodownload"
                loop={true}
                preload="none"
                src={img}
              ></audio>
            </>
          ) : (
            <img className={`${className} max-w-none`} src={audioImg.src} />
          )}
        </div>
      )
    case 'video':
      return (
        <div className={`flex justify-center ${className}`}>
          <video
            autoPlay={autoPlay}
            className={`${className} max-w-none`}
            controls={autoPlay}
            loop={true}
            preload="auto"
            src={img}
            onClick={(e) => autoPlay && e.stopPropagation()}
          ></video>
        </div>
      )
    case 'application':
      return (
        <>
          {autoPlay ? (
            <div
              className={`flex justify-center w-full h-full`}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe src={img} className="w-full h-full" />
            </div>
          ) : (
            <div className={`flex justify-center ${className}`}>
              <img className={`${className} max-w-none`} src={docImg.src} />
            </div>
          )}
        </>
      )
    default:
      return (
        <div className={`flex justify-center ${className}`}>
          <img className={`${className} max-w-none`} src={img} />
        </div>
      )
  }
}

export default ShowNftInfo

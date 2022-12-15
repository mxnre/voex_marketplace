import React, { ReactNode, useEffect } from 'react'

interface Props {
  open: boolean
  onClose: any
  children: ReactNode
  className?: string
}

const PreviewModal = ({ open, onClose, children, className = '' }: Props) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])
  return (
    <>
      {open && (
        <div
          className={`z-[1000] fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center overflow-auto`}
          onClick={onClose}
        >
          <div className={`${className}`}>
            {children}
          </div>
          <div className="z-[-1] absolute w-full h-full bg-black/70"></div>
        </div>
      )}
    </>
  )
}

export default PreviewModal

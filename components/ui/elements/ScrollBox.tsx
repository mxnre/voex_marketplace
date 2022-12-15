import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const ScrollBox = ({ children }: Props) => {
  return <div className={'scroll-box'}>{children}</div>
}

export default ScrollBox

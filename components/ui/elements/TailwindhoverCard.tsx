import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

interface Props {
  title: ReactNode | string
  children: ReactNode
  className?: string
  collapsable?: boolean
}

const TailwindhoverCard = ({
  title,
  children,
  className = '',
  collapsable = true,
}: Props) => {
  const [collapse, setCollapse] = useState(false)
  
  
  return (
    <div
      className={
        collapse? className : className + ' m-3 shadow-accordian-hover'
      }
      onClick={() => setCollapse(!collapse)}
    >
      {title}
      <div className={!collapse ? 'body' : 'body hidden'}>{children}</div>
    </div>
  )
}

export default TailwindhoverCard

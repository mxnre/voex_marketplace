import React, { ReactNode, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

interface Props {
  title: ReactNode
  children: ReactNode
  className?: string
}

const TailWindCard = ({ title, children, className = '' }: Props) => {
  const [collapse, setCollapse] = useState(false)
  const combinedClassName = 'border-[1px] rounded border-white/40 ' + className
  return (
    <div className={combinedClassName}>
      <div
        className="flex justify-between items-center p-2 "
        onClick={() => setCollapse(!collapse)}
      >
        <div>{title}</div>
        <div>
          {collapse ? (
            <ChevronDownIcon className={'w-4 h-4 transition-all rotate-180'} />
          ) : (
            <ChevronDownIcon className={'w-4 h-4 transition-all'} />
          )}
        </div>
      </div>

      {!collapse && (
        <div className="border-t-[1px] border-white/40">{children}</div>
      )}
    </div>
  )
}

export default TailWindCard

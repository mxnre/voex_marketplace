import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: String
}

const TailwindAccordion = ({ children, className = '' }: Props) => {
  const combinedClassName =
    'border-[1px] border-gray-500 rounded overflow-hidden ' + className
  return (
    <div className={combinedClassName}>
      {React.Children.map(children, (child, index) => {
        const borderTop = index === 0 ? 'border-t-0' : 'border-t-[1px]'
        return <div className={'child border-gray-500 ' + borderTop}>{child}</div>
      })}
    </div>
  )
}

export default TailwindAccordion

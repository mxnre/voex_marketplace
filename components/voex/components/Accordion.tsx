import React, { ReactNode, useState } from 'react'
import { useCallback } from 'react'

interface Props {
  children: ReactNode
}

interface ItemProps {
  children: ReactNode
  title: ReactNode
}
export const Accordion = ({ children }: Props) => {
  return (
    <div className="grid gap-0 grid-cols-1">
      {React.Children.map(children, (child, index) => {
        const marginTop = index === 0 ? '' : '-1px'
        const borderTop = index === 0 ? 'rounded-t' : ''
        const borderBottom =
          index === React.Children.toArray(children).length - 1
            ? 'rounded-b'
            : ''
        return (
          <div
            className={`border-white border mt-[${marginTop}] ${borderTop} ${borderBottom}`}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}

export const AccordionItem = ({ title, children }: ItemProps) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = useCallback(() => {
    setExpanded((prev) => !prev)
  }, [])

  const display = expanded ? 'block' : 'none'

  return (
    <>
      <div
        className="border-white border-0 mt-[-1px] p-3 flex justify-between items-center"
        onClick={handleClick}
      >
        <div>{title}</div>
        {expanded ? (
          <i className="fa-solid fa-chevron-down"></i>
        ) : (
          <i className="fa-solid fa-chevron-up"></i>
        )}
      </div>

      <div className="border-white border-t p-3" style={{ display }}>
        {children}
      </div>
    </>
  )
}

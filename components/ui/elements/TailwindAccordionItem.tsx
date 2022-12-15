import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

interface Props {
  title: ReactNode | string
  children: ReactNode
  className?: string
  collapsable?: boolean
}

const TailwindAccordionItem = ({
  title,
  children,
  className = '',
  collapsable = true,
}: Props) => {
  const [collapse, setCollapse] = useState(false)
  const borderBottom = collapse ? 'border-b-0' : 'border-b-[1px]'

  const handleClick = useCallback(() => {
    if (collapsable) setCollapse(!collapse)
  }, [collapse])

  return (
    <div className={className}>
      <div
        className={
          'flex justify-between items-center p-2 border-gray-500 ' +
          borderBottom
        }
        onClick={handleClick}
      >
        <div>{title}</div>
        {collapsable && (
          <div>
            {collapse ? (
              <ChevronDownIcon
                className={'w-4 h-4 transition-all rotate-180'}
              />
            ) : (
              <ChevronDownIcon className={'w-4 h-4 transition-all'} />
            )}
          </div>
        )}
      </div>

      {!collapse && <div>{children}</div>}
    </div>
  )
}

export default TailwindAccordionItem

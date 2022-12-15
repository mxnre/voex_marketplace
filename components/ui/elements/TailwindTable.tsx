import React, { ReactNode } from 'react'
import ScrollBox from './ScrollBox'

interface Props {
  data: any[]
  columns: ColumnType[]
  options?: TableOption
  className?: string
}

interface ColumnType {
  data: string
  title: string
  render?: (rowData: any) => ReactNode | string
  className?: string
}

interface TableOption {
  noBorder?: boolean
  headerClass?: string
}

const defaultOptions: TableOption = {
  noBorder: false,
  headerClass: '',
}

const TailwindTable = ({ data, columns, className, options }: Props) => {
  options = Object.assign({}, defaultOptions, options)

  let combinedClassName = className + ' w-full overflow-hidden'
  if (!options.noBorder) {
    combinedClassName += ' border-[1px] rounded border-gray-500'
  }

  return (
    <div className={combinedClassName}>
      <ScrollBox>
        <table className="w-full table-auto">
          <thead className="sticky top-0">
            <tr className="border-b-[1px] border-gray-500">
              {columns.map((column, index) => (
                <th className={`${options?.headerClass} p-2`} key={index}>
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => {
              const borderClass = key === 0 ? '' : 'border-t-[1px]'
              return (
                <tr className={`${borderClass} border-gray-500`} key={key}>
                  {columns.map((column, index) => {
                    let tdCotent = item[column.data]
                    if (column.render) {
                      tdCotent = column.render(item)
                    }
                    const className = 'p-2 ' + column.className
                    return (
                      <td className={className} key={index}>
                        {tdCotent}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </ScrollBox>
    </div>
  )
}

export default TailwindTable

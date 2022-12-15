import React, { ReactNode } from 'react'

interface Props {
  title: String
  className: String
}

const Button = ({ title = '', className = '' }: Props) => {
  const b_className = 'border-[1px] border-gray/50 rounded-lg p-2 '
  return <button className={b_className + className}>{title}</button>
}

export default Button

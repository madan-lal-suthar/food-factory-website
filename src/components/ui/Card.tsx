import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

const Card = ({ children, className = '' }: CardProps) => {
  return <section className={className}>{children}</section>
}

export default Card

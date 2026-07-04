import type { ReactNode } from 'react'

type PublicRouteProps = {
  children: ReactNode
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  return children
}

export default PublicRoute

import type { ReactNode } from 'react'

type PrivateRouteProps = {
  children: ReactNode
  isAuthenticated?: boolean
  fallback?: ReactNode
}

const PrivateRoute = ({ children, isAuthenticated = false, fallback = null }: PrivateRouteProps) => {
  return isAuthenticated ? children : fallback
}

export default PrivateRoute

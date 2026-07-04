import { createContext, useMemo, useState, type ReactNode } from 'react'

type AuthContextValue = {
  user: unknown
  setUser: (user: unknown) => void
  logout: () => void
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  setUser: () => {},
  logout: () => {},
})

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<unknown>(null)

  const value = useMemo(
    () => ({
      user,
      setUser,
      logout: () => setUser(null),
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

type AuthState = {
  user: unknown
  token: string | null
}

type AuthAction = {
  type?: string
  payload?: Partial<AuthState>
}

const initialState = {
  user: null,
  token: null,
} satisfies AuthState

const authReducer = (state: AuthState = initialState, action: AuthAction = {}) => {
  switch (action.type) {
    case 'auth/setCredentials':
      return { ...state, ...action.payload }
    case 'auth/logout':
      return initialState
    default:
      return state
  }
}

export default authReducer

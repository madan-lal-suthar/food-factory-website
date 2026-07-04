type User = {
  id?: string | number
  [key: string]: unknown
}

type UserState = {
  users: User[]
  selectedUser: User | null
}

type UserAction = {
  type?: string
  payload?: User[] | User | null
}

const initialState = {
  users: [],
  selectedUser: null,
} satisfies UserState

const userReducer = (state: UserState = initialState, action: UserAction = {}) => {
  switch (action.type) {
    case 'users/setUsers':
      return { ...state, users: Array.isArray(action.payload) ? action.payload : state.users }
    case 'users/setSelectedUser':
      return { ...state, selectedUser: !Array.isArray(action.payload) ? action.payload || null : state.selectedUser }
    default:
      return state
  }
}

export default userReducer

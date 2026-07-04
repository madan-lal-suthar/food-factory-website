import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'

export const store = {
  reducer: {
    auth: authReducer,
    users: userReducer,
  },
}

export default store

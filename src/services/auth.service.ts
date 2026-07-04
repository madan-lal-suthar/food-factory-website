import api from './api'

type AuthPayload = Record<string, unknown>

export const login = (payload: AuthPayload) => api.post('/auth/login', payload)
export const register = (payload: AuthPayload) => api.post('/auth/register', payload)
export const forgotPassword = (payload: AuthPayload) => api.post('/auth/forgot-password', payload)

export default {
  login,
  register,
  forgotPassword,
}

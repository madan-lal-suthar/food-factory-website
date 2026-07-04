import api from './api'

export const getUsers = () => api.get('/users')
export const getUserById = (id: string | number) => api.get(`/users/${id}`)
export const createUser = (payload: Record<string, unknown>) => api.post('/users', payload)

export default {
  getUsers,
  getUserById,
  createUser,
}

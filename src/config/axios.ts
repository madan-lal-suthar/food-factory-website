import { API_BASE_URL } from '../utils/constants'

export type ApiResponse<T = unknown> = {
  data: T
}

type RequestData = Record<string, unknown> | unknown[]

const axiosInstance = {
  get: <T = unknown>(url: string, config?: RequestInit) => request<T>(url, { ...config, method: 'GET' }),
  post: <T = unknown>(url: string, data: RequestData, config?: RequestInit) =>
    request<T>(url, { ...config, method: 'POST', body: JSON.stringify(data) }),
  put: <T = unknown>(url: string, data: RequestData, config?: RequestInit) =>
    request<T>(url, { ...config, method: 'PUT', body: JSON.stringify(data) }),
  delete: <T = unknown>(url: string, config?: RequestInit) => request<T>(url, { ...config, method: 'DELETE' }),
}

const request = async <T = unknown>(url: string, options: RequestInit = {}): Promise<ApiResponse<T>> => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  const data = (await response.json().catch(() => null)) as T & { message?: string }

  if (!response.ok) {
    throw new Error(data?.message || 'Request failed')
  }

  return { data: data as T }
}

export default axiosInstance

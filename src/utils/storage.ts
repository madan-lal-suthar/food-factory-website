export const storage = {
  get: <T = unknown>(key: string): T | null => JSON.parse(localStorage.getItem(key) || 'null') as T | null,
  set: (key: string, value: unknown) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key: string) => localStorage.removeItem(key),
}

export default storage

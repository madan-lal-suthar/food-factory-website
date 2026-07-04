export const isEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export const isRequired = (value: unknown) => {
  return value !== undefined && value !== null && String(value).trim() !== ''
}

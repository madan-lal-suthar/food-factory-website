export const formatDate = (date: string | number | Date) => {
  return new Intl.DateTimeFormat('en-IN').format(new Date(date))
}

export const classNames = (...classes: Array<string | false | null | undefined>) => {
  return classes.filter(Boolean).join(' ')
}

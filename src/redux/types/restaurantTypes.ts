export type Restaurant = {
  name: string
  cuisine: string
  image: string
  location: string
  type: string
  isShopOn: number
}

export type RestaurantState = {
  items: Restaurant[]
  loading: boolean
  error: string | null
}

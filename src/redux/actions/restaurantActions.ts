import type { Restaurant } from '../types/restaurantTypes'

export const RESTAURANTS_LOAD = 'RESTAURANTS_LOAD'
export const RESTAURANTS_SUCCESS = 'RESTAURANTS_SUCCESS'
export const RESTAURANTS_FAIL = 'RESTAURANTS_FAIL'

export const loadRestaurants = () => ({ type: RESTAURANTS_LOAD })

export const successRestaurants = (restaurants: Restaurant[]) => ({
  type: RESTAURANTS_SUCCESS,
  payload: restaurants,
})

export const failRestaurants = (error: string) => ({
  type: RESTAURANTS_FAIL,
  payload: error,
})

export type RestaurantAction =
  | ReturnType<typeof loadRestaurants>
  | ReturnType<typeof successRestaurants>
  | ReturnType<typeof failRestaurants>

import { failRestaurants, loadRestaurants, successRestaurants } from '../actions/restaurantActions'
import type { Restaurant } from '../types/restaurantTypes'

const getDummyRestaurants = async (): Promise<Restaurant[]> => {
  await new Promise((resolve) => setTimeout(resolve, 600))

  return [
    {
      name: 'The Curry Pot',
      cuisine: 'Indian, Curry',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
      location: 'Downtown',
      type: 'Casual Dining',
      isShopOn: 1,
    },
    {
      name: 'Urban Bites',
      cuisine: 'Burgers, Fast Food',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
      location: 'City Center',
      type: 'Quick Service',
      isShopOn: 0,
    },
    {
      name: 'Casa Grill',
      cuisine: 'Continental, Pizza',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
      location: 'North Avenue',
      type: 'Family Dining',
      isShopOn: 1,
    },
  ]
}

export const fetchRestaurants = () => async (dispatch: (action: unknown) => void) => {
  dispatch(loadRestaurants())

  try {
    const restaurants = await getDummyRestaurants()
    dispatch(successRestaurants(restaurants))
  } catch (error) {
    dispatch(failRestaurants(error instanceof Error ? error.message : 'Failed to load restaurants'))
  }
}

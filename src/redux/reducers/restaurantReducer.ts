import {
  RESTAURANTS_FAIL,
  RESTAURANTS_LOAD,
  RESTAURANTS_SUCCESS,
  type RestaurantAction,
} from '../actions/restaurantActions'

import type { RestaurantState } from './../types/restaurantTypes'

const initialState: RestaurantState = {
  items: [],
  loading: false,
  error: null,
}

const restaurantReducer = (state: RestaurantState = initialState, action: RestaurantAction): RestaurantState => {
  switch (action.type) {
    case RESTAURANTS_LOAD:
      return { ...state, loading: true, error: null }
    case RESTAURANTS_SUCCESS: {
      const payload = 'payload' in action ? action.payload : []
      return { ...state, loading: false, items: Array.isArray(payload) ? payload : [], error: null }
    }
    case RESTAURANTS_FAIL: {
      const payload = 'payload' in action ? action.payload : null
      return { ...state, loading: false, error: typeof payload === 'string' ? payload : null }
    }
    default:
      return state
  }
}

export default restaurantReducer

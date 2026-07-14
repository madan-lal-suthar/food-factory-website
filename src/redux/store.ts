import { createStore } from 'redux'
import restaurantReducer from './reducers/restaurantReducer'

export const store = createStore(restaurantReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

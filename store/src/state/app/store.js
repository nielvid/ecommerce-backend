import { configureStore } from '@reduxjs/toolkit'
import Reducer, {item, authorization} from "./reducers"


 const store = configureStore({
  reducer: {
    item: item,
    cart: Reducer,
    user: authorization
  },
})

export default store
import { createSlice } from '@reduxjs/toolkit'

export const cartItem = createSlice({
  name: 'items',
  initialState: {
    items:[]
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action) => {
      const items = action.payload
      const itemPos = state.items.find((item)=>{ return item === items.id})
      const pos = state.items.indexOf(itemPos)
      state.items.slice(pos)
      
    }
  },
})


export const cart = createSlice({
  name: 'cart',
  initialState: {
    value: 0,
  },
  reducers: {
    addToCart: (state) => {
      state.value += 1
    },
    removeFromCart: (state) => {
      state.value -= 1
    }
    
  },
})

export const Login = createSlice({
  name: 'user',
  initialState: {
    data:[]
  },
  reducers: {
    login: (state, action) => {
      state.data = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem} = cartItem.actions
export const item =  cartItem.reducer


export const { addToCart, removeFromCart } = cart.actions
export default cart.reducer


export const {login} = Login.actions
export const authorization =  Login.reducer
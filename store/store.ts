import { configureStore } from '@reduxjs/toolkit'
import socketSlice from './socketSlice'

export const store = configureStore({
  reducer: {
    socket: socketSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


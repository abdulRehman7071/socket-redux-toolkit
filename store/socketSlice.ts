import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SocketState {
  connected: boolean
  data: any[]
}

const initialState: SocketState = {
  connected: false,
  data: [],
}

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    setConnected: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload
    },
    addData: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload)
    },
  },
})

export const { setConnected, addData } = socketSlice.actions
export default socketSlice.reducer


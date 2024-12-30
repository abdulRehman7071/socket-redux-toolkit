import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { socketService } from '../services/socket'
import { RootState } from '../store/store'
import { setConnected, addData } from '../store/socketSlice'

export function useSocketData() {
  const dispatch = useDispatch()
  const { connected, data } = useSelector((state: RootState) => state.socket)

  useEffect(() => {
    const socket = socketService.getSocket()

    if (!socket) {
      socketService.connect()
    }

    const onConnect = () => dispatch(setConnected(true))
    const onDisconnect = () => dispatch(setConnected(false))
    const onData = (newData: any) => dispatch(addData(newData))

    socket?.on('connect', onConnect)
    socket?.on('disconnect', onDisconnect)
    socket?.on('data', onData)

    return () => {
      socket?.off('connect', onConnect)
      socket?.off('disconnect', onDisconnect)
      socket?.off('data', onData)
    }
  }, [dispatch])

  return { connected, data }
}


import React, {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

interface Props {
  children: ReactNode
  url: string
}

export const SocketContext = React.createContext<any>({})

export default function App({ children, url }: Props) {
  const socketRef = useRef<any>()

  useMemo(() => {
    socketRef.current = 'create socket' + url
  }, [url])

  return (
    <SocketContext.Provider value={socketRef.current}>
      <TestComponent />
    </SocketContext.Provider>
  )
}

const TestComponent = () => {
  const socket = useContext(SocketContext)
  socket.on('sdfsdfsd')
  return <></>
}

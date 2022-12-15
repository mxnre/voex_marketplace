import { UserData } from 'apis/authApi'
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import VoexStorage from 'utils/voex.storage'

interface UserContextProps {
  user?: UserData
  setUser: (user?: UserData) => void
}

export const UserContext = createContext<UserContextProps>({
  setUser: (user?: UserData) => {},
})

interface Props {
  children: ReactNode
}

export default function ({ children }: Props) {
  const [user, setUser] = useState<UserData | undefined>()
  const [inited, setInited] = useState(false)

  useEffect(() => {
    setUser(VoexStorage.getItem('userData'))
    setInited(true)
  }, [])

  const context = useMemo(() => {
    const func = function (user?: UserData) {
      if (user) {
        VoexStorage.setItem('userData', user)
        setUser(user)
      } else {
        VoexStorage.removeItem('userData')
        setUser(undefined)
      }
    }
    return { user: user, setUser: func }
  }, [user])

  return inited ? (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  ) : null
}

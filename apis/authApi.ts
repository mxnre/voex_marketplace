import strApiAxios from './strApiAxios'

export type LoginData = {
  identifier: string
  password: string
}

export type SignupData = {
  email: string
  password: string
  username: string
  avatar_url: string
  avatar_thumbnail: string
}

export type PutUserData = {
  email?: string
  password?: string
  username?: string
  avatar_url?: string
  avatar_thumbnail?: string
  wallet_ids?: number[]
}

export type UserData = {
  id: number
  username: string
  email: string
  avatar_url: string
  avatar_thumbnail: string
  wallet_ids?: WalletResponse[]
}

export type WalletData = {
  wallet_address: string
  user_id: number
}

export type WalletResponse = {
  id: number
} & WalletData

export type LoginResponse = {
  jwt: string
  user: UserData
}

async function login(logindata: LoginData): Promise<LoginResponse> {
  return strApiAxios
    .post('/api/auth/local', logindata)
    .then(({ data }: { data: LoginResponse }) => {
      return data
    })
}

async function register(userdata: SignupData) {
  return strApiAxios.post('/api/users', userdata)
}

async function logout() {
  localStorage.removeItem('strapi-jwt')
  return Promise.resolve(true)
}

async function getMyWallets(user_id: number): Promise<WalletResponse[]> {
  return strApiAxios
    .get(`/api/users/${user_id}?populate[0]=wallet_ids`)
    .then(({ data }: { data: UserData }) => {
      return data.wallet_ids || []
    })
}

async function updateUserData(userdata: PutUserData) {
  strApiAxios.get('/api/users/me').then(({ data }: { data: UserData }) => {
    strApiAxios.put('/api/users/' + data.id, userdata)
  })
}

export default {
  login,
  register,
  logout,
  getMyWallets,
  updateUserData,
}

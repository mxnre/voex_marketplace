import axios from 'axios'
import { StrApiUrl } from 'utils/common'
import { WalletData, WalletResponse } from './authApi'
import strApiAxios from './strApiAxios'

export async function findStrData(query: string) {
  return axios.get(StrApiUrl(query)).then((res) => res.data)
}
export async function addStrData(url: string, nft: object) {
  return axios.post(StrApiUrl(url), { data: nft })
}

export async function findData(url: string) {
  return axios.get(StrApiUrl(url)).then((res) => res.data)
}

async function upload(formData: FormData) {
  return strApiAxios.post('/api/upload', formData)
}

async function createWallet(wallet: WalletData): Promise<WalletResponse> {
  return strApiAxios
    .post('/api/wallets', { data: wallet })
    .then((res) => res.data)
    .then(({ data }: { data: { id: number; attributes: WalletData } }) => {
      return { id: data.id, ...data.attributes }
    })
}

export default {
  upload,
  findData,
  addStrData,
  findStrData,
  createWallet,
}

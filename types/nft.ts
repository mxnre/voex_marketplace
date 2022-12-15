import { components } from 'moralis/types/generated/web3Api'

export type Trait = 'prop 1' | 'prop 2' | 'prop 3'

export type NftAttribute = {
  name: string
  value: string
}
export type NftAttributeTwo = {
  name: string
  max: string
  min: string
}

export type NftMeta = {
  name: string
  description: string
  image: string
  attributes: NftAttribute[]
}
export type NftMeta2 = {
  Explicit_content: boolean
  Freezing: string
  Supply: string
  Unlock_content: boolean
  blockChain: string
  collection: string
  description: string
  externalLink: string
  name: string
  image: string
  traits: NftAttribute[]
  level: NftAttributeTwo[]
  stats: NftAttributeTwo[]
}
export type NftCore = {
  tokenId: number
  price: number
  creator: string
  isListed: boolean
}

export type Nft = {
  meta: any
} & NftCore

export type FileReq = {
  bytes: Uint8Array
  contentType: string
  fileName: string
}

export type PinataRes = {
  IpfsHash: string
  PinSize: number
  Timestamp: string
  isDuplicate: boolean
}

export type NFTOwner = {
  flag?: boolean
  token_uri: string
  metadata: string
  id?:string
  status?:string
} & components['schemas']['nftOwner']

export type NftOwnerCollection = {
  result: NFTOwner[]
} & components['schemas']['nftOwnerCollection']

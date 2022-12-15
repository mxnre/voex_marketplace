export interface StrNft {
  cid: string
  flag: boolean
  id?:string
}

export interface StrFindResult<T> {
  data: StrFindData<T>[]
  meta: {
    pagination: PaginationType
  }
}

export interface StrFindData<T> {
  attributes: T,
  id?:string
}

export interface PaginationType {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

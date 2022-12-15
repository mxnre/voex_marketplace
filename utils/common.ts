export const StrApiUrl = (url: string) => {
  return process.env.NEXT_PUBLIC_ADMIN_BASE_URL + url
}

export const isSSR = () => typeof window === 'undefined'

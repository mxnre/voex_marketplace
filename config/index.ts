const env = function (key: string, defaultValue: string) {
  if (process.env[key] === undefined) return defaultValue
  return process.env[key]
}

const config = () => ({
  strApiEndpoint: env('NEXT_PUBLIC_ADMIN_BASE_URL', 'http://localhost:1337'),
})

export default config

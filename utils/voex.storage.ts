const VoexStorage = {
  getItem(key: string, defaultValue: any = undefined) {
    const str = localStorage.getItem(key)
    if (str === null) return defaultValue
    return JSON.parse(str)
  },
  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  removeItem(key: string) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  },
}

export default VoexStorage

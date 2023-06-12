// 获取 存储的数据
const get = (key) => {
  return wx.getStorageSync(key)
}

// 存储 数据
const set = (key,value) => {
  wx.setStorageSync(key, value)
}
// 删除 存储的数据
const remove = (key) => {
  wx.removeStorageSync(key)
}
// 清空 存储的数据
const clear = () => {
  wx.clearStorageSync()
}

export default {
  get,set,remove,clear
}
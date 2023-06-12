import ApiConfig from '../config/config.js'
import wxToPromise from "./wx.js"
import exceptionMessage from "../config/exception-message"

// console.log(ApiConfig);
class Http {
  static async request({url,method = 'GET',data = {}}){
    wx.showLoading({title:'加载中'})
    let res = await wxToPromise('request',{
      url: ApiConfig.baseURL + url,
      method,
      data
    })

    if(res.statusCode < 400) {
      wx.hideLoading()
      return res.data
    }
    if(res.statusCode === 401) {
      wx.hideLoading()
    }
    
    wx.hideLoading()
    Http.showError(res.data.error_code,res.data.message)
  }

  static showError(errorCode,message){
    let title = ""
    title = exceptionMessage[errorCode] || message || "未知错误"
    wx.showToast({
      title: title,
      icon:'none',
      duration:3000
    })
  }
}
export default Http
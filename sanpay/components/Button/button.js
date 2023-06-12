// components/Button/button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type:{
      type: String,
      value: 'circle'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    async handleQrcode(){
      let {result} = await this.scanCodePromise()
      if(!result) return
      this.triggerEvent('GetQrcode',{qrcode:result})
    },
    scanCodePromise(){
      return new Promise((resolve,reject)=>{
        wx.scanCode({
          success: (res)=>{
            resolve(res)
          },
          fail(err){
            reject(err)
          }
        })
      })
    },
  }
})

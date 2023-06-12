// pages/shopping/shopping.js
import carts from "../../common/carts.js"
Page({
  getQrcode: carts.getQrcode,
  addCart: carts.addCart,
  hasProduction: carts.hasProduction,

  /**
   * 页面的初始数据
   */
  data: {
    avatr:[
      {
        id: 1,
        url: "https://img0.baidu.com/it/u=4162443464,2854908495&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
      },
      {
        id: 2,
        url: "https://img2.baidu.com/it/u=1976353225,1790275495&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"
      },
      {
        id: 3,
        url: "https://img1.baidu.com/it/u=437800586,2754995403&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=282"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
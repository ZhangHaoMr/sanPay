import storage from "../../utils/storage"
import carts from "../../common/carts.js"
// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts:[],
    allCarts:[],
    unfold:false,
    totalValue:0,
    num:0
  },

  // 展开
  unfold(){
    let carts = storage.get('carts')
    if(!carts) return
    if(!this.data.unfold){
      this.setData({
        carts,
        unfold:true
      })
    } else {
      carts = carts.splice(0,1)
      this.setData({
        carts,
        unfold:false
      })
    }
  },

  // 总价
  totalPrice : carts.totalPrice,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let carts = storage.get('carts')
    let allCarts = JSON.parse(JSON.stringify(carts))

    if(!carts) return

    if(!this.data.unfold){
      carts = carts.splice(0,1)
    }
    this.setData({
      carts,
      allCarts
    })

    this.totalPrice(allCarts)
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
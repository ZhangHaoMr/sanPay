import storage from "../../utils/storage"
import carts from "../../common/carts.js"
// pages/cart/cart.js
Page({

  // 减
  subtract(e) {
    let index = e.currentTarget.dataset.index
    let item = this.data.cart
    if (!item) return
    if (item[index].num <= 1) {
      return wx.showModal({
        title: '提示',
        content: '您确定要删除这个商品吗',
        success: (res) => {
          if (res.confirm) {
            item.splice(index, 1)
            this.setData({
              cart: item
            })
            this.totalPrice(item)
            storage.set('carts', this.data.cart)
          }
        }
      })
    } else {
      item[index].num--
    }
    this.setData({
      cart: item
    })
    this.totalPrice(item)
    storage.set('carts', this.data.cart)
  },
  // 加
  add(e) {
    let index = e.currentTarget.dataset.index
    let item = this.data.cart
    if (!item) return
    item[index].num++
    this.setData({
      cart: item
    })
    this.totalPrice(item)
    storage.set('carts', this.data.cart)
  },

  // 总价
  totalPrice : carts.totalPrice,
  // totalPrice(cart) {
  //   let price = 0
  //   let num = 0
  //   cart.forEach(item => {
  //     price += item.num * item.price
  //     num += item.num
  //   })
  //   this.setData({
  //     totalValue: price.toFixed(2),
  //     num
  //   })
  // },

  /**
   * 页面的初始数据
   */
  data: {
    cart: [],
    totalValue: 0,
    num:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let cart = storage.get('carts')
    this.setData({ cart })
    if (!cart) return
    this.totalPrice(cart)
  },

  getQrcode: carts.getQrcode,
  addCart: carts.addCart,
  hasProduction: carts.hasProduction,

  goToResult(){
    wx.navigateTo({
      url: '/pages/order/order',
    })
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
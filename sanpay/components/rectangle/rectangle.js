import carts from "../../common/carts.js"
// components/rectangle/rectangle.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    getQrcode: carts.getQrcode,
    addCart: carts.addCart,
    hasProduction: carts.hasProduction,
  }
})

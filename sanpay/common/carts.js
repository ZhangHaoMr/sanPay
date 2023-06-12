import ProductionModel from "../model/production"
import storage from "../utils/storage"

async function getQrcode(e){
  let result = e.detail.qrcode
  if(!result) return
  let res = await ProductionModel.getProduction(result)
  if(res.result && res.result.length > 0){
    this.addCart(res.result[0])
    wx.navigateTo({
      url: '/pages/cart/cart',
    })
  } 
}

function addCart(data){
  if(!data) return
  let arr = []
  let carts = storage.get('carts')
  if(carts && carts.length > 0){
    let status = hasProduction(data,carts)
    // console.log("status",status);
    if(!status){
      data.num = 1
      carts.push(data)
      // debugger
      storage.set('carts',carts)
    } else {
      carts.forEach(item=>{
        if(item._id == data._id){
          item.num += 1
        }
      })
      // debugger
      storage.set('carts',carts)
    }
  } else {
    data.num = 1
    arr.push(data)
    // debugger
    storage.set('carts',arr)
  }
}

function hasProduction(data,cart){
  let dataStatus = false
  let res = cart.find(item=>item._id == data._id)
  if(!res) {
    return dataStatus
  } else { 
    return !dataStatus
  }
}

function totalPrice(cart) {
  let price = 0
  let num = 0
  cart.forEach(item => {
    price += item.num * item.price
    num += item.num
  })
  this.setData({
    totalValue: price.toFixed(2),
    num
  })
}

export default {
  getQrcode,
  addCart,
  hasProduction,
  totalPrice
}
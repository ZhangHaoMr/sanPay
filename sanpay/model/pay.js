import Http from "../utils/http";

class PayModel extends Http{
  /**
   * 扫码获取商品信息接口
   */
  static getOpenid(code){
      return Http.request({
          url : "/weixinpay/login",
          method : "GET",
          data : {code}
      })
  }

  /**
   * 封装统一下单接口
   */
  static doOrder(data = {}){
      return Http.request({
          url : "/weixinpay/doOrder",
          method : "POST",
          data
      })
  }
}

export default PayModel
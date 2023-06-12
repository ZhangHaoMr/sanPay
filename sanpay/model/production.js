import Http from "../utils/http";

/**
 * 封装商品模块的api
 */
class ProductionModel extends Http{
    /**
     * 扫码获取商品信息接口
     */
    static getProduction(qcode){
       return Http.request({
            url : "/api/getProduct",
            method : "GET",
            data : {qcode}
        })
    }
}

export default ProductionModel
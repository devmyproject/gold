/**
 * 配置所有接口路径
 */
const webUrl = '';

module.exports = {
    // ----------user---------------------
    payment: webUrl + '/api/payment',
    billlists: webUrl + '/api/billlist', // 单据列表
    // ----------products 品种管理---------------------
    productlist: webUrl + '/api/productlist', // 品种列表
    brandlist: webUrl + '/api/brandlist', // 品牌列表
    brand: webUrl + '/api/category', // 品牌单品操作[增加、修改]
    delbrand: webUrl + '/api/delcategory', // 品牌单品操作[删除]
    categorylist: webUrl + '/api/categorylist', // 类别列表
    category: webUrl + '/api/category', // 类别单品操作[增加、修改]
    delcategory: webUrl + '/api/delcategory', // 类别单品操作[删除]
    suitlist: webUrl + '/api/suitlist', // 套装列表
    // ----------dept 库存---------------------
    inventorys: webUrl + '/api/inventorys', // 库存数量
    inventorysCurtain: webUrl + '/api/inventorysCurtain', // 库存数量帐
    inventorysDiagram: webUrl + '/api/inventorysDiagram', // 库存分布
    inventorysSN: webUrl + '/api/inventorysSN', // 在库序列号
    financialInventorys: webUrl + '/api/financialInventorys', // 财务库存
    // ----------public 公共下拉列表---------------------
    publicbilltype: webUrl + '/api/billtype', // 单据类型
    publicorganization: webUrl + '/api/organization', // 组织机构
    publicdepots: webUrl + '/api/depots', // 库房
    publicaccounts: webUrl + '/api/accounts', // 业务员
    publicclienttype: webUrl + '/api/clienttype', // 客户类别
    publiccategorys: webUrl + '/api/categorys', // 类别
    publicbrands: webUrl + '/api/brands', // 品牌
    publicpzdl: webUrl + '/api/pzdl', // 品种大类
    publictxlb: webUrl + '/api/txlb' // txlb
};

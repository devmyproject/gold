/**
 * 路由配置模块
 * @module routes
 */

const router = require('koa-router')();
const url = require('../../api/url');

const publicservice = require('./publicservice');
const products = require('./products');
const bills = require('./bills');
const payment = require('./payment');
const dept = require('./dept');

router.post(url.payment, function () {
    this.body = payment.payment;
});
/* *************** 商品管理 **********************/
// 品种列表
router.post(url.productlist, function () {
    this.body = products.productlist;
});
// 品牌列表
router.post(url.brandlist, function () {
    this.body = products.brandlist;
});
// 品牌单品操作
router.post(url.brand, function () {
    this.body = products.category;
});
// 品牌单品操作
router.post(url.delbrand, function () {
    this.body = products.delcategory;
});
// 类别列表
router.post(url.categorylist, function () {
    this.body = products.categorylist;
});
// 类别单品操作
router.post(url.category, function () {
    this.body = products.category;
});
// 类别单品操作
router.post(url.delcategory, function () {
    this.body = products.delcategory;
});
// 套餐列表
router.post(url.suitlist, function () {
    this.body = products.suitlist;
});
/* *************** 单据 操作 **********************/
// 单据列表
router.post(url.billlists, function () {
    this.body = bills.billlist;
});
/* *************** 公共服务 **********************/
// 单据类型
router.post(url.publicbilltype, function () {
    this.body = publicservice.billtype;
});
// 组织机构
router.post(url.publicorganization, function () {
    this.body = publicservice.organization;
});
// 库房
router.post(url.publicdepots, function () {
    this.body = publicservice.depts;
});
// 品牌
router.post(url.publicbrands, function () {
    this.body = publicservice.brands;
});
// 类别
router.post(url.publiccategorys, function () {
    this.body = publicservice.categorys;
});
// 业务员
router.post(url.publicaccounts, function () {
    this.body = publicservice.account;
});
// 客户类别
router.post(url.publicclienttype, function () {
    this.body = publicservice.clienttype;
});
// 品种大类
router.post(url.publicpzdl, function () {
    this.body = publicservice.pzdl;
});
// 特性类别
router.post(url.publictxlb, function () {
    this.body = publicservice.txlb;
});
/* *************** 库存 **********************/
// 库存数量
router.post(url.inventorys, function () {
    this.body = dept.inventorys;
});
// 库存数量帐
router.post(url.inventorysCurtain, function () {
    this.body = dept.inventorysCurtain;
});
// 库存分布
router.post(url.inventorysDiagram, function () {
    this.body = dept.inventorysDiagram;
});
// 在库序列号
router.post(url.inventorysSN, function () {
    this.body = dept.inventorysSN;
});
// 财务库存
router.post(url.financialInventorys, function () {
    this.body = dept.financialInventorys;
});

module.exports = router;

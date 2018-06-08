import fetch from './fetch';
import url from './url';

// 单据类型
export function searchbilltype () {
    return fetch({
        url: url.publicbilltype,
        method: 'post'
        // data: keywords
    });
}
// 组织机构
export function searchorganization () {
    return fetch({
        url: url.publicorganization,
        method: 'post'
    });
}
// 库房
export function publicdepots (keywords) {
    return fetch({
        url: url.publicdepots,
        method: 'post',
        data: keywords
    });
}
// 商品品牌
export function publicBrands () {
    return fetch({
        url: url.publicbrands,
        method: 'post'
    });
}
// 商品类别
export function publicCategorys () {
    return fetch({
        url: url.publiccategorys,
        method: 'post'
    });
}
// 业务员
export function publicAccount (keywords) {
    return fetch({
        url: url.publicaccounts,
        method: 'post',
        data: keywords
    });
}
// 客户类别
export function publicClienttype () {
    return fetch({
        url: url.publicclienttype,
        method: 'post'
    });
}
// 品种大类
export function publicPzdl () {
    return fetch({
        url: url.publicpzdl,
        method: 'post'
    });
}
// 特性类别
export function publicTxlb () {
    return fetch({
        url: url.publictxlb,
        method: 'post'
    });
}

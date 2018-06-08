import fetch from './fetch';
import url from './url';

// 商品列表
export function productlist (keywords) {
    return fetch({
        url: url.productlist,
        method: 'post',
        data: keywords
    });
}
// 品牌列表
export function brandlist (keywords) {
    return fetch({
        url: url.brandlist,
        method: 'post',
        data: keywords
    });
}
// 品牌单品操作[增、改]
export function brand (keywords) {
    return fetch({
        url: url.brand,
        method: 'post',
        data: keywords
    });
}
// 品牌单品操作[删除]
export function delbrand (keywords) {
    return fetch({
        url: url.delbrand,
        method: 'post',
        data: keywords
    });
}
// 类别列表
export function categorylist (keywords) {
    return fetch({
        url: url.categorylist,
        method: 'post',
        data: keywords
    });
}
// 类别单品操作[增、改]
export function category (keywords) {
    return fetch({
        url: url.category,
        method: 'post',
        data: keywords
    });
}
// 类别单品操作[删除]
export function delcategory (keywords) {
    return fetch({
        url: url.delcategory,
        method: 'post',
        data: keywords
    });
}
// 套装列表
export function suitlist (keywords) {
    return fetch({
        url: url.suitlist,
        method: 'post',
        data: keywords
    });
}

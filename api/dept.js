import fetch from './fetch';
import url from './url';

// 库存数量查询
export function inventorys (keywords) {
    return fetch({
        url: url.inventorys,
        method: 'post',
        data: keywords
    });
}
// 库存数量帐
export function inventorysCurtain (keywords) {
    return fetch({
        url: url.inventorysCurtain,
        method: 'post',
        data: keywords
    });
}
// 库存分布
export function inventorysDiagram (keywords) {
    return fetch({
        url: url.inventorysDiagram,
        method: 'post',
        data: keywords
    });
}
// 在库序列号
export function inventorysSN (keywords) {
    return fetch({
        url: url.inventorysSN,
        method: 'post',
        data: keywords
    });
}
// 财务库存
export function financialInventorys (keywords) {
    return fetch({
        url: url.financialInventorys,
        method: 'post',
        data: keywords
    });
}

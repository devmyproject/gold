/**
 * 付款api
 * @param {*} data
 */
import fetch from './fetch';
import url from './url';

export function findBills (keywords) {
    var data = {
        billcode: keywords.billcode,
        inclusiveamt: keywords.inclusiveamt,
        companyName: keywords.companyName,
        billno: keywords.billno,
        keyword: keywords.keyword,
        columns: keywords.columns,
        pageNum: keywords.pageNum
    };
    return fetch({
        url: url.billsUrl,
        method: 'post',
        data: data
    });
}

export function payments () {
    return fetch({
        url: url.payment,
        method: 'post'
    });
};

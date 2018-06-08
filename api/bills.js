
import fetch from './fetch';
import url from './url';

export function searchbillList (keywords) {
    return fetch({
        url: url.billlists,
        method: 'post',
        data: keywords
    });
}

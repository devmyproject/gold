import {
    productlist,
    brandlist,
    brand,
    delbrand,
    categorylist,
    category,
    delcategory,
    suitlist
} from './../../../api/products';

import {
    PRO_PRODUCTLIST,
    PRO_BRANDLIST,
    PRO_BRAND,
    PRO_CATEGORYLIST,
    PRO_CATEGORY,
    PRO_SUITLIST
} from '../../constants/products';
export default {
    state: {
        productlist: [],
        brandlist: [],
        brand: {},
        categorylist: [],
        category: {},
        suitlist: []
    },
    mutations: {
        // 品种列表
        [PRO_PRODUCTLIST] (state, data) {
            state.productlist = data.data;
        },
        // 品牌列表
        [PRO_BRANDLIST] (state, data) {
            state.brandlist = data.data;
        },
        // 品牌单品操作[增、删、改]
        [PRO_BRAND] (state, data) {
            state.brand = data;
        },
        // 类别列表
        [PRO_CATEGORYLIST] (state, data) {
            state.categorylist = data.data;
        },
        // 类别单品操作[增、删、改]
        [PRO_CATEGORY] (state, data) {
            state.category = data;
        },
        // 套装列表
        [PRO_SUITLIST] (state, data) {
            state.suitlist = data.data;
        }
    },
    actions: {
        // 品种列表
        Productlist ({
            commit
        }, keywords) {
            return productlist(keywords).then(data => {
                commit(PRO_PRODUCTLIST, data);
                return data;
            });
        },
        // 品牌列表
        Brandlist ({
            commit
        }, keywords) {
            return brandlist(keywords).then(data => {
                commit(PRO_BRANDLIST, data);
                return data;
            });
        },
        // 品牌单品操作[增、改]
        Brand ({
            commit
        }, keywords) {
            return brand(keywords).then(data => {
                commit(PRO_BRAND, data);
                return data;
            });
        },
        // 品牌单品操作[删]
        DelBrand ({
            commit
        }, keywords) {
            return delbrand(keywords).then(data => {
                commit(PRO_BRAND, data);
                return data;
            });
        },
        // 类别列表
        Categorylist ({
            commit
        }, keywords) {
            return categorylist(keywords).then(data => {
                commit(PRO_CATEGORYLIST, data);
                return data;
            });
        },
        // 类别单品操作[增、改]
        Category ({
            commit
        }, keywords) {
            return category(keywords).then(data => {
                commit(PRO_CATEGORY, data);
                return data;
            });
        },
        // 类别单品操作[删]
        DelCategory ({
            commit
        }, keywords) {
            return delcategory(keywords).then(data => {
                commit(PRO_CATEGORY, data);
                return data;
            });
        },
        // 套装列表
        Suitlist ({
            commit
        }, keywords) {
            return suitlist(keywords).then(data => {
                commit(PRO_SUITLIST, data);
                return data;
            });
        }
    }
};

/**
 * 单据store
 */
import {
    searchbilltype,
    searchorganization,
    publicdepots,
    publicBrands,
    publicCategorys,
    publicAccount,
    publicClienttype,
    publicPzdl,
    publicTxlb
} from './../../../api/publicservice';

import {
    PUBLIC_BILLTYPE,
    PUBLIC_ORGANIZATION,
    PUBLIC_DEPOTS,
    PUBLIC_BRANDS,
    PUBLIC_CATEGORYS,
    PUBLIC_ACCOUNT,
    PUBLIC_CLENTTYPE,
    PUBLIC_PZDL,
    PUBLIC_TXLB
} from '../../constants/publicservice';

export default {
    state: {
        billtype: [],
        organization: [],
        depots: [],
        brands: [],
        categorys: [],
        account: [],
        clienttype: [],
        pzdl: [],
        txlb: []
    },
    mutations: {
        // 单据类型
        [PUBLIC_BILLTYPE] (state, data) {
            state.billtype = data.data;
        },
        // 组织机构
        [PUBLIC_ORGANIZATION] (state, data) {
            state.organization = data.data;
        },
        // 库房
        [PUBLIC_DEPOTS] (state, data) {
            state.depots = data.data;
        },
        // 商品品牌
        [PUBLIC_BRANDS] (state, data) {
            state.brands = data.data;
        },
        // 商品类别
        [PUBLIC_CATEGORYS] (state, data) {
            state.categorys = data.data;
        },
        // 业务员
        [PUBLIC_ACCOUNT] (state, data) {
            state.account = data.data;
        },
        // 客户类别
        [PUBLIC_CLENTTYPE] (state, data) {
            state.clienttype = data.data;
        },
        // 品种大类
        [PUBLIC_PZDL] (state, data) {
            state.pzdl = data.data;
        },
        // 特性类别
        [PUBLIC_TXLB] (state, data) {
            state.txlb = data.data;
        }
    },
    actions: {
        // 单据类型
        PublicBillType ({
            commit
        }) {
            return searchbilltype().then(data => {
                commit(PUBLIC_BILLTYPE, data);
                return data;
            });
        },
        // 组织机构
        PublicOrganization ({
            commit
        }) {
            return searchorganization().then(data => {
                commit(PUBLIC_ORGANIZATION, data);
                return data;
            });
        },
        // 库房
        PublicDepots ({
            commit
        }, keywords) {
            return publicdepots(keywords).then(data => {
                commit(PUBLIC_DEPOTS, data);
                return data;
            });
        },
        // 商品品牌
        PublicBrands ({
            commit
        }) {
            return publicBrands().then(data => {
                commit(PUBLIC_BRANDS, data);
                return data;
            });
        },
        // 商品类别
        PublicCategorys ({
            commit
        }) {
            return publicCategorys().then(data => {
                commit(PUBLIC_CATEGORYS, data);
                return data;
            });
        },
        // 业务员
        PublicAccount ({
            commit
        }, keywords) {
            return publicAccount(keywords).then(data => {
                commit(PUBLIC_ACCOUNT, data);
                return data;
            });
        },
        // 客户类别
        PublicClienttype ({
            commit
        }) {
            return publicClienttype().then(data => {
                commit(PUBLIC_CLENTTYPE, data);
                return data;
            });
        },
        // 品种大类
        PublicPzdl ({
            commit
        }) {
            return publicPzdl().then(data => {
                commit(PUBLIC_PZDL, data);
                return data;
            });
        },
        // 特性类别
        PublicTxlb ({
            commit
        }) {
            return publicTxlb().then(data => {
                commit(PUBLIC_TXLB, data);
                return data;
            });
        }
    }
};

import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import user from './modules/user';
import $publicservice from './modules/publicservice';
import $products from './modules/products';
import $bills from './modules/bills';
import $dept from './modules/dept';

import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        user,
        $publicservice, // 公共数据
        $products, // 品种管理
        $bills, // 单据数据
        $dept // 库存
    },
    getters
});

export default store;

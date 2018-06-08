/**
 * 单据store
 */
import {
    inventorys,
    inventorysCurtain,
    inventorysDiagram,
    inventorysSN,
    financialInventorys
} from './../../../api/dept';

import {
    DEPT_INVENTORYS,
    DEPT_INVENTORYSCURTAIN,
    DEPT_INVENTORYSDIAGRAM,
    DEPT_INVENTORYSSN,
    DEPT_FINANCIALINVENTORYS
} from '../../constants/dept';

export default {
    state: {
        inventorys: [], // 库存数量
        inventorysCurtain: [], // 库存数量帐
        inventorysDiagram: [], // 库存分布
        inventorysSN: [], // 在库序列号
        financialInventorys: [] // 财务库存
    },
    mutations: {
        // 库存数量
        [DEPT_INVENTORYS] (state, data) {
            state.inventorys = data.data;
        },
        // 库存数量帐
        [DEPT_INVENTORYSCURTAIN] (state, data) {
            state.inventorysCurtain = data.data;
        },
        // 库存分布
        [DEPT_INVENTORYSDIAGRAM] (state, data) {
            state.inventorysDiagram = data.data;
        },
        // 在库序列号
        [DEPT_INVENTORYSSN] (state, data) {
            state.inventorysSN = data.data;
        },
        // 财务库存
        [DEPT_FINANCIALINVENTORYS] (state, data) {
            state.financialInventorys = data.data;
        }
    },
    actions: {
        // 库存数量
        Inventorys ({
            commit
        }, keywords) {
            return inventorys(keywords).then(data => {
                commit(DEPT_INVENTORYS, data);
                return data;
            });
        },
        // 库存数量帐
        InventorysCurtain ({
            commit
        }, keywords) {
            return inventorysCurtain(keywords).then(data => {
                commit(DEPT_INVENTORYSCURTAIN, data);
                return data;
            });
        },
        // 库存分布
        InventorysDiagram ({
            commit
        }, keywords) {
            return inventorysDiagram(keywords).then(data => {
                commit(DEPT_INVENTORYSDIAGRAM, data);
                return data;
            });
        },
        // 在库序列号
        InventorysSN ({
            commit
        }, keywords) {
            return inventorysSN(keywords).then(data => {
                commit(DEPT_INVENTORYSSN, data);
                return data;
            });
        },
        // 财务库存
        FinancialInventorys ({
            commit
        }, keywords) {
            return financialInventorys(keywords).then(data => {
                commit(DEPT_FINANCIALINVENTORYS, data);
                return data;
            });
        }

    }
};

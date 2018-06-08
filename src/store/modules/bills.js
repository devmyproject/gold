/**
 * 单据store
 */
import {
    searchbillList
} from './../../../api/bills';

import {
    BILLS_LIST
} from '../../constants/bills';

export default {
    state: {
        billLists: [] // 单据列表
    },
    mutations: {
        // 单据列表
        [BILLS_LIST] (state, data) {
            state.billLists = data.data;
        }
    },
    actions: {
        // 单据列表
        BillList ({
            commit
        }, keywords) {
            return searchbillList(keywords).then(data => {
                commit(BILLS_LIST, data);
                return data;
            });
        }
    }
};

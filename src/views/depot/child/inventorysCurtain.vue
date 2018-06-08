<style lang="less">

</style>

<template>
    <div>
        <Card :padding="0">
            <Table border :columns="inventorysDiagramTitle" :data="inventorysCurtains"></Table>
        </Card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'inventorysCurtains',
    data () {
        return {
            triggerOffset: '500px',
            triggerOffsetV: 70,
            triggerOffsetMin: 40,
            atMax: false,
            atMin: false,
            inventorysDiagramTitle: [
                {title: '序号', type: 'index', align: 'center', width: '80px'},
                {title: '商品编码', key: 'pzdm'},
                {title: '商品名称', key: 'pzmc'},
                {title: '单据号', key: 'djh'},
                {title: '单据类型', key: 'lx'},
                {title: '对方单位', key: 'dfdw'},
                {title: '对方名称', key: 'dfmc'},
                {title: '单据号', key: 'djh'},
                {title: '出数量', key: 'djh'},
                {title: '入数量', key: 'csl'},
                {title: '余数量', key: 'ysl'}
            ],
            inventorysCurtains: []
        };
    },
    created () {
        this.InventorysCurtain(this.keywords).then(data => {
            this.inventorysCurtains = data.data;
        });
    },
    methods: {
        ...mapActions([
            'PublicDepots',
            'InventorysCurtain'
        ])
    },
    computed: {
        ...mapGetters(['$publicservice', '$dept'])
    }
};
</script>
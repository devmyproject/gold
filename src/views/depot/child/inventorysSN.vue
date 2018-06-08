<style lang="less">

</style>

<template>
    <div>
        SNNNNNN
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'inventorysSN',
    data () {
        return {
            inventorysDiagramTitle: [
                {title: '序号', type: 'index', align: 'center', width: '80px'},
                {title: '库房', key: 'kf'},
                {title: '库存数量', key: 'ysl'},
                {title: '单位', key: 'dw'}
            ],
            inventorysSN: []
        };
    },
    created () {
        this.InventorysSN(this.keywords).then(data => {
            this.inventorysSN = data.data;
        });
    },
    methods: {
        ...mapActions([
            'PublicDepots',
            'InventorysSN'
        ])
    },
    computed: {
        ...mapGetters(['$publicservice', '$dept'])
    }
};
</script>

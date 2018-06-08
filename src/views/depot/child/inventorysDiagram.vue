<style lang="less">

</style>

<template>
    <div>
        <Card :padding="0">
            <div class="split-pane-con">
                <split-pane :style="{height: '100%'}" right min="100px" :max="80" direction="horizontal" v-model="triggerOffset">
                    <div slot="left" style="height: 100%;">
                        <Table border :columns="inventorysDiagramTitle" :data="inventorysDiagram"></Table>
                    </div>
                    <div class="split-pane-right-con" slot="right" style="background: #8FB5ED;height: 100%;">
                        <p>商品编码： {{ atMin }}</p>
                        <p>商品名称： {{ atMin }}</p>
                        <div style="width:100%;height:100%;" id="data_source_con"></div>
                    </div>
                </split-pane>
            </div>
        </Card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import splitPane from '../../my-components/split-pane/split-pane';
import echarts from 'echarts';
export default {
    name: 'inventorysDiagram',
    components: {
        splitPane
    },
    data () {
        return {
            triggerOffset: '500px',
            triggerOffsetV: 70,
            triggerOffsetMin: 40,
            atMax: false,
            atMin: false,
            inventorysDiagramTitle: [
                {title: '序号', type: 'index', align: 'center', width: '80px'},
                {title: '库房', key: 'kf'},
                {title: '库存数量', key: 'ysl'},
                {title: '单位', key: 'dw'}
            ],
            inventorysDiagram: [],
            kfs: []
        };
    },
    created () {
        this.InventorysDiagram(this.keywords).then(data => {
            this.inventorysDiagram = data.data;
            this.kfs = data.data.forEach(item => {
                return this.kfs.push(item.kf);
            });
        });
    },
    methods: {
        ...mapActions([
            'PublicDepots',
            'InventorysDiagram'
        ])
    },
    computed: {
        ...mapGetters(['$publicservice', '$dept'])
    },
    mounted () {
        this.$nextTick(() => {
            var dataSourcePie = echarts.init(document.getElementById('data_source_con'));
            const option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'right',
                    data: ['pc', 'web', 'others']
                },
                series: [
                    {
                        name: '商品名称',
                        type: 'pie',
                        radius: '66%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 543250, name: 'pc', itemStyle: {normal: {color: '#abd5f2'}}},
                            {value: 798403, name: 'web', itemStyle: {normal: {color: '#ab8df2'}}},
                            {value: 302340, name: 'others', itemStyle: {normal: {color: '#e14f60'}}}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            dataSourcePie.setOption(option);
            window.addEventListener('resize', function () {
                dataSourcePie.resize();
            });
        });
    }
};
</script>
<style lang="less" scoped>
.split-pane-con{
    width: 100%;
    height: 89vh;
}
.custom-trigger{
    position: absolute;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    top: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 50%;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, .1) , 2px 2px 10px 2px rgba(0, 0, 0, .2) inset;
    border: 1px solid #c3c3c3;
    cursor: pointer;
}
.introduce-left-con h4{
    margin-bottom: 20px;
}
.introduce-left-con h5{
    margin-bottom: 10px;
    margin-left: 20px;
}
.split-pane-right-con{
    padding: 30px;
}
.split-pane-right-con p{
    font-size: 26px;
    font-weight: 700;
    color: white;
}
</style>

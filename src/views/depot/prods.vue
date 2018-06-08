<style lang="less">
.interval{
    margin: 15px 0;
}
.ivu-tooltip-inner {max-width: 100%}
</style>

<template>
    <div>
        <Row>
            <Col>
                <Card>
                    <Row slot="title">
                        <span>库房：</span>
                        <Select v-model="keyword.room" style="width:200px">
                            <Option v-for="item in roomlist" :value="item.code">{{ item.catename }}</Option>
                        </Select>
                        <span>品牌：</span>
                        <Select v-model="keyword.brand" filterable style="width:200px">
                            <Option v-for="item in brandlist" :value="item.ppid">{{ item.ppmc }}</Option>
                        </Select>
                        <span>类别：</span>
                        <Select v-model="keyword.category" filterable style="width:200px">
                            <Option v-for="item in categorylist" :value="item.catenid">{{ item.catename }}</Option>
                        </Select>
                        <span>商品信息：</span>
                        <Input v-model="keyword.prod" @on-change="handleSearch1" placeholder="请输入商品信息" style="width: 200px" />
                        <Button type="primary" @click="searchProd">搜索</Button>
                    </Row>
                    <Row class="margin-top-10 searchable-table-con1">
                        <Table border height="400" :columns="inventorysTitle" :data="inventorys"></Table>
                    </Row>
                    <div class="interval"></div>
                    <Row class="margin-top-20 searchable-table-con1">
                        <Page :total="100" show-sizer></Page>
                    </Row> 
                </Card>
            </Col>
            <Col>
                <div class="interval"></div>
                <Row>
                    <Button type="primary" @click="inventorysDiagram">库存分布</Button>
                    <Button type="primary" @click="inventorysSN">在库序列号</Button>
                    <Button type="primary" @click="inventorysCurtain">库存数量账</Button>
                    <Button type="primary" @click="financialInventorys">财务库存</Button>
                </Row>
            </Col>
        </Row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'inventorys',
    data () {
        return {
            keyword: {
                room: '161', // 库房
                brand: '', // 品牌
                category: '', // 类别
                prod: '' // 品种信息
            },
            // 库房
            roomlist: [],
            // 品牌
            brandlist: [],
            // 类别
            categorylist: [],
            // 库存列表
            inventorys: [],
            // 标题
            inventorysTitle: [
                {title: '序号', type: 'index', width: 80, align: 'center'},
                {title: '商品编码', key: 'pzdm', align: 'center'},
                {title: '商品名称',
                    key: 'pzmc',
                    ellipsis: true,
                    align: 'left',
                    width: '220px',
                    render: (h, params) => {
                        return h('div', [
                            h('Tooltip', {
                                props: {
                                    placement: 'top',
                                    content: this.inventorys[params.index].pzmc
                                }
                            }, [
                                h('p', {
                                    attrs: {
                                        class: 'hideText'
                                    }
                                }, `${this.inventorys[params.index].pzmc}`)
                            ])
                        ]);
                    }
                },
                {title: '条形码', key: 'barcode', align: 'center'},
                {title: '规格型号', key: 'ggxh', align: 'center'},
                {title: '单位', key: 'dw', align: 'center'},
                {title: '库存数量', key: 'ysl', align: 'center'}
            ]
        };
    },
    computed: {
        ...mapGetters(['$publicservice', '$dept'])
    },
    created () {
        // 库房
        this.PublicDepots().then(data => {
            this.roomlist = data.data;
        });
        // 品牌
        this.PublicBrands().then(data => {
            this.brandlist = data.data;
        });
        // 类别
        this.PublicCategorys().then(data => {
            this.categorylist = data.data;
        });
    },
    methods: {
        ...mapActions([
            'PublicDepots',
            'PublicBrands',
            'PublicCategorys',
            'Inventorys'
        ]),
        // 库存查询列表
        searchProd () {
            this.Inventorys(this.keywords).then(data => {
                this.inventorys = data.data;
            });
        },
        // 库存数量账
        inventorysCurtain () {
            this.$router.push({
                name: '库存数量账',
                query: {
                    kf: this.keyword.room,
                    brand: this.keyword.brand,
                    category: this.keyword.category,
                    pzdm: this.keyword.pzdm
                }
            });
        },
        // 库存分布
        inventorysDiagram () {
            this.$router.push({
                name: '库存分布',
                query: {
                    kf: this.keyword.room,
                    brand: this.keyword.brand,
                    category: this.keyword.category,
                    pzdm: this.keyword.pzdm
                }
            });
        },
        // 品种在库序列号
        inventorysSN (code) {
            this.$router.push({
                name: '在库序列号',
                query: {
                    kf: this.keyword.room,
                    brand: this.keyword.brand,
                    category: this.keyword.category,
                    pzdm: this.keyword.pzdm
                }
            });
        },
        // 财务库存
        financialInventorys () {
            this.$router.push({
                name: '财务库存'
            });
        }
    }
};
</script>
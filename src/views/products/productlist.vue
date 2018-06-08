<style lang="less">

</style>

<template>
    <div>
        <Row>
            <Col>
                <Card>
                    <Row slot="title">
                        <Col :span="24">
                            <span>品种类别：</span>
                            <Select v-model="keywords.cateid" placeholder="请选择品种类别" style="width: 220px" @on-change="selectcategorys($event)">
                                <Option v-for="item in categorys" :value="item.cateid">{{ item.catename }}</Option>
                            </Select>
                            <span>品种类别：</span>
                            <Select v-model="keywords.cateid" placeholder="请选择品种类别" style="width: 220px" @on-change="selectcategorys($event)">
                                <Option v-for="item in categorys" :value="item.cateid">{{ item.catename }}</Option>
                            </Select>
                            <span>品种类别：</span>
                            <Select v-model="keywords.cateid" placeholder="请选择品种类别" style="width: 220px" @on-change="selectcategorys($event)">
                                <Option v-for="item in categorys" :value="item.cateid">{{ item.catename }}</Option>
                            </Select>
                            <span>品种类别：</span>
                            <Select v-model="keywords.cateid" placeholder="请选择品种类别" style="width: 220px" @on-change="selectcategorys($event)">
                                <Option v-for="item in categorys" :value="item.cateid">{{ item.catename }}</Option>
                            </Select>
                            <Button type="primary" @click="serachBrandlist">搜索</Button>
                        </Col>
                        <!-- <Col :span="8">
                            <div style="text-align:right">
                                <Button type="primary" @click="serachBrandlist">添加</Button>
                                <Button type="primary" @click="serachBrandlist">修改</Button>
                                <Button type="primary" @click="serachBrandlist">删除</Button>
                            </div>
                        </Col> -->
                    </Row>
                    <Row class="margin-top-10 searchable-table-con1">
                        <Table border :columns="prodTitle" :data="prodlist" size="small" height="433"/>
                    </Row>
                    <Row>
                        <Col :span="24">
                            <div style="margin-top:20px;text-align:right">
                                <Page :total="100" show-total></Page>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'brandlist',
    data () {
        return {
            keywords: {
                cateid: ''
            },
            prodTitle: [
                {title: '序号', type: 'index', width: '80px', align: 'center'},
                {title: '商品编码', key: 'pzdm'},
                {title: '商品名称', key: 'pzmc'},
                {title: '品牌', key: 'pinpai'},
                {title: '类别', key: 'lb'},
                {title: '条码', key: 'barcode'},
                {title: '规格型号', key: 'ggxh'},
                {title: '单位', key: 'dw'},
                {title: '品种大类', key: 'pzdl'},
                {title: '特性类别', key: 'txlb'},
                {title: '套装', key: 'suit'},
                {title: '保质期', key: 'bzq'},
                {title: '有效期', key: 'yxq'},
                {title: '序列号', key: 'xlh'}
            ],
            prodlist: [],
            categorys: []
        };
    },
    methods: {
        ...mapActions([
            'Productlist',
            'PublicCategorys'
        ]),
        selectcategorys (cateid) {
            this.keywords.cateid = cateid;
        },
        // 根据类别搜索品牌
        serachBrandlist () {
            this.Productlist(this.keywords).then(data => {
                this.prodlist = data.data;
            });
        }
    },
    computed: {
        ...mapGetters(['$publicservice', '$products'])
    },
    created () {
        // 类别下拉选项
        this.PublicCategorys().then(data => {
            this.categorys = data.data;
        });
        // 品种列表
        this.Productlist(this.keywords).then(data => {
            this.prodlist = data.data;
        });
    }
};
</script>

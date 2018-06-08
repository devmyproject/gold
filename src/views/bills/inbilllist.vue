<style scope>
    .ivu-tooltip-inner {max-width: 100%}
</style>

<template>
    <div>
        <Form :model="keywords" label-position="right" :label-width="100">
            <Row>
                <Card>
                    <Row>
                        <Col span="20">
                            <Row :gutter="24">
                                <Col span="6">
                                    <FormItem label="起止日期：" >
                                        <DatePicker type="daterange"  v-model="datas" format="yyyy/MM/dd"  placement="bottom-end" placeholder="请选择起止日期" style="width: 180px"/>
                                    </FormItem>
                                </Col>
                                <Col span="6">
                                    <FormItem label="单据类型：">
                                        <Select v-model="keywords.lx">
                                            <Option v-for="item in invaicetype" :value="item.fx">{{ item.val }}</Option>
                                        </Select>
                                    </FormItem>
                                </Col>
                                <Col span="6">
                                    <FormItem label="库房：">
                                        <Select v-model="keywords.kf" placeholder="请选择库房">
                                            <Option v-for="item in depots" :value="item.code">{{ item.catename }}</Option>
                                        </Select>
                                    </FormItem>
                                </Col>
                                <Col span="6">
                                    <FormItem label="单据编号：">
                                        <Input v-model="keywords.djh" placeholder="请输入单据编号"/>
                                    </FormItem>
                                </Col>
                            </Row>
                        </Col>
                        <Col span="3" offset="1">
                            <Button type="primary" @click="searchBilllist">搜索</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="20">
                            <Row :gutter="24">
                                <Col span="6">
                                    <FormItem label="业务部门：" >
                                        <Select v-model="keywords.bm" placeholder="请选择业务部门" style="width: 180px" @on-change="selectBM(keywords.bm)">
                                            <Option v-for="item in organization" :value="item.cateid">{{ item.catename }}</Option>
                                        </Select>
                                    </FormItem>
                                </Col>
                                <Col span="6">
                                    <FormItem label="业务员：">
                                        <Select v-model="keywords.yw">
                                            <Option v-for="item in accounts" :value="item.id">{{ item.text }}</Option>
                                        </Select>
                                    </FormItem>
                                </Col>
                                <Col span="6">
                                    <FormItem label="对方编码：">
                                        <Input v-model="keywords.dfdm" placeholder="请输入对方编码"/>
                                    </FormItem>
                                </Col>
                                <Col span="6">
                                    <FormItem label="对方名称：">
                                        <Input v-model="keywords.dfmc" placeholder="请输入对方名称"/>
                                    </FormItem>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Row>
        </Form>
        <Row>
            <Card>
                <div class="margin-top-10">
                    <Row :gutter="24">
                        <Col span="24">
                            <Table border size="small" highlight-row :columns="listTitle" :data="billlists"></Table>
                        </Col>
                    </Row>
                </div>
            </Card>
        </Row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'orderlist',
    data () {
        return {
            // 单据列表入参
            keywords: {
                fx: -1,
                fz: 1,
                kon: 'Acc/0501/crkdjlist',
                rq1: '',
                rq2: '',
                lx: '',
                kf: '',
                yw: '',
                djh: '',
                khlx: '',
                bm: '',
                dfdw: '',
                dfmc: '',
                pzdm: ''
            },
            datas: [], // 日期
            // 库房下拉
            depots: [],
            // 组织机构下拉
            organization: [],
            // 业务下拉
            accounts: [],
            // 单据类型下拉
            invaicetype: [],
            // 单据列表标题
            listTitle: [
                {
                    title: '序号',
                    type: 'xh',
                    fixed: 'left',
                    align: 'center'
                },
                {
                    title: '单据类型',
                    key: 'lx',
                    width: '100px'
                },
                {
                    title: '单据编号',
                    key: 'djh',
                    width: '100px',
                    align: 'left'
                },
                {
                    title: '开单日期',
                    key: 'rq',
                    width: '120px',
                    ellipsis: true,
                    align: 'left'
                },
                {
                    title: '对方代码',
                    key: 'dfdm',
                    width: '120px',
                    align: 'left'
                },
                {
                    title: '对方名称',
                    key: 'dfmc',
                    align: 'left',
                    width: '200px',
                    render: (h, params) => {
                        return h('div', [
                            h('Tooltip', {
                                props: {
                                    placement: 'top',
                                    content: this.billlists[params.index].dfmc
                                }
                            }, [
                                h('p', {
                                    attrs: {
                                        class: 'hideText'
                                    }
                                }, `${this.billlists[params.index].dfmc}`)
                            ])
                        ]);
                    }
                },
                {
                    title: '库房',
                    key: 'kf',
                    width: '120px',
                    align: 'left'
                },
                {
                    title: '单据摘要',
                    key: 'zy',
                    ellipsis: true,
                    width: '200px',
                    render: (h, params) => {
                        return h('div', [
                            h('Tooltip', {
                                props: {
                                    placement: 'top',
                                    width: '400px',
                                    content: this.billlists[params.index].zy
                                }
                            }, [
                                h('p', {
                                    attrs: {
                                        class: 'hideText'
                                    }
                                }, `${this.billlists[params.index].zy}`)
                            ])
                        ]);
                    }
                },
                {
                    title: '备注',
                    key: 'bz',
                    ellipsis: true,
                    width: '200px',
                    render: (h, params) => {
                        return h('div', [
                            h('Tooltip', {
                                props: {
                                    placement: 'top',
                                    width: '400px',
                                    content: this.billlists[params.index].bz
                                }
                            }, [
                                h('p', {
                                    attrs: {
                                        class: 'hideText'
                                    }
                                }, `${this.billlists[params.index].bz}`)
                            ])
                        ]);
                    }
                },
                {
                    title: '单据金额',
                    key: 'je',
                    width: '120px',
                    align: 'right'
                },
                {
                    title: '单据状态',
                    key: 'jzbz',
                    width: '120px',
                    align: 'left'
                }
            ],
            // 单据列表数据
            billlists: []
        };
    },
    computed: {
        ...mapGetters(['$publicservice', '$bills'])
    },
    created () {
        // 单据类型
        this.PublicBillType().then(data => {
            this.invaicetype = data.data;
        });
        // 组织机构
        this.PublicOrganization().then(data => {
            this.organization = data.data;
        });
        // 库房
        this.PublicDepots(this.keywords.yw).then(data => {
            this.depots = data.data;
        });
        // 业务
        this.PublicAccount(this.keywords.bm).then(data => {
            this.accounts = data.data;
        });
    },
    methods: {
        ...mapActions([
            'BillList',
            'PublicBillType',
            'PublicOrganization',
            'PublicAccount',
            'PublicDepots'
        ]),
        // 列表搜索
        searchBilllist () {
            this.keywords.rq1 = this.datas[0];
            this.keywords.rq2 = this.datas[1];
            this.BillList(this.keywords).then(data => {
                this.billlists = data.data;
            });
        },
        // 部门改变
        selectBM (e) {
            this.keywords.bm = e;
        }
    }
};
</script>

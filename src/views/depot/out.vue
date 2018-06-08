

<template>
    <div>
        <Row>
            <Card>
                <p slot="title">
                    <Icon type="compose"></Icon>
                    单据信息
                </p>
                <div class="margin-top-10">
                    单据编码：001
                    库房：002
                    单据类型：003销售
                    业务部门：001 
                    摘要：001
                    制单人：001
                    制单时间：001
                    业务：001 
                    备注：001 
                </div>
            </Card>
        </Row>
         <Row>
            <Card>
                <p slot="title">
                    <Icon type="compose"></Icon>
                    客户信息
                </p>
                <div class="margin-top-10">
                    对方编码：001
                    联系人：002
                    联系电话：003销售
                    联系地址：001 
                </div>
            </Card>
        </Row>
         <Row>
            <Card>
                <p slot="title">
                    <Icon type="compose"></Icon>
                    物流信息
                </p>
                <div class="margin-top-10">
                    发货人：002
                    发货地址：001
                    联系电话：003销售
                    <br/>
                    收货人：002
                    收货地址：001
                    收系电话：003销售
                </div>
            </Card>
        </Row>
        <Row class="margin-top-10">
            <Card>
                <p slot="title">
                    <Icon type="compose"></Icon>
                    商品详情
                </p>
                <div class="margin-top-10">
                    <Table :columns="columns10" :data="data9"></Table>
                </div>
            </Card>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'order-info',
    data () {
        return {
            showInfo: false,
            columns10: [
                {
                    title: '序号',
                    type: 'index'
                },
                {
                    title: '产品编码',
                    key: 'name'
                },
                {
                    title: '产品名称',
                    key: 'name'
                },
                {
                    title: '规格型号',
                    key: 'name'
                },
                {
                    title: '单位',
                    key: 'name'
                },
                {
                    title: '单据数量',
                    key: 'name'
                },
                {
                    title: '已出数量',
                    key: 'name'
                },
                {
                    title: '待出数量',
                    key: 'name'
                },
                {
                    title: '库存数量',
                    key: 'name'
                },
                {
                    title: '中止数量',
                    key: 'name'
                },
                {
                    title: '操作',
                    key: 'show_more',
                    align: 'center',
                    render: (h, params) => {
                        return h('Button', {
                            props: {
                                type: 'button',
                                size: 'small'
                            },
                            on: {
                                click: () => {
                                    let query = {shopping_id: params.row.shopping_id};
                                    this.$router.push({
                                        name: 'shopping',
                                        query: query
                                    });
                                }
                            }
                        }, '出库');
                    }
                }
            ],
            data9: [
                {name: '王小明', age: 18, address: '北京市朝阳区芍药居', job: '数据工程师', interest: '羽毛球', birthday: '1991-05-14', book: '乔布斯传', movie: '致命魔术', music: 'I Cry'},
                {name: '王小明', age: 18, address: '北京市朝阳区芍药居', job: '数据工程师', interest: '羽毛球', birthday: '1991-05-14', book: '乔布斯传', movie: '致命魔术', music: 'I Cry'},
                {name: '王小明', age: 18, address: '北京市朝阳区芍药居', job: '数据工程师', interest: '羽毛球', birthday: '1991-05-14', book: '乔布斯传', movie: '致命魔术', music: 'I Cry'},
                {name: '王小明', age: 18, address: '北京市朝阳区芍药居', job: '数据工程师', interest: '羽毛球', birthday: '1991-05-14', book: '乔布斯传', movie: '致命魔术', music: 'I Cry'},
                {name: '王小明', age: 18, address: '北京市朝阳区芍药居', job: '数据工程师', interest: '羽毛球', birthday: '1991-05-14', book: '乔布斯传', movie: '致命魔术', music: 'I Cry'},
                {name: '王小明', age: 18, address: '北京市朝阳区芍药居', job: '数据工程师', interest: '羽毛球', birthday: '1991-05-14', book: '乔布斯传', movie: '致命魔术', music: 'I Cry'},
                {name: '王小明', age: 18, address: '北京市朝阳区芍药居', job: '数据工程师', interest: '羽毛球', birthday: '1991-05-14', book: '乔布斯传', movie: '致命魔术', music: 'I Cry'},
                {name: '王小明', age: 18, address: '北京市朝阳区芍药居', job: '数据工程师', interest: '羽毛球', birthday: '1991-05-14', book: '乔布斯传', movie: '致命魔术', music: 'I Cry'},
                {name: '王小明', age: 18, address: '北京市朝阳区芍药居', job: '数据工程师', interest: '羽毛球', birthday: '1991-05-14', book: '乔布斯传', movie: '致命魔术', music: 'I Cry'},
                {name: '王小明', age: 18, address: '北京市朝阳区芍药居', job: '数据工程师', interest: '羽毛球', birthday: '1991-05-14', book: '乔布斯传', movie: '致命魔术', music: 'I Cry'},
                {name: '王小明', age: 18, address: '北京市朝阳区芍药居', job: '数据工程师', interest: '羽毛球', birthday: '1991-05-14', book: '乔布斯传', movie: '致命魔术', music: 'I Cry'}
            ]
        };
    },
    methods: {
        init () {
            let index = parseInt(
                this.$route.params.order_id.toString().substr(-1, 1)
            );
        }
    },
    mounted () {
        this.init();
    },
    activated () {
        this.init();
    }
};
</script>

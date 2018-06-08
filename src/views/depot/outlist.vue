<style lang="less">
.interval{
    margin: 15px 0;
}
</style>

<template>
    <div>
        <Row>
            <Col>
                <Card>
                    <Row slot="title">
                        <span>库房：</span>
                        <Select v-model="keyword.room" disabled style="width:200px">
                            <Option v-for="item in roomlist" :value="item.code" :key="item.code">{{ item.label }}</Option>
                        </Select>
                        <span>单据号：</span>
                        <Input v-model="keyword.prod" @on-change="handleSearch1" placeholder="请输入商品信息" style="width: 200px" />
                        <Button type="primary" @click="handleSearch1">搜索</Button>
                    </Row>
                    <Row class="margin-top-10 searchable-table-con1">
                        <Table border height="450" :columns="columns1" :data="data1"></Table>
                    </Row>
                    <!-- <div class="interval"></div>
                    <Row class="margin-top-20 searchable-table-con1">
                        <Page :total="100" show-sizer></Page>
                    </Row>  -->
                </Card>
            </Col>
            <Col>
                <div class="interval"></div>
                <Row>
                    <Button type="primary" @click="handleSearch1">出库</Button>
                </Row>
            </Col>
        </Row>
    </div>
</template>

<script>

export default {
    name: 'dragable-table',
    data () {
        return {
            keyword: {
                room: '001', // 库房
                prod: '' // 品种信息
            },
            // 库房列表
            roomlist: [
                {code: '001', label: '库房1'},
                {code: '002', label: '库房2'},
                {code: '003', label: '库房3'}
            ],
            columns1: [
                {title: '序号', type: 'index', width: 80, align: 'center'},
                {title: '单据号', key: 'invoice', align: 'center'},
                {title: '出库类型', key: 'invoicetype', align: 'center'},
                {title: '对方编码', key: 'invoicetype', align: 'center'},
                {title: '对方名称', key: 'invoicetype', align: 'center'},
                {title: '开单人', key: 'single', align: 'center'},
                {title: '开单日期', key: 'single', align: 'center'},
                {title: '审核人', key: 'auditor', align: 'center'},
                {title: '审核日期', key: 'single', align: 'center'},
                {title: '状态', key: 'state', align: 'center'}
            ],
            data1: [
                {invoice: '20180520000001', invoicetype: '销售', single: 'sss', singledata: '2018-05-20', auditor: 'New', date: '2018-05-20', state: 1},
                {invoice: '20180520000002', invoicetype: '销售', single: 'sss', singledata: '2018-05-20', auditor: 'New', date: '2018-05-20', state: 1},
                {invoice: '20180520000003', invoicetype: '调拨', single: 'sss', singledata: '2018-05-20', auditor: 'New', date: '2018-05-20', state: 1},
                {invoice: '20180520004000', invoicetype: '调拨', single: 'sss', singledata: '2018-05-20', auditor: 'New', date: '2018-05-20', state: 1},
                {invoice: '20180520000005', invoicetype: '销售', single: 'sss', singledata: '2018-05-20', auditor: 'New', date: '2018-05-20', state: 1},
                {invoice: '20180520000006', invoicetype: '销售', single: 'sss', singledata: '2018-05-20', auditor: 'New', date: '2018-05-20', state: 1},
                {invoice: '20180520000007', invoicetype: '销售', single: 'sss', singledata: '2018-05-20', auditor: 'New', date: '2018-05-20', state: 1},
                {invoice: '20180520000008', invoicetype: '销售', single: 'sss', singledata: '2018-05-20', auditor: 'New', date: '2018-05-20', state: 1},
                {invoice: '20180520000009', invoicetype: '销售', single: 'sss', singledata: '2018-05-20', auditor: 'New', date: '2018-05-20', state: 1},
                {invoice: '20180520000010', invoicetype: '销售', single: 'sss', singledata: '2018-05-20', auditor: 'New', date: '2018-05-20', state: 1}
            ]
        };
    },
    methods: {},
    created () {
        // 可在此从服务端获取表格数据
    }
};
</script>

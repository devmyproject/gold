<style lang="less">
    @import '../table.less';
</style>

<template>
    <div>
        <Row :gutter="24">
            <Col span="24">
                <Row>
                    <p style="margin: 0 10px;">商品列表</p>
                </Row>
                <Row>
                    <Input v-model="searchConName3" placeholder="请输入姓名搜搜..." style="width: 200px" />
                    <span @click="handleSearch3" style="margin: 0 10px;"><Button type="primary" icon="search">搜索</Button></span>
                    <Button @click="handleCancel3" type="ghost" >取消</Button>
                </Row>
                <Row class="margin-top-10 searchable-table-con1">
                    <Table :columns="columns1" :data="data1"></Table>
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
            searchConName3: '', // 搜索条件
            columns1: [ // 列名
                {title: '用户编码', key: 'uid'},
                {title: '用户姓名', key: 'uname'},
                {title: '用户状态',
                    key: 'ustate',
                    render: (h, params) => {
                        const row = params.row;
                        const color = row.ustate === 1 ? 'green' : row.ustate === 0 ? 'red' : 'blue';
                        const text = row.ustate === 1 ? '启用' : row.ustate === 0 ? '停用' : '管理员';

                        return h('Tag', {
                            props: {
                                type: 'dot',
                                color: color
                            }
                        }, text);
                    }
                }
            ],
            data1: [
                {uname: 'admin', uid: 1000, ustate: 2},
                {uname: 'John Brown', uid: 1001, ustate: 1},
                {uname: 'John Brown', uid: 1002, ustate: 1},
                {uname: 'John Brown', uid: 1003, ustate: 0},
                {uname: 'John Brown', uid: 1004, ustate: 0},
                {uname: 'John Brown', uid: 1005, ustate: 1}
            ]
        };
    },
    methods: {
        handleSearch3 () {},
        handleCancel3 () {}
    },
    created () {
        // 可在此从服务端获取表格数据
    }
};
</script>

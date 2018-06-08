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
                {title: '所属部门', key: 'udepart'},
                {title: '上级部门', key: 'pdepart'}
            ],
            data1: [
                {uname: 'John Brown', uid: 1001, udepart: '部门1', deptid: '101', pdepart: '上级部门1', deptpid: '10'},
                {uname: 'John Brown', uid: 1002, udepart: '部门2', deptid: '102', pdepart: '上级部门1', deptpid: '10'},
                {uname: 'John Brown', uid: 1003, udepart: '部门3', deptid: '103', pdepart: '上级部门1', deptpid: '10'},
                {uname: 'John Brown', uid: 1004, udepart: '部门4', deptid: '111', pdepart: '上级部门2', deptpid: '11'},
                {uname: 'John Brown', uid: 1005, udepart: '部门5', deptid: '112', pdepart: '上级部门2', deptpid: '11'}
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

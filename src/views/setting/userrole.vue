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
                    <Table :columns="columns1" :data="data1" highlight-row @on-current-change="aaa"></Table>
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
                {title: '用户角色',
                    key: 'urole',
                    render: (h, params) => {
                        const row = params.row;
                        const color = row.urole === 0 ? 'green' : row.urole === 1 ? 'red' : row.urole === 2 ? 'yellow' : 'blue';
                        const text = row.urole === 0 ? '采购' : row.urole === 1 ? '销售' : row.urole === 2 ? '销售' : '管理员';
                        return h('Tag', {
                            props: {
                                type: 'dot',
                                color: color
                            },
                            on: {
                                click: () => {
                                    this.dbclick(params.index);
                                }
                            }
                        }, text);
                    }
                }
            ],
            data1: [
                {uname: 'John Brown', uid: 1001, urole: 0},
                {uname: 'John Brown', uid: 1002, urole: 1},
                {uname: 'John Brown', uid: 1003, urole: 2},
                {uname: 'John Brown', uid: 1004, urole: 3},
                {uname: 'John Brown', uid: 1005, urole: 4}
            ]
        };
    },
    methods: {
        aaa () {
            console.log(this);
        },
        handleSearch3 () {},
        handleCancel3 () {},
        dbclick (index) {
            console.log(index);
        }
    },
    created () {
        // 可在此从服务端获取表格数据
    }
};
</script>

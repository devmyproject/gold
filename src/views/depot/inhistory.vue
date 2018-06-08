<style lang="less">

</style>

<template>
    <div>
       <Table border :columns="columns1" :data="data1"></Table>
    </div>
</template>

<script>

export default {
    name: 'dragable-table',
    data () {
        return {
            columns1: [
                {title: 'Name', key: 'name'},
                {title: 'Age', key: 'age'},
                {title: 'Address', key: 'address'}
            ],
            data1: [
                {name: 'John Brown', age: 18, address: 'New York No. 1 Lake Park', date: '2016-10-03'},
                {name: 'John Brown', age: 18, address: 'New York No. 1 Lake Park', date: '2016-10-03'},
                {name: 'John Brown', age: 18, address: 'New York No. 1 Lake Park', date: '2016-10-03'},
                {name: 'John Brown', age: 18, address: 'New York No. 1 Lake Park', date: '2016-10-03'},
                {name: 'John Brown', age: 18, address: 'New York No. 1 Lake Park', date: '2016-10-03'}
            ]
        };
    },
    methods: {},
    created () {
        // 可在此从服务端获取表格数据
    }
};
</script>

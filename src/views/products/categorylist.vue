<style lang="less">

</style>

<template>
    <div>
        <Row>
            <Col>
                <Card>
                    <Row>
                        <Table border :columns="categoryTitle" ref="tabledata" :data="categorylist" size="small" height="433" highlight-row @on-current-change="selectCategory"/>
                    </Row>
                    <Row>
                        <Col :span="12">
                            <div style="margin-top:20px;text-align:left">
                                <Button type="primary" @click="category('添加类别')">添加</Button>
                                <Button type="primary" @click="category('修改类别')" :disabled="btn">修改</Button>
                                <Button type="primary" @click="delCategory" :disabled="btn">删除</Button>
                                <Button type="primary" @click="exportData">导出</Button>
                            </div>
                        </Col>
                        <Col :span="12">
                            <div style="margin-top:20px;text-align:right">
                                <Page :total="100" show-total></Page>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        <!-- 弹窗 -->
        <Modal
        :title="modalTitle"
            v-model="modalData"
            :mask-closable="false">
            <Form :model="categoryForm" ref="categoryForm" :rules="ruleValiCategory" :label-width="80">
                <FormItem label="类别编码">
                    <Input v-model="categoryForm.cateid" disabled placeholder="类别编码"></Input>
                </FormItem>
                <FormItem label="类别名称" prop="catename">
                    <Input v-model="categoryForm.catename" placeholder="请输入类别名称"></Input>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="error" size="large"  @click="cancel">取消</Button>
                <Button type="primary" size="large"  @click="sure('categoryForm')">确定</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'brandlist',
    data () {
        return {
            // 查询入参
            keywords: {
                cateid: ''
            },
            // 类别列表标题
            categoryTitle: [
                {title: '序号', type: 'index', width: '80px', align: 'center'},
                {title: '类别编码', key: 'code', width: '200px'},
                {title: '类别名称', key: 'text'}
            ],
            brands: [], // 品牌下拉框
            categorylist: [], // 类别列表
            modalTitle: '', // 类别弹窗标题
            modalData: false, // 类别弹窗
            btn: true, // 修改、删除按钮在选择行以后才可点击
            categoryForm: {
                cateid: '', // 类别编码
                catename: '' // 类别名称
            },
            // 校验
            ruleValiCategory: {
                catename: [
                    { required: true, message: '请输入类别名称', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        ...mapActions([
            'Categorylist',
            'Category',
            'DelCategory'
        ]),
        // 选择品牌
        selectBrand (brandid) {
            this.keywords.brandid = brandid;
        },
        // 选择类别行
        selectCategory (currentRow, oldCurrentRow) {
            this.categoryForm.cateid = currentRow.code;
            this.categoryForm.catename = currentRow.text;
            this.btn = false;
        },
        // 根据品牌搜索类别
        serachBrandlist () {
            this.Categorylist(this.keywords).then(data => {
                this.categorylist = data.data;
            });
        },
        // 添加、修改类别
        category (title) {
            this.modalData = true;
            this.modalTitle = title;
        },
        // 删除类别
        delCategory () {
            this.DelCategory(this.categoryForm.cateid).then(data => {
                if (data.errno == 0) {
                    this.$Message.success(data.errmsg);
                } else {
                    this.$Message.error(data.errmsg);
                }
            });
        },
        // 确定操作
        sure (rule) {
            this.$refs[rule].validate((valid) => {
                if (valid) {
                    this.Category(this.categoryForm).then(data => {
                        if (data.errno == 0) {
                            this.$Message.success(data.errmsg);
                        } else {
                            this.$Message.error(data.errmsg);
                        }
                    });
                } else {
                    this.$Message.error('请将类别信息填写完整！！！');
                }
            });
        },
        // 取消操作
        cancel () {
            this.modalData = false;
            this.$Message.error('您取消了当前的从操作！！！');
        },
        // 类别导出
        exportData () {
            this.$refs.tabledata.exportCsv({
                filename: '商品类别列表',
                original: false
            });
        }
    },
    computed: {
        ...mapGetters(['$publicservice', '$products'])
    },
    created () {
        // 类别列表
        this.Categorylist(this.keywords).then(data => {
            this.categorylist = data.data;
        });
    }
};
</script>

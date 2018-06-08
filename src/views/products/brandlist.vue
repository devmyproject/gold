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
                            <Button type="primary" @click="serachBrandlist">搜索</Button>
                        </Col>
                    </Row>
                    <Row class="margin-top-10 searchable-table-con1">
                        <Table border :columns="brandTitle" :data="brandlist" size="small" height="433" ref="tabledata" highlight-row @on-current-change="selectBrand"/>
                    </Row>
                    <Row>
                        <Col :span="12">
                            <div style="margin-top:20px;text-align:right">
                                <Page :total="100" show-total></Page>
                            </div>
                        </Col>
                         <Col :span="12">
                            <div style="margin-top:20px;text-align:left">
                                <Button type="primary" @click="brand('添加品牌')">添加</Button>
                                <Button type="primary" @click="brand('修改品牌')" :disabled="btn">修改</Button>
                                <Button type="primary" @click="delbrand" :disabled="btn">删除</Button>
                                <Button type="primary"@click="exportData">导出</Button>
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
            <Form :model="brandForm" ref="brandForm" :rules="ruleValiCategory" :label-width="80">
                <FormItem label="品牌编码">
                    <Input v-model="brandForm.ppid" disabled placeholder="品牌编码"></Input>
                </FormItem>
                <FormItem label="品牌名称" prop="ppmc">
                    <Input v-model="brandForm.ppmc" placeholder="请输入品牌名称"></Input>
                </FormItem>
                <FormItem label="所属类别" prop="lbmc">
                    <Select v-model="brandForm.cateid" placeholder="请选择品种类别" style="width: 220px" @on-change="selectcategorys($event)">
                        <Option v-for="item in categorys" :value="item.cateid">{{ item.catename }}</Option>
                    </Select>
                    <!-- <Input v-model="brandForm.lbmc" placeholder="请输入品牌名称"></Input> -->
                </FormItem>
                <FormItem label="logo">
                    <Input v-model="brandForm.logo" placeholder=""></Input>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="error" size="large"  @click="cancel">取消</Button>
                <Button type="primary" size="large"  @click="sure('brandForm')">确定</Button>
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
            // 品牌列表标题
            brandTitle: [
                {title: '序号', type: 'index', width: '80px', align: 'center'},
                {title: '品牌编码', key: 'ppid', width: '200px'},
                {title: '品牌名称', key: 'ppmc'},
                {title: '所属类别', key: 'lbmc'},
                {title: 'logo', key: 'logo', width: '100px'}
            ],
            // 品牌列表数据
            brandlist: [],
            // 类别下拉选项
            categorys: [],
            // 修改、删除按钮状态
            btn: true,
            modalTitle: '', // 品牌弹窗标题
            modalData: false, // 品牌弹窗
            // 品牌弹窗操作入参
            brandForm: {
                ppid: '',
                ppmc: '',
                cateid: '',
                logo: ''
            },
            // 校验
            ruleValiCategory: {
                ppmc: [
                    { required: true, message: '请输入品牌名称', trigger: 'blur' }
                ],
                cateid: [
                    { required: true, message: '请输选择商品类别', trigger: 'change' }
                ]
            }
        };
    },
    methods: {
        ...mapActions([
            'PublicCategorys',
            'Brandlist',
            'Brand',
            'DelBrand'
        ]),
        // 类别下拉选项
        selectcategorys (cateid) {
            this.keywords.cateid = cateid;
        },
        // 品牌行选择
        selectBrand (currentRow, oldCurrentRow) {
            this.brandForm.ppid = currentRow.ppid;
            this.brandForm.ppmc = currentRow.ppmc;
            this.brandForm.cateid = currentRow.cateid;
            this.btn = false;
        },
        // 根据类别搜索品牌
        serachBrandlist () {
            this.Brandlist(this.keywords).then(data => {
                this.brandlist = data.data;
            });
        },
        // 品牌操作【添加、修改】
        brand (title) {
            this.modalData = true;
            this.modalTitle = title;
        },
        // 品牌操作【删除】
        delbrand () {
            this.DelBrand(this.brandForm.ppid).then(data => {
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
                    this.Brand(this.brandForm).then(data => {
                        if (data.errno == 0) {
                            this.$Message.success(data.errmsg);
                        } else {
                            this.$Message.error(data.errmsg);
                        }
                    });
                } else {
                    this.$Message.error('请将品牌信息填写完整！！！');
                }
            });
        },
        // 取消操作
        cancel () {
            this.modalData = false;
            this.$Message.error('您取消了当前的从操作！！！');
        },
        // 导出
        exportData () {
            this.$refs.tabledata.exportCsv({
                filename: '商品品牌列表',
                original: false
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
        // 品牌列表
        this.Brandlist(this.keywords).then(data => {
            this.brandlist = data.data;
        });
    }
};
</script>

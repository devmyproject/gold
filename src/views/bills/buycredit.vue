
<template>
    <div>
        <Form :model="billsdata" label-position="right" :label-width="100">
            <Row>
                <Card>
                    <p slot="title">
                        <Icon type="compose"></Icon>
                        单据信息
                    </p>
                    <Row :gutter="24">
                        <Col span="8">
                            <FormItem label="单据编号：">
                                <Input v-model="billsdata.invoice.invaiceno" disabled placeholder="保存单据后自动生成"/>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="单据类型：">
                                <Select v-model="billsdata.invoice.invaicetype" disabled>
                                    <Option v-for="item in invaicetype" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="库房：">
                                <Select v-model="billsdata.invoice.depotid" disabled placeholder="请选择库房">
                                    <Option v-for="item in depots" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>   
                    <Row :gutter="24">
                        <Col span="8">
                            <FormItem label="业务部门：">
                                <Select v-model="billsdata.invoice.businessid" placeholder="请选择业务部门">
                                    <Option v-for="item in organization" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="业务员：">
                                <Select v-model="billsdata.invoice.businessuser" placeholder="请选择业务员">
                                    <Option v-for="item in users" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </FormItem>
                        </Col>
                        <Col span="8">
                        <FormItem label="开单日期：" >
                                <DatePicker v-model="billsdata.invoice.invaicedata" :options="invaicedata" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="请选择日期" style="width:100%"></DatePicker>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="24">
                        <Col span="24">
                            <FormItem label="摘要：">
                                <Input v-model="billsdata.invoice.abstract" disabled placeholder="保存单据后自动生成"></Input>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="24">
                        <Col span="24">
                            <FormItem label="备注：">
                                <Input v-model="billsdata.invoice.remark" type="textarea" :rows="3" placeholder="请填写备注信息"></Input>
                            </FormItem>
                        </Col>
                    </Row>
                </Card>
            </Row>
            <Row>
                <Card>
                    <p slot="title">
                        <Icon type="compose"></Icon>
                        客户信息
                    </p>
                    <a href="#" slot="extra" @click.prevent="searchClient">
                        <Icon type="search"></Icon>
                        客户信息查询
                    </a>
                    <Row :gutter="24">
                        <Col span="6">
                            <FormItem label="对方编码：">
                                <Input v-model="billsdata.client.clientid" placeholder="请填写对方编码"></Input>
                            </FormItem>
                        </Col>
                        <Col span="6">
                            <FormItem label="对方名称：">
                                <Input v-model="billsdata.client.clientname" placeholder="请填写对方名称"></Input>
                            </FormItem>
                        </Col>
                        <Col span="6">
                            <FormItem label="联系人：">
                                <Input v-model="billsdata.client.clientuser" placeholder="请填写对方联系人"></Input>
                            </FormItem>
                        </Col>
                        <Col span="6">
                            <FormItem label="联系方式">
                                <Input v-model="billsdata.client.clienttel" placeholder="请填写对方联系人"></Input>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="24">
                        <Col span="24">
                            <FormItem label="联系地址：">
                                <Input v-model="billsdata.client.clientaddr" placeholder="请填写联系地址"></Input>
                            </FormItem>
                        </Col>
                    </Row>
                </Card>
            </Row>
            <!-- <Row>
                <Card>
                    <p slot="title">
                        <Icon type="compose"></Icon>
                        物流信息
                    </p>
                    <Row :gutter="24">
                        <Col span="6">
                            <FormItem label="发货人：">
                                <Input v-model="billsdata.physical.sendname"></Input>
                            </FormItem>
                        </Col>
                        <Col span="6">
                            <FormItem label="联系方式：">
                                <Input v-model="billsdata.physical.sendntel"></Input>
                            </FormItem>
                        </Col>
                        <Col span="12">
                            <FormItem label="发货人地址：">
                                <Input v-model="billsdata.physical.sendaddr"></Input>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="24">
                        <Col span="6">
                            <FormItem label="收货人：">
                                <Input v-model="billsdata.physical.putname"></Input>
                            </FormItem>
                        </Col>
                        <Col span="6">
                            <FormItem label="联系方式：">
                                <Input v-model="billsdata.physical.puttel"></Input>
                            </FormItem>
                        </Col>
                        <Col span="12">
                            <FormItem label="收货人地址：">
                                <Input v-model="billsdata.physical.putaddr"></Input>
                            </FormItem>
                        </Col>
                    </Row>
                </Card>
            </Row> -->
        </Form>
        <Row>
            <Card>
                <p slot="title">
                    <Icon type="compose"></Icon>
                    商品详情
                </p>
                <a href="#" slot="extra" @click.prevent="addProd">
                    <Icon type="search"></Icon>
                    添加品种
                </a>
                <a href="#" slot="extra" @click.prevent="editProd">
                    <Icon type="search"></Icon>
                    编辑品种
                </a>
                <a href="#" slot="extra" @click.prevent="delProd">
                    <Icon type="search"></Icon>
                    删除品种
                </a>
                <div class="margin-top-10">
                    <!-- <Row :gutter="24">
                        <Col span="24">
                            <Button type="info">保存</Button>
                            <Button type="info">保存&开新单</Button>
                            <Button type="info">保存&关闭</Button>
                        </Col>
                    </Row> -->
                    <Row :gutter="24">
                        <Col span="24">
                            <Table ref="selection" highlight-row :columns="prodtitle" :data="billsdata.prods" @on-selection-change="selectBillsdata" @on-current-change="currentProd"></Table>
                        </Col>
                    </Row>
                    
                </div>
            </Card>
        </Row>
        <Row>
            <Card>
                <div class="margin-top-10">
                    <Row :gutter="24">
                        <Col span="24">
                            <Button type="info">保存</Button>
                            <Button type="info">保存&开新单</Button>
                            <Button type="info">保存&关闭</Button>
                            <Button type="info">打印</Button>
                        </Col>
                    </Row>
                </div>
            </Card>
        </Row>
        <!-- 弹出对话框 -->
        <!-- 对方信息 -->
        <Modal
            v-model="modalClient"
            title="对方信息查询"
            width="60%"
            height="350px"
            :styles="{top: '20px'}">

            <Input v-model="value13" placeholder="请输入对方信息 ">
                <Button slot="append" icon="ios-search"></Button>
            </Input>
            <Table :columns="clenttitle" :data="data9" @on-row-dblclick="dbClentdata"></Table>
            <Page :total="100" show-total></Page>
            <div slot="footer"></div>
        </Modal>
        <!-- 产品信息 -->
        <Modal
            v-model="modalProd"
            title="品种查询"
            width="60%"
            height="350px"
            :styles="{top: '20px'}"
            @on-ok="okProd"
            @on-cancel="取消">
            <Input v-model="value13" placeholder="请输入产品信息">
                <Button slot="append" icon="ios-search"></Button>
            </Input>
            <Table :columns="searchprodtitle" :data="data9" @on-selection-change="selectProddata"></Table>
            <Page :total="100" show-total></Page>
        </Modal>
        <!-- 编辑品种信息 -->
        <Modal
            v-model="modalEditprod"
            title="品种编辑"
            width="60%"
            height="350px"
            :styles="{top: '20px'}"
            @on-ok="okProd"
            @on-cancel="取消">
            <Input v-model="value13" placeholder="请输入产品信息">
                <Button slot="append" icon="ios-search"></Button>
            </Input>
        </Modal>
    </div>
</template>

<script>
export default {
    name: 'order-info',
    data () {
        return {
            modalClient: false, // 客户查询表对话框
            modalProd: false, // 产品信息查询对话框
            modalEditprod: false, // 编辑品种信息对话框
            invaicedata: { // 单据日期，设置不可选择的日期
                disabledDate (date) {
                    return date && date.valueOf() < Date.now() - 86400000;
                }
            },
            // 单据入参
            billsdata: {
                invoice: { // 单据信息
                    invaicedirection: 1, // 方向：1入，-1出
                    invaicetype: 1,
                    invaiceno: '20181001', // 单据编号
                    invaicedata: new Date(), // 单据日期
                    depotid: 4, // 库房编码
                    businessid: 2, // 业务部门id
                    businessuser: 2, // 业务员id
                    abstract: '333', // 摘要
                    remark: '444' // 备注
                },
                client: { // 对方信息
                    clientid: '10001', // 编码
                    clientname: '***科技有限公司', // 名称
                    clientuser: 'miss wang', // 编码
                    clienttel: '112345678901', // 电话
                    clientaddr: '北京' // 地址
                },
                physical: { // 物流信息
                    sendname: '', // 发货人名称
                    sendtel: '', // 联系方式
                    sendaddr: '', // 地址
                    putname: '', // 收货人名称
                    puttel: '', // 联系方式
                    putaddr: '' // 地址
                },
                prods: []
            },
            // 库房
            depots: [
                {label: '库房1', value: 1},
                {label: '库房2', value: 2},
                {label: '库房3', value: 3},
                {label: '库房4', value: 4}
            ],
            organization: [
                {label: '采购部', value: 1},
                {label: '销售部', value: 2},
                {label: '库房管理部', value: 3}
            ],
            users: [
                {label: '张先生', value: 1},
                {label: '李先生', value: 2},
                {label: '高先生', value: 3}
            ],
            // 单据类型
            invaicetype: [
                {label: '采购', value: 1},
                {label: '赊购', value: 2},
                {label: '借入', value: 3},
                {label: '调入', value: 4},
                {label: '销售', value: -1},
                {label: '赊销', value: -2},
                {label: '借出', value: -3},
                {label: '调出', value: -4}
            ],
            showInfo: false,
            clenttitle: [
                {
                    title: '序号',
                    type: 'index'
                },
                {
                    title: '对方编码',
                    key: 'name'
                },
                {
                    title: '对方名称',
                    key: 'name'
                },
                {
                    title: '联系人',
                    key: 'name'
                },
                {
                    title: '联系电话',
                    key: 'name'
                },
                {
                    title: '联系地址',
                    key: 'name'
                }
            ],
            prodtitle: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
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
                    title: '单价',
                    key: 'name'
                },
                {
                    title: '合计',
                    key: 'name'
                },
                {
                    title: '库存数量',
                    key: 'name'
                }
            ],
            searchprodtitle: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
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
                    title: '库存数量',
                    key: 'name'
                }
            ],
            data9: [
                {id: 1, name: '王小明1'},
                {id: 2, name: '王小明2'},
                {id: 3, name: '王小明3'},
                {id: 4, name: '王小明4'},
                {id: 5, name: '王小明5'},
                {id: 6, name: '王小明6'},
                {id: 7, name: '王小明7'},
                {id: 8, name: '王小明8'},
                {id: 9, name: '王小明9'},
                {id: 10, name: '王小明0'},
                {id: 11, name: '王小明a'}
            ],
            selectBillProd: [], // 查询品种选中行
            selectProd: [], // 查询品种选中行
            prod: {
                name: ''
            } // 编辑品种选中数据

        };
    },
    methods: {
        init () {
            // let index = parseInt(
            //     this.$route.params.order_id.toString().substr(-1, 1)
            // );
        },
        // 对方信息查询
        searchClient () {
            this.modalClient = true;
        },
        // 双击添加客户信息
        dbClentdata (data, index) {
            this.billsdata.client = data;
            this.modalClient = false;
        },
        /** 单据品种操作 */
        selectBillsdata (selection1, row) {
            this.selectBillProd = selection1;
        },
        // 添加品种
        addProd () {
            this.modalProd = true;
        },
        // 编辑品种
        editProd () {
            if (this.prod.name === '') {
                this.$Notice.info({
                    title: '请选择要编辑的品种',
                    duration: 3
                });
                this.modalEditprod = false;
            } else {
                this.modalEditprod = true;
            }
        },
        // 删除品种
        delProd () {
            let ids = this.selectBillProd;
            if (ids.length === 0) {
                this.$Notice.info({
                    title: '请选择要删除的品种',
                    duration: 3
                });
            } else {
                this.billsdata.prods = this.billsdata.prods.filter(item => !ids.some(ele => ele.id === item.id));
            }
        },
        currentProd (currentRow, oldCurrentRow) {
            // console.log(currentRow);
            this.prod = currentRow;
        },
        /** 品种查询操作 */
        // 查询品种选中行
        selectProddata (selection, row) {
            this.selectProd = selection;
        },
        // 查询品种确定
        okProd () {
            if (this.selectProd.length === 0) {
                this.$Notice.info({
                    title: '您没有选择添加品种',
                    duration: 3
                });
            } else {
                this.billsdata.prods = this.selectProd;
            }
        }
    },
    mounted () {
        // this.init();
        // this.searchClient();
    },
    activated () {
        // this.init();
    }
};
</script>

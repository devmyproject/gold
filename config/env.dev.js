var merge = require('webpack-merge')
var envProd = require('./env.prod')

module.exports = merge(envProd,{
    NODE_ENV: '"development"',
    ENV_CONFIG: '"dev"',
    BACK_END: 'http://localhost:19000',
    EVENT_ROUTE_PARAMETER: '',
    EVENT_contract_LIST: 'http://demo.newcost.longhu.net/cost', // 测试环境（合同列表跳转老系统）
})

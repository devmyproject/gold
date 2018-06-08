import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@/views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/form/article-publish/preview.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/demo/own-space/own-space.vue') },
        { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/views/demo/advanced-router/component/order-info.vue') }, // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/demo/advanced-router/component/shopping-info.vue') }, // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/demo/message/message.vue') }
    ]
};
export const deptRouter = {
    path: '/depot/child',
    name: 'depot',
    redirect: '/depot/child',
    component: Main,
    children: [
        {
            path: 'curtain',
            name: '库存数量账',
            title: '库存数量账',
            component: () =>
                import ('@/views/depot/child/inventorysCurtain.vue')
        },
        {
            path: 'diagram',
            name: '库存分布',
            title: '库存分布',
            component: () =>
                import ('@/views/depot/child/inventorysDiagram.vue')
        },
        {
            path: 'depotSN',
            name: '在库序列号',
            title: '在库序列号',
            component: () =>
                import ('@/views/depot/child/inventorysSN.vue')
        },
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    // invoice
    {
        path: '/bills',
        icon: 'social-buffer',
        name: 'invoices',
        title: '开单',
        component: Main,
        children: [
            {
                path: 'sell', icon: 'crop', name: 'sell', title: '销售',
                component: () => import('@/views/bills/sell.vue')
            },
            {
                path: 'sellcredit', icon: 'crop', name: 'sellcredit', title: '赊销',
                component: () => import('@/views/bills/sellcredit.vue')
            },
            {
                path: 'loanout', icon: 'crop', name: 'loanout', title: '借出',
                component: () => import('@/views/bills/loanout.vue')
            },
            {
                path: 'callout', icon: 'crop', name: 'callout', title: '调出',
                component: () => import('@/views/bills/callout.vue')
            },
            {
                path: 'buy', icon: 'crop', name: 'buy', title: '采购',
                component: () => import('@/views/bills/buy.vue')
            },
            {
                path: 'buycredit', icon: 'crop', name: 'buycredit', title: '赊购',
                component: () => import('@/views/bills/buycredit.vue')
            },
            {
                path: 'loanin', icon: 'crop', name: 'loanin', title: '借入',
                component: () => import('@/views/bills/loanin.vue')
            },
        ]
    },
    {
        path: '/billlist',
        icon: 'social-buffer',
        name: 'invoices',
        title: '单据列表',
        component: Main,
        children: [{
                path: 'outbilllist',
                icon: 'crop',
                name: 'outbilllist',
                title: '出库列表',
                component: () =>
                    import ('@/views/bills/outbilllist.vue')
            },
            {
                path: 'inbilllist',
                icon: 'crop',
                name: 'inbilllist',
                title: '入库列表',
                component: () =>
                    import ('@/views/bills/inbilllist.vue')
            }
        ]
    },
    {
        path: '/depot',
        icon: 'social-buffer',
        name: 'invoices',
        title: '库房管理',
        component: Main,
        children: [
            {
                path: 'prods',
                icon: 'crop',
                name: 'prods',
                title: '库存查看',
                component: () =>
                    import ('@/views/depot/prods.vue')
            },
            {
                path: 'outlist',
                icon: 'crop',
                name: 'outlist',
                title: '库房出库',
                component: () =>
                    import ('@/views/depot/outlist.vue')
            },
            {
                path: 'out',
                icon: 'crop',
                name: 'out',
                title: '出库',
                hidden: true,
                component: () =>
                    import('@/views/depot/out.vue')
            },
            {
                path: 'inlist',
                icon: 'crop',
                name: 'inlist',
                title: '库房入库',
                component: () =>
                    import ('@/views/depot/inlist.vue')
            },
            {
                path: 'outhistory',
                icon: 'crop',
                name: 'outhistory',
                title: '出库历史',
                component: () =>
                    import ('@/views/depot/outhistory.vue')
            },
            {
                path: 'inhistory',
                icon: 'crop',
                name: 'inhistory',
                title: '入库历史',
                component: () =>
                    import ('@/views/depot/inhistory.vue')
            },
            // {
            //     path: 'account',
            //     icon: 'crop',
            //     name: 'account',
            //     title: '库存数量账',
            //     component: () =>
            //         import ('@/views/depot/account.vue')
            // },
            // {
            //     path: 'distribute',
            //     icon: 'crop',
            //     name: 'distribute',
            //     title: '库存分布',
            //     component: () =>
            //         import ('@/views/depot/distribute.vue')
            // },
        ]
    },
    {
        path: '/product',
        icon: 'social-buffer',
        name: 'product',
        title: '商品管理',
        component: Main,
        children: [
            {path: 'brandlist',icon: 'crop', name: '商品品牌',title: '商品品牌',
                component: () => import('@/views/products/brandlist.vue')
            },
            {path: 'categorylist',icon: 'crop',name: '商品类别',title: '商品类别',
                component: () => import('@/views/products/categorylist.vue')
            },
            {path: 'productlist', icon: 'crop',name: '商品列表',title: '商品列表',
                component: () => import('@/views/products/productlist.vue')
            },
            {path: 'suitlist',icon: 'crop', name: '套装列表',title: '套装列表',
                component: () => import('@/views/products/suitlist.vue')
            },
            {path: 'materiallist',icon: 'crop',name: '耗材列表',title: '耗材列表',
                component: () => import('@/views/products/materiallist.vue')
            },
            {path: 'servicelist',icon: 'crop',name: '服务列表',title: '服务列表',
                component: () => import('@/views/products/servicelist.vue')
            }
        ]
    },
    {
        path: '/setting',
        icon: 'social-buffer',
        name: 'setting',
        title: '系统设置',
        component: Main,
        children: [
            {
                path: 'usergrop', icon: 'crop', name: 'usergrop', title: '用户分组',
                component: () => import('@/views/products/prodlist/prodlist.vue')
            },
            {
                path: 'userlist', icon: 'crop', name: 'userlist', title: '用户列表',
                component: () => import('@/views/setting/userlist.vue')
            },
            {
                path: 'userrole', icon: 'crop', name: 'userrole', title: '用户角色',
                component: () => import('@/views/setting/userrole.vue')
            },
            {
                path: 'permission', icon: 'crop', name: 'permission', title: '权限设置',
                component: () => import('@/views/products/servicelist/servicelist.vue')
            },
            {
                path: 'organization', icon: 'crop', name: 'organization', title: '组织机构',
                component: () => import('@/views/products/brandlist/brandlist.vue')
            },
            {
                path: 'workers', icon: 'crop', name: 'workers', title: '员工列表',
                component: () => import('@/views/setting/workers.vue')
            },
            {
                path: 'range', icon: 'crop', name: 'range', title: '项目值域',
                component: () => import('@/views/products/brandCAcategory/brandCAcategory.vue')
            },
            {
                path: 'parameter', icon: 'crop', name: 'parameter', title: '参数设置',
                component: () => import('@/views/products/brandCAcategory/brandCAcategory.vue')
            },
            {
                path: 'batchlead', icon: 'crop', name: 'batchlead', title: '批量导入',
                component: () => import('@/views/products/brandCAcategory/brandCAcategory.vue')
            },
            {
                path: 'logs', icon: 'crop', name: 'logs', title: '日志',
                component: () => import('@/views/products/brandCAcategory/brandCAcategory.vue')
            }
        ]
    },
    {
        path: '/demo',
        icon: 'social-buffer',
        name: '案例',
        title: 'demo案例',
        component: Main,
        children: [
            {
                path: '/demo/index', title: '权限管理', name: 'access_index',
                component: () => import ('@/views/demo/access/access.vue')
            },
            {
                path: '/demo/access-test',
                title: '权限测试页',
                name: 'accesstest_index',
                access: 0,
                component: () =>
                    import ('@/views/demo/access/access-test.vue')
            },
            {
                 path: 'demo/international',
                 title: {
                     i18n: 'international'
                 },
                 name: 'international_index',
                 component: () =>
                     import ('@/views/demo/international/international.vue')
            },
            {
                path: 'demo/artical-publish',
                title: '文章发布',
                name: 'artical-publish',
                icon: 'compose',
                component: () =>
                    import ('@/views/demo/form/article-publish/article-publish.vue')
            }, {
                path: 'demo/workflow',
                title: '工作流',
                name: 'workflow',
                icon: 'arrow-swap',
                component: () =>
                    import ('@/views/demo/form/work-flow/work-flow.vue')
            },
            {
                path: 'demo/dragableTable',
                title: '可拖拽排序',
                name: 'dragable-table',
                icon: 'arrow-move',
                component: () =>
                    import ('@/views/demo/tables/dragable-table.vue')
            }, {
                path: 'demo/editableTable',
                title: '可编辑表格',
                name: 'editable-table',
                icon: 'edit',
                component: () =>
                    import('@/views/demo/tables/editable-table.vue')
            }, {
                path: 'demo/searchableTable',
                title: '可搜索表格',
                name: 'searchable-table',
                icon: 'search',
                component: () =>
                    import('@/views/demo/tables/searchable-table.vue')
            }, {
                path: 'demo/exportableTable',
                title: '表格导出数据',
                name: 'exportable-table',
                icon: 'code-download',
                component: () =>
                    import('@/views/demo/tables/exportable-table.vue')
            }, {
                path: 'demo/table2image',
                title: '表格转图片',
                name: 'table-to-image',
                icon: 'images',
                component: () =>
                    import('@/views/demo/tables/table-to-image.vue')
            },
            {
                path: 'demo/mutative-router',
                title: '动态路由',
                name: 'mutative-router',
                icon: 'link',
                component: () =>
                    import('@/views/demo/advanced-router/mutative-router.vue')
            }, {
                path: 'demo/argument-page',
                title: '带参页面',
                name: 'argument-page',
                icon: 'android-send',
                component: () =>
                    import('@/views/demo/advanced-router/argument-page.vue')
            },
            // {
            //     path: 'demo/pie',
            //     title: '饼状图',
            //     name: 'pie',
            //     icon: 'ios-pie',
            //     component: resolve => { require('@/views/demo/access/access.vue')}
            // },
            // {
            //     path: 'demo/histogram',
            //     title: '柱状图',
            //     name: 'histogram',
            //     icon: 'stats-bars',
            //     component: resolve => { require('@/views/demo/access/access.vue')}
            // },
            {
                path: 'demo/text-editor',
                icon: 'compose',
                name: 'text-editor',
                title: '富文本编辑器',
                component: () =>
                    import ('@/views/demo/my-components/text-editor/text-editor.vue')
            },
            {
                path: 'demo/md-editor',
                icon: 'pound',
                name: 'md-editor',
                title: 'Markdown编辑器',
                component: () =>
                    import ('@/views/demo/my-components/markdown-editor/markdown-editor.vue')
            },
            {
                path: 'demo/image-editor',
                icon: 'crop',
                name: 'image-editor',
                title: '图片预览编辑',
                component: () =>
                    import ('@/views/demo/my-components/image-editor/image-editor.vue')
            },
            {
                path: 'demo/draggable-list',
                icon: 'arrow-move',
                name: 'draggable-list',
                title: '可拖拽列表',
                component: () =>
                    import ('@/views/demo/my-components/draggable-list/draggable-list.vue')
            },
            {
                path: 'demo/area-linkage',
                icon: 'ios-more',
                name: 'area-linkage',
                title: '城市级联',
                component: () =>
                    import ('@/views/demo/my-components/area-linkage/area-linkage.vue')
            },
            {
                path: 'demo/file-upload',
                icon: 'android-upload',
                name: 'file-upload',
                title: '文件上传',
                component: () =>
                    import ('@/views/demo/my-components/file-upload/file-upload.vue')
            },
            {
                path: 'demo/count-to',
                icon: 'arrow-graph-up-right',
                name: 'count-to',
                title: '数字渐变',
                component: () =>
                    import ('@/views/demo/my-components/count-to/count-to.vue')
            },
            {
                path: 'demo/split-pane-page',
                icon: 'ios-pause',
                name: 'split-pane-page',
                title: 'split-pane',
                component: () =>
                    import ('@/views/demo/my-components/split-pane/split-pane-page.vue')
            },
            {
                path: 'demo/errorpage_index',
                title: '错误页面',
                name: 'errorpage_index',
                component: () =>
                    import('@/views/demo/error-page/error-page.vue')
            }
        
        ]
    },
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    deptRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];

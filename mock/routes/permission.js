import {
    asyncRouterMap,
    constantRouterMap
} from '@/router/index'
import {
    generateRoutes,
    getSession
} from 'api/permission'
import store from '../index'
import router from './../../router'
/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
    if (route.meta && route.meta.role) {
        return roles.some(role => route.meta.role.indexOf(role) >= 0)
    } else {
        return true
    }
}

/**
 * 递归查询，id相同，加属性
 */
function searchIdPushPrototype(item) {
    if (item && item.length > 0) {
        for (let i = 0; i < item.length; i++) {
            item[i].path = item[i].mnuprogram
            item[i].name = item[i].fullmnuname
            item[i].children = item[i].sysMenuResDTOList
            // 如果mnuprogram包含http么，包含就外网，不包含就是内网
            if (item[i].mnuprogram.indexOf('http') > -1) {
                item[i].mnuflag = 1
            } else {
                item[i].mnuflag = 0
            }
            if (item[i].sysMenuResDTOList) {
                if (item[i].sysMenuResDTOList.length > 0) {
                    searchIdPushPrototype(item[i].sysMenuResDTOList)
                }
            }
        }
        return item
    }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
    const accessedRouters = asyncRouterMap.filter(route => {
        if (hasPermission(roles, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles)
            }
            return true
        }
        return false
    })
    return accessedRouters
}

const permission = {
    state: {
        routers: constantRouterMap,
        routerItems: [],
        addRouters: []
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers.accessedRouters
            state.routerItems = routers.routerItems
            state.routers = constantRouterMap.concat(routers.accessedRouters)
            router.addRoutes(state.addRouters)
        },
        CHANGE_MENUS: (state, routers) => {
            state.routerItems = routers.routerItems
        }
    },
    actions: {
        // 更新menus
        ChangeRoute({
            commit
        }, menus) {
            commit('CHANGE_MENUS', {
                'routerItems': menus
            })
        },

        /**
         * 获取session
         * @param commit
         * @param data
         * @returns {PromiseLike<T> | Promise<T>}
         */
        GetSession({
            commit
        }, data) {
            return getSession(data).then(res => {})
        },
        // 获取各个项目信息
        GenerateRoutes({
            commit,
            state
        }, roles) {
            return new Promise(resolve => {
                let accessedRouters
                // if (roles.oaToken.length > 0) {
                generateRoutes(roles).then(result => {
                    if (result.data && result.data.userList && result.data.userList[0].userId) {
                        // 匹配ID赋值属性
                        var _result
                        _result = searchIdPushPrototype(result.data.sysMenuReqDTO)
                        store.getters.user.avatar = result.data.userCode
                        store.getters.user.name = result.data.ssResponse.data.realName
                        store.getters.user.userRole = result.data.userRole
                        store.getters.user.loginName = result.data.ssResponse.data.loginName
                        store.getters.user.userid = result.data.userList[0].userId
                        store.getters.user.userCode = result.data.userList[0].userCode
                        store.getters.user.userList = result.data.userList
                        accessedRouters = asyncRouterMap
                        commit('SET_ROUTERS', {
                            'accessedRouters': accessedRouters,
                            'routerItems': _result
                        })
                        resolve(result)
                    } else if (result.data && result.data.mpTokenInfoResponse && result.data.mpTokenInfoResponse.loginName) {
                        // 匹配ID赋值属性
                        var _result
                        _result = searchIdPushPrototype(result.data.sysMenuReqDTO)
                        store.getters.user.avatar = result.data.userCode
                        store.getters.user.name = result.data.mpTokenInfoResponse.realName
                        store.getters.user.userRole = result.data.userRole
                        store.getters.user.loginName = result.data.mpTokenInfoResponse.loginName
                        // store.getters.user.userid = result.data.userList[0].userId
                        // store.getters.user.userCode = result.data.userList[0].userCode
                        store.getters.user.userList = result.data.userList
                        accessedRouters = asyncRouterMap
                        commit('SET_ROUTERS', {
                            'accessedRouters': accessedRouters,
                            'routerItems': _result
                        })
                        resolve(result)
                    } else {
                        if (result.data) {
                            resolve(result.data)
                        }
                    }
                })
                // } else {
                //   accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
                //   commit('SET_ROUTERS', accessedRouters)
                //   resolve()
                // }
            })
        }
    }
}

export default permission

/**
 * demo api
 * treeTable
 */
import fetch from './fetch';
import url from './url';

export function generateRoutes (data) {
    return fetch.post(url.getGenerateRoutes, data);
};

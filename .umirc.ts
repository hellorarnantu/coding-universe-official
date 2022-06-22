/*
 * @Author: jiangxiang
 * @Date: 2022-06-22 00:36:44
 * @LastEditors: jiangxiang
 * @LastEditTime: 2022-06-22 09:52:46
 * @Description: 请填写简介
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/home-page/index' }],
  fastRefresh: {},
});

/*
 * @Author: Liangbofan
 * @Date: 2022-05-09 14:31:41
 * @LastEditors: Liangbofan
 * @LastEditTime: 2022-05-10 20:08:25
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const _jwt = app.middleware.jwtErr(app.config.jwt.secret);
  // 个人信息
  router.post('/api/user/register', controller.user.register);
  router.post('/api/user/login', controller.user.login);
  router.get('/api/user/get_userinfo', _jwt, controller.user.getUserInfo);
  router.post('/api/user/edit_userinfo', _jwt, controller.user.editUserInfo); // 修改用户个性签名
  router.post('/api/upload', controller.upload.upload);
  router.get('/api/user/test', _jwt, controller.user.test);

  // 账单
  router.post('/api/bill/add', _jwt, controller.bill.add);
  router.get('/api/bill/list', _jwt, controller.bill.list); // 获取账单列表
  router.get('/api/bill/detail', _jwt, controller.bill.detail); // 获取详情
};

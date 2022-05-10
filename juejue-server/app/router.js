/*
 * @Author: Liangbofan
 * @Date: 2022-05-09 14:31:41
 * @LastEditors: Liangbofan
 * @LastEditTime: 2022-05-10 13:45:45
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const _jwt = app.middleware.jwtErr(app.config.jwt.secret);
  router.post('/api/user/register', controller.user.register);
  router.post('/api/user/login', controller.user.login);
  router.get('/api/user/get_userinfo', _jwt, controller.user.getUserInfo);
  router.post('/api/user/edit_userinfo', _jwt, controller.user.editUserInfo); // 修改用户个性签名
  router.post('/api/upload', controller.upload.upload);
  router.get('/api/user/test', _jwt, controller.user.test);
};

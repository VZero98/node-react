/*
 * @Author: Liangbofan
 * @Date: 2022-05-09 14:31:41
 * @LastEditors: Liangbofan
 * @LastEditTime: 2022-05-09 17:34:33
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/user/register', controller.user.register);
  router.post('/api/user/login', controller.user.login);
};

/*
 * @Author: Liangbofan
 * @Date: 2022-05-09 14:31:41
 * @LastEditors: Liangbofan
 * @LastEditTime: 2022-05-09 16:05:37
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1652076227671_9099';

  // add your middleware config here
  config.middleware = [];

  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'juejue-cost',
    },
    app: true,
    agent: false,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

/*
 * @Author: Liangbofan
 * @Date: 2022-05-09 16:06:01
 * @LastEditors: Liangbofan
 * @LastEditTime: 2022-05-09 16:07:34
 */
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = UserController;

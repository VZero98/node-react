'use strict';

const Service = require('egg').Service;

class BillService extends Service {
  async add(params) {
    // eslint-disable-next-line no-unused-vars
    const { ctx, app } = this;
    try {
      const result = await app.mysql.insert('bill', params);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async list(id) {
    // eslint-disable-next-line no-unused-vars
    const { ctx, app } = this;
    const QUERY_STR = 'id, pay_type, amount, date, type_id, type_name, remark';
    const sql = `select ${QUERY_STR} from bill where user_id = ${id}`;
    try {
      const result = await app.mysql.query(sql);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async detail(id, user_id) {
    // eslint-disable-next-line no-unused-vars
    const { ctx, app } = this;
    try {
      const result = await app.mysql.get('bill', { id, user_id })
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
module.exports = BillService;
"use strict";

const { Service } = require("ee-core");
// 框架提供的数据库对象
// ee-core:v2.0.1
const Storage = require("ee-core/storage");
const _ = require("lodash");

/**
 * 数据存储
 * @class
 */

class StorageService extends Service {
  constructor(ctx) {
    super(ctx);

    // sqlite数据库
    let sqliteOptions = {
      driver: "sqlite",
      default: {
        timeout: 6000,
        verbose: console.log, // 打印sql语法
      },
    };
    this.demoSqliteDB = Storage.connection("sqlite-demo.db", sqliteOptions);
  }

  /*
   * 检查并创建表 (sqlite)
   */
  async checkAndCreateTableSqlite(tableName = "") {
    if (_.isEmpty(tableName)) {
      throw new Error(`table name is required`);
    }
    // 检查表是否存在
    const userTable = this.demoSqliteDB.db.prepare(
      "SELECT * FROM sqlite_master WHERE type=? AND name = ?"
    );
    const result = userTable.get("table", tableName);
    //console.log('result:', result);
    if (result) {
      return;
    }

    // 创建表
    const create_table_user = `CREATE TABLE ${tableName}
    (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      time   TEXT NOT NULL,
      turnover  TEXT NOT NULL,
      profit  TEXT NOT NULL,
      expenses TEXT NOT NULL
      
    );`;
    this.demoSqliteDB.db.exec(create_table_user);
  }

  //增加数据
  async addTestDataSqlite(data) {
    let table = "user";
    await this.checkAndCreateTableSqlite(table);
    const insert = this.demoSqliteDB.db.prepare(
      `INSERT INTO ${table} (time, turnover, profit, expenses) VALUES (@time, @turnover,@profit,@expenses)`
    );
    insert.run(data);

    return true;
  }

  //删除数据
  async delTestDataSqlite(id = "") {
    console.log(id);
    let table = "user";
    await this.checkAndCreateTableSqlite(table);

    const delUser = this.demoSqliteDB.db.prepare(
      `DELETE FROM ${table} WHERE id = ?`
    );
    delUser.run(id);

    return true;
  }

  //修改数据
  async updateTestDataSqlite(
    time = "",
    turnover = "",
    profit = "",
    Profitst = ""
  ) {
    //console.log("update :", {name, age});

    let table = "user";
    await this.checkAndCreateTableSqlite(table);

    const updateUser = this.demoSqliteDB.db.prepare(
      `UPDATE ${table} SET time = ? WHERE turnover = ? WHERE profit = ? WHERE Profitst = ?`
    );
    updateUser.run(time, turnover, profit, Profitst);

    return true;
  }

  //查找数据
  async getAllTestDataSqlite() {
    //console.log("select all user");

    let table = "user";
    await this.checkAndCreateTableSqlite(table);

    const selectAllUser = this.demoSqliteDB.db.prepare(
      `SELECT * FROM ${table} `
    );
    const allUser = selectAllUser.all();
    console.log("select allUser:", allUser);
    return allUser;
  }
}

StorageService.toString = () => "[class StorageService]";
module.exports = StorageService;

﻿/**
* 日志仓库
*/

Ext.define('App.store.sys.Log', {
    extend: 'Ext.data.Store',
    alias: 'store.loglist',
    storeId: 'loglist',

    model: 'App.model.sys.Log',

    data: {
        Total: 168,
        Items: [{ "ID": 7153, "Type": 0, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2017-03-01 20:44:51", "IP": "127.0.0.1", "Title": "系统启动", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-26" }, { "ID": 7152, "Type": 0, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2017-02-28 21:42:05", "IP": "127.0.0.1", "Title": "系统启动", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-27" }, { "ID": 7151, "Type": 1, "Source": 0, "Level": 3, "AddUser": "管理员", "AddTime": "2017-02-28 21:31:57", "IP": "::1", "Title": "用户admin登录成功！", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-28" }, { "ID": 7150, "Type": 0, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2017-02-28 21:31:56", "IP": "127.0.0.1", "Title": "系统启动", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-29" }, { "ID": 7149, "Type": 0, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2017-02-27 21:51:19", "IP": "127.0.0.1", "Title": "系统启动", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-30" }, { "ID": 7148, "Type": 0, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2017-02-27 21:49:06", "IP": "127.0.0.1", "Title": "系统启动", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-31" }, { "ID": 7147, "Type": 1, "Source": 0, "Level": 3, "AddUser": "管理员", "AddTime": "2017-02-27 21:31:52", "IP": "::1", "Title": "用户admin登录成功！", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-32" }, { "ID": 7146, "Type": 0, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2017-02-27 21:31:47", "IP": "127.0.0.1", "Title": "系统启动", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-33" }, { "ID": 7145, "Type": 1, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2017-02-27 20:09:32", "IP": "::1", "Title": "用户admin登录成功！", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-34" }, { "ID": 7144, "Type": 0, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2017-02-27 20:01:53", "IP": "127.0.0.1", "Title": "系统启动", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-35" }, { "ID": 7143, "Type": 0, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2017-02-27 19:56:59", "IP": "127.0.0.1", "Title": "系统启动", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-36" }, { "ID": 7142, "Type": 1, "Source": 0, "Level": 3, "AddUser": "管理员", "AddTime": "2017-02-19 21:28:35", "IP": "::1", "Title": "用户admin登录成功！", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-37" }, { "ID": 7141, "Type": 0, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2017-02-19 21:09:36", "IP": "127.0.0.1", "Title": "系统启动", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-38" }, { "ID": 7140, "Type": 1, "Source": 0, "Level": 3, "AddUser": "管理员", "AddTime": "2017-02-19 20:33:18", "IP": "::1", "Title": "用户admin登录成功！", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-39" }, { "ID": 7139, "Type": 0, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2017-02-19 20:33:00", "IP": "127.0.0.1", "Title": "系统启动", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-40" }, { "ID": 7138, "Type": 0, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2017-02-18 22:41:32", "IP": "127.0.0.1", "Title": "系统启动", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-41" }, { "ID": 7137, "Type": 1, "Source": 0, "Level": 3, "AddUser": "管理员", "AddTime": "2017-02-18 21:54:26", "IP": "::1", "Title": "用户admin登录成功！", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-42" }, { "ID": 7136, "Type": 0, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2017-02-18 21:54:12", "IP": "127.0.0.1", "Title": "系统启动", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-43" }, { "ID": 7135, "Type": 1, "Source": 0, "Level": 3, "AddUser": "管理员", "AddTime": "2017-02-13 20:59:25", "IP": "::1", "Title": "用户admin登录成功！", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-44" }, { "ID": 7134, "Type": 0, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2017-02-13 20:59:24", "IP": "127.0.0.1", "Title": "系统启动", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-45" }, { "ID": 7133, "Type": 1, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2016-12-12 12:03:41", "IP": "::1", "Title": "用户admin登录成功！", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-46" }, { "ID": 7132, "Type": 0, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2016-12-12 12:03:25", "IP": "127.0.0.1", "Title": "系统启动", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-47" }, { "ID": 7131, "Type": 1, "Source": 0, "Level": 3, "AddUser": "管理员", "AddTime": "2016-11-24 07:59:56", "IP": "::1", "Title": "用户admin登录成功！", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-48" }, { "ID": 7130, "Type": 1, "Source": 0, "Level": 3, "AddUser": "管理员", "AddTime": "2016-11-24 07:56:21", "IP": "::1", "Title": "用户admin登录成功！", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-49" }, { "ID": 7129, "Type": 0, "Source": 0, "Level": 3, "AddUser": "", "AddTime": "2016-11-24 07:56:11", "IP": "127.0.0.1", "Title": "系统启动", "Content": "", "Status": 0, "Memo": "", "id": "App.model.sys.Log-50" }]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            totalProperty: 'Total',
            rootProperty: 'Items'
        },
        pageParam: 'pageNum',
        limitParam: 'pageSize'
    }
});
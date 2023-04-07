/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-03-31 11:13:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-03 17:25:45
 */

/**
 * inquirer 交互式命令行：v9+不支持require导入，只能import
 *
 * 主要知道这几个类型类型，其他的有兴趣再去了解：input、confirm、list、checkbox、password
 * 方法用prompt就行，另外两个registerPrompt和createPromptModule也可以自己去了解。
 */
const inquirer = require("inquirer");

// 输入框
const typeInput = () => {
  inquirer
    .prompt([
      {
        name: "input",
        type: "input",
        message: "请随意输入：",
        default: "张三？",
      },
    ])
    .then((res) => {
      console.log("输入: " + res.input);
      typeConfirm();
    });
};

// 确认框
const typeConfirm = () => {
  inquirer
    .prompt([
      {
        name: "confirm",
        type: "confirm",
        message: "请选择确定Yes/取消no？",
        default: true,
      },
    ])
    .then((res) => {
      console.log("选择: " + res.confirm);
      typeList();
    });
};

// 选择列表
const typeList = () => {
  inquirer
    .prompt([
      {
        name: "list",
        type: "list",
        message: "请选择颜色",
        choices: ["red", "blue", "yellow"],
        default: 1,
      },
    ])
    .then((res) => {
      console.log("颜色: " + res.list);
      typeCheckbox();
    });
};

// 多选框
const typeCheckbox = () => {
  inquirer
    .prompt([
      {
        name: "checkbox",
        type: "checkbox",
        message: "请多选颜色",
        choices: ["red", "blue", "yellow"],
        default: ["blue"],
      },
    ])
    .then((res) => {
      console.log("多选: " + res.checkbox);
      typePassword();
    });
};

// 密码框
const typePassword = () => {
  inquirer
    .prompt([
      {
        name: "password",
        type: "password",
        message: "请输入密码",
        mask: true, // 是否显示*号占位符
      },
    ])
    .then((res) => {
      console.log("密码: " + res.password);
    });
};

module.exports = {
  typeInput,
};

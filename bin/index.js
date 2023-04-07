#!/usr/bin/env node

// 获取命令参数
const argvs = process.argv;
// console.log('===process.argv：', argvs);

// 读取package包
const _package = require("../package.json");

// 解析用户命令行输入
const Program = require("commander");

// 美化命令行，进行着色：v5+不支持require导入，只能import
const chalk = require("chalk");
console.log(
    chalk.green("green"),
    chalk.red("red"),
    chalk.yellow("yellow"),
    chalk.blue("blue"),
    chalk.magenta("magenta"),
    chalk.cyan("cyan"),
    chalk.bgRed('bgRed')
);

console.log(
    `\n===========欢迎来到[ ${chalk.green("Pingk")} ]脚手架工具基地===========\n`
);

/**
 * ====定义脚手架信息====
 * name：名字
 * version：版本
 * usage：用法，语法
 * command：自定义命令，help命令默认自带，无效自定义
 */
Program.name(_package.name)
    .version(`pingk Version：v${_package.version}`)
    .usage("<command> [options]");

Program.on('--help', () => {
    console.log(`\n ${chalk.yellow("^_^ 你正在查询pingk脚手架帮助文档，如有不清楚，请联系我☞：")}${chalk.green("11807587")}`)
})

// inquirer 交互式命令行
const inquirerTest = require("../lib/test/inquirerTest");

// 进度测试
const oraTest = require('../lib/test/oraTest');

// 下载测试
const downloadGit = require('../lib/test/downloadGit');

// 交互命令行
const inquirer = require("inquirer");
/**
 * 测试命令：test
 */
Program
    .command('test <name>')
    .alias('t')
    .description('这是一个cli测试命令，<name>是对应的测试项：ora、download、inquirer')
    .action((name) => {
        console.log('==开始测试：', name);
        switch (name) {
            case 'inquirer': // 交互式命令行
                inquirerTest.typeInput();
                break;
            case 'ora': // 进度
                oraTest.oraTest();
                break;
            case 'download': // 下载
                downloadGit.downloadGit()
                break;
            default:
                break;
        }
    })

/**
 * 自选测试命令：stest
 */
Program
    .command('stest')
    .alias('st')
    .description('这是一个cli选择测试命令，可选项：ora、download、inquirer')
    .action(() => {
        // 选择框
        inquirer
            .prompt([
                {
                    name: "name",
                    type: "list",
                    message: "请选择测试项",
                    choices: ["ora", "download", "inquirer"],
                    default: 1,
                },
            ])
            .then((res) => {
                console.log('==开始测试：', res.name);
                switch (res.name) {
                    case 'inquirer': // 交互式命令行
                        inquirerTest.typeInput();
                        break;
                    case 'ora': // 进度
                        oraTest.oraTest();
                        break;
                    case 'download': // 下载
                        downloadGit.downloadGit()
                        break;
                    default:
                        break;
                }
            });
    })

/**
 * 解析命令行参数
 * 只能解析一次，取第一次，所以放最后执行
 */
Program.parse(process.argv)

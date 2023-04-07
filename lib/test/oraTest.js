/**
 * ora包用于显示加载中的效果，类似于前端页面的loading效果。使用方式如下
 */

const ora = require("ora")

const oraTest = () => {
    const spinner = ora("加载中，请稍后......");
    spinner.start();

    setTimeout(() => {
        spinner.color = "yellow";
        spinner.text = "加载差不多了..."

        setTimeout(() => {
            spinner.text = "加载完成..."
            spinner.color = "red";
            spinner.succeed()
        }, 1000)
    }, 1000)
}

module.exports = {
    oraTest
}

/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-03 17:37:09
 * @LastEditors: 
 * @LastEditTime: 2023-04-04 13:04:17
 */
/**
 * download-git-repo
 * 官网：https://gitlab.com/flippidippi/download-git-repo
 * 
 * clone - boolean默认为false。如果为true，使用git克隆而不是http下载。
 * 虽然这可能有点慢，但如果设置了适当的SSH密钥，它确实允许使用私有存储库。
 * 所有其他选项(代理，报头，过滤器等)将相应地传递，并可能覆盖默认值
 * Direct:url
 */

// 打印样式
const chalk = require('chalk')
// 进度插件
const ora = require('ora')
// 下载
const download = require("download-git-repo");

/**
 * git下载
 */
const downloadGit = () => {
    // 下载列表，格式为：【仓库地址:用户名/仓库名字#分支】
    const downloadList = [
        "direct:https://gitee.com/doramart/DoraCMS#2.1.8", // Gitee
        // "https://github.com:http-party/http-server#master", // GitHub
        // "https://github.com:hujinbin/vue-cli#main", // GitHub
        // "direct:https://github.com/hujinbin/vue-cli.git#main", // GitHub
    ]

    const projectName = "downloadFile"

    const spinner = ora("下载中，请稍后......");
    spinner.start();

    download(downloadList[0], projectName, { clone: true }, (err) => {
        if (err) {
            spinner.text = "下载异常..."
            spinner.fail()
            console.log(chalk.red('下载失败：' + err));
            // process.exit()方法用于通过NodeJS中的退出代码结束同时运行的进程。
            process.exit();
        } else {
            console.log('\n success!')
            // 结束加载图标
            spinner.text = "下载完成..."
            spinner.succeed();
            console.log(chalk.green(`\n Success √，Generation completed!`))
            console.log(`\n 启动项目：
                      \n    cd ${projectName}
                      \n    npm install
                      \n    npm run dev
                      `)
        }
    });
}

module.exports = {
    downloadGit
}
<p align="center">
  <img src="/public/favicon.ico" alt="Chromosome Blog" width="200" height="200">
</p>
# Chromosome Blog

这是一个使用 [Nucleus](https://www.pamalee.cn) 为框架构建的博客.

## 部署
这只是博客的前端部分, 这个项目还包括后端以及利用Electron构建的管理App并提供了本地文件操作, 摆脱网络的束缚

### 本地环境

1. 安装 JRE 或 JDK 17 环境
2. 下载release提供的Zip包, 其中包含了已经构建完毕的Nucleus主程序和Chromosome插件以及Endoplasmic插件(配套图床), 以及构建完毕的此仓库前端页面
3. 进入项目根目录，运行 `java -jar Nucleus.jar`
4. 打开浏览器输入相应地址即可访问

## 配置
- Nucleus默认运行在11000端口, 如需要自定义, 您可以使用中间件进行转发或构建Nucleus项目
- 根目录下的`PluginData`文件夹中包含Chromosome和Endoplasmic插件的配置文件, 修改其中的config.yml中的domain为您的域名
- 根目录下的`Pages`文件夹中包含此仓库的构建文件, 修改其中的config.json配置文件中的domain为您的域名
- 如果您开启了Nucleus的数据表自动生成功能, 可以不必手动导入数据表, 如何开启请参照`resourses`目录下的`nucleus.yml`配置文件

### 基本配置

- 在 `Pages/config.json` 文件中可以配置博客域名
- 在 `resourses/Nucleus.yml` 文件中可以配置Nucleus的相关设置
- 在 `PluginData/` 文件夹中可以配置两个插件的配置信息

### 评论系统(暂未完成)

### Google Analytics(暂未完成)


## 写作

1. 下载Chromosome的桌面程序后, 你可以在设置界面设置您配置Chromosome的域名地址
2. 在账户界面登录您的Chromosome服务器
3. 在Endoplasmic界面中连接您Chromosome服务器中自带的图床平台
4. 在基础界面开始写作并且上传到您的服务器中

## 扩展

Chromosome 提供了一些扩展功能，例如：

- 图床功能，使用 [Endoplasmic](https://github.com/Pama-Lee/Endoplasmic) 实现

## 贡献

欢迎任何形式的贡献，包括但不限于提交 Issue 和 Pull Request。

## 许可证

[MIT License](https://github.com/Pama-Lee/chromosome-blog/blob/main/LICENSE)
此项目基于 [Create React App](https://github.com/facebookincubator/create-react-app)搭建.

启动步骤:

1. 在项目跟目录命令行输入，会自动下载项目依赖模块

```bash
npm install
```
2. 依赖安装完毕，继续执行以下命令
```bash
npm start
```
3. 项目就会在浏览启动，默认端口号为`3000`
4. 开发模式修改端口号在根目录进入`script`文件夹下，修改`start.js`文件
```js
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
```
将`3000`改为你指定的端口号保存，再启动项目即可，如改为`3002`
```js
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3002;
```

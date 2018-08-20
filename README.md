# vue2-learan
An attempt by College student

## vue project install

前置安装 Pre-install
install node.js  
npm install -g cnpm --registry="https://registry.npm.taobao.org" 淘宝镜像  
npm install webpack -g 代码打包工具  
npm install vue-cli -g  

then we can start

1. vue init webpack <your project name>  
like G:\workplace\vue>vue init webpack vue2-learn --------------------- 这个是那个安装vue脚手架的命令  
This will install Vue 2.x version of the template. ---------------------这里说明将要创建一个vue 2.x版本的项目  
For Vue 1.x use: vue init webpack#1.0 vue2-learn  
? Project name (vue2-learn) ---------------------项目名称  
? Project name vue2-learn  
? Project description (A Vue.js project) ---------------------项目描述  
? Project description A Vue.js project  
? Author caoyu --------------------- 项目创建者  
? Author caoyu  
? Vue build (Use arrow keys)  
? Vue build standalone  
? Install vue-router? (Y/n) --------------------- 是否安装Vue路由，也就是以后是spa（但页面应用需要的模块） 
? Install vue-router? Yes  
? Use ESLint to lint your code? (Y/n) n ---------------------是否启用eslint检测规则，这里个人建议选no  
? Use ESLint to lint your code? No  
? Setup unit tests with Karma + Mocha? (Y/n)  
? Setup unit tests with Karma + Mocha? Yes  
? Setup e2e tests with Nightwatch? (Y/n)  
? Setup e2e tests with Nightwatch? Yes  
vue-cli · Generated "vue2-learn".  
To get started: --------------------- 这里说明如何启动这个服务  
cd vue2-learn  
npm install  
npm run dev  
:blush:

2. npm install ---------------------------  run in your project folder  
like G:\workplace\vue\vue2-learn>npm install  
if you can't, use cnpm.  

3. npm install vue-router vue-resource --save  
if you can't, use cnpm.  

4. npm start

## import element-ui

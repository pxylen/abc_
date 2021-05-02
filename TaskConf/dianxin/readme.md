

  [toc]  

 # <center> 天翼账号中心使用说明 </center>

 [跳转至底部](#注意事项)  ----  [回到主页](https://github.com/Sunert/Scripts)

##IOS配置教程
 ```
[MITM]
hostname = e.189.cn, mkt.21cn.com
 ```
#### Surge:
* [模块地址](https://raw.githubusercontent.com/Sunert/Script/master/TaskConf/dianxin/surge.sgmodule)

 ```
https://raw.githubusercontent.com/Sunert/Script/master/TaskConf/dianxin/surge.sgmodule
 ```
 * 本地重写
 
 ```
[Script]
电信天翼套餐 = type=cron,cronexp=5 10 3 * *,script-path=https://raw.githubusercontent.com/Sunert/Script/master/Task/telecomSky.js,script-update-interval=0
电信天翼套餐 = type=http-request,pattern=https:\/\/mkt\.21cn\.com\/mkt\/api\/user\/queryActivityInfo\.do\?activityId=\d+,script-path=https://raw.githubusercontent.com/Sunert/Script/master/Task/telecomSky.js
电信天翼套餐 = type=http-request,pattern=^https?:\/\/e\.189\.cn\/store\/user\/package_detail\.do,script-path=https://raw.githubusercontent.com/Sunert/Script/master/Task/telecomSky.js
```
#### Shadowrocket(Cron配置): 

```
[Script]
电信天翼套餐 = type=cron,script-path=https://raw.githubusercontent.com/Sunert/Script/master/Task/telecomSky.js,cronexpr="1 10 * * *",timeout=20,enable=true
```
####  Loon:

* [插件地址](https://raw.githubusercontent.com/Sunert/Script/master/TaskConf/dianxin/loon.plugin)

 ```
https://raw.githubusercontent.com/Sunert/Script/master/TaskConf/dianxin/loon.plugin
 ```
* 本地重写
  
 ```
[Script]
cron "1 20 3 * *" script-path=https://raw.githubusercontent.com/Sunert/Script/master/Task/telecomSky.js, tag=电信天翼套餐
http-request https:\/\/mkt\.21cn\.com\/mkt\/api\/user\/queryActivityInfo\.do\?activityId=\d+ script-path=https://raw.githubusercontent.com/Sunert/Script/master/Task/telecomSky.js, timeout=10, tag=电信天翼套餐
http-request ^https?:\/\/e\.189\.cn\/store\/user\/package_detail\.do script-path=https://raw.githubusercontent.com/Sunert/Script/master/Task/telecomSky.js, timeout=10, tag=电信天翼套餐
```
#### Quantumult X:
   * [远程重写配置](https://raw.githubusercontent.com/Sunert/Script/master/TaskConf/dianxin/qx_rewite.txt)
   
```
[rewrite_remote]
https://raw.githubusercontent.com/Sunert/Script/master/TaskConf/dianxin/qx_rewite.txt
```
   * 本地重写配置
   
```
[rewrite_local]
^https?:\/\/e\.189\.cn\/store\/user\/package_detail\.do url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/telecomSky.js
https:\/\/mkt\.21cn\.com\/mkt\/api\/user\/queryActivityInfo\.do\?activityId=\d+ url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/telecomSky.js
```
   * 本地任务配置
   
```
[task_local]
1 10 3 * * https://raw.githubusercontent.com/Sunert/Script/master/Task/telecomSky.js, tag=天翼套餐查询
```
###  获取Cookie方法
  1. 下载安装 天翼账号中心 登陆 获取authToken
  
  2. 点击首页"签到兑豪礼"，获取活动Token

 >>> [回到顶部](#IOS配置教程)

 >>> [回到上一页](..)
 
### 注意事项:
   1.  可能因地区不同，脚本不一定适用



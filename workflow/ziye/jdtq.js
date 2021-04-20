/* ziye 
github地址 https://github.com/ziye888
TG频道地址 https://t.me/ziyescript
TG交流群 https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接 https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/ziye.boxjs.json
圈X task订阅 https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/ziye-gallery.json

转载请备注个名字，谢谢

⚠️简单天气    需要 手机号和微信号    共0.8-1元 无早起打卡挑战活动，无福利发放活动
  
>>点击  http://jdtq.sdms.mobi/1D6BcClY  下载APP  邀请码 578773156  谢谢支持

3.26 制作
3.30 完成
3.31 优化调整为10次翻倍
4.1 修复错误
4.6 .16 增加通知以及推送控制

⚠️ 时间设置   6 6 0-23 * * *    每小时 1次即可  运行一次执行10次翻倍，预计运行15分钟
⚠️9个主要ck，其他自行考虑是否获取


⚠️简单天气没法判定，只能抓包获取body
方法一 放弃这个羊毛

方法二
打开圈x 打开http 数据抓取 添加mitm额外主机名 zt.jiandantianqi.com

进入简单天气 点击对应位置 然后回到http数据抓取，点开对应文件夹 点🔍 响应体 搜索如下body对应字符   点开响应体核对一下，核对无误就复制请求体

首页气泡body 👉 200000407

用户名body 👉 nickname

账户信息body 👉 balance

气泡 气泡翻倍 👉 countermax

翻倍body的响应体里有usedextratimes   普通的没有


方法三 自行抓包工具抓包




⚠️一共  41个ck  👉 41条 Secrets

获取多少ck就运行多少任务(少ck不影响其他任务运行) jdtquserbodyVal 用户名body👉 这条ck必须获取



手机端默认使用boxjs👉 node请复制boxjs会话粘贴至jdtqCOOKIE.js中 或者 填写环境变量(多账号请换行)


第一步⚠️添加 hostname =zt.jiandantianqi.com,

点击我的 - 获取用户名body， ⚠️
点击我的 - 获取账户信息body⚠️

点击天气 - 获取首页气泡body⚠️
点击1号气泡， 获取气泡1body⚠️
点击1号气泡翻倍，获取气泡1翻倍body⚠️
点击2号气泡， 获取气泡2body⚠️
点击2号气泡翻倍， 获取气泡2翻倍body⚠️
点击3号气泡， 获取气泡3body ⚠️
点击3号气泡翻倍， 获取气泡3翻倍body⚠️
点击4号气泡， 获取气泡4body

点击福利 - 获取任务body

点击福利 - 视频 - 获取视频body
点击福利 - 视频完成 - 获取视频完成body，
点击福利 - 视频完成- 翻倍 - 获取视频完成翻倍body，

点击福利 - 获取签到body， 
点击福利 - 签到翻倍 - 获取签到翻倍body，
点击福利 - 签到完成 - 获取签到完成body，
点击福利 - 签到完成翻倍 -获取签到完成翻倍body，

点击福利 - 查看实时天气 - 获取天气body， 
点击福利 - 查看实时天气完成 - 获取天气完成body，
点击福利 - 查看实时天气完成翻倍 - 获取天气完成翻倍body，

点击福利 - 悬浮完成 - 获取悬浮完成body，
点击福利 - 悬浮完成翻倍 - 获取悬浮完成翻倍body

第二步⚠️添加 hostname = api.jiandantianqi.com

点击活动-每天抽奖-获取抽奖页body，
点击活动 - 每天抽奖 - 抽奖， 获取抽奖body，
点击活动 - 每天抽奖 - 看视频获取抽奖次数，获取抽奖次数body

第三步⚠️添加 hostname = event.jiandantianqi.com,


点击活动 - 吃饭领福利-获取吃饭页body，
点击活动 - 吃饭领福利 - 吃饭1， 获取吃饭1body，
点击活动 - 吃饭领福利 - 吃饭1翻倍 - 获取吃饭1翻倍body，
点击活动 - 吃饭领福利 - 吃饭2， 获取吃饭2body，
点击活动 - 吃饭领福利 - 吃饭2翻倍 - 获取吃饭2翻倍body，
点击活动 - 吃饭领福利 - 吃饭3， 获取吃饭3body，
点击活动 - 吃饭领福利 - 吃饭3翻倍 - 获取吃饭3翻倍body，
点击活动 - 吃饭领福利 - 吃饭4， 获取吃饭4body，
点击活动 - 吃饭领福利 - 吃饭4翻倍 - 获取吃饭4翻倍body，
点击活动 - 吃饭领福利 - 吃饭5， 获取吃饭5body，
点击活动 - 吃饭领福利 - 吃饭5翻倍 - 获取吃饭5翻倍body，


点击活动 - 全民猜天气 - 获取竞猜页body
点击活动 - 全民猜天气 - 下雨， 获取竞猜abody，
点击活动 - 全民猜天气 - 不下雨， 获取竞猜bbody，
点击活动 - 全民猜天气 - 获取竞猜领取body，


jdtquserbodyVal👉JDTQ_jdtquserBODY👉用户名body
 
jdtqcoinbodyVal👉JDTQ_jdtqcoinBODY👉账户信息body
 
jdtqqpbodyVal👉JDTQ_jdtqqpBODY👉首页气泡body
 
jdtqqp1bodyVal👉JDTQ_jdtqqp1BODY👉领取气泡1body
 
jdtqqp1fbbodyVal👉JDTQ_jdtqqp1fbBODY👉气泡1翻倍body
 
jdtqqp2bodyVal👉JDTQ_jdtqqp2BODY👉领取气泡2body
 
jdtqqp2fbbodyVal👉JDTQ_jdtqqp2fbBODY👉气泡2翻倍body
 
jdtqqp3bodyVal👉JDTQ_jdtqqp3BODY👉领取气泡3body
 
jdtqqp3fbbodyVal👉JDTQ_jdtqqp3fbBODY👉气泡3翻倍body
 
jdtqqp4bodyVal👉JDTQ_jdtqqp4BODY👉领取气泡4body
 
jdtqcjybodyVal👉JDTQ_jdtqcjyBODY👉抽奖页body
 
jdtqcjbodyVal👉JDTQ_jdtqcjBODY👉抽奖body
 
jdtqcjcsbodyVal👉JDTQ_jdtqcjcsBODY👉抽奖次数body
 
jdtqrwbodyVal👉JDTQ_jdtqrwBODY👉任务body
 
jdtqspbodyVal👉JDTQ_jdtqspBODY👉视频body
 
jdtqspwcbodyVal👉JDTQ_jdtqspwcBODY👉视频完成body
 
jdtqspwcfbbodyVal👉JDTQ_jdtqspwcfbBODY👉视频完成翻倍body
 
jdtqqdbodyVal👉JDTQ_jdtqqdBODY👉签到body
 
jdtqqdfbbodyVal👉JDTQ_jdtqqdfbBODY👉签到翻倍body
 
jdtqqdwcbodyVal👉JDTQ_jdtqqdwcBODY👉签到完成body
 
jdtqqdwcfbbodyVal👉JDTQ_jdtqqdwcfbBODY👉签到完成翻倍body
 
jdtqtqbodyVal👉JDTQ_jdtqtqBODY👉天气body
 
jdtqtqwcbodyVal👉JDTQ_jdtqtqwcBODY👉天气完成body
 
jdtqtqwcfbbodyVal👉JDTQ_jdtqtqwcfbBODY👉天气完成翻倍body
 
jdtqxfwcbodyVal👉JDTQ_jdtqxfwcBODY👉悬浮完成body
 
jdtqxfwcfbbodyVal👉JDTQ_jdtqxfwcfbBODY👉悬浮完成翻倍body
 
jdtqcfybodyVal👉JDTQ_jdtqcfyBODY👉吃饭页body
 
jdtqcf1bodyVal👉JDTQ_jdtqcf1BODY👉吃饭1body
 
jdtqcf1fbbodyVal👉JDTQ_jdtqcf1fbBODY👉吃饭1翻倍body
 
jdtqcf2bodyVal👉JDTQ_jdtqcf2BODY👉吃饭2body
 
jdtqcf2fbbodyVal👉JDTQ_jdtqcf2fbBODY👉吃饭2翻倍body
 
jdtqcf3bodyVal👉JDTQ_jdtqcf3BODY👉吃饭3body
 
jdtqcf3fbbodyVal👉JDTQ_jdtqcf3fbBODY👉吃饭3翻倍body
 
jdtqcf4bodyVal👉JDTQ_jdtqcf4BODY👉吃饭4body
 
jdtqcf4fbbodyVal👉JDTQ_jdtqcf4fbBODY👉吃饭4翻倍body
 
jdtqcf5bodyVal👉JDTQ_jdtqcf5BODY👉吃饭5body
 
jdtqcf5fbbodyVal👉JDTQ_jdtqcf5fbBODY👉吃饭5翻倍body
 
jdtqjcybodyVal👉JDTQ_jdtqjcyBODY👉竞猜页body
 
jdtqjcabodyVal👉JDTQ_jdtqjcaBODY👉竞猜abody
 
jdtqjcbbodyVal👉JDTQ_jdtqjcbBODY👉竞猜bbody
 
jdtqjclqbodyVal👉JDTQ_jdtqjclqBODY👉竞猜领取body
 
	



*/

GXRZ = '4.6.16 增加通知以及推送控制'
const $ = Env("简单天气");
$.idx = ($.idx = ($.getval('jdtqSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./jdtqCOOKIE") : ``;
const logs = 0; // 0为关闭日志，1为开启
notifyttt = 1 // 0为关闭外部推送，1为12 23 点外部推送
notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
Minutes = 10; // 通知 默认控制在0-10分内
$.message = '', COOKIES_SPLIT = '', CASH = '', XH = 0, CK = 0, ddtime = '';

let jdtquserbodyArr = [];
let jdtquserbodyVal = ``;
let middlejdtquserBODY = [];


let jdtqcoinbodyArr = [];
let jdtqcoinbodyVal = ``;
let middlejdtqcoinBODY = [];


let jdtqqpbodyArr = [];
let jdtqqpbodyVal = ``;
let middlejdtqqpBODY = [];


let jdtqqp1bodyArr = [];
let jdtqqp1bodyVal = ``;
let middlejdtqqp1BODY = [];


let jdtqqp1fbbodyArr = [];
let jdtqqp1fbbodyVal = ``;
let middlejdtqqp1fbBODY = [];


let jdtqqp2bodyArr = [];
let jdtqqp2bodyVal = ``;
let middlejdtqqp2BODY = [];


let jdtqqp2fbbodyArr = [];
let jdtqqp2fbbodyVal = ``;
let middlejdtqqp2fbBODY = [];


let jdtqqp3bodyArr = [];
let jdtqqp3bodyVal = ``;
let middlejdtqqp3BODY = [];


let jdtqqp3fbbodyArr = [];
let jdtqqp3fbbodyVal = ``;
let middlejdtqqp3fbBODY = [];


let jdtqqp4bodyArr = [];
let jdtqqp4bodyVal = ``;
let middlejdtqqp4BODY = [];


let jdtqcjybodyArr = [];
let jdtqcjybodyVal = ``;
let middlejdtqcjyBODY = [];


let jdtqcjbodyArr = [];
let jdtqcjbodyVal = ``;
let middlejdtqcjBODY = [];


let jdtqcjcsbodyArr = [];
let jdtqcjcsbodyVal = ``;
let middlejdtqcjcsBODY = [];


let jdtqrwbodyArr = [];
let jdtqrwbodyVal = ``;
let middlejdtqrwBODY = [];


let jdtqspbodyArr = [];
let jdtqspbodyVal = ``;
let middlejdtqspBODY = [];


let jdtqspwcbodyArr = [];
let jdtqspwcbodyVal = ``;
let middlejdtqspwcBODY = [];


let jdtqspwcfbbodyArr = [];
let jdtqspwcfbbodyVal = ``;
let middlejdtqspwcfbBODY = [];


let jdtqqdbodyArr = [];
let jdtqqdbodyVal = ``;
let middlejdtqqdBODY = [];


let jdtqqdfbbodyArr = [];
let jdtqqdfbbodyVal = ``;
let middlejdtqqdfbBODY = [];


let jdtqqdwcbodyArr = [];
let jdtqqdwcbodyVal = ``;
let middlejdtqqdwcBODY = [];


let jdtqqdwcfbbodyArr = [];
let jdtqqdwcfbbodyVal = ``;
let middlejdtqqdwcfbBODY = [];


let jdtqtqbodyArr = [];
let jdtqtqbodyVal = ``;
let middlejdtqtqBODY = [];


let jdtqtqwcbodyArr = [];
let jdtqtqwcbodyVal = ``;
let middlejdtqtqwcBODY = [];


let jdtqtqwcfbbodyArr = [];
let jdtqtqwcfbbodyVal = ``;
let middlejdtqtqwcfbBODY = [];


let jdtqxfwcbodyArr = [];
let jdtqxfwcbodyVal = ``;
let middlejdtqxfwcBODY = [];


let jdtqxfwcfbbodyArr = [];
let jdtqxfwcfbbodyVal = ``;
let middlejdtqxfwcfbBODY = [];


let jdtqcfybodyArr = [];
let jdtqcfybodyVal = ``;
let middlejdtqcfyBODY = [];


let jdtqcf1bodyArr = [];
let jdtqcf1bodyVal = ``;
let middlejdtqcf1BODY = [];


let jdtqcf1fbbodyArr = [];
let jdtqcf1fbbodyVal = ``;
let middlejdtqcf1fbBODY = [];


let jdtqcf2bodyArr = [];
let jdtqcf2bodyVal = ``;
let middlejdtqcf2BODY = [];


let jdtqcf2fbbodyArr = [];
let jdtqcf2fbbodyVal = ``;
let middlejdtqcf2fbBODY = [];


let jdtqcf3bodyArr = [];
let jdtqcf3bodyVal = ``;
let middlejdtqcf3BODY = [];


let jdtqcf3fbbodyArr = [];
let jdtqcf3fbbodyVal = ``;
let middlejdtqcf3fbBODY = [];


let jdtqcf4bodyArr = [];
let jdtqcf4bodyVal = ``;
let middlejdtqcf4BODY = [];


let jdtqcf4fbbodyArr = [];
let jdtqcf4fbbodyVal = ``;
let middlejdtqcf4fbBODY = [];


let jdtqcf5bodyArr = [];
let jdtqcf5bodyVal = ``;
let middlejdtqcf5BODY = [];


let jdtqcf5fbbodyArr = [];
let jdtqcf5fbbodyVal = ``;
let middlejdtqcf5fbBODY = [];


let jdtqjcybodyArr = [];
let jdtqjcybodyVal = ``;
let middlejdtqjcyBODY = [];


let jdtqjcabodyArr = [];
let jdtqjcabodyVal = ``;
let middlejdtqjcaBODY = [];


let jdtqjcbbodyArr = [];
let jdtqjcbbodyVal = ``;
let middlejdtqjcbBODY = [];


let jdtqjclqbodyArr = [];
let jdtqjclqbodyVal = ``;
let middlejdtqjclqBODY = [];


if ($.isNode() && process.env.JDTQ_jdtquserBODY) {

    notifyttt = process.env.JDTQ_notifyttt || "1";
notifyInterval = process.env.JDTQ_notifyInterval || "2";
    Minutes = process.env.JDTQ_Minutes || "10";
    
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );

    if (
        process.env.JDTQ_jdtquserBODY &&
        process.env.JDTQ_jdtquserBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtquserBODY = process.env.JDTQ_jdtquserBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtquserBODY = process.env.JDTQ_jdtquserBODY.split();
    }
    Object.keys(middlejdtquserBODY).forEach((item) => {
        if (middlejdtquserBODY[item]) {
            jdtquserbodyArr.push(middlejdtquserBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqcoinBODY &&
        process.env.JDTQ_jdtqcoinBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqcoinBODY = process.env.JDTQ_jdtqcoinBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqcoinBODY = process.env.JDTQ_jdtqcoinBODY.split();
    }
    Object.keys(middlejdtqcoinBODY).forEach((item) => {
        if (middlejdtqcoinBODY[item]) {
            jdtqcoinbodyArr.push(middlejdtqcoinBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqqpBODY &&
        process.env.JDTQ_jdtqqpBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqqpBODY = process.env.JDTQ_jdtqqpBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqqpBODY = process.env.JDTQ_jdtqqpBODY.split();
    }
    Object.keys(middlejdtqqpBODY).forEach((item) => {
        if (middlejdtqqpBODY[item]) {
            jdtqqpbodyArr.push(middlejdtqqpBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqqp1BODY &&
        process.env.JDTQ_jdtqqp1BODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqqp1BODY = process.env.JDTQ_jdtqqp1BODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqqp1BODY = process.env.JDTQ_jdtqqp1BODY.split();
    }
    Object.keys(middlejdtqqp1BODY).forEach((item) => {
        if (middlejdtqqp1BODY[item]) {
            jdtqqp1bodyArr.push(middlejdtqqp1BODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqqp1fbBODY &&
        process.env.JDTQ_jdtqqp1fbBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqqp1fbBODY = process.env.JDTQ_jdtqqp1fbBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqqp1fbBODY = process.env.JDTQ_jdtqqp1fbBODY.split();
    }
    Object.keys(middlejdtqqp1fbBODY).forEach((item) => {
        if (middlejdtqqp1fbBODY[item]) {
            jdtqqp1fbbodyArr.push(middlejdtqqp1fbBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqqp2BODY &&
        process.env.JDTQ_jdtqqp2BODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqqp2BODY = process.env.JDTQ_jdtqqp2BODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqqp2BODY = process.env.JDTQ_jdtqqp2BODY.split();
    }
    Object.keys(middlejdtqqp2BODY).forEach((item) => {
        if (middlejdtqqp2BODY[item]) {
            jdtqqp2bodyArr.push(middlejdtqqp2BODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqqp2fbBODY &&
        process.env.JDTQ_jdtqqp2fbBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqqp2fbBODY = process.env.JDTQ_jdtqqp2fbBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqqp2fbBODY = process.env.JDTQ_jdtqqp2fbBODY.split();
    }
    Object.keys(middlejdtqqp2fbBODY).forEach((item) => {
        if (middlejdtqqp2fbBODY[item]) {
            jdtqqp2fbbodyArr.push(middlejdtqqp2fbBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqqp3BODY &&
        process.env.JDTQ_jdtqqp3BODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqqp3BODY = process.env.JDTQ_jdtqqp3BODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqqp3BODY = process.env.JDTQ_jdtqqp3BODY.split();
    }
    Object.keys(middlejdtqqp3BODY).forEach((item) => {
        if (middlejdtqqp3BODY[item]) {
            jdtqqp3bodyArr.push(middlejdtqqp3BODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqqp3fbBODY &&
        process.env.JDTQ_jdtqqp3fbBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqqp3fbBODY = process.env.JDTQ_jdtqqp3fbBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqqp3fbBODY = process.env.JDTQ_jdtqqp3fbBODY.split();
    }
    Object.keys(middlejdtqqp3fbBODY).forEach((item) => {
        if (middlejdtqqp3fbBODY[item]) {
            jdtqqp3fbbodyArr.push(middlejdtqqp3fbBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqqp4BODY &&
        process.env.JDTQ_jdtqqp4BODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqqp4BODY = process.env.JDTQ_jdtqqp4BODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqqp4BODY = process.env.JDTQ_jdtqqp4BODY.split();
    }
    Object.keys(middlejdtqqp4BODY).forEach((item) => {
        if (middlejdtqqp4BODY[item]) {
            jdtqqp4bodyArr.push(middlejdtqqp4BODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqcjyBODY &&
        process.env.JDTQ_jdtqcjyBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqcjyBODY = process.env.JDTQ_jdtqcjyBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqcjyBODY = process.env.JDTQ_jdtqcjyBODY.split();
    }
    Object.keys(middlejdtqcjyBODY).forEach((item) => {
        if (middlejdtqcjyBODY[item]) {
            jdtqcjybodyArr.push(middlejdtqcjyBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqcjBODY &&
        process.env.JDTQ_jdtqcjBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqcjBODY = process.env.JDTQ_jdtqcjBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqcjBODY = process.env.JDTQ_jdtqcjBODY.split();
    }
    Object.keys(middlejdtqcjBODY).forEach((item) => {
        if (middlejdtqcjBODY[item]) {
            jdtqcjbodyArr.push(middlejdtqcjBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqcjcsBODY &&
        process.env.JDTQ_jdtqcjcsBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqcjcsBODY = process.env.JDTQ_jdtqcjcsBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqcjcsBODY = process.env.JDTQ_jdtqcjcsBODY.split();
    }
    Object.keys(middlejdtqcjcsBODY).forEach((item) => {
        if (middlejdtqcjcsBODY[item]) {
            jdtqcjcsbodyArr.push(middlejdtqcjcsBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqrwBODY &&
        process.env.JDTQ_jdtqrwBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqrwBODY = process.env.JDTQ_jdtqrwBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqrwBODY = process.env.JDTQ_jdtqrwBODY.split();
    }
    Object.keys(middlejdtqrwBODY).forEach((item) => {
        if (middlejdtqrwBODY[item]) {
            jdtqrwbodyArr.push(middlejdtqrwBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqspBODY &&
        process.env.JDTQ_jdtqspBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqspBODY = process.env.JDTQ_jdtqspBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqspBODY = process.env.JDTQ_jdtqspBODY.split();
    }
    Object.keys(middlejdtqspBODY).forEach((item) => {
        if (middlejdtqspBODY[item]) {
            jdtqspbodyArr.push(middlejdtqspBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqspwcBODY &&
        process.env.JDTQ_jdtqspwcBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqspwcBODY = process.env.JDTQ_jdtqspwcBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqspwcBODY = process.env.JDTQ_jdtqspwcBODY.split();
    }
    Object.keys(middlejdtqspwcBODY).forEach((item) => {
        if (middlejdtqspwcBODY[item]) {
            jdtqspwcbodyArr.push(middlejdtqspwcBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqspwcfbBODY &&
        process.env.JDTQ_jdtqspwcfbBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqspwcfbBODY = process.env.JDTQ_jdtqspwcfbBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqspwcfbBODY = process.env.JDTQ_jdtqspwcfbBODY.split();
    }
    Object.keys(middlejdtqspwcfbBODY).forEach((item) => {
        if (middlejdtqspwcfbBODY[item]) {
            jdtqspwcfbbodyArr.push(middlejdtqspwcfbBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqqdBODY &&
        process.env.JDTQ_jdtqqdBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqqdBODY = process.env.JDTQ_jdtqqdBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqqdBODY = process.env.JDTQ_jdtqqdBODY.split();
    }
    Object.keys(middlejdtqqdBODY).forEach((item) => {
        if (middlejdtqqdBODY[item]) {
            jdtqqdbodyArr.push(middlejdtqqdBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqqdfbBODY &&
        process.env.JDTQ_jdtqqdfbBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqqdfbBODY = process.env.JDTQ_jdtqqdfbBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqqdfbBODY = process.env.JDTQ_jdtqqdfbBODY.split();
    }
    Object.keys(middlejdtqqdfbBODY).forEach((item) => {
        if (middlejdtqqdfbBODY[item]) {
            jdtqqdfbbodyArr.push(middlejdtqqdfbBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqqdwcBODY &&
        process.env.JDTQ_jdtqqdwcBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqqdwcBODY = process.env.JDTQ_jdtqqdwcBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqqdwcBODY = process.env.JDTQ_jdtqqdwcBODY.split();
    }
    Object.keys(middlejdtqqdwcBODY).forEach((item) => {
        if (middlejdtqqdwcBODY[item]) {
            jdtqqdwcbodyArr.push(middlejdtqqdwcBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqqdwcfbBODY &&
        process.env.JDTQ_jdtqqdwcfbBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqqdwcfbBODY = process.env.JDTQ_jdtqqdwcfbBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqqdwcfbBODY = process.env.JDTQ_jdtqqdwcfbBODY.split();
    }
    Object.keys(middlejdtqqdwcfbBODY).forEach((item) => {
        if (middlejdtqqdwcfbBODY[item]) {
            jdtqqdwcfbbodyArr.push(middlejdtqqdwcfbBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqtqBODY &&
        process.env.JDTQ_jdtqtqBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqtqBODY = process.env.JDTQ_jdtqtqBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqtqBODY = process.env.JDTQ_jdtqtqBODY.split();
    }
    Object.keys(middlejdtqtqBODY).forEach((item) => {
        if (middlejdtqtqBODY[item]) {
            jdtqtqbodyArr.push(middlejdtqtqBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqtqwcBODY &&
        process.env.JDTQ_jdtqtqwcBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqtqwcBODY = process.env.JDTQ_jdtqtqwcBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqtqwcBODY = process.env.JDTQ_jdtqtqwcBODY.split();
    }
    Object.keys(middlejdtqtqwcBODY).forEach((item) => {
        if (middlejdtqtqwcBODY[item]) {
            jdtqtqwcbodyArr.push(middlejdtqtqwcBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqtqwcfbBODY &&
        process.env.JDTQ_jdtqtqwcfbBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqtqwcfbBODY = process.env.JDTQ_jdtqtqwcfbBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqtqwcfbBODY = process.env.JDTQ_jdtqtqwcfbBODY.split();
    }
    Object.keys(middlejdtqtqwcfbBODY).forEach((item) => {
        if (middlejdtqtqwcfbBODY[item]) {
            jdtqtqwcfbbodyArr.push(middlejdtqtqwcfbBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqxfwcBODY &&
        process.env.JDTQ_jdtqxfwcBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqxfwcBODY = process.env.JDTQ_jdtqxfwcBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqxfwcBODY = process.env.JDTQ_jdtqxfwcBODY.split();
    }
    Object.keys(middlejdtqxfwcBODY).forEach((item) => {
        if (middlejdtqxfwcBODY[item]) {
            jdtqxfwcbodyArr.push(middlejdtqxfwcBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqxfwcfbBODY &&
        process.env.JDTQ_jdtqxfwcfbBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqxfwcfbBODY = process.env.JDTQ_jdtqxfwcfbBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqxfwcfbBODY = process.env.JDTQ_jdtqxfwcfbBODY.split();
    }
    Object.keys(middlejdtqxfwcfbBODY).forEach((item) => {
        if (middlejdtqxfwcfbBODY[item]) {
            jdtqxfwcfbbodyArr.push(middlejdtqxfwcfbBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqcfyBODY &&
        process.env.JDTQ_jdtqcfyBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqcfyBODY = process.env.JDTQ_jdtqcfyBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqcfyBODY = process.env.JDTQ_jdtqcfyBODY.split();
    }
    Object.keys(middlejdtqcfyBODY).forEach((item) => {
        if (middlejdtqcfyBODY[item]) {
            jdtqcfybodyArr.push(middlejdtqcfyBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqcf1BODY &&
        process.env.JDTQ_jdtqcf1BODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqcf1BODY = process.env.JDTQ_jdtqcf1BODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqcf1BODY = process.env.JDTQ_jdtqcf1BODY.split();
    }
    Object.keys(middlejdtqcf1BODY).forEach((item) => {
        if (middlejdtqcf1BODY[item]) {
            jdtqcf1bodyArr.push(middlejdtqcf1BODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqcf1fbBODY &&
        process.env.JDTQ_jdtqcf1fbBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqcf1fbBODY = process.env.JDTQ_jdtqcf1fbBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqcf1fbBODY = process.env.JDTQ_jdtqcf1fbBODY.split();
    }
    Object.keys(middlejdtqcf1fbBODY).forEach((item) => {
        if (middlejdtqcf1fbBODY[item]) {
            jdtqcf1fbbodyArr.push(middlejdtqcf1fbBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqcf2BODY &&
        process.env.JDTQ_jdtqcf2BODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqcf2BODY = process.env.JDTQ_jdtqcf2BODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqcf2BODY = process.env.JDTQ_jdtqcf2BODY.split();
    }
    Object.keys(middlejdtqcf2BODY).forEach((item) => {
        if (middlejdtqcf2BODY[item]) {
            jdtqcf2bodyArr.push(middlejdtqcf2BODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqcf2fbBODY &&
        process.env.JDTQ_jdtqcf2fbBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqcf2fbBODY = process.env.JDTQ_jdtqcf2fbBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqcf2fbBODY = process.env.JDTQ_jdtqcf2fbBODY.split();
    }
    Object.keys(middlejdtqcf2fbBODY).forEach((item) => {
        if (middlejdtqcf2fbBODY[item]) {
            jdtqcf2fbbodyArr.push(middlejdtqcf2fbBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqcf3BODY &&
        process.env.JDTQ_jdtqcf3BODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqcf3BODY = process.env.JDTQ_jdtqcf3BODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqcf3BODY = process.env.JDTQ_jdtqcf3BODY.split();
    }
    Object.keys(middlejdtqcf3BODY).forEach((item) => {
        if (middlejdtqcf3BODY[item]) {
            jdtqcf3bodyArr.push(middlejdtqcf3BODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqcf3fbBODY &&
        process.env.JDTQ_jdtqcf3fbBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqcf3fbBODY = process.env.JDTQ_jdtqcf3fbBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqcf3fbBODY = process.env.JDTQ_jdtqcf3fbBODY.split();
    }
    Object.keys(middlejdtqcf3fbBODY).forEach((item) => {
        if (middlejdtqcf3fbBODY[item]) {
            jdtqcf3fbbodyArr.push(middlejdtqcf3fbBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqcf4BODY &&
        process.env.JDTQ_jdtqcf4BODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqcf4BODY = process.env.JDTQ_jdtqcf4BODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqcf4BODY = process.env.JDTQ_jdtqcf4BODY.split();
    }
    Object.keys(middlejdtqcf4BODY).forEach((item) => {
        if (middlejdtqcf4BODY[item]) {
            jdtqcf4bodyArr.push(middlejdtqcf4BODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqcf4fbBODY &&
        process.env.JDTQ_jdtqcf4fbBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqcf4fbBODY = process.env.JDTQ_jdtqcf4fbBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqcf4fbBODY = process.env.JDTQ_jdtqcf4fbBODY.split();
    }
    Object.keys(middlejdtqcf4fbBODY).forEach((item) => {
        if (middlejdtqcf4fbBODY[item]) {
            jdtqcf4fbbodyArr.push(middlejdtqcf4fbBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqcf5BODY &&
        process.env.JDTQ_jdtqcf5BODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqcf5BODY = process.env.JDTQ_jdtqcf5BODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqcf5BODY = process.env.JDTQ_jdtqcf5BODY.split();
    }
    Object.keys(middlejdtqcf5BODY).forEach((item) => {
        if (middlejdtqcf5BODY[item]) {
            jdtqcf5bodyArr.push(middlejdtqcf5BODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqcf5fbBODY &&
        process.env.JDTQ_jdtqcf5fbBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqcf5fbBODY = process.env.JDTQ_jdtqcf5fbBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqcf5fbBODY = process.env.JDTQ_jdtqcf5fbBODY.split();
    }
    Object.keys(middlejdtqcf5fbBODY).forEach((item) => {
        if (middlejdtqcf5fbBODY[item]) {
            jdtqcf5fbbodyArr.push(middlejdtqcf5fbBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqjcyBODY &&
        process.env.JDTQ_jdtqjcyBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqjcyBODY = process.env.JDTQ_jdtqjcyBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqjcyBODY = process.env.JDTQ_jdtqjcyBODY.split();
    }
    Object.keys(middlejdtqjcyBODY).forEach((item) => {
        if (middlejdtqjcyBODY[item]) {
            jdtqjcybodyArr.push(middlejdtqjcyBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqjcaBODY &&
        process.env.JDTQ_jdtqjcaBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqjcaBODY = process.env.JDTQ_jdtqjcaBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqjcaBODY = process.env.JDTQ_jdtqjcaBODY.split();
    }
    Object.keys(middlejdtqjcaBODY).forEach((item) => {
        if (middlejdtqjcaBODY[item]) {
            jdtqjcabodyArr.push(middlejdtqjcaBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqjcbBODY &&
        process.env.JDTQ_jdtqjcbBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqjcbBODY = process.env.JDTQ_jdtqjcbBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqjcbBODY = process.env.JDTQ_jdtqjcbBODY.split();
    }
    Object.keys(middlejdtqjcbBODY).forEach((item) => {
        if (middlejdtqjcbBODY[item]) {
            jdtqjcbbodyArr.push(middlejdtqjcbBODY[item]);
        }
    });

    if (
        process.env.JDTQ_jdtqjclqBODY &&
        process.env.JDTQ_jdtqjclqBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlejdtqjclqBODY = process.env.JDTQ_jdtqjclqBODY.split(COOKIES_SPLIT);
    } else {
        middlejdtqjclqBODY = process.env.JDTQ_jdtqjclqBODY.split();
    }
    Object.keys(middlejdtqjclqBODY).forEach((item) => {
        if (middlejdtqjclqBODY[item]) {
            jdtqjclqbodyArr.push(middlejdtqjclqBODY[item]);
        }
    });

} else if ($.isNode() && COOKIE.datas && COOKIE.datas[0].val != '') {
    console.log(
        `============ cookie方式为：boxjs复制会话 =============\n`
    );
    XH = (COOKIE.settings.find(item => item.id === `jdtqXH`)).val;
    notifyttt = (COOKIE.settings.find(item => item.id === `jdtqnotifyttt`)).val || '1';
    notifyInterval = (COOKIE.settings.find(item => item.id === `jdtqnotifyInterval`)).val || '2';
    Minutes = (COOKIE.settings.find(item => item.id === `jdtqMinutes`)).val || '10';
    jdtqCount = (COOKIE.settings.find(item => item.id === `jdtqCount`)).val || '1';
    for (let i = 1; i <= jdtqCount; i++) {
        if (i == 1) {
            op = ``
        } else {
            op = i
        }
        if (COOKIE.datas.find(item => item.key === `jdtquserbody${op}`)) {

            jdtquserbodyArr.push(COOKIE.datas.find(item => item.key === `jdtquserbody${op}`).val);

            jdtqcoinbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqcoinbody${op}`).val);

            jdtqqpbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqqpbody${op}`).val);

            jdtqqp1bodyArr.push(COOKIE.datas.find(item => item.key === `jdtqqp1body${op}`).val);

            jdtqqp1fbbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqqp1fbbody${op}`).val);

            jdtqqp2bodyArr.push(COOKIE.datas.find(item => item.key === `jdtqqp2body${op}`).val);

            jdtqqp2fbbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqqp2fbbody${op}`).val);

            jdtqqp3bodyArr.push(COOKIE.datas.find(item => item.key === `jdtqqp3body${op}`).val);

            jdtqqp3fbbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqqp3fbbody${op}`).val);

            jdtqqp4bodyArr.push(COOKIE.datas.find(item => item.key === `jdtqqp4body${op}`).val);

            jdtqcjybodyArr.push(COOKIE.datas.find(item => item.key === `jdtqcjybody${op}`).val);

            jdtqcjbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqcjbody${op}`).val);

            jdtqcjcsbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqcjcsbody${op}`).val);

            jdtqrwbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqrwbody${op}`).val);

            jdtqspbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqspbody${op}`).val);

            jdtqspwcbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqspwcbody${op}`).val);

            jdtqspwcfbbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqspwcfbbody${op}`).val);

            jdtqqdbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqqdbody${op}`).val);

            jdtqqdfbbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqqdfbbody${op}`).val);

            jdtqqdwcbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqqdwcbody${op}`).val);

            jdtqqdwcfbbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqqdwcfbbody${op}`).val);

            jdtqtqbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqtqbody${op}`).val);

            jdtqtqwcbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqtqwcbody${op}`).val);

            jdtqtqwcfbbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqtqwcfbbody${op}`).val);

            jdtqxfwcbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqxfwcbody${op}`).val);

            jdtqxfwcfbbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqxfwcfbbody${op}`).val);

            jdtqcfybodyArr.push(COOKIE.datas.find(item => item.key === `jdtqcfybody${op}`).val);

            jdtqcf1bodyArr.push(COOKIE.datas.find(item => item.key === `jdtqcf1body${op}`).val);

            jdtqcf1fbbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqcf1fbbody${op}`).val);

            jdtqcf2bodyArr.push(COOKIE.datas.find(item => item.key === `jdtqcf2body${op}`).val);

            jdtqcf2fbbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqcf2fbbody${op}`).val);

            jdtqcf3bodyArr.push(COOKIE.datas.find(item => item.key === `jdtqcf3body${op}`).val);

            jdtqcf3fbbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqcf3fbbody${op}`).val);

            jdtqcf4bodyArr.push(COOKIE.datas.find(item => item.key === `jdtqcf4body${op}`).val);

            jdtqcf4fbbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqcf4fbbody${op}`).val);

            jdtqcf5bodyArr.push(COOKIE.datas.find(item => item.key === `jdtqcf5body${op}`).val);

            jdtqcf5fbbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqcf5fbbody${op}`).val);

            jdtqjcybodyArr.push(COOKIE.datas.find(item => item.key === `jdtqjcybody${op}`).val);

            jdtqjcabodyArr.push(COOKIE.datas.find(item => item.key === `jdtqjcabody${op}`).val);

            jdtqjcbbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqjcbbody${op}`).val);

            jdtqjclqbodyArr.push(COOKIE.datas.find(item => item.key === `jdtqjclqbody${op}`).val);

        }
    }
} else {
    if ("jdtqXH") {
        XH = $.getval("jdtqXH") || '0';
    }
    if ("jdtqCK") {
        CK = $.getval("jdtqCK") || '0';
    }
    if ("jdtqnotifyttt") {
            notifyttt = $.getval("jdtqnotifyttt") || '1';
        }
        if ("jdtqnotifyInterval") {
            notifyInterval = $.getval("jdtqnotifyInterval") || '2';
        }
        if ("jdtqMinutes") {
           Minutes = $.getval("jdtqMinutes") || '10';
        }
    let jdtqCount = ($.getval('jdtqCount') || '1') - 0;
    for (let i = 1; i <= jdtqCount; i++) {
        if (i == 1) {
            op = ``
        } else {
            op = i
        }
        if ($.getdata(`jdtquserbody${op}`)) {

            jdtquserbodyArr.push($.getdata(`jdtquserbody${op}`));

            jdtqcoinbodyArr.push($.getdata(`jdtqcoinbody${op}`));

            jdtqqpbodyArr.push($.getdata(`jdtqqpbody${op}`));

            jdtqqp1bodyArr.push($.getdata(`jdtqqp1body${op}`));

            jdtqqp1fbbodyArr.push($.getdata(`jdtqqp1fbbody${op}`));

            jdtqqp2bodyArr.push($.getdata(`jdtqqp2body${op}`));

            jdtqqp2fbbodyArr.push($.getdata(`jdtqqp2fbbody${op}`));

            jdtqqp3bodyArr.push($.getdata(`jdtqqp3body${op}`));

            jdtqqp3fbbodyArr.push($.getdata(`jdtqqp3fbbody${op}`));

            jdtqqp4bodyArr.push($.getdata(`jdtqqp4body${op}`));

            jdtqcjybodyArr.push($.getdata(`jdtqcjybody${op}`));

            jdtqcjbodyArr.push($.getdata(`jdtqcjbody${op}`));

            jdtqcjcsbodyArr.push($.getdata(`jdtqcjcsbody${op}`));

            jdtqrwbodyArr.push($.getdata(`jdtqrwbody${op}`));

            jdtqspbodyArr.push($.getdata(`jdtqspbody${op}`));

            jdtqspwcbodyArr.push($.getdata(`jdtqspwcbody${op}`));

            jdtqspwcfbbodyArr.push($.getdata(`jdtqspwcfbbody${op}`));

            jdtqqdbodyArr.push($.getdata(`jdtqqdbody${op}`));

            jdtqqdfbbodyArr.push($.getdata(`jdtqqdfbbody${op}`));

            jdtqqdwcbodyArr.push($.getdata(`jdtqqdwcbody${op}`));

            jdtqqdwcfbbodyArr.push($.getdata(`jdtqqdwcfbbody${op}`));

            jdtqtqbodyArr.push($.getdata(`jdtqtqbody${op}`));

            jdtqtqwcbodyArr.push($.getdata(`jdtqtqwcbody${op}`));

            jdtqtqwcfbbodyArr.push($.getdata(`jdtqtqwcfbbody${op}`));

            jdtqxfwcbodyArr.push($.getdata(`jdtqxfwcbody${op}`));

            jdtqxfwcfbbodyArr.push($.getdata(`jdtqxfwcfbbody${op}`));

            jdtqcfybodyArr.push($.getdata(`jdtqcfybody${op}`));

            jdtqcf1bodyArr.push($.getdata(`jdtqcf1body${op}`));

            jdtqcf1fbbodyArr.push($.getdata(`jdtqcf1fbbody${op}`));

            jdtqcf2bodyArr.push($.getdata(`jdtqcf2body${op}`));

            jdtqcf2fbbodyArr.push($.getdata(`jdtqcf2fbbody${op}`));

            jdtqcf3bodyArr.push($.getdata(`jdtqcf3body${op}`));

            jdtqcf3fbbodyArr.push($.getdata(`jdtqcf3fbbody${op}`));

            jdtqcf4bodyArr.push($.getdata(`jdtqcf4body${op}`));

            jdtqcf4fbbodyArr.push($.getdata(`jdtqcf4fbbody${op}`));

            jdtqcf5bodyArr.push($.getdata(`jdtqcf5body${op}`));

            jdtqcf5fbbodyArr.push($.getdata(`jdtqcf5fbbody${op}`));

            jdtqjcybodyArr.push($.getdata(`jdtqjcybody${op}`));

            jdtqjcabodyArr.push($.getdata(`jdtqjcabody${op}`));

            jdtqjcbbodyArr.push($.getdata(`jdtqjcbbody${op}`));

            jdtqjclqbodyArr.push($.getdata(`jdtqjclqbody${op}`));

        }
    }
}

function GetCookie() {

    //获取用户名
    if (CK == 1 && $request && $request.url.indexOf("zt") >= 0 && $request.body.indexOf("%3D%3D") >= 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2130") >= 0) {
        const jdtquserbodyVal = $request.body;
        if (jdtquserbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtquserbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtquserbodyVal, "jdtquserbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取用户名jdtquserbodyVal✅: 成功,jdtquserbodyVal: ${jdtquserbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取用户名jdtquserbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtquserbodyVal, "jdtquserbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取用户名jdtquserbodyVal✅: 成功,jdtquserbodyVal: ${jdtquserbodyVal}`
                );
                $.msg($.name + $.idx, `获取用户名jdtquserbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取账户信息
    if (CK == 2 && $request && $request.url.indexOf("zt") >= 0 && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && $request.headers['Content-Length'] >= 4966) {

        console.log(JSON.stringify($request.headers['Content-Length']))
        const jdtqcoinbodyVal = $request.body;
        if (jdtqcoinbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqcoinbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqcoinbodyVal, "jdtqcoinbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取账户信息jdtqcoinbodyVal✅: 成功,jdtqcoinbodyVal: ${jdtqcoinbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取账户信息jdtqcoinbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqcoinbodyVal, "jdtqcoinbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取账户信息jdtqcoinbodyVal✅: 成功,jdtqcoinbodyVal: ${jdtqcoinbodyVal}`
                );
                $.msg($.name + $.idx, `获取账户信息jdtqcoinbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取首页气泡
    if (CK == 3 && $request.url.indexOf("zt") >= 0 && $request && $request.body.indexOf("%3D%3D") >= 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2162") >= 0) {
        const jdtqqpbodyVal = $request.body;
        if (jdtqqpbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqqpbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqqpbodyVal, "jdtqqpbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取首页气泡jdtqqpbodyVal✅: 成功,jdtqqpbodyVal: ${jdtqqpbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取首页气泡jdtqqpbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqqpbodyVal, "jdtqqpbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取首页气泡jdtqqpbodyVal✅: 成功,jdtqqpbodyVal: ${jdtqqpbodyVal}`
                );
                $.msg($.name + $.idx, `获取首页气泡jdtqqpbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取领取气泡1
    if (CK == 4 && $request.url.indexOf("zt") >= 0 && $request.body.indexOf("%3D") >= 0 && $request.body.indexOf("%3D%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2228") >= 0) {
        const jdtqqp1bodyVal = $request.body;
        if (jdtqqp1bodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqqp1body' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqqp1bodyVal, "jdtqqp1body" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取领取气泡1jdtqqp1bodyVal✅: 成功,jdtqqp1bodyVal: ${jdtqqp1bodyVal}`
                        );
                        $.msg($.name + $.idx, `获取领取气泡1jdtqqp1bodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqqp1bodyVal, "jdtqqp1body" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取领取气泡1jdtqqp1bodyVal✅: 成功,jdtqqp1bodyVal: ${jdtqqp1bodyVal}`
                );
                $.msg($.name + $.idx, `获取领取气泡1jdtqqp1bodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取气泡1翻倍
    if (CK == 5 && $request.url.indexOf("zt") >= 0 && $request.body.indexOf("%3D") >= 0 && $request.body.indexOf("%3D%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2228") >= 0) {
        const jdtqqp1fbbodyVal = $request.body;
        if (jdtqqp1fbbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqqp1fbbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqqp1fbbodyVal, "jdtqqp1fbbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取气泡1翻倍jdtqqp1fbbodyVal✅: 成功,jdtqqp1fbbodyVal: ${jdtqqp1fbbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取气泡1翻倍jdtqqp1fbbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqqp1fbbodyVal, "jdtqqp1fbbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取气泡1翻倍jdtqqp1fbbodyVal✅: 成功,jdtqqp1fbbodyVal: ${jdtqqp1fbbodyVal}`
                );
                $.msg($.name + $.idx, `获取气泡1翻倍jdtqqp1fbbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取领取气泡2
    if (CK == 6 && $request.url.indexOf("zt") >= 0 && $request.body.indexOf("%3D") >= 0 && $request.body.indexOf("%3D%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2228") >= 0) {
        const jdtqqp2bodyVal = $request.body;
        if (jdtqqp2bodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqqp2body' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqqp2bodyVal, "jdtqqp2body" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取领取气泡2jdtqqp2bodyVal✅: 成功,jdtqqp2bodyVal: ${jdtqqp2bodyVal}`
                        );
                        $.msg($.name + $.idx, `获取领取气泡2jdtqqp2bodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqqp2bodyVal, "jdtqqp2body" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取领取气泡2jdtqqp2bodyVal✅: 成功,jdtqqp2bodyVal: ${jdtqqp2bodyVal}`
                );
                $.msg($.name + $.idx, `获取领取气泡2jdtqqp2bodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取气泡2翻倍
    if (CK == 7 && $request.url.indexOf("zt") >= 0 && $request.body.indexOf("%3D") >= 0 && $request.body.indexOf("%3D%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2228") >= 0) {
        const jdtqqp2fbbodyVal = $request.body;
        if (jdtqqp2fbbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqqp2fbbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqqp2fbbodyVal, "jdtqqp2fbbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取气泡2翻倍jdtqqp2fbbodyVal✅: 成功,jdtqqp2fbbodyVal: ${jdtqqp2fbbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取气泡2翻倍jdtqqp2fbbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqqp2fbbodyVal, "jdtqqp2fbbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取气泡2翻倍jdtqqp2fbbodyVal✅: 成功,jdtqqp2fbbodyVal: ${jdtqqp2fbbodyVal}`
                );
                $.msg($.name + $.idx, `获取气泡2翻倍jdtqqp2fbbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取领取气泡3
    if (CK == 8 && $request.url.indexOf("zt") >= 0 && $request.body.indexOf("%3D") >= 0 && $request.body.indexOf("%3D%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2228") >= 0) {
        const jdtqqp3bodyVal = $request.body;
        if (jdtqqp3bodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqqp3body' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqqp3bodyVal, "jdtqqp3body" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取领取气泡3jdtqqp3bodyVal✅: 成功,jdtqqp3bodyVal: ${jdtqqp3bodyVal}`
                        );
                        $.msg($.name + $.idx, `获取领取气泡3jdtqqp3bodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqqp3bodyVal, "jdtqqp3body" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取领取气泡3jdtqqp3bodyVal✅: 成功,jdtqqp3bodyVal: ${jdtqqp3bodyVal}`
                );
                $.msg($.name + $.idx, `获取领取气泡3jdtqqp3bodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取气泡3翻倍
    if (CK == 9 && $request.url.indexOf("zt") >= 0 && $request.body.indexOf("%3D") >= 0 && $request.body.indexOf("%3D%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2228") >= 0) {
        const jdtqqp3fbbodyVal = $request.body;
        if (jdtqqp3fbbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqqp3fbbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqqp3fbbodyVal, "jdtqqp3fbbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取气泡3翻倍jdtqqp3fbbodyVal✅: 成功,jdtqqp3fbbodyVal: ${jdtqqp3fbbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取气泡3翻倍jdtqqp3fbbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqqp3fbbodyVal, "jdtqqp3fbbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取气泡3翻倍jdtqqp3fbbodyVal✅: 成功,jdtqqp3fbbodyVal: ${jdtqqp3fbbodyVal}`
                );
                $.msg($.name + $.idx, `获取气泡3翻倍jdtqqp3fbbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取领取气泡4
    if (CK == 10 && $request.url.indexOf("zt") >= 0 && $request.body.indexOf("%3D") >= 0 && $request.body.indexOf("%3D%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2228") >= 0) {
        const jdtqqp4bodyVal = $request.body;
        if (jdtqqp4bodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqqp4body' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqqp4bodyVal, "jdtqqp4body" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取领取气泡4jdtqqp4bodyVal✅: 成功,jdtqqp4bodyVal: ${jdtqqp4bodyVal}`
                        );
                        $.msg($.name + $.idx, `获取领取气泡4jdtqqp4bodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqqp4bodyVal, "jdtqqp4body" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取领取气泡4jdtqqp4bodyVal✅: 成功,jdtqqp4bodyVal: ${jdtqqp4bodyVal}`
                );
                $.msg($.name + $.idx, `获取领取气泡4jdtqqp4bodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取抽奖页
    if (CK == 24 && $request.url.indexOf("api") >= 0 && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2118") >= 0) {
        const jdtqcjybodyVal = $request.body;
        if (jdtqcjybodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqcjybody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqcjybodyVal, "jdtqcjybody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取抽奖页jdtqcjybodyVal✅: 成功,jdtqcjybodyVal: ${jdtqcjybodyVal}`
                        );
                        $.msg($.name + $.idx, `获取抽奖页jdtqcjybodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqcjybodyVal, "jdtqcjybody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取抽奖页jdtqcjybodyVal✅: 成功,jdtqcjybodyVal: ${jdtqcjybodyVal}`
                );
                $.msg($.name + $.idx, `获取抽奖页jdtqcjybodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取抽奖
    if (CK == 25 && $request.url.indexOf("api") >= 0 && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2118") >= 0) {
        const jdtqcjbodyVal = $request.body;
        if (jdtqcjbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqcjbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqcjbodyVal, "jdtqcjbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取抽奖jdtqcjbodyVal✅: 成功,jdtqcjbodyVal: ${jdtqcjbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取抽奖jdtqcjbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqcjbodyVal, "jdtqcjbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取抽奖jdtqcjbodyVal✅: 成功,jdtqcjbodyVal: ${jdtqcjbodyVal}`
                );
                $.msg($.name + $.idx, `获取抽奖jdtqcjbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取抽奖次数
    if (CK == 26 && $request.url.indexOf("api") >= api && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2118") >= 0) {
        const jdtqcjcsbodyVal = $request.body;
        if (jdtqcjcsbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqcjcsbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqcjcsbodyVal, "jdtqcjcsbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取抽奖次数jdtqcjcsbodyVal✅: 成功,jdtqcjcsbodyVal: ${jdtqcjcsbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取抽奖次数jdtqcjcsbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqcjcsbodyVal, "jdtqcjcsbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取抽奖次数jdtqcjcsbodyVal✅: 成功,jdtqcjcsbodyVal: ${jdtqcjcsbodyVal}`
                );
                $.msg($.name + $.idx, `获取抽奖次数jdtqcjcsbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取任务
    if (CK == 11 && $request.url.indexOf("zt") >= 0 && $request && $request.body.indexOf("%3D%3D") >= 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2162") >= 0) {
        const jdtqrwbodyVal = $request.body;
        if (jdtqrwbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqrwbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqrwbodyVal, "jdtqrwbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取任务jdtqrwbodyVal✅: 成功,jdtqrwbodyVal: ${jdtqrwbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取任务jdtqrwbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqrwbodyVal, "jdtqrwbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取任务jdtqrwbodyVal✅: 成功,jdtqrwbodyVal: ${jdtqrwbodyVal}`
                );
                $.msg($.name + $.idx, `获取任务jdtqrwbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取视频
    if (CK == 12 && $request.url.indexOf("zt") >= 0 && $request && $request.body.indexOf("%3D") >= 0 && $request.body.indexOf("%3D%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2228") >= 0) {
        const jdtqspbodyVal = $request.body;
        if (jdtqspbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqspbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqspbodyVal, "jdtqspbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取视频jdtqspbodyVal✅: 成功,jdtqspbodyVal: ${jdtqspbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取视频jdtqspbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqspbodyVal, "jdtqspbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取视频jdtqspbodyVal✅: 成功,jdtqspbodyVal: ${jdtqspbodyVal}`
                );
                $.msg($.name + $.idx, `获取视频jdtqspbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取视频完成
    if (CK == 13 && $request.url.indexOf("zt") >= 0 && $request.url.indexOf("zt") >= 0 && $request && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2182") >= 0) {
        const jdtqspwcbodyVal = $request.body;
        if (jdtqspwcbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqspwcbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqspwcbodyVal, "jdtqspwcbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取视频完成jdtqspwcbodyVal✅: 成功,jdtqspwcbodyVal: ${jdtqspwcbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取视频完成jdtqspwcbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqspwcbodyVal, "jdtqspwcbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取视频完成jdtqspwcbodyVal✅: 成功,jdtqspwcbodyVal: ${jdtqspwcbodyVal}`
                );
                $.msg($.name + $.idx, `获取视频完成jdtqspwcbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取视频完成翻倍
    if (CK == 14 && $request.url.indexOf("zt") >= 0 && $request && $request.body.indexOf("%3D") >= 0 && $request.body.indexOf("%3D%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2228") >= 0) {
        const jdtqspwcfbbodyVal = $request.body;
        if (jdtqspwcfbbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqspwcfbbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqspwcfbbodyVal, "jdtqspwcfbbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取视频完成翻倍jdtqspwcfbbodyVal✅: 成功,jdtqspwcfbbodyVal: ${jdtqspwcfbbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取视频完成翻倍jdtqspwcfbbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqspwcfbbodyVal, "jdtqspwcfbbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取视频完成翻倍jdtqspwcfbbodyVal✅: 成功,jdtqspwcfbbodyVal: ${jdtqspwcfbbodyVal}`
                );
                $.msg($.name + $.idx, `获取视频完成翻倍jdtqspwcfbbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取签到
    if (CK == 15 && $request.url.indexOf("zt") >= 0 && $request.url.indexOf("zt") >= 0 && $request && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2230") >= 0) {
        const jdtqqdbodyVal = $request.body;
        if (jdtqqdbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqqdbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqqdbodyVal, "jdtqqdbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取签到jdtqqdbodyVal✅: 成功,jdtqqdbodyVal: ${jdtqqdbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取签到jdtqqdbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqqdbodyVal, "jdtqqdbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取签到jdtqqdbodyVal✅: 成功,jdtqqdbodyVal: ${jdtqqdbodyVal}`
                );
                $.msg($.name + $.idx, `获取签到jdtqqdbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取签到翻倍
    if (CK == 16 && $request.url.indexOf("zt") >= 0 && $request && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2230") >= 0) {
        const jdtqqdfbbodyVal = $request.body;
        if (jdtqqdfbbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqqdfbbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqqdfbbodyVal, "jdtqqdfbbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取签到翻倍jdtqqdfbbodyVal✅: 成功,jdtqqdfbbodyVal: ${jdtqqdfbbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取签到翻倍jdtqqdfbbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqqdfbbodyVal, "jdtqqdfbbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取签到翻倍jdtqqdfbbodyVal✅: 成功,jdtqqdfbbodyVal: ${jdtqqdfbbodyVal}`
                );
                $.msg($.name + $.idx, `获取签到翻倍jdtqqdfbbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取签到完成
    if (CK == 17 && $request.url.indexOf("zt") >= 0 && $request && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2182") >= 0) {
        const jdtqqdwcbodyVal = $request.body;
        if (jdtqqdwcbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqqdwcbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqqdwcbodyVal, "jdtqqdwcbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取签到完成jdtqqdwcbodyVal✅: 成功,jdtqqdwcbodyVal: ${jdtqqdwcbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取签到完成jdtqqdwcbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqqdwcbodyVal, "jdtqqdwcbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取签到完成jdtqqdwcbodyVal✅: 成功,jdtqqdwcbodyVal: ${jdtqqdwcbodyVal}`
                );
                $.msg($.name + $.idx, `获取签到完成jdtqqdwcbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取签到完成翻倍
    if (CK == 18 && $request.url.indexOf("zt") >= 0 && $request && $request.body.indexOf("%3D") >= 0 && $request.body.indexOf("%3D%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2228") >= 0) {
        const jdtqqdwcfbbodyVal = $request.body;
        if (jdtqqdwcfbbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqqdwcfbbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqqdwcfbbodyVal, "jdtqqdwcfbbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取签到完成翻倍jdtqqdwcfbbodyVal✅: 成功,jdtqqdwcfbbodyVal: ${jdtqqdwcfbbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取签到完成翻倍jdtqqdwcfbbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqqdwcfbbodyVal, "jdtqqdwcfbbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取签到完成翻倍jdtqqdwcfbbodyVal✅: 成功,jdtqqdwcfbbodyVal: ${jdtqqdwcfbbodyVal}`
                );
                $.msg($.name + $.idx, `获取签到完成翻倍jdtqqdwcfbbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取天气
    if (CK == 19 && $request.url.indexOf("zt") >= 0 && $request && $request.body.indexOf("%3D") >= 0 && $request.body.indexOf("%3D%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2228") >= 0) {
        const jdtqtqbodyVal = $request.body;
        if (jdtqtqbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqtqbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqtqbodyVal, "jdtqtqbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取天气jdtqtqbodyVal✅: 成功,jdtqtqbodyVal: ${jdtqtqbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取天气jdtqtqbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqtqbodyVal, "jdtqtqbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取天气jdtqtqbodyVal✅: 成功,jdtqtqbodyVal: ${jdtqtqbodyVal}`
                );
                $.msg($.name + $.idx, `获取天气jdtqtqbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取天气完成
    if (CK == 20 && $request.url.indexOf("zt") >= 0 && $request && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2182") >= 0) {
        const jdtqtqwcbodyVal = $request.body;
        if (jdtqtqwcbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqtqwcbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqtqwcbodyVal, "jdtqtqwcbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取天气完成jdtqtqwcbodyVal✅: 成功,jdtqtqwcbodyVal: ${jdtqtqwcbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取天气完成jdtqtqwcbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqtqwcbodyVal, "jdtqtqwcbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取天气完成jdtqtqwcbodyVal✅: 成功,jdtqtqwcbodyVal: ${jdtqtqwcbodyVal}`
                );
                $.msg($.name + $.idx, `获取天气完成jdtqtqwcbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取天气完成翻倍
    if (CK == 21 && $request.url.indexOf("zt") >= 0 && $request && $request.body.indexOf("%3D") >= 0 && $request.body.indexOf("%3D%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2228") >= 0) {
        const jdtqtqwcfbbodyVal = $request.body;
        if (jdtqtqwcfbbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqtqwcfbbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqtqwcfbbodyVal, "jdtqtqwcfbbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取天气完成翻倍jdtqtqwcfbbodyVal✅: 成功,jdtqtqwcfbbodyVal: ${jdtqtqwcfbbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取天气完成翻倍jdtqtqwcfbbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqtqwcfbbodyVal, "jdtqtqwcfbbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取天气完成翻倍jdtqtqwcfbbodyVal✅: 成功,jdtqtqwcfbbodyVal: ${jdtqtqwcfbbodyVal}`
                );
                $.msg($.name + $.idx, `获取天气完成翻倍jdtqtqwcfbbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取悬浮完成
    if (CK == 22 && $request.url.indexOf("zt") >= 0 && $request && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2182") >= 0) {
        const jdtqxfwcbodyVal = $request.body;
        if (jdtqxfwcbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqxfwcbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqxfwcbodyVal, "jdtqxfwcbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取悬浮完成jdtqxfwcbodyVal✅: 成功,jdtqxfwcbodyVal: ${jdtqxfwcbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取悬浮完成jdtqxfwcbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqxfwcbodyVal, "jdtqxfwcbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取悬浮完成jdtqxfwcbodyVal✅: 成功,jdtqxfwcbodyVal: ${jdtqxfwcbodyVal}`
                );
                $.msg($.name + $.idx, `获取悬浮完成jdtqxfwcbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取悬浮完成翻倍
    if (CK == 23 && $request.url.indexOf("zt") >= 0 && $request && $request.body.indexOf("%3D") >= 0 && $request.body.indexOf("%3D%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2228") >= 0) {
        const jdtqxfwcfbbodyVal = $request.body;
        if (jdtqxfwcfbbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqxfwcfbbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqxfwcfbbodyVal, "jdtqxfwcfbbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取悬浮完成翻倍jdtqxfwcfbbodyVal✅: 成功,jdtqxfwcfbbodyVal: ${jdtqxfwcfbbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取悬浮完成翻倍jdtqxfwcfbbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqxfwcfbbodyVal, "jdtqxfwcfbbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取悬浮完成翻倍jdtqxfwcfbbodyVal✅: 成功,jdtqxfwcfbbodyVal: ${jdtqxfwcfbbodyVal}`
                );
                $.msg($.name + $.idx, `获取悬浮完成翻倍jdtqxfwcfbbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取吃饭页
    if (CK == 27 && $request.url.indexOf("event") >= 0 && $request && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2182") >= 0) {
        const jdtqcfybodyVal = $request.body;
        if (jdtqcfybodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqcfybody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqcfybodyVal, "jdtqcfybody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取吃饭页jdtqcfybodyVal✅: 成功,jdtqcfybodyVal: ${jdtqcfybodyVal}`
                        );
                        $.msg($.name + $.idx, `获取吃饭页jdtqcfybodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqcfybodyVal, "jdtqcfybody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取吃饭页jdtqcfybodyVal✅: 成功,jdtqcfybodyVal: ${jdtqcfybodyVal}`
                );
                $.msg($.name + $.idx, `获取吃饭页jdtqcfybodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取吃饭1
    if (CK == 28 && $request.url.indexOf("event") >= 0 && $request && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2166") >= 0) {
        const jdtqcf1bodyVal = $request.body;
        if (jdtqcf1bodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqcf1body' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqcf1bodyVal, "jdtqcf1body" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取吃饭1jdtqcf1bodyVal✅: 成功,jdtqcf1bodyVal: ${jdtqcf1bodyVal}`
                        );
                        $.msg($.name + $.idx, `获取吃饭1jdtqcf1bodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqcf1bodyVal, "jdtqcf1body" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取吃饭1jdtqcf1bodyVal✅: 成功,jdtqcf1bodyVal: ${jdtqcf1bodyVal}`
                );
                $.msg($.name + $.idx, `获取吃饭1jdtqcf1bodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取吃饭1翻倍
    if (CK == 29 && $request.url.indexOf("event") >= 0 && $request && $request.body.indexOf("%3D%3D") >= 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2178") >= 0) {
        const jdtqcf1fbbodyVal = $request.body;
        if (jdtqcf1fbbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqcf1fbbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqcf1fbbodyVal, "jdtqcf1fbbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取吃饭1翻倍jdtqcf1fbbodyVal✅: 成功,jdtqcf1fbbodyVal: ${jdtqcf1fbbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取吃饭1翻倍jdtqcf1fbbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqcf1fbbodyVal, "jdtqcf1fbbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取吃饭1翻倍jdtqcf1fbbodyVal✅: 成功,jdtqcf1fbbodyVal: ${jdtqcf1fbbodyVal}`
                );
                $.msg($.name + $.idx, `获取吃饭1翻倍jdtqcf1fbbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取吃饭2
    if (CK == 30 && $request.url.indexOf("event") >= 0 && $request && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2166") >= 0) {
        const jdtqcf2bodyVal = $request.body;
        if (jdtqcf2bodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqcf2body' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqcf2bodyVal, "jdtqcf2body" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取吃饭2jdtqcf2bodyVal✅: 成功,jdtqcf2bodyVal: ${jdtqcf2bodyVal}`
                        );
                        $.msg($.name + $.idx, `获取吃饭2jdtqcf2bodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqcf2bodyVal, "jdtqcf2body" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取吃饭2jdtqcf2bodyVal✅: 成功,jdtqcf2bodyVal: ${jdtqcf2bodyVal}`
                );
                $.msg($.name + $.idx, `获取吃饭2jdtqcf2bodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取吃饭2翻倍
    if (CK == 31 && $request.url.indexOf("event") >= 0 && $request && $request.body.indexOf("%3D%3D") >= 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2178") >= 0) {
        const jdtqcf2fbbodyVal = $request.body;
        if (jdtqcf2fbbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqcf2fbbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqcf2fbbodyVal, "jdtqcf2fbbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取吃饭2翻倍jdtqcf2fbbodyVal✅: 成功,jdtqcf2fbbodyVal: ${jdtqcf2fbbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取吃饭2翻倍jdtqcf2fbbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqcf2fbbodyVal, "jdtqcf2fbbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取吃饭2翻倍jdtqcf2fbbodyVal✅: 成功,jdtqcf2fbbodyVal: ${jdtqcf2fbbodyVal}`
                );
                $.msg($.name + $.idx, `获取吃饭2翻倍jdtqcf2fbbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取吃饭3
    if (CK == 32 && $request.url.indexOf("event") >= 0 && $request && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2166") >= 0) {
        const jdtqcf3bodyVal = $request.body;
        if (jdtqcf3bodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqcf3body' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqcf3bodyVal, "jdtqcf3body" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取吃饭3jdtqcf3bodyVal✅: 成功,jdtqcf3bodyVal: ${jdtqcf3bodyVal}`
                        );
                        $.msg($.name + $.idx, `获取吃饭3jdtqcf3bodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqcf3bodyVal, "jdtqcf3body" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取吃饭3jdtqcf3bodyVal✅: 成功,jdtqcf3bodyVal: ${jdtqcf3bodyVal}`
                );
                $.msg($.name + $.idx, `获取吃饭3jdtqcf3bodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取吃饭3翻倍
    if (CK == 33 && $request.url.indexOf("event") >= 0 && $request && $request.body.indexOf("%3D%3D") >= 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2178") >= 0) {
        const jdtqcf3fbbodyVal = $request.body;
        if (jdtqcf3fbbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqcf3fbbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqcf3fbbodyVal, "jdtqcf3fbbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取吃饭3翻倍jdtqcf3fbbodyVal✅: 成功,jdtqcf3fbbodyVal: ${jdtqcf3fbbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取吃饭3翻倍jdtqcf3fbbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqcf3fbbodyVal, "jdtqcf3fbbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取吃饭3翻倍jdtqcf3fbbodyVal✅: 成功,jdtqcf3fbbodyVal: ${jdtqcf3fbbodyVal}`
                );
                $.msg($.name + $.idx, `获取吃饭3翻倍jdtqcf3fbbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取吃饭4
    if (CK == 34 && $request.url.indexOf("event") >= 0 && $request && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2166") >= 0) {
        const jdtqcf4bodyVal = $request.body;
        if (jdtqcf4bodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqcf4body' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqcf4bodyVal, "jdtqcf4body" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取吃饭4jdtqcf4bodyVal✅: 成功,jdtqcf4bodyVal: ${jdtqcf4bodyVal}`
                        );
                        $.msg($.name + $.idx, `获取吃饭4jdtqcf4bodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqcf4bodyVal, "jdtqcf4body" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取吃饭4jdtqcf4bodyVal✅: 成功,jdtqcf4bodyVal: ${jdtqcf4bodyVal}`
                );
                $.msg($.name + $.idx, `获取吃饭4jdtqcf4bodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取吃饭4翻倍
    if (CK == 35 && $request.url.indexOf("event") >= 0 && $request && $request.body.indexOf("%3D%3D") >= 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2178") >= 0) {
        const jdtqcf4fbbodyVal = $request.body;
        if (jdtqcf4fbbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqcf4fbbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqcf4fbbodyVal, "jdtqcf4fbbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取吃饭4翻倍jdtqcf4fbbodyVal✅: 成功,jdtqcf4fbbodyVal: ${jdtqcf4fbbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取吃饭4翻倍jdtqcf4fbbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqcf4fbbodyVal, "jdtqcf4fbbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取吃饭4翻倍jdtqcf4fbbodyVal✅: 成功,jdtqcf4fbbodyVal: ${jdtqcf4fbbodyVal}`
                );
                $.msg($.name + $.idx, `获取吃饭4翻倍jdtqcf4fbbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取吃饭5
    if (CK == 36 && $request.url.indexOf("event") >= 0 && $request && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2166") >= 0) {
        const jdtqcf5bodyVal = $request.body;
        if (jdtqcf5bodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqcf5body' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqcf5bodyVal, "jdtqcf5body" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取吃饭5jdtqcf5bodyVal✅: 成功,jdtqcf5bodyVal: ${jdtqcf5bodyVal}`
                        );
                        $.msg($.name + $.idx, `获取吃饭5jdtqcf5bodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqcf5bodyVal, "jdtqcf5body" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取吃饭5jdtqcf5bodyVal✅: 成功,jdtqcf5bodyVal: ${jdtqcf5bodyVal}`
                );
                $.msg($.name + $.idx, `获取吃饭5jdtqcf5bodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取吃饭5翻倍
    if (CK == 37 && $request.url.indexOf("event") >= 0 && $request && $request.body.indexOf("%3D%3D") >= 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2178") >= 0) {
        const jdtqcf5fbbodyVal = $request.body;
        if (jdtqcf5fbbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqcf5fbbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqcf5fbbodyVal, "jdtqcf5fbbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取吃饭5翻倍jdtqcf5fbbodyVal✅: 成功,jdtqcf5fbbodyVal: ${jdtqcf5fbbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取吃饭5翻倍jdtqcf5fbbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqcf5fbbodyVal, "jdtqcf5fbbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取吃饭5翻倍jdtqcf5fbbodyVal✅: 成功,jdtqcf5fbbodyVal: ${jdtqcf5fbbodyVal}`
                );
                $.msg($.name + $.idx, `获取吃饭5翻倍jdtqcf5fbbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取竞猜页
    if (CK == 38 && $request && $request.url.indexOf("event") >= 0 && $request.body.indexOf("%3D%3D") >= 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2130") >= 0) {
        const jdtqjcybodyVal = $request.body;
        if (jdtqjcybodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqjcybody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqjcybodyVal, "jdtqjcybody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取竞猜页jdtqjcybodyVal✅: 成功,jdtqjcybodyVal: ${jdtqjcybodyVal}`
                        );
                        $.msg($.name + $.idx, `获取竞猜页jdtqjcybodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqjcybodyVal, "jdtqjcybody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取竞猜页jdtqjcybodyVal✅: 成功,jdtqjcybodyVal: ${jdtqjcybodyVal}`
                );
                $.msg($.name + $.idx, `获取竞猜页jdtqjcybodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取竞猜a
    if (CK == 39 && $request.url.indexOf("event") >= 0 && $request && $request.body.indexOf("%3D") >= 0 && $request.body.indexOf("%3D%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2180") >= 0) {
        const jdtqjcabodyVal = $request.body;
        if (jdtqjcabodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqjcabody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqjcabodyVal, "jdtqjcabody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取竞猜ajdtqjcabodyVal✅: 成功,jdtqjcabodyVal: ${jdtqjcabodyVal}`
                        );
                        $.msg($.name + $.idx, `获取竞猜ajdtqjcabodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqjcabodyVal, "jdtqjcabody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取竞猜ajdtqjcabodyVal✅: 成功,jdtqjcabodyVal: ${jdtqjcabodyVal}`
                );
                $.msg($.name + $.idx, `获取竞猜ajdtqjcabodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取竞猜b
    if (CK == 40 && $request.url.indexOf("event") >= 0 && $request.url.indexOf("event") >= 0 && $request && $request.body.indexOf("%3D") >= 0 && $request.body.indexOf("%3D%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2180") >= 0) {
        const jdtqjcbbodyVal = $request.body;
        if (jdtqjcbbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqjcbbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqjcbbodyVal, "jdtqjcbbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取竞猜bjdtqjcbbodyVal✅: 成功,jdtqjcbbodyVal: ${jdtqjcbbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取竞猜bjdtqjcbbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqjcbbodyVal, "jdtqjcbbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取竞猜bjdtqjcbbodyVal✅: 成功,jdtqjcbbodyVal: ${jdtqjcbbodyVal}`
                );
                $.msg($.name + $.idx, `获取竞猜bjdtqjcbbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

    //获取竞猜领取
    if (CK == 41 && $request && $request.url.indexOf("event") >= 0 && $request.body.indexOf("%3D") < 0 && $request.body.indexOf("encryptv2=") >= 0 && JSON.stringify($request.headers).indexOf("2166") >= 0) {
        const jdtqjclqbodyVal = $request.body;
        if (jdtqjclqbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('jdtqjclqbody' + $.idx);
                    if (bodys) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(jdtqjclqbodyVal, "jdtqjclqbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取竞猜领取jdtqjclqbodyVal✅: 成功,jdtqjclqbodyVal: ${jdtqjclqbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取竞猜领取jdtqjclqbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(jdtqjclqbodyVal, "jdtqjclqbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取竞猜领取jdtqjclqbodyVal✅: 成功,jdtqjclqbodyVal: ${jdtqjclqbodyVal}`
                );
                $.msg($.name + $.idx, `获取竞猜领取jdtqjclqbodyVal: 成功🎉`, ``);
                $.done();
            }
        }
    }

}
console.log(
    `================== 脚本执行 - 北京时间(UTC+8)：${new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
  ).toLocaleString()} =====================\n`
);
console.log(
    `============ 共 ${jdtquserbodyArr.length} 个${$.name}账号=============\n`
);
//时间
nowTimes = new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
);
//今天
Y = nowTimes.getFullYear() + '-';
M = (nowTimes.getMonth() + 1 < 10 ? '0' + (nowTimes.getMonth() + 1) : nowTimes.getMonth() + 1) + '-';
D = (nowTimes.getDate() < 10 ? '0' + (nowTimes.getDate()) : nowTimes.getDate());
ddtime = Y + M + D;
console.log(ddtime)
//今天0点时间戳时间戳
function daytime(inputTime) {
    if ($.isNode()) {
        DAYTIME =
            new Date(new Date().toLocaleDateString()).getTime() - 8 * 60 * 60 * 1000;
    } else DAYTIME = new Date(new Date().toLocaleDateString()).getTime();
    return DAYTIME;
};
//时间戳格式化日期
function time(inputTime) {
    if ($.isNode()) {
        var date = new Date(inputTime + 8 * 60 * 60 * 1000);
    } else var date = new Date(inputTime);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
};
//日期格式化时间戳
function timecs() {
    if ($.isNode()) {
        var date = new Date(newtime).getTime() - 8 * 60 * 60 * 1000
    } else var date = new Date(newtime).getTime()
    return date;
};
//随机udid 大写
function udid() {
    var s = [];
    var hexDigits = "0123456789ABCDEF";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}
//随机udid 小写
function udid2() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
//编码
function encodeUnicode(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + res.join("\\u");
}
//解码
function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return unescape(str);
}
//随机延迟
function RT(X, Y) {
    do rt = Math.floor(Math.random() * Y);
    while (rt < X)
    return rt;
}
let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
    GetCookie()
    $.done();
} else {
    !(async () => {
        await all();
        await msgShow();
    })()
    .catch((e) => {
            $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
        })
        .finally(() => {
            $.done();
        })
}
async function all() {
    if (!jdtquserbodyArr || jdtquserbodyArr == '') {
        $.msg(
            $.name,
            '提示：⚠️请>>点击前往获取cookie http://jdtq.sdms.mobi/1D6BcClY\n',
            'http://jdtq.sdms.mobi/1D6BcClY', {
                "open-url": "http://jdtq.sdms.mobi/1D6BcClY"
            }
        );
        return;
    } else {
        for (let i = 0; i < jdtquserbodyArr.length; i++) {

            jdtquserbodyVal = jdtquserbodyArr[i];

            jdtqcoinbodyVal = jdtqcoinbodyArr[i];

            jdtqqpbodyVal = jdtqqpbodyArr[i];

            jdtqqp1bodyVal = jdtqqp1bodyArr[i];

            jdtqqp1fbbodyVal = jdtqqp1fbbodyArr[i];

            jdtqqp2bodyVal = jdtqqp2bodyArr[i];

            jdtqqp2fbbodyVal = jdtqqp2fbbodyArr[i];

            jdtqqp3bodyVal = jdtqqp3bodyArr[i];

            jdtqqp3fbbodyVal = jdtqqp3fbbodyArr[i];

            jdtqqp4bodyVal = jdtqqp4bodyArr[i];

            jdtqcjybodyVal = jdtqcjybodyArr[i];

            jdtqcjbodyVal = jdtqcjbodyArr[i];

            jdtqcjcsbodyVal = jdtqcjcsbodyArr[i];

            jdtqrwbodyVal = jdtqrwbodyArr[i];

            jdtqspbodyVal = jdtqspbodyArr[i];

            jdtqspwcbodyVal = jdtqspwcbodyArr[i];

            jdtqspwcfbbodyVal = jdtqspwcfbbodyArr[i];

            jdtqqdbodyVal = jdtqqdbodyArr[i];

            jdtqqdfbbodyVal = jdtqqdfbbodyArr[i];

            jdtqqdwcbodyVal = jdtqqdwcbodyArr[i];

            jdtqqdwcfbbodyVal = jdtqqdwcfbbodyArr[i];

            jdtqtqbodyVal = jdtqtqbodyArr[i];

            jdtqtqwcbodyVal = jdtqtqwcbodyArr[i];

            jdtqtqwcfbbodyVal = jdtqtqwcfbbodyArr[i];

            jdtqxfwcbodyVal = jdtqxfwcbodyArr[i];

            jdtqxfwcfbbodyVal = jdtqxfwcfbbodyArr[i];

            jdtqcfybodyVal = jdtqcfybodyArr[i];

            jdtqcf1bodyVal = jdtqcf1bodyArr[i];

            jdtqcf1fbbodyVal = jdtqcf1fbbodyArr[i];

            jdtqcf2bodyVal = jdtqcf2bodyArr[i];

            jdtqcf2fbbodyVal = jdtqcf2fbbodyArr[i];

            jdtqcf3bodyVal = jdtqcf3bodyArr[i];

            jdtqcf3fbbodyVal = jdtqcf3fbbodyArr[i];

            jdtqcf4bodyVal = jdtqcf4bodyArr[i];

            jdtqcf4fbbodyVal = jdtqcf4fbbodyArr[i];

            jdtqcf5bodyVal = jdtqcf5bodyArr[i];

            jdtqcf5fbbodyVal = jdtqcf5fbbodyArr[i];

            jdtqjcybodyVal = jdtqjcybodyArr[i];

            jdtqjcabodyVal = jdtqjcabodyArr[i];

            jdtqjcbbodyVal = jdtqjcbbodyArr[i];

            jdtqjclqbodyVal = jdtqjclqbodyArr[i];

            $.index = i + 1;
            O = (`${$.name + $.index}🔔`);
            $.isLogin = true;
            if (jdtquserbodyVal && jdtquserbodyVal != '') {
                console.log(`-----------------\n\n🔔开始运行【${$.name + $.index}】`)
                jdtqurl = `https://zt.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "zt.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtquserbodyVal
                K = `用户名🚩`;
                await task()
                if (!$.isLogin) {
                    $.msg(O, time(Number(Date.now())) + `⚠️COOKIE失效,\n请>>点击前往获取http://jdtq.sdms.mobi/1D6BcClY`, {
                        "open-url": "http://jdtq.sdms.mobi/1D6BcClY"
                    });
                    if ($.isNode()) {
                        await notify.sendNotify(O, time(Number(Date.now())) + `⚠️COOKIE失效,\n请>>点击前往获取http://jdtq.sdms.mobi/1D6BcClY`);
                    }
                    continue
                }
            }

            if (jdtqcoinbodyVal && jdtqcoinbodyVal != ``) {
                jdtqurl = `https://zt.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "zt.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqcoinbodyVal
                K = `账户信息🚩`;
                await task()
            }

            if (jdtqqpbodyVal && jdtqqpbodyVal != ``) {
                jdtqurl = `https://zt.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "zt.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqqpbodyVal
                K = `首页气泡🚩`;
                await task()
            }

            if (jdtqqp1bodyVal && jdtqqp1bodyVal != `` ) {
                if ($.qpinfo1.usedextratimes / 10 > $.qpinfo1.finishtimes && $.qpinfo1.resttime == 0 && $.qpinfo1.missionstatus == 0) {

                    jdtqurl = `https://zt.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "zt.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqqp1bodyVal
                    K = `领取气泡1🚩`;
                    await task();

                }


                if (jdtqqp1fbbodyVal && jdtqqp1fbbodyVal != `` && $.qpinfo1.usedextratimes < $.qpinfo1.extratimes) {
                    jdtqurl = `https://zt.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "zt.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqqp1fbbodyVal
                    K = `气泡1翻倍🚩`;

                    for (let i = 0; i < 10; i++) {
                        DD = RT(20000, 30000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task()

                    }

                }


            }





            if (jdtqqp2bodyVal && jdtqqp2bodyVal != `` ) {
                if ($.qpinfo2.usedextratimes / 10 > $.qpinfo2.finishtimes && $.qpinfo2.resttime == 0 && $.qpinfo2.missionstatus == 0) {

                    jdtqurl = `https://zt.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "zt.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqqp2bodyVal
                    K = `领取气泡2🚩`;
                    await task();

                }


                if (jdtqqp2fbbodyVal && jdtqqp2fbbodyVal != `` && $.qpinfo2.usedextratimes < $.qpinfo2.extratimes) {
                    jdtqurl = `https://zt.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "zt.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqqp2fbbodyVal
                    K = `气泡2翻倍🚩`;

                    for (let i = 0; i < 10; i++) {
                        DD = RT(20000, 30000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task()

                    }

                }


            }



            if (jdtqqp3bodyVal && jdtqqp3bodyVal != ``) {
                if ($.qpinfo3.usedextratimes / 10 > $.qpinfo3.finishtimes && $.qpinfo3.resttime == 0 && $.qpinfo3.missionstatus == 0) {

                    jdtqurl = `https://zt.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "zt.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqqp3bodyVal
                    K = `领取气泡3🚩`;
                    await task();

                }


                if (jdtqqp3fbbodyVal && jdtqqp3fbbodyVal != `` && $.qpinfo3.usedextratimes < $.qpinfo3.extratimes) {
                    jdtqurl = `https://zt.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "zt.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqqp3fbbodyVal
                    K = `气泡3翻倍🚩`;

                    for (let i = 0; i < 10; i++) {
                        DD = RT(20000, 30000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task()

                    }

                }


            }







            if (jdtqqp4bodyVal && jdtqqp4bodyVal != `` && $.qpinfo4.resttime == 0 && $.qpinfo4.missionstatus == 0) {
                jdtqurl = `https://zt.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "zt.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqqp4bodyVal
                K = `领取气泡4🚩`;
                await task()
            }

            if (jdtqcjybodyVal && jdtqcjybodyVal != ``) {
                jdtqurl = `https://api.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "api.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqcjybodyVal
                K = `抽奖页🚩`;
                await task()
            }

            if (jdtqcjbodyVal && jdtqcjbodyVal != `` && $.cjy.data.data.numbers > 0) {
                jdtqurl = `https://api.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "api.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqcjbodyVal
                K = `抽奖🚩`;
                DD = RT(2000, 3000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task()

            }

            if (jdtqcjcsbodyVal && jdtqcjcsbodyVal != `` &&
                $.cjy.data.data.numbers == 0 &&
                $.cjy.data.data.advbonus == 0) {
                jdtqurl = `https://api.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "api.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqcjcsbodyVal
                K = `抽奖次数🚩`;
                DD = RT(20000, 30000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task()
            }

            if (jdtqrwbodyVal && jdtqrwbodyVal != ``) {
                jdtqurl = `https://zt.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "zt.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqrwbodyVal
                K = `任务🚩`;
                await task()
            }

            if (jdtqspbodyVal && jdtqspbodyVal != `` && $.sprwinfo.missionstatus == 0) {
                jdtqurl = `https://zt.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "zt.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqspbodyVal
                K = `视频🚩`;
                DD = RT(20000, 30000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task()

            }

            if (jdtqspwcbodyVal && jdtqspwcbodyVal != `` && $.sprwinfo.missionstatus == 1) {
                jdtqurl = `https://zt.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "zt.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqspwcbodyVal
                K = `视频完成🚩`;
                DD = RT(2000, 3000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task()


                if (jdtqspwcfbbodyVal && jdtqspwcfbbodyVal != ``) {
                    jdtqurl = `https://zt.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "zt.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqspwcfbbodyVal
                    K = `视频完成翻倍🚩`;
                    DD = RT(20000, 30000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }
            }



            if (jdtqqdbodyVal && jdtqqdbodyVal != `` && $.tqrwinfo.missionstatus == 0) {
                jdtqurl = `https://zt.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "zt.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqqdbodyVal
                K = `签到🚩`;
                DD = RT(2000, 3000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task()


                if (jdtqqdfbbodyVal && jdtqqdfbbodyVal != ``) {
                    jdtqurl = `https://zt.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "zt.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqqdfbbodyVal
                    K = `签到翻倍🚩`;
                    DD = RT(20000, 30000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }
            }



            if (jdtqqdwcbodyVal && jdtqqdwcbodyVal != `` && $.qdrwinfo.missionstatus == 1) {
                jdtqurl = `https://zt.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "zt.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqqdwcbodyVal
                K = `签到完成🚩`;
                DD = RT(2000, 3000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task()


                if (jdtqqdwcfbbodyVal && jdtqqdwcfbbodyVal != ``) {
                    jdtqurl = `https://zt.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "zt.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqqdwcfbbodyVal
                    K = `签到完成翻倍🚩`;
                    DD = RT(20000, 30000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }
            }



            if (jdtqtqbodyVal && jdtqtqbodyVal != `` && $.tqrwinfo.missionstatus == 0) {
                jdtqurl = `https://zt.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "zt.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqtqbodyVal
                K = `天气🚩`;
                DD = RT(2000, 3000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task()
            }

            if (jdtqtqwcbodyVal && jdtqtqwcbodyVal != `` && $.tqrwinfo.missionstatus == 1) {
                jdtqurl = `https://zt.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "zt.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqtqwcbodyVal
                K = `天气完成🚩`;
                DD = RT(2000, 3000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task()


                if (jdtqtqwcfbbodyVal && jdtqtqwcfbbodyVal != ``) {
                    jdtqurl = `https://zt.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "zt.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqtqwcfbbodyVal
                    K = `天气完成翻倍🚩`;
                    DD = RT(20000, 30000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }
            }



            if (jdtqxfwcbodyVal && jdtqxfwcbodyVal != `` && $.xfrwinfo.missionstatus == 1) {
                jdtqurl = `https://zt.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "zt.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqxfwcbodyVal
                K = `悬浮完成🚩`;
                DD = RT(2000, 3000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task()


                if (jdtqxfwcfbbodyVal && jdtqxfwcfbbodyVal != ``) {
                    jdtqurl = `https://zt.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "zt.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqxfwcfbbodyVal
                    K = `悬浮完成翻倍🚩`;
                    DD = RT(20000, 30000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }
            }



            if (jdtqcfybodyVal && jdtqcfybodyVal != ``) {
                jdtqurl = `https://event.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "event.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqcfybodyVal
                K = `吃饭页🚩`;
                await task()
            }

            if (jdtqcf1bodyVal && jdtqcf1bodyVal != `` && $.cfy && $.cfy.data.data.signin_breakfast == 0 && $.cf1info.status == 1 && nowTimes.getHours() >= 8 && nowTimes.getHours() <= 10) {
                jdtqurl = `https://event.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "event.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqcf1bodyVal
                K = `吃饭1🚩`;
                DD = RT(2000, 3000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task()


                if (jdtqcf1fbbodyVal && jdtqcf1fbbodyVal != ``) {
                    jdtqurl = `https://event.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "event.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqcf1fbbodyVal
                    K = `吃饭1翻倍🚩`;
                    DD = RT(20000, 30000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }
            }



            if (jdtqcf2bodyVal && jdtqcf2bodyVal != `` && $.cfy && $.cfy.data.data.signin_lunch == 0 && $.cf2info.status == 1 && nowTimes.getHours() >= 11 && nowTimes.getHours() < 14) {
                jdtqurl = `https://event.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "event.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqcf2bodyVal
                K = `吃饭2🚩`;
                DD = RT(2000, 3000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task()


                if (jdtqcf2fbbodyVal && jdtqcf2fbbodyVal != ``) {
                    jdtqurl = `https://event.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "event.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqcf2fbbodyVal
                    K = `吃饭2翻倍🚩`;
                    DD = RT(20000, 30000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }
            }



            if (jdtqcf3bodyVal && jdtqcf3bodyVal != `` && $.cfy && $.cfy.data.data.signin_tea == 0 && $.cf3info.status == 1 && nowTimes.getHours() >= 15 && nowTimes.getHours() < 16) {
                jdtqurl = `https://event.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "event.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqcf3bodyVal
                K = `吃饭3🚩`;
                DD = RT(2000, 3000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task()


                if (jdtqcf3fbbodyVal && jdtqcf3fbbodyVal != ``) {
                    jdtqurl = `https://event.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "event.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqcf3fbbodyVal
                    K = `吃饭3翻倍🚩`;
                    DD = RT(20000, 30000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }
            }

            if (jdtqcf4bodyVal && jdtqcf4bodyVal != `` && $.cfy && $.cfy.data.data.signin_dinner == 0 && $.cf4info.status == 1 && nowTimes.getHours() >= 17 && nowTimes.getHours() < 20) {
                jdtqurl = `https://event.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "event.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqcf4bodyVal
                K = `吃饭4🚩`;
                DD = RT(2000, 3000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task()


                if (jdtqcf4fbbodyVal && jdtqcf4fbbodyVal != ``) {
                    jdtqurl = `https://event.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "event.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqcf4fbbodyVal
                    K = `吃饭4翻倍🚩`;
                    DD = RT(20000, 30000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }
            }


            if (jdtqcf5bodyVal && jdtqcf5bodyVal != `` && $.cfy && $.cfy.data.data.signin_night == 0 && $.cf5info.status == 1 && nowTimes.getHours() >= 21 && nowTimes.getHours() <= 23) {
                jdtqurl = `https://event.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "event.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqcf5bodyVal
                K = `吃饭5🚩`;
                DD = RT(2000, 3000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task()


                if (jdtqcf5fbbodyVal && jdtqcf5fbbodyVal != ``) {
                    jdtqurl = `https://event.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "event.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqcf5fbbodyVal
                    K = `吃饭5翻倍🚩`;
                    DD = RT(20000, 30000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }
            }


            if (jdtqjcybodyVal && jdtqjcybodyVal != ``) {
                jdtqurl = `https://event.jiandantianqi.com/`
                jdtqheader = {
                    "Host": "event.jiandantianqi.com",
                    "content-type": "application/x-www-form-urlencoded",
                };
                jdtqbody = jdtqjcybodyVal
                K = `竞猜页🚩`;
                await task()

                if (jdtqjcabodyVal && jdtqjcabodyVal != `` && !$.jcy.data.data.user.now.selection && ($.jcyinfo.select_a_numbers - $.jcyinfo.select_b_numbers) >= 3000) {
                    jdtqurl = `https://event.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "event.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqjcabodyVal
                    K = `竞猜a🚩`;
                    DD = RT(20000, 30000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }

                if (jdtqjcbbodyVal && jdtqjcbbodyVal != `` && !$.jcy.data.data.user.now.selection && $.jcyinfo && ($.jcyinfo.select_b_numbers - $.jcyinfo.select_a_numbers) >= 3000) {
                    jdtqurl = `https://event.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "event.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqjcbbodyVal
                    K = `竞猜b🚩`;
                    DD = RT(20000, 30000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }

                if (jdtqjclqbodyVal && jdtqjclqbodyVal != `` && $.qdrwinfo.missionstatus == 0 && $.jcy && !$.jcy.data.data.user.now.selection) {
                    jdtqurl = `https://event.jiandantianqi.com/`
                    jdtqheader = {
                        "Host": "event.jiandantianqi.com",
                        "content-type": "application/x-www-form-urlencoded",
                    };
                    jdtqbody = jdtqjclqbodyVal
                    K = `竞猜领取🚩`;
                    DD = RT(2000, 3000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }
            }

            console.log(`${GXRZ}\n`);
            $.message += `${GXRZ}\n`
        }
    }
}
//通知
function msgShow() {
    return new Promise(async resolve => {
        if (notifyInterval != 1) {
            console.log($.name + '\n' + $.message);
        }
        if (notifyInterval == 1) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 2 && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 3 && (nowTimes.getHours() === 6 || nowTimes.getHours() === 12 || nowTimes.getHours() === 18 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyttt == 1 && $.isNode() && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10))
            await notify.sendNotify($.name, $.message);
        resolve()
    })
}
//运行模块
function task() {
    return new Promise(async resolve => {
        let url = {
            url: `${jdtqurl}`,
            headers: jdtqheader,
            body: `${jdtqbody}`,
        }
        $.post(url, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网络重试`)
                } else {
                    if (data) {
                        if (K == `用户名🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.user = JSON.parse(data);
                            if ($.user.data.code == 0) {
                                $.userinfo = $.user.data.data[0].info.find(item => item.usertype == 2);
                                console.log(`\n${O}\n========== ${$.userinfo.nickname} ==========\n注册时间：${time($.userinfo.createtime*1000)}\n`)
                                $.message += `\n${O}\n========== 【${$.userinfo.nickname}】 ==========\n【注册时间】：${time($.userinfo.createtime*1000)}\n`;
                            } else {
                                $.isLogin = false; //cookie过期
                                return
                            }
                        }

                        if (K == `账户信息🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.coin = JSON.parse(data);
                            if ($.coin.data.code == 0) {
                                console.log(`账户信息：今日${$.coin.data.data.today}金币,剩余${$.coin.data.data.balance}金币,累计${$.coin.data.data.all}金币,\n`)
                                $.message += `【账户信息】：今日${$.coin.data.data.today}金币,剩余${$.coin.data.data.balance}金币,累计${$.coin.data.data.all}金币,\n`;
                            }
                        }

                        if (K == `首页气泡🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.qp = JSON.parse(data);
                            if ($.qp.data.code == 0) {

                                $.qpinfo1 = $.qp.data.data.data.find(item => item.appmissionid == 200000407);
                                $.qpinfo2 = $.qp.data.data.data.find(item => item.appmissionid == 200000408);
                                $.qpinfo3 = $.qp.data.data.data.find(item => item.appmissionid == 200000409);
                                $.qpinfo4 = $.qp.data.data.data.find(item => item.appmissionid == 200000410);


                                console.log(`${$.qpinfo1.missionname}冷却还需${$.qpinfo1.resttime/1000}秒，已领取${$.qpinfo1.finishtimes}次，已翻倍${$.qpinfo1.usedextratimes}次\n${$.qpinfo2.missionname}冷却还需${$.qpinfo2.resttime/1000}秒，已领取${$.qpinfo2.finishtimes}次，已翻倍${$.qpinfo2.usedextratimes}次\n${$.qpinfo3.missionname}冷却还需${$.qpinfo3.resttime/1000}秒，已领取${$.qpinfo3.finishtimes}次，已翻倍${$.qpinfo3.usedextratimes}次\n${$.qpinfo4.missionname}冷却还需${$.qpinfo4.resttime/1000}秒，已领取${$.qpinfo4.finishtimes}次\n`)
                                $.message += `【${$.qpinfo1.missionname}】：冷却还需${$.qpinfo1.resttime/1000}秒，已领取${$.qpinfo1.finishtimes}次，已翻倍${$.qpinfo1.usedextratimes}次\n【${$.qpinfo2.missionname}】冷却还需${$.qpinfo2.resttime/1000}秒，已领取${$.qpinfo2.finishtimes}次，已翻倍${$.qpinfo2.usedextratimes}次\n【${$.qpinfo3.missionname}】冷却还需${$.qpinfo3.resttime/1000}秒，已领取${$.qpinfo3.finishtimes}次，已翻倍${$.qpinfo3.usedextratimes}次\n【${$.qpinfo4.missionname}】冷却还需${$.qpinfo4.resttime/1000}秒，已领取${$.qpinfo4.finishtimes}次\n`;

                            }
                        }

                        if (K == `领取气泡1🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.qp1 = JSON.parse(data);
                            if ($.qp1.data.code == 0) {
                                console.log(`领取气泡1：第${$.qp1.data.data.data.finishtimes}次,${$.qp1.data.data.data.rewardnum}金币\n`);
                                $.message += `【领取气泡1】：第${$.qp1.data.data.data.finishtimes}次,${$.qp1.data.data.data.rewardnum}金币\n`;

                            }
                        }

                        if (K == `气泡1翻倍🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.qp1fb = JSON.parse(data);
                            if ($.qp1fb.data.code == 0) {
                                console.log(`气泡1翻倍：第${$.qp1fb.data.data.data.usedextratimes}次,${$.qp1fb.data.data.data.rewardnum}金币\n`);
                                if ($.qp1fb.data.data.data.usedextratimes == $.qp1fb.data.data.data.finishtimes * 10) {
                                    $.message += `【气泡1翻倍】：本次运行10次，共获得${$.qp1fb.data.data.data.rewardnum*10}金币，今日已翻倍${$.qp1fb.data.data.data.usedextratimes}次,\n`;
                                }
                            }
                        }

                        if (K == `领取气泡2🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.qp2 = JSON.parse(data);
                            if ($.qp2.data.code == 0) {
                                console.log(`领取气泡2：第${$.qp2.data.data.data.finishtimes}次,${$.qp2.data.data.data.rewardnum}金币\n`);
                                $.message += `【领取气泡2】：第${$.qp2.data.data.data.finishtimes}次,${$.qp2.data.data.data.rewardnum}金币\n`;
                            }
                        }

                        if (K == `气泡2翻倍🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.qp2fb = JSON.parse(data);
                            if ($.qp2fb.data.code == 0) {
                                console.log(`气泡2翻倍：第${$.qp2fb.data.data.data.usedextratimes}次,${$.qp2fb.data.data.data.rewardnum}金币\n`);
                                if ($.qp2fb.data.data.data.usedextratimes == $.qp2fb.data.data.data.finishtimes * 10) {
                                    $.message += `【气泡2翻倍】：本次运行10次，共获得${$.qp2fb.data.data.data.rewardnum*10}金币，今日已翻倍${$.qp2fb.data.data.data.usedextratimes}次,\n`;
                                }
                            }
                        }

                        if (K == `领取气泡3🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.qp3 = JSON.parse(data);
                            if ($.qp3.data.code == 0) {
                                console.log(`领取气泡3：第${$.qp3.data.data.data.finishtimes}次,${$.qp3.data.data.data.rewardnum}金币\n`);
                                $.message += `【领取气泡3】：第${$.qp3.data.data.data.finishtimes}次,${$.qp3.data.data.data.rewardnum}金币\n`;
                            }
                        }

                        if (K == `气泡3翻倍🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.qp3fb = JSON.parse(data);
                            if ($.qp3fb.data.code == 0) {
                                console.log(`气泡3翻倍：第${$.qp3fb.data.data.data.usedextratimes}次,${$.qp3fb.data.data.data.rewardnum}金币\n`);
                                if ($.qp3fb.data.data.data.usedextratimes == $.qp3fb.data.data.data.finishtimes * 10) {
                                    $.message += `【气泡3翻倍】：本次运行10次，共获得${$.qp3fb.data.data.data.rewardnum*10}金币，今日已翻倍${$.qp3fb.data.data.data.usedextratimes}次,\n`;
                                }
                            }
                        }

                        if (K == `领取气泡4🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.qp4 = JSON.parse(data);
                            if ($.qp4.data.code == 0) {
                                console.log(`领取气泡4：第${$.qp4.data.data.data.finishtimes}次,${$.qp4.data.data.data.rewardnum}金币\n`);
                                $.message += `【领取气泡4】：第${$.qp4.data.data.data.finishtimes}次,${$.qp4.data.data.data.rewardnum}金币\n`;
                            }
                        }

                        if (K == `抽奖页🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cjy = JSON.parse(data);

                            if ($.cjy.data.code == 0) {
                                console.log(`抽奖页面：当前场次${$.cjy.data.data.term},剩余抽奖${$.cjy.data.data.numbers}次,累计抽奖${$.cjy.data.data.treasure.total_numbers}次\n`);
                                $.message += `【抽奖页面】：当前场次${$.cjy.data.data.term},剩余抽奖${$.cjy.data.data.numbers}次,累计抽奖${$.cjy.data.data.treasure.total_numbers}次\n`;
                            } else {
                                console.log(`抽奖页面：${$.cjy.msg}\n`);
                                $.message += `【抽奖页面】：${$.cjy.msg}\n`;

                            }

                            if ($.cjy.data.data.status != 0) {
                                console.log(`抽奖页面：今日抽奖已完成\n`);
                                $.message += `【抽奖页面】：今日抽奖已完成\n`;

                            }


                        }

                        if (K == `抽奖🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cj = JSON.parse(data);
                            if ($.cj.data.code == 0) {
                                console.log(`福利抽奖：获得${$.cj.data.data.lotto.rewards}金币,剩余${$.cj.data.data.info.numbers}次\n`);
                                $.message += `【福利抽奖】：获得${$.cj.data.data.lotto.rewards}金币,剩余${$.cj.data.data.info.numbers}次\n`;
                            }
                        }

                        if (K == `抽奖次数🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cjcs = JSON.parse(data);
                            if ($.cjcs.data.code == 0) {
                                console.log(`抽奖次数：获得${$.cjcs.data.data.bounus}次抽奖\n`);
                                $.message += `【抽奖次数】：获得${$.cjcs.data.data.bounus}次抽奖\n`;
                            }
                        }

                        if (K == `任务🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.rw = JSON.parse(data);
                            if ($.rw.data.code == 0) {

                                $.sprwinfo = $.rw.data.data.data.find(item => item.appmissionid == 200000402);
                                $.qdrwinfo = $.rw.data.data.data.find(item => item.appmissionid == 200000429);
                                $.xfrwinfo = $.rw.data.data.data.find(item => item.appmissionid == 200000430);
                                $.tqrwinfo = $.rw.data.data.data.find(item => item.appmissionid == 200000643);


                                if ($.sprwinfo.missionstatus == 0) {
                                    console.log(`${$.sprwinfo.missionname}：${$.sprwinfo.rewardnum}金币\n`);
                                    $.message += `【${$.sprwinfo.missionname}】：${$.sprwinfo.rewardnum}金币\n`;
                                } else {
                                    console.log(`${$.sprwinfo.missionname}：${$.sprwinfo.rewardnum}金币,已完成\n`);
                                    $.message += `【${$.sprwinfo.missionname}】：${$.sprwinfo.rewardnum}金币,已完成\n`;
                                }



                                if ($.qdrwinfo.missionstatus == 0) {
                                    console.log(`${$.qdrwinfo.missionname}：${$.qdrwinfo.rewardnum}金币\n`);
                                    $.message += `【${$.qdrwinfo.missionname}】：${$.qdrwinfo.rewardnum}金币\n`;
                                } else {
                                    console.log(`${$.qdrwinfo.missionname}：${$.qdrwinfo.rewardnum}金币,已完成\n`);
                                    $.message += `【${$.qdrwinfo.missionname}】：${$.qdrwinfo.rewardnum}金币,已完成\n`;
                                }


                                if ($.xfrwinfo.missionstatus == 0) {
                                    console.log(`${$.xfrwinfo.missionname}：${$.xfrwinfo.rewardnum}金币\n`);
                                    $.message += `【${$.xfrwinfo.missionname}】：${$.xfrwinfo.rewardnum}金币\n`;
                                } else {
                                    console.log(`${$.xfrwinfo.missionname}：${$.xfrwinfo.rewardnum}金币,已完成\n`);
                                    $.message += `【${$.xfrwinfo.missionname}】：${$.xfrwinfo.rewardnum}金币,已完成\n`;
                                }




                                if ($.tqrwinfo.missionstatus == 0) {
                                    console.log(`${$.tqrwinfo.missionname}：${$.tqrwinfo.rewardnum}金币\n`);
                                    $.message += `【${$.tqrwinfo.missionname}】：${$.tqrwinfo.rewardnum}金币\n`;
                                } else {
                                    console.log(`${$.tqrwinfo.missionname}：${$.tqrwinfo.rewardnum}金币,已完成\n`);
                                    $.message += `【${$.tqrwinfo.missionname}】：${$.tqrwinfo.rewardnum}金币,已完成\n`;
                                }

                            }
                        }

                        if (K == `视频🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.sp = JSON.parse(data);
                            if ($.sp.data.code == 0) {
                                console.log(`观看视频：第${$.sp.data.data.data.finishtimes}/${$.sp.data.data.data.maxtimes}次,${$.sp.data.data.data.rewardnum}金币\n`);
                                $.message += `【观看视频】：第${$.sp.data.data.data.finishtimes}/${$.sp.data.data.data.maxtimes}次,${$.sp.data.data.data.rewardnum}金币\n`;
                            }
                        }

                        if (K == `视频完成🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.spwc = JSON.parse(data);
                            if ($.spwc.data.code == 0) {
                                console.log(`视频完成：领取${$.spwc.data.data.data.rewardnum}金币\n`)
                                $.message += `【视频完成】：领取${$.spwc.data.data.data.rewardnum}金币\n`;
                            }
                        }

                        if (K == `视频完成翻倍🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.spwcfb = JSON.parse(data);
                            if ($.spwcfb.data.code == 0) {
                                console.log(`视频完成翻倍：领取${$.spwcfb.data.data.data.rewardnum}金币\n`)
                                $.message += `【视频完成翻倍】：领取${$.spwcfb.data.data.data.rewardnum}金币\n`;
                            }
                        }

                        if (K == `签到🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.qd = JSON.parse(data);
                            if ($.qd.data.code == 0) {
                                console.log(`签到：第${$.qd.data.data.data.days}天，领取${$.qd.data.data.data.rewardnum}金币\n`)
                                $.message += `【签到】第${$.qd.data.data.data.days}天，领取${$.qd.data.data.data.rewardnum}金币\n`;
                            }
                        }

                        if (K == `签到翻倍🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.qdfb = JSON.parse(data);
                            if ($.qdfb.data.code == 0) {
                                console.log(`签到翻倍：第${$.qdfb.data.data.data.days}天，领取${$.qdfb.data.data.data.rewardnum}金币\n`)
                                $.message += `【签到翻倍】第${$.qdfb.data.data.data.days}天，领取${$.qdfb.data.data.data.rewardnum}金币\n`;
                            }
                        }

                        if (K == `签到完成🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.qdwc = JSON.parse(data);
                            if ($.qdwc.data.code == 0) {
                                console.log(`签到完成：领取${$.qdwc.data.data.data.rewardnum}金币\n`)
                                $.message += `【签到完成】：领取${$.qdwc.data.data.data.rewardnum}金币\n`;
                            }
                        }

                        if (K == `签到完成翻倍🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.qdwcfb = JSON.parse(data);
                            if ($.qdwcfb.data.code == 0) {
                                console.log(`签到完成翻倍：领取${$.qdwcfb.data.data.data.rewardnum}金币\n`)
                                $.message += `【签到完成翻倍】：领取${$.qdwcfb.data.data.data.rewardnum}金币\n`;
                            }
                        }

                        if (K == `天气🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.tq = JSON.parse(data);
                            if ($.tq.data.code == 0) {
                                console.log(`天气：已完成\n`)
                                $.message += `【天气】：已完成\n`;
                            }
                        }

                        if (K == `天气完成🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.tqwc = JSON.parse(data);
                            if ($.tqwc.data.code == 0) {
                                console.log(`天气完成：领取${$.tqwc.data.data.data.rewardnum}金币\n`)
                                $.message += `【天气完成】：领取${$.tqwc.data.data.data.rewardnum}金币\n`;
                            }
                        }

                        if (K == `天气完成翻倍🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.tqwcfb = JSON.parse(data);
                            if ($.tqwcfb.data.code == 0) {
                                console.log(`天气完成翻倍：领取${$.tqwcfb.data.data.data.rewardnum}金币\n`)
                                $.message += `【天气完成翻倍】：领取${$.tqwcfb.data.data.data.rewardnum}金币\n`;
                            }
                        }

                        if (K == `悬浮完成🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.xfwc = JSON.parse(data);
                            if ($.xfwc.data.code == 0) {
                                console.log(`悬浮完成：领取${$.xfwc.data.data.data.rewardnum}金币\n`)
                                $.message += `【悬浮完成】：领取${$.xfwc.data.data.data.rewardnum}金币\n`;
                            }
                        }

                        if (K == `悬浮完成翻倍🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.xfwcfb = JSON.parse(data);
                            if ($.xfwcfb.data.code == 0) {
                                console.log(`悬浮完成翻倍：领取${$.xfwcfb.data.data.data.rewardnum}金币\n`)
                                $.message += `【悬浮完成翻倍】：领取${$.xfwcfb.data.data.data.rewardnum}金币\n`;
                            }
                        }

                        if (K == `吃饭页🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cfy = JSON.parse(data);
                            if ($.cfy.data.code == 0) {
                                $.cf1info = $.cfy.data.data.type.find(item => item.type == "breakfast");
                                $.cf2info = $.cfy.data.data.type.find(item => item.type == "lunch");
                                $.cf3info = $.cfy.data.data.type.find(item => item.type == "tea");
                                $.cf4info = $.cfy.data.data.type.find(item => item.type == "dinner");
                                $.cf5info = $.cfy.data.data.type.find(item => item.type == "night");

                                if ($.cfy.data.data.signin_breakfast > 0) {
                                    console.log(`${$.cf1info.type}：${$.cf1info.start_time}-${$.cf1info.end_time},已完成\n`);
                                    $.message += `【${$.cf1info.type}】：${$.cf1info.start_time}-${$.cf1info.end_time},已完成\n`;

                                } else {
                                    console.log(`${$.cf1info.type}：${$.cf1info.start_time}-${$.cf1info.end_time}\n`);
                                    $.message += `【${$.cf1info.type}】：${$.cf1info.start_time}-${$.cf1info.end_time}\n`;
                                }


                                if ($.cfy.data.data.signin_lunch > 0) {
                                    console.log(`${$.cf2info.type}：${$.cf2info.start_time}-${$.cf2info.end_time},已完成\n`);
                                    $.message += `【${$.cf2info.type}】：${$.cf2info.start_time}-${$.cf2info.end_time},已完成\n`;

                                } else {
                                    console.log(`${$.cf2info.type}：${$.cf2info.start_time}-${$.cf2info.end_time}\n`);
                                    $.message += `【${$.cf2info.type}】：${$.cf2info.start_time}-${$.cf2info.end_time}\n`;
                                }


                                if ($.cfy.data.data.signin_tea > 0) {
                                    console.log(`${$.cf3info.type}：${$.cf3info.start_time}-${$.cf3info.end_time},已完成\n`);
                                    $.message += `【${$.cf3info.type}】：${$.cf3info.start_time}-${$.cf3info.end_time},已完成\n`;

                                } else {
                                    console.log(`${$.cf3info.type}：${$.cf3info.start_time}-${$.cf3info.end_time}\n`);
                                    $.message += `【${$.cf3info.type}】：${$.cf3info.start_time}-${$.cf3info.end_time}\n`;
                                }


                                if ($.cfy.data.data.signin_dinner > 0) {
                                    console.log(`${$.cf4info.type}：${$.cf4info.start_time}-${$.cf4info.end_time},已完成\n`);
                                    $.message += `【${$.cf4info.type}】：${$.cf4info.start_time}-${$.cf4info.end_time},已完成\n`;

                                } else {
                                    console.log(`${$.cf4info.type}：${$.cf4info.start_time}-${$.cf4info.end_time}\n`);
                                    $.message += `【${$.cf4info.type}】：${$.cf4info.start_time}-${$.cf4info.end_time}\n`;
                                }


                                if ($.cfy.data.data.signin_night > 0) {
                                    console.log(`${$.cf5info.type}：${$.cf5info.start_time}-${$.cf5info.end_time},已完成\n`);
                                    $.message += `【${$.cf5info.type}】：${$.cf5info.start_time}-${$.cf5info.end_time},已完成\n`;

                                } else {
                                    console.log(`${$.cf5info.type}：${$.cf5info.start_time}-${$.cf5info.end_time}\n`);
                                    $.message += `【${$.cf5info.type}】：${$.cf5info.start_time}-${$.cf5info.end_time}\n`;
                                }
                            }
                        }

                        if (K == `吃饭1🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cf1 = JSON.parse(data);
                            if ($.cf1.data.code == 0) {
                                console.log(`吃饭1：领取${$.cf1info.coin}金币\n`)
                                $.message += `【吃饭1】：领取${$.cf1info.coin}金币\n`;
                            }
                        }

                        if (K == `吃饭1翻倍🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cf1fb = JSON.parse(data);
                            if ($.cf1fb.data.code == 0) {
                                console.log(`吃饭1翻倍：领取${$.cf1info.coin}金币\n`)
                                $.message += `【吃饭1翻倍】：领取${$.cf1info.coin}金币\n`;
                            }
                        }

                        if (K == `吃饭2🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cf2 = JSON.parse(data);
                            if ($.cf2.data.code == 0) {
                                console.log(`吃饭2：领取${$.cf2info.coin}金币\n`)
                                $.message += `【吃饭2】：领取${$.cf2info.coin}金币\n`;
                            }
                        }

                        if (K == `吃饭2翻倍🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cf2fb = JSON.parse(data);
                            if ($.cf2fb.data.code == 0) {
                                console.log(`吃饭2翻倍：领取${$.cf2info.coin}金币\n`)
                                $.message += `【吃饭2翻倍】：领取${$.cf2info.coin}金币\n`;
                            }
                        }

                        if (K == `吃饭3🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cf3 = JSON.parse(data);
                            if ($.cf3.data.code == 0) {
                                console.log(`吃饭3：领取${$.cf3info.coin}金币\n`)
                                $.message += `【吃饭3】：领取${$.cf3info.coin}金币\n`;
                            }
                        }

                        if (K == `吃饭3翻倍🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cf3fb = JSON.parse(data);
                            if ($.cf3fb.data.code == 0) {
                                console.log(`吃饭3翻倍：领取${$.cf3info.coin}金币\n`)
                                $.message += `【吃饭3翻倍】：领取${$.cf3info.coin}金币\n`;;
                            }
                        }

                        if (K == `吃饭4🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cf4 = JSON.parse(data);
                            if ($.cf4.data.code == 0) {
                                console.log(`吃饭4：领取${$.cf4info.coin}金币\n`)
                                $.message += `【吃饭4】：领取${$.cf4info.coin}金币\n`;
                            }
                        }

                        if (K == `吃饭4翻倍🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cf4fb = JSON.parse(data);
                            if ($.cf4fb.data.code == 0) {
                                console.log(`吃饭4翻倍：领取${$.cf4info.coin}金币\n`)
                                $.message += `【吃饭4翻倍】：领取${$.cf4info.coin}金币\n`;
                            }
                        }

                        if (K == `吃饭5🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cf5 = JSON.parse(data);
                            if ($.cf5.data.code == 0) {
                                console.log(`吃饭5：领取${$.cf5info.coin}金币\n`)
                                $.message += `【吃饭5】：领取${$.cf5info.coin}金币\n`;
                            }
                        }

                        if (K == `吃饭5翻倍🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cf5fb = JSON.parse(data);
                            if ($.cf5fb.data.code == 0) {
                                console.log(`吃饭5翻倍：领取${$.cf5info.coin}金币\n`)
                                $.message += `【吃饭5翻倍】：领取${$.cf5info.coin}金币\n`;
                            }
                        }

                        if (K == `竞猜页🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.jcy = JSON.parse(data);

                            $.jcyinfo = $.jcy.data.data.info

                            console.log(`竞猜页：${$.jcyinfo.city}${$.jcyinfo.landmark}——${$.jcyinfo.select_a_title}：${$.jcyinfo.select_a_numbers},${$.jcyinfo.select_b_title}：${$.jcyinfo.select_b_numbers}\n`)
                            $.message += `【竞猜页】：${$.jcyinfo.city}${$.jcyinfo.landmark}——${$.jcyinfo.select_a_title}：${$.jcyinfo.select_a_numbers},${$.jcyinfo.select_b_title}：${$.jcyinfo.select_b_numbers}\n`;

                            if ($.jcy.data.data.user.now.selection) {

                                if ($.jcy.data.data.user.now.selection == "A") {

                                    console.log(`竞猜：已竞猜-${$.jcyinfo.select_a_title}\n`)
                                    $.message += `【竞猜】：已竞猜-${$.jcyinfo.select_a_title}\n`;
                                } else {
                                    console.log(`竞猜：已竞猜-${$.jcyinfo.select_b_title}\n`)
                                    $.message += `【竞猜】：已竞猜-${$.jcyinfo.select_b_title}\n`;

                                }

                            }



                            if (K == `竞猜a🚩`) {
                                if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                                $.jca = JSON.parse(data);
                                if ($.jca.data.code == 0) {
                                    console.log(`竞猜a：成功竞猜-${$.jcyinfo.select_a_title}\n`)
                                    $.message += `【竞猜a】：成功竞猜-${$.jcyinfo.select_a_title}\n`;
                                }
                            }

                            if (K == `竞猜b🚩`) {
                                if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                                $.jcb = JSON.parse(data);
                                if ($.jcb.data.code == 0) {
                                    console.log(`竞猜b：成功竞猜-${$.jcyinfo.select_b_title}\n`)
                                    $.message += `【竞猜b】：成功竞猜-${$.jcyinfo.select_b_title}\n`;
                                }
                            }

                            if (K == `竞猜领取🚩`) {
                                if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                                $.jclq = JSON.parse(data);
                                if ($.jclq.data.code == 0) {
                                    console.log(`竞猜领取：成功领取\n`)
                                    $.message += `【竞猜领取】：成功领取\n`;
                                }
                            }
                        }
                    } else {
                        console.log(`服务器返回数据为空`)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}
//if ($.time('yyyy-MM-dd') === '2023-05-01') {
//    $.msg($.name, '活动已结束', `请禁用或删除脚本`);
//    return
//}

// prettier-ignore
function Env(name, opts) {
    class Http {
        constructor(env) {
            this.env = env
        }

        send(opts, method = 'GET') {
            opts = typeof opts === 'string' ? {
                url: opts
            } : opts
            let sender = this.get
            if (method === 'POST') {
                sender = this.post
            }
            return new Promise((resolve, reject) => {
                sender.call(this, opts, (err, resp, body) => {
                    if (err) reject(err)
                    else resolve(resp)
                })
            })
        }

        get(opts) {
            return this.send.call(this.env, opts)
        }

        post(opts) {
            return this.send.call(this.env, opts, 'POST')
        }
    }

    return new(class {
        constructor(name, opts) {
            this.name = name
            this.http = new Http(this)
            this.data = null
            this.dataFile = 'box.dat'
            this.logs = []
            this.isMute = false
            this.isNeedRewrite = false
            this.logSeparator = '\n'
            this.startTime = new Date().getTime()
            Object.assign(this, opts)
            this.log('', `🔔${this.name
                }, 开始!`)
        }

        isNode() {
            return 'undefined' !== typeof module && !!module.exports
        }

        isQuanX() {
            return 'undefined' !== typeof $task
        }

        isSurge() {
            return 'undefined' !== typeof $httpClient && 'undefined' === typeof $loon
        }

        isLoon() {
            return 'undefined' !== typeof $loon
        }

        isShadowrocket() {
            return 'undefined' !== typeof $rocket
        }

        toObj(str, defaultValue = null) {
            try {
                return JSON.parse(str)
            } catch {
                return defaultValue
            }
        }

        toStr(obj, defaultValue = null) {
            try {
                return JSON.stringify(obj)
            } catch {
                return defaultValue
            }
        }

        getjson(key, defaultValue) {
            let json = defaultValue
            const val = this.getdata(key)
            if (val) {
                try {
                    json = JSON.parse(this.getdata(key))
                } catch {}
            }
            return json
        }

        setjson(val, key) {
            try {
                return this.setdata(JSON.stringify(val), key)
            } catch {
                return false
            }
        }

        getScript(url) {
            return new Promise((resolve) => {
                this.get({
                    url
                }, (err, resp, body) => resolve(body))
            })
        }

        runScript(script, runOpts) {
            return new Promise((resolve) => {
                let httpapi = this.getdata('@chavy_boxjs_userCfgs.httpapi')
                httpapi = httpapi ? httpapi.replace(/\n/g, '').trim() : httpapi
                let httpapi_timeout = this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout')
                httpapi_timeout = httpapi_timeout ? httpapi_timeout * 1 : 20
                httpapi_timeout = runOpts && runOpts.timeout ? runOpts.timeout : httpapi_timeout
                const [key, addr] = httpapi.split('@')
                const opts = {
                    url: `http: //${addr}/v1/scripting/evaluate`,
                    body: {
                        script_text: script,
                        mock_type: 'cron',
                        timeout: httpapi_timeout
                    },
                    headers: {
                        'X-Key': key,
                        'Accept': '*/*'
                    }
                }
                this.post(opts, (err, resp, body) => resolve(body))
            }).catch((e) => this.logErr(e))
        }

        loaddata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require('fs')
                this.path = this.path ? this.path : require('path')
                const curDirDataFilePath = this.path.resolve(this.dataFile)
                const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
                const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
                const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
                if (isCurDirDataFile || isRootDirDataFile) {
                    const datPath = isCurDirDataFile ? curDirDataFilePath : rootDirDataFilePath
                    try {
                        return JSON.parse(this.fs.readFileSync(datPath))
                    } catch (e) {
                        return {}
                    }
                } else return {}
            } else return {}
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require('fs')
                this.path = this.path ? this.path : require('path')
                const curDirDataFilePath = this.path.resolve(this.dataFile)
                const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
                const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
                const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
                const jsondata = JSON.stringify(this.data)
                if (isCurDirDataFile) {
                    this.fs.writeFileSync(curDirDataFilePath, jsondata)
                } else if (isRootDirDataFile) {
                    this.fs.writeFileSync(rootDirDataFilePath, jsondata)
                } else {
                    this.fs.writeFileSync(curDirDataFilePath, jsondata)
                }
            }
        }

        lodash_get(source, path, defaultValue = undefined) {
            const paths = path.replace(/[(d+)]/g, '.$1').split('.')
            let result = source
            for (const p of paths) {
                result = Object(result)[p]
                if (result === undefined) {
                    return defaultValue
                }
            }
            return result
        }

        lodash_set(obj, path, value) {
            if (Object(obj) !== obj) return obj
            if (!Array.isArray(path)) path = path.toString().match(/[^.[]]+/g) || []
            path
                .slice(0, -1)
                .reduce((a, c, i) => (Object(a[c]) === a[c] ? a[c] : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {})), obj)[
                    path[path.length - 1]
                ] = value
            return obj
        }

        getdata(key) {
            let val = this.getval(key)
            // 如果以 @
            if (/^@/.test(key)) {
                const [, objkey, paths] = /^@(.*?).(.*?)$/.exec(key)
                const objval = objkey ? this.getval(objkey) : ''
                if (objval) {
                    try {
                        const objedval = JSON.parse(objval)
                        val = objedval ? this.lodash_get(objedval, paths, '') : val
                    } catch (e) {
                        val = ''
                    }
                }
            }
            return val
        }

        setdata(val, key) {
            let issuc = false
            if (/^@/.test(key)) {
                const [, objkey, paths] = /^@(.*?).(.*?)$/.exec(key)
                const objdat = this.getval(objkey)
                const objval = objkey ? (objdat === 'null' ? null : objdat || '{}') : '{}'
                try {
                    const objedval = JSON.parse(objval)
                    this.lodash_set(objedval, paths, val)
                    issuc = this.setval(JSON.stringify(objedval), objkey)
                } catch (e) {
                    const objedval = {}
                    this.lodash_set(objedval, paths, val)
                    issuc = this.setval(JSON.stringify(objedval), objkey)
                }
            } else {
                issuc = this.setval(val, key)
            }
            return issuc
        }

        getval(key) {
            if (this.isSurge() || this.isLoon()) {
                return $persistentStore.read(key)
            } else if (this.isQuanX()) {
                return $prefs.valueForKey(key)
            } else if (this.isNode()) {
                this.data = this.loaddata()
                return this.data[key]
            } else {
                return (this.data && this.data[key]) || null
            }
        }

        setval(val, key) {
            if (this.isSurge() || this.isLoon()) {
                return $persistentStore.write(val, key)
            } else if (this.isQuanX()) {
                return $prefs.setValueForKey(val, key)
            } else if (this.isNode()) {
                this.data = this.loaddata()
                this.data[key] = val
                this.writedata()
                return true
            } else {
                return (this.data && this.data[key]) || null
            }
        }

        initGotEnv(opts) {
            this.got = this.got ? this.got : require('got')
            this.cktough = this.cktough ? this.cktough : require('tough-cookie')
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()
            if (opts) {
                opts.headers = opts.headers ? opts.headers : {}
                if (undefined === opts.headers.Cookie && undefined === opts.cookieJar) {
                    opts.cookieJar = this.ckjar
                }
            }
        }

        get(opts, callback = () => {}) {
            if (opts.headers) {
                delete opts.headers['Content-Type']
                delete opts.headers['Content-Length']
            }
            if (this.isSurge() || this.isLoon()) {
                if (this.isSurge() && this.isNeedRewrite) {
                    opts.headers = opts.headers || {}
                    Object.assign(opts.headers, {
                        'X-Surge-Skip-Scripting': false
                    })
                }
                $httpClient.get(opts, (err, resp, body) => {
                    if (!err && resp) {
                        resp.body = body
                        resp.statusCode = resp.status
                    }
                    callback(err, resp, body)
                })
            } else if (this.isQuanX()) {
                if (this.isNeedRewrite) {
                    opts.opts = opts.opts || {}
                    Object.assign(opts.opts, {
                        hints: false
                    })
                }
                $task.fetch(opts).then(
                    (resp) => {
                        const {
                            statusCode: status,
                            statusCode,
                            headers,
                            body
                        } = resp
                        callback(null, {
                            status,
                            statusCode,
                            headers,
                            body
                        }, body)
                    },
                    (err) => callback(err)
                )
            } else if (this.isNode()) {
                this.initGotEnv(opts)
                this.got(opts)
                    .on('redirect', (resp, nextOpts) => {
                        try {
                            if (resp.headers['set-cookie']) {
                                const ck = resp.headers['set-cookie'].map(this.cktough.Cookie.parse).toString()
                                if (ck) {
                                    this.ckjar.setCookieSync(ck, null)
                                }
                                nextOpts.cookieJar = this.ckjar
                            }
                        } catch (e) {
                            this.logErr(e)
                        }
                        // this.ckjar.setCookieSync(resp.headers['set-cookie'].map(Cookie.parse).toString())
                    })
                    .then(
                        (resp) => {
                            const {
                                statusCode: status,
                                statusCode,
                                headers,
                                body
                            } = resp
                            callback(null, {
                                status,
                                statusCode,
                                headers,
                                body
                            }, body)
                        },
                        (err) => {
                            const {
                                message: error,
                                response: resp
                            } = err
                            callback(error, resp, resp && resp.body)
                        }
                    )
            }
        }

        post(opts, callback = () => {}) {
            const method = opts.method ? opts.method.toLocaleLowerCase() : 'post'
            // 如果指定了请求体, 但没指定`Content-Type`, 则自动生成
            if (opts.body && opts.headers && !opts.headers['Content-Type']) {
                opts.headers['Content-Type'] = 'application/x-www-form-urlencoded'
            }
            if (opts.headers) delete opts.headers['Content-Length']
            if (this.isSurge() || this.isLoon()) {
                if (this.isSurge() && this.isNeedRewrite) {
                    opts.headers = opts.headers || {}
                    Object.assign(opts.headers, {
                        'X-Surge-Skip-Scripting': false
                    })
                }
                $httpClient[method](opts, (err, resp, body) => {
                    if (!err && resp) {
                        resp.body = body
                        resp.statusCode = resp.status
                    }
                    callback(err, resp, body)
                })
            } else if (this.isQuanX()) {
                opts.method = method
                if (this.isNeedRewrite) {
                    opts.opts = opts.opts || {}
                    Object.assign(opts.opts, {
                        hints: false
                    })
                }
                $task.fetch(opts).then(
                    (resp) => {
                        const {
                            statusCode: status,
                            statusCode,
                            headers,
                            body
                        } = resp
                        callback(null, {
                            status,
                            statusCode,
                            headers,
                            body
                        }, body)
                    },
                    (err) => callback(err)
                )
            } else if (this.isNode()) {
                this.initGotEnv(opts)
                const {
                    url,
                    ..._opts
                } = opts
                this.got[method](url, _opts).then(
                    (resp) => {
                        const {
                            statusCode: status,
                            statusCode,
                            headers,
                            body
                        } = resp
                        callback(null, {
                            status,
                            statusCode,
                            headers,
                            body
                        }, body)
                    },
                    (err) => {
                        const {
                            message: error,
                            response: resp
                        } = err
                        callback(error, resp, resp && resp.body)
                    }
                )
            }
        }
        /**
         *
         * 示例:$.time('yyyy-MM-dd qq HH:mm:ss.S')
         *    :$.time('yyyyMMddHHmmssS')
         *    y:年 M:月 d:日 q:季 H:时 m:分 s:秒 S:毫秒
         *    其中y可选0-4位占位符、S可选0-1位占位符，其余可选0-2位占位符
         * @param {string} fmt 格式化参数
         * @param {number} 可选: 根据指定时间戳返回格式化日期
         *
         */
        time(fmt, ts = null) {
            const date = ts ? new Date(ts) : new Date()
            let o = {
                'M+': date.getMonth() + 1,
                'd+': date.getDate(),
                'H+': date.getHours(),
                'm+': date.getMinutes(),
                's+': date.getSeconds(),
                'q+': Math.floor((date.getMonth() + 3) / 3),
                'S': date.getMilliseconds()
            }
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
            for (let k in o)
                if (new RegExp('(' + k + ')').test(fmt))
                    fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
            return fmt
        }

        /**
         * 系统通知
         *
         * > 通知参数: 同时支持 QuanX 和 Loon 两种格式, EnvJs根据运行环境自动转换, Surge 环境不支持多媒体通知
         *
         * 示例:
         * $.msg(title, subt, desc, 'twitter://')
         * $.msg(title, subt, desc, { 'open-url': 'twitter://', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
         * $.msg(title, subt, desc, { 'open-url': 'https://bing.com', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
         *
         * @param {*} title 标题
         * @param {*} subt 副标题
         * @param {*} desc 通知详情
         * @param {*} opts 通知参数
         *
         */
        msg(title = name, subt = '', desc = '', opts) {
            const toEnvOpts = (rawopts) => {
                if (!rawopts) return rawopts
                if (typeof rawopts === 'string') {
                    if (this.isLoon()) return rawopts
                    else if (this.isQuanX()) return {
                        'open-url': rawopts
                    }
                    else if (this.isSurge()) return {
                        url: rawopts
                    }
                    else return undefined
                } else if (typeof rawopts === 'object') {
                    if (this.isLoon()) {
                        let openUrl = rawopts.openUrl || rawopts.url || rawopts['open-url']
                        let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
                        return {
                            openUrl,
                            mediaUrl
                        }
                    } else if (this.isQuanX()) {
                        let openUrl = rawopts['open-url'] || rawopts.url || rawopts.openUrl
                        let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
                        return {
                            'open-url': openUrl,
                            'media-url': mediaUrl
                        }
                    } else if (this.isSurge()) {
                        let openUrl = rawopts.url || rawopts.openUrl || rawopts['open-url']
                        return {
                            url: openUrl
                        }
                    }
                } else {
                    return undefined
                }
            }
            if (!this.isMute) {
                if (this.isSurge() || this.isLoon()) {
                    $notification.post(title, subt, desc, toEnvOpts(opts))
                } else if (this.isQuanX()) {
                    $notify(title, subt, desc, toEnvOpts(opts))
                }
            }
            if (!this.isMuteLog) {
                let logs = ['', '==============📣系统通知📣==============']
                logs.push(title)
                subt ? logs.push(subt) : ''
                desc ? logs.push(desc) : ''
                console.log(logs.join('\n'))
                this.logs = this.logs.concat(logs)
            }
        }

        log(...logs) {
            if (logs.length > 0) {
                this.logs = [...this.logs, ...logs]
            }
            console.log(logs.join(this.logSeparator))
        }

        logErr(err, msg) {
            const isPrintSack = !this.isSurge() && !this.isQuanX() && !this.isLoon()
            if (!isPrintSack) {
                this.log('', `❗️${this.name
                }, 错误!`, err)
            } else {
                this.log('', `❗️${this.name
            }, 错误!`, err.stack)
            }
        }

        wait(time) {
            return new Promise((resolve) => setTimeout(resolve, time))
        }

        done(val = {}) {
            const endTime = new Date().getTime()
            const costTime = (endTime - this.startTime) / 1000
            this.log('', `🔔${this.name
    }, 结束!🕛${costTime
}
秒`)
            this.log()
            if (this.isSurge() || this.isQuanX() || this.isLoon()) {
                $done(val)
            }
        }
    })(name, opts)
}

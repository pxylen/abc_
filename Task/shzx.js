/* ziye 
github地址 https://github.cn/ziye888
TG频道地址 https://t.me/ziyescript
TG交流群 https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接 https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/ziye.boxjs.json
圈X task订阅 https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/ziye-gallery.json
转载请备注个名字，谢谢

⚠️搜狐资讯    需要 微信 手机号   收益预计 0.1-0.2元
点击 http://i.t.sohu/KQQNLvZ  下载app   邀请码C2270465   谢谢支持

5.9 完成

⚠️运行一次需要1 - 10 分钟    
定时一小时一次就好 11 11 * * * *

⚠️一共  1个ck  👉 1条 Secrets

手机端默认使用boxjs👉 node请复制boxjs会话粘贴至shzxCOOKIE.js中 或者 填写环境变量(多账号请换行)

第一步⚠️添加 hostname =ss.sohu.com,
进入软件 点击 赚钱 获取ck

shzxbodyVal👉SHZX_shzxBODY👉header

⚠️主机名以及重写👇  一次只开一条重写
hostname =ss.sohu.com,
//////////////////////////// 圈x
//搜狐资讯获取ck
https:\/\/ss\.sohu\.com\/api\/sign\/everyday\/get url script-request-body https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shzx.js
//////////////////////////// loon
//搜狐资讯获取ck
http-request https:\/\/ss\.sohu\.com\/api\/sign\/everyday\/get script-path=https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shzx.js, requires-body=true, tag=搜狐资讯获取ck
//////////////////////////// surge
//搜狐资讯获取ck
搜狐资讯获取ck = type=http-request,pattern=https:\/\/ss\.sohu\.com\/api\/sign\/everyday\/get,requires-body=1,max-size=0,script-path=https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shzx.js
*/

GXRZ = '5.9 完成'
const $ = Env("搜狐资讯");
$.idx = ($.idx = ($.getval('shzxSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./shzxCOOKIE") : ``;
const logs = 0; // 0关闭日志，1原始日志，2格式化，3格式化且解码，
notifyttt = 1; // 0为关闭外部推送，1为12 23 点外部推送
notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
Minutes = 10; // 通知 默认控制在0-10分内
K = '', $.message = '', COOKIES_SPLIT = '', CASH = '', XH = 0, XYZ = 100, Length = 0, ddtime = '';
let shzxbodyArr = [];
let shzxbodyVal = ``;
let middleshzxBODY = [];
if ($.isNode() && process.env.SHZX_shzxBODY) {
    XYZ = process.env.SHZX_XYZ || "100";
    notifyttt = process.env.SHZX_notifyttt || "1";
    notifyInterval = process.env.SHZX_notifyInterval || "1";
    Minutes = process.env.SHZX_Minutes || "10";
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );
    if (
        process.env.SHZX_shzxBODY &&
        process.env.SHZX_shzxBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleshzxBODY = process.env.SHZX_shzxBODY.split(COOKIES_SPLIT);
    } else {
        middleshzxBODY = process.env.SHZX_shzxBODY.split();
    }
    Object.keys(middleshzxBODY).forEach((item) => {
        if (middleshzxBODY[item]) {
            shzxbodyArr.push(middleshzxBODY[item]);
        }
    });
} else if ($.isNode() && COOKIE.datas && COOKIE.datas[0].val != '') {
    console.log(
        `============ cookie方式为：boxjs复制会话 =============\n`
    );
    XYZ = (COOKIE.settings.find(item => item.id === `shzxXYZ`)).val;
    notifyttt = (COOKIE.settings.find(item => item.id === `shzxnotifyttt`)).val;
    notifyInterval = (COOKIE.settings.find(item => item.id === `shzxnotifyInterval`)).val;
    Minutes = (COOKIE.settings.find(item => item.id === `shzxMinutes`)).val;
    shzxCount = (COOKIE.settings.find(item => item.id === `shzxCount`)).val || '1';
    for (let i = 1; i <= shzxCount; i++) {
        if (i == 1) {
            op = ``
        } else {
            op = i
        }
        if (COOKIE.datas.find(item => item.key === `shzxbody${op}`)) {
            shzxbodyArr.push(COOKIE.datas.find(item => item.key === `shzxbody${op}`).val);
        }
    }
} else {
    if ("shzxXYZ") {
        XYZ = $.getval("shzxXYZ") || '100';
    }
    if ("shzxXH") {
        XH = $.getval("shzxXH") || '0';
    }
    if ("shzxnotifyttt") {
        notifyttt = $.getval("shzxnotifyttt") || '1';
    }
    if ("shzxnotifyInterval") {
        notifyInterval = $.getval("shzxnotifyInterval") || '1';
    }
    if ("shzxMinutes") {
        Minutes = $.getval("shzxMinutes") || '10';
    }
    let shzxCount = ($.getval('shzxCount') || '1') - 0;
    for (let i = 1; i <= shzxCount; i++) {
        if (i == 1) {
            op = ``
        } else {
            op = i
        }
        if ($.getdata(`shzxbody${op}`)) {
            shzxbodyArr.push($.getdata(`shzxbody${op}`));
        }
    }
}

function GetCookie() {
    if ($request && $request.url.indexOf("sign") >= 0 && $request.url.indexOf("everyday") >= 0) {
        const shzxbodyVal = $request.body
        userid = JSON.parse(shzxbodyVal).userId
        if (shzxbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('shzxbody' + $.idx);
                    if (bodys) {
                        userids = JSON.parse(bodys).userId

                        if (userids != userid) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = Number($.idx) + 1
                            cookie()
                        }
                    } else {
                        $.setdata(shzxbodyVal, "shzxbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取shzxbodyVal✅: 成功,shzxbodyVal: ${shzxbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取shzxbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                     } else {
                         $.setdata(shzxbodyVal, "shzxbody" + $.idx);
                         $.log(
                             `[${$.name + $.idx}] 获取shzxbodyVal✅: 成功,shzxbodyVal: ${shzxbodyVal}`
                         );
                         $.msg($.name + $.idx, `获取shzxbodyVal: 成功🎉`, ``);
                         $.done();
                     };
                }
            } else {
                $.setdata(shzxbodyVal, "shzxbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取shzxbodyVal✅: 成功,shzxbodyVal: ${shzxbodyVal}`
                );
                $.msg($.name + $.idx, `获取shzxbodyVal: 成功🎉`, ``);
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
    `============ 共 ${shzxbodyArr.length} 个${$.name}账号=============\n`
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
//str编码
function encodeUnicode(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + res.join("\\u");
}
//str解码
function decodeUnicode(str) {
    str = str.replace(/\\u/g, "%u");
    return unescape(str);
}
//es编码  escape("中文")
//es解码  unescape("%u4E2D%u6587")
//URI编码  encodeURI("中文") 不完全
//URI解码  decodeURI("%E4%B8%AD%E6%96%87")  不完全
//URIC编码  encodeURIComponent("中文")
//URIC解码  decodeURIComponent("%E4%B8%AD%E6%96%87")
//日志格式化
function format(str) {
    if (logs == 2) {
        str = JSON.stringify(str).replace(/,/g, ",\n").replace(/{/g, '{\n').replace(/}/g, '\n}').replace(/\\/g, "").replace(/\\\\/g, '\\')
    }
    if (logs == 3) {
        str = decodeUnicode(JSON.stringify(str)).replace(/,/g, ",\n").replace(/{/g, '{\n').replace(/}/g, '\n}').replace(/\\/g, "")
    }
    return str;
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
    if (!shzxbodyArr || shzxbodyArr == '') {
        $.msg(
            O, time(Number(Date.now())) +
            `⚠️未获取COOKIE\n请点击前往获取 http://i.t.sohu/KQQNLvZ`,
            'http://i.t.sohu/KQQNLvZ', {
                "open-url": "http://i.t.sohu/KQQNLvZ"
            }
        );
        return;
    } else {
        for (let i = 0; i < shzxbodyArr.length; i++) {
            shzxbodyVal = shzxbodyArr[i];
            userid = JSON.parse(shzxbodyVal).userId
            sign = JSON.parse(shzxbodyVal).sign
            did = JSON.parse(shzxbodyVal).did
            mid = JSON.parse(shzxbodyVal).mid
            token = JSON.parse(shzxbodyVal).token
            pid = JSON.parse(shzxbodyVal).pid
            $.index = i + 1;
            O = (`${$.name + $.index}🔔`);
            $.isLogin = true;
            if (shzxbodyVal && shzxbodyVal != '' && RT(1, 100) <= XYZ) {
                console.log(`-----------------\n\n🔔开始运行【${$.name + $.index}】`)
                K = `用户信息🚩`;
                if (K == `用户信息🚩`) {
                    shzxurl = `https://ss.sohu.com/api/point/getUserInfo`
                    shzxheader = {
                        "Host": "ss.sohu.com",
                        "Content-Type": `application/json; charset=utf-8`,
                    };
                    shzxbody = `{
    "userId": "${userid}",
    "os": "2",
    "sourceType": "1",
    "sign": "${sign}",
    "did": "${did}",
    "appName": "2",
    "appVersion": "5.2.2",
    "mid": "${mid}",
    "token": "${token}",
    "timestamp": ${Date.now()},
    "sourceType": "1",
    "pid": "${pid}"
}`
                    await taskpost();
                    $.GetUserInfo = DATA
                    if ($.GetUserInfo.code == 0) {
                        console.log(`\n${O}\n========== ${$.GetUserInfo.data.nick} ==========\n用户ID：${$.GetUserInfo.data.inviteCode}\n账户信息：现金${$.GetUserInfo.data.money/100}元,狐币：${$.GetUserInfo.data.gold}币,合计：${($.GetUserInfo.data.gold/100000+$.GetUserInfo.data.money/100).toFixed(2)}元\n`)
                        $.message += `\n${O}\n========== 【${$.GetUserInfo.data.nick}】 ==========\n【用户ID】：${$.GetUserInfo.data.inviteCode}\n【账户信息】：现金：${$.GetUserInfo.data.money/100}元,狐币：${$.GetUserInfo.data.gold}币,合计：${($.GetUserInfo.data.gold/100000+$.GetUserInfo.data.money/100).toFixed(2)}元\n`;
                    } else {
                        $.isLogin = false; //cookie过期
                        return
                    }
                    if (!$.isLogin) {
                        $.msg(
                            O, time(Number(Date.now())) +
                            `⚠️COOKIE失效\n请点击前往获取 http://i.t.sohu/KQQNLvZ`,
                            'http://i.t.sohu/KQQNLvZ', {
                                "open-url": "http://i.t.sohu/KQQNLvZ"
                            }
                        );
                        if ($.isNode()) {
                            await notify.sendNotify(O, time(Number(Date.now())) + `⚠️COOKIE失效\n请点击前往获取http://i.t.sohu/KQQNLvZ`);
                        }
                        continue
                    }
                }
                K = `签到列表🚩`;
                if (K == `签到列表🚩`) {
                    shzxurl = `https://ss.sohu.com/api/sign/everyday/get`
                    await taskpost();
                    $.GetTaskList = DATA
                    if ($.GetTaskList.code == 0) {
                        signinfo = $.GetTaskList.data.signInfoList.find(item => item.isToday == 1);
                        if ($.GetTaskList.data.isSignedToday == 1) {
                            console.log(`签到任务：今日${signinfo.earnCoin}狐币-已完成，明日${$.GetTaskList.data.tomorrowCoin}狐币\n`)
                            $.message += `【签到任务】：今日${signinfo.earnCoin}狐币-已完成，明日${$.GetTaskList.data.tomorrowCoin}狐币\n`;
                        }
                    }
                }
                if ($.GetTaskList.data.isSignedToday == 0) {
                    K = `每日签到🚩`;
                    if (K == `每日签到🚩`) {
                        shzxurl = `https://ss.sohu.com/api/sign/everyday/sign`
                        await taskpost();
                        $.ClickSign = DATA;
                        if ($.ClickSign.code == 0) {
                            console.log(`每日签到：签到成功，获得${$.ClickSign.data.todayReward}狐币\n`)
                            $.message += `【每日签到】：签到成功，获得${$.ClickSign.data.todayReward}狐币\n`;
                        }
                    }
                    K = `666🚩`;
                    if (K == `666🚩`) {
                        shzxurl = `https://ss.sohu.com/api/activity/task/incentiveVideoReward`
                        shzxbody = `{
    "userId": "${userid}",
    "os": "2",
    "sourceType": "1",
    "code": "sign",
    "sign": "${sign}",
    "did": "${did}",
    "appName": "2",
    "appVersion": "5.2.2",
    "mid": "${mid}",
    "token": "${token}",
    "timestamp": ${Date.now()},
    "sourceType": "1",
    "pid": "${pid}"
}`
                        await taskpost();
                        $.incentiveVideoReward = DATA
                        if ($.incentiveVideoReward.code == 0) {
                            console.log(`666：，获得${$.incentiveVideoReward.data.rewardCoin}狐币\n`)
                            $.message += `【666】：获得${$.incentiveVideoReward.data.rewardCoin}狐币\n`;
                        }
                    }
                }
                K = `任务列表🚩`;
                if (K == `任务列表🚩`) {
                    shzxurl = `https://ss.sohu.com/api/task/getAllTask`
                    await taskpost();
                    $.Task = DATA;
                    if ($.Task.code == 0) {
                        taskinfo = $.Task.data.taskArray.find(item => item.type == 1);
                        daytaskinfo = taskinfo.list.find(item => item.status == 1);
                        fxinfo = taskinfo.list.find(item => item.id == 14);
                        for (let i = 0; i < taskinfo.list.length; i++) {
                            console.log(`${taskinfo.list[i].name}:${taskinfo.list[i].extraRewardTagValue}-${taskinfo.list[i].buttonTag}\n`)
                            //$.message += `【${taskinfo.list[i].name}】:${taskinfo.list[i].extraRewardTagValue}-${taskinfo.list[i].buttonTag}\n`;
                        }
                    }
                }
                K = `时段奖励页🚩`;
                if (K == `时段奖励页🚩`) {
                    shzxurl = `https://ss.sohu.com/api/activity/task/getUrlConfig`
                    shzxbody = `{"userId": "${userid}",
    "os": "2",
    "positionId": 0,
    "did": "${did}",
    "appName": "2",
    "appVersion": "5.2.2",
    "token": "${token}",
    "timestamp": ${Date.now()},
    "sourceType": "1"
}`
                    await taskpost();
                    $.openTimey = DATA;
                }
                if ($.openTimey.data.adList[0].urlStatus == 1) {
                    if (nowTimes.getHours() == 7) {
                        subTaskId = 68
                    }
                    if (nowTimes.getHours() == 9) {
                        subTaskId = 69
                    }
                    if (nowTimes.getHours() == 12) {
                        subTaskId = 70
                    }
                    if (nowTimes.getHours() == 15) {
                        subTaskId = 71
                    }
                    if (nowTimes.getHours() == 18) {
                        subTaskId = 72
                    }
                    if (nowTimes.getHours() == 21) {
                        subTaskId = 73
                    }
                    K = `时段奖励🚩`;
                    if (K == `时段奖励🚩`) {
                        shzxurl = `https://ss.sohu.com/api/activity/task/openTimeLimitedRush`
                        shzxbody = `{
    "userId": "${userid}",
    "os": "2",
    "sourceType": "1",
    "taskId": "14",
    "sign": "${sign}",
    "did": "${did}",
    "appName": "2",
    "appVersion": "5.2.2",
    "mid": "${mid}",
    "token": "${token}",
    "timestamp": ${Date.now()},
    "subTaskId": "${subTaskId}"
}`
                        await taskpost();
                        $.openTime = DATA;
                        if ($.openTime.code == 0 && $.openTime.data.number) {
                            console.log(`时段奖励：获得${$.openTime.data.number}狐币\n`)
                            $.message += `【时段奖励】：获得${$.openTime.data.number}狐币\n`;
                        }
                        if ($.openTime.code == 0 && $.openTime.data.nextTime) {
                            console.log(`时段奖励：下次${$.openTime.data.nextTime/100}点\n`)
                            $.message += `【时段奖励】：下次${$.openTime.data.nextTime/100}点\n`;
                        }
                    }
                    K = `666🚩`;
                    if (K == `666🚩`) {
                        shzxurl = `https://ss.sohu.com/api/activity/task/incentiveVideoReward`
                        shzxbody = `{
    "userId": "${userid}",
    "os": "2",
    "sourceType": "1",
   "code": "limitTimeSuccess${subTaskId}",
    "playVideoType": 1,
    "did": "${did}",
    "appName": "2",
    "appVersion": "5.2.2",
    "token": "${token}",
    "timestamp": ${Date.now()}
}`
                        await taskpost();
                        $.incentiveVideoReward = DATA
                        if ($.incentiveVideoReward.code == 0) {
                            console.log(`666：，获得${$.incentiveVideoReward.data.rewardCoin}狐币\n`)
                            $.message += `【666】：获得${$.incentiveVideoReward.data.rewardCoin}狐币\n`;
                        }
                    }
                }
                if (daytaskinfo) {
                    if (daytaskinfo.id >= 30) {
                        K = `${daytaskinfo.name}🚩`;
                        if (K.indexOf("补贴") >= 0) {
                            shzxurl = `https://ss.sohu.com/api/task/withdrawTaskReward`
                            shzxbody = `{
         "token": "${token}",
        "taskId": ${daytaskinfo.id},
        "sourceType": "1",
        "os": "2",
        "mid": "${mid}",
        "did": "${did}",
        "appName": "2",
       "sign": "${sign}",
       "userId": "${userid}",
        "appVersion": "5.2.2",
        "pid": "${pid}",
         "timestamp": ${Date.now()}
    }`
                            await taskpost();
                            $.TaskReward = DATA;
                            if ($.TaskReward.code == 0) {
                                console.log(`${daytaskinfo.name}：获得${$.TaskReward.data.addCount}狐币\n`)
                                $.message += `【${daytaskinfo.name}】：获得${$.TaskReward.data.addCount}狐币\n`;
                            }
                        }
                        K = `666🚩`;
                        if (K == `666🚩`) {
                            shzxurl = `https://ss.sohu.com/api/activity/task/incentiveVideoReward`
                            shzxbody = `{
        "sourceType": "1",
        "token": "${token}",
        "playVideoType": 3,
        "appName": "2",
         "did": "${did}",
        "timestamp": ${Date.now()},
        "code": "task${daytaskinfo.id}",
       "userId": "${userid}",
        "os": "2",
        "appVersion": "5.2.2"
    }`
                            await taskpost();
                            $.incentiveVideoReward = DATA
                            if ($.incentiveVideoReward.code == 0) {
                                console.log(`666：获得${$.incentiveVideoReward.data.rewardCoin}狐币\n`)
                                $.message += `【666】：获得${$.incentiveVideoReward.data.rewardCoin}狐币\n`;
                            }
                        }
                    } else {
                        K = `完成分享🚩`;
                        if (K == `完成分享🚩`) {
                            shzxurl = `https://ss.sohu.com/api/task/withdrawTaskReward`
                            shzxbody = `{
    "userId": "${userid}",
    "os": "2",
    "sourceType": "1",
   "taskId": ${daytaskinfo.id},
    "sign": "${sign}",
    "did": "${did}",
    "appName": "2",
    "appVersion": "5.2.2",
    "token": "${token}",
    "timestamp": ${Date.now()},
    "subTaskId": "73"
}`
                            await taskpost();
                            $.shareReward = DATA;
                            if ($.shareReward.code == 0) {
                                console.log(`完成分享：，获得${$.shareReward.data.addCount}狐币\n`)
                                $.message += `【完成分享】：获得${$.shareReward.data.addCount}狐币\n`;
                            }
                        }
                        K = `666🚩`;
                        if (K == `666🚩`) {
                            shzxurl = `https://ss.sohu.com/api/activity/task/incentiveVideoReward`
                            shzxbody = `{
      "token": "${token}",
   "did": "${did}",
    "os": "2",
    "timestamp": ${Date.now()},
    "appName": "2",
    "sourceType": "1",
    "code": "task14",
    "userId": "${userid}",
    "appVersion": "5.2.3",
    "playVideoType": 3
}`
                            await taskpost();
                            $.incentiveVideoReward = DATA
                            if ($.incentiveVideoReward.code == 0) {
                                console.log(`666：获得${$.incentiveVideoReward.data.rewardCoin}狐币\n`)
                                $.message += `【666】：获得${$.incentiveVideoReward.data.rewardCoin}狐币\n`;
                            }
                        }
                    }
                }
                K = `资讯类目🚩`;
                if (K == `资讯类目🚩`) {
                    shzxurl = `https://ss.sohu.com/api/channels`
                    shzxbody = `{
        "sceneParam": [{
            "spm": "smzx.home.nav"
        }],
        "appName": "2",
       "did": "${did}",
        "userId": "${userid}",
        "os": "2",
        "sourceType": "1",
       "timestamp": ${Date.now()},
        "token": "${token}",
        "appVersion": "5.2.2"
    }`
                    await taskpost();
                    $.channels = DATA;
                    if ($.channels.code == 0) {
                        for (let i = 0; i < $.channels.data.content.length; i++) {
                            console.log(`${$.channels.data.content[i].name}：${$.channels.data.content[i].recSpm}\n`)
                        }
                    }
                }
                K = `资讯页面🚩`;
                if (K == `资讯页面🚩`) {
                    shzxurl = `https://ss.sohu.com/api/feeds`
                    spm = $.channels.data.content[RT(0, 24)].recSpm
                    console.log("🚩🚩🚩🚩🚩" + spm)
                    shzxbody = `{
    "pvId": "a",
    "requestId": "",
    "sceneParam": [{
        "refresh": true,
         "spm": "${spm}",
        "size": 10,
        "page": 3,
        "ext": {
            "adParam": ""
        }
    }],
    "appVersion": "5.2.2",
    "appName": "2",
    "os": "2",
     "userId": "${userid}",
    "token": "${token}",
     "timestamp": ${Date.now()},
     "did": "${did}",
    "sourceType": "1"
}`
                    await taskpost();
                    $.feeds = DATA;
                    if ($.feeds.code == 0) {
                        for (let i = 0; i < $.feeds.data.resources.length; i++) {
                            console.log(`${JSON.parse($.feeds.data.resources[i].contentData.content).title}：${$.feeds.data.resources[i].code}\n`)
                        }
                    }
                }
                while (true) {
                    articleIdRT = RT(0, 9)
                    articleId = $.feeds.data.resources[articleIdRT].code
                    console.log(`随机阅读:${JSON.parse($.feeds.data.resources[articleIdRT].contentData.content).title}：${$.feeds.data.resources[articleIdRT].code}`)
                    K = `阅读查询🚩`;
                    if (K == `阅读查询🚩`) {
                        shzxurl = `https://ss.sohu.com/api/read/abilityBall/get`
                        shzxbody = `{
       "did": "${did}",
        "timestamp": ${Date.now()},
        "userId": "${userid}",
        "token": "${token}",
        "os": "2",
        "appVersion": "5.2.2",
        "sourceType": "1",
        "appName": "2"
    }`
                        await taskpost();
                        $.abilityBallget = DATA;
                        if ($.abilityBallget.code == 0) {
                            console.log(`阅读查询：当前${$.abilityBallget.data.totalCoin}狐币\n`)
                        }
                    }
                    DD = RT(22000, 25000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    K = `阅读资讯🚩`;
                    if (K == `阅读资讯🚩`) {
                        shzxurl = `https://ss.sohu.com/api/read/abilityBall/turn`
                        shzxbody = `{
        "token": "${token}",
        "articleId": "${articleId}",
        "did": "${did}",
         "sourceType": "1",
        "appName": "2",
        "timestamp": ${Date.now()},
        "userId": "${userid}",
        "os": "2",
        "appVersion": "5.2.2"
    }`
                        await taskpost();
                        $.abilityBallturn = DATA;
                        if ($.abilityBallturn.code == 0) {
                            console.log(`阅读资讯：${$.abilityBallturn.data.addCoin}狐币，当前${$.abilityBallturn.data.totalCoin}狐币\n`)
                        }
                    }
                    if ($.abilityBallget && ($.abilityBallget.data.addCoin == "攒满了" || $.abilityBallget.data.totalCoin >= 250)) {
                        K = `阅读奖励🚩`;
                        if (K == `阅读奖励🚩`) {
                            shzxurl = `https://ss.sohu.com/api/read/abilityBall/earn`
                            shzxbody = `{
        "appVersion": "5.2.2",
         "userId": "${userid}",
        "did": "${did}",
        "os": "2",
        "timestamp": ${Date.now()},
       "token": "${token}",
        "sourceType": "1",
       "articleId": "${articleId}",
        "appName": "2"
    }`
                            await taskpost();
                            $.abilityBallearn = DATA;
                            if ($.abilityBallearn.code == 0) {
                                console.log(`阅读奖励：领取${$.abilityBallearn.data.earnCoin}狐币\n`)
                                $.message += `【阅读奖励】：领取${$.abilityBallearn.data.earnCoin}狐币\n`;
                            }
                        }
                        break;
                    }
                    if ($.abilityBallget && ($.abilityBallturn.data.totalCoin - $.abilityBallget.data.totalCoin < 10 || $.abilityBallturn.data.addCoin == "+1")) {
                        break;
                    }
                }
                if (fxinfo.status == 0) {
                    K = `分享任务🚩`;
                    if (K == `分享任务🚩`) {
                        shzxurl = `https://ss.sohu.com/api/activity/task/share/report`
                        shzxbody = `{
        "appName": "2",
        "sourceType": "1",
        "articleId": "${articleId}",
        "appVersion": "5.2.2",
          "did": "${did}",
        "os": "2",
         "token": "${token}",
        "userId": "${userid}",
       "timestamp": ${Date.now()}
    }`
                        DD = RT(1000, 2000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await taskpost();
                        $.share = DATA;
                        if ($.share.code == 0) {
                            console.log(`分享任务：分享成功\n`)
                        }
                    }
                }
                K = `阅读时长列表🚩`;
                if (K == `阅读时长列表🚩`) {
                    shzxurl = `https://ss.sohu.com/api/read/everyday/get`
                    shzxbody = `{
     "timestamp": ${Date.now()},
    "sourceType": 1,
    "appVersion": "5.2.3",
    "appName": "2",
   "userId": "${userid}",
    "token": "${token}",
    "did": "${did}",
    "os": "2"
}`
                    await taskpost();
                    $.ydsclb = DATA;
                    if ($.ydsclb.code == 0) {
                        ydsc = $.ydsclb.data.readTimeText.split(`已阅读`)[1].split(`分钟`)[0]
                        console.log(`阅读时长列表：${$.ydsclb.data.readTimeText}\n`)
                        $.message += `【阅读时长列表】：${$.ydsclb.data.readTimeText}\n`;
                    }
                }
                if ($.ydsclb && ydsc >= 60 && $.ydsclb.data.readList[0].earnStatus == 1) {
                    K = `阅读时长奖励🚩`;
                    if (K == `阅读时长奖励🚩`) {
                        shzxurl = `https://ss.sohu.com/api/read/everyday/earn`
                        for (let i = 0; i < $.ydsclb.data.readList.length; i++) {
                            shzxbody = `{
   "timestamp": ${Date.now()},
    "sourceType": 1,
    "appVersion": "5.2.3",
    "appName": "2",
   "userId": "${userid}",
    "token": "${token}",
    "did": "${did}",
    "id": "${i+1}",
    "os": "2"
}`
                            await taskpost();
                        }
                        $.lqcs = DATA;
                        if ($.lqcs.code == 0) {
                            console.log(`阅读时长奖励：领取成功\n`)
                            $.message += `【阅读时长奖励】：领取成功\n`;
                        }
                    }
                }
                if ($.ydsclb.data.readList[0].earnStatus == 2) {
                    console.log(`阅读时长奖励：已领取\n`)
                    $.message += `【阅读时长奖励】：已领取\n`;
                }
                K = `摇钱树任务列表🚩`;
                if (K == `摇钱树任务列表🚩`) {
                    shzxurl = `https://ss.sohu.com/api/task/list`
                    shzxbody = `{
    "timestamp": ${Date.now()},
    "os": "2",
    "sourceType": 1,
    "appVersion": "5.2.3",
    "appName": "2",
    "type": 4,
    "userId": "${userid}",
    "token": "${token}",
    "did": "${did}",
    "activityId": 4,
    "activityType": 1
}`
                    await taskpost();
                    $.list = DATA;
                    if ($.list.code == 0) {
                        lqinfo = $.list.data.taskArray[0].list.find(item => item.status == 1);
                        jlinfo = $.list.data.taskArray[0].list.find(item => item.id == 60);
                        gminfo = $.list.data.taskArray[0].list.find(item => item.id == 59);
                        console.log(`摇钱树任务列表：${$.list.data.taskArray[0].typeName}${$.list.data.taskArray[0].typeDesc}\n`)
                    }
                }
                if (jlinfo.status == 0) {
                    K = `摇钱树视频🚩`;
                    if (K == `摇钱树视频🚩`) {
                        shzxurl = `https://ss.sohu.com/api/activity/task/incentiveVideoReward`
                        shzxbody = `{
    "timestamp": ${Date.now()},
     "os": "2",
     "sourceType": 1,
     "appVersion": "5.2.3",
     "appName": "2",
     "code": "yqsIvCode",
     "playVideoType": 1,
    "userId": "${userid}",
    "token": "${token}",
    "did": "${did}",
    "activityId": 4,
    "activityType": 1
}`
                        await taskpost();
                        $.video = DATA;
                        if ($.video.code == 0) {
                            console.log(`摇钱树视频：成功\n`)
                        }
                    }
                }
                if (gminfo.status == 0) {
                    for (let i = 0; i < 5; i++) {
                        K = `摇钱树购买次数🚩`;
                        if (K == `摇钱树购买次数🚩`) {
                            shzxurl = `https://ss.sohu.com/api/task/coin/numDraws`
                            shzxbody = `{
    "timestamp": ${Date.now()},
    "os": "2",
    "sourceType": 1,
    "appVersion": "5.2.3",
    "appName": "2",
    "taskId": 59,
   "userId": "${userid}",
    "token": "${token}",
    "did": "${did}",
    "activityId": 4,
    "activityType": 1
}`
                            await taskpost();
                            $.gmcs = DATA;
                            if ($.gmcs.code == 0) {
                                console.log(`摇钱树购买次数：-200狐币\n`)
                                //$.message += `【摇钱树购买次数】：-200狐币\n`;
                            }
                        }
                        K = `摇钱树领次数🚩`;
                        if (K == `摇钱树领次数🚩`) {
                            shzxurl = `https://ss.sohu.com/api/task/withdrawTaskReward`
                            shzxbody = `{
    "timestamp": 1619574000809,
    "os": "2",
    "sourceType": 1,
    "appVersion": "5.2.3",
    "appName": "2",
    "taskId": 59,
   "userId": "${userid}",
    "token": "${token}",
    "did": "${did}",
    "activityId": 4,
    "activityType": 1
}`
                            await taskpost();
                            $.lqcs = DATA;
                            if ($.lqcs.code == 0) {
                                console.log(`摇钱树领次数：抽奖次数+1\n`)
                                $.message += `【摇钱树领次数】：抽奖次数+1\n`;
                            }
                        }
                    }
                }
                if (lqinfo) {
                    for (let i = 0; i < 3; i++) {
                        taskId = [58, 60, 62]
                        K = `摇钱树领次数🚩`;
                        if (K == `摇钱树领次数🚩`) {
                            shzxurl = `https://ss.sohu.com/api/task/withdrawTaskReward`
                            shzxbody = `{
    "timestamp": 1619574000809,
    "os": "2",
    "sourceType": 1,
    "appVersion": "5.2.3",
    "appName": "2",
    "taskId": ${taskId[i]},
   "userId": "${userid}",
    "token": "${token}",
    "did": "${did}",
    "activityId": 4,
    "activityType": 1
}`
                            await taskpost();
                            $.lqcs = DATA;
                            if ($.lqcs.code == 0) {
                                console.log(`摇钱树领次数：抽奖次数+1\n`)
                                $.message += `【摇钱树领次数】：抽奖次数+1\n`;
                            }
                        }
                    }
                }
                K = `摇钱树次数🚩`;
                if (K == `摇钱树次数🚩`) {
                    shzxurl = `https://ss.sohu.com/api/task/activity/lottery/getUserInfo`
                    shzxbody = `{
        "appVersion": "5.2.2",
         "userId": "${userid}",
        "did": "${did}",
        "os": "2",
        "timestamp": ${Date.now()},
       "token": "${token}",
        "sourceType": "1",
       "activityId": 4,
        "activityType": 1,
        "appName": "2"
    }`
                    await taskpost();
                    $.lottery = DATA;
                    if ($.lottery.code == 0) {
                        console.log(`摇钱树次数：剩余${$.lottery.data.chance}次\n`)
                        $.message += `【摇钱树次数】：剩余${$.lottery.data.chance}次\n`;
                    }
                }
                if ($.lottery && $.lottery.data.chance > 0) {
                    for (let i = 0; i < $.lottery.data.chance; i++) {
                        K = `摇钱树抽奖🚩`;
                        if (K == `摇钱树抽奖🚩`) {
                            await $.wait(3000)
                            shzxurl = `https://ss.sohu.com/api/task/activity/lottery/do`
                            shzxbody = `{
     "timestamp": ${Date.now()},
    "os": "2",
    "sourceType": 1,
    "appVersion": "5.2.3",
    "appName": "2",
    "userId": "${userid}",
    "token": "${token}",
    "did": "${did}",
    "activityId": 4,
    "activityType": 1
}`
                            await taskpost();
                            $.yqscj = DATA;
                            if ($.yqscj.code == 0) {
                                console.log(`摇钱树抽奖：${$.yqscj.data.title}，抽中${$.yqscj.data.rewardName}，剩余${$.yqscj.data.chance}次\n`)
                                $.message += `【摇钱树抽奖】：${$.yqscj.data.title}，抽中${$.yqscj.data.rewardName}，剩余${$.yqscj.data.chance}次\n`;
                            }
                        }
                    }
                }
                if ($.GetUserInfo.data.gold >= 10000 && nowTimes.getHours() >= 22) {
                    K = `兑换现金🚩`;
                    if (K == `兑换现金🚩`) {
                        shzxurl = `https://ss.sohu.com/api/point/exchangeCoinByUserId`
                        shzxheader = {
                            "Host": "ss.sohu.com",
                            "Content-Type": `application/json; charset=utf-8`,
                        };
                        shzxbody = `{
        "token": "${token}",
        "did": "${did}",
         "sourceType": "1",
        "appName": "2",
        "timestamp": ${Date.now()},
        "userId": "${userid}",
        "os": "2",
        "appVersion": "5.2.2"
    }`
                        await taskpost();
                        $.CoinByUserId = DATA;
                        if ($.CoinByUserId.code == 0) {
                            console.log(`兑换现金：成功兑换${$.CoinByUserId.data.money/100}元\n`)
                            $.message += `【兑换现金】：成功兑换${$.CoinByUserId.data.money/100}元\n`;
                        }
                    }
                }
                K = `种红包首页🚩`;
                if (K == `种红包首页🚩`) {
                    shzxurl = `https://activity.tuirabbit.com/commercialloanv/plant/v5/initialize?timestamp=${Date.now()}&activityId=23241`
                    shzxheader = {
                        'Cookie': `_coll_device=${userid};tokenId=${token};appKey=3s86t5oPaPHkcugRVWQPWUdzjo5C`,
                        'Content-Type': `application/json`,
                        'Host': `activity.tuirabbit.com`
                    };
                    shzxbody = ""
                    await taskget();
                    $.zhbsy = DATA;
                    if ($.zhbsy.code == "0000000") {
                        seedType = $.zhbsy.data.seed.find(item => item.stock >= 1).seedType;
                        prop = $.zhbsy.data.land.find(item => item.landStatus == 1);
                        mission = $.zhbsy.data.mission.find(item => item.status == 1);
                        console.log(`种红包收益信息：余额${$.zhbsy.data.user.cash}狐币，已签到${$.zhbsy.data.user.signDays}天\n种红包解锁进度：${$.zhbsy.data.user.unlockLand}/${$.zhbsy.data.land.length},抽奖剩余次数${$.zhbsy.data.user.lotteryTimes}次\n`)
                        $.message += `【种红包收益信息】：余额${$.zhbsy.data.user.cash}狐币，已签到${$.zhbsy.data.user.signDays}天\n【种红包解锁进度】：${$.zhbsy.data.user.unlockLand}/${$.zhbsy.data.land.length},抽奖剩余次数${$.zhbsy.data.user.lotteryTimes}次\n`;
                        for (let i = 0; i < $.zhbsy.data.land.length; i++) {
                            if ($.zhbsy.data.land[i].seed) {
                                console.log(`种红包${i+1}号土地：种类${$.zhbsy.data.land[i].seed.seedType}，成熟还需${$.zhbsy.data.land[i].seed.matureCountdown}秒\n`)
                                $.message += `【种红包${i+1}号土地】：种类${$.zhbsy.data.land[i].seed.seedType}，成熟还需${$.zhbsy.data.land[i].seed.matureCountdown}秒\n`
                            }
                        }
                    }
                }
                if ($.zhbsy && $.zhbsy.data.user.lotteryTimes > 0) {
                    K = `种红包抽奖🚩`;
                    if (K == `种红包抽奖🚩`) {
                        shzxurl = `https://activity.tuirabbit.com/commercialloanv/plant/v5/turntableLottery`
                        shzxheader = {
                            'Cookie': `_coll_device=${userid};tokenId=${token};appKey=3s86t5oPaPHkcugRVWQPWUdzjo5C`,
                            'Content-Type': `application/json`,
                            'Host': `activity.tuirabbit.com`
                        };
                        shzxbody = `{
        "activityId": "23241",
        "slotId": "270319"
    }`
                        DD = RT(1000, 2000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await taskpost();
                        $.zhbcj = DATA;
                        if ($.zhbcj.code == "0000000") {
                            console.log(`种红包抽奖：成功,剩余${$.zhbcj.data.lotteryTimes}次\n`)
                            $.message += `【种红包抽奖】：成功,剩余${$.zhbcj.data.lotteryTimes}次\n`;
                        }
                    }
                }
                if (seedType) {
                    for (let i = 0; i < $.zhbsy.data.user.unlockLand; i++) {
                        if ($.zhbsy.data.land[i].unlock == true && !$.zhbsy.data.land[i].seed) {
                            landId = $.zhbsy.data.land[i].landId
                            K = `种红包🚩`;
                            if (K == `种红包🚩`) {
                                shzxurl = `https://activity.tuirabbit.com/commercialloanv/plant/v5/plant`
                                shzxheader = {
                                    'Cookie': `_coll_device=${userid};tokenId=${token};appKey=3s86t5oPaPHkcugRVWQPWUdzjo5C`,
                                    'Content-Type': `application/json`,
                                    'Host': `activity.tuirabbit.com`
                                };
                                shzxbody = `{
             "landId": ${landId},
              "seedType": ${seedType},
        "activityId": "23241",
        "slotId": "270319"
    }`
                                DD = RT(1000, 2000)
                                console.log(`随机延迟${DD/1000}秒`)
                                await $.wait(DD)
                                await taskpost();
                                $.zhbzhb = DATA;
                                if ($.zhbzhb.code == "0000000") {
                                    console.log(`种红包${$.zhbsy.data.land[i].landId}：成功\n`)
                                    $.message += `【种红包${$.zhbsy.data.land[i].landId}】：成功\n`;
                                }
                            }
                        }
                    }
                }
                for (let i = 0; i < $.zhbsy.data.user.unlockLand; i++) {
                    if ($.zhbsy.data.land[i].unlock == true && $.zhbsy.data.land[i].seed && $.zhbsy.data.land[i].seed.matureCountdown == 0) {
                        seedId = $.zhbsy.data.land[i].seed.id
                        K = `收红包🚩`;
                        if (K == `收红包🚩`) {
                            shzxurl = `https://activity.tuirabbit.com/commercialloanv/plant/v5/pick`
                            shzxheader = {
                                'Cookie': `_coll_device=${userid};tokenId=${token};appKey=3s86t5oPaPHkcugRVWQPWUdzjo5C`,
                                'Content-Type': `application/json`,
                                'Host': `activity.tuirabbit.com`
                            };
                            shzxbody = `{
              "seedId": ${seedId},
        "activityId": "23241",
        "slotId": "270319"
    }`
                            DD = RT(2000, 3000)
                            console.log(`随机延迟${DD/1000}秒`)
                            await $.wait(DD)
                            await taskpost();
                            $.shbshb = DATA;
                            if ($.shbshb.code == "0000000") {
                                console.log(`收红包${$.shbshb.data.land[i].landId}：获得${$.shbshb.data.prize.cash}狐币\n`)
                                $.message += `【收红包${$.shbshb.data.land[i].landId}】：获得${$.shbshb.data.prize.cash}狐币\n`;
                            }
                        }
                    }
                }
                if ($.zhbsy && prop && $.zhbsy.data.prop["0"] > 0) {
                    K = `种红包浇水🚩`;
                    if (K == `种红包浇水🚩`) {
                        shzxurl = `https://activity.tuirabbit.com/commercialloanv/plant/v5/useProp`
                        shzxheader = {
                            'Cookie': `_coll_device=${userid};tokenId=${token};appKey=3s86t5oPaPHkcugRVWQPWUdzjo5C`,
                            'Content-Type': `application/json`,
                            'Host': `activity.tuirabbit.com`
                        };
                        shzxbody = `{
              "landId": ${prop.landId},
               "propId": 0,
        "activityId": "23241",
        "slotId": "270319"
    }`
                        DD = RT(4000, 5000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await taskpost();
                        $.zhbjs = DATA;
                        if ($.zhbjs.code == "0000000") {
                            console.log(`种红包浇水：成功\n`)
                            $.message += `【种红包浇水】：成功\n`;
                        }
                    }
                }
                if ($.zhbsy && mission) {
                    K = `种红包任务🚩`;
                    if (K == `种红包任务🚩`) {
                        shzxurl = `https://activity.tuirabbit.com/commercialloanv/plant/v5/finishMission`
                        shzxheader = {
                            'Cookie': `_coll_device=${userid};tokenId=${token};appKey=3s86t5oPaPHkcugRVWQPWUdzjo5C`,
                            'Content-Type': `application/json`,
                            'Host': `activity.tuirabbit.com`
                        };
                        shzxbody = `{
              "missionId": ${mission.id},
        "activityId": "23241",
        "slotId": "270319"
    }`
                        await taskpost();
                        $.zhbrw = DATA;
                        if ($.zhbrw.code == "0000000") {
                            console.log(`种红包任务：${mission.desc}-${mission.prizeDesc}-完成，获得${$.shbshb.data.prize.cash}狐币\n`)
                            $.message += `【种红包任务】：${mission.desc}-${mission.prizeDesc}-完成，获得${$.shbshb.data.prize.cash}狐币\n`;
                        }
                    }
                }
                K = `养鸡账户信息🚩`;
                if (K == `养鸡账户信息🚩`) {
                    shzxurl = `https://ss.sohu.com/yc/getEnergyInfo`
                    shzxheader = {
                        "Host": "ss.sohu.com",
                        "Content-Type": `application/json`,
                    };
                    shzxbody = `{
     "uid": "${userid}",
      "timestamp": ${Date.now()},
     "source": 1,
     "appVersion": "5.2.3",
     "os": "2",
     "activityId": 1
 }`
                    await taskpost();
                    $.yjzh = DATA;
                    if ($.yjzh.errorCode == 1000) {
                        if ($.yjzh.data.isConsume == 1) {
                            console.log(`养鸡进食：剩余${$.yjzh.data.consumeTiming/1000}秒\n`)
                            $.message += `【养鸡进食】：剩余${$.yjzh.data.consumeTiming/1000}秒\n`;
                        }
                        console.log(`养鸡账户信息：鸡蛋进度${$.yjzh.data.hadReceiveNum}/${$.yjzh.data.stageNum}\n养鸡生产进度：${$.yjzh.data.hadGainEnergy*100/$.yjzh.data.needTotalEnergy}/100\n养鸡饲料信息：今日消耗${$.yjzh.data.todayTotalConsume}克，饲料剩余${$.yjzh.data.energy}克\n`)
                        $.message += `【养鸡账户信息】：鸡蛋进度${$.yjzh.data.hadReceiveNum}/${$.yjzh.data.stageNum}\n【养鸡生产进度】：${$.yjzh.data.hadGainEnergy*100/$.yjzh.data.needTotalEnergy}/100\n【养鸡饲料信息】：今日消耗${$.yjzh.data.todayTotalConsume}克，饲料剩余${$.yjzh.data.energy}克\n`;
                    }
                }
                K = `养鸡签到列表🚩`;
                if (K == `养鸡签到列表🚩`) {
                    shzxurl = `https://ss.sohu.com/yc/v2/signList`
                    shzxheader = {
                        "Host": "ss.sohu.com",
                        "Content-Type": `application/json`,
                    };
                    shzxbody = `{
     "uid": "${userid}",
      "timestamp": ${Date.now()},
     "source": 1,
     "appVersion": "5.2.3",
     "os": "2",
     "activityId": 1
 }`
                    await taskpost();
                    $.yjqdlist = DATA;
                    if ($.yjqdlist.errorCode == 1000) {
                        yjqdsinfo = $.yjqdlist.data.signList.find(item => item.btnStatus == 2);
                        yjqdinfo = $.yjqdlist.data.signList.find(item => item.btnStatus == 0);
                        if ($.yjqdlist.data.isTodaySign == 1) {
                            console.log(`养鸡签到列表：今日已签到\n`)
                            $.message += `【养鸡签到列表】：今日已签到\n`;
                        }
                    }
                }
                if (yjqdinfo) {
                    signId = yjqdinfo.id
                    K = `养鸡签到🚩`;
                    if (K == `养鸡签到🚩`) {
                        shzxurl = `https://ss.sohu.com/yc/v2/signIn`
                        shzxheader = {
                            "Host": "ss.sohu.com",
                            "Content-Type": `application/json`,
                        };
                        shzxbody = `{
     "uid": "${userid}",
      "timestamp": ${Date.now()},
     "source": 1,
     "appVersion": "5.2.3",
     "os": "2",
     "activityId": 1,
     "signId":${signId}
 }`
                        await taskpost();
                        $.yjqd = JSON.parse(data);
                        if ($.yjqd.errorCode == 1000) {
                            console.log(`养鸡签到：${$.yjqd.data.title}${$.yjqd.data.text}\n`)
                            $.message += `【养鸡签到】：${$.yjqd.data.title}${$.yjqd.data.text}\n`;
                        }
                    }
                }
                if (yjqdsinfo) {
                    signId = yjqdsinfo.id
                    K = `养鸡补签🚩`;
                    if (K == `养鸡补签🚩`) {
                        shzxurl = `https://ss.sohu.com/yc/v2/signIn`
                        shzxheader = {
                            "Host": "ss.sohu.com",
                            "Content-Type": `application/json`,
                        };
                        shzxbody = `{
     "uid": "${userid}",
      "timestamp": ${Date.now()},
     "source": 1,
     "appVersion": "5.2.3",
     "os": "2",
     "activityId": 1,
     "signId":${signId}
 }`
                        await taskpost();
                        $.yjbq = DATA;
                        if ($.yjbq.errorCode == 1000) {
                            console.log(`养鸡补签：${$.yjbq.data.title}${$.yjbq.data.text}\n`)
                            $.message += `【养鸡补签】：${$.yjbq.data.title}${$.yjbq.data.text}\n`;
                        }
                    }
                }
                K = `养鸡道具信息🚩`;
                if (K == `养鸡道具信息🚩`) {
                    shzxurl = `https://ss.sohu.com/yc/v2/propList`
                    shzxheader = {
                        "Host": "ss.sohu.com",
                        "Content-Type": `application/json`,
                    };
                    shzxbody = `{
     "uid": "${userid}",
      "timestamp": ${Date.now()},
     "source": 1,
     "appVersion": "5.2.3",
     "os": "2",
     "activityId": 1
 }`
                    await taskpost();
                    $.yjdj = DATA;
                    if ($.yjdj.errorCode == 1000) {
                        console.log(`养鸡加速卡：${$.yjdj.data.propList[0].num}张\n`)
                        $.message += `【养鸡加速卡】：${$.yjdj.data.propList[0].num}张\n`;
                    }
                }
                K = `养鸡任务列表🚩`;
                if (K == `养鸡任务列表🚩`) {
                    shzxurl = `https://ss.sohu.com/yc/allTask`
                    shzxheader = {
                        "Host": "ss.sohu.com",
                        "Content-Type": `application/json`,
                    };
                    shzxbody = `{
     "uid": "${userid}",
      "timestamp": ${Date.now()},
     "source": 1,
     "appVersion": "5.2.3",
     "os": "2",
     "activityId": 1
 }`
                    await taskpost();
                    $.yjrw = DATA;
                    if ($.yjrw.errorCode == 1000) {
                        yjrwinfo = $.yjrw.data.taskList.find(item => item.status == 1);
                        for (let i = 0; i < $.yjrw.data.taskList.length; i++) {
                            console.log(`${$.yjrw.data.taskList[i].name}：${$.yjrw.data.taskList[i].buttonText}\n`)
                            //$.message += `【${$.yjrw.data.taskList[i].name}】：${$.yjrw.data.taskList[i].buttonText}\n`;
                        }
                    }
                }
                if ($.yjrw && yjrwinfo) {
                    K = `养鸡领饲料🚩`;
                    if (K == `养鸡领饲料🚩`) {
                        taskId = yjrwinfo.taskId
                        shzxurl = `https://ss.sohu.com/yc/receiveEnergy`
                        shzxheader = {
                            "Host": "ss.sohu.com",
                            "Content-Type": `application/json`,
                        };
                        shzxbody = `{
     "uid": "${userid}",
      "timestamp": ${Date.now()},
     "source": 1,
     "appVersion": "5.2.3",
     "os": "2",
     "activityId": 1,
     "taskId": ${taskId}
 }`
                        await taskpost();
                        $.yjlsl = DATA;
                        if ($.yjlsl.errorCode == 1000) {
                            console.log(`养鸡领饲料：${yjrwinfo.name}完成，成功领取${$.yjlsl.data.energy}克饲料\n`)
                            $.message += `【养鸡领饲料】：${yjrwinfo.name}完成，成功领取${$.yjlsl.data.energy}克饲料\n`;
                        }
                    }
                }
                K = `养鸡抽奖次数🚩`;
                if (K == `养鸡抽奖次数🚩`) {
                    shzxurl = `https://ss.sohu.com/yc/zp/userInfo`
                    shzxheader = {
                        "Host": "ss.sohu.com",
                        "Content-Type": `application/json`,
                    };
                    shzxbody = `{
     "uid": "${userid}",
      "timestamp": ${Date.now()},
     "source": 1,
     "appVersion": "5.2.3",
     "os": "2",
    "activityId": 1,
    "lotteryId": 1
 }`
                    await taskpost();
                    $.yjcjcs = DATA;
                    if ($.yjcjcs.errorCode == 1000) {
                        console.log(`养鸡抽奖次数：剩余${$.yjcjcs.data.chance}次\n`)
                        $.message += `【养鸡抽奖次数】：剩余${$.yjcjcs.data.chance}次\n`;
                    }
                }
                if ($.yjcjcs.data.chance > 0) {
                    K = `养鸡抽奖🚩`;
                    if (K == `养鸡抽奖🚩`) {
                        shzxurl = `https://ss.sohu.com/yc/zp/lottery`
                        shzxheader = {
                            "Host": "ss.sohu.com",
                            "Content-Type": `application/json`,
                        };
                        shzxbody = `{
     "uid": "${userid}",
      "timestamp": ${Date.now()},
     "source": 1,
     "appVersion": "5.2.3",
     "os": "2",
    "lotteryId": 1
 }`
                        await taskpost();
                        $.yjcj = DATA;
                        if ($.yjcj.errorCode == 1000) {
                            console.log(`养鸡抽奖：抽中${$.yjcj.data.subTitle}\n`)
                            $.message += `【养鸡抽奖】：抽中${$.yjcj.data.subTitle}\n`;
                        }
                    }
                }
                if ($.yjzh.data.isConsume == 0 && $.yjzh.data.energy >= 30) {
                    K = `养鸡喂鸡🚩`;
                    if (K == `养鸡喂鸡🚩`) {
                        shzxurl = `https://ss.sohu.com/yc/consumeEnergy`
                        shzxheader = {
                            "Host": "ss.sohu.com",
                            "Content-Type": `application/json`,
                        };
                        shzxbody = `{
     "uid": "${userid}",
      "timestamp": ${Date.now()},
     "source": 1,
     "appVersion": "5.2.3",
     "os": "2",
     "activityId": 1
 }`
                        await taskpost();
                        $.yjwj = DATA;
                        if ($.yjwj.errorCode == 1000) {
                            console.log(`养鸡喂鸡：喂鸡成功，消耗${$.yjwj.data.consumeEnergy}克饲料\n`)
                            $.message += `【养鸡喂鸡】：喂鸡成功，消耗${$.yjwj.data.consumeEnergy}克饲料\n`;
                        }
                    }
                }
                if ($.yjzh && $.yjzh.data.unReceiveNum > 0) {
                    K = `养鸡收取鸡蛋🚩`;
                    if (K == `养鸡收取鸡蛋🚩`) {
                        shzxurl = `https://ss.sohu.com/yc/receiveResult`
                        shzxheader = {
                            "Host": "ss.sohu.com",
                            "Content-Type": `application/json`,
                        };
                        shzxbody = `{
     "uid": "${userid}",
      "timestamp": ${Date.now()},
     "source": 1,
     "appVersion": "5.2.3",
     "os": "2",
     "activityId": 1
 }`
                        await taskpost();
                        $.yjsqjd = DATA;
                        if ($.yjsqjd.errorCode == 1000) {
                            console.log(`养鸡收取鸡蛋：收取鸡蛋成功，合计${$.yjsqjd.data.hadReceiveNum}个鸡蛋\n`)
                            $.message += `【养鸡收取鸡蛋】：收取鸡蛋成功，合计${$.yjsqjd.data.hadReceiveNum}个鸡蛋\n`;
                        }
                    }
                }
                if ($.yjzh && $.yjzh.data.unReceiveNum > 0) {
                    K = `养鸡收取鸡蛋🚩`;
                    if (K == `养鸡收取鸡蛋🚩`) {
                        shzxurl = `https://ss.sohu.com/yc/receiveResult`
                        shzxheader = {
                            "Host": "ss.sohu.com",
                            "Content-Type": `application/json`,
                        };
                        shzxbody = `{
     "uid": "${userid}",
      "timestamp": ${Date.now()},
     "source": 1,
     "appVersion": "5.2.3",
     "os": "2",
     "activityId": 1
 }`
                        await taskpost();
                        $.yjsqjd = DATA;
                        if ($.yjsqjd.errorCode == 1000) {
                            console.log(`养鸡收取鸡蛋：收取鸡蛋成功，合计${$.yjsqjd.data.hadReceiveNum}个鸡蛋\n`)
                            $.message += `【养鸡收取鸡蛋】：收取鸡蛋成功，合计${$.yjsqjd.data.hadReceiveNum}个鸡蛋\n`;
                        }
                    }
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
        if (notifyInterval == 2 && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= Minutes)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 3 && (nowTimes.getHours() === 6 || nowTimes.getHours() === 12 || nowTimes.getHours() === 18 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= Minutes)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyttt == 1 && $.isNode() && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= Minutes))
            await notify.sendNotify($.name, $.message);
        resolve()
    })
}
//运行模块
function taskpost() {
    return new Promise(async resolve => {
        let url = {
            url: `${shzxurl}`,
            headers: shzxheader,
            body: `${shzxbody}`,
        }
        $.post(url, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网络重试`)
                } else {
                    if (data) {
                        if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                        DATA = JSON.parse(data);
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
//运行模块
function taskget() {
    return new Promise(async resolve => {
        let url = {
            url: `${shzxurl}`,
            headers: shzxheader
        }
        $.get(url, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网络重试`)
                } else {
                    if (data) {
                        if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                        DATA = JSON.parse(data);
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
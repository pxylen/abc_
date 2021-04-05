/* ziye 
github地址 https: //github.com/ziye888
TG频道地址 https: //t.me/ziyescript
TG交流群 https: //t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接 https: //cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/ziye.boxjs.json
圈X task订阅 https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/ziye-gallery.json

转载请备注个名字，谢谢

⚠️多多爱运动    需要 微信号和手机号    收益不明 
  
>>点击  http://tt2.tiantianzf.cn/download.html?channelCode=100&channelId=10000&inviteUniqueId=4B4WrVRl&inviteSource=0  下载APP  邀请码 4B4WrVRl  谢谢支持

4.3 制作
4.5 完成
4.5.10 修复错误

⚠️ 时间设置   30 * * * *    每小时 1次 
⚠️一共  1个ck  👉 1条 Secrets

⚠️必须先手动完成新手任务

无需获取ck  进入我的  复制邀请码填写进boxjs 

ac 填写进 环境变量 DDAYD_ddaydCK (多账号请换行)

v2p 进手机boxjs----复制会话，再导入，或者直接填写

云函数 进手机boxjs-----复制会话，再粘贴进ddaydCOOKIE.js



*/

GXRZ = '4.5.10 修复错误'
const $ = Env("多多爱运动");
$.idx = ($.idx = ($.getval('ddaydSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./ddaydCOOKIE") : ``;
const logs = 0; // 0为关闭日志，1为开启
const notifyttt = 1 // 0为关闭外部推送，1为12 23 点外部推送
const notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
$.message = '', COOKIES_SPLIT = '', CASH = '', XH = 0, Length = 0, ddtime = '';

let ddaydckArr = [];
let ddaydckVal = ``;
let middleddaydCK = [];


if ($.isNode() && process.env.DDAYD_ddaydCK) {
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );

    if (
        process.env.DDAYD_ddaydCK &&
        process.env.DDAYD_ddaydCK.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleddaydCK = process.env.DDAYD_ddaydCK.split(COOKIES_SPLIT);
    } else {
        middleddaydCK = process.env.DDAYD_ddaydCK.split();
    }
    Object.keys(middleddaydCK).forEach((item) => {
        if (middleddaydCK[item]) {
            ddaydckArr.push(middleddaydCK[item]);
        }
    });

} else if ($.isNode() && COOKIE.datas && COOKIE.datas[0].val != '') {
    console.log(
        `============ cookie方式为：boxjs复制会话 =============\n`
    );
    XH = (COOKIE.settings.find(item => item.id === `ddaydXH`)).val;
    ddaydCount = (COOKIE.settings.find(item => item.id === `ddaydCount`)).val || '1';
    for (let i = 1; i <= ddaydCount; i++) {
        if (i == 1) {
            op = ``
        } else {
            op = i
        }
        if (COOKIE.datas.find(item => item.key === `ddaydck${op}`)) {

            ddaydckArr.push(COOKIE.datas.find(item => item.key === `ddaydck${op}`).val);

        }
    }
} else {
    if ("ddaydXH") {
        XH = $.getval("ddaydXH") || '0';
    }
    let ddaydCount = ($.getval('ddaydCount') || '1') - 0;
    for (let i = 1; i <= ddaydCount; i++) {
        if (i == 1) {
            op = ``
        } else {
            op = i
        }
        if ($.getdata(`ddaydck${op}`)) {

            ddaydckArr.push($.getdata(`ddaydck${op}`));

        }
    }
}

function GetCookie() {

    //获取用户名
    if ($request && $request.url.indexOf("getUserInfo") >= 0) {
        const ddaydckVal = JSON.stringify($request.cks);
        if (ddaydckVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    cks = $.getdata('ddaydck' + $.idx);
                    if (cks) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(ddaydckVal, "ddaydck" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取用户名ddaydckVal✅: 成功,ddaydckVal: "${ddaydckVal}"`
                        );
                        $.msg($.name + $.idx, `获取用户名ddaydckVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(ddaydckVal, "ddaydck" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取用户名ddaydckVal✅: 成功,ddaydckVal: "${ddaydckVal}"`
                );
                $.msg($.name + $.idx, `获取用户名ddaydckVal: 成功🎉`, ``);
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
    `============ 共 ${ddaydckArr.length} 个${$.name}账号=============\n`
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
    if (!ddaydckArr || ddaydckArr == '') {
        $.msg(
            $.name,
            '提示：⚠️请>>点击前往获取cookie http://tt2.tiantianzf.cn/download.html?channelCode=100&channelId=10000&inviteUniqueId=4B4WrVRl&inviteSource=0\n',
            'http://tt2.tiantianzf.cn/download.html?channelCode=100&channelId=10000&inviteUniqueId=4B4WrVRl&inviteSource=0', {
                "open-url": "http://tt2.tiantianzf.cn/download.html?channelCode=100&channelId=10000&inviteUniqueId=4B4WrVRl&inviteSource=0"
            }
        );
        return;
    } else {
        for (let i = 0; i < ddaydckArr.length; i++) {

            ddaydckVal = ddaydckArr[i];

            $.index = i + 1;
            O = (`${$.name + $.index}🔔`);
            ddaydck = {
                'nonce': `K870Z0N9R311AT4`,
                'uniqueId': `"${ddaydckVal}"`,
                'Content-Type': `application/json`,
                'checkSum': `dc2226ac21c2d7baba1cd13bf18e4800c3353357`,
                'appHeader': `{"mobileType":"0","mobileMode":"iPhone8Plus","mobileSys":"14.2","mobileCode":"","appVersion":"1.1.8","channelId":"10000"}`,
                'Host': `ddaydshuibaojk.tiantianzf.cn`,
                'appKey': `5f025149db9f2706`,
                'curTime': `1614684045`,
            };

            $.isLogin = true;

            if (ddaydckVal && ddaydckVal != '') {
                console.log(`-----------------\n\n🔔开始运行【${$.name + $.index}】`)

                K = `用户名🚩`;
                ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/user/getUserInfo`
                ddaydbody = `{"uniqueId":"${ddaydckVal}"}`
                await task();
                if (!$.isLogin) {
                    $.msg(O, time(Number(Date.now())) + `⚠️COOKIE失效,\n请>>点击前往获取http://tt2.tiantianzf.cn/download.html?channelCode=100&channelId=10000&inviteUniqueId=4B4WrVRl&inviteSource=0`, {
                        "open-url": "http://tt2.tiantianzf.cn/download.html?channelCode=100&channelId=10000&inviteUniqueId=4B4WrVRl&inviteSource=0"
                    });
                    if ($.isNode()) {
                        await notify.sendNotify(O, time(Number(Date.now())) + `⚠️COOKIE失效,\n请>>点击前往获取http://tt2.tiantianzf.cn/download.html?channelCode=100&channelId=10000&inviteUniqueId=4B4WrVRl&inviteSource=0`);
                    }
                    continue
                }

                if ($.user.data.accountBalance == 0) {
                    $.msg(O, time(Number(Date.now())) + `⚠️请先手动完成新手任务,\n>>点击前往http://tt2.tiantianzf.cn/download.html?channelCode=100&channelId=10000&inviteUniqueId=4B4WrVRl&inviteSource=0`, {
                        "open-url": "http://tt2.tiantianzf.cn/download.html?channelCode=100&channelId=10000&inviteUniqueId=4B4WrVRl&inviteSource=0"
                    });
                    if ($.isNode()) {
                        await notify.sendNotify(O, time(Number(Date.now())) + `⚠️请先手动完成新手任务,\n>>点击前往http://tt2.tiantianzf.cn/download.html?channelCode=100&channelId=10000&inviteUniqueId=4B4WrVRl&inviteSource=0`);
                    }
                    continue
                }

                K = `能量页🚩`;
                ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/user/getCurEnergyInfo`
                await task()

                K = `收能量🚩`;
                ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/user/collectEnergy`
                for (let i = 1; i < 6; i++) {
                    is = i
                    if ($.energy && $.energy.data.smallEnergy.takedCount == 0) {
                        ddaydbody = `{"busType":1,"number":${i},"uniqueId":"${ddaydckVal}"}`
                        DD = RT(2000, 3000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task()
                    }
                    if ($.energy && $.energy.data.bigEnergy.takedCount == 0) {
                        ddaydbody = `{"busType":2,"number":${i},"uniqueId":"${ddaydckVal}"}`
                        DD = RT(20000, 30000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task()
                    }

                }


                K = `打卡页🚩`;
                ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/task/getUserClockTaskInfo`
                await task()
                if ($.energy && $.energy.data.energyBalance >= 2000 && $.dky&& $.dky.data.clockTaskInfo[0].completeCount == 0) {

                    K = `打卡🚩`;
                    ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/task/completeWxTask`
                    for (let i = 5; i < 7; i++) {
                        is = i
                        ddaydbody = `{"busType":${i},"uniqueId":"${ddaydckVal}"}`
                        DD = RT(2000, 3000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task()

                    }

                }


                K = `小额提现页🚩`;
                ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/withdrawCard/getWithdrawCard`
                await task()

                for (let i = 1; i < 4; i++) {
                    is = i

                    if (ss.cardStatus == 0 && qs.cardStatus == 0 && bs.cardStatus == 0) {

                        K = `抽取提现卡🚩`;
                        ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/withdrawCard/joinActivity`
                        ddaydbody = `{"cardId":${i},"uniqueId":"${ddaydckVal}"}`
                        DD = RT(20000, 30000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task()

                        K = `概率提高🚩`;
                        ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/withdrawCard/raiseProbability`
                        DD = RT(20000, 30000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task()

                    }

                }

                K = `提现卡页🚩`;
                ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/withdrawCard/getWinInfo`
                ddaydbody = `{"uniqueId":"${ddaydckVal}"}`
                await task()


                K = `分红页🚩`;
                ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/lucky/getLuckyCharmHomePageProgress`
                await task()


                K = `福卡页🚩`;
                ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/blessCard/getBlessCardConfig`
                await task()

                if ($.fky && $.fky.data.applyStatus == 0) {

                    K = `报名福卡🚩`;
                    ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/blessCard/applayActivity`
                    await task()

                } else {
                    if ($.fky && $.fky.data.blessBallInfo[5].blessBallStatus == 0) {
                        K = `抽福卡🚩`;
                        ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/blessCard/openBall`
                        for (let i = 1; i < 7; i++) {
                            is = i
                            ddaydbody = `{"blessBallId":${i},"uniqueId":"${ddaydckVal}"}`
                            DD = RT(20000, 30000)
                            console.log(`随机延迟${DD/1000}秒`)
                            await $.wait(DD)
                            await task()
                        }
                    }
                    if ($.fky && $.fky.data.shareStatus == 0) {

                        K = `分享得福卡🚩`;
                        ddaydbody = `{"uniqueId":"${ddaydckVal}"}`
                        ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/blessCard/shareOpenCard`
                        DD = RT(2000, 3000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task()
                    }


                    if ($.fky && $.fky.data.inviteCardNum >= 1) {

                        K = `开邀请福卡🚩`;
                        ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/blessCard/inviteOpenCard`
                        DD = RT(2000, 3000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task()

                    }
                }


                K = `抽奖页🚩`;
                ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/luckyDraw/getLuckyDrawConfigInfo`
                await task()


                if ($.cjy && $.cjy.data.drawNum >= 1) {
                    K = `抽奖🚩`;
                    ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/luckyDraw/getLuckyDrawResult`
                    DD = RT(2000, 3000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }


                K = `任务页🚩`;
                ddaydbody = `{"uniqueId":"${ddaydckVal}"}`
                ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/task/getMakeMoneyTaskInfo`
                await task()

                ddaydurl = `https://ddaydshuibaojk.tiantianzf.cn/task/completeWxTask`
                if (xzrw && xzrw.completeCount == 0) {
                    K = `下载任务🚩`;
                    ddaydbody = `{"busType":10,"uniqueId":"${ddaydckVal}"}`
                    DD = RT(2000, 3000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }

                if (yqrw && yqrw.completeCount < 5) {
                    K = `邀请任务🚩`;
                    ddaydbody = `{"busType":3,"uniqueId":"${ddaydckVal}"}`
                    DD = RT(2000, 3000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }
                if (pyqrw && pyqrw.completeCount == 0) {
                    K = `朋友圈任务🚩`;
                    ddaydbody = `{"busType":1,"uniqueId":"${ddaydckVal}"}`
                    DD = RT(2000, 3000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task()
                }
                if (wxqrw && wxqrw.completeCount == 0) {
                    K = `微信群任务🚩`;
                    ddaydbody = `{"busType":2,"uniqueId":"${ddaydckVal}"}`
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
            url: `${ddaydurl}`,
            headers: ddaydck,
            body: `${ddaydbody}`,
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
                            if ($.user.head.code == 200) {

                                console.log(`\n${O}\n========== ${$.user.data.nickName} ==========\n账户余额：${($.user.data.accountBalance/1000).toFixed(2)}\n`)
                                $.message += `\n${O}\n========== 【${$.user.data.nickName}】 ==========\n【账户余额】：${($.user.data.accountBalance/1000).toFixed(2)}\n`;
                            } else {
                                $.isLogin = false; //cookie过期
                                return
                            }
                        }


                        if (K == `能量页🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.energy = JSON.parse(data);
                            if ($.energy.head.code == 200) {

                                console.log(`能量页：当前剩余${$.energy.data.energyBalance}能量\n小能量：本场已收取${$.energy.data.smallEnergy.takedCount*50}，下次刷新${time($.energy.data.smallEnergy.nextRefreshTime)}\n大能量：本场已收取${$.energy.data.bigEnergy.takedCount*150}，下次刷新${time($.energy.data.bigEnergy.nextRefreshTime)}\n`)
                                $.message += `【能量页】：当前剩余${$.energy.data.energyBalance}能量\n【小能量】：本场已收取${$.energy.data.smallEnergy.takedCount*50}，下次刷新${time($.energy.data.smallEnergy.nextRefreshTime)}\n【大能量】：本场已收取${$.energy.data.bigEnergy.takedCount*150}，下次刷新${time($.energy.data.bigEnergy.nextRefreshTime)}\n`;
                            }
                        }


                        if (K == `收能量🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.sqenergy = JSON.parse(data);
                            if ($.sqenergy.head.code == 200) {
                                console.log(`收能量${is}：${$.sqenergy.head.msg}，当前剩余${$.sqenergy.data.energyBalance}能量\n`)
                                $.message += `【收能量${is}】：${$.sqenergy.head.msg}，当前剩余${$.sqenergy.data.energyBalance}能量\n`;
                            }
                        }

                        if (K == `打卡页🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.dky = JSON.parse(data);
                            if ($.dky.head.code == 200) {

                                if ($.dky.data.clockTaskInfo[0].completeCount == 1 && $.dky.data.clockTaskInfo[1].completeCount == 1) {
                                    console.log(`打卡页：${$.dky.data.clockTaskInfo[0].taskOverview}-已完成，${$.dky.data.clockTaskInfo[1].taskOverview}-已完成\n`)
                                    $.message += `【打卡页】：${$.dky.data.clockTaskInfo[0].taskOverview}-已完成，${$.dky.data.clockTaskInfo[1].taskOverview}-已完成\n`;
                                } else {
                                    console.log(`打卡页：${$.dky.data.clockTaskInfo[0].taskOverview},${$.dky.data.clockTaskInfo[1].taskOverview}\n`)
                                    $.message += `【打卡页】：${$.dky.data.clockTaskInfo[0].taskOverview},${$.dky.data.clockTaskInfo[1].taskOverview}\n`;
                                }
                            }
                        }

                        if (K == `打卡🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.dk = JSON.parse(data);
                            if ($.dk.head.code == 200) {

                                console.log(`${$.dky.data.clockTaskInfo[is-5].taskOverview}：${$.dk.head.msg}，获得${$.dk.data.changeAmount/1000}元\n`)
                                $.message += `【${$.dky.data.clockTaskInfo[is-5].taskOverview}】：${$.dk.head.msg}，获得${$.dk.data.changeAmount/1000}元\n`;

                            }
                        }


                        if (K == `小额提现页🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.xetxy = JSON.parse(data);
                            if ($.xetxy.head.code == 200) {

                                ss = $.xetxy.data.withdrawCardInfo.find(item => item.cardMoney == 30000);
                                qs = $.xetxy.data.withdrawCardInfo.find(item => item.cardMoney == 70000);
                                bs = $.xetxy.data.withdrawCardInfo.find(item => item.cardMoney == 80000);
                                if (ss.cardStatus == 0 && qs.cardStatus == 0 && bs.cardStatus == 0) {
                                    console.log(`${ss.cardName}：中奖率${ss.cardProbability}\n${qs.cardName}：中奖率${qs.cardProbability}\n${bs.cardName}：中奖率${bs.cardProbability}\n`)
                                    $.message += `【${ss.cardName}】：中奖率${ss.cardProbability}\n【${qs.cardName}】：中奖率${qs.cardProbability}\n【${bs.cardName}】：中奖率${bs.cardProbability}\n`;
                                } else {
                                    console.log(`${ss.cardName}：中奖率${ss.cardProbability}-已参加\n${qs.cardName}：中奖率${qs.cardProbability}-已参加\n${bs.cardName}：中奖率${bs.cardProbability}-已参加\n`)
                                    $.message += `【${ss.cardName}】：中奖率${ss.cardProbability}-已参加\n【${qs.cardName}】：中奖率${qs.cardProbability}-已参加\n【${bs.cardName}】：中奖率${bs.cardProbability}-已参加\n`;
                                }
                            }
                        }


                        if (K == `抽取提现卡🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cqtxk = JSON.parse(data);
                            if ($.cqtxk.head.code == 200) {

                                console.log(`${$.xetxy.data.withdrawCardInfo[is-1].cardName}：参加${$.cqtxk.head.msg}，当前概率${$.cqtxk.data.withdrawCardInfo[is-1].cardProbability}\n`)
                                $.message += `【${$.xetxy.data.withdrawCardInfo[is-1].cardName}】：参加${$.cqtxk.head.msg}，当前概率${$.cqtxk.data.withdrawCardInfo[is-1].cardProbability}\n`;

                            }
                        }

                        if (K == `概率提高🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.gltg = JSON.parse(data);
                            if ($.gltg.head.code == 200) {

                                console.log(`${$.xetxy.data.withdrawCardInfo[is-1].cardName}概率提高：${$.gltg.head.msg}，当前概率${$.gltg.data.withdrawCardInfo[is-1].cardProbability}\n`)
                                $.message += `【${$.xetxy.data.withdrawCardInfo[is-1].cardName}概率提高】：${$.gltg.head.msg}，当前概率${$.gltg.data.withdrawCardInfo[is-1].cardProbability}\n`;

                            }
                        }


                        if (K == `提现卡页🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.txky = JSON.parse(data);
                            if ($.txky.head.code == 200) {

                                if ($.txky.data && $.txky.data.winInfo) {
                                    for (let i = 0; i < $.txky.data.winInfo.length; i++) {
                                        console.log(`提现卡页：${$.txky.data.winInfo[i].cardMoney/1000}提现卡-id ${$.txky.data.winInfo[i].id}，获得时间${time($.txky.data.winInfo[i].winTime)}\n`)
                                        $.message += `【提现卡页】：${$.txky.data.winInfo[i].cardMoney/1000}提现卡-id ${$.txky.data.winInfo[i].id}，获得时间${time($.txky.data.winInfo[i].winTime)}\n`;
                                    }
                                } else {
                                    console.log(`提现卡页：无提现卡\n`)
                                    $.message += `【提现卡页】：无提现卡\n`;
                                }

                            }
                        }

                        if (K == `分红页🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.fhy = JSON.parse(data);
                            if ($.fhy.head.code == 200) {

                                console.log(`分红页：锦鲤总进度${$.fhy.data.userTotalLuckyCharmScore/100000000}%，直邀贡献${$.fhy.data.firstLevelSubUserCharmScore/100000000}%\n`)
                                $.message += `【分红页】：锦鲤总进度${$.fhy.data.userTotalLuckyCharmScore/100000000}%，直邀贡献${$.fhy.data.firstLevelSubUserCharmScore/100000000}%\n`;

                            }
                        }



                        if (K == `福卡页🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.fky = JSON.parse(data);
                            if ($.fky.head.code == 200 && $.fky.data.applyStatus == 1) {
                                fk = ``
                                for (let i = 0; i < $.fky.data.blessCardInfo.length; i++) {

                                    if ($.fky.data.blessCardInfo[i].cardNum >= 1) {
                                        fk += $.fky.data.blessCardInfo[i].cardName
                                    }

                                }
                                console.log(`福卡页：福卡进度 ${fk}，下次刷新${($.fky.data.nextRefreshTime/60).toFixed(2)}分钟后\n`)
                                $.message += `【福卡页】：福卡进度 ${fk}，下次刷新${($.fky.data.nextRefreshTime/60).toFixed(2)}分钟后\n`;
                            }
                        }


                        if (K == `报名福卡🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.bmfk = JSON.parse(data);
                            if ($.bmfk.head.code == 200) {

                                console.log(`报名福卡：${$.bmfk.head.msg}\n`)
                                $.message += `【报名福卡】：${$.bmfk.head.msg}\n`;

                            }
                        }

                        if (K == `抽福卡🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cfk = JSON.parse(data);
                            if ($.cfk.head.code == 200) {

                                if ($.cfk.data.winCardId >= 1) {

                                    console.log(`抽福卡${is}：成功获得 ${$.cfk.data.winCardName} 卡\n`)
                                    $.message += `【抽福卡${is}】：成功获得 ${$.cfk.data.winCardName} 卡\n`;
                                } else {

                                    console.log(`抽福卡${is}：未抽中\n`)
                                    $.message += `【抽福卡${is}】：未抽中\n`;
                                }
                            }
                        }
                        if (K == `分享得福卡🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.fxdfk = JSON.parse(data);
                            if ($.fxdfk.head.code == 200) {

                                if ($.fxdfk.data.winCardId >= 1) {

                                    console.log(`分享得福卡：成功获得 ${$.fxdfk.data.winCardName} 卡\n`)
                                    $.message += `【分享得福卡】：成功获得 ${$.fxdfk.data.winCardName} 卡\n`;
                                } else {

                                    console.log(`分享得福卡：未抽中\n`)
                                    $.message += `【分享得福卡】：未抽中\n`;
                                }

                            }
                        }


                        if (K == `开邀请福卡🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.kyqfk = JSON.parse(data);
                            if ($.kyqfk.head.code == 200) {

                                if ($.kyqfk.data.winCardId >= 1) {

                                    console.log(`开邀请福卡：成功获得 ${$.kyqfk.data.winCardName} 卡，剩余${$.kyqfk.data.inviteCardNum}次\n`)
                                    $.message += `【开邀请福卡】：成功获得 ${$.kyqfk.data.winCardName} 卡，剩余${$.kyqfk.data.inviteCardNum}次\n`;
                                } else {

                                    console.log(`开邀请福卡：未抽中\n`)
                                    $.message += `【开邀请福卡】：未抽中\n`;
                                }

                            }
                        }


                        if (K == `抽奖页🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cjy = JSON.parse(data);
                            if ($.cjy.head.code == 200) {

                                console.log(`抽奖页：剩余${$.cjy.data.drawNum}次抽奖\n`)
                                $.message += `【抽奖页】：剩余${$.cjy.data.drawNum}次抽奖\n`;

                            }
                        }



                        if (K == `抽奖🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.cj = JSON.parse(data);
                            if ($.cj.head.code == 200) {

                                console.log(`抽奖：成功抽中${$.cj.data.winCoin}元，预计3小时内到账微信\n`)
                                $.message += `【抽奖】：成功抽中${$.cj.data.winCoin}元，预计3小时内到账微信\n`;

                            }
                        }

                        if (K == `任务页🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.hdy = JSON.parse(data);
                            if ($.hdy.head.code == 200) {

                                xzrw = $.hdy.data.makeMoneyTaskInfo.commonTask.find(item => item.taskType == 10);
                                yqrw = $.hdy.data.makeMoneyTaskInfo.commonTask.find(item => item.taskType == 3);
                                pyqrw = $.hdy.data.makeMoneyTaskInfo.shareTask.find(item => item.taskType == 1);
                                wxqrw = $.hdy.data.makeMoneyTaskInfo.shareTask.find(item => item.taskType == 2);
                                for (let i = 0; i < $.hdy.data.makeMoneyTaskInfo.commonTask.length; i++) {

                                    console.log(`${$.hdy.data.makeMoneyTaskInfo.commonTask[i].taskTitle}：任务进度${$.hdy.data.makeMoneyTaskInfo.commonTask[i].completeCount}/${$.hdy.data.makeMoneyTaskInfo.commonTask[i].taskCompleteNum}\n`)
                                    $.message += `【${$.hdy.data.makeMoneyTaskInfo.commonTask[i].taskTitle}】：任务进度${$.hdy.data.makeMoneyTaskInfo.commonTask[i].completeCount}/${$.hdy.data.makeMoneyTaskInfo.commonTask[i].taskCompleteNum}\n`;
                                    console.log(`${$.hdy.data.makeMoneyTaskInfo.shareTask[i].taskTitle}：任务进度${$.hdy.data.makeMoneyTaskInfo.shareTask[i].completeCount}/${$.hdy.data.makeMoneyTaskInfo.shareTask[i].taskCompleteNum}\n`)
                                    $.message += `【${$.hdy.data.makeMoneyTaskInfo.shareTask[i].taskTitle}】：任务进度${$.hdy.data.makeMoneyTaskInfo.shareTask[i].completeCount}/${$.hdy.data.makeMoneyTaskInfo.shareTask[i].taskCompleteNum}\n`;
                                }
                            }
                        }



                        if (K == `下载任务🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.xz = JSON.parse(data);
                            if ($.xz.head.code == 200) {

                                console.log(`下载任务：获得${$.xz.data.changeAmount/1000}元，余额为${$.xz.data.accountBalance/1000}元\n`)
                                $.message += `【下载任务】：获得${$.xz.data.changeAmount/1000}元，余额为${$.xz.data.accountBalance/1000}元\n`;

                            }
                        }

                        if (K == `邀请任务🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.yq = JSON.parse(data);
                            if ($.yq.head.code == 200) {

                                console.log(`邀请任务：获得${$.yq.data.changeAmount/1000}元，余额为${$.yq.data.accountBalance/1000}元\n`)
                                $.message += `【邀请任务】：获得${$.yq.data.changeAmount/1000}元，余额为${$.yq.data.accountBalance/1000}元\n`;

                            }
                        }

                        if (K == `朋友圈任务🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.pyq = JSON.parse(data);
                            if ($.pyq.head.code == 200) {

                                console.log(`朋友圈任务：获得${$.pyq.data.changeAmount/1000}元，余额为${$.pyq.data.accountBalance/1000}元\n`)
                                $.message += `【朋友圈任务】：获得${$.pyq.data.changeAmount/1000}元，余额为${$.pyq.data.accountBalance/1000}元\n`;

                            }
                        }


                        if (K == `微信群任务🚩`) {

                            if (logs) $.log(`${O}, ${K}: ${decodeUnicode(data)}`);
                            $.wxq = JSON.parse(data);
                            if ($.wxq.head.code == 200) {

                                console.log(`微信群任务：获得${$.wxq.data.changeAmount/1000}元，余额为${$.wxq.data.accountBalance/1000}元\n`)
                                $.message += `【微信群任务】：获得${$.wxq.data.changeAmount/1000}元，余额为${$.wxq.data.accountBalance/1000}元\n`;

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
if ($.time('yyyy-MM-dd') === '2023-05-01') {
    $.msg($.name, '活动已结束', `请禁用或删除脚本`);
    return
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

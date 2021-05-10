/* ziye 
github地址 https://github.cn/ziye888
TG频道地址 https://t.me/ziyescript
TG交流群 https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接 https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/ziye.boxjs.json
圈X task订阅 https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/ziye-gallery.json
转载请备注个名字，谢谢

⚠️小芒    需要 微信 手机号   每天3次许愿

商店搜索 小芒
或者点击 https://apps.apple.com/cn/app/%E5%B0%8F%E8%8A%92/id1540247980  下载app

5.10 完成

⚠️每天运行一次就行 8 8 8 * * *
⚠️一共  1个ck  👉 1条 Secrets

手机端默认使用boxjs👉 node请复制boxjs会话粘贴至xmCOOKIE.js中 或者 填写环境变量(多账号请换行)

第一步⚠️添加 hostname =mgesq.api.mgtv.com,
进入软件 点击 我的 获取ck
xmurlVal👉XM_xmURL

⚠️主机名以及重写👇  一次只开一条重写
hostname =mgesq.api.mgtv.com,

//////////////////////////// 圈x
//小芒获取ck
https:\/\/mgesq\.api\.mgtv\.com\/user\/center? url script-request-header https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/xm.js
//////////////////////////// loon
//小芒获取ck
http-request https:\/\/mgesq\.api\.mgtv\.com\/user\/center? script-path=https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/xm.js, requires-header=true, tag=小芒获取ck
//////////////////////////// surge
//小芒获取ck
小芒获取ck = type=http-request,pattern=https:\/\/mgesq\.api\.mgtv\.com\/user\/center?,requires-header=1,max-size=0,script-path=https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/xm.js
*/

GXRZ = '5.10 完成'
const $ = Env("小芒");
$.idx = ($.idx = ($.getval('xmSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./xmCOOKIE") : ``;
const logs = 0; // 0关闭日志，1原始日志，2格式化，3格式化且解码，
notifyttt = 1; // 0为关闭外部推送，1为12 23 点外部推送
notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知 ，3为 6 12 18 23 点通知 
Minutes = 10; // 通知 默认控制在0-10分内
K = '', $.message = '', COOKIES_SPLIT = '', CASH = '', XH = 0, XYZ = 100, Length = 0, ddtime = '';
let xmurlArr = [];
let xmurlVal = ``;
let middlexmURL = [];
if ($.isNode() && process.env.XM_xmURL) {
    XYZ = process.env.XM_XYZ || "100";
    notifyttt = process.env.XM_notifyttt || "1";
    notifyInterval = process.env.XM_notifyInterval || "1";
    Minutes = process.env.XM_Minutes || "10";
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );
    if (
        process.env.XM_xmURL &&
        process.env.XM_xmURL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlexmURL = process.env.XM_xmURL.split(COOKIES_SPLIT);
    } else {
        middlexmURL = process.env.XM_xmURL.split();
    }
    Object.keys(middlexmURL).forEach((item) => {
        if (middlexmURL[item]) {
            xmurlArr.push(middlexmURL[item]);
        }
    });
} else if ($.isNode() && COOKIE.datas && COOKIE.datas[0].val != '') {
    console.log(
        `============ cookie方式为：boxjs复制会话 =============\n`
    );
    XYZ = (COOKIE.settings.find(item => item.id === `xmXYZ`)).val;
    notifyttt = (COOKIE.settings.find(item => item.id === `xmnotifyttt`)).val;
    notifyInterval = (COOKIE.settings.find(item => item.id === `xmnotifyInterval`)).val;
    Minutes = (COOKIE.settings.find(item => item.id === `xmMinutes`)).val;
    xmCount = (COOKIE.settings.find(item => item.id === `xmCount`)).val || '1';
    for (let i = 1; i <= xmCount; i++) {
        if (i == 1) {
            op = ``
        } else {
            op = i
        }
        if (COOKIE.datas.find(item => item.key === `xmurl${op}`)) {
            xmurlArr.push(COOKIE.datas.find(item => item.key === `xmurl${op}`).val);
        }
    }
} else {
    if ("xmXYZ") {
        XYZ = $.getval("xmXYZ") || '100';
    }
    if ("xmXH") {
        XH = $.getval("xmXH") || '0';
    }
    if ("xmnotifyttt") {
        notifyttt = $.getval("xmnotifyttt") || '1';
    }
    if ("xmnotifyInterval") {
        notifyInterval = $.getval("xmnotifyInterval") || '1';
    }
    if ("xmMinutes") {
        Minutes = $.getval("xmMinutes") || '10';
    }
    let xmCount = ($.getval('xmCount') || '1') - 0;
    for (let i = 1; i <= xmCount; i++) {
        if (i == 1) {
            op = ``
        } else {
            op = i
        }
        if ($.getdata(`xmurl${op}`)) {
            xmurlArr.push($.getdata(`xmurl${op}`));
        }
    }
}

function GetCookie() {
    if ($request && $request.url.indexOf("dysign") >= 0) {
        const xmurlVal = $request.url
        userid = xmurlVal.split('uuid=')[1]
        if (xmurlVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    bodys = $.getdata('xmurl' + $.idx);
                    if (bodys) {
                        userids = bodys.split('uuid=')[1]
                        if (userids != userid) {
                            if ($.idx == '') {
                                $.idx = 2
                                cookie()
                            } else {
                                $.idx = Number($.idx) + 1
                                cookie()
                            }
                        } else {
                            $.setdata(xmurlVal, "xmurl" + $.idx);
                            $.log(
                                `[${$.name + $.idx}] 获取xmurlVal✅: 成功,xmurlVal: ${xmurlVal}`
                            );
                            $.msg($.name + $.idx, `获取xmurlVal: 成功🎉`, ``);
                            $.done();
                        };
                    } else {
                        $.setdata(xmurlVal, "xmurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取xmurlVal✅: 成功,xmurlVal: ${xmurlVal}`
                        );
                        $.msg($.name + $.idx, `获取xmurlVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(xmurlVal, "xmurl" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取xmurlVal✅: 成功,xmurlVal: ${xmurlVal}`
                );
                $.msg($.name + $.idx, `获取xmurlVal: 成功🎉`, ``);
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
    `============ 共 ${xmurlArr.length} 个${$.name}账号=============\n`
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
    if (!xmurlArr || xmurlArr == '') {
        $.msg(
            O, time(Number(Date.now())) +
            `⚠️未获取COOKIE\n请点击前往获取 https://apps.apple.com/cn/app/%E5%B0%8F%E8%8A%92/id1540247980`,
            'https://apps.apple.com/cn/app/%E5%B0%8F%E8%8A%92/id1540247980', {
                "open-url": "https://apps.apple.com/cn/app/%E5%B0%8F%E8%8A%92/id1540247980"
            }
        );
        return;
    } else {
        for (let i = 0; i < xmurlArr.length; i++) {
            xmurlVal = xmurlArr[i];
            uuid = xmurlVal.split('uuid=')[1]
            did = xmurlVal.split('did=')[1].split('&')[0]
            ticket = xmurlVal.split('ticket=')[1].split('&')[0]
            $.index = i + 1;
            O = (`${$.name + $.index}🔔`);
            $.isLogin = true;
            if (xmurlVal && xmurlVal != '' && RT(1, 100) <= XYZ) {
                console.log(`-----------------\n\n🔔开始运行【${$.name + $.index}】`)
                K = `用户信息🚩`;
                if (K == `用户信息🚩`) {
                    xmurl = xmurlVal
                    xmheader = {}
                    await taskget();
                    $.GetUserInfo = DATA
                    if ($.GetUserInfo.code == 200) {
                        console.log(`\n${O}\n========== ${$.GetUserInfo.data.user_info.nickName} ==========\n用户ID：${$.GetUserInfo.data.user_info.uuid}\n`)
                        $.message += `\n${O}\n========== 【${$.GetUserInfo.data.user_info.nickName}】 ==========\n【用户ID】：${$.GetUserInfo.data.user_info.uuid}\n`;
                    } else {
                        $.isLogin = false; //cookie过期
                        return
                    }
                    if (!$.isLogin) {
                        $.msg(
                            O, time(Number(Date.now())) +
                            `⚠️COOKIE失效\n请点击前往获取 https://apps.apple.com/cn/app/%E5%B0%8F%E8%8A%92/id1540247980`,
                            'https://apps.apple.com/cn/app/%E5%B0%8F%E8%8A%92/id1540247980', {
                                "open-url": "https://apps.apple.com/cn/app/%E5%B0%8F%E8%8A%92/id1540247980"
                            }
                        );
                        if ($.isNode()) {
                            await notify.sendNotify(O, time(Number(Date.now())) + `⚠️COOKIE失效\n请点击前往获取https://apps.apple.com/cn/app/%E5%B0%8F%E8%8A%92/id1540247980`);
                        }
                        continue
                    }
                }
                K = `中奖列表🚩`;
                if (K == `中奖列表🚩`) {
                    xmurl = `https://mgrank.api.mgtv.com/wish/success/list?wish_id=1&device=iPhone&osVersion=14.2&appVersion=4.1.9&did=${did}&_support=&uuid=${uuid}&ticket=${ticket}`
                    await taskget();
                    $.GetzjList = DATA
                    if ($.GetzjList.code == 200) {
                        zjinfo = $.GetzjList.data.list.find(item => item.uuid == uuid);
                        if (zjinfo) {
                            console.log(`中奖列表：第${$.GetzjList.data.round}期-${zjinfo.record}\n`)
                            $.message += `【中奖列表】：第${$.GetzjList.data.round}期-${zjinfo.record}\n`;
                            console.log(O, `\n========== ${$.GetUserInfo.data.user_info.nickName} ==========\n第${$.GetzjList.data.round}期-${zjinfo.record}`)
                            $.msg(O, `========== 【${$.GetUserInfo.data.user_info.nickName}】 ==========\n第${$.GetzjList.data.round}期-${zjinfo.record}`);
                            if ($.isNode()) {
                                notify.sendNotify(O, `========== 【${$.GetUserInfo.data.user_info.nickName}】 ==========\n第${$.GetzjList.data.round}期-${zjinfo.record}`);
                            }
                        } else {
                            console.log(`中奖列表：第${$.GetzjList.data.round}期-许愿失败，继续努力\n`)
                            $.message += `【中奖列表】：第${$.GetzjList.data.round}期-许愿失败，继续努力\n`;
                        }
                    }
                }
                K = `许愿中心🚩`;
                if (K == `许愿中心🚩`) {
                    xmurl = `https://mgrank.api.mgtv.com/wish/info?wish_id=1&device=iPhone&osVersion=14.2&appVersion=4.1.9&did=${did}&_support=&uuid=${uuid}&ticket=${ticket}`
                    await taskget();
                    $.xyzxList = DATA
                    if ($.xyzxList.code == 200) {
                        round = $.xyzxList.data.round_info.round
                        console.log(`许愿中心：${$.xyzxList.data.round_info.remark}-${$.xyzxList.data.round_info.startTime}\n`)
                        $.message += `【许愿中心】：${$.xyzxList.data.round_info.remark}-${$.xyzxList.data.round_info.startTime}\n`;
                    }
                }
                K = `任务列表🚩`;
                if (K == `任务列表🚩`) {
                    xmurl = `https://mgrank.api.mgtv.com/wish/task/list?wish_id=1&pageNum=1&pageSize=10&device=iPhone&osVersion=14.2&appVersion=4.1.9&did=${did}&_support=&uuid=${uuid}&ticket=${ticket}`
                    await taskget();
                    $.rwList = DATA
                    if ($.rwList.code == 200) {
                        for (let i = 0; i < $.rwList.data.list.length; i++) {
                            console.log(`任务列表：${$.rwList.data.list[i].title}-${$.rwList.data.list[i].done_times}/${$.rwList.data.list[i].limit_times}\n`)
                            $.message += `【任务列表】：${$.rwList.data.list[i].title}-${$.rwList.data.list[i].done_times}/${$.rwList.data.list[i].limit_times}\n`;
                        }
                    }
                }
                if ($.rwList && $.rwList.data.list[0].done_times == 0 || $.rwList.data.list[1].done_times == 0) {
                    K = `执行任务🚩`;
                    if (K == `执行任务🚩`) {
                        xmurl = `https://mgrank.api.mgtv.com/wish/task/report`
                        xmbody = `wish_id=1&task_id=1&task_typ=0&device=iPhone&osVersion=14.2&appVersion=4.1.9&did=${did}&_support=&uuid=${uuid}&ticket=${ticket}`
                        await taskpost();
                        DD = RT(1000, 2000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        xmbody = `wish_id=1&task_id=1&task_typ=0&device=iPhone&osVersion=14.2&appVersion=4.1.9&did=${did}&_support=&uuid=${uuid}&ticket=${ticket}`
                        await taskpost();
                        DD = RT(1000, 2000)
                        console.log(`随机延迟${DD/1000}秒`)
                        xmbody = `wish_id=1&task_id=3&task_typ=1&device=iPhone&osVersion=14.2&appVersion=4.1.9&did=${did}&_support=&uuid=${uuid}&ticket=${ticket}`
                        await taskpost();
                        $.zxrw = DATA
                        if ($.zxrw.code == 200) {
                            console.log(`执行任务：${$.zxrw.msg}\n`)
                            $.message += `【执行任务】：${$.zxrw.msg}\n`;
                        }
                    }
                }
                K = `许愿列表🚩`;
                if (K == `许愿列表🚩`) {
                    xmurl = `https://mgrank.api.mgtv.com/wish/goods/list?wish_id=1&pageNum=1&pageSize=99&device=iPhone&osVersion=14.2&appVersion=4.1.9&did=${did}&_support=&uuid=${uuid}&ticket=${ticket}`
                    await taskget();
                    $.xylist = DATA
                    if ($.xylist.code == 200) {
                        o = $.xylist.data.length - 1
                        for (let i = 0; i < $.xylist.data.length; i++) {
                            console.log(`许愿列表：价值${$.xylist.data[i].goods_price/100}元-共${$.xylist.data[i].goods_num}份-${$.xylist.data[i].goods_title}\n`)
                            $.message += `【许愿列表】：价值${$.xylist.data[i].goods_price/100}元-共${$.xylist.data[i].goods_num}份-${$.xylist.data[i].goods_title}\n`;
                        }
                    }
                }
                if ($.xylist.data[o].is_wished == 0) {
                    K = `许愿币查询🚩`;
                    if (K == `许愿币查询🚩`) {
                        xmurl = `https://mgrank.api.mgtv.com/wish/coin?wish_id=1&device=iPhone&osVersion=14.2&appVersion=4.1.9&did=${did}&_support=&uuid=${uuid}&ticket=${ticket}`
                        await taskget();
                        $.xybcx = DATA
                        if ($.xybcx.code == 200) {
                            console.log(`许愿币查询：${$.xybcx.data.coin_num}个\n`)
                            $.message += `【许愿币查询】：${$.xybcx.data.coin_num}个\n`;
                        }
                    }
                    for (let i = 0; i < $.xybcx.data.coin_num; i++) {
                        if (i == 0) {
                            goods_id = $.xylist.data[o].goods_id
                        } else {
                            goods_id = $.xylist.data[i - 1].goods_id
                        }
                        if (goods_id) {
                            goods_idinfo = $.xylist.data.find(item => item.goods_id == goods_id);
                            K = `许愿🚩`;
                            if (K == `许愿🚩`) {
                                xmurl = `https://mgrank.api.mgtv.com/wish/submit`
                                xmbody = `wish_id=1&round=${round}&goods_id=${goods_id}&device=iPhone&osVersion=14.2&appVersion=4.1.9&did=${did}&_support=&uuid=${uuid}&ticket=${ticket}`
                                DD = RT(1000, 2000)
                                console.log(`随机延迟${DD/1000}秒`)
                                await $.wait(DD)
                                await taskpost();
                                $.xy = DATA
                                if ($.xy.data.status == 1) {
                                    console.log(`许愿：${goods_idinfo.goods_title}-成功\n`)
                                    $.message += `【许愿】：${goods_idinfo.goods_title}-成功\n`;
                                }
                            }
                        }
                    }
                }
                K = `许愿币查询🚩`;
                if (K == `许愿币查询🚩`) {
                    xmurl = `https://mgrank.api.mgtv.com/wish/coin?wish_id=1&device=iPhone&osVersion=14.2&appVersion=4.1.9&did=${did}&_support=&uuid=${uuid}&ticket=${ticket}`
                    await taskget();
                    $.xybcx = DATA
                    if ($.xybcx.code == 200) {
                        console.log(`许愿币查询：${$.xybcx.data.coin_num}个\n`)
                        $.message += `【许愿币查询】：${$.xybcx.data.coin_num}个\n`;
                    }
                }
                for (let i = 0; i < $.xybcx.data.coin_num; i++) {
                    K = `许愿列表🚩`;
                    if (K == `许愿列表🚩`) {
                        xmurl = `https://mgrank.api.mgtv.com/wish/goods/list?wish_id=1&pageNum=1&pageSize=99&device=iPhone&osVersion=14.2&appVersion=4.1.9&did=${did}&_support=&uuid=${uuid}&ticket=${ticket}`
                        await taskget();
                        $.xylist = DATA
                        if ($.xylist.code == 200) {
                            xylistinfo = $.xylist.data.find(item => item.is_wished == 0);
                        }
                        goods_id = xylistinfo.goods_id
                        K = `许愿🚩`;
                        if (K == `许愿🚩`) {
                            xmurl = `https://mgrank.api.mgtv.com/wish/submit`
                            xmbody = `wish_id=1&round=${round}&goods_id=${goods_id}&device=iPhone&osVersion=14.2&appVersion=4.1.9&did=${did}&_support=&uuid=${uuid}&ticket=${ticket}`
                            DD = RT(1000, 2000)
                            console.log(`随机延迟${DD/1000}秒`)
                            await $.wait(DD)
                            await taskpost();
                            $.xy = DATA
                            if ($.xy.data.status == 1) {
                                console.log(`许愿：${xylistinfo.goods_title}-成功\n`)
                                $.message += `【许愿】：${xylistinfo.goods_title}-成功\n`;
                            }
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
            url: xmurl,
            headers: xmheader,
            body: xmbody,
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
            url: xmurl,
            headers: xmheader
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

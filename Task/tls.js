/* ziye 
github地址 https://github.cn/ziye888
TG频道地址 https://t.me/ziyescript
TG交流群 https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接 https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/ziye.boxjs.json
圈X task订阅 https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/ziye-gallery.json

转载请备注个名字，谢谢

⚠️特仑苏小程序    需要 微信    兑换特仑苏牛奶 
  
>>点击  https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/tls.png  扫码进入    谢谢支持

4.23 制作
4.24 完成
4.24.21 去除ck触发机制
4.25.15 修复加餐判定，优化逻辑
4.26.13 修复答题判定，调整为8个助力位
5.1.15 修复自动答题
5.4.12 调整为26个助力位

⚠️   ck只有几个小时的有效期，不要关闭ck重写    
建议每天12点进入小程序获取ck，点击我的奖品也可以获取ck， 手动运行一次或者定时 7 27,47 12 * * *

⚠️一共  2个ck  👉 2条 Secrets

⚠️关于助力，一天一次，同一个人一周一次，脚本默认助力作者，可自行boxjs处更改

手机端默认使用boxjs👉 node请复制boxjs会话粘贴至tlsCOOKIE.js中 或者 填写环境变量(多账号请换行)

第一步⚠️添加 hostname =xw.mengniu.cn,

👉进入小程序获取

tlsheaderVal👉TLS_tlsURL👉url
tlsheaderVal👉TLS_tlsHEADER👉header
 
⚠️主机名以及重写👇  一次只开一条重写
hostname =xw.mengniu.cn,

//////////////////////////// 圈x
//特仑苏获取ck
https:\/\/xw\.mengniu\.cn\/grass\/Api\/TelunsuHandler\.ashx\?method\=GetMyPrize url script-request-header https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/tls.js

//////////////////////////// loon
//特仑苏获取ck
http-request https:\/\/xw\.mengniu\.cn\/grass\/Api\/TelunsuHandler\.ashx\?method\=GetMyPrize script-path=https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/tls.js, requires-header=true, tag=特仑苏获取ck

//////////////////////////// surge
//特仑苏获取ck
特仑苏获取ck = type=http-request,pattern=https:\/\/xw\.mengniu\.cn\/grass\/Api\/TelunsuHandler\.ashx\?method\=GetMyPrize,requires-header=1,max-size=0,script-path=https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/tls.js

*/

GXRZ = '5.4.12 调整为26个助力位'
const $ = Env("特仑苏");
$.idx = ($.idx = ($.getval('tlsSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./tlsCOOKIE") : ``;
const logs = 0; // 0关闭日志，1原始日志，2格式化，3格式化且解码，
notifyttt = 1; // 0为关闭外部推送，1为12 23 点外部推送
notifyInterval = 1; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
Minutes = 10; // 通知 默认控制在0-10分内
$.message = '', COOKIES_SPLIT = '', CASH = '', HYIDS = '', hyidA = 0, hyidB = 0, hyidC = 0, hyidD = 0, hyidE = 0, hyidF = 0, hyidG = 0, hyidH = 0, hyidI = 0, hyidJ = 0, hyidK = 0, hyidL = 0, hyidM = 0, hyidN = 0, hyidO = 0, hyidP = 0, hyidQ = 0, hyidR = 0, hyidS = 0, hyidT = 0, hyidU = 0, hyidV = 0, hyidW = 0, hyidX = 0, hyidY = 0, hyidZ = 0, XH = 0, XYZ = 100, Length = 0, ddtime = '';

tlsbodys = ``;
let tlsurlArr = [];
let tlsurlVal = ``;
let middletlsURL = [];

let tlsheaderArr = [];
let tlsheaderVal = ``;
let middletlsHEADER = [];


if ($.isNode() && process.env.TLS_tlsHEADER) {

    XYZ = process.env.TLS_XYZ || "100";
    hyidA = process.env.TLS_hyidA || "64926";
    hyidB = process.env.TLS_hyidB || "70405";
    hyidC = process.env.TLS_hyidC || "73261";
    hyidD = process.env.TLS_hyidD || "98692";
    hyidE = process.env.TLS_hyidE || "98825";
    hyidF = process.env.TLS_hyidF || "98860";
    hyidG = process.env.TLS_hyidG || "98910";
    hyidH = process.env.TLS_hyidH || "114043";
    hyidI = process.env.TLS_hyidI || "114736";
    hyidJ = process.env.TLS_hyidJ || "112833";
    hyidK = process.env.TLS_hyidK || "113329";

    hyidL = process.env.TLS_hyidL || "109172";
    hyidM = process.env.TLS_hyidM || "364156";
    hyidN = process.env.TLS_hyidN || "147562";
    hyidO = process.env.TLS_hyidO || "161866";
    hyidP = process.env.TLS_hyidP || "109012";
    hyidQ = process.env.TLS_hyidQ || "109377";
    hyidR = process.env.TLS_hyidR || "397595";
    hyidS = process.env.TLS_hyidS || "114992";
    hyidT = process.env.TLS_hyidT || "117104";
    hyidU = process.env.TLS_hyidU || "122263";
    hyidV = process.env.TLS_hyidV || "141969";
    hyidW = process.env.TLS_hyidW || "110059";
    hyidX = process.env.TLS_hyidX || "117972";
    hyidY = process.env.TLS_hyidY || "206817";
    hyidZ = process.env.TLS_hyidZ || "109566";

    notifyttt = process.env.TLS_notifyttt || "1";
    notifyInterval = process.env.TLS_notifyInterval || "1";
    Minutes = process.env.TLS_Minutes || "10";

    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );


    if (
        process.env.TLS_tlsURL &&
        process.env.TLS_tlsURL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middletlsURL = process.env.TLS_tlsURL.split(COOKIES_SPLIT);
    } else {
        middletlsURL = process.env.TLS_tlsURL.split();
    }
    Object.keys(middletlsURL).forEach((item) => {
        if (middletlsURL[item]) {
            tlsurlArr.push(middletlsURL[item]);
        }
    });


    if (
        process.env.TLS_tlsHEADER &&
        process.env.TLS_tlsHEADER.indexOf(COOKIES_SPLIT) > -1
    ) {
        middletlsHEADER = process.env.TLS_tlsHEADER.split(COOKIES_SPLIT);
    } else {
        middletlsHEADER = process.env.TLS_tlsHEADER.split();
    }
    Object.keys(middletlsHEADER).forEach((item) => {
        if (middletlsHEADER[item]) {
            tlsheaderArr.push(middletlsHEADER[item]);
        }
    });

} else if ($.isNode() && COOKIE.datas && COOKIE.datas[0].val != '') {
    console.log(
        `============ cookie方式为：boxjs复制会话 =============\n`
    );
    XYZ = (COOKIE.settings.find(item => item.id === `tlsXYZ`)).val;
    notifyttt = (COOKIE.settings.find(item => item.id === `tlsnotifyttt`)).val;
    hyidA = (COOKIE.settings.find(item => item.id === `tlshyidA`)).val;
    hyidB = (COOKIE.settings.find(item => item.id === `tlshyidB`)).val;
    hyidC = (COOKIE.settings.find(item => item.id === `tlshyidC`)).val;
    hyidD = (COOKIE.settings.find(item => item.id === `tlshyidD`)).val;
    hyidE = (COOKIE.settings.find(item => item.id === `tlshyidE`)).val;
    hyidF = (COOKIE.settings.find(item => item.id === `tlshyidF`)).val;
    hyidG = (COOKIE.settings.find(item => item.id === `tlshyidG`)).val;
    hyidH = (COOKIE.settings.find(item => item.id === `tlshyidH`)).val;
    hyidI = (COOKIE.settings.find(item => item.id === `tlshyidI`)).val;
    hyidJ = (COOKIE.settings.find(item => item.id === `tlshyidJ`)).val;
    hyidK = (COOKIE.settings.find(item => item.id === `tlshyidK`)).val;

    hyidL = (COOKIE.settings.find(item => item.id === `tlshyidL`)).val;
    hyidM = (COOKIE.settings.find(item => item.id === `tlshyidM`)).val;
    hyidN = (COOKIE.settings.find(item => item.id === `tlshyidN`)).val;
    hyidO = (COOKIE.settings.find(item => item.id === `tlshyidO`)).val;
    hyidP = (COOKIE.settings.find(item => item.id === `tlshyidP`)).val;
    hyidQ = (COOKIE.settings.find(item => item.id === `tlshyidQ`)).val;
    hyidR = (COOKIE.settings.find(item => item.id === `tlshyidR`)).val;
    hyidS = (COOKIE.settings.find(item => item.id === `tlshyidS`)).val;
    hyidT = (COOKIE.settings.find(item => item.id === `tlshyidT`)).val;
    hyidU = (COOKIE.settings.find(item => item.id === `tlshyidU`)).val;
    hyidV = (COOKIE.settings.find(item => item.id === `tlshyidV`)).val;
    hyidW = (COOKIE.settings.find(item => item.id === `tlshyidW`)).val;
    hyidX = (COOKIE.settings.find(item => item.id === `tlshyidX`)).val;
    hyidY = (COOKIE.settings.find(item => item.id === `tlshyidY`)).val;
    hyidZ = (COOKIE.settings.find(item => item.id === `tlshyidZ`)).val;







    notifyInterval = (COOKIE.settings.find(item => item.id === `tlsnotifyInterval`)).val;
    Minutes = (COOKIE.settings.find(item => item.id === `tlsMinutes`)).val;
    tlsCount = (COOKIE.settings.find(item => item.id === `tlsCount`)).val || '1';
    for (let i = 1; i <= tlsCount; i++) {
        if (i == 1) {
            op = ``
        } else {
            op = i
        }
        if (COOKIE.datas.find(item => item.key === `tlsheader${op}`)) {

            tlsurlArr.push(COOKIE.datas.find(item => item.key === `tlsurl${op}`).val);
            tlsheaderArr.push(COOKIE.datas.find(item => item.key === `tlsheader${op}`).val);

        }
    }
} else {
    if ("tlsXYZ") {
        XH = $.getval("tlsXYZ") || '100';
    }
    if ("tlshyidA") {
        hyidA = $.getval("tlshyidA") || '64926';
    }
    if ("tlshyidB") {
        hyidB = $.getval("tlshyidB") || '70405';
    }
    if ("tlshyidC") {
        hyidC = $.getval("tlshyidC") || '73261';
    }
    if ("tlshyidD") {
        hyidD = $.getval("tlshyidD") || '98692';
    }
    if ("tlshyidE") {
        hyidE = $.getval("tlshyidE") || '98825';
    }
    if ("tlshyidF") {
        hyidF = $.getval("tlshyidF") || '98860';
    }
    if ("tlshyidG") {
        hyidG = $.getval("tlshyidG") || '98910';
    }
    if ("tlshyidH") {
        hyidG = $.getval("tlshyidH") || '114043';
    }

    if ("tlshyidI") {
        hyidA = $.getval("tlshyidI") || '114736';
    }
    if ("tlshyidJ") {
        hyidB = $.getval("tlshyidJ") || '112833';
    }
    if ("tlshyidK") {
        hyidC = $.getval("tlshyidK") || '113329';
    }



    if ("tlshyidL") {
        hyidD = $.getval("tlshyidL") || '109172';
    }
    if ("tlshyidM") {
        hyidE = $.getval("tlshyidM") || '364156';
    }
    if ("tlshyidN") {
        hyidF = $.getval("tlshyidN") || '147562';
    }
    if ("tlshyidO") {
        hyidG = $.getval("tlshyidO") || '161866';
    }
    if ("tlshyidP") {
        hyidG = $.getval("tlshyidP") || '109012';
    }

    if ("tlshyidQ") {
        hyidA = $.getval("tlshyidQ") || '109377';
    }
    if ("tlshyidR") {
        hyidB = $.getval("tlshyidR") || '397595';
    }
    if ("tlshyidS") {
        hyidC = $.getval("tlshyidS") || '114992';
    }
    if ("tlshyidT") {
        hyidD = $.getval("tlshyidT") || '117104';
    }
    if ("tlshyidU") {
        hyidE = $.getval("tlshyidU") || '122263';
    }


    if ("tlshyidV") {
        hyidF = $.getval("tlshyidV") || '141969';
    }
    if ("tlshyidW") {
        hyidG = $.getval("tlshyidW") || '110059';
    }
    if ("tlshyidX") {
        hyidG = $.getval("tlshyidX") || '117972';
    }
    if ("tlshyidY") {
        hyidG = $.getval("tlshyidY") || '206817';
    }
    if ("tlshyidZ") {
        hyidG = $.getval("tlshyidZ") || '109566';
    }


    if ("tlsnotifyttt") {
        notifyttt = $.getval("tlsnotifyttt") || '1';
    }
    if ("tlsnotifyInterval") {
        notifyInterval = $.getval("tlsnotifyInterval") || '1';
    }
    if ("tlsMinutes") {
        Minutes = $.getval("tlsMinutes") || '10';
    }

    let tlsCount = ($.getval('tlsCount') || '1') - 0;
    for (let i = 1; i <= tlsCount; i++) {
        if (i == 1) {
            op = ``
        } else {
            op = i
        }
        if ($.getdata(`tlsheader${op}`)) {

            tlsurlArr.push($.getdata(`tlsurl${op}`));

            tlsheaderArr.push($.getdata(`tlsheader${op}`));

        }
    }
}

function GetCookie() {


    //获取CK
    if ($request && $request.url.indexOf("GetMyPrize") >= 0) {

        const tlsurlVal = $request.headers.Referer;
        const tlsheaderVal = $request.headers.Cookie;
        if (tlsheaderVal && tlsurlVal) {

            $.setdata(tlsurlVal, "tlsurl" + $.idx);
            $.log(
                `[${$.name + $.idx}] 获取url tlsurlVal✅: 成功,tlsurlVal: ${tlsurlVal}`
            );
            $.msg($.name + $.idx, `获取url tlsurlVal: 成功🎉`, ``);
            $.setdata(tlsheaderVal, "tlsheader" + $.idx);
            $.log(
                `[${$.name + $.idx}] 获取header tlsheaderVal✅: 成功,tlsheaderVal: ${tlsheaderVal}`
            );
            $.msg($.name + $.idx, `获取header tlsheaderVal: 成功🎉`, ``);
            $.done();

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
    `============ 共 ${tlsheaderArr.length} 个${$.name}账号=============\n`
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
        if ($.isLogin == true) {
            await msgShow();
        }
    })()
    .catch((e) => {
            $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
        })
        .finally(() => {
            $.done();
        })
}


async function all() {
    if (!tlsheaderArr || tlsheaderArr == '') {
        $.msg(
            O, time(Number(Date.now())) +
            `⚠️未获取COOKIE\n请点击前往获取https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/tls.png`,
            'https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/tls.png', {
                "open-url": "https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/tls.png"
            }
        );
        return;
    } else {
        for (let i = 0; i < tlsheaderArr.length; i++) {

            tlsurlVal = tlsurlArr[i];

            tlsheaderVal = tlsheaderArr[i];

            userid = tlsurlVal.split('UserID=')[1].split('&')[0]
            SceneValue = tlsurlVal.split('SceneValue=')[1].split('&')[0]

            $.index = i + 1;
            O = (`${$.name + $.index}🔔`);
            $.isLogin = true;
            if (tlsheaderVal && tlsheaderVal != '') {
                console.log(`-----------------\n\n🔔开始运行【${$.name + $.index}】`)
                K = `用户信息🚩`;
                tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=GetUserInfo`
                tlsheader = {
                    "Host": "xw.mengniu.cn",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Cookie": `${tlsheaderVal}`,
                };
                tlsbody = `Scene=defualt&SceneValue=${SceneValue}`
                await task();
                if (!$.isLogin) {
                    $.msg(
                        O, time(Number(Date.now())) +
                        `⚠️COOKIE失效\n请点击前往获取https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/tls.png`,
                        'https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/tls.png', {
                            "open-url": "https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/tls.png"
                        }
                    );
                    if ($.isNode()) {
                        await notify.sendNotify(O, time(Number(Date.now())) + `⚠️COOKIE失效\n请点击前往获取https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/tls.png`);
                    }
                    continue
                }


                K = `执行操作🚩`;
                tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddClick`
                tlsbody = `ClickInfo=%E7%89%A7%E5%9C%BA%E9%A1%B5-%E6%94%B6%E9%9B%86%E8%8D%89%E7%A7%8D&ClickType=7&OpenType=2`
                await task();



                K = `任务列表🚩`;
                tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=GetTaskList`
                tlsbody = ``

                await task();

                if (signinfo.isaccomplish == 0) {

                    DD = RT(500, 1000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)

                    K = `执行操作🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddClick`
                    tlsbody = `ClickInfo=%E6%94%B6%E9%9B%86%E8%8D%89%E7%A7%8D-%E6%AF%8F%E6%97%A5%E7%AD%BE%E5%88%B0&ClickType=7&OpenType=2`
                    await task();


                    K = `签到列表🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=GetTaskList`
                    tlsbody = ``
                    await task();

                    DD = RT(500, 1000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)



                    K = `执行操作🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddClick`
                    tlsbody = `ClickInfo=%E7%AD%BE%E5%88%B0%E9%A1%B5-%E7%AB%8B%E5%8D%B3%E7%AD%BE%E5%88%B0&ClickType=7&OpenType=2`
                    await task();

                    K = `每日签到🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=ClickSign`
                    tlsbody = ``
                    await task();



                    K = `执行操作🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddClick`
                    tlsbody = `ClickInfo=%E7%89%A7%E5%9C%BA%E9%A1%B5-%E8%8B%8F%E8%8B%8F%E4%B9%90%E5%9B%AD&ClickType=7&OpenType=2`
                    await task();

                    DD = RT(500, 1000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)


                    K = `执行操作🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddClick`
                    tlsbody = `ClickInfo=%E7%89%A7%E5%9C%BA%E9%A1%B5-%E8%8B%8F%E8%8B%8F%E4%B9%90%E5%9B%AD-%E7%BE%8E%E7%94%B2&ClickType=5&OpenType=2`
                    await task();

                    K = `苏苏乐园🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddInteraction`
                    tlsbody = `InterName=susuMeijia`
                    await task();

                    DD = RT(500, 1000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)


                    K = `执行操作🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddClick`
                    tlsbody = `ClickInfo=%E7%89%A7%E5%9C%BA%E9%A1%B5-%E8%8B%8F%E8%8B%8F%E4%B9%90%E5%9B%AD-%E5%90%AC%E9%9F%B3%E4%B9%90&ClickType=5&OpenType=2`
                    await task();

                    K = `苏苏乐园🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddInteraction`
                    tlsbody = `InterName=susuRiguangyu`
                    await task();

                    DD = RT(500, 1000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)


                    K = `执行操作🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddClick`
                    tlsbody = `ClickInfo=%E7%89%A7%E5%9C%BA%E9%A1%B5-%E8%8B%8F%E8%8B%8F%E4%B9%90%E5%9B%AD-%E6%8A%A4%E7%90%86&ClickType=5&OpenType=2`
                    await task();

                    K = `苏苏乐园🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddInteraction`
                    tlsbody = `InterName=susuHuli`
                    await task();

                }


                if (Lunchinfo.isaccomplish == 1) {
                    DD = RT(500, 1000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)

                    K = `执行操作🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddClick`
                    tlsbody = `ClickInfo=%E6%94%B6%E9%9B%86%E8%8D%89%E7%A7%8D-%E5%8D%88%E9%A4%90%E5%A5%96%E5%8A%B1&ClickType=7&OpenType=2`
                    await task();

                    K = `加餐奖励🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=GetLunchAward`
                    tlsbody = ``

                    await task();
                }

                DD = RT(500, 1000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)


                K = `执行操作🚩`;
                tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddClick`
                tlsbody = `ClickInfo=%E7%89%A7%E5%9C%BA%E9%A1%B5-%E9%99%90%E6%97%B6%E9%97%AF%E5%85%B3&ClickType=2&OpenType=2`
                await task();


                K = `周末答题🚩`;
                tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=Getanswer`
                tlsbody = ``
                await task();





                if ($.Getanswer.result.ispaly == 0 && $.Getanswer.result.isopen == 1) {


                    K = `执行操作🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddClick`
                    tlsbody = `ClickInfo=%E9%99%90%E6%97%B6%E9%97%AF%E5%85%B3%E5%BC%80%E5%90%AF%E9%A1%B5-%E5%87%86%E5%A4%87%E5%A5%BD%E4%BA%86&ClickType=2&OpenType=2`
                    await task();


                    DD = RT(35000, 40000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    K = `执行操作🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddClick`
                    tlsbody = `ClickInfo=%E9%99%90%E6%97%B6%E9%97%AF%E5%85%B3%E7%AD%94%E9%A2%98%E9%A1%B5-%E6%8F%90%E4%BA%A4&ClickType=2&OpenType=2`
                    await task();

                    K = `提交答题🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddanswerOrder`
                    tlsbody = encodeURIComponent(tlsbodys).replace(/%3D/g, '=').replace(/%26/g, '&')
                    await task();

                }

                K = `执行操作🚩`;
                tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddClick`
                tlsbody = `ClickInfo=%E9%99%90%E6%97%B6%E9%97%AF%E5%85%B3%E7%AD%94%E9%A2%98%E5%A5%96%E5%8A%B1%E9%A1%B5-%E5%8E%BB%E5%96%82%E8%8B%8F%E8%8B%8F&ClickType=2&OpenType=2`
                await task();


                DD = RT(500, 1000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)

                K = `执行操作🚩`;
                tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddClick`
                tlsbody = `ClickInfo=%E7%89%A7%E5%9C%BA%E9%A1%B5-%E7%89%A7%E5%8F%8B&ClickType=7&OpenType=2`
                await task();


                K = `好友列表🚩`;
                tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=GetMyFriendList`
                tlsbody = `PageNum=1&Record=10`

                await task();


                HYID = [hyidA, hyidB, hyidC, hyidD, hyidE, hyidF, hyidG, hyidH, hyidI, hyidJ, hyidK, hyidL, hyidM, hyidN, hyidO, hyidP, hyidQ, hyidR, hyidS, hyidT, hyidU, hyidV, hyidW, hyidX, hyidY, hyidZ]
                K = `好友信息🚩`;
                tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=GetUserFriendInfo`
                tlsbody = `userid=${HYID[0]}`
                DD = RT(500, 1000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task();

                K = `添加好友🚩`;
                tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddFriend`
                DD = RT(500, 1000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task();

                K = `执行操作🚩`;
                tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddClick`
                tlsbody = `ClickInfo=%E5%A5%BD%E5%8F%8B%E7%89%A7%E5%9C%BA%E9%A1%B5-%E5%B8%AE%E4%BB%96%E5%8A%A9%E5%8A%9B&ClickType=4&OpenType=2`
                await task();

                K = `助力好友🚩`;
                tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddShare`
                tlsbody = `userid=${HYID[0]}`
                DD = RT(500, 1000)
                console.log(`随机延迟${DD/1000}秒`)
                await $.wait(DD)
                await task();



                for (let i = 1; i < HYID.length; i++) {
                     HYIDS = i + 1

                    if ($.AddShare.errcode == 1 && $.AddShare.errmsg.indexOf("每天只能助力一次") < 0) {

                        K = `好友信息🚩`;
                        tlsbody = `userid=${HYID[i]}`
                        tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=GetUserFriendInfo`
                        DD = RT(500, 1000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task();

                        K = `添加好友🚩`;
                        tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddFriend`
                        //console.log(tlsbody)
                        DD = RT(500, 1000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task();

                        K = `执行操作🚩`;
                        tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddClick`
                        tlsbody = `ClickInfo=%E5%A5%BD%E5%8F%8B%E7%89%A7%E5%9C%BA%E9%A1%B5-%E5%B8%AE%E4%BB%96%E5%8A%A9%E5%8A%9B&ClickType=4&OpenType=2`
                        await task();

                        K = `助力好友🚩`;
                        tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddShare`
                        tlsbody = `userid=${HYID[i]}`
                        DD = RT(500, 1000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task();
                    }


                }


                K = `查询信息🚩`;
                tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=GetUserValues`
                tlsbody = ``
                await task();

                for (let i = 1; i < $.GetUserValues.result.grass_seed / 100; i++) {


                    K = `查询信息🚩`;
                    tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=GetUserValues`
                    tlsbody = ``
                    await task();


                    if ($.GetUserValues.result.grass_seed >= 100) {

                        CZCS = i
                        DD = RT(500, 1000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)

                        K = `执行操作🚩`;
                        tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=AddClick`
                        tlsbody = `ClickInfo=%E7%89%A7%E5%9C%BA%E9%A1%B5-%E8%8D%89%E7%A7%8D&ClickType=7&OpenType=2`
                        await task();

                        K = `添加草种🚩`;
                        tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=PlantGrassSeed`

                        await task();

                        DD = RT(3000, 4000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)


                        K = `收取奶滴🚩`;
                        tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=TakeMilk`

                        await task();
                    }
                }

                K = `总结信息🚩`;
                tlsurl = `https://xw.mengniu.cn/grass/Api/TelunsuHandler.ashx?method=GetUserValues`
                tlsbody = ``
                await task();

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
function task() {
    return new Promise(async resolve => {
        let url = {
            url: `${tlsurl}`,
            headers: tlsheader,
            body: `${tlsbody}`,
        }
        $.post(url, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网络重试`)
                } else {
                    if (data) {
                        if (K == `用户信息🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.GetUserInfo = JSON.parse(data);
                            if ($.GetUserInfo.errcode == 0) {
                                console.log(`\n${O}\n========== ${$.GetUserInfo.result.nickname} ==========\n用户ID：${$.GetUserInfo.result.id}\n奶滴进度：${$.GetUserInfo.result.milk}/300\n草种信息：${$.GetUserInfo.result.grass_seed}/${$.GetUserInfo.result.allgrass_seed}\n签到天数：${$.GetUserInfo.result.signcount}天\n`)
                                $.message += `\n${O}\n========== 【${$.GetUserInfo.result.nickname}】 ==========\n【用户ID】：${$.GetUserInfo.result.id}\n【奶滴进度】：${$.GetUserInfo.result.milk}/300\n【草种信息】：${$.GetUserInfo.result.grass_seed}/${$.GetUserInfo.result.allgrass_seed}\n【签到天数】：${$.GetUserInfo.result.signcount}天\n`;
                            } else {
                                $.isLogin = false; //cookie过期
                                return
                            }
                        }


                        if (K == `任务列表🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.GetTaskList = JSON.parse(data);
                            if ($.GetTaskList.errcode == 0) {

                                signinfo = $.GetTaskList.result.find(item => item.taskid == 2);
                                Lunchinfo = $.GetTaskList.result.find(item => item.taskid == 5);

                                if (signinfo.isaccomplish == 2) {

                                    console.log(`签到任务：已完成\n`)
                                    $.message += `【签到任务】：已完成\n`;
                                }

                                if (Lunchinfo.isaccomplish == 2) {

                                    console.log(`加餐任务：已完成\n`)
                                    $.message += `【加餐任务】：已完成\n`;
                                }



                            }
                        }

                        if (K == `每日签到🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.ClickSign = JSON.parse(data);
                            if ($.ClickSign.errcode == 0) {
                                console.log(`每日签到：签到成功\n`)
                                $.message += `【每日签到】：签到成功\n`;
                            }
                        }

                        if (K == `苏苏乐园🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.AddInteraction = JSON.parse(data);
                            if ($.AddInteraction.errcode == 0 && tlsbody == `InterName=susuMeijia`) {
                                console.log(`苏苏乐园：美甲成功，奶滴＋1\n`)
                                $.message += `【苏苏乐园】：美甲成功，奶滴＋1\n`;
                            }

                            if ($.AddInteraction.errcode == 0 && tlsbody == `InterName=susuRiguangyu`) {
                                console.log(`苏苏乐园：听音乐成功，奶滴＋1\n`)
                                $.message += `【苏苏乐园】：听音乐成功，奶滴＋1\n`;
                            }

                            if ($.AddInteraction.errcode == 0 && tlsbody == `InterName=susuHuli`) {
                                console.log(`苏苏乐园：护理成功，奶滴＋1\n`)
                                $.message += `【苏苏乐园】：护理成功，奶滴＋1\n`;
                            }
                        }

                        if (K == `添加好友🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.AddFriend = JSON.parse(data);
                            if ($.AddFriend.errcode == 0) {
                                console.log(`添加好友：添加成功\n`)
                            }
                        }

                        if (K == `好友列表🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.FriendList = JSON.parse(data);
                            if ($.FriendList.errcode == 0) {
                                console.log(`好友列表：${$.FriendList.result[0].nickname} id ${$.FriendList.result[0].userid} ${$.FriendList.result[0].milknumber}滴奶\n`)
                                $.message += `【好友列表】：${$.FriendList.result[0].nickname} id ${$.FriendList.result[0].userid} ${$.FriendList.result[0].milknumber}滴奶\n`;
                            }
                        }

                        if (K == `好友信息🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.FriendInfo = JSON.parse(data);
                            if ($.FriendInfo.errcode == 0) {
                                console.log(`好友信息：${HYIDS} ${$.FriendInfo.result.nickname} id ${$.FriendInfo.result.id} ${$.FriendInfo.result.milk}滴奶\n`)

                            }
                        }

                        if (K == `助力好友🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.AddShare = JSON.parse(data);
                            if ($.AddShare.errcode == 0) {
                                console.log(`助力好友：助力成功\n`)
                                $.message += `【助力好友】：助力成功\n`;
                            } else {
                                console.log(`助力好友：${$.AddShare.errmsg}\n`)

                            }
                        }

                        if (K == `查询信息🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.GetUserValues = JSON.parse(data);
                            if ($.GetUserValues.errcode == 0) {
                                console.log(`查询信息：剩余草种${$.GetUserValues.result.grass_seed}，剩余奶滴${$.GetUserValues.result.milk}\n`)
                                //$.message += `【查询信息】：剩余草种${$.GetUserValues.result.grass_seed}，剩余奶滴${$.GetUserValues.result.milk}\n`

                            }
                        }

                        if (K == `添加草种🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.PlantGrassSeed = JSON.parse(data);
                            if ($.PlantGrassSeed.errcode == 0) {
                                console.log(`添加草种${CZCS}：成功\n`)
                                $.message += `【添加草种${CZCS}】：成功\n`;
                            }
                        }

                        if (K == `收取奶滴🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.TakeMilk = JSON.parse(data);
                            if ($.TakeMilk.errcode == 0) {
                                console.log(`收取奶滴${CZCS}：成功\n`)
                                $.message += `【收取奶滴${CZCS}】：成功\n`;
                            }
                        }

                        if (K == `加餐奖励🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.GetLunchAward = JSON.parse(data);
                            if ($.GetLunchAward.errcode == 0) {
                                console.log(`加餐奖励：获得100草种\n`)
                                $.message += `【加餐奖励】：获得100草种\n`;
                            }
                        }


                        if (K == `周末答题🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.Getanswer = JSON.parse(data);
                            if ($.Getanswer.errcode == 0) {

                                if ($.Getanswer.result.isopen == 0) {

                                    console.log(`周末答题：未开始\n`)
                                    $.message += `【周末答题】：未开始\n`;

                                } else if ($.Getanswer.result.ispaly == 0) {
                                    DT = ($.Getanswer.result.times[0].id - 1) * 10

                                    DTA = $.Getanswer.result.answerlist.find(item => item.id == DT + 1);
                                    DTB = $.Getanswer.result.answerlist.find(item => item.id == DT + 2);
                                    DTC = $.Getanswer.result.answerlist.find(item => item.id == DT + 3);
                                    DTD = $.Getanswer.result.answerlist.find(item => item.id == DT + 4);
                                    DTE = $.Getanswer.result.answerlist.find(item => item.id == DT + 5);
                                    DTF = $.Getanswer.result.answerlist.find(item => item.id == DT + 6);
                                    DTG = $.Getanswer.result.answerlist.find(item => item.id == DT + 7);
                                    DTH = $.Getanswer.result.answerlist.find(item => item.id == DT + 8);
                                    DTI = $.Getanswer.result.answerlist.find(item => item.id == DT + 9);
                                    DTJ = $.Getanswer.result.answerlist.find(item => item.id == DT + 10);
                                    FF = RT(25, 35)

                                    tlsbodys = `answerList=[{"question_id":${DTA.id},"question_answer":"${DTA.answer_right}","time_interval":""},{"question_id":${DTB.id},"question_answer":"${DTB.answer_right}","time_interval":""},{"question_id":${DTC.id},"question_answer":"${DTC.answer_right}","time_interval":""},{"question_id":${DTD.id},"question_answer":"${DTD.answer_right}","time_interval":""},{"question_id":${DTE.id},"question_answer":"${DTE.answer_right}","time_interval":""},{"question_id":${DTF.id},"question_answer":"${DTF.answer_right}","time_interval":""},{"question_id":${DTG.id},"question_answer":"${DTG.answer_right}","time_interval":""},{"question_id":${DTH.id},"question_answer":"${DTH.answer_right}","time_interval":""},{"question_id":${DTI.id},"question_answer":"${DTI.answer_right}","time_interval":""},{"question_id":${DTJ.id},"question_answer":"${DTJ.answer_right}","time_interval":""}]&alltime=${FF}`

                                    console.log(`周末答题：开始进行答题\n`)
                                    $.message += `【周末答题】：开始进行答题\n`;

                                } else if ($.Getanswer.result.ispaly == 1) {

                                    console.log(`周末答题：已经答题过了\n`)
                                    $.message += `【周末答题】：已经答题过了\n`;


                                }


                            }
                        }


                        if (K == `提交答题🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.AddanswerOrder = JSON.parse(data);
                            if ($.AddanswerOrder.errcode == 0) {
                                console.log(`提交答题：获得${$.AddanswerOrder.result.getalfalfa}草种\n`)
                                $.message += `【提交答题】：获得${$.AddanswerOrder.result.getalfalfa}草种\n`;
                            }
                        }



                        if (K == `总结信息🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.GetUserValuesss = JSON.parse(data);
                            if ($.GetUserValuesss.errcode == 0) {
                                console.log(`总结信息：剩余草种${$.GetUserValuesss.result.grass_seed}，剩余奶滴${$.GetUserValuesss.result.milk}\n`)
                                $.message += `【总结信息】：剩余草种${$.GetUserValuesss.result.grass_seed}，剩余奶滴${$.GetUserValuesss.result.milk}\n`

                            }
                        }

                        if (K == `执行操作🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.AddClick = JSON.parse(data);
                            if ($.AddClick.errcode == 0) {
                                console.log(decodeURIComponent(tlsbody).replace(/ClickInfo=/g, '').replace(/&ClickType=/g, '').replace(/&OpenType=/g, '').replace(/7/g, '').replace(/4/g, '').replace(/2/g, '') + `\n`)
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

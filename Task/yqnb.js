/* ziye 
github地址 https://github.com/ziye888
TG频道地址 https://t.me/ziyescript
TG交流群 https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接 https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/ziye.boxjs.json
圈X task订阅 https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/ziye-gallery.json

转载请备注个名字，谢谢

⚠️易趣牛帮 需要 手机号    共0.5元 无饿了么 无美团
   赏金帮  需要 手机号    收益0.2

⚠️赏金帮不获取ck则不运行赏金帮任务，不影响易趣牛帮运行
  
商店搜索下载APP   


4.14 制作
4.15.11 修复签到列表报错
4.16.21 刷新异常，先移除判定
4.17.0.3 修复视频刷新问题
4.17.17 增加赏金帮,增加易趣牛帮提现
4.19 赏金帮已废
4.19.19 增加概率运行机制，实现随机运行 

⚠️ 时间设置   7 7,27 7-20 * * *    每天 20次 
⚠️一共  2个ck  👉 2条 Secrets

手机端默认使用boxjs👉 node请复制boxjs会话粘贴至yqnbCOOKIE.js中 或者 填写环境变量(多账号请换行)

👇一次只开一条重写

第一步⚠️添加 hostname =nb.ioxing.com,添加重写 获取header body

👉打开易趣牛帮-点我的-获取header，body


yqnbheaderVal👉YQNB_yqnbHEADER👉header
yqnbbodyVal👉YQNB_yqnbBODY👉body


 
	
⚠️主机名以及重写👇  
hostname =nb.ioxing.com,

//////////////////////////// 圈x
//易趣牛帮获取header body  
http:\/\/nb\.ioxing\.com\/* url script-request-body https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/yqnb.js

//////////////////////////// loon
//易趣牛帮获取header body  
http-request http:\/\/nb\.ioxing\.com\/* script-path=https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/yqnb.js, requires-body=1,max-size=0, tag=易趣牛帮获取header body

//////////////////////////// surge
//易趣牛帮获取header body  
易趣牛帮获取header body = type=http-request,pattern=http:\/\/nb\.ioxing\.com\/*,requires-body=1,max-size=0,script-path=https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/yqnb.js



*/



GXRZ = '4.19.19 增加执行概率机制，实现随机运行'
const $ = Env("易趣牛帮");
$.idx = ($.idx = ($.getval('yqnbSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./yqnbCOOKIE") : ``;
const logs = 0; // 0关闭日志，1原始日志，2格式化，3格式化且解码，
notifyttt = 1; // 0为关闭外部推送，1为12 23 点外部推送
notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
Minutes = 10; // 通知 默认控制在0-10分内
$.message = '', COOKIES_SPLIT = '', CASH = '', XYZ = 100, goodsid = 0, Name = '', Alipay = '', XH = 0, Length = 0, ddtime = '';

let yqnbheaderArr = [];
let yqnbheaderVal = ``;
let middleyqnbHEADER = [];


let yqnbbodyArr = [];
let yqnbbodyVal = ``;
let middleyqnbBODY = [];




if ($.isNode() && process.env.YQNB_yqnbHEADER) {
    CASH = process.env.YQNB_CASH || "0";
    XYZ = process.env.YQNB_XYZ || "100";
    Name = process.env.YQNB_Name || "";
    Alipay = process.env.YQNB_Alipay || "";
    notifyttt = process.env.YQNB_notifyttt || "1";
    notifyInterval = process.env.YQNB_notifyInterval || "2";
    Minutes = process.env.YQNB_Minutes || "10";

    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );

    if (
        process.env.YQNB_yqnbHEADER &&
        process.env.YQNB_yqnbHEADER.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleyqnbHEADER = process.env.YQNB_yqnbHEADER.split(COOKIES_SPLIT);
    } else {
        middleyqnbHEADER = process.env.YQNB_yqnbHEADER.split();
    }
    Object.keys(middleyqnbHEADER).forEach((item) => {
        if (middleyqnbHEADER[item]) {
            yqnbheaderArr.push(middleyqnbHEADER[item]);
        }
    });

    if (
        process.env.YQNB_yqnbBODY &&
        process.env.YQNB_yqnbBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleyqnbBODY = process.env.YQNB_yqnbBODY.split(COOKIES_SPLIT);
    } else {
        middleyqnbBODY = process.env.YQNB_yqnbBODY.split();
    }
    Object.keys(middleyqnbBODY).forEach((item) => {
        if (middleyqnbBODY[item]) {
            yqnbbodyArr.push(middleyqnbBODY[item]);
        }
    });



} else if ($.isNode() && COOKIE.datas && COOKIE.datas[0].val != '') {
    console.log(
        `============ cookie方式为：boxjs复制会话 =============\n`
    );
    CASH = (COOKIE.settings.find(item => item.id === `yqnbCASH`)).val;
    XYZ = (COOKIE.settings.find(item => item.id === `yqnbXYZ`)).val;
    Name = (COOKIE.settings.find(item => item.id === `yqnbName`)).val;
    Alipay = (COOKIE.settings.find(item => item.id === `yqnbAlipay`)).val;
    notifyttt = (COOKIE.settings.find(item => item.id === `yqnbnotifyttt`)).val;
    notifyInterval = (COOKIE.settings.find(item => item.id === `yqnbnotifyInterval`)).val;
    Minutes = (COOKIE.settings.find(item => item.id === `yqnbMinutes`)).val;
    yqnbCount = (COOKIE.settings.find(item => item.id === `yqnbCount`)).val || '1';
    for (let i = 1; i <= yqnbCount; i++) {
        if (i == 1) {
            op = ``
        } else {
            op = i
        }
        if (COOKIE.datas.find(item => item.key === `yqnbheader${op}`)) {

            yqnbheaderArr.push(COOKIE.datas.find(item => item.key === `yqnbheader${op}`).val);

            yqnbbodyArr.push(COOKIE.datas.find(item => item.key === `yqnbbody${op}`).val);


        }
    }
} else {
    if ("yqnbXH") {
        XH = $.getval("yqnbXH") || '0';
    }
    if ("yqnbXYZ") {
        XYZ = $.getval("yqnbXYZ") || '100';
    }
    if ("yqnbCASH") {
        XH = $.getval("yqnbCASH") || '0';
    }
    if ("yqnbName") {
        XH = $.getval("yqnbName") || '';
    }
    if ("yqnbAlipay") {
        XH = $.getval("yqnbAlipay") || '';
    }
    if ("yqnbnotifyttt") {
        notifyttt = $.getval("yqnbnotifyttt") || '1';
    }
    if ("yqnbnotifyInterval") {
        notifyInterval = $.getval("yqnbnotifyInterval") || '2';
    }
    if ("yqnbMinutes") {
        Minutes = $.getval("yqnbMinutes") || '10';
    }

    let yqnbCount = ($.getval('yqnbCount') || '1') - 0;
    for (let i = 1; i <= yqnbCount; i++) {
        if (i == 1) {
            op = ``
        } else {
            op = i
        }
        if ($.getdata(`yqnbheader${op}`)) {

            yqnbheaderArr.push($.getdata(`yqnbheader${op}`));

            yqnbbodyArr.push($.getdata(`yqnbbody${op}`));


        }
    }
}

function GetCookie() {

    //获取易趣牛帮
    if ($request && $request.url.indexOf("index.php") >= 0 && $request.url.indexOf("Appapi") >= 0) {
        const yqnbheaderVal = $request.headers.Cookie;
        const yqnbbodyVal = $request.body.split('uid=')[1];
        if (yqnbheaderVal && yqnbbodyVal) {
            if (XH == 1) {
                cookie()

                function cookie() {
                    headers = $.getdata('yqnbheader' + $.idx);
                    if (headers) {
                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else {
                        $.setdata(yqnbheaderVal, "yqnbheader" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取yqnbheaderVal✅: 成功,yqnbheaderVal: ${yqnbheaderVal}`
                        );
                        $.msg($.name + $.idx, `获取yqnbheaderVal: 成功🎉`, ``);
                        $.setdata(yqnbbodyVal, "yqnbbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取yqnbbodyVal✅: 成功,yqnbbodyVal: ${yqnbbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取yqnbbodyVal: 成功🎉`, ``);
                        $.done();
                    };
                }
            } else {
                $.setdata(yqnbheaderVal, "yqnbheader" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取yqnbheaderVal✅: 成功,yqnbheaderVal: ${yqnbheaderVal}`
                );
                $.msg($.name + $.idx, `获取yqnbheaderVal: 成功🎉`, ``);
                $.setdata(yqnbbodyVal, "yqnbbody" + $.idx);
                $.log(
                    `[${$.name + $.idx}] 获取yqnbbodyVal✅: 成功,yqnbbodyVal: ${yqnbbodyVal}`
                );
                $.msg($.name + $.idx, `获取yqnbbodyVal: 成功🎉`, ``);
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
    `============ 共 ${yqnbheaderArr.length} 个${$.name}账号=============\n`
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
//str编码 encodeUnicode("中文") 
function encodeUnicode(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + res.join("\\u");
}
//str解码 decodeUnicode("\u4e2d\u6587")
function decodeUnicode(str) {
    str = str.replace(/\\u/g, "%u");
    return unescape(str);
}

//es编码  escape("中文")

//es解码  unescape("%u4E2D%u6587")

//URI编码  encodeURI("中文")

//URI解码  decodeURI("%E4%B8%AD%E6%96%87")

//URIC编码  encodeURIComponent("中文")

//URIC解码  decodeURIComponent("%E4%B8%AD%E6%96%87")


//日志格式化
function format(str) {


    if (logs == 2) {
        str = JSON.stringify(str).replace(/,/g, ",\n").replace(/{/g, '{\n').replace(/}/g, '\n}').replace(/\\"/g, '"').replace(/\\\\/g, '\\')
    }
    if (logs == 3) {
        str = decodeUnicode(JSON.stringify(str)).replace(/,/g, ",\n").replace(/{/g, '{\n').replace(/}/g, '\n}').replace(/\\/g, "")
    }

    return str;
}
//随机延迟
function RT(X, Y) {
    do rt = Math.ceil(Math.random() * Y);
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
    if (!yqnbheaderArr || yqnbheaderArr == '') {
        $.msg(
            $.name,
            '提示：⚠️请>>点击前往获取cookie http://nb.ioxing.com/index.php/Home/Public/login1/newpid/8369\n',
            'http://nb.ioxing.com/index.php/Home/Public/login1/newpid/8369', {
                "open-url": "http://nb.ioxing.com/index.php/Home/Public/login1/newpid/8369"
            }
        );
        return;
    } else {
        for (let i = 0; i < yqnbheaderArr.length; i++) {

            yqnbheaderVal = yqnbheaderArr[i];

            yqnbbodyVal = yqnbbodyArr[i];



            $.index = i + 1;
            O = (`${$.name + $.index}🔔`);
            $.isLogin = true;


            if (yqnbheaderVal && yqnbheaderVal != '') {


                if (RT(1, 100) <= XYZ) {


                    console.log(`-----------------\n\n🔔开始运行【${$.name + $.index}】`)
                    K = `用户名🚩`;
                    yqnburl = `http://nb.ioxing.com/index.php/Home/Appapi/userInfo`
                    yqnbheader = {
                        'Cookie': `${yqnbheaderVal}`,
                        'Content-Type': `application/x-www-form-urlencoded`,
                        'Host': `nb.ioxing.com`,
                    };
                    yqnbbody = `aid=niubang1234&uid=${yqnbbodyVal}`


                    await task();
                    if (!$.isLogin) {
                        $.msg(O, time(Number(Date.now())) + `⚠️COOKIE失效,\n请>>点击前往获取http://nb.ioxing.com/index.php/Home/Public/login1/newpid/8369`, {
                            "open-url": "http://nb.ioxing.com/index.php/Home/Public/login1/newpid/8369"
                        });
                        if ($.isNode()) {
                            await notify.sendNotify(O, time(Number(Date.now())) + `⚠️COOKIE失效,\n请>>点击前往获取http://nb.ioxing.com/index.php/Home/Public/login1/newpid/8369`);
                        }
                        continue
                    }




                    K = `今日收益🚩`;
                    yqnburl = `http://nb.ioxing.com/index.php/Home/Appapi/jifenList`
                    yqnbheader = {
                        'Cookie': `${yqnbheaderVal}`,
                        'Content-Type': `application/x-www-form-urlencoded`,
                        'Host': `nb.ioxing.com`,
                    };
                    yqnbbody = `page=1&uid=${yqnbbodyVal}`

                    await task();

                    K = `签到列表🚩`;
                    yqnburl = `http://nb.ioxing.com/index.php/Home/Appapi/signList`
                    yqnbheader = {
                        'Cookie': `${yqnbheaderVal}`,
                        'Content-Type': `application/x-www-form-urlencoded`,
                        'Host': `nb.ioxing.com`,
                    };
                    yqnbbody = `uid=${yqnbbodyVal}`

                    await task();

                    if ($.signlist.sign.dayqd == 0) {
                        K = `签到🚩`;
                        yqnburl = `http://nb.ioxing.com/index.php/Home/Appapi/sign`
                        yqnbheader = {
                            'Cookie': `${yqnbheaderVal}`,
                            'Content-Type': `application/x-www-form-urlencoded`,
                            'Host': `nb.ioxing.com`,
                        };
                        yqnbbody = `boud=0&uid=${yqnbbodyVal}`

                        DD = RT(2000, 3000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task();
                    }

                    if ($.signlist.sign.isdouble == 0) {
                        K = `签到加倍🚩`;
                        yqnburl = `http://nb.ioxing.com/index.php/Home/Appapi/sign`
                        yqnbheader = {
                            'Cookie': `${yqnbheaderVal}`,
                            'Content-Type': `application/x-www-form-urlencoded`,
                            'Host': `nb.ioxing.com`,
                        };
                        yqnbbody = `boud=1&uid=${yqnbbodyVal}`
                        DD = RT(20000, 30000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task();
                    }



                    K = `任务页🚩`;
                    yqnburl = `http://nb.ioxing.com/index.php/Home/Appapi/V2qiandaoList`
                    yqnbheader = {
                        'Cookie': `${yqnbheaderVal}`,
                        'Content-Type': `application/x-www-form-urlencoded`,
                        'Host': `nb.ioxing.com`,
                    };
                    yqnbbody = `aid=niubang1234&uid=${yqnbbodyVal}`
                    await task();


                    if ($.signlist.sign.isdouble == 0) {

                        K = `视频🚩`;
                        yqnburl = `http://nb.ioxing.com/index.php/Home/Appapi/viodeqd`
                        yqnbheader = {
                            'Cookie': `${yqnbheaderVal}`,
                            'Content-Type': `application/x-www-form-urlencoded`,
                            'Host': `nb.ioxing.com`,
                        };
                        yqnbbody = `adid=32&uid=${yqnbbodyVal}`

                        DD = RT(20000, 30000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task();
                    }

                    if ($.signlist.sign.isdouble == 0) {
                        K = `分享🚩`;
                        yqnburl = `http://nb.ioxing.com/index.php/Home/Appapi/obtainJifen`
                        yqnbheader = {
                            'Cookie': `${yqnbheaderVal}`,
                            'Content-Type': `application/x-www-form-urlencoded`,
                            'Host': `nb.ioxing.com`,
                        };
                        yqnbbody = `banid=31&type=4&uid=${yqnbbodyVal}`

                        DD = RT(2000, 3000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task();
                    }


                    if (taskvideo.countnum != taskvideo.allcount) {

                        K = `视频🚩`;
                        yqnburl = `http://nb.ioxing.com/index.php/Home/Appapi/viodeqd`
                        yqnbheader = {
                            'Cookie': `${yqnbheaderVal}`,
                            'Content-Type': `application/x-www-form-urlencoded`,
                            'Host': `nb.ioxing.com`,
                        };
                        yqnbbody = `adid=32&uid=${yqnbbodyVal}`

                        DD = RT(20000, 30000)
                        console.log(`随机延迟${DD/1000}秒`)
                        await $.wait(DD)
                        await task();
                    }


                    /*


                K = `报名页🚩`;
                yqnburl = `http://nb.ioxing.com/index.php/Home/AppActiv/activyinfo`
                yqnbheader = {
                    'Cookie': `${yqnbheaderVal}`,
                    'Content-Type': `application/x-www-form-urlencoded`,
                    'Host': `nb.ioxing.com`,
                };
                yqnbbody = `uid=${yqnbbodyVal}`
                await task();

                if ($.bmy.data.flag == 3) {
                    K = `打卡🚩`;
                    yqnburl = `http://nb.ioxing.com/index.php/Home/AppActiv/playactiv`
                    yqnbheader = {
                        'Cookie': `${yqnbheaderVal}`,
                        'Content-Type': `application/x-www-form-urlencoded`,
                        'Host': `nb.ioxing.com`,
                    };
                    yqnbbody = `uid=${yqnbbodyVal}`

                    DD = RT(20000, 30000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task();
                }
                if ($.bmy.data.flag == 1) {
                    K = `报名🚩`;
                    yqnburl = `http://nb.ioxing.com/index.php/Home/AppActiv/baoming`
                    yqnbheader = {
                        'Cookie': `${yqnbheaderVal}`,
                        'Content-Type': `application/x-www-form-urlencoded`,
                        'Host': `nb.ioxing.com`,
                    };
                    yqnbbody = `uid=${yqnbbodyVal}`

                    DD = RT(20000, 30000)
                    console.log(`随机延迟${DD/1000}秒`)
                    await $.wait(DD)
                    await task();
                }
				
				
				*/

                    K = `提现列表🚩`;
                    yqnburl = `http://nb.ioxing.com/index.php/Home/Appapi/goodsList`
                    yqnbheader = {
                        'Cookie': `${yqnbheaderVal}`,
                        'Content-Type': `application/x-www-form-urlencoded`,
                        'Host': `nb.ioxing.com`,
                    };
                    yqnbbody = `aid=niubang1234`
                    await task();


                    if (CASH >= 6) {
                        K = `提现🚩`;
                        yqnburl = `http://nb.ioxing.com/index.php/Home/Appapi/duihuan`
                        yqnbheader = {
                            'Cookie': `${yqnbheaderVal}`,
                            'Content-Type': `application/x-www-form-urlencoded`,
                            'Host': `nb.ioxing.com`,
                        };
                        Name = encodeURI(Name)

                        if ($.user.user.price / 1250 >= CASH) {

                            if (CASH == 20) {
                                goodsid = 13
                            } else if (CASH == 10) {
                                goodsid = 11
                            } else if (CASH == 6) {
                                goodsid = 10
                            }

                        }

                        if (CASH == 888) {

                            if ($.user.user.price / 1250 >= 20) {
                                goodsid = 13
                            } else if ($.user.user.price / 1250 >= 10) {
                                goodsid = 11
                            } else if ($.user.user.price / 1250 >= 6) {
                                goodsid = 10
                            }

                        }

                        if (goodsid >= 10) {
                            yqnbbody = `goodsid=${goodsid}&one=${Name}&two=${Alipay}&uid=${yqnbbodyVal}`
                            await task();
                        }

                    }

                } else {
                    console.log(`-----------------\n\n🔔停止运行【${$.name + $.index}】`)

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
            url: `${yqnburl}`,
            headers: yqnbheader,
            body: `${yqnbbody}`,
        }
        $.post(url, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网络重试`)
                } else {
                    if (data) {
                        if (K == `用户名🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.user = JSON.parse(data);
                            if ($.user.code == 1) {

                                console.log(`\n${O}\n========== ${$.user.user.nickname} ==========\n注册时间：${time($.user.user.create_time*1000)}\n账户信息：当前收益${$.user.user.price/1250}元，收益总计${$.user.user.total_price/1250}元\n`)
                                $.message += `\n${O}\n========== 【${$.user.user.nickname}】 ==========\n【注册时间】：${time($.user.user.create_time*1000)}\n【账户信息】：当前收益${$.user.user.price/1250}元，收益总计${$.user.user.total_price/1250}元\n`;


                            } else {
                                $.isLogin = false; //cookie过期
                                return
                            }
                        }

                        if (K == `今日收益🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.coinlist = JSON.parse(data);
                            if ($.coinlist.code == 1) {

                                console.log(`今日收益：${$.coinlist.today/1250}元\n`)
                                $.message += `【今日收益】：${$.coinlist.today/1250}元\n`;
                            }
                        }

                        if (K == `签到列表🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.signlist = JSON.parse(data);
                            if ($.signlist.code == 1) {
                                signlistinfo = $.signlist.data.find(item => item.id == $.signlist.sign.day);
                                if (signlistinfo && signlistinfo.titlle) {
                                    console.log(`签到列表：今日${signlistinfo.titlle},${signlistinfo.price}积分\n`)
                                    $.message += `【签到列表】：今日${signlistinfo.titlle},${signlistinfo.price}积分\n`;
                                }
                            }
                        }

                        if (K == `签到🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.sign = JSON.parse(data);
                            if ($.sign.code == 1) {
                                console.log(`签到：${$.sign.msg}\n`)
                                $.message += `【签到】：${$.sign.msg}\n`;
                            }
                        }

                        if (K == `签到加倍🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.signs = JSON.parse(data);
                            if ($.signs.code == 1) {
                                console.log(`签到加倍：${$.signs.msg}\n`)
                                $.message += `【签到加倍】：${$.signs.msg}\n`;
                            }
                        }

                        if (K == `任务页🚩`) {


                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.task = JSON.parse(data);

                            if ($.task.code == 1) {


                                taskfx = $.task.data.find(item => item.id === "31");
                                taskvideo = $.task.data.find(item => item.id === "32");

                                if ($.signlist.sign.isdouble == 1) {
                                    console.log(`任务页：${taskfx.title},${taskfx.point}积分，${taskvideo.title},${taskvideo.point}积分,进度：${taskvideo.countnum}/${taskvideo.allcount}\n`)
                                    $.message += `【任务页】：${taskfx.title},${taskfx.point}积分，${taskvideo.title},${taskvideo.point}积分,进度：${taskvideo.countnum}/${taskvideo.allcount}\n`;
                                }
                            }
                        }

                        if (K == `分享🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.fx = JSON.parse(data);
                            if ($.fx.code == 1) {
                                console.log(`分享：${$.fx.msg}${taskfx.point}积分\n`)
                                $.message += `【分享】：${$.fx.msg}${taskfx.point}积分\n`;
                            }
                        }

                        if (K == `视频🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.video = JSON.parse(data);
                            if ($.video.code == 1) {
                                console.log(`视频：${$.video.msg}${taskvideo.point}积分\n`)
                                $.message += `【视频】：${$.video.msg}${taskvideo.point}积分\n`;
                            }
                        }

                        if (K == `报名页🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.bmy = JSON.parse(data);
                            if ($.bmy.code == 1) {
                                if ($.bmy.data.flag == 2) {
                                    console.log(`报名页：${$.bmy.data.toptitle},奖池${$.bmy.data.allcount}积分,${$.bmy.data.alluser}，今日已报名\n`)
                                    $.message += `【报名页】：${$.bmy.data.toptitle},奖池${$.bmy.data.allcount}积分,${$.bmy.data.alluser}，今日已报名\n`;
                                } else {
                                    console.log(`报名页：${$.bmy.data.toptitle},奖池${$.bmy.data.allcount}积分,${$.bmy.data.alluser}\n`)
                                    $.message += `【报名页】：${$.bmy.data.toptitle},奖池${$.bmy.data.allcount}积分,${$.bmy.data.alluser}\n`;
                                }
                            }
                        }

                        if (K == `打卡🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.dk = JSON.parse(data);
                            if ($.dk.code == 1) {
                                console.log(`打卡：${$.dk.msg}\n`)
                                $.message += `【打卡】：${$.dk.msg}\n`;
                            }
                        }

                        if (K == `报名🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.bm = JSON.parse(data);
                            if ($.bm.code == 1) {
                                console.log(`报名：${$.bm.msg}\n`)
                                $.message += `【报名】：${$.bm.msg}\n`;
                            }
                        }

                        if (K == `提现列表🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.dhlb = JSON.parse(data);
                            if ($.dhlb.code == 1) {
                                dhlbinfo6 = $.dhlb.data.find(item => item.id == "10");
                                dhlbinfo10 = $.dhlb.data.find(item => item.id == "11");
                                dhlbinfo20 = $.dhlb.data.find(item => item.id == "13");

                                console.log(`提现列表：${dhlbinfo6.name}/${dhlbinfo6.integral}分，${dhlbinfo10.name}/${dhlbinfo10.integral}分，${dhlbinfo20.name}/${dhlbinfo20.integral}分\n`)
                                $.message += `【提现列表】：${dhlbinfo6.name}/${dhlbinfo6.integral}分，${dhlbinfo10.name}/${dhlbinfo10.integral}分，${dhlbinfo20.name}/${dhlbinfo20.integral}分\n`;
                            }
                        }


                        if (K == `提现🚩`) {
                            if (logs) $.log(`${O}, ${K}: ${format(data)}`);
                            $.tx = JSON.parse(data);
                            if ($.tx.code == 1) {
                                console.log(`提现${CASH}元：${$.tx.msg}\n`)
                                $.message += `【提现${CASH}元】：${$.tx.msg}\n`;
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

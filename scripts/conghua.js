/*
┎━━┰┒┎┰━━┰━━┰━━┰┒┎┰┒┎┰━━┒
│┎━┦┕┚│┎┒│┎┒│┎┰┦┕┚││││┎┒│
│┕━┦┎┒│┕┚││││┕┚│┎┒│┕┚│┎┒│
┕━━┹┚┕┹━━┹┚┕┹━━┹┚┕┹━━┹┚┕┚
============================================
成功的话请打开App-我的，帮我填下邀请码347770助力
============================================
说明详情请见：https://raw.githubusercontent.com/CenBoMin/GithubSync/main/CONGHUA/readme.js

*/

const jsname = '葱花视频'
const $ = Env(jsname)
const logs = $.getdata('logbutton'); //0为关闭日志，1为开启,默认为0
const notify = $.isNode() ? require('./sendNotify') : '';
const notifyInterval = $.getdata('tzbutton'); //0为关闭通知，1为所有通知,默认为0

let task = '';
let tz = '';
let uid = $.getdata('uid')
let headerVal = {
  'User-Agent': `cong hua shi pin/1.4.6 (iPhone; iOS 14.1; Scale/2.00)`,
  'Accept': `*/*`,
  'Accept-Encoding': `gzip, deflate, br`,
  'Connection': `keep-alive`,
  'Content-Type': `application/x-www-form-urlencoded`,
  'Host': `app.kxp.com`,
  'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
};

//现在毫秒格式(13位数)
let todaytimems = Math.round(Date.now())
//现在秒格式(10位数)
let todaytimes = Math.round(Date.now() / 1000)

//time
var hour = '';
var minute = '';
if ($.isNode()) {
  hour = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getHours();
  minute = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getMinutes();
} else {
  hour = (new Date()).getHours();
  minute = (new Date()).getMinutes();
}

//time+msg
async function showmsg() {
  if (notifyInterval == 1) {
    if ($.isNode()) {
      if ((hour == 8 && minute <= 20) || (hour == 12 && minute <= 20) || (hour == 23 && minute <= 20)) {
        await notify.sendNotify($.name, tz)
      }
    } else {
      if ((hour == 8 && minute <= 20) || (hour == 12 && minute <= 20) || (hour == 23 && minute <= 20)) {
        $.msg(msgstyle, '', tz);
      }
    }
  } else if (notifyInterval == 0) {
    console.log(msgstyle + '' + tz);
  }
}

const taskcenterbodyArr = [];
let taskcenterbodyVal = "";
let TASKCENTERBODY = [];

const sharebodyArr = [];
let sharebodyVal = "";
let SHAREBODY = [];

const sharerewardbodyArr = [];
let sharerewardbodyVal = "";
let SHAREREWARDBODY = [];

const timeredbodyArr = [];
let timeredbodyVal = "";
let TIMEREDBODY = [];

const readbodyArr = [];
let readbodyVal = "";
let READBODY = [];

const callbackurlArr = [];
let callbackurlVal = "";

const callbackkeyArr = [];
let callbackkeyVal = "";

const cashbodyArr = [];
let cashbodyVal = "";

const cashkeyArr = [];
let cashkeyVal = "";


let readscore = 0;
let sharescore = 0;

let bodys = $.getdata("chgetbody_video");
let bodys2 = $.getdata("chgetbody_share");
let indexLast = $.getdata('chgetbody_video_index');

$.begin = indexLast ? parseInt(indexLast, 10) : 1;


if (!(bodys && bodys != '')) {
  $.msg("", "", '请先-观看视频-获取请求体,body容易失效建议50个...')
  $.done()
}

if (!(bodys2 && bodys2 != '')) {
  $.msg("", "", '请先-分享视频-获取请求体,只能3个！3个！3个！')
  $.done()
}

readbodyVal = bodys.split('#');
sharebodyVal = bodys2.split('#');

////////////////////////////////////////////////////////////////////////

Object.keys(readbodyVal).forEach((item) => {
  if (readbodyVal[item]) {
    readbodyArr.push(readbodyVal[item])
  }
})

Object.keys(sharebodyVal).forEach((item) => {
  if (sharebodyVal[item]) {
    sharebodyArr.push(sharebodyVal[item])
  }
})


if ($.isNode()) {

  Object.keys(taskcenterbodyVal).forEach((item) => {
    if (taskcenterbodyVal[item]) {
      taskcenterbodyArr.push(taskcenterbodyVal[item])
    }
  });

  Object.keys(sharerewardbodyVal).forEach((item) => {
    if (sharerewardbodyVal[item]) {
      sharerewardbodyArr.push(sharerewardbodyVal[item])
    }
  });

  Object.keys(timeredbodyVal).forEach((item) => {
    if (timeredbodyVal[item]) {
      timeredbodyArr.push(timeredbodyVal[item])
    }
  });

  Object.keys(callbackkeyVal).forEach((item) => {
    if (callbackkeyVal[item]) {
      callbackkeyArr.push(callbackkeyVal[item])
    }
  });

  Object.keys(cashbodyVal).forEach((item) => {
    if (cashbodyVal[item]) {
      cashbodyArr.push(cashbodyVal[item])
    }
  });

  Object.keys(cashkeyVal).forEach((item) => {
    if (cashkeyVal[item]) {
      cashkeyArr.push(cashkeyVal[item])
    }
  });

  Object.keys(callbackurlVal).forEach((item) => {
    if (callbackurlVal[item]) {
      callbackurlArr.push(callbackurlVal[item])
    }
  });

} else {
  //readbodyArr.push($.getdata('chgetbody_video'));
  //sharebodyArr.push($.getdata('chgetbody_share'));
  taskcenterbodyArr.push($.getdata('chgetbody_taskcenter'));
  sharerewardbodyArr.push($.getdata('chgetbody_sharereward'));
  timeredbodyArr.push($.getdata('chgetbody_timered'));
  callbackkeyArr.push($.getdata('callbackkey'));
  cashbodyArr.push($.getdata('cashbody'));
  cashkeyArr.push($.getdata('cashkey'));
  callbackurlArr.push($.getdata('callbackurl'));
}


////////////////////////////////////////////////////////////////////////


!(async () => {
  await Jsname()
  msgstyle = (`🥦${jsname}任务执行通知🔔`);
  taskcenterbodyVal = taskcenterbodyArr[0];
  timeredbodyVal = timeredbodyArr[0];
  callbackurlVal = callbackurlArr[0];
  callbackkeyVal = callbackkeyArr[0];
  cashbodyVal = cashbodyArr[0];
  cashkeyVal = cashkeyArr[0];

  console.log(`\n✅ 查询账户明细\n`)
  if (uid >= 1) {
    await todaycoin(); //box填入uid
  } else {
    $.msg(
      jsname,
      "💖请到BoxJs填写自己的邀请码,保存设置\n",
      "点击跳转,复制链接,订阅我的BoxJs", {
        "open-url": "https://raw.githubusercontent.com/CenBoMin/GithubSync/main/cenbomin.box.json"
      }
    );
  }

  if (hour == 8 || hour == 9 || hour == 23) {
    await videoread(); //自动刷视频
  } else if (hour == 7) {
    console.log(`\n✅ 执行自行助力任务`)
    await callback();
  }else if (hour <= 17) {
    console.log(`\n✅ 打印任务状态清单`)
    await taskcenter(); //任务中心
    console.log(`\n✅ 执行时段奖励任务`)
    await timered(task); //时段奖励
    await sharevideo(); //分享任务
  }  else {
    console.log(`\n✅时段奖励与分享奖励已达上限,\n等待晚上11点执行自动阅读任务`)
    tz += `\n✅时段奖励与分享奖励已达上限,\n等待晚上11点执行自动阅读任务`;
  }
    console.log(`\n✅ 执行提现任务`)
  if (mycash == 50000) {
    await cash();
    console.log(`\n【5元提现】：成功🎉`)
    tz += `【5元提现】：成功🎉\n`;
  } else {
    console.log(`\n【5元提现】：金币未满或分享天数不足💸`)
    tz += `【5元提现】：提现失败\n`;
  }
  //shareTcode = callbackurlVal.split("https://task.youth.cn/count2/callback?si=")[1]
  //sharecode = shareTcode.split("&")[0]
  //console.log(`\n【你的助力码】:\n${sharecode}`);

  await showmsg();

})()
.catch((e) => $.logErr(e))
  .finally(() => $.done())



////////////////////////////////////////////////////////////////////////
//助力分享
async function callback() {
  let callbackurl = callbackurlVal.replace(/&_=\d+/, `&_=${todaytimems}`)
  return new Promise((resolve) => {
    let url = {
      url: `${callbackurl}`,
      body: ``,
      headers: JSON.parse(callbackkeyVal),
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {

          if (logs == 1) $.log(data)
          $.log(data)
          //data = JSON.parse(data);
          console.log(`【助力分享】:获得500金币`);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

//提现cash
async function cash() {
  return new Promise((resolve) => {
    let url = {
      url: `https://app.kxp.com/withdrawal/v2/wechat/exchange`,
      body: cashbodyVal,
      headers: JSON.parse(cashkeyVal),
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            $.log(data)
            data = JSON.parse(data);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}


async function videoread() {
  if (!readbodyArr[0]) {
    console.log($.name, '【提示】请把阅读视频的请求体填入Github 的 Secrets 中，请以#隔开')
    return;
  }
  $.log('\n✅ 查询刷视频任务\n', `视频总数${readbodyArr.length}个,上次执行到第${$.begin}个,预计执行${((readbodyArr.length - $.begin) / 120).toFixed(2)}小时`)
  $.index = 0;
  for (let i = indexLast ? indexLast : 0; i < readbodyArr.length; i++) {
    if (readbodyArr[i]) {
      readbody = readbodyArr[i];
      $.index = $.index + 1;
      console.log(`\n✅ 执行自动刷视频任务【${$.index}】`)
    }
    await AutoRead();
  }
  $.log('', '', `🥦 本次共完成${$.index}次阅读，获得${readscore}个金币，阅读请求结束`);
  tz += `【自动阅读】：${readscore}个金币\n`;
}
async function sharevideo() {
  if (!sharebodyArr[0]) {
    console.log($.name, '【提示】请把分享视频的请求体填入Github 的 Secrets 中，请以#隔开')
    return;
  }
  $.index = 0;
  for (let i = 0; i < sharebodyArr.length; i++) {
    if (sharebodyArr[i]) {
      sharebody = sharebodyArr[i];
      sharerewardbodyVal = sharerewardbodyArr[0];
      $.index = $.index + 1;
      console.log(`\n✅ 执行分享视频任务【${$.index}】`)
    }
    await share(task); //分享
    await $.wait(3000);
    await sharereward(task); //分享奖励
  }

}

//任务中心
function taskcenter() {
  return new Promise((resolve, reject) => {
    let taskurl = {
      url: `https://app.kxp.com/task/v1/task_center/data`,
      body: taskcenterbodyVal,
      headers: headerVal,
    }
    $.post(taskurl, async (error, resp, data) => {
      //$.log("tasklog:" + data+"\n")
      task = JSON.parse(data)
      //$.log(`【金币换算】:${(task.data.score/10000).toFixed(2)}\n`);
      $.log(`【${task.data.task_list[0].title}】:${task.data.task_list[0].button}`);
      $.log(`【${task.data.task_list[1].title}】:${task.data.task_list[1].button}`);
      $.log(`【${task.data.task_list[2].title}】:${task.data.task_list[2].button}`);
      $.log(`【${task.data.task_list[3].title}】:${task.data.task_list[3].button}`);
      $.log(`【${task.data.task_list[4].title}】:${task.data.task_list[4].button}`);

      //$.log(`【任务状态】:${task.data.task_list[6].status}\n`);

      tz += `【现金余额】：¥${task.data.activity_money.money}元\n`

      resolve()
    })
  })
}


//今日金币
function todaycoin() {

  return new Promise((resolve, reject) => {
    let todaycoinurl = {
      url: `https://app.kxp.com/web/income/detail?uid=${uid}`,
      headers: headerVal,
    }
    $.post(todaycoinurl, async (error, resp, data) => {
      let todaycoin = JSON.parse(data);
      mycash = todaycoin.data.score
      $.log(`【今日金币】：${todaycoin.data.today_score}金币`);
      $.log(`【账户金币】：${todaycoin.data.score}金币,${todaycoin.data.money}`);
      $.log(`【获取总计】：${todaycoin.data.total_score}金币`);
      tz += `【今日金币】：${todaycoin.data.today_score}金币\n`;
      tz += `【账户金币】：${todaycoin.data.score}金币,${todaycoin.data.money}\n`;
      tz += `【获取总计】：${todaycoin.data.total_score}金币\n`;
      resolve()
    })
  })

}

//分享视频赚钱
function share(task) {
  if (task.data.task_list[0].title_en === "share_video" || task.data.task_list[2].title_en === "share_video" || task.data.task_list[3].title_en === "share_video") {
    return new Promise((resolve, reject) => {
      let shareurl = {
        url: `https://app.kxp.com/video/v1/video/share`,
        body: sharebody,
        headers: headerVal,
      }
      $.post(shareurl, async (error, resp, data) => {
        let share = JSON.parse(data);
        //$.log(`\n本次阅读获得${share.data.score}个金币🏅\n`);
        //sharescore += share.data.score;
        if (logs == 1) $.log(data)
        $.log(`分享任务奖励请求：成功🎉`);
        resolve()
      })
    })
  };
}


function sharereward(task) {
  if (task.data.task_list[0].title_en === "share_video") {
    return new Promise((resolve, reject) => {
      let sharerewardurl = {
        url: `https://app.kxp.com/task/v1/task_center/share_video_reward`,
        body: sharerewardbodyVal,
        headers: headerVal,
      }
      $.post(sharerewardurl, async (error, resp, data) => {
        let sharereward = JSON.parse(data);
        if (sharereward.code === 1007) {
          if (logs == 1) $.log(data)
          $.log(`【分享奖励】：账号异常❌\n请评论,点赞,上传视频...并禁用脚本观察`)
          tz += `【分享奖励】：账号异常❌\n`;
        } else {
          if (logs == 1) $.log(data)
          $.log(`本次任务获得${sharereward.data.score}个金币🏅`);
          tz += `【分享任务】：${sharescore}个金币\n`;
          sharescore += sharereward.data.score;
        }
        resolve()
      })
    })
  } else {
    $.log(`【分享视频】：已完成🎉`);
    tz += `【分享视频】：已完成🎉\n`;
  }
}

//每天领金币（30min一次）
function timered(task) {
  if (task.data.task_list[0].status === 2 && task.data.task_list[0].title_en === "get_coin") {
    return new Promise((resolve, reject) => {
      const timeredurl = {
        url: `https://app.kxp.com/task/v1/task_center/red`,
        body: timeredbodyVal,
        headers: headerVal,
      };
      $.post(timeredurl, async (error, response, data) => {
        timered = JSON.parse(data)

        if (timered.code === 1007) {
          if (logs == 1) $.log(data)
          $.log(`【时段奖励】：领取失败,已达上限❌`)
          tz += `【时段奖励】：领取失败,已达上限❌\n`;
        } else {
          if (logs == 1) $.log(data)
          $.log(`【时段奖励】：获取${timered.data.score}金币`);
          tz += `【时段奖励】：${timered.data.score}金币\n`;
        }

        resolve()
      })
    })
  } else {
    $.log(`【时段奖励】：时间未到`);
    tz += `【时段奖励】：时间未到\n`;
  }
}

//执行阅读函数

function AutoRead() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `https://app.kxp.com/video/v1/video/complete`,
      headers: headerVal,
      body: readbody
    };
    $.post(url, async (error, response, data) => {
      $.begin = $.begin + 1;
      let res = $.begin % readbodyArr.length
      $.setdata(res + "", 'chgetbody_body_index');
      let readres = JSON.parse(data);
      if (readres.code == '100006') {
        if (logs == 1) $.log(data)
        $.log(`⛔️第${$.index}次-获取金币已达上限🥺,明日在来！`)
      } else if (readres.code == '1007') {
        if (logs == 1) $.log(data)
        $.log(`【本次阅读${$.index}】：账号异常❌\n请评论,点赞,上传视频...并禁用脚本观察`)
        tz += `【本次阅读${$.index}】：账号异常❌\n`;
      } else if (typeof readres.data.score === 'number') {
        if (logs == 1) $.log(data)
        let randomtime = Randomtime(21000, 60000) / 1000
        await $.wait(Randomtime(21000, 60000));
        console.log(`【随机延迟🕑】:${Math.round(randomtime)}秒...`);
        $.log(`【本次阅读】：${readres.data.score}个金币🏅`);
        readscore += readres.data.score;

      }
      resolve()
    })
  })
}

// prettier-ignore
function Jsname() {

  $.log(`┎━━┰┒┎┰━━┰━━┰━━┰┒┎┰┒┎┰━━┒`)
  $.log(`│┎━┦┕┚│┎┒│┎┒│┎┰┦┕┚││││┎┒│`)
  $.log(`│┕━┦┎┒│┕┚││││┕┚│┎┒│┕┚│┎┒│`)
  $.log(`┕━━┹┚┕┹━━┹┚┕┹━━┹┚┕┹━━┹┚┕┚`)

}

function Randomtime(mintime, maxtime) {
  return Math.round(Math.random() * (maxtime - mintime)) + mintime;
}

function time(time) {
  var date = new Date(time + 8 * 3600 * 1000);
  return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');
}

//安全获取
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`⛔️服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}

function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
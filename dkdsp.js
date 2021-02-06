/*
软件名称:多看点
更新时间：2021-02-06 @肥皂
脚本说明：多看点自动刷视频
本脚本为多看点自动刷视频
请获取多个body再运行脚本
最少获取五个body，根据群友测试，可以领取100次金币左右
一个body可以执行两次，50个body可能足够了，自行测试吧
cron自行判断设置，脚本一次跑完全部body，一天运行2-3次就可以

使用方法:看视频等金币转圈，圈满领取之后提示获取body1，继续下个视频，以此类推。。。。

TG电报群: https://t.me/hahaha8028

我的邀请码：13152063   万分感谢填写！

脚本请配合多看点自动任务使用

2.6更新 加入满收益判断，收益满了停止运行

[task_local]
#多看点
10 * * * * https://raw.githubusercontent.com/age174/-/main/dkd.js, tag=多看点, img-url=https://raw.githubusercontent.com/shoujiqiyuan/PokemonGOforQuanX/master/IconSet/X003.png, enabled=true

#多看点视频
5 * * * * https://raw.githubusercontent.com/age174/-/main/dkdsp.js, tag=多看点视频, img-url=https://raw.githubusercontent.com/shoujiqiyuan/PokemonGOforQuanX/master/IconSet/X003.png, enabled=true

[rewrite_local]

#获取多看点视频body
^http://dkd-api.dysdk.com/android_video/getaward url script-request-body https://raw.githubusercontent.com/age174/-/main/dkdbody.js

#loon

#获取多看点视频body
^http://dkd-api.dysdk.com/android_video/getaward script-path=https://raw.githubusercontent.com/age174/-/main/dkdbody.js, requires-body=true, timeout=10, tag=多看点视频body


#surge


多看点视频body = type=^http://dkd-api.dysdk.com/android_video/getaward,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/dkdbody.js,script-update-interval=0

*/

const $ = new Env("多看点视频")
let dkdbody = $.getdata('dkdbody')
let dkdhd = $.getdata('dkdhd')
let ReadArr = [], YouthBody = "", readscore = 0;
let bodys = $.getdata("dkdvd_body");
if (!(bodys && bodys != '')) {
  $.msg("", "", '请先刷视频获取多body获取越多，脚本可获得金币越多')
  $.done()
}

YouthBody = bodys.split('&');

Object.keys(YouthBody).forEach((item) => {
  if (YouthBody[item]) {
    ReadArr.push(YouthBody[item])
  }
})
let indexLast = $.getdata('dkdvd_body_index');
$.begin = indexLast ? parseInt(indexLast,10) : 1;

!(async () => {
  if (!ReadArr[0]) {
    console.log($.name, '【提示】请把抓包的请求体填入Github 的 Secrets 中，请以&隔开')
    return;
  if(ReadArr.length < 5){
$.msg("", "", '请先刷视频获取至少五个body再运行！')
$.done()
} 
} 
  console.log(`多body数：${ReadArr.length}个\n上次执行到第${$.begin}个\n预计执行${((ReadArr.length - $.begin) / 120).toFixed(2)}个小时🍺`)
  $.index = 0;
  for (let i = indexLast ? indexLast : 0; i < ReadArr.length; i++) {
    if (ReadArr[i]) {
      articlebody = ReadArr[i];
      $.index = $.index + 1;
      console.log(`\n开始多看点第${$.index}次视频💦`)
    }
    await AutoRead();
  }
  //console.log(`\n多看点共完成${$.index}次视频\n共计获得${readscore}个金币，视频请求全部结束🎁`+'\n准备执行开视频红包……🧧')
  
//await dkdhbsp()
 $.msg($.name+'运行完毕！', "", `多看点共完成${$.index}次视频\n共计获得${readscore}个金币，视频请求全部结束🎁`)
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())


function AutoRead() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `http://dkd-api.dysdk.com/android_video/getaward`,
      headers:JSON.parse($.getdata('dkdhd')),
      body: articlebody
    };
    $.post(url, async (error, response, data) => {
      $.begin=$.begin+1;
      let res=$.begin%ReadArr.length
      $.setdata(res+"", 'dkdvd_body_index');
      let readres = JSON.parse(data);
      if (readres.status_code == 200) {
        console.log(`\n本次自动刷视频获得${readres.data.award}个金币，30秒后进行下次自动刷视频🌝\n`);
        readscore += readres.data.award;
        await $.wait(30000);
      }
      else if (readres.status_code == 200) {
        console.log(`\n本次视频获得${readres.data.award}个金币，即将开始下次视频👏🏻\n`)
        readscore += readres.data.award;
        await $.wait(30000);
      
      }
         if (readres.message == '请先领取大额红包再来！') {
        console.log(`\n检测到红包，，即将开始领取👏🏻\n`)     
await dkdhbsp();
      
}
if (readres.status_code == 200&&readres.data.award == 0) {
        $.msg("","","今日多看点视频收益已满，自动结束运行!")
$.done()  
      }
      else if (readres.status_code == 10020) {
        console.log(`第${$.index}次视频请求失败,回执🚫: `+readres.message+'等待30秒执行下次视频')
   
await $.wait(30000);
      }

      resolve()
    })

  })
}
//多看点红包视频     
function dkdhbsp(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://dkd-api.dysdk.com/video/red_getaward',
        headers : JSON.parse($.getdata('dkdhd')),
        body : 'adType=2&' + dkdbody,}
      $.post(url, async (err, resp, data) => {
        try {
           //$.log(dkdhd)
    const result = JSON.parse(data)
        if(result.status_code == 200){
        console.log('开始视频红包，回执:成功🌝 '+result.data.award)
readscore += result.data.award;
}
if(result.status_code == 10020){
        console.log('开始视频红包，回执:失败🚫 '+result.message)}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }

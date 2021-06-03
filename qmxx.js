/*
软件名称:全免小说 
更新时间：2021-06-03 @肥皂
脚本说明：全免小说自动任务

每日几毛子钱。最近项目比较少。有项目可投稿砸我。

软件二维码下载地址:https://i0.hdslb.com/bfs/album/ee82eeff53b89a205b2d33ec0497b7e79898aa88.jpg

邀请码:A89988285

全免小说使用方法:
1-点击福利页面。点击签到获得签到和转盘的数据。
2-点击看视频赚金币，获得视频奖励数据。
3-点击我的。余额,观看提现提现。获得提现视频数据。
4-点击书架,右上角,时段奖励。获得数据。
5-随便进一本小说阅读。完毕获得阅读奖励(阅读奖励的数据有效期只有十分钟。自己看情况整不整)
6-进行一次提现。获得自动提现数据。
本脚本以学习为主,请勿用于非法用途。

TG通知群:https://t.me/Ariszy_Scripts
TG电报交流群: https://t.me/hahaha8028

boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json

全免小说
圈X配置如下，其他软件自行测试
[task_local]
#全免小说
10 0-23 * * * https://raw.githubusercontent.com/age174/-/main/qmxx.js, tag=全免小说, img-url=https://i0.hdslb.com/bfs/album/5d117c3f2a1a15fe692e50282b3e7beeebf96422.png, enabled=true

[rewrite_local]
#全免小说签到转盘
http://ap.taoyuewenhua.com/ajax/ url script-request-headers https://raw.githubusercontent.com/age174/-/main/qmxx.js
#全免小说视频时段
https://.*itaoxiaoshuo.com/auth/ url script-request-headers https://raw.githubusercontent.com/age174/-/main/qmxx.js

[MITM]
hostname = tfbook.ios.itaoxiaoshuo.com,appwall.itaoxiaoshuo.com

*/
const $ = new Env('全免小说');
let status;
status = (status = ($.getval("qmxxstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const qmxxhdArr = [],qmxxtxurlArr = [],qmxxzpurlArr = [],qmxxurlArr = [],qmxxwxurlArr = [],qmxxydurlArr = [],qmxxspurlArr = [],qmxxcount = ''
let qmxxhd = $.getdata('qmxxhd')
let qmxxurl = $.getdata('qmxxurl')
let qmxxzpurl = $.getdata('qmxxzpurl')
let qmxxspurl = $.getdata('qmxxspurl')
let qmxxtxurl = $.getdata('qmxxtxurl')
let qmxxydurl = $.getdata('qmxxydurl')
let qmxxwxurl = $.getdata('qmxxwxurl')
let uid = '',zp = ''
const sphd = {
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Host' : `tfbook.ios.itaoxiaoshuo.com`,
'User-Agent' : ``,
'Accept-Language' : `zh-Hans-CN;q=1.0`
};
const txhd = {
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Host' : `appwall.itaoxiaoshuo.com`,
'User-Agent' : ``,
'Accept-Language' : `zh-Hans-CN;q=1.0`
};
!(async () => {
  if (typeof $request !== "undefined") {
    await qmxxck()
   
  } else {
    qmxxhdArr.push($.getdata('qmxxhd'))
    qmxxurlArr.push($.getdata('qmxxurl'))
    qmxxzpurlArr.push($.getdata('qmxxzpurl'))
    qmxxtxurlArr.push($.getdata('qmxxtxurl'))
    qmxxspurlArr.push($.getdata('qmxxspurl'))
    qmxxydurlArr.push($.getdata('qmxxydurl'))
    qmxxwxurlArr.push($.getdata('qmxxwxurl'))
    let qmxxcount = ($.getval('qmxxcount') || '1');
  for (let i = 2; i <= qmxxcount; i++) {
    qmxxhdArr.push($.getdata(`qmxxhd${i}`))
    qmxxurlArr.push($.getdata(`qmxxurl${i}`))
    qmxxzpurlArr.push($.getdata(`qmxxzpurl${i}`))
    qmxxtxurlArr.push($.getdata(`qmxxtxurl${i}`))
    qmxxspurlArr.push($.getdata(`qmxxspurl${i}`))
    qmxxydurlArr.push($.getdata(`qmxxydurl${i}`))
    qmxxwxurlArr.push($.getdata(`qmxxwxurl${i}`))
  }
    console.log(`------------- 共${qmxxhdArr.length}个账号-------------\n`)
      for (let i = 0; i < qmxxhdArr.length; i++) {
        if (qmxxhdArr[i]) {
          qmxxhd = qmxxhdArr[i];
          qmxxurl = qmxxurlArr[i];
          qmxxzpurl = qmxxzpurlArr[i];
          qmxxtxurl = qmxxtxurlArr[i];
          qmxxspurl = qmxxspurlArr[i];
          qmxxydurl = qmxxydurlArr[i];
          qmxxwxurl = qmxxwxurlArr[i];
          $.index = i + 1;
          console.log(`\n开始【全免小说${$.index}】`)
   
    
         await qmxxqd();
         for(let i = 0; i < 5;i++){
        await $.wait(1000)
        await qmxxzp()
}

        await qmxxsd()
        await qmxxsp()
        await $.wait(1000)
        await qmxxtxsp()
        await qmxxyd()
        await qmxxxx()
        await qmxxtx()
  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//数据获取


function qmxxck() {
   if ($request.url.indexOf("checkin?appid=tfbook") > -1) {
 const qmxxurl = $request.url
        if(qmxxurl)    $.setdata(qmxxurl,`qmxxurl${status}`)
$.log(qmxxurl)
  const qmxxhd = JSON.stringify($request.headers)
        if(qmxxhd)    $.setdata(qmxxhd,`qmxxhd${status}`)
$.log(qmxxhd)

   $.msg($.name,"",'全免小说'+`${status}` +'签到➕转盘数据获取成功！')
  }else if ($request.url.indexOf("acquire_interval_bonus") > -1) {
 const qmxxzpurl = $request.url
        if(qmxxzpurl)    $.setdata(qmxxzpurl,`qmxxzpurl${status}`)
$.log(qmxxzpurl)

   $.msg($.name,"",'全免小说'+`${status}` +'时段奖励数据获取成功！')
  }else if ($request.url.indexOf("ios_coins") > -1) {
 const qmxxspurl = $request.url
        if(qmxxspurl)    $.setdata(qmxxspurl,`qmxxspurl${status}`)
$.log(qmxxspurl)

   $.msg($.name,"",'全免小说'+`${status}` +'视频奖励数据获取成功！')
  }else if ($request.url.indexOf("tfbook_old_withdraw") > -1) {
 const qmxxtxurl = $request.url
        if(qmxxtxurl)    $.setdata(qmxxtxurl,`qmxxtxurl${status}`)
$.log(qmxxtxurl)

   $.msg($.name,"",'全免小说'+`${status}` +'提现视频数据获取成功！')
  }else if ($request.url.indexOf("v2/rt") > -1) {
 const qmxxydurl = $request.url
        if(qmxxydurl)    $.setdata(qmxxydurl,`qmxxydurl${status}`)
$.log(qmxxydurl)

   $.msg($.name,"",'全免小说'+`${status}` +'阅读奖励数据获取成功！')
  }else if ($request.url.indexOf("withdraw_weixin") > -1) {
 const qmxxwxurl = $request.url
        if(qmxxwxurl)    $.setdata(qmxxwxurl,`qmxxwxurl${status}`)
$.log(qmxxwxurl)

   $.msg($.name,"",'全免小说'+`${status}` +'微信提现数据获取成功！')
  }
}

//信息
function qmxxqd(timeout = 0) {
  return new Promise((resolve) => {
uid=qmxxurl.match(/uid=(.*)/)[1]
let url = {
        url : qmxxurl,
        headers : JSON.parse(qmxxhd),
       
}
      $.get(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.errcode == 0){
  $.log(`\n全免小说签到成功,\n          L获得:${result.data.coins}书币`)

} else {

        $.log(`\n全免小说签到:\n          L${result.errmsg}`)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


function qmxxzp(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : `http://ap.taoyuewenhua.com/ajax/lottery/wheel/draw?hideNaviBar=1&showBannerAd=1&appid=tfbook&uid=${uid}`,
        headers : JSON.parse(qmxxhd),
        
}
      $.get(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.errcode == 0){
if(result.data.coins == undefined){
$.log(`\n全免小说转盘:\n          L获得空气,剩余转盘次数${result.data.leftCount}`)
}else{
  $.log(`\n全免小说转盘:\n          L获得${result.data.coins}书币,剩余转盘次数${result.data.leftCount}`)}
    
    
} else {

        $.log(`\n全免小说转盘:\n          L${result.errmsg},开始领取转盘礼盒`)
 for(let i = 1;i < 5 ;i++){
zp=i
await qmxxzplh()
}
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//全免小说转盘礼盒
function qmxxzplh(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : `http://ap.taoyuewenhua.com/ajax/lottery/wheel/boxes/${zp}/draw?hideNaviBar=1&showBannerAd=1&boxId=1&appid=tfbook&uid=${uid}`,
        headers : JSON.parse(qmxxhd),
       
}
      $.get(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.errcode == 0){
  $.log(`\n全免小说转盘礼盒${zp},获得:\n          L${result.data.coins}书币`)

} else {

        $.log(`\n全免小说转盘礼盒${zp}:\n          L${result.errmsg}`)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//全免小说时段奖励
function qmxxsd(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : qmxxzpurl,
        headers : sphd,
       
}
      $.get(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.errcode == 0){
  $.log(`\n全免小说时段奖励:\n          L获得:${result.data.coins}书币`)

} else {

        $.log(`\n全免小说时段奖励:\n          L${result.errmsg}秒`)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//全免小说视频奖励
function qmxxsp(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : qmxxspurl,
        headers : txhd,
       
}
      $.get(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.errcode == 0){
  $.log(`\n全免小说视频:\n          L观看成功`)

} else {

        $.log(`\n全免小说视频观看失败:\n          L${data}`)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//全免小说提现视频
function qmxxtxsp(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : qmxxtxurl,
        headers : txhd,
       
}
      $.get(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.errcode == 0){
  $.log(`\n全免小说提现视频:\n          L观看成功`)

} else {

        $.log(`\n全免小说提现视频观看失败:\n          L${data}`)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//全免小说阅读
function qmxxyd(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : qmxxydurl,
        headers : sphd,
       
}
      $.get(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.errcode == 0){
  $.log(`\n全免小说阅读奖励:\n          L获得${result.data}书币`)
        await $.wait(30000)
        await qmxxyd()
} else {

        $.log(`\n全免小说阅读奖励失败:\n          L${data}`)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//信息
function qmxxxx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `http://ap.taoyuewenhua.com/ajax/task_account?uid=${uid}&appid=tfbook`,
        headers : JSON.parse(qmxxhd),
       
}
      $.get(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.errcode == 0){
  $.log(`\n全免小说信息获取成功,\n          L书币余额:${result.data.coins}书币,现金余额:`+result.data.money / 100)

} else {

        $.log(`\n全免小说信息获取失败:\n          L${result.errmsg}`)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//提现
function qmxxtx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : qmxxwxurl,
        headers : JSON.parse(qmxxhd),
       
}
      $.get(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.errcode == 0){
  $.log(`\n全免小说提现:\n          成功`)

} else {

        $.log(`\n全免小说提现:\n          L${result.errmsg}`)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

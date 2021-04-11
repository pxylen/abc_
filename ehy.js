/*
软件名称:钢镚赚乐步达人二合一 
更新时间：2021-04-11 @肥皂
脚本说明：钢镚赚乐步达人二合一自动任务
两个加起来一天两元左右
本脚本只支持越狱机器。本脚本只支持越狱机器
因为这两个app都锁定了mitm证书，所以非越狱机器无法抓包，抓包就会无网络。
越狱机器需要安装 SSL Kill Switch2 插件来绕过这两个app的mitm证书锁定。安装了该插件去打开开关就好了。

插件下载地址:https://wws.lanzous.com/iikn9nxq1wf
密码:fcmo  下载好了之后直接使用Filza安装注销

扫码下载:
乐步达人下载地址:https://ae01.alicdn.com/kf/Ud29f5ffc670840b6a112ec1b136de7bbN.jpg

钢镚赚下载地址:https://ae01.alicdn.com/kf/Uba083d50f9e24a84ba42baaf8fc31ae6k.jpg

邀请ID: 128338807

乐步达人使用方法:
1-点击中间赚赚,签到,获得签到数据
2-点击浏览静态广告,等完成获得静态广告数据
3-点击浏览视频广告,进入之后有五个视频任务，第一个不用点,看不了。从第二个视频任务开始依次点击观看视频,分别获得视频1.2.3.4的数据
钢镚赚使用方法:
1-点击右上角签到,获得签到数据。
2-点击任务5,进入视频广告任务界面,点击看广告任务,获得看广告数据
3-点击看视频任务,获得看视频任务数据。
4-运行脚本。跑完之后去手动领取每日任务奖励的25金币。获得领取数据

TG通知群:https://t.me/Ariszy_Scripts
TG电报交流群: https://t.me/hahaha8028

boxjs地址 :  
https://raw.githubusercontent.com/age174/-/main/feizao.box.json

钢镚赚乐步达人二合一
圈X配置如下，其他软件自行测试
[task_local]
#钢镚赚乐步达人二合一
0 9 * * * https://raw.githubusercontent.com/age174/-/main/ehy.js, tag=钢镚赚乐步达人二合一, img-url=https://ae01.alicdn.com/kf/Ua59aa6c4f1784bfc9a0f126a3d8b3fc6V.jpg, enabled=true

[rewrite_local]
#乐步达人
https://lebudaren.zhuangangbeng.com/zlgainintegral url script-request-body https://raw.githubusercontent.com/age174/-/main/ehy.js
#钢镚赚
https://api.zhuangangbeng.com url script-request-body https://raw.githubusercontent.com/age174/-/main/ehy.js

#loon重写配置
#乐步达人
https://lebudaren.zhuangangbeng.com/zlgainintegral script-path=https://raw.githubusercontent.com/age174/-/main/ehy.js, requires-body=true, timeout=10, tag=乐步达人
#钢镚赚
https://api.zhuangangbeng.com script-path=https://raw.githubusercontent.com/age174/-/main/ehy.js, requires-body=true, timeout=10, tag=钢镚赚

#surge重写配置
乐步达人 = type=http-request,pattern=https://lebudaren.zhuangangbeng.com/zlgainintegral,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/ehy.js,script-update-interval=0

钢镚赚 = type=http-request,pattern=https://api.zhuangangbeng.com,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/ehy.js,script-update-interval=0

[MITM]
hostname = lebudaren.zhuangangbeng.com,api.zhuangangbeng.com

*/


const $ = new Env('钢镚赚乐步达人二合一');
const headlb = {
'Accept' : `*/*`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Host' : `lebudaren.zhuangangbeng.com`,
'User-Agent' : `le bu da ren/1.5.2 (iPhone; iOS 14.2; Scale/2.00)`,
'Accept-Language' : `zh-Hans-CN;q=1`
};
const head1 = {
'Accept' : `*/*`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Host' : `api.zhuangangbeng.com`,
'User-Agent' : `zgb_tx/2.9.6 CFNetwork/1206 Darwin/20.1.0`,
'Accept-Language' : `zh-cn`
};
let status;
status = (status = ($.getval("ehystatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const lbbodyqdArr = [],lbbody1Arr = [],lbbody2Arr = [],lbbody3Arr = [],lbbody4Arr = [],lbbody5Arr = [],gbbody1Arr = [],gbbody2Arr = [],gbbody3Arr = [],gbbody4Arr = [],ehycount = ''
let lbbodyqd = $.getdata('lbbodyqd')
let lbbody1 = $.getdata('lbbody1')
let lbbody2 = $.getdata('lbbody2')
let lbbody3 = $.getdata('lbbody3')
let lbbody4 = $.getdata('lbbody4')
let lbbody5 = $.getdata('lbbody5')
let gbbody1 = $.getdata('gbbody1') 
let gbbody2 = $.getdata('gbbody2')
let gbbody3 = $.getdata('gbbody3')
let gbbody4 = $.getdata('gbbody4')
!(async () => {
  if (typeof $request !== "undefined") {
    await ehyck()
   
  } else {
    lbbodyqdArr.push($.getdata('lbbodyqd'))
    lbbody1Arr.push($.getdata('lbbody1'))
    lbbody2Arr.push($.getdata('lbbody2'))
    lbbody3Arr.push($.getdata('lbbody3'))
    lbbody4Arr.push($.getdata('lbbody4'))
    lbbody5Arr.push($.getdata('lbbody5'))
    gbbody1Arr.push($.getdata('gbbody1'))
    gbbody2Arr.push($.getdata('gbbody2'))
    gbbody3Arr.push($.getdata('gbbody3'))
    gbbody4Arr.push($.getdata('gbbody4'))
    let ehycount = ($.getval('ehycount') || '1');
  for (let i = 2; i <= ehycount; i++) {
    lbbodyqdArr.push($.getdata(`lbbodyqd${i}`))
    lbbody1Arr.push($.getdata(`lbbody1${i}`))
    lbbody2Arr.push($.getdata(`lbbody2${i}`))
    lbbody3Arr.push($.getdata(`lbbody3${i}`))
    lbbody4Arr.push($.getdata(`lbbody4${i}`))
    lbbody5Arr.push($.getdata(`lbbody5${i}`))
    gbbody1Arr.push($.getdata(`gbbody1${i}`))
    gbbody2Arr.push($.getdata(`gbbody2${i}`))
    gbbody3Arr.push($.getdata(`gbbody3${i}`))
    gbbody4Arr.push($.getdata(`gbbody4${i}`))
  }
    console.log(`------------- 共${lbbodyqdArr.length}个账号-------------\n`)
      for (let i = 0; i < lbbodyqdArr.length; i++) {
        if (lbbodyqdArr[i]) {
         lbbodyqd = lbbodyqdArr[i];
         lbbody1 = lbbody1Arr[i];
         lbbody2 = lbbody2Arr[i];
         lbbody3 = lbbody3Arr[i];
         lbbody4 = lbbody4Arr[i];
         lbbody5 = lbbody5Arr[i];
         gbbody1 = gbbody1Arr[i];
         gbbody2 = gbbody2Arr[i];
         gbbody3 = gbbody3Arr[i];
         gbbody4 = gbbody4Arr[i];
          $.index = i + 1;
          console.log(`\n开始【钢镚赚乐步达人二合一${$.index}】`)
          await lbqd();
          

  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//钢镚赚乐步达人二合一数据获取

function ehyck() {
   if ($request.url.indexOf("zlgainintegral") > -1 && $request.body.indexOf("nt=1") > -1) {
const lbbodyqd = $request.body
  if(lbbodyqd)     $.setdata(lbbodyqd,`lbbodyqd${status}`)
    $.log(lbbodyqd)
   $.msg($.name,"",'乐步达人'+`${status}` +'签到数据获取成功！')
  }else if ($request.url.indexOf("zlgainintegral") > -1 && $request.body.indexOf("zzid=132") > -1) {
const lbbody1 = $request.body
  if(lbbody1)     $.setdata(lbbody1,`lbbody1${status}`)
    $.log(lbbody1)
   $.msg($.name,"",'乐步达人'+`${status}` +'静态广告数据获取成功！')
  }else if ($request.url.indexOf("zlgainintegral") > -1  && $request.body.indexOf("vid=2") > -1) {
const lbbody2 = $request.body
  if(lbbody2)     $.setdata(lbbody2,`lbbody2${status}`)
    $.log(lbbody2)
   $.msg($.name,"",'乐步达人'+`${status}` +'视频一数据获取成功！')
  }else if ($request.url.indexOf("zlgainintegral") > -1 &&  $request.body.indexOf("vid=3") > -1) {
const lbbody3 = $request.body
  if(lbbody3)     $.setdata(lbbody3,`lbbody3${status}`)
    $.log(lbbody3)
   $.msg($.name,"",'乐步达人'+`${status}` +'视频二数据获取成功！')
  }else if ($request.url.indexOf("zlgainintegral") > -1 &&  $request.body.indexOf("vid=4") > -1) {
const lbbody4 = $request.body
  if(lbbody4)     $.setdata(lbbody4,`lbbody4${status}`)
    $.log(lbbody4)
   $.msg($.name,"",'乐步达人'+`${status}` +'视频三数据获取成功！')
  }else if ($request.url.indexOf("zlgainintegral") > -1 &&  $request.body.indexOf("vid=6") > -1) {
const lbbody5 = $request.body
  if(lbbody5)     $.setdata(lbbody5,`lbbody5${status}`)
    $.log(lbbody5)
   $.msg($.name,"",'乐步达人'+`${status}` +'视频四数据获取成功！')
  }else if ($request.url.indexOf("gainintegral") > -1 &&  $request.body.indexOf("type=5") > -1) {
const gbbody1 = $request.body
  if(gbbody1)     $.setdata(gbbody1,`gbbody1${status}`)
    $.log(gbbody1)
   $.msg($.name,"",'钢镚赚'+`${status}` +'看广告数据获取成功！')
  }else if ($request.url.indexOf("gainintegral") > -1 &&  $request.body.indexOf("type=4") > -1) {
const gbbody2 = $request.body
  if(gbbody2)     $.setdata(gbbody2,`gbbody2${status}`)
    $.log(gbbody2)
   $.msg($.name,"",'钢镚赚'+`${status}` +'看视频数据获取成功！')
  }else if ($request.url.indexOf("getdailyintegral") > -1 &&  $request.body.indexOf("channelID=") > -1) {
const gbbody3 = $request.body
  if(gbbody3)     $.setdata(gbbody3,`gbbody3${status}`)
    $.log(gbbody3)
   $.msg($.name,"",'钢镚赚'+`${status}` +'领奖励数据获取成功！')
  }else if ($request.url.indexOf("sign") > -1  && $request.body.indexOf("channelID=") > -1) {
const gbbody4 = $request.body
  if(gbbody4)     $.setdata(gbbody4,`gbbody4${status}`)
    $.log(gbbody4)
   $.msg($.name,"",'钢镚赚'+`${status}` +'签到数据获取成功！')
  }
}

function lbqd(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "https://lebudaren.zhuangangbeng.com/zlgainintegral",
        headers : headlb,
        body : lbbodyqd,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.statuscode == 200){

        $.log('\n乐步达人:签到领取成功获得:'+result.result.nowintegral)
       await $.wait(1000)
       await lb1()
        
} else {
       console.log('\n乐步达人:签到领取失败:'+result.msg)
       await $.wait(1000)
       await lb1()
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//乐步视频广告
function lb1(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "https://lebudaren.zhuangangbeng.com/zlgainintegral",
        headers : headlb,
        body : lbbody1,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.statuscode == 200){

        $.log('\n乐步达人:静态广告领取成功获得:'+result.result.nowintegral)
       await $.wait(1000)
       await lb1()
        
} else {
       console.log('\n乐步达人:静态广告领取失败:'+result.msg)
       await $.wait(1000)
       await lb2()
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

function lb2(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "https://lebudaren.zhuangangbeng.com/zlgainintegral",
        headers : headlb,
        body : lbbody2,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.statuscode == 200){

        $.log('\n乐步达人:视频一领取成功获得:'+result.result.nowintegral)
       await $.wait(1000)
       await lb2()
        
} else {
       console.log('\n乐步达人:视频一领取失败:'+result.msg)
       await $.wait(1000)
       await lb3()
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

function lb3(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "https://lebudaren.zhuangangbeng.com/zlgainintegral",
        headers : headlb,
        body : lbbody3,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.statuscode == 200){

        $.log('\n乐步达人:视频二领取成功获得:'+result.result.nowintegral)
       await $.wait(1000)
       await lb3()
        
} else {
       console.log('\n乐步达人:视频二领取失败:'+result.msg)
       await $.wait(1000)
       await lb4()
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

function lb4(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "https://lebudaren.zhuangangbeng.com/zlgainintegral",
        headers : headlb,
        body : lbbody4,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.statuscode == 200){

        $.log('\n乐步达人:视频三领取成功获得:'+result.result.nowintegral)
       await $.wait(1000)
       await lb4()
        
} else {
       console.log('\n乐步达人:视频三领取失败:'+result.msg)
       await $.wait(1000)
       await lb5()
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

function lb5(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "https://lebudaren.zhuangangbeng.com/zlgainintegral",
        headers : headlb,
        body : lbbody5,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.statuscode == 200){

        $.log('\n乐步达人:视频四领取成功获得:'+result.result.nowintegral)
       await $.wait(1000)
       await lb5()
        
} else {
       console.log('\n乐步达人:视频四领取失败:'+result.msg)
       await $.wait(1000)
console.log(`\n\n开始【钢镚赚】\n`)
       await gbz1()
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//钢镚赚
function gbz2(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "https://api.zhuangangbeng.com/gainintegral",
        headers : head1,
        body : gbbody1,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.statuscode == 200){

        $.log('\n钢镚赚:看广告领取成功获得:'+result.result.nowintegrals)
       await $.wait(1000)
       await gbz2()
        
} else {
       console.log('\n钢镚赚:看广告领取失败:'+result.msg)
       await $.wait(1000)
       await gbz3()
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

function gbz3(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "https://api.zhuangangbeng.com/gainintegral",
        headers : head1,
        body : gbbody2,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.statuscode == 200){

        $.log('\n钢镚赚:看视频领取成功获得:'+result.result.nowintegrals)
       await $.wait(1000)
       await gbz3()
        
} else {
       console.log('\n钢镚赚:看视频领取失败:'+result.msg)
       await $.wait(1000)
       await gbz4();
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

function gbz4(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "https://api.zhuangangbeng.com/getdailyintegral",
        headers : head1,
        body : gbbody3,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.statuscode == 200){

        $.log('\n钢镚赚:领奖励领取成功获得:'+result.result.nowintegrals+' 余额:'+result.result.allintegrals)
       await $.wait(1000)
       await gbz2()
        
} else {
       console.log('\n钢镚赚:领奖励领取失败:'+result.msg)
       await $.wait(1000)
       
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

function gbz1(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "https://api.zhuangangbeng.com/sign",
        headers : head1,
        body : gbbody4,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.statuscode == 200){

        $.log('\n钢镚赚:签到奖励领取成功获得:'+result.result.nowintegrals+' 余额:'+result.result.allintegrals)
       await $.wait(1000)
       await gbz2()
        
} else {
       console.log('\n钢镚赚:签到奖励领取失败:'+result.msg)
       await $.wait(1000)
       await gbz2();
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

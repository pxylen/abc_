/*
软件名称:幸福养鸡场 
更新时间：2021-04-27 @肥皂
脚本说明：差不多涵盖了游戏内的所有任务了
气泡领取,每日任务。宝箱开启。打卡签到。每日领取。幸运转盘。喂养。自动提现。红心任务。
越狱请做好屏蔽。
每天收益按照蛋来说有一两块吧。十分钟一次吧。cron自己改。

幸福养鸡场使用方法:
进入游戏点击领饲料获得数据。

邀请码 : 204678455


本脚本以学习为主！

TG通知群:https://t.me/Ariszy_Scripts
TG电报交流群: https://t.me/hahaha8028

boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json

幸福养鸡场
圈X配置如下，其他软件自行测试
[task_local]
#幸福养鸡场
10,20,30 0-23 * * * https://raw.githubusercontent.com/age174/-/main/xfyjc.js, tag=幸福养鸡场, img-url=https://ae01.alicdn.com/kf/Ue110888eddad48a8a78d99284e599b134.jpg, enabled=true

[rewrite_local]
#幸福养鸡场
https://bp-api.coohua.com/bubuduo-xfyjc/task/getHomePageTask url script-request-header https://raw.githubusercontent.com/age174/-/main/xfyjc.js

#loon
https://bp-api.coohua.com/bubuduo-xfyjc/task/getHomePageTask script-path=https://raw.githubusercontent.com/age174/-/main/xfyjc.js, requires-header=true, timeout=10, tag=幸福养鸡场

#surge
幸福养鸡场 = type=http-request,pattern=https://bp-api.coohua.com/bubuduo-xfyjc/task/getHomePageTask,requires-header=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/xfyjc.js,script-update-interval=0

[MITM]
hostname = bp-api.coohua.com

*/
const $ = new Env('幸福养鸡场');
let status;
status = (status = ($.getval("xfyjcstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const xfyjchdArr = [],xfyjccount = ''
let xfyjchd = $.getdata('xfyjchd')
let id = '',name =''
!(async () => {
  if (typeof $request !== "undefined") {
    await xfyjcck()
   
  } else {
    xfyjchdArr.push($.getdata('xfyjchd'))
    
    let xfyjccount = ($.getval('xfyjccount') || '1');
  for (let i = 2; i <= xfyjccount; i++) {
    xfyjchdArr.push($.getdata(`xfyjchd${i}`))
  }
    console.log(`------------- 共${xfyjchdArr.length}个账号-------------\n`)
      for (let i = 0; i < xfyjchdArr.length; i++) {
        if (xfyjchdArr[i]) {
          xfyjchd = xfyjchdArr[i];
          $.index = i + 1;
          console.log(`\n开始【幸福养鸡场${$.index}】`)
    await xfyjcqp();
    await xfyjcqp1();
    await xfyjcqp2();
    await xfyjccj();
    await xfyjccjcs();
    await xfyjcwy();
    await xfyjcrw()
    await xfyjclq()
    await xfyjcbx()
    await xfyjchxrw()
    await xfyjctx()
  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//数据获取


function xfyjcck() {
   if ($request.url.indexOf("getHomePageTask") > -1) {
 
  const xfyjchd = JSON.stringify($request.headers)
        if(xfyjchd)    $.setdata(xfyjchd,`xfyjchd${status}`)
$.log(xfyjchd)
   $.msg($.name,"",'幸福养鸡场'+`${status}` +'数据获取成功！')
  }
}

//气泡1
function xfyjcqp(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://bp-api.coohua.com/bubuduo-xfyjc/game/bubble/reward?amount=590&position=1',
        headers : JSON.parse(xfyjchd),
       
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n幸福养鸡场气泡视频1获得饲料:${result.result.nextBubble.amount}剩余饲料:${result.result.dripTotal}`)

} else {

        $.log(`\n幸福养鸡场:${result.message}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}



//气泡2
function xfyjcqp1(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://bp-api.coohua.com/bubuduo-xfyjc/game/bubble/reward?amount=590&position=2',
        headers : JSON.parse(xfyjchd),
       
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n幸福养鸡场气泡视频2获得饲料:${result.result.nextBubble.amount}剩余饲料:${result.result.dripTotal}`)

} else {

        $.log(`\n幸福养鸡场:${result.message}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}



//气泡3
function xfyjcqp2(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://bp-api.coohua.com/bubuduo-xfyjc/game/bubble/reward?amount=590&position=4',
        headers : JSON.parse(xfyjchd),
       
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n幸福养鸡场气泡视频3获得饲料:${result.result.nextBubble.amount}剩余饲料:${result.result.dripTotal}`)

} else {

        $.log(`\n幸福养鸡场:${result.message}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//抽奖
function xfyjccj(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://bp-api.coohua.com/bubuduo-xfyjc/turn/get',
        headers : JSON.parse(xfyjchd),
       
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n幸福养鸡场抽奖获得饲料:${result.result.count}剩余饲料:${result.result.dripTotal}剩余抽奖次数:${result.result.index}`)
   await xfyjccj()
} else {

        $.log(`\n幸福养鸡场抽奖:${result.message},执行增加抽奖次数任务`)
 await xfyjccjcs();
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//抽奖机会
function xfyjccjcs(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://bp-api.coohua.com/bubuduo-xfyjc/turn/by/video',
        headers : JSON.parse(xfyjchd),
       
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n幸福养鸡场获得抽奖次数获得:${result.result.tickets}剩余机会:${result.result.hourTimes}`)
     await xfyjccj()

} else {

        $.log(`\n幸福养鸡场:${result.message}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//喂养
function xfyjcwy(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://bp-api.coohua.com/bubuduo-xfyjc/game/water/tree?num=1',
        headers : JSON.parse(xfyjchd),
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n幸福养鸡场喂养:成功`)
     await xfyjcwy()

} else {

        $.log(`\n幸福养鸡场喂养:${result.message}`)
 await xfyjcsd()
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//喂养补水滴
function xfyjcsd(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://bp-api.coohua.com/bubuduo-xfyjc/game/drip/video?type=0',
        headers : JSON.parse(xfyjchd),
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n幸福养鸡场补水滴:成功`)
     await xfyjcwy()

} else {

        $.log(`\n幸福养鸡场补水滴:${result.message}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//日常任务
function xfyjcrw(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://bp-api.coohua.com/bubuduo-xfyjc/task/getHomePageTask',
        headers : JSON.parse(xfyjchd),
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n幸福养鸡场获取任务列表:成功`)
     for(i=0; i < result.result.homePageTask.homePage.length;i++){
id = result.result.homePageTask.homePage[i].taskId
name =result.result.homePageTask.homePage[i].desc
console.log(`\n开始执行:${name}`)
await xfyjc();

}

} else {

        $.log(`\n幸福养鸡场任务列表:${result.message}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//任务
function xfyjc(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://bp-api.coohua.com/bubuduo-xfyjc/task/finish/daily?taskId='+id,
        headers : JSON.parse(xfyjchd),
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n幸福养鸡场任务获得:${result.result.amount}`)
     
} else {

        $.log(`\n幸福养鸡场任务:${result.message}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//每日领取
function xfyjclq(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://bp-api.coohua.com/bubuduo-xfyjc/game/tomorrow/drip',
        headers : JSON.parse(xfyjchd),
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n幸福养鸡场每日领取获得:${result.result.drip}`)
     
} else {

        $.log(`\n幸福养鸡场每日领取任务:${result.message}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//宝箱id
function xfyjcbx(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://bp-api.coohua.com/bubuduo-xfyjc/game/message',
        headers : JSON.parse(xfyjchd),
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n幸福养鸡场获取宝箱id:成功`)
     for(i=0; i < result.result.waterRedBagIds.length;i++){
id = result.result.waterRedBagIds[i]
console.log(`\n开始执行:${id}`)
await xfyjckqbx();

}

} else {

        $.log(`\n幸福养鸡场任务列表:${result.message}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//宝箱开启
function xfyjckqbx(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://bp-api.coohua.com/bubuduo-xfyjc/game/open/red/bag/reward?id='+id,
        headers : JSON.parse(xfyjchd),
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n幸福养鸡场获取开启宝箱:成功`)
     

} else {

        $.log(`\n幸福养鸡场:${result.message}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//红心
function xfyjchxrw(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://bp-api.coohua.com/bubuduo-xfyjc/task/list',
        headers : JSON.parse(xfyjchd),
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n幸福养鸡场红心任务列表:成功`)
     for(i=0; i < result.result.taskDailyList.dailyTask.length;i++){
id = result.result.taskDailyList.dailyTask[i].taskId
name =result.result.taskDailyList.dailyTask[i].desc
console.log(`\n开始执行:${name}`)
await xfyjchx1();
await xfyjchx2()

}

} else {

        $.log(`\n幸福养鸡场任务列表:${result.message}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//红心1
function xfyjchx1(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://bp-api.coohua.com/bubuduo-xfyjc/task/daily/getReward?taskId='+id,
        headers : JSON.parse(xfyjchd),
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n幸福养鸡场红心领取:成功`)
     

} else {

        $.log(`\n幸福养鸡场:${result.message}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//红心2
function xfyjchx2(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://bp-api.coohua.com/bubuduo-xfyjc/task/finish/daily?taskId='+id,
        headers : JSON.parse(xfyjchd),
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n幸福养鸡场红心领取:${result.result.amount}`)
     

} else {

        $.log(`\n幸福养鸡场:${result.message}`)
 
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
function xfyjctx(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://bp-api.coohua.com/bubuduo-xfyjc/mall/fruit?subType=71&payChannel=1&wechatId=240&fruitIndex=16&common=false',
        headers : JSON.parse(xfyjchd),
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n幸福养鸡场提现:成功`)
     

} else {

        $.log(`\n幸福养鸡场提现:${result.message}`)
 
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

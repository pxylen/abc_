/*
软件名称: V生活 扫码下载
更新时间：2021-04-07 @肥皂
脚本说明：V生活自动任务
每天0.8-1元左右
扫码下载地址:
https://ae01.alicdn.com/kf/U13517c4eb56f4ccda0d24822a32ac6175.jpg
邀请码:A0061924  谢谢大佬们填写
本脚本以学习为主！
使用方法:
共有7组数据需要获取
1-进入v生活,点中间的赚钱并签到,获得签到数据
2-点击首页,看小视频赚积分,看一个小视频等金币转圈完毕获得短视频数据
3-点击首页,视频赚,看完一个广告视频,然后点击翻倍,看完翻倍视频获得视频赚body
4-点击中间的赚钱,点击看视频赚积分,看完视频获得看视频body
5-点击中间的赚钱,点击看视频并点击,看完视频点击一下广告,完成任务获得视频点击body
6-点击我的,返现订单,进入会员中心,点击每天看一次视频,获得每天看一次视频body
7-继续点击每天看三次视频,完成任务获得body

注意事项:有几个视频任务需要看完广告点击广告,否则会无法完成任务

TG电报群: https://t.me/hahaha8028

boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json

V生活
圈X配置如下，其他软件自行测试
[task_local]
#V生活
15 9 * * * https://raw.githubusercontent.com/age174/-/main/vsh.js, tag=V生活, img-url=https://ae01.alicdn.com/kf/Uf0da879c7acd4c7bad91f0e5a97667e1O.jpg, enabled=true

[rewrite_local]
#V生活
http://iosvsh.zwzanwm.cn/ url script-request-body https://raw.githubusercontent.com/age174/-/main/vsh.js

#loon
http://iosvsh.zwzanwm.cn/ script-path=https://raw.githubusercontent.com/age174/-/main/vsh.js, requires-body=true, timeout=10, tag=V生活

#surge
V生活 = type=http-request,pattern=http://iosvsh.zwzanwm.cn/,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/vsh.js,script-update-interval=0

[MITM]
hostname = iosvsh.zwzanwm.cn
*/

const $ = new Env('V生活');
let status;
status = (status = ($.getval("vshstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const vshurlArr = [], vshhdArr = [],vshdspbodyArr = [],vshspbodyArr = [],vshqdbodyArr = [],vsh1bodyArr = [],vsh2bodyArr = [],vshbodyArr = [],vshcount = ''
let times = Math.round(Date.now() / 1000)
let vshurl = $.getdata('vshurl')
let vshhd = $.getdata('vshhd')
let vshdspbody = $.getdata('vshdspbody')
let vshspbody = $.getdata('vshspbody')
let vsh1body = $.getdata('vsh1body')
let vsh2body = $.getdata('vsh2body')
let vshbody = $.getdata('vshbody')
let vshqdbody = $.getdata('vshqdbody')
let vshsp = ($.getval('vshsp') || '0');//短视频刷金币开关,短视频刷金币因为时间很长,且不知道上限,默认为关闭状态,脚本只会运行除了短视频之外的任务,需要刷短视频金币的,建议先跑完日常任务再去boxjs里把短视频刷金币开关改为1,之后脚本只会运行刷短视频任务。。
!(async () => {
  if (typeof $request !== "undefined") {
    await vshck()
   
  } else {vshurlArr.push($.getdata('vshurl'))
    vshhdArr.push($.getdata('vshhd'))
    vshdspbodyArr.push($.getdata('vshdspbody'))
    vshspbodyArr.push($.getdata('vshspbody'))
    vsh1bodyArr.push($.getdata('vsh1body'))
    vsh2bodyArr.push($.getdata('vsh2body'))
    vshbodyArr.push($.getdata('vshbody'))
    vshqdbodyArr.push($.getdata('vshqdbody'))
    let vshcount = ($.getval('vshcount') || '1');
  for (let i = 2; i <= vshcount; i++) {
    vshurlArr.push($.getdata(`vshurl${i}`))
    vshhdArr.push($.getdata(`vshhd${i}`))
   vshdspbodyArr.push($.getdata(`vshdspbody${i}`))
    vshspbodyArr.push($.getdata(`vshspbody${i}`))
    vsh1bodyArr.push($.getdata(`vsh1body${i}`))
    vsh2bodyArr.push($.getdata(`vsh2body${i}`))
    vshbodyArr.push($.getdata(`vshbody${i}`))
    vshqdbodyArr.push($.getdata(`vshqdbody${i}`))
  }
    console.log(`------------- 共${vshhdArr.length}个账号-------------\n`)
      for (let i = 0; i < vshhdArr.length; i++) {
        if (vshhdArr[i]) {
          vshbody = vshbodyArr[i];
          vshurl = vshurlArr[i];
          vshhd = vshhdArr[i];
          vshdspbody = vshdspbodyArr[i];
          vshspbody = vshspbodyArr[i];
          vsh1body = vsh1bodyArr[i];
          vsh2body = vsh2bodyArr[i];
          vshqdbody = vshqdbodyArr[i];
          $.index = i + 1;
          console.log(`\n开始【V生活${$.index}】`)
if(vshsp == 1){
console.log(`\n开始执行【V生活短视频任务】`)
await vsh6();
}else{
console.log(`\n开始执行【V生活日常任务】`)
await vshqd()               
}
          

  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//V生活数据获取


function vshck() {
   if ($request.url.indexOf("svjl") > -1) {
 const vshurl = $request.url
  if(vshurl)     $.setdata(vshurl,`vshurl${status}`)
    $.log(vshurl)
  const vshhd = JSON.stringify($request.headers)
        if(vshhd)    $.setdata(vshhd,`vshhd${status}`)
$.log(vshhd)
   $.msg($.name,"",'V生活'+`${status}` +'header-数据获取成功！')
  }else if ($request.url.indexOf("getAdFeedback") > -1 && $request.body.indexOf(`"type":"2"`) > -1) {
 const vsh2body = $request.body
  if(vsh2body)     $.setdata(vsh2body,`vsh2body${status}`)
    $.log(vsh2body)
$.msg($.name,"",'V生活'+`${status}` +'看视频数据-获取成功！')
}else if ($request.url.indexOf("getAdFeedback") > -1 && $request.body.indexOf(`"type":"13"`) > -1) {
 const vsh1body = $request.body
  if(vsh1body)     $.setdata(vsh1body,`vsh1body${status}`)
    $.log(vsh2body)
$.msg($.name,"",'V生活'+`${status}` +'看视频点击-数据获取成功！')
}else if ($request.url.indexOf("getAdFeedback") > -1 && $request.body.indexOf(`"isDouble":"1"`) > -1) {
 const vshspbody = $request.body
  if(vshspbody)     $.setdata(vshspbody,`vshspbody${status}`)
    $.log(vshspbody)
$.msg($.name,"",'V生活'+`${status}` +'视频赚翻倍-数据获取成功！')
}else if ($request.url.indexOf("getAdFeedback") > -1 && $request.body.indexOf(`"type":"7"`) > -1) {
 const vshdspbody = $request.body
  if(vshdspbody)     $.setdata(vshdspbody,`vshdspbody${status}`)
    $.log(vshdspbody)
$.msg($.name,"",'V生活'+`${status}` +'每天一次视频-数据获取成功！')
}else if ($request.url.indexOf("getAdFeedback") > -1 && $request.body.indexOf(`"type":"8"`) > -1) {
 const vshbody = $request.body
  if(vshbody)     $.setdata(vshbody,`vshbody${status}`)
    $.log(vshbody)
$.msg($.name,"",'V生活'+`${status}` +'每天三次视频,点击-数据获取成功！')
}else if ($request.url.indexOf("signInNew") > -1 && $request.body.indexOf(`"key":"12"`) > -1) {
 const vshqdbody = $request.body
  if(vshqdbody)     $.setdata(vshqdbody,`vshqdbody${status}`)
    $.log(vshqdbody)
$.msg($.name,"",'V生活'+`${status}` +'签到-数据获取成功！')
  const vshhd = JSON.stringify($request.headers)
        if(vshhd)    $.setdata(vshhd,`vshhd${status}`)
$.log(vshhd)
   $.msg($.name,"",'V生活'+`${status}` +'header-数据获取成功！')

}
}
//V生活签到
function vshqd(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http://iosvsh.zwzanwm.cn/app/signInNew",
        headers : JSON.parse(vshhd),
        body : vshqdbody,
}
      $.post(url, async (err, resp, data) => {
        try {

           
    const result = JSON.parse(data)
        if(result.isSign == 1){
        console.log(`\n〔V生活签到〕获得:${result.randomIntegral}金币奖励\当前金币余额:${result.newIntegral}`)
       await $.wait(15000);
       await vshqd()
       
} else {
       console.log('\nV生活签到:'+result.msg)
       await $.wait(15000);
       await vsh1()

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//V生活每天一视频
function vsh4(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http://iosvsh.zwzanwm.cn/app/getAdFeedback",
        headers : JSON.parse(vshhd),
        body : vshdspbody,
}
      $.post(url, async (err, resp, data) => {
        try {

           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log(`\n〔V生活每天1视频〕获得:${result.randomIntegral}金币奖励\n已完成次数:${result.watchVideoNum}\n当前金币余额:${result.newIntegral}`)
       await $.wait(15000);
       await vsh4()
       
} else {
       console.log('\nV生活每天1视频:'+result.msg)
       await $.wait(15000);
       await vsh5()

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//V生活每天三视频
function vsh5(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http://iosvsh.zwzanwm.cn/app/getAdFeedback",
        headers : JSON.parse(vshhd),
        body : vshbody,
}
      $.post(url, async (err, resp, data) => {
        try {

           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log(`\n〔V生活每天3视频〕获得:${result.randomIntegral}金币奖励\n已完成次数:${result.watchVideoNum}\n当前金币余额:${result.newIntegral}`)
       await $.wait(15000);
       await vsh5()
       
} else {
       console.log('\nV生活每天3视频:'+result.msg)
       //await $.wait(15000);
       //await vsh2()

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//V生活看视频
function vsh1(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http://iosvsh.zwzanwm.cn/app/getAdFeedback",
        headers : JSON.parse(vshhd),
        body : vsh2body,
}
      $.post(url, async (err, resp, data) => {
        try {

           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log(`\n〔V生活看视频〕获得:${result.randomIntegral}金币奖励\n已完成次数:${result.watchVideoNum}\n当前金币余额:${result.newIntegral}`)
       await $.wait(15000);
       await vsh1()
       
} else {
       console.log('\nV生活看视频:'+result.msg)
       await $.wait(15000);
       await vsh2()

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//V生活看视频点击
function vsh2(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http://iosvsh.zwzanwm.cn/app/getAdFeedback",
        headers : JSON.parse(vshhd),
        body : vsh1body,
}
      $.post(url, async (err, resp, data) => {
        try {

           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log(`\n〔V生活看视频点击〕获得:${result.randomIntegral}金币奖励\n已完成次数:${result.watchVideoNum}\n当前金币余额:${result.newIntegral}`)
       await $.wait(15000);
       await vsh2()
       
} else {
       console.log('\nV生活看视频点击:'+result.msg)
       await $.wait(15000);
       await vsh3()

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//V生活视频赚
function vsh3(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http://iosvsh.zwzanwm.cn/app/getAdFeedback",
        headers : JSON.parse(vshhd),
        body : vshspbody,
}
      $.post(url, async (err, resp, data) => {
        try {

           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log(`\n〔V生活视频赚〕获得:${result.randomIntegral}金币奖励\n当前金币余额:${result.newIntegral}`)
       await $.wait(15000);
       await vsh3()
       
} else {
       console.log('\nV生活视频赚:'+result.msg)
       await $.wait(15000);
       await vsh4()
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//V生活短视频
function vsh6(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http://iosvsh.zwzanwm.cn/app/svjl",
        headers : JSON.parse(vshhd),
        body : `{}`,
}
      $.post(url, async (err, resp, data) => {
        try {

           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log(`\n〔V生活短视频〕获得:${result.integral}金币奖励`)
       await $.wait(15000);
       await vsh6()
       
} else {
       console.log('\nV生活短视频:'+result.msg)

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

/*
软件名称:部落农场 扫描二维码注册下载
更新时间：2021-04-08 @肥皂
脚本说明：部落农场
自动浇水,除草,除虫,收果
类似陌嗨短视频,需要实名人脸,目前一个果实9元左右,不需要下载交易所,软件内可以交易,秒卖。一天0.5个果子。自己决定玩不玩，送的种子可以免费一个月。注册下载后打开农场实名人脸1.5元。认证成功送一个月的种子。然后就可以去抓包了。这个好像可以纯零撸。出售没有其他的条件,就是需要拉两个人头。零撸完送的种子应该可以撸一百多左右吧。。
使用方法:登录部落农场获得数据，点击土地浇水,除草,除虫,收果都可以获得几号土地的数据

二维码注册下载链接:https://ae01.alicdn.com/kf/Ua6287ed44a8d4e02b4597143675479951.jpg

TG电报群: https://t.me/hahaha8028

boxjs地址 :  
https://raw.githubusercontent.com/age174/-/main/feizao.box.json

部落农场
圈X配置如下，其他软件自行测试
[task_local]
#部落农场
1 0 * * * https://raw.githubusercontent.com/age174/-/main/blnc.js, tag=部落农场, img-url=https://ae01.alicdn.com/kf/U7bcabce8ea7644f18e3c84f65907e34bf.jpg, enabled=true

[rewrite_local]
#部落农场
https://farming.blnc888.com/game.api url script-request-body https://raw.githubusercontent.com/age174/-/main/blnc.js

#loon
https://farming.blnc888.com/game.api script-path=https://raw.githubusercontent.com/age174/-/main/blnc.js, requires-body=true, timeout=10, tag=部落农场

#surge
部落农场 = type=http-request,pattern=https://farming.blnc888.com/game.api,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/blnc.js,script-update-interval=0

[MITM]
hostname = farming.blnc888.com
*/


const $ = new Env('部落农场');
let status;
status = (status = ($.getval("blncstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const blncurlArr = [], idblncbodyArr = [],blnchdArr = [],blncbodyArr = [],blnccount = ''
let blncurl = $.getdata('blncurl')
let blnchd = $.getdata('blnchd')
let blncbody = $.getdata('blncbody')
let idblncbody = $.getdata('idblncbody')
let token = '',id = '',hdt = ''
!(async () => {
  if (typeof $request !== "undefined") {
    await blncck()
   
  } else {blncurlArr.push($.getdata('blncurl'))
    blnchdArr.push($.getdata('blnchd'))
    blncbodyArr.push($.getdata('blncbody'))
    idblncbodyArr.push($.getdata('idblncbody'))
    let blnccount = ($.getval('blnccount') || '1');
  for (let i = 2; i <= blnccount; i++) {
    blncurlArr.push($.getdata(`blncurl${i}`))
    blnchdArr.push($.getdata(`blnchd${i}`))
    blncbodyArr.push($.getdata(`blncbody${i}`))
    idblncbodyArr.push($.getdata(`idblncbody${i}`))
  }
    console.log(`------------- 共${blnchdArr.length}个账号-------------\n`)
      for (let i = 0; i < blnchdArr.length; i++) {
        if (blnchdArr[i]) {
         blncbody = blncbodyArr[i];
          blncurl = blncurlArr[i];
          blnchd = blnchdArr[i];
          blncbody = blncbodyArr[i];
          $.index = i + 1;
          console.log(`\n开始【部落农场${$.index}】`)
          await blncdl();

  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//部落农场数据获取

function blncck() {
   if ($request.url.indexOf("game.api") > -1 &&$request.body.indexOf("a=appLogin") > -1) {
 const blncurl = $request.url
  if(blncurl)     $.setdata(blncurl,`blncurl${status}`)
    $.log(blncurl)
const blncbody = $request.body
  if(blncbody)     $.setdata(blncbody,`blncbody${status}`)
    $.log(blncbody)
  const blnchd = JSON.stringify($request.headers)
        if(blnchd)    $.setdata(blnchd,`blnchd${status}`)
$.log(blnchd)
   $.msg($.name,"",'部落农场'+`${status}` +'数据获取成功！')
  }else if ($request.url.indexOf("game.api") > -1 &&$request.body.indexOf("landId=") > -1) {
const idblncbody = $request.body
  if(idblncbody)     $.setdata(idblncbody.match(/landId=(\d+)/)[1],`idblncbody${status}`)
    $.log(idblncbody)

    $.msg('部落农场','',`当前种植土地为${idblncbody.match(/landId=(\d+)/)[1]}号土地`)
}
}
//部落农场登录
function blncdl(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : blncurl,
        headers : JSON.parse(blnchd),
        body : blncbody,
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.code == 1){
token = result.data.userInfo.token
console.log(`\n部落农场:${result.msg}\n当前登录地区:${result.data.userInfo.province}-${result.data.userInfo.city}-${result.data.userInfo.area}\n获取token成功:${token}\n开始执行领取任务`)
await blnclq()
await $.wait(1000)
await blncjs()
await $.wait(1000)
await blncc()
await $.wait(1000)
await blnccc()
await $.wait(1000)
await blncsh()
await $.wait(1000)
await blncxx()
} else {
       $.msg('部落农场','','部落农场'+result.msg+'可能是cookie过期,请重新登录')
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//部落农场领取
function blnclq(timeout = 0) {
  return new Promise((resolve) => {
hdt = blnchd.replace('}',`,"TOKEN":"${token}"}`)
let url = {
        url : blncurl,
        headers : JSON.parse(hdt),
        body : `c=sign&a=sign`,
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.code == 0){
        console.log(`\n部落农场:${result.msg}开始执行浇水任务`)
} else {
       console.log('\n部落农场'+result.msg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//部落农场浇水
function blncjs(timeout = 0) {
  return new Promise((resolve) => {
hdt = blnchd.replace('}',`,"TOKEN":"${token}"}`)
let url = {
        url : blncurl,
        headers : JSON.parse(hdt),
        body : `c=land&a=landOp&landId=${idblncbody}&mark=wcan`,
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.code == 0){
        console.log(`\n部落农场:${result.msg}开始执行除草任务`)
} else {
       console.log('\n部落农场'+result.msg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//部落农场除草
function blncc(timeout = 0) {
  return new Promise((resolve) => {
hdt = blnchd.replace('}',`,"TOKEN":"${token}"}`)
let url = {
        url : blncurl,
        headers : JSON.parse(hdt),
        body : `c=land&a=landOp&landId=${idblncbody}&mark=hcide`,
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.code == 0){
        console.log(`\n部落农场:${result.msg}开始执行除虫任务`)
} else {
       console.log('\n部落农场'+result.msg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//部落农场除虫
function blnccc(timeout = 0) {
  return new Promise((resolve) => {
hdt = blnchd.replace('}',`,"TOKEN":"${token}"}`)
let url = {
        url : blncurl,
        headers : JSON.parse(hdt),
        body : `c=land&a=landOp&landId=${idblncbody}&mark=icide`,
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.code == 0){
        console.log(`\n部落农场:${result.msg}开始收获果实`)
} else {
       console.log('\n部落农场'+result.msg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//部落农场收获
function blncsh(timeout = 0) {
  return new Promise((resolve) => {
hdt = blnchd.replace('}',`,"TOKEN":"${token}"}`)
let url = {
        url : blncurl,
        headers : JSON.parse(hdt),
        body : `c=land&a=getFruit&landId=${idblncbody}`,
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.code == 0){
        console.log(`\n部落农场:${result.msg}查看个人信息`)
} else {
       console.log('\n部落农场'+result.msg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//部落农场xx
function blncxx(timeout = 0) {
  return new Promise((resolve) => {
hdt = blnchd.replace('}',`,"TOKEN":"${token}"}`)
let url = {
        url : blncurl,
        headers : JSON.parse(hdt),
        body : `c=user&a=getDiamonds`,
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 1){
console.log(`\n部落农场:${result.msg}\n当前果实:${result.data.diamonds}`)
} else {
       console.log('\n部落农场'+result.msg)
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

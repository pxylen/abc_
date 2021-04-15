/*
软件名称:招招试药 微信扫描二维码下载注册
更新时间：2021-04-16 @肥皂
脚本说明：招招试药
脚本为自动完成招招试药的每日任务

每天固定6毛，肥肠稳定，提现需身份证照片。无需人脸，正规平台,放心食用。当然你想去试药我也不阻止（当一次小白鼠5000-20000），哈哈哈哈哈

招招使用方法:
进入招招，点击我的，点击每日任务，获得数据。

扫描二维码打开注册:https://ae01.alicdn.com/kf/Ud97088a019124ae68656e7c33e9d521fb.jpg
或者直接商店搜索招招下载。随便大佬们。。。
推荐码 : 163566
本脚本以学习为主！

TG通知群:https://t.me/Ariszy_Scripts
TG电报交流群: https://t.me/hahaha8028

boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json

招招试药
圈X配置如下，其他软件自行测试，定时可以多设置几次，没任务会停止运行的
[task_local]
#招招试药
35 9 * * * https://raw.githubusercontent.com/age174/-/main/zzsy.js, tag=招招试药, img-url=https://ae01.alicdn.com/kf/Ub0056a0721e94c9a85a8bbeb2f2aed6fn.jpg, enabled=true


[rewrite_local]
#招招试药
https://yaowu360.com/get/my/waitTask url script-request-body https://raw.githubusercontent.com/age174/-/main/zzsy.js

#loon
https://yaowu360.com/get/my/waitTask script-path=https://raw.githubusercontent.com/age174/-/main/zzsy.js, requires-body=true, timeout=10, tag=招招试药

#surge
招招试药 = type=http-request,pattern=https://yaowu360.com/get/my/waitTask,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/zzsy.js,script-update-interval=0

[MITM]
hostname = yaowu360.com

*/


const $ = new Env('招招试药💊');
let status;
status = (status = ($.getval("zzsystatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const zzsyhdArr = [],zzsybodyArr = [],zzsycount = ''
let times = Math.round(Date.now() / 1000)
let zzsyhd = $.getdata('zzsyhd')
let zzsybody = $.getdata('zzsybody')
let key = '',id = '',uid='',name='',tid = '',num=''
!(async () => {
  if (typeof $request !== "undefined") {
    await zzsyck()
   
  } else {
    zzsyhdArr.push($.getdata('zzsyhd'))
    zzsybodyArr.push($.getdata('zzsybody'))
    let zzsycount = ($.getval('zzsycount') || '1');
  for (let i = 2; i <= zzsycount; i++) {
    zzsyhdArr.push($.getdata(`zzsyhd${i}`))
    zzsybodyArr.push($.getdata(`zzsybody${i}`))
  }
    console.log(`------------- 共${zzsyhdArr.length}个账号-------------\n`)
      for (let i = 0; i < zzsyhdArr.length; i++) {
        if (zzsyhdArr[i]) {
          zzsybody = zzsybodyArr[i];
          zzsyhd = zzsyhdArr[i];
          $.index = i + 1;
          console.log(`\n开始【招招试药💊${$.index}】`)
          await zzsyqd();
          await zzsyxx();
          

  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//招招试药数据获取


function zzsyck() {
   if ($request.url.indexOf("my/waitTask") > -1) {
  const zzsyhd = JSON.stringify($request.headers)
        if(zzsyhd)    $.setdata(zzsyhd,`zzsyhd${status}`)
$.log(zzsyhd)
const zzsybody = $request.body
        if(zzsybody)    $.setdata(zzsybody,`zzsybody${status}`)
$.log(zzsybody)
   $.msg($.name,"",'招招试药'+`${status}` +'数据获取成功！')
  }
}

//招招试药
function zzsyxx(timeout = 0) {
  return new Promise((resolve) => {
key = zzsybody.match(/apiToken=(\w+)/)[1]
uid = zzsybody.match(/userId=(\w+)/)[1]
let url = {
        url : `https://yaowu360.com/get/my/waitTask`,
        headers : JSON.parse(zzsyhd),
        body : zzsybody,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(resp.statusCode == 200){
        tid = result.shareLink
        console.log(`\n招招试药💊开始分享任务:\n当前可循环执行任务:${result.shareNum}次,开始循环`)
        num = result.shareNum
        await zzsylb();
        
} else {
       console.log('\n招招试药获取分享链接失败'+data)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}




//招招试药列表id
function zzsylb(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://yaowu360.com/v1.1/apihomePageRecruitmentinfor`,
        headers : JSON.parse(zzsyhd),
        body : 'type=normal&page=1',
}
      $.post(url, async (err, resp, data) => {
        try {
        const result = JSON.parse(data)
        if(resp.statusCode == 200){

for(i=0; i < num;i++){
id = result[i].id
name =result[i].first
console.log(`\n招招试药💊获取任务列表ID成功:\n当前任务ID:${id}\n当前任务标题:${name}`)
await zzsy1();
await $.wait(1000);
await zzsy2();
await $.wait(1000);
await zzsy3();
}
        
        
        
} else {
       console.log('\n招招试药获取任务列表ID失败'+data)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}



//招招试药
function zzsy1(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://yaowu360.com/recruitmentMyApi/${id}`,
        headers : JSON.parse(zzsyhd),
        body : `userId=${uid}&apiToken=${key}`,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(resp.statusCode == 200){
        tid = result.shareLink
        console.log(`\n招招试药💊获取分享链接成功\n${result.shareLink}`)

        
} else {
       console.log('\n招招试药获取分享链接失败'+data)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//招招试药
function zzsy2(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : tid,
        headers : JSON.parse(zzsyhd),

}
      $.get(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(resp.statusCode == 200){
        console.log(`\n招招试药💊获取访问分享链接成功`)
       
} else {
       console.log('\n招招试药访问分享链接失败'+data)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//招招试药
function zzsy3(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://yaowu360.com/v1.1/my/detail`,
        headers : JSON.parse(zzsyhd),
        body : zzsybody,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(resp.statusCode == 200){
        console.log(`\n招招试药💊个人信息获取成功\n当前用户名:${result.nickname}\n当前积分:${result.integralNum}`)
        await $.wait(1000);
} else {
       console.log('\n招招试药个人信息获取失败'+data)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//招招试药
function zzsyqd(timeout = 0) {
  return new Promise((resolve) => {
key = zzsybody.match(/apiToken=(\w+)/)[1]
uid = zzsybody.match(/userId=(\w+)/)[1]
let url = {
        url : `https://yaowu360.com/sign/every/day/1`,
        headers : JSON.parse(zzsyhd),
        body : `userId=${uid}&apiToken=${key}`,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(resp.status == 'success'){
        console.log(`\n招招试药💊签到成功`)
        //await $.wait(4000);
} else {
       console.log('\n招招试药💊签到:'+result.msg)
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

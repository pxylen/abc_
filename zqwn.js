/*
软件名称:最强蜗牛 复制链接下载
更新时间：2021-03-30 @肥皂
脚本说明：最强蜗牛自动任务
脚本为自动完成最强蜗牛的日常任务
每日固定收益0.5元，十元提现

注册下载链接 邀请码: 0c9bd6  下载地址：http://wn.xingguozuliao.com/app/index/qudao.html?uid=NzA0

或扫码下载 https://ae01.alicdn.com/kf/U3db2f09c03ec438cba2b89deb9c1b53f8.jpg

本脚本以学习为主！
使用方法:打开最强蜗牛，首页我的获取用户数据

TG电报群: https://t.me/hahaha8028

boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json

最强蜗牛
圈X配置如下，其他软件自行测试，定时可以多设置几次，没任务会停止运行的
[task_local]
#最强蜗牛
10 8 * * * https://raw.githubusercontent.com/age174/-/main/zqwn.js, tag=最强蜗牛, img-url=https://ae01.alicdn.com/kf/U1748aeaa81a54cdf8797ed3fc54d76ef3.jpg, enabled=true

[rewrite_local]
#最强蜗牛
http://wn.xingguozuliao.com/login/login2/hydata.html url script-request-body https://raw.githubusercontent.com/age174/-/main/zqwn.js

#loon
http://wn.xingguozuliao.com/login/login2/hydata.html script-path=https://raw.githubusercontent.com/age174/-/main/zqwn.js, requires-body=true, timeout=10, tag=最强蜗牛

#surge
最强蜗牛 = type=http-request,pattern=http://wn.xingguozuliao.com/login/login2/hydata.html,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/zqwn.js,script-update-interval=0

[MITM]
hostname = wn.xingguozuliao.com


*/

const $ = new Env('最强蜗牛');
let status;
status = (status = ($.getval("zqwnstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const zqwnurlArr = [], zqwnhdArr = [],zqwnbodyArr = [],zqwncount = ''
let times = Math.round(Date.now())
let zqwnurl = $.getdata('zqwnurl')
let zqwnhd = $.getdata('zqwnhd')
let zqwnbody = $.getdata('zqwnbody')
let zqwnkey = '',id = '',uid='',tid='',name=''
!(async () => {
  if (typeof $request !== "undefined") {
    await zqwnck()
   
  } else {zqwnurlArr.push($.getdata('zqwnurl'))
    zqwnhdArr.push($.getdata('zqwnhd'))
    zqwnbodyArr.push($.getdata('zqwnbody'))
    let zqwncount = ($.getval('zqwncount') || '1');
  for (let i = 2; i <= zqwncount; i++) {
    zqwnurlArr.push($.getdata(`zqwnurl${i}`))
    zqwnhdArr.push($.getdata(`zqwnhd${i}`))
    zqwnbodyArr.push($.getdata(`zqwnbody${i}`))
  }
    console.log(`------------- 共${zqwnhdArr.length}个账号-------------\n`)
      for (let i = 0; i < zqwnhdArr.length; i++) {
        if (zqwnhdArr[i]) {
          zqwnbody = zqwnbodyArr[i];
          zqwnurl = zqwnurlArr[i];
          zqwnhd = zqwnhdArr[i];
          $.index = i + 1;
          console.log(`\n开始【最强蜗牛${$.index}】`)
          await zqwndz();
          await $.wait(1000);
          
  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//最强蜗牛数据获取


function zqwnck() {
   if ($request.url.indexOf("login/login2/hydata") > -1) {
 const zqwnurl = $request.url
  if(zqwnurl)     $.setdata(zqwnurl,`zqwnurl${status}`)
    $.log(zqwnurl)
  const zqwnhd = JSON.stringify($request.headers)
        if(zqwnhd)    $.setdata(zqwnhd,`zqwnhd${status}`)
$.log(zqwnhd)
    const zqwnbody = $request.body
        if(zqwnbody)    $.setdata(zqwnbody,`zqwnbody${status}`)
$.log(zqwnbody)
   $.msg($.name,"",'最强蜗牛'+`${status}` +'数据获取成功！')
  }
}






//最强蜗牛个人信息
function zqwndz(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http://wn.xingguozuliao.com/login/login2/hydata.html",
        headers : JSON.parse(zqwnhd),
        body : zqwnbody,
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.code == 1){
uid=zqwnbody.match(/uid=(.*?)&/)[1]
tid=zqwnbody.match(/yhtk=(.*?)&/)[1]
if(result.msg.jifenbl >= 1000){
$.msg('最强蜗牛','','最强蜗牛当前积分已满足提现要求，请去手动提现')
}
        console.log(`\n【最强蜗牛】获取用户信息成功\n当前用户名:${result.msg.usernc}\n当前余额:${result.msg.yuebl}\n当前积分:${result.msg.jifenbl}`)
await zqwn1();
        
} else {
       console.log('\n【最强蜗牛】获取用户信息失败'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//最强蜗牛积分任务
function zqwn1(timeout = 0) {
  return new Promise((resolve) => {
let sj = Math.floor(Math.random() * 5000); //生成随机数
let url = {
        url : "http://wn.xingguozuliao.com/login/news/xxdianzan.html",
        headers : JSON.parse(zqwnhd),
        body : `uid=${uid}&yhtk=${tid}&xxid=${sj}`,
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.code == 1){

        console.log('\n【最强蜗牛】点赞任务'+result.msg)
        await $.wait(3000);
        await zqwn1();
} else {
       console.log('\n【最强蜗牛】点赞任务'+result.msg)
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

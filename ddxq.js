/*
软件名称:嘀嗒星球 
更新时间：2021-03-04 @肥皂
脚本说明：嘀嗒星球自动视频
脚本为自动完成嘀嗒星球的红包广告任务
一天五六毛左右
一块提现，支付宝秒到

下载地址 https://ddstar.palmmob.com/i/4/1PE5KEKPZD2M0VIwj5CM_0_0

打开链接注册送三毛到1元左右 谢谢大家支持

或者扫码下载https://raw.githubusercontent.com/age174/-/main/E5EE4054-D432-4B61-8637-42BE76ED03BC.jpeg
我小号扫码下载得了0.88



本脚本以学习为主！
使用方法:
共两个数据
1,打开嘀嗒星球，点击天天分红，找到开宝箱得分红看完一个视频获得宝箱视频url
2,点击宝箱下面的看视频三十秒，看完视频获得广告视频url

TG电报群: https://t.me/hahaha802



boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json

https://ddstar.palmmob.com/ddstar_app/activity/ReceiveAdBonus?bonusboxid=0&v=44&c=apple&t=1614800675&u=1PE5KEKPZD2M0VIwj5CM&x=e79fbd46a99572d11b00f2e7cc1cf3f9&

https://ddstar.palmmob.com/ddstar_app/activity/ReceiveAdBonus?bonusboxid=1&v=44&c=apple&t=1614800373&u=1PE5KEKPZD2M0VIwj5CM&x=c412e9c6f7bc1b7898c4c0ab1350e02a&
嘀嗒星球
圈X配置如下，其他软件自行测试，定时可以多设置几次，没任务会停止运行的
[task_local]
#嘀嗒星球
15 0 * * * https://raw.githubusercontent.com/age174/-/main/ddxq.js, tag=嘀嗒星球, img-url=https://raw.githubusercontent.com/erdongchanyo/icon/main/taskicon/Yunsaoma.png, enabled=true


[rewrite_local]
#嘀嗒星球
https://ddstar.palmmob.com/ddstar_app/activity/ReceiveAdBonus? url script-request-header https://raw.githubusercontent.com/age174/-/main/ddxq.js



#loon
https://ddstar.palmmob.com/ddstar_app/activity/ReceiveAdBonus? script-path=https://raw.githubusercontent.com/age174/-/main/ddxq.js, requires-header=true, timeout=10, tag=嘀嗒星球



#surge

嘀嗒星球 = type=http-request,pattern=https://ddstar.palmmob.com/ddstar_app/activity/ReceiveAdBonus?,requires-header=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/ddxq.js,script-update-interval=0




[MITM]
hostname = ddstar.palmmob.com


*/


const $ = new Env('嘀嗒星球');
let status;
status = (status = ($.getval("ddxqstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const ddxqurlArr = [], ddxqhdArr = [],ddxqggurlArr = [],ddxqcount = ''
let ddxqurl = $.getdata('ddxqurl')
let ddxqhd = $.getdata('ddxqhd')
let ddxqggurl = $.getdata('ddxqggurl')
let ddxqhb = 0
!(async () => {
  if (typeof $request !== "undefined") {
    await ddxqck()
   
  } else {ddxqurlArr.push($.getdata('ddxqurl'))
    ddxqhdArr.push($.getdata('ddxqhd'))
   ddxqggurlArr.push($.getdata('ddxqggurl'))
    let ddxqcount = ($.getval('ddxqcount') || '1');
  for (let i = 2; i <= ddxqcount; i++) {
    ddxqurlArr.push($.getdata(`ddxqurl${i}`))
    ddxqhdArr.push($.getdata(`ddxqhd${i}`))
    ddxqggurlArr.push($.getdata(`ddxqggurl${i}`))
  }
    console.log(`------------- 共${ddxqhdArr.length}个账号-------------\n`)
      for (let i = 0; i < ddxqhdArr.length; i++) {
        if (ddxqhdArr[i]) {
         
          ddxqurl = ddxqurlArr[i];
          ddxqhd = ddxqhdArr[i];
          ddxqggurl = ddxqggurlArr[i];
          $.index = i + 1;
          console.log(`\n开始【嘀嗒星球${$.index}】`)
          await ddxqlb();

  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//嘀嗒星球数据获取


function ddxqck() {
   if ($request.url.indexOf("bonusboxid=0") > -1) {
 const ddxqurl = $request.url
  if(ddxqurl)     $.setdata(ddxqurl,`ddxqurl${status}`)
    $.log(ddxqurl)
  const ddxqhd = JSON.stringify($request.headers)
        if(ddxqhd)    $.setdata(ddxqhd,`ddxqhd${status}`)
$.log(ddxqhd)
   $.msg($.name,"",'嘀嗒星球'+`${status}` +'宝箱红包获取数据获取成功！')
  }
if ($request.url.indexOf("bonusboxid=1") > -1) {
 const ddxqggurl = $request.url
  if(ddxqggurl)     $.setdata(ddxqggurl,`ddxqggurl${status}`)
    $.log(ddxqggurl)
$.msg($.name,"",'嘀嗒星球'+`${status}` +'广告红包获取数据获取成功！')
  }
}


//嘀嗒星球视频
function ddxqsp(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : ddxqggurl,
        headers : JSON.parse(ddxqhd),
        }
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log('\n嘀嗒星球[广告红包]回执:成功🌝  \n[获得红包]: '+result.data / 10000 +'元\n等待10秒领取下一个广告红包')
          ddxqhb += result.data / 10000
           await $.wait(10000);
           await ddxqsp();
       
        
} else {
     
console.log('\n嘀嗒星球[红包任务]已运行完毕\n本次运行共获得🧧'+ddxqhb+'元')
      
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}




//嘀嗒星球宝箱
function ddxqlb(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof $.getdata('ddxqhd') === "undefined") {
        $.msg($.name,"",'请先获取嘀嗒星球数据!😓',)
        $.done()
      }

let url = {
        url : ddxqurl,
        headers : JSON.parse(ddxqhd),
        
}
      $.get(url, async (err, resp, data) => {
        try {

    const result = JSON.parse(data)
        if(result.code == 0){

        console.log('\n嘀嗒星球[宝箱红包]回执:成功🌝  \n[获得红包]: '+result.data / 10000 +'元\n等待10秒领取下一个宝箱红包')
        ddxqhb += result.data / 10000
     //$.done()
       await $.wait(10000);
        await ddxqlb();
        
} else {
console.log('嘀嗒星球[宝箱红包]回执:失败🚫 \n当前账号已经没有宝箱领取\n准备执行广告红包任务')
     await ddxqsp();
}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}





function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

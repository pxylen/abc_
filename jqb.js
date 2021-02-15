/*软件名：金钱豹  扫码下载  
注意，必须扫码使用我贴在下面的二维码扫码打开软件，否则不会加载出任务界面
本脚本以学习为主，出现任何情况与本人无关，大佬见笑，技术有限
脚本包含除了试玩任务外的所有任务
任务完成每天收益0.5元左右
两元可提现
作者：@肥皂  最后更新时间 2021.02.15
我的邀请码：30008347  感谢大佬们的填写----
食用方法：
1、进入软件，点击看视频，共五个视频任务，每个任务观看一次视频共获取五个视频body
2、进入转盘红包，转一次，获取转盘抽奖body
3、点击现金福利，点击签到，获取签到body
4、点击看广告，看完一组广告，获取广告body和headers
5、现在可以先跑一次脚本，跑完脚本之后，进入现金福利-每日任务-领取每日任务的奖励-获得每日任务的body
脚本每天运行一次就可以了。

金钱豹下载二维码地址： https://raw.githubusercontent.com/age174/-/main/0DCC1893-7EEB-4E15-9EE9-F6A3AEC52070.jpeg

圈X配置如下，其他软件自行测试，金钱豹没有任务界面请务必复制上面的二维码链接到浏览器打开保存扫码，然后到扫码结果上打开
[task_local]
#金钱豹
15 0 * * * https://raw.githubusercontent.com/age174/-/main/jqb.js, tag=金钱豹, img-url=https://ftp.bmp.ovh/imgs/2021/02/9e6d449acb9b6889.png, enabled=true

[rewrite_local]
#金钱豹
^http://jqb.iphonezhuan.com/ url script-request-body https://raw.githubusercontent.com/age174/-/main/jqb.js

#loon
^http://jqb.iphonezhuan.com/ script-path=https://raw.githubusercontent.com/age174/-/main/jqb.js, requires-body=true, timeout=10, tag=金钱豹

#surge
金钱豹 = type=http-request,pattern=^http://jqb.iphonezhuan.com/,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/jqb.js,script-update-interval=0

[MITM]
hostname = jqb.iphonezhuan.com

*/
const $ = new Env('金钱豹');
let jqburl = $.getdata('jqburl')
let jqbhd = $.getdata('jqbhd')
let jqbggbody = $.getdata('jqbggbody')
let jqbqdbody = $.getdata('jqbqdbody')
let jqbbody1 = $.getdata('jqbbody1')
let jqbbody2 = $.getdata('jqbbody2')
let jqbbody3 = $.getdata('jqbbody3')
let jqbbody4 = $.getdata('jqbbody4')
let jqbbody5 = $.getdata('jqbbody5')
let jqbrwbody = $.getdata('jqbrwbody')
let jqbzpbody = $.getdata('jqbzpbody')
!(async () => {
  if (typeof $request !== "undefined") {
	await jqbck()
  }else {
       console.log(`\n金钱豹开始执行签到任务！💦\n`)
       await jqbqd();
    for (let i = 0; i < 6; i++) {
      $.index = i + 1      
       console.log(`\n金钱豹已执行第一个看视频任务！💦\n等待10秒开始执行第二个看视频任务`)
       await jqbsp1();
       await $.wait(10000);
       console.log(`\n金钱豹已执行第二个看视频任务！💦\n等待10秒开始执行第三个看视频任务`)
       await jqbsp2();
       await $.wait(10000);
	  console.log(`\n金钱豹已执行第三个看视频任务！💦\n等待10秒开始执行第四个看视频任务`)
       await jqbsp3();
	  await $.wait(10000);  
	  console.log(`\n金钱豹已执行第四个看视频任务！💦\n等待10秒开始执行第五个看视频任务`)
       await jqbsp4();
	  await $.wait(10000);
	  console.log(`\n金钱豹已执行第五个看视频任务！💦\n等待10秒开始，准备执行下一轮视频任务`)
	  await jqbsp5();
       await $.wait(10000);
       console.log(`\n金钱豹视频任务已执行完第${i+1}轮视频任务！💦\n共有五轮视频任务，开始执行下一轮视频任务`)
  }for (let j = 0; j < 3; j++) {
	  $.index = j + 1
	  console.log(`\n金钱豹开始执行第${j+1}广告任务！💦\n等待10秒开始执行下一次广告任务`)
	  await jqbgg();
	  await $.wait(10000);
  }for (let x = 0; x < 20; x++) {
	  $.index = x + 1
	  console.log(`\n金钱豹开始执行第${x+1}转盘抽奖！💦\n等待10秒开始执行下一次转盘抽奖`)
	  await jqbzp();
	  await $.wait(10000);
	  }
	  console.log(`\n金钱豹执行转盘抽奖完成！💦\n等待10秒开始执行每日任务奖励领取`)
	  await $.wait(10000);
	  await jqbrw();
	  await $.wait(3000);
$.msg("","","金钱豹任务已全部完成！")
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//金钱豹数据获取
function jqbck() {
if ($request.url.indexOf("submitsign") > -1){
  $.setdata(JSON.stringify($request.url),'jqburl')
    $.log(jqburl)
$.setdata(JSON.stringify($request.headers),'jqbhd');   $.msg($.name,"","金钱豹headers获取成功！")
    $.log(jqbhd)
  $.setdata($request.body,'jqbqdbody')
   $.msg($.name,"","金钱豹签到body获取成功！")
  }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("type=2") > -1){
    $.setdata($request.body,'jqbggbody')
$.log(jqbggbody)
   $.msg($.name,"","金钱豹广告body获取成功！")
  }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("adconfigid=6") > -1){
  $.setdata($request.body,'jqbbody1')
$.log(jqbbody1)
   $.msg($.name,"","金钱豹视频body1获取成功！")
    }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("adconfigid=7") > -1){
  $.setdata($request.body,'jqbbody2')
$.log(jqbbody2)
   $.msg($.name,"","金钱豹视频body2获取成功！")
    }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("adconfigid=8") > -1){
  $.setdata($request.body,'jqbbody3')
$.log(jqbbody3)
   $.msg($.name,"","金钱豹视频body3获取成功！")
    }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("adconfigid=9") > -1){
  $.setdata($request.body,'jqbbody4')
$.log(jqbbody4)
   $.msg($.name,"","金钱豹视频body4获取成功！")
    }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("adconfigid=10") > -1){
  $.setdata($request.body,'jqbbody5')
$.log(jqbbody5)
   $.msg($.name,"","金钱豹视频body5获取成功！")
    }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("type=4") > -1){
  $.setdata($request.body,'jqbzpbody')
$.log(jqbzpbody)
   $.msg($.name,"","金钱豹转盘body获取成功！")
    }else if ($request.url.indexOf("finishdailytask") > -1&&$request.body.indexOf("type=1") > -1){
  $.setdata($request.body,'jqbrwbody')
   $.msg($.name,"","金钱豹每日任务body获取成功！")
  }
}



//金钱豹视频1     
function jqbsp1(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse($.getdata('jqbhd')),
        body :  jqbbody1,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹看视频1回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹看视频1回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹视频2
function jqbsp2(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse($.getdata('jqbhd')),
        body :  jqbbody2,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹看视频2回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹看视频2回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹视频3
function jqbsp3(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse($.getdata('jqbhd')),
        body :  jqbbody3,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹看视频3回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹看视频3回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹视频4
function jqbsp4(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse($.getdata('jqbhd')),
        body :  jqbbody4,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹看视频4回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹看视频4回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹视频5
function jqbsp5(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse($.getdata('jqbhd')),
        body :  jqbbody5,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹看视频5回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹看视频5回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹转盘
function jqbzp(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse($.getdata('jqbhd')),
        body :  jqbzpbody,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹转盘抽奖回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹转盘抽奖回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹广告
function jqbgg(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse($.getdata('jqbhd')),
        body :  jqbggbody,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹广告任务回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹广告任务回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹每日任务
function jqbrw(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/finishdailytask',
        headers : JSON.parse($.getdata('jqbhd')),
        body :  jqbrwbody,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹每日任务回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 401){
        console.log('金钱豹每日任务回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹签到
function jqbqd(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof $.getdata('jqburl') === "undefined") {
        $.msg($.name,"",'请先签到获取金钱豹body和headers!😓',)
        $.done()
      }
let url = {
        url : 'http://jqb.iphonezhuan.com/submitsign',
        headers : JSON.parse($.getdata('jqbhd')),
        body : jqbqdbody,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹签到回执:成功🌝 '+result.msg+'等待10秒开始执行视频任务')
}
if(result.statuscode == 400 || result.statuscode == 401){
        console.log('金钱豹签到回执:失败🚫 '+result.msg)}
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

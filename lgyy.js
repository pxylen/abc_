/*
软件名称:朗果英语 复制链接下载
更新时间：2021-03-30 @肥皂
脚本说明：朗果英语自动任务
脚本为自动完成朗果英语的日常任务
每日固定收益0.3元，十元提现，可多号撸。
有连续签到奖励，每周的第三天和第七天签到分别有最高6.88和8.88的红包，这个可以直接提现。
多账号撸的不可退出账号，把当前朗果英语app删除了
重新下载登录小号


注册下载链接http://webview.langooo.com/#/invite?uid=129125&topicId=21
复制链接注册之后有一个0.88的红包，可直接提现微信，谢谢支持


本脚本以学习为主！
使用方法:打开朗果英语，首页右上角点击红包获得数据

TG电报群: https://t.me/hahaha8028

boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json

朗果英语
圈X配置如下，其他软件自行测试，定时可以多设置几次，没任务会停止运行的
[task_local]
#朗果英语
10-15 9 * * * https://raw.githubusercontent.com/age174/-/main/lgyy.js, tag=朗果英语, img-url=https://ae01.alicdn.com/kf/Uc3c35e1796624a7ca6a23c89c7f0dff2H.jpg, enabled=true

[rewrite_local]
#朗果英语
http://api.langooo.com/task/daily/taskList url script-request-body https://raw.githubusercontent.com/age174/-/main/lgyy.js

#loon
http://api.langooo.com/task/daily/taskList script-path=https://raw.githubusercontent.com/age174/-/main/lgyy.js, requires-body=true, timeout=10, tag=朗果英语

#surge
朗果英语 = type=http-request,pattern=http://api.langooo.com/task/daily/taskList,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/lgyy.js,script-update-interval=0

[MITM]
hostname = api.langooo.com


*/

const $ = new Env('朗果英语');
let status;
status = (status = ($.getval("lgyystatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const lgyyurlArr = [], lgyyhdArr = [],lgyybodyArr = [],lgyycount = ''
let times = Math.round(Date.now())
let lgyyurl = $.getdata('lgyyurl')
let lgyyhd = $.getdata('lgyyhd')
let lgyybody = $.getdata('lgyybody')
let lgyykey = '',id = '',uid='',tid='',name=''
!(async () => {
  if (typeof $request !== "undefined") {
    await lgyyck()
   
  } else {lgyyurlArr.push($.getdata('lgyyurl'))
    lgyyhdArr.push($.getdata('lgyyhd'))
    lgyybodyArr.push($.getdata('lgyybody'))
    let lgyycount = ($.getval('lgyycount') || '1');
  for (let i = 2; i <= lgyycount; i++) {
    lgyyurlArr.push($.getdata(`lgyyurl${i}`))
    lgyyhdArr.push($.getdata(`lgyyhd${i}`))
    lgyybodyArr.push($.getdata(`lgyybody${i}`))
  }
    console.log(`------------- 共${lgyyhdArr.length}个账号-------------\n`)
      for (let i = 0; i < lgyyhdArr.length; i++) {
        if (lgyyhdArr[i]) {
          lgyybody = lgyybodyArr[i];
          lgyyurl = lgyyurlArr[i];
          lgyyhd = lgyyhdArr[i];
          $.index = i + 1;
          console.log(`\n开始【朗果英语${$.index}】`)
          await lgyylb();
          await $.wait(1000);
          await lgyydz();
          await $.wait(1000);
          await lgyy1();
          await $.wait(1000);
          await lgyy2();
  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//朗果英语数据获取


function lgyyck() {
   if ($request.url.indexOf("taskList") > -1) {
 const lgyyurl = $request.url
  if(lgyyurl)     $.setdata(lgyyurl,`lgyyurl${status}`)
    $.log(lgyyurl)
  const lgyyhd = JSON.stringify($request.headers)
        if(lgyyhd)    $.setdata(lgyyhd,`lgyyhd${status}`)
$.log(lgyyhd)
    const lgyybody = $request.body
        if(lgyybody)    $.setdata(lgyybody,`lgyybody${status}`)
$.log(lgyybody)
   $.msg($.name,"",'朗果英语'+`${status}` +'数据获取成功！')
  }
}



//朗果英语文章列表
function lgyylb(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof $.getdata('lgyyhd') === "undefined") {
        $.msg($.name,"",'请先获取朗果英语数据!😓',)
        $.done()
      }

let url = {
        url : lgyyurl,
        headers : JSON.parse(lgyyhd),
        body : lgyybody,
}
      $.post(url, async (err, resp, data) => {
        try {
       
    const result = JSON.parse(data)
        if(result.code == 200){
id = JSON.parse(lgyybody)
uid = id.uid
if(result.result.taskUserEvaluationVOList[0].receivedRedId !== undefined){
tid = result.result.taskUserEvaluationVOList[0].receivedRedId
$.log('\n朗果英语检测到有奖励可领取,前往领取')
await lgyyhb();
} else if(result.result.taskUserEvaluationVOList[1].receivedRedId !== undefined){
tid = result.result.taskUserEvaluationVOList[1].receivedRedId
$.log('\n朗果英语检测到有奖励可领取,前往领取')
await lgyyhb();
}else if(result.result.taskUserEvaluationVOList[2].receivedRedId !== undefined){
tid = result.result.taskUserEvaluationVOList[2].receivedRedId
$.log('\n朗果英语检测到有奖励可领取,前往领取')
await lgyyhb();
}else if(result.result.taskUserEvaluationVOList[3].receivedRedId !== undefined){
tid = result.result.taskUserEvaluationVOList[3].receivedRedId
$.log('\n朗果英语检测到有奖励可领取,前往领取')
await lgyyhb();
}else if(result.result.taskUserEvaluationVOList[4].receivedRedId !== undefined){
tid = result.result.taskUserEvaluationVOList[4].receivedRedId
$.log('\n朗果英语检测到有奖励可领取,前往领取')
await lgyyhb();
}

        console.log(`\n朗果英语用户信息获取成功\n当前积分:${result.result.userScore}\n当前可提现助学金:${result.result.userRedAmout}`)    
        
} else {
$.log(data)
console.log('朗果英语获取用户信息失败 已停止当前账号运行!')

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


//朗果英语签到
function lgyydz(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http://api.langooo.com/sign/day/sinIn",
        headers : JSON.parse(lgyyhd),
        body : lgyybody,
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.result.integralNum == 1){

        console.log('\n朗果英语签到成功')

        
} else {
       console.log('\n朗果英语签到失败')

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//朗果英语听力
function lgyy1(timeout = 0) {
  return new Promise((resolve) => {
let sj = Math.floor(Math.random() * 50000); //生成随机数
let url = {
        url : "http://api.langooo.com/training/addUserScore",
        headers : JSON.parse(lgyyhd),
        body : `{"channelNumber":2,"topicId":${sj},"type":"1","uid":${uid}}`,
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.code == 200){

        console.log('\n朗果英语听力任务'+result.result.msg)
        
} else {
       console.log('\n朗果英语听力任务'+result.result.msg)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//朗果英语阅读
function lgyy2(timeout = 0) {
  return new Promise((resolve) => {
let sj = Math.floor(Math.random() * 50000); //生成随机数
let url = {
        url : "http://api.langooo.com/training/addUserScore",
        headers : JSON.parse(lgyyhd),
        body : `{"channelNumber":2,"topicId":${sj},"type":"2","uid":${uid}}`,
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.code == 200){
        console.log('\n朗果英语阅读任务'+result.result.msg)
        //await $.wait(1000);
        //await lgyyyd();
} else {
       console.log('\n朗果英语阅读任务  '+result.result.msg)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//朗果英语签到红包
function lgyyhb(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http://api.langooo.com/task/recevieRedBag",
        headers : JSON.parse(lgyyhd),
        body : `{"topicId":${tid},"uid":${uid},"channelNumber":2}`,
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.code == 200){
        console.log('\n朗果英语领取奖励'+result.message)
} else {
       console.log('\n朗果英语领取奖励'+data)

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

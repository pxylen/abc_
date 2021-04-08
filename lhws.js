/*
软件名称:落花无生 
更新时间：2021-04-08 @肥皂
脚本说明：落花无生自动答题
脚本为自动完成落花无生的看广告答题任务
注册送三块,每题0.1元
需要实名人脸,自己决定玩不玩,我只是发脚本,玩不玩自己的事,勿喷
已测试提现到账7.37元。提现之后暂时没发现任务,后续不知。

使用方法:点击大厅,广告,获得数据

注册下载链接:https://link.lhws.info/InvitationToRegister?inviteCode=T9sVra

TG电报群: https://t.me/hahaha8028

boxjs地址 :  
https://raw.githubusercontent.com/age174/-/main/feizao.box.json

落花无生
圈X配置如下，其他软件自行测试，定时可以多设置几次，没任务会停止运行的
[task_local]
#落花无生
0 9,13 * * * https://raw.githubusercontent.com/age174/-/main/lhws.js, tag=落花无生, img-url=https://ae01.alicdn.com/kf/U7f67ec3bd2d848a59d72a1807dc9e324r.jpg, enabled=true

[rewrite_local]
#落花无生
https://api.lhws.info/lhws/api/member/list/ad/new url script-request-body https://raw.githubusercontent.com/age174/-/main/lhws.js

#loon
https://api.lhws.info/lhws/api/member/list/ad/new script-path=https://raw.githubusercontent.com/age174/-/main/lhws.js, requires-body=true, timeout=10, tag=落花无生

#surge
落花无生 = type=http-request,pattern=https://api.lhws.info/lhws/api/member/list/ad/new,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/lhws.js,script-update-interval=0

[MITM]
hostname = api.lhws.info

*/


const $ = new Env('落花无生');
let status;
status = (status = ($.getval("lhwsstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const lhwsurlArr = [], lhwshdArr = [],lhwsbodyArr = [],lhwscount = ''
let lhwsurl = $.getdata('lhwsurl')
let lhwshd = $.getdata('lhwshd')
let lhwsbody = $.getdata('lhwsbody')
let token = '',pid = '',id1 = '',id2 = '',id3 = '',id4= '', qid = '',qname = ''
!(async () => {
  if (typeof $request !== "undefined") {
    await lhwsck()
   
  } else {lhwsurlArr.push($.getdata('lhwsurl'))
    lhwshdArr.push($.getdata('lhwshd'))
    lhwsbodyArr.push($.getdata('lhwsbody'))
    let lhwscount = ($.getval('lhwscount') || '1');
  for (let i = 2; i <= lhwscount; i++) {
    lhwsurlArr.push($.getdata(`lhwsurl${i}`))
    lhwshdArr.push($.getdata(`lhwshd${i}`))
    lhwsbodyArr.push($.getdata(`lhwsbody${i}`))
  }
    console.log(`------------- 共${lhwshdArr.length}个账号-------------\n`)
      for (let i = 0; i < lhwshdArr.length; i++) {
        if (lhwshdArr[i]) {
         lhwsbody = lhwsbodyArr[i];
          lhwsurl = lhwsurlArr[i];
          lhwshd = lhwshdArr[i];
          $.index = i + 1;
          console.log(`\n开始【落花无生${$.index}】`)
          await lhwslb();
          

  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//落花无生数据获取

function lhwsck() {
   if ($request.url.indexOf("member/list/ad/new") > -1) {
 const lhwsurl = $request.url
  if(lhwsurl)     $.setdata(lhwsurl,`lhwsurl${status}`)
    $.log(lhwsurl)
const lhwsbody = $request.body
  if(lhwsbody)     $.setdata(lhwsbody,`lhwsbody${status}`)
    $.log(lhwsbody)
  const lhwshd = JSON.stringify($request.headers)
        if(lhwshd)    $.setdata(lhwshd,`lhwshd${status}`)
$.log(lhwshd)
   $.msg($.name,"",'落花无生'+`${status}` +'数据获取成功！')
  }
}
//落花无生列表
function lhwslb(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : lhwsurl,
        headers : JSON.parse(lhwshd),
        body : lhwsbody,
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errcode == 0){
if(result.data.list == ''){
$.log('\n落花无生没有匹配到任务')
}
token = JSON.parse(lhwshd)
token = token.userToken
pid = result.data.list[0].publishDetailId
        console.log(`\n落花无生匹配任务成功\n任务名:${result.data.list[0].title}\n任务id:${result.data.list[0].publishDetailId}\n任务奖励金额:${result.data.list[0].money}`)
await $.wait(15000);
await lhwskey()
} else {
       console.log('\n落花无生匹配任务失败'+result.errmsg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}



//落花无生key
function lhwskey(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://api.lhws.info/lhws/api/member/ad/question',
        headers : JSON.parse(lhwshd),
        body : `{"userToken":"${token}","publishDetailId":"${pid}"}`,
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errcode == 0){
qid=result.data.questionId
pid=result.data.publishDetailId
qname=result.data.question
id1=result.data.list[0].id
id2=result.data.list[1].id
id3=result.data.list[2].id
id4=result.data.list[3].id

        console.log(`\n落花无生匹配答案id成功\n题目为:${qname}`)
await $.wait(15000);
await lhws1();

} else {
       console.log('\n落花无生匹配答案id失败'+result.errmsg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//落花无生答题1
function lhws1(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://api.lhws.info/lhws/api/member/check/answer',
        headers : JSON.parse(lhwshd),
        body : `{"questionId":${qid},"optionId":"${id1}","publishDetailId":"${pid}","userToken":"${token}"}"}`,
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errcode == 0){

        console.log(`\n落花无生答题1:${result.errmsg}`)
await lhwslb()
await $.wait(15000);
} else {
       console.log('\n落花无生答题1失败'+result.errmsg+'更换答案重新提交')
await $.wait(15000);
await lhws2()
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//落花无生答题2
function lhws2(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://api.lhws.info/lhws/api/member/check/answer',
        headers : JSON.parse(lhwshd),
        body : `{"questionId":${qid},"optionId":"${id2}","publishDetailId":"${pid}","userToken":"${token}"}"}`,
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errcode == 0){

        console.log(`\n落花无生答题2:${result.errmsg}`)
await lhwslb()
await $.wait(15000);
} else {
       console.log('\n落花无生答题2失败'+result.errmsg+'更换答案重新提交')
await $.wait(15000);
await lhws3()
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//落花无生答题3
function lhws3(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://api.lhws.info/lhws/api/member/check/answer',
        headers : JSON.parse(lhwshd),
        body : `{"questionId":${qid},"optionId":"${id3}","publishDetailId":"${pid}","userToken":"${token}"}"}`,
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errcode == 0){

        console.log(`\n落花无生答题3:${result.errmsg}`)
await lhwslb()
await $.wait(15000);
} else {
       console.log('\n落花无生答题3失败'+result.errmsg+'更换答案重新提交')
await $.wait(15000);
await lhws4()
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//落花无生答题4
function lhws4(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://api.lhws.info/lhws/api/member/check/answer',
        headers : JSON.parse(lhwshd),
        body : `{"questionId":${qid},"optionId":"${id4}","publishDetailId":"${pid}","userToken":"${token}"}"}`,
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errcode == 0){

        console.log(`\n落花无生答题4:${result.errmsg}`)
await lhwslb()
await $.wait(15000);
} else {
       console.log('\n落花无生答题失败')

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

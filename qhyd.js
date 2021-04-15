/*
软件名称:千禾阅读 微信扫描二维码打开
更新时间：2021-04-15 @肥皂
脚本说明：千禾阅读自动阅读
脚本为自动完成千禾阅读的阅读任务

每天1到4元不等。可以手动做一下关注任务,十秒一个就做完了。开通会员任务奖励很高。自己取舍开通划不划算。

千禾使用方法: 共四个步骤
1-扫码进入千禾任务界面，点击我的,获得个人信息数据
2-点击阅读任务,点击一键领取,获得一键领取数据
3-禁用千禾阅读个人信息和领取重写,打开千禾阅读任务重写
4-复制阅读任务链接到微信打开，打开之后获得任务数据

4.15修复个人信息显示不全

扫描二维码打开:https://ae01.alicdn.com/kf/U0c6b7cea29354290b97a747f1133c1cfm.jpg

或复制链接到微信打开 https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6048923d456554e8&redirect_uri=https%3A%2F%2Fwww.qliang2.com%2F%23%2Fauthorize&response_type=code&scope=snsapi_userinfo&state=eyJudW0iOiA1ODIsICJhcHBfaWQiOiBudWxsLCAidXNlcl9pZCI6IDMwODU3NzIyfQ%3D%3D%23wechat_redirect

本脚本以学习为主！

TG通知群:https://t.me/Ariszy_Scripts
TG电报交流群: https://t.me/hahaha8028

boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json

千禾阅读
圈X配置如下，其他软件自行测试，定时可以多设置几次，没任务会停止运行的
[task_local]
#千禾阅读
35 9-22 * * * https://raw.githubusercontent.com/age174/-/main/qhyd.js, tag=千禾阅读, img-url=https://ae01.alicdn.com/kf/U413ab7460abb4a28b11deac3c5034243N.jpg, enabled=true


[rewrite_local]
#千禾阅读个人信息和领取重写
https://www.qianhe5.com/ url script-request-header https://raw.githubusercontent.com/age174/-/main/qhyd.js
#千禾阅读任务重写
https://www.qianhe5.com/read/v1/get_time_list url script-request-body https://raw.githubusercontent.com/age174/-/main/qhyd.js

#loon
https://www.qianhe5.com/ script-path=https://raw.githubusercontent.com/age174/-/main/qhyd.js, requires-header=true, timeout=10, tag=千禾阅读个人信息和领取重写
https://www.qianhe5.com/read/v1/get_time_list script-path=https://raw.githubusercontent.com/age174/-/main/qhyd.js, requires-body=true, timeout=10, tag=千禾阅读任务重写

#surge
千禾阅读个人信息和领取重写 = type=http-request,pattern=https://www.qianhe5.com/,requires-header=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/qhyd.js,script-update-interval=0
千禾阅读任务重写 = type=http-request,pattern=https://www.qianhe5.com/read/v1/get_time_list,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/qhyd.js,script-update-interval=0

[MITM]
hostname = www.qianhe5.com

*/


const $ = new Env('千禾阅读自动阅读');
let status;
status = (status = ($.getval("qhydstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const qhydurlArr = [], qhydhdArr = [],qhydlqhdArr = [],qhydbodyArr = [],qhydcount = ''
let times = Math.round(Date.now() / 1000)
let qhydurl = $.getdata('qhydurl')
let qhydhd = $.getdata('qhydhd')
let qhydlqhd = $.getdata('qhydlqhd')
let qhydbody = $.getdata('qhydbody')
let qhydkey = '',id = '',uid='',tid='',name='',ye=''
!(async () => {
  if (typeof $request !== "undefined") {
    await qhydck()
   
  } else {qhydurlArr.push($.getdata('qhydurl'))
    qhydhdArr.push($.getdata('qhydhd'))
    qhydlqhdArr.push($.getdata('qhydlqhd'))
    qhydbodyArr.push($.getdata('qhydbody'))
    let qhydcount = ($.getval('qhydcount') || '1');
  for (let i = 2; i <= qhydcount; i++) {
    qhydurlArr.push($.getdata(`qhydurl${i}`))
    qhydhdArr.push($.getdata(`qhydhd${i}`))
    qhydlqhdArr.push($.getdata(`qhydlqhd${i}`))
    qhydbodyArr.push($.getdata(`qhydbody${i}`))
  }
    console.log(`------------- 共${qhydhdArr.length}个账号-------------\n`)
      for (let i = 0; i < qhydhdArr.length; i++) {
        if (qhydhdArr[i]) {
          qhydbody = qhydbodyArr[i];
          qhydurl = qhydurlArr[i];
          qhydhd = qhydhdArr[i];
          qhydlqhd = qhydlqhdArr[i];
          $.index = i + 1;
          console.log(`\n开始【千禾阅读${$.index}】`)
          await qhydlb();
          await qhydxx();
          await qhydye();

  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//千禾阅读数据获取


function qhydck() {
   if ($request.url.indexOf("get_time_list") > -1) {
  const qhydhd = JSON.stringify($request.headers)
        if(qhydhd)    $.setdata(qhydhd,`qhydhd${status}`)
$.log(qhydhd)
const qhydbody = $request.body
        if(qhydbody)    $.setdata(qhydbody,`qhydbody${status}`)
$.log(qhydbody)
   $.msg($.name,"",'千禾阅读'+`${status}` +'阅读数据获取成功！')
  }else if ($request.url.indexOf("click_collection") > -1) {
 const qhydlqhd = JSON.stringify($request.headers)
  if(qhydlqhd)     $.setdata(qhydlqhd,`qhydlqhd${status}`)
    $.log(qhydlqhd)
 $.msg($.name,"",'千禾阅读'+`${status}` +'一键领取数据获取成功！')
}else if ($request.url.indexOf("info?token") > -1) {
 const qhydurl = $request.url
  if(qhydurl)     $.setdata(qhydurl,`qhydurl${status}`)
    $.log(qhydurl)
$.msg($.name,"",'千禾阅读'+`${status}` +'个人信息数据获取成功！')
}
}






//千禾阅读列表id
function qhydlb(timeout = 0) {
  return new Promise((resolve) => {
key = JSON.parse(qhydbody)
key = key.urlKey
let url = {
        url : `https://www.qianhe5.com/read/v1/get_time_list`,
        headers : JSON.parse(qhydhd),
        body : qhydbody,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.code== 200){
if(result.data[0] == undefined){
console.log('\n千禾阅读没有匹配到阅读列表ID,尝试执行一键领取')
await $.wait(3000);
await qhyd();
}
        tid = result.data[0].id
        console.log('\n千禾阅读获取任务列表ID成功')
        await $.wait(1000);
        await qhydrw();
} else {
       console.log('\n千禾阅读获取任务列表ID失败'+result.message)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//千禾阅读列表
function qhydrw(timeout = 0) {
  return new Promise((resolve) => {
key = JSON.parse(qhydbody)
key = key.urlKey
let url = {
        url : `https://www.qianhe5.com/read/v1/get_time_list_task`,
        headers : JSON.parse(qhydhd),
        body : `{"urlKey":"${key}","time_id":${tid}}`,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(result.code== 200){
        id = result.data.list[0].id
        name = result.data.list[0].title
        uid = result.data.list[0].user_url
        console.log(`\n千禾阅读获取任务列表成功,当前共有:${result.data.list.length}个任务\n当前任务ID:${id}\n任务名:${name}\n开始执行阅读`)
        await $.wait(1000);
        await qhyd1();
} else {
       console.log('\n千禾阅读获取任务列表失败'+result.message)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//千禾阅读
function qhyd1(timeout = 0) {
  return new Promise((resolve) => {
key = JSON.parse(qhydbody)
key = key.urlKey
let url = {
        url : 'https://www.qianhe5.com/read/v1/get_click_task',
        headers : JSON.parse(qhydhd),
        body : `{"urlKey":"${key}","task_id":${id},"type":1}`,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(result.code== 200){
        console.log('\n千禾阅读提交任务成功')
        await $.wait(4000);
        await qhyd2();
} else {
       console.log('\n千禾阅读提交任务失败'+result.message)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//千禾阅读领取奖励
function qhyd2(timeout = 0) {
  return new Promise((resolve) => {
key = JSON.parse(qhydbody)
key = key.urlKey
let url = {
        url : `https://www.qianhe5.com/read/v1/get_click_task`,
        headers : JSON.parse(qhydhd),
        body : `{"urlKey":"${key}","task_id":${id},"type":2}`,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(result.code== 200){
        console.log('\n千禾阅读领取奖励成功,获得金币:'+result.data.number)
        await $.wait(1000);
        await qhydrw();
} else {
       console.log('\n千禾阅读领取奖励失败'+result.message)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//千禾阅读一键领取
function qhyd(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://www.qianhe5.com/read/v1/click_collection`,
        headers : JSON.parse(qhydlqhd),
}
      $.get(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(result.code == 200){
        console.log('\n千禾阅读一键领取任务成功')
        await $.wait(1000);
        await qhydlb();
} else {
       console.log('\n千禾阅读一键领取任务失败'+result.message)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//千禾阅读信息
function qhydxx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : qhydurl,
        headers : JSON.parse(qhydlqhd),
}
      $.get(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(result.code == 0){
        ye+=`\n千禾阅读用户信息获取成功\n【当前用户名】:${result.data.username}`
        
} else {
       console.log('\n千禾阅读一键领取任务失败'+result.message)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//千禾阅读余额
function qhydye(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://www.qianhe5.com/api/user/money',
        headers : JSON.parse(qhydlqhd),
}
      $.get(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(result.code == 0){
        console.log(`${ye}\n【当前总收益】:${result.data.total_amount}\n【当前余额】:${result.data.balance}\n【师徒收益】:${result.data.prent_amount}\n【损失收益】:${result.data.total_loss_amount}`)
        
} else {
       console.log('\n千禾阅读一键领取任务失败'+result.message)
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

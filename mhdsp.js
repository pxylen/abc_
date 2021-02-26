/*
软件名称:陌嗨短视频 
更新时间：2021-02-26 @肥皂
脚本说明：陌嗨短视频
脚本为挂机签到挖矿

声明，这个软件属于区块链小视频，零撸项目，不建议充值,不建议充值。。。。不建议充值。。上车就行，撸到就是赚到。

收益周期比较长，一天0.5个星钻，目前星钻价格6-8元一个。
看自己情况决定要不要做。星钻需要下载交易所卖出，要做的话建议星钻先复投购买金星，后期再卖出！认证需要付费1.7元，会跳转到支付宝，使用支付宝的人脸识别接口，可放心识别。看自己玩不玩吧。
陌嗨短视频上车的请注意，四天可以撸八块，到了四天有两星钻的，可以去交易所出售，卖出一个，扣一个的手续费，得八块，后期产生的星钻请拿去复投。到十个去购买金星复投就可以。
本脚本以学习为主！
使用方法:
首次运行脚本，会提示获取body
进入陌嗨视频首页，找到右边陌嗨星球，点击，进入，点击，采集，选择免费的水星。然后雇佣，返回进入家园，点击获取能量，观看一个广告，观看倒计时结束提示获取广告body成功

TG电报群: https://t.me/hahaha8028
注意:
扫描二维码下载

二维码下载地址 https://raw.githubusercontent.com/age174/-/main/7D96260A-3D09-48DF-8214-07695A837815.jpeg

2.26更新加入多账号

保存二维码微信扫码打开下载。

我的邀请码 : 73905113  感谢大佬们填写 

陌嗨交易所下载https://testflight.apple.com/join/Hwsn8UXE

脚本每天运行一次即可，不用管他。反正挂机，不薅白不薅，哈哈😄

陌嗨短视频
圈X配置如下，其他软件自行测试
[task_local]
#陌嗨短视频
15 10 * * * https://raw.githubusercontent.com/age174/-/main/mhdsp.js, tag=陌嗨短视频, img-url=https://raw.githubusercontent.com/usrnb/options/main/QuantumultX/icons/task/mhdsp.png, enabled=true


[rewrite_local]
#陌嗨短视频
^https://api.hemayoudao.cn/admin-dotask/app/spirit/v1/finish-task url script-request-header https://raw.githubusercontent.com/age174/-/main/mhdsp.js



#loon
^https://api.hemayoudao.cn/admin-dotask/app/spirit/v1/finish-task script-path=https://raw.githubusercontent.com/age174/-/main/mhdsp.js, requires-header=true, timeout=10, tag=陌嗨短视频



#surge

陌嗨短视频 = type=http-request,pattern=^https://api.hemayoudao.cn/admin-dotask/app/spirit/v1/finish-task,requires-header=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/mhdsp.js,script-update-interval=0




[MITM]
hostname = api.hemayoudao.cn


*/
const $ = new Env('陌嗨短视频');
let status;
status = (status = ($.getval("mhstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const mhurlArr = [], mhhdArr = [],mhbodyArr = [],mhcount = ''
let mhurl = $.getdata('mhurl')
let mhhd = $.getdata('mhhd')
let mhbody = $.getdata('mhbody')
!(async () => {
  if (typeof $request !== "undefined") {
    await mhck()
  } else {
mhurlArr.push($.getdata('mhurl'))
    mhhdArr.push($.getdata('mhhd'))
    mhbodyArr.push($.getdata('mhbody'))
    let mhcount = ($.getval('mhcount') || '1');
  for (let i = 2; i <= mhcount; i++) {
    mhurlArr.push($.getdata(`mhurl${i}`))
    mhhdArr.push($.getdata(`mhhd${i}`))
    mhbodyArr.push($.getdata(`mhbody${i}`))
  }
    console.log(`------------- 共${mhhdArr.length}个账号----------------\n`)
      for (let i = 0; i < mhhdArr.length; i++) {
        if (mhhdArr[i]) {
         
          mhurl = mhurlArr[i];
          mhhd = mhhdArr[i];
          mhbody = mhbodyArr[i];
          $.index = i + 1;
          console.log(`\n开始【陌嗨短视频${$.index}】`)
          for (let x = 0; x < 6; x++) {
      $.index = x + 1
      console.log(`\n陌嗨短视频第${x+1}次广告视频！💦\n等待30秒开始执行下一次视频`)
    await mhqd();
await $.wait(30000);
  }
      }
     }
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//陌嗨数据获取
function mhck() {
   if ($request.url.indexOf("finish-task") > -1){
  const mhurl = $request.url
  if(mhurl)     $.setdata(mhurl,`mhurl${status}`)
    $.log(mhurl)
    const mhhd = JSON.stringify($request.headers)
        if(mhhd)    $.setdata(mhhd,`mhhd${status}`)
$.log(mhhd)
const mhbody = JSON.stringify($request.body)
        if(mhbody)    $.setdata(mhbody,`mhbody${status}`)
$.log(mhbody)
   $.msg($.name,"",'陌嗨短视频'+`${status}:` +'数据获取成功！')
  }
}





//陌嗨短视频
function mhqd(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://api.hemayoudao.cn/admin-dotask/app/spirit/v1/finish-task',
        headers : JSON.parse($.getdata('mhhd')),
        body : `{
  "type": 1,
  "taskId": 0
}`,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        console.log('陌嗨短视频回执:成功🌝 '+result.msg)
}else{
        console.log('陌嗨短视频回执:失败🚫 '+result.msg)}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  
}



function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

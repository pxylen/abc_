/*
软件名称:悬赏喵喵 微信小程序
更新时间：2021-03-04 @肥皂
脚本说明：悬赏喵喵自动任务和喂养
脚本为自动完成悬赏喵喵的视频任务
试玩小程序任务和自动喂养
一天可能一块钱左右，100金豆一元


小程序二维码地址 https://raw.githubusercontent.com/age174/-/main/77D29956-8318-43D2-A7BC-0EF3E09F76AA.png
微信扫描打开，保存临时码，再去扫码获取数据



本脚本以学习为主！
使用方法:
打开悬赏喵喵小程序，获得悬赏喵喵的数据，
如果不行请点击右上角三个点，重新进入小程序
请在登录之后再获取数据，先别多账号，怕有ip限制，慢慢试，提现了再多账号
数据获取必须要在首页获取的才有效

3.4更新加入自动兑换红包和提现，兑换和提现的id自己修改，可以看下方的注释，自己修改运行一次脚本就可以提现了，默认兑换和提现都是0.3元，id可以到boxjs修改

TG电报群: https://t.me/hahaha802



boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json


悬赏喵喵
圈X配置如下，其他软件自行测试，定时可以多设置几次，没任务会停止运行的
[task_local]
#悬赏喵喵
15 0,6,12,18, * * * https://raw.githubusercontent.com/age174/-/main/xsmm.js, tag=悬赏喵喵, img-url=https://raw.githubusercontent.com/erdongchanyo/icon/main/taskicon/Yunsaoma.png, enabled=true


[rewrite_local]
#悬赏喵喵
https://vip.75787.com/app/index.php url script-request-header https://raw.githubusercontent.com/age174/-/main/xsmm.js



#loon
https://vip.75787.com/app/index.php script-path=https://raw.githubusercontent.com/age174/-/main/xsmm.js, requires-header=true, timeout=10, tag=悬赏喵喵



#surge

悬赏喵喵 = type=http-request,pattern=https://vip.75787.com/app/index.php,requires-header=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/xsmm.js,script-update-interval=0




[MITM]
hostname = vip.75787.com


*/


const $ = new Env('悬赏喵喵');
let status;
status = (status = ($.getval("xsmmstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const xsmmurlArr = [], xsmmhdArr = [],xsmmcount = ''
let xsmmurl = $.getdata('xsmmurl')
let xsmmhd = $.getdata('xsmmhd')
let xsmmmc = '',xsmmid = '',xsmm1 = ''
let xsmmhb = ($.getval('xsmmhb') || '11');  //兑换红包id，id 11 代表兑换0.3元，12代表兑换2元，13代表兑换20元，14代表兑换50元，这里可以自己手动修改兑换id。默认兑换id 11 也就是0.3元，兑换完了请修改id为12

let xsmmdh = ($.getval('xsmmdh') || '14');  //提现id，14代表提现0.3元,15代表提现10元,16代表提现20元,17代表提现50元,18代表提现100元,19代表提现200元，模式提现id 14 提现0.3元，不想看广告想提现其他额度自己修改提现id运行脚本就可以


!(async () => {
  if (typeof $request !== "undefined") {
    await xsmmck()
   
  } else {xsmmurlArr.push($.getdata('xsmmurl'))
    xsmmhdArr.push($.getdata('xsmmhd'))
    let xsmmcount = ($.getval('xsmmcount') || '1');
  for (let i = 2; i <= xsmmcount; i++) {
    xsmmurlArr.push($.getdata(`xsmmurl${i}`))
    xsmmhdArr.push($.getdata(`xsmmhd${i}`))
  }
    console.log(`------------- 共${xsmmhdArr.length}个账号-------------\n`)
console.log('\n悬赏喵喵当前设置的兑换ID为: '+xsmmhb + '提现ID为: '+xsmmdh)
      for (let i = 0; i < xsmmhdArr.length; i++) {
        if (xsmmhdArr[i]) {
         
          xsmmurl = xsmmurlArr[i];
          xsmmhd = xsmmhdArr[i];
          $.index = i + 1;
          console.log(`\n开始【悬赏喵喵${$.index}】`)
          //await xsmmhhb();
            await xsmmlb();
            await xsmmhhb();
            await $.wait(2000);
            await xsmmtx();
  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//悬赏喵喵数据获取


function xsmmck() {
   if ($request.url.indexOf("action=index") > -1) {
 const xsmmurl = $request.url
  if(xsmmurl)     $.setdata(xsmmurl,`xsmmurl${status}`)
    $.log(xsmmurl)
  const xsmmhd = JSON.stringify($request.headers)
        if(xsmmhd)    $.setdata(xsmmhd,`xsmmhd${status}`)
$.log(xsmmhd)
   $.msg($.name,"",'悬赏喵喵'+`${status}` +'获取数据获取成功！')
  }
}


//悬赏喵喵视频
function xsmmsp(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://vip.75787.com/app/index.php'+xsmmurl.match(/index.php(.*?)action/)[1]+'&action=video&contr=food&token='+xsmmurl.match(/token=(\w+)/)[1]+'&version=2.0.32',
        headers : JSON.parse(xsmmhd),
        }
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.status == 1){
        console.log('\n悬赏喵喵[领取视频奖励]回执:成功🌝 \n获得视频奖励: '+result.info.video_currency+' 猫粮')
           await $.wait(11000);
           await xsmmsp();
       
        
} else {
     
console.log('\n悬赏喵喵[领取视频奖励]回执:失败🚫当前无任务\n前去喂养悬赏喵喵🐱')
      await xsmmwy();
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//悬赏喵喵任务     
function xsmmrw(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://vip.75787.com/app/index.php'+xsmmurl.match(/index.php(.*?)action/)[1]+'&action=complete&contr=task&task_id='+xsmmid+'&token='+xsmmurl.match(/token=(\w+)/)[1]+'&version=2.0.32',
        headers : JSON.parse(xsmmhd),
       
}      
      $.get(url, async (err, resp, data) => {
        try {
         const result = JSON.parse(data)
        if (result.status == 1) {
          console.log(`\n悬赏喵喵[试玩小程序任务]回执:成功🌝\n`+result.info.msg)
     await $.wait(2000);
     await xsmmlb();
        } else {
           
    //const result = JSON.parse(data)
       console.log('\n悬赏喵喵[试玩小程序任务]回执:失败🚫') 
       
       
        }} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//悬赏喵喵列表
function xsmmlb(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof $.getdata('xsmmhd') === "undefined") {
        $.msg($.name,"",'请先获取悬赏喵喵数据!😓',)
        $.done()
      }

let url = {
        url : xsmmurl,
        headers : JSON.parse(xsmmhd),
        
}
      $.get(url, async (err, resp, data) => {
        try {

if(data.match(/"s":(.*?),/)[1] === '[]'){
console.log('\n悬赏喵喵当前没有小程序任务了,前去执行视频任务')
await xsmmsp();
}
    const result = JSON.parse(data)
        if(result.status == 1){
     //console.log(data)
      xsmmid = data.match(/"id":"(\w+)",/)[1]
      xsmmmc = data.match(/"title":"(.+?)",/)[1]

        console.log('\n悬赏喵喵[获取任务列表]回执:成功🌝  \n[任务ID]: '+xsmmid+' \n[任务名称]: '+xsmmmc+'\n开始领取任务奖励')
     //$.done()
       await $.wait(2000);
        await xsmmrw();
        
} else {
console.log('悬赏喵喵[获取任务列表]回执:失败🚫 当前账号可能没有任务了')
     await xsmmsp();
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


//悬赏喵喵喂养
function xsmmwy(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://vip.75787.com/app/index.php'+xsmmurl.match(/index.php(.*?)action/)[1]+'&action=feed&contr=my&token='+xsmmurl.match(/token=(\w+)/)[1]+'&is_remind=2&version=2.0.32',
        headers : JSON.parse(xsmmhd),
        }
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.status == 1){
        console.log('\n悬赏喵喵[喂养]回执:成功🌝 \n成功添加喂养进度'+result.info.percentage+'%\n当前金豆余额:'+result.info.member.currency+' 个\n猫粮剩余:'+result.info.member.foodstuff)
       
} else {
       console.log('\n悬赏喵喵[喂养]回执:失败🚫 '+result.info)
      

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//悬赏喵喵提现
function xsmmtx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://vip.75787.com/app/index.php'+xsmmurl.match(/index.php(.*?)action/)[1]+'&action=withdrawals&contr=my&token='+xsmmurl.match(/token=(\w+)/)[1]+'&money_id='+xsmmdh+'&payment_code=&pwd=&version=2.0.32',
        headers : JSON.parse(xsmmhd),
        }
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.status == 1){
        $.msg('悬赏喵喵提现','','悬赏喵喵成功提现至微信0.3元')
       
} else {
       console.log('\n悬赏喵喵[提现]回执:失败🚫 '+result.info)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}



//悬赏喵喵兑换
function xsmmhhb(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://vip.75787.com/app/index.php?i=61&t=0&v=2.0.32&from=wxapp&c=entry&a=wxapp&do=exchange&m=bh_cat&sign=79926608a360d256e0ceee140f6ada8f&token='+xsmmurl.match(/token=(\w+)/)[1]+'&id='+xsmmhb+'&version=2.0.32',
        headers : JSON.parse(xsmmhd),
        }
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.status == 1){
       console.log('悬赏喵喵成功兑换红包,前往提现')
         
       
} else {
       $.msg('悬赏喵喵兑换红包','','悬赏喵喵兑换红包回执:失败🚫 '+result.info+'如果当前兑换额度没有机会了请修改兑换id')
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

/*
软件名称:微客众智 微信扫描二维码打开
更新时间：2021-03-16 @肥皂
脚本说明：微客众智自动阅读
脚本为自动完成微客众智的阅读任务
每日收益0.6元左右，可多号撸。
类似番茄看看和云扫码,貌似没有任务冲突(划重点)
哈哈哈啊哈哈哈哈

复制链接到微信打开 http://i.hylks.xyz/i/632723?sharefrom=hall&_target=hall

或者扫码打开 https://raw.githubusercontent.com/age174/-/main/507A2E9A-BE08-44D8-8BDC-B4F624763406.jpeg
微信扫描打开



本脚本以学习为主！
使用方法:扫码进去，点击任务大厅的阅读文章
点击开始阅读，等待六秒返回获取数据

TG电报群: https://t.me/hahaha8028

3.16更新，加入自动提现，可提现余额大于等于两元自动提现

boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json


微客众智
圈X配置如下，其他软件自行测试，定时可以多设置几次，没任务会停止运行的
[task_local]
#微客众智
5,35 9-22 * * * https://raw.githubusercontent.com/age174/-/main/wkzz.js, tag=微客众智, img-url=https://ae01.alicdn.com/kf/Uff0a0bb9e66a479591c9b02c176fd276A.jpg, enabled=true


[rewrite_local]
#微客众智
^http://wx.tiantianaiyuedu.site/ url script-request-body https://raw.githubusercontent.com/age174/-/main/wkzz.js



#loon
http://wx.tiantianaiyuedu.site/ script-path=https://raw.githubusercontent.com/age174/-/main/wkzz.js, requires-body=true, timeout=10, tag=微客众智



#surge

微客众智 = type=http-request,pattern=http://wx.tiantianaiyuedu.site/,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/wkzz.js,script-update-interval=0




[MITM]
hostname = wx.tiantianaiyuedu.site


*/


const $ = new Env('微客众智自动阅读');
const wkzz = $.getjson('wkzz', [])
let times = Math.round(Date.now() / 1000)
let wkzzurl = '', wkzzhd = '',id = '',uid='',tid='',name=''
!(async () => {
  if (typeof $request !== "undefined") {
    await wkzzck()
  } else {
    let acList = wkzz.filter(o => o.id && o.hd).map((o, i) => ({no: i + 1, id: o.id, url: o.url, hd: o.hd}))
    $.log(`------------- 共${acList.length}个账号-------------\n`)
    for (let i = 0; i < acList.length; i++) {
      wkzzurl = acList[i].url
      wkzzhd = acList[i].hd
      $.log(`\n开始【微客众智${i + 1}】`)
      let userInfo = await getUserInfo(wkzzhd)
      id = userInfo.wxuser_id
      if (id) {
        $.log('\n微客众智获取用户信息成功\n当前用户名:' + userInfo.nickname + ' 用户ID:' + id + '\n开始查询任务信息')
        await wkzzlb();
      } else if (userInfo) {
        $.log(userInfo)
      }
    }
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//微客众智数据获取


async function wkzzck() {
  if ($request.url.indexOf("wx.tiantianaiyuedu.site/read/article") > -1) {
    const hd = JSON.stringify($request.headers);
    let userInfo = await getUserInfo(hd)
    if(userInfo.wxuser_id){
      let status = 1
      let no = wkzz.length
      for (let i = 0, len = no; i < len; i++) {
        let ac = wkzz[i] || {}
        if (ac.id) {
          if (ac.id == userInfo.wxuser_id) {
            no = i
            status = 0
            break
          }
        } else if (no == len) {
          no = i
        }
      }
      wkzz[no] = {id: userInfo.wxuser_id, url: $request.url, hd: hd}
      $.log(JSON.stringify(wkzz[no], null, 2))
      $.setdata(JSON.stringify(wkzz, null, 2), 'wkzz')
      $.msg($.name, "", `微客众智[账号${no+1}] ${status?'新增':'更新'}数据成功！`)
    }
  }
}

// 获取用户信息
function getUserInfo(hd, timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: "http://wx.tiantianaiyuedu.site/me",
      headers: JSON.parse(hd)
    }
    $.get(url, async (err, resp, data) => {
      if (resp.statusCode == 301) {
        $.log('\n微客众智访问失败，可能是Cookie过期或网络问题')
        $.msg('微客众智Cookie过期', '', '请重新抓包获取数据，建议保持微客众智的重写在开启状态')
      }
      let userInfo = ''
      try {
        if (err) {
          $.logErr(`❌ API请求失败，请检查网络后重试\n url: ${url.url} \n data: ${JSON.stringify(err, null, 2)}`)
        } else {
          if (resp.statusCode != 301) {
            let result = $.toObj(data)
            if (result.errors == false) {
              userInfo = result.data
            } else {
              userInfo = '微客众智获取用户信息失败 已停止当前账号运行!'
            }
          }
        }
      } catch (e) {
        //$.logErr(e, resp);
      } finally {
        resolve(userInfo)
      }
    })
  })
}


//微客众智任务列表
function wkzzlb(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "http://wx.tiantianaiyuedu.site/read/tasks?times=0.350527818069823",
        headers : JSON.parse(wkzzhd),
       
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.data.code== 1){
uid=data.match(/"id":(.*?),/)[1]
tid =data.match(/"a_id":(.*?),/)[1]
name =data.match(/"content_url":"(.*?)",/)[1]

        console.log('\n微客众智获取任务ID成功\n当前任务ID: '+uid+' '+tid+'\n开始循环阅读:')
        await $.wait(1000);
        await wkzzyd();
} else {
       console.log('\n微客众智获取任务ID失败  '+result.data.message)
await wkzzwz();
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//微客众智
function wkzzwz(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "http://wx.tiantianaiyuedu.site/account/income_info?times=0.7346913820791053",
        headers : JSON.parse(wkzzhd),
       
}
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.errors == false){

        console.log('\n微客众智获取用户信息成功\n今日阅读次数: '+result.data.read_task_count+' '+'\n今日阅读奖励'+result.data.read_money)
        
} else {
       console.log('\n微客众智获取用户信息失败 '+result.msg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//微客众智提交
function wkzzyd(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http://wx.tiantianaiyuedu.site/read/article",
        headers : JSON.parse(wkzzhd),
        body : `{"data":{"wxuser_id":${id},"receive_article_id":${tid} ,"article_created_at":${times},"task_id": ${uid}}}`,
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.errors == false){
        console.log('\n微客众智任务提交成功:'+result.message)
await wkzzxx();
       
} else {
       console.log('\n微客众智任务提交失败 '+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//微客众智信息
function wkzzxx(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "http://wx.tiantianaiyuedu.site/account/income_info?times=0.7346913820791053",
        headers : JSON.parse(wkzzhd),
       
}
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.errors == false){

        console.log('\n微客众智获取用户信息成功\n今日阅读次数: '+result.data.read_task_count+' '+'\n今日获得奖励'+result.data.read_money+'开始获取任务')
        await $.wait(8000);
        await wkzzlb();
} else {
       console.log('\n微客众智获取用户信息失败 '+result.msg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//微客众智可提现金额
function wkzzxj(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "http://wx.tiantianaiyuedu.site/account/account_info?times=0.005304894211631606",
        headers : JSON.parse(wkzzhd),
       
}
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.errors == false){

        console.log('\n微客众智当前可提现额度为'+result.data.balance)
if(result.data.balance >= 2){
console.log('\n微客众智当前金额可提现，前去执行提现任务')
await wkzztx();
}else{
console.log('\n微客众智当前金额不满足提现，跳过提现')
}
        
        
} else {
       console.log('\n微客众智获取用户信息失败 '+result.msg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//提现
function wkzztx(timeout = 0) {
  return new Promise((resolve) => {
const ck = JSON.parse(wkzzhd)
const head = {"X-Requested-With":"XMLHttpRequest","Connection":"keep-alive","Accept-Encoding":"gzip, deflate","Content-Type":"application/json;charset=utf-8","Origin":"http://tx.ac48.top","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000235) NetType/4G Language/zh_CN","X-CSRF-TOKEN":wkzzhd.match(/"X-CSRF-TOKEN":"(.*?)",/)[1],"Cookie":ck.Cookie,"Host":"tx.ac48.top","Accept-Language":"zh-cn","Accept":"application/json, text/plain, */*","Content-Length":"106"}
;
let url = {
        url : "http://tx.ac48.top/withdraw/withdraw",
        headers : head,
        body : `{"money":2,"account_type":2}`,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.errors == false){

        $.msg('微客众智','','\n微客众智提现2元已成功')
        
} else {
       console.log('\n微客众智提现失败: '+result.message)
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

/*
签到兑好礼活动Token
https:\/\/mkt\.21cn\.com\/mkt\/api\/user\/queryActivityInfo\.do\?activityId=\d+ url script-request-header https://raw.githubusercontent.com/Sunert/Scripts/master/Task/telecomSky.js
*/
const $ = new Env("中国电信 世界触手可及🤝");
const Y = $.getdata('Mon').slice(0,4)||$.time('yyyy');
const M = $.getdata('Mon').slice(-2)||$.time('MM') ; //查询前几个月，可以')'号后减几
const notify = $.isNode() ? require('./sendNotify') : '';
const AUTHTOKEN = $.getdata("china_telecom_authToken_10000");
const COOKIE = $.getdata("china_telecom_cookie");
const token = $.getdata("telecom_sign");
const Actid = $.getdata("telecom_act");

let  special = "";
const requests = {
    detail: {
        url: "https://e.189.cn/store/user/package_detail.do",
        headers: {
            "authToken": AUTHTOKEN,
            "type": "alipayMiniApp"
        },
        body: "t=tysuit"
    },
    balance: {
        url: "https://e.189.cn/store/user/balance_new.do",
        headers: {
            "authToken": AUTHTOKEN,
            "type": "alipayMiniApp",
            "User-Agent": "TYUserCenter/2.8 (iPhone; iOS 14.0; Scale/3.00)"
        },
        body: "t=tysuit",
        method: "POST"
    },
    info: {
        url: "https://e.189.cn/store/user/getExtInfo.do",
        headers: {
            "authToken": AUTHTOKEN,
            "type": "alipayMiniApp"
        },
        method: "GET"
    },
      bill: {
        url: `https://e.189.cn/store/user/bill.do?year=${Y}&month=${M}&t=tysuit`,
        headers: {
            "Cookie": COOKIE
        },
        method: "GET"
    }
}

if (isGetCookie = typeof $request !== 'undefined') {
    GetCookie();
    $.done()
} else {
 !(async() => {
   await userinfo();
   await balaninfo();
   await packinfo();
   await billinfo();
   if (Actid) {
       for (x of JSON.parse(Actid)) {
          if (x == "10925") {
              await mktSign()
          } else if (x == "10924") {
              await mktDraw()
          }
       }
    };
   $.msg($.name,$.sub,$.desc);
   $.isNode()?await notify.sendNotify($.name,$.sub+"\n"+$.desc):""
 })()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())
}

function packinfo() {
  return new Promise((resolve, reject) => {
    $.post(requests.detail, (err, resp, data) => {
      try{
         let obj = JSON.parse(data);
//$.log(JSON.stringify(obj,null,2))
         if(obj.result==0){
          voiceAmount = obj.voiceAmount,
          voiceBalance = obj.voiceBalance,
          lultotal = obj.total,
          lulbalance= obj.balance,
          usedCommon = obj.usedCommon;
          mainProduct = obj.items[0].productOFFName;
          $.desc+="【使用详情】:\n  "
          $.log("您已开通的套餐:\n")
          for(list of obj.items){
            productOFFName = list.productOFFName,
            offerType = list.offerType;
       if (JSON.stringify(list).indexOf("unitTypeId")>-1){
          for(products of list.items ){
            unitType = products.unitTypeId
            ratableAmount = formatFlow(products.ratableAmount),
            usageAmount = formatFlow(products.usageAmount),
            balanceAmount = formatFlow(products.balanceAmount),
            ratablename = products.ratableResourcename;
           $.log("套餐名称:"+productOFFName+"\n"+ratablename+": 总计:"+ratableAmount+" 使用:"+usageAmount+ " 剩余:"+balanceAmount+"\n")
           $.desc += ratablename+": 总计:"+ratableAmount+" 使用:"+usageAmount+ " 剩余:"+balanceAmount+"\n  "
           }
           } else {
           $.log("套餐名称:"+productOFFName+"\n")
          }
          }
         }
      } catch(e){
       $.logErr("获取套餐信息失败"+e)
      } finally{
       resolve()
      }
    })
  })
}

function billinfo() {
  return new Promise((resolve, reject) => {
    $.post(requests.bill, (err, resp, data) => {
      try{
        let obj = JSON.parse(data);
        if(obj.serviceResultCode =="0"){
          $.log("您的"+M+"月账单明细:")
          totalcharge = obj.items[0].sumCharge/100;
         for(bills of obj.items[0].items){
           chargeName = bills.chargetypeName,
           charge = bills.charge;
           $.log(chargeName+ ": "+ charge/100+"元")
        }
       }
      } catch(e){
        $.logErr("获取账单信息失败"+e)
      } finally {
       resolve()
      }
    })
  })
}

function userinfo() {
  return new Promise((resolve, reject) => {
    $.get(requests.info, (err, resp, data) => {
      try{
       let obj = JSON.parse(data);
        if(obj.result==10000){
         mobileShort = obj.mobileShort,
         city = obj.city;
         $.sub = "手机号:"+ mobileShort+" 归属地:"+city
         $.log("******* 手机号: "+obj.mobile+" 归属地: "+city+" *******\n")
       }
      } catch(e){
          $.logErr("获取手机号失败"+e)
      } finally {
       resolve()
      }
    })
  })
}

function balaninfo() {
  return new Promise((resolve, reject) => {
    $.post(requests.balance, (err, resp, data) => {
      try{
          let obj = JSON.parse(data);
        if(obj.result==0){
          totalBalance = obj.totalBalanceAvailable/100+"元 ";
         $.desc="【账户余额】:\n  "
         for(totals of obj.items){
           balanceAvailable = totals.balanceAvailable/100+"元 "
          if( totals.balanceTypeFlag=="0"){
           general = balanceAvailable
          }  else if( totals.balanceTypeFlag=="4"){
           special = balanceAvailable
          }
         }
         $.log("您的余额总计"+totalBalance+"通用余额为"+general+(special?"专用余额为"+special:"")+"\n")
         $.desc += "总计:"+totalBalance+"通用:"+general+(special?"专用:"+special:"")+"\n"
       }
      } catch(e){
        $.logErr("查询余额失败"+e)
      } finally {
       resolve()
      }
    })
  })
}

function mktSign() {
  return new Promise((resolve, reject) => {
     let url= {
        url: "https://mkt.21cn.com/mkt/api/user/sign/sign.do",
        headers: {
          Host: 'mkt.21cn.com',
          token: token
      }, 
       body: 'activityId='+x+'&uxChannel="10012"'
    }
    $.post(url, (err, resp, data) => {
      try{ 
        let obj = JSON.parse(data);
        if(obj.resCode=="00000"){
        signres = (obj.data.status==1)?"签到成功，已签到"+obj.data.signNum+"天":"今日已签到，总计签到"+obj.data.signNum+"天";
         $.log("\n签到兑豪礼: "+signres)
        } else if(obj.resCode=="51301"){
         $.log("登陆已失效"+obj.resDesc)
        } else {
         $.log("积分兑好礼"+obj.resDesc)
       }
      } catch(e){
        $.logErr("获取积分兑好礼活动失败"+e)
      } finally {
       resolve()
      }
    })
  })
}

function mktDraw() {
  return new Promise((resolve, reject) => {
      let url ={
        url: "https://mkt.21cn.com/mkt/api/user/draw.do?uxChannel=10012&activityId="+x,
        headers: {
          Host: 'mkt.21cn.com',
          token: token
      }
    };
    $.get(url, (err, resp, data) => {
      try{ 
        let obj = JSON.parse(data);
        if(obj.resCode=="00000"){
         rewards = obj.data.awardName;
         $.log("恭喜您获得"+rewards+"，话费红包有效期为7天");
         $.desc += "【每日转盘】获得"+rewards
        } else if(obj.resCode=="51301"){
        $.log("登陆已失效"+obj.resDesc)
        } else {
         $.log("每日转盘"+obj.resDesc)
        }
      } catch(e){
         $.logErr("获取活动失败"+e)
      } finally {
       resolve()
      }
    })
  })
}

function GetCookie() {
    if ($request && $request.url.match(/\/e\.189\.cn\/store/)) {
        var cookieVal = $request.headers['authToken']
        var COOKIE = $request.headers['Cookie']
        $.setdata(COOKIE, "china_telecom_cookie")
        if (cookieVal) {
            if ($.setdata(cookieVal, "china_telecom_authToken_10000")) {
             $.msg($.name, '获取authToken: 成功', '')
            }
        }
    } else if ($request.url.indexOf("mkt.21cn.com") > -1) {
      let aid = "", actarr = [];
         signtoken = $request.headers['token'];
         actid = $request.url.match(/activityId=(\d+)/)[1];
         $.setdata(signtoken,"telecom_sign")
       if(Actid){
         aid = JSON.parse(Actid).toString()
         actarr.push(aid)
         };
        if(!Actid ||Actid.indexOf(actid)==-1){
         actarr.push(actid)
$.setdata(JSON.stringify(actarr),"telecom_act");
      }
       $.msg($.name, "获取活动token成功")
    }
}
function formatFlow(number) {
  if(unitType=="1"){
    return number+"分钟"
 } else if(unitType=="2"){
    return number+"条"
 } else if (number/1024 < 1024) {
    return (number/1024).toFixed(1) + "MB"
 } else if(number/1024 > 1024){
    return (number/1024/1024).toFixed(1) + "GB"
   }
}
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:i,...r}=t;this.got[s](i,r).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}


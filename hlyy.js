/*
软件名称:葫芦音乐 商店搜索下载
更新时间：2021-04-07 @肥皂
脚本说明：葫芦音乐自动任务
脚本为自动完成葫芦音乐的日常任务
每日固定收益1元左右，1元提现，可多号撸。
当天可提0.6元秒到
自动提现默认提现一块钱，还没测试过，不知道行不行
本脚本以学习为主！
使用方法:打开葫芦音乐，完成一个任意任务获得数据

TG电报群: https://t.me/hahaha8028

boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json

4.2更新,破解学知识任务,创意视频任务和分享任务的收益上限,学知识可以领取两次1500金币,创意视频可以领取两次2000金币,分享任务可领取两次68金币,自动提现好像还有点问题,到时候再看看

4.7更新,修复学知识任务,增加听歌翻倍任务。每日金币又多了1200,嘿嘿,加入自定义提现功能,请更新boxjs填入提现金额
填入1为提现1元,2为2元,3为5元,4为50元,5为100元,默认提现一元

葫芦音乐
圈X配置如下，其他软件自行测试，定时可以多设置几次，没任务会停止运行的
[task_local]
#葫芦音乐
0,30 8-23 * * * https://raw.githubusercontent.com/age174/-/main/hlyy.js, tag=葫芦音乐, img-url=https://ae01.alicdn.com/kf/U49d941738c0c41569f7db55825943375f.jpg, enabled=true

[rewrite_local]
#葫芦音乐
https://play.gxhuancai.com/hlplay/task/doTasks url script-request-header https://raw.githubusercontent.com/age174/-/main/hlyy.js

#loon
https://play.gxhuancai.com/hlplay/task/doTasks script-path=https://raw.githubusercontent.com/age174/-/main/hlyy.js, requires-header=true, timeout=10, tag=葫芦音乐

#surge
葫芦音乐 = type=http-request,pattern=https://play.gxhuancai.com/hlplay/task/doTasks,requires-header=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/hlyy.js,script-update-interval=0

[MITM]
hostname = play.gxhuancai.com


*/

const $ = new Env('葫芦音乐');
let status;
status = (status = ($.getval("hlyystatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const hlyyurlArr = [], hlyyhdArr = [],hlyybodyArr = [],hlyycount = ''
let times = Math.round(Date.now())
let hlyyurl = $.getdata('hlyyurl')
let hlyyhd = $.getdata('hlyyhd')
let hlyybody = $.getdata('hlyybody')
let ut = '',id = '',qd='',qdfb='',gg='',sp='',fx='',zs='',tg='',wz='',tgfb=''
let txsz = ['','BsjB-5WE54sKKCP0kIMORs1WbWzmM5gRg','0r7ipKknU4gqurOo71KH2kPFzkwlohZws','0r7ipKknU4g2s8ACTG4DbU1QFpcUgueU4','pQKf_KdmjH4pS_070l0fhYH0Hs6ltsads','pQKf_KdmjH4hSrW79J7WyU1WbWzmM5gRg'];
let hltxje = ($.getval('hltxje') || '1');
let txje = txsz[hltxje]

!(async () => {
  if (typeof $request !== "undefined") {
    await hlyyck()
   
  } else {hlyyurlArr.push($.getdata('hlyyurl'))
    hlyyhdArr.push($.getdata('hlyyhd'))
    hlyybodyArr.push($.getdata('hlyybody'))
    let hlyycount = ($.getval('hlyycount') || '1');
  for (let i = 2; i <= hlyycount; i++) {
    hlyyurlArr.push($.getdata(`hlyyurl${i}`))
    hlyyhdArr.push($.getdata(`hlyyhd${i}`))
    hlyybodyArr.push($.getdata(`hlyybody${i}`))
  }
    console.log(`------------- 共${hlyyhdArr.length}个账号-------------\n`)
      for (let i = 0; i < hlyyhdArr.length; i++) {
        if (hlyyhdArr[i]) {
          hlyybody = hlyybodyArr[i];
          hlyyurl = hlyyurlArr[i];
          hlyyhd = hlyyhdArr[i];
          $.index = i + 1;
          console.log(`\n 开始【葫芦音乐${$.index}】`)
          await hlyylb();
          await $.wait(1000);
          await hlyyqd()
          await $.wait(3000);
          await hlyyqdfb()
          await $.wait(3000);
          await hlyygg()
          await $.wait(3000);
          await hlyysp()
          await $.wait(3000);
          await hlyyfx()
          await $.wait(3000);
          await hlyyfxpj()
          await $.wait(3000);
          await hlyytg()
          await $.wait(3000);
          await hlyytgfb()
          await $.wait(3000);
          await hlyyzslb()
          await $.wait(3000);
          await hlyyzs()
          await $.wait(3000);
          await hlyyxx()
          await hlyyme()
          await hlyytx()
  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//葫芦音乐数据获取


function hlyyck() {
   if ($request.url.indexOf("task/doTasks") > -1) {
 const hlyyurl = $request.url
  if(hlyyurl)     $.setdata(hlyyurl,`hlyyurl${status}`)
    $.log(hlyyurl)
  const hlyyhd = JSON.stringify($request.headers)
        if(hlyyhd)    $.setdata(hlyyhd,`hlyyhd${status}`)
$.log(hlyyhd)
    const hlyybody = $request.body
        if(hlyybody)    $.setdata(hlyybody,`hlyybody${status}`)
$.log(hlyybody)
   $.msg($.name,"",'葫芦音乐'+`${status}` +'数据获取成功！')
  }
}



//葫芦音乐列表
function hlyylb(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof $.getdata('hlyyhd') === "undefined") {
        $.msg($.name,"",'请先获取葫芦音乐数据!😓',)
        $.done()
      }

ut = hlyyurl.match(/ut=(.*)/)[1]
id = hlyyurl.match(/deviceId=(.+?)&/)[1]
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/getTaskList?av=1.1.3&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.get(url, async (err, resp, data) => {
        try {
       
    const result = JSON.parse(data)
        if(result.errCode == 00){
        console.log(`\n〔葫芦音乐〕获取任务列表成功🚬`)    
qd = result.data.pagelist[0].taskCode 
qdfb = result.data.pagelist[0].secTaskVoList[0].taskCode
gg = result.data.pagelist[1].taskCode
sp = result.data.pagelist[4].taskCode
fx = result.data.pagelist[5].taskCode
zs = result.data.pagelist[3].taskCode
tg = result.data.pagelist[2].taskCode
tgfb = result.data.pagelist[2].secTaskVoList[0].taskCode      

} else {
$.log(data)
console.log('葫芦音乐获取用户信息失败 已停止当前账号运行!')

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


//葫芦音乐签到
function hlyyqd(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${qd}&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)
        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//葫芦音乐签到翻倍
function hlyyqdfb(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${qdfb}&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//葫芦音乐创意视频
function hlyygg(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${gg}&tl=10000&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)
if (result.data.pagelist[0].taskGoldCoin == 0){
$.log('\n〔葫芦音乐〕检测到创意视频任务已完成,尝试破解收益上限')
await $.wait(3000);
await hlyyggpj()
}        
        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//葫芦音乐创意视频破解
function hlyyggpj(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${gg}&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//葫芦音乐短视频
function hlyysp(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${sp}&tl=10000&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//葫芦音乐分享
function hlyyfx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${fx}&tl=10000&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//葫芦音乐分享破解
function hlyyfxpj(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${fx}&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐破解〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//葫芦音乐听歌
function hlyytg(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${tg}&tl=10000&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//葫芦音乐听歌翻倍
function hlyytgfb(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${tgfb}&tl=10000&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//葫芦音乐学知识列表
function hlyyzslb(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/rumor/getRumorList?page=1&size=10&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐学知识〕获取列表成功🚬\n 文章code:${result.data.pagelist[0].code}\n 文章标题:${result.data.pagelist[0].rumorTitle}`)
wz = result.data.pagelist[0].code
        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//葫芦音乐学知识列表破解
function hlyyzslbpj(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/rumor/getRumorList?page=1&size=10&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐学知识〕获取列表成功🚬\n 文章code:${result.data.pagelist[0].code}\n 文章标题:${result.data.pagelist[0].rumorTitle}`)
wz = result.data.pagelist[0].code
        await $.wait(3000);
        await hlyyzspj()
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//葫芦音乐知识
function hlyyzs(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&bc=${wz}&deviceId=${id}&os=ios&tc=${zs}&tl=10000&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){
        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)
   if (result.data.pagelist[0].taskGoldCoin == 0){
$.log('\n〔葫芦音乐〕检测到学知识任务已完成,尝试破解收益上限')
await $.wait(3000);
await hlyyzslbpj()
}        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//葫芦音乐知识破解
function hlyyzspj(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&bc=${wz}&deviceId=${id}&os=ios&tc=${zs}&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐破解〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//葫芦音乐信息
function hlyyxx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/getUserCoins?av=1.1.3&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音用户信息〕\n当前金币余额:${result.data.pagelist[0]} 约等于:${result.data.pagelist[2]}元`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//葫芦音乐tx名额
function hlyyme(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/withdrawal/checkWithDrawal?av=1.1.3&ut=${ut}&wdiCode=${txje}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.data == false){

        console.log(`\n〔葫芦音乐提现名额领取成功〕`)

        
} else {
       console.log('\n葫芦音乐提现名额领取失败')

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//葫芦音乐tx
function hlyytx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/withdrawal/confirmWithDrawalWithWX?av=1.1.3&ut=${ut}&wdiCode=${txje}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐提现成功〕`)

        
} else {
       console.log('\n葫芦音乐提现失败'+result.errMsg)

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

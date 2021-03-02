/*
软件名称:蛋咖 微信扫描二维码下载
更新时间：2021-02-28 @肥皂
脚本说明：蛋咖自动任务
脚本为自动为自动完成蛋咖福利任务
包括，签到，时段，新闻，小说，自动答题，看看赚
每日收益六七毛左右，一元提现，提现有点恶心，需要试玩才能小额提现，不过试玩也有钱赚，或者直接等到30或者50元提现，没有限制

任务打开二维码地址 https://raw.githubusercontent.com/age174/-/main/B5F1F456-C5A2-4F84-993F-5348AD433CAB.jpeg

本脚本以学习为主！
首次运行脚本，会提示获取数据
使用方法:
1，打开蛋咖我的获取账户信息数据
2,进入福利，看看赚，完成一次任务获取看看赚数据
3,点击蛋咖答题欢乐送，随便答一题获取答题数据
3,点击新闻，任意观看一篇新闻获取新闻数据
4，返回到福利界面，点击任意一本小说，观看一章，点击下一章，获取小说数据
5,返回福利界面，点击上方横幅进入签到页面获取签到奖励


TG电报群: https://t.me/hahaha8028

我的邀请码 : 30368779  感谢大佬们支持


多账号boxjs订阅地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json


蛋咖
圈X配置如下，其他软件自行测试
[task_local]
#蛋咖
15 12,14,16,20 * * * https://raw.githubusercontent.com/age174/-/main/dka.js, tag=蛋咖, img-url=https://s3.ax1x.com/2021/02/28/6C3Gpn.jpg, enabled=true


[rewrite_local]
#蛋咖
http://.*.pceggs.com/IFS/ url script-request-body https://raw.githubusercontent.com/age174/-/main/dka.js
#蛋咖小说
http://www.ipadview.com/rpads/score/award? url script-request-body https://raw.githubusercontent.com/age174/-/main/dka.js

#loon
http://.*.pceggs.com/IFS/ script-path=https://raw.githubusercontent.com/age174/-/main/dka.js, requires-body=true, timeout=10, tag=蛋咖
#蛋咖小说
http://www.ipadview.com/rpads/score/award? script-path=https://raw.githubusercontent.com/age174/-/main/dka.js, requires-body=true, timeout=10, tag=蛋咖小说

#surge

蛋咖 = type=http-request,pattern=http://.*.pceggs.com/IFS/,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/dka.js,script-update-interval=0

#蛋咖小说
蛋咖小说 = type=http-request,pattern=http://www.ipadview.com/rpads/score/award?,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174


[MITM]
hostname = *.pceggs.com,www.ipadview.com


*/


const $ = new Env('蛋咖');
let status;
status = (status = ($.getval("dkastatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const dkaxsurlArr = [], dkaxshdArr = [], dkakkzhdArr = [], dkakkzbodyArr = [], dkadthdArr = [], dkadtbodyArr = [], dkaqdbodyArr = [], dkasdbodyArr = [], dkaqdkbodyArr = [], dkaxwbodyArr = [], dkabodyArr = [],dkahdArr = [],dkacount = ''
let dkahd = $.getdata('dkahd')//蛋咖信息
let dkabody = $.getdata('dkabody')
let dkaxsurl = $.getdata('dkaxsurl')//蛋咖小说
let dkaxshd = $.getdata('dkaxshd')
let dkakkzhd = $.getdata('dkakkzhd')//蛋咖看看赚
let dkakkzbody = $.getdata('dkakkzbody')
let dkadthd = $.getdata('dkadthd')//蛋咖答题
let dkadtbody = $.getdata('dkadtbody')
let dkaqdbody = $.getdata('dkaqdbody')//蛋咖签到
//let dkasdbody = $.getdata('dkasdbody')//蛋咖时段
//let dkaqdkbody = $.getdata('dkaqdkbody')//签到看看赚
let dkaxwbody = $.getdata('dkaxwbody')//蛋咖新闻
let tm = ''
!(async () => {
  if (typeof $request !== "undefined") {
    await dkack();
   
  } else {
    dkaxsurlArr.push($.getdata('dkaxsurl'))
    dkaxshdArr.push($.getdata('dkaxshd'))
    dkakkzhdArr.push($.getdata('dkakkzhd'))
    dkakkzbodyArr.push($.getdata('dkakkzbody'))
    dkadthdArr.push($.getdata('dkadthd'))
    dkadtbodyArr.push($.getdata('dkadtbody'))
    dkaqdbodyArr.push($.getdata('dkaqdbody'))
    //dkasdbodyArr.push($.getdata('dkasdbody'))
    //dkaqdkbodyArr.push($.getdata('dkaqdkbody'))
    dkaxwbodyArr.push($.getdata('dkaxwbody'))
    dkabodyArr.push($.getdata('dkabody'))
    dkahdArr.push($.getdata('dkahd'))
    let dkacount = ($.getval('dkacount') || '1');
  for (let i = 2; i <= dkacount; i++) {
    dkaxsurlArr.push($.getdata(`dkaxsurl${i}`))
    dkaxshdArr.push($.getdata(`dkaxshd${i}`))
    dkakkzhdArr.push($.getdata(`dkakkzhd${i}`))
    dkakkzbodyArr.push($.getdata(`dkakkzbody${i}`))
    dkadthdArr.push($.getdata(`dkadthd${i}`))
    dkadtbodyArr.push($.getdata(`dkadtbody${i}`))
    dkaqdbodyArr.push($.getdata(`dkaqdbody${i}`))
    //dkasdbodyArr.push($.getdata(`dkasdbody${i}`))
    //dkaqdkbodyArr.push($.getdata(`dkaqdkbody${i}`))
    dkaxwbodyArr.push($.getdata(`dkaxwbody${i}`))
    dkabodyArr.push($.getdata(`dkabody${i}`))
    dkahdArr.push($.getdata(`dkahd${i}`))
  }
    console.log(`------------- 共${dkahdArr.length}个账号-------------\n`)
      for (let i = 0; i < dkahdArr.length; i++) {
        if (dkahdArr[i]) {
         
          dkaxsurl = dkaxsurlArr[i];
          dkaxshd = dkaxshdArr[i];
          dkakkzhd = dkakkzhdArr[i];
          dkakkzbody = dkakkzbodyArr[i];
          dkadthd = dkadthdArr[i];
          dkadtbody = dkadtbodyArr[i];
          dkaqdbody = dkaqdbodyArr[i];
          //dkasdbody = dkasdbodyArr[i];
          //dkaqdkbody = dkaqdkbodyArr[i];
          dkaxwbody = dkaxwbodyArr[i];
          dkabody = dkabodyArr[i];
          dkahdbody = dkahdArr[i];
          $.index = i + 1;
          console.log(`\n开始【蛋咖${$.index}】`)
          await dkaqd();
          await $.wait(1000);
          await dkatm();
          await $.wait(1000);
          await dkaxw();
          //await $.wait(1000);
//await dkaxs();//蛋咖小说，已禁用，需要开启的自己删了注释
          await $.wait(1000);
          await dkakkz();
          await dkaxx();
          

  }
 
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//蛋咖数据获取
function dkack() {
   if ($request.url.indexOf("IFS/BaseData/GetUserInfo.ashx") > -1 && $request.body.indexOf("keycode") > -1) {
 const dkabody = $request.body
  if(dkabody)     $.setdata(dkabody,`dkabody${status}`)
    $.log(dkabody)
  const dkahd = JSON.stringify($request.headers)
        if(dkahd)    $.setdata(dkahd,`dkahd${status}`)
$.log(dkahd)
   $.msg($.name,"",'蛋咖'+`${status}` +'用户信息数据获取成功！')
  }
 if ($request.url.indexOf("Question/Que_Index") > -1) {
 const dkadtbody = $request.body
  if(dkadtbody)     $.setdata(dkadtbody,`dkadtbody${status}`)
    $.log(dkadtbody)
  const dkadthd = JSON.stringify($request.headers)
        if(dkadthd)    $.setdata(dkadthd,`dkadthd${status}`)
$.log(dkadthd)
   $.msg($.name,"",'蛋咖'+`${status}` +'答题数据获取成功！')
  }
 if ($request.url.indexOf("FastAd_SetImgAdAward") > -1) {
 const dkakkzbody = $request.body
  if(dkakkzbody)     $.setdata(dkakkzbody,`dkakkzbody${status}`)
    $.log(dkakkzbody)
  const dkakkzhd = JSON.stringify($request.headers)
        if(dkakkzhd)    $.setdata(dkakkzhd,`dkakkzhd${status}`)
$.log(dkakkzhd)
   $.msg($.name,"",'蛋咖'+`${status}` +'看看赚数据获取成功！')
  }
 if ($request.url.indexOf("SignIn_SignIn") > -1) {
 const dkaqdbody = $request.body
  if(dkaqdbody)     $.setdata(dkaqdbody,`dkaqdbody${status}`)
    $.log(dkaqdbody)
   $.msg($.name,"",'蛋咖'+`${status}` +'签到数据获取成功！')
  }
 if ($request.url.indexOf("IFS/SignIn/SignIn_GetTaskAward") > -1&&$request.body.indexOf("taskid=3") > -1) {
 const dkasdbody = $request.body
  if(dkasdbody)     $.setdata(dkasdbody,`dkasdbody${status}`)
    $.log(dkasdbody)
   $.msg($.name,"",'蛋咖'+`${status}` +'签到时段数据获取成功！')
  }
 if ($request.url.indexOf("IFS/SignIn/SignIn_GetTaskAward") > -1&&$request.body.indexOf("taskid=1004") > -1) {
 const dkaqdkbody = $request.body
  if(dkaqdkbody)     $.setdata(dkaqdkbody,`dkaqdkbody${status}`)
    $.log(dkaqdkbody)
   $.msg($.name,"",'蛋咖'+`${status}` +'签到看看赚数据获取成功！')
  }
 if ($request.url.indexOf("MoneyAward") > -1) {
 const dkaxwbody = $request.body
  if(dkaxwbody)     $.setdata(dkaxwbody,`dkaxwbody${status}`)
    $.log(dkaxwbody)
   $.msg($.name,"",'蛋咖'+`${status}` +'新闻数据数据获取成功！')
  }
 if ($request.url.indexOf("rpads/score/award") > -1) {
 const dkaxsurl = $request.url
  if(dkaxsurl)     $.setdata(dkaxsurl,`dkaxsurl${status}`)
    $.log(dkaxsurl)
  const dkaxshd = JSON.stringify($request.headers)
        if(dkaxshd)    $.setdata(dkaxshd,`dkaxshd${status}`)
$.log(dkaxshd)
   $.msg($.name,"",'蛋咖'+`${status}` +'小说数据获取成功！')
  }
}



//蛋咖题目
function dkatm(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http://manorapp.pceggs.com/IFS/Activity/Question/Que_Index.ashx",
        headers : JSON.parse($.getdata('dkadthd')),
        body : dkadtbody,}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.status == 0){
        console.log('\n蛋咖获取题目回执:成功🌝 当前题目为:\n'+result.data.title+'\n\n成功找到题目答案，正在前往答题')
        tm = result.data.realnum
       await $.wait(1500);
       await dkatj();
} else {
       console.log('\n蛋咖获取题目回执:失败🚫 '+result.msg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//蛋咖提交答案     
function dkatj(timeout = 0) {
  return new Promise((resolve) => {

//console.log(dkadtbody.match(/{(.*?)}/)[1])
//$.done()
let url = {
        url : "http://manorapp.pceggs.com/IFS/Activity/Question/Que_Answer.ashx",
        headers : JSON.parse($.getdata('dkadthd')),
         body : "{"+dkadtbody.match(/{(.*?)}/)[1]+`,"realnum": `+tm+"}",
}      
      $.post(url, async (err, resp, data) => {
        try {
       //console.log(data)
       const result = JSON.parse(data)
      if(result.status == 0){
        console.log('\n蛋咖答题回执:成功🌝 '+result.msg)
        
       await $.wait(1500);
       await dkatm();
} else {
       console.log('\n蛋咖答题回执:失败🚫 '+result.msg)
}
     } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//蛋咖看看赚
function dkakkz(timeout = 0) {
  return new Promise((resolve) => {
//$.done()
let url = {
        url : "http://ifsapp.pceggs.com/IFS/MyAccount/FastAd/FastAd_SetImgAdAward.ashx",
        headers : JSON.parse($.getdata('dkahd')),
        body : dkakkzbody,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.status == 0){
        console.log('\n蛋咖看看赚奖励回执:成功🌝 '+result.msg+'等待15秒继续')
        await $.wait(15000);
        await dkakkz();
        
} else {
       console.log('\n蛋咖看看赚奖励回执:失败🚫 '+result.msg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//蛋咖小说
function dkaxs(timeout = 0) {
  return new Promise((resolve) => {
let jj = ''
jj = parseInt(dkaxsurl.match(/chapterId=(.*?)&userId=/)[1])
jj++

let url1 = dkaxsurl.match(/bookId=(.*?)&chapterId=/)[1]
//console.log(url1)
let url2 = dkaxsurl.match(/&userId=(.*?)&bookChannel=/)[1]
//console.log('http://www.ipadview.com/rpads/score/award?bookId='+url1+'&chapterId='+jj+++'&userId='+url2+'&bookChannel=1',)

let url = {
        url : 'http://www.ipadview.com/rpads/score/award?bookId='+url1+'&chapterId='+jj+++'&userId='+url2+'&bookChannel=1',
        headers : JSON.parse($.getdata('dkaxshd')),
        body : '',}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log('\n蛋咖小说奖励回执:成功🌝 '+result.data.third_msg+'等待15秒继续')
        await $.wait(15000);
        await dkaxs();
} else {
       console.log('\n蛋咖小说奖励回执:失败🚫 '+result.message)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//蛋咖新闻
function dkaxw(timeout = 0) {
  return new Promise((resolve) => {
//console.log(dkaxwbody.match(/partArticleId=\d{1,17}/))
//console.log(sjs)
//$.done()
let sjs = Math.floor(Math.random()*899+100); //生成随机数
let url = {
        url : "http://ifsapp.pceggs.com/IFS/Article/Article_MoneyAward.ashx",
        headers : JSON.parse($.getdata('dkahd')),
        body : 'keycode='+dkaxwbody.match(/keycode=(\w+)/)[1]+'&'+dkaxwbody.match(/partArticleId=\d{1,17}/)+sjs+'&token='+dkaxwbody.match(/token=(\w+)/)[1]+'&unix='+dkaxwbody.match(/unix=(\w+)/)[1]+'&userid='+dkaxwbody.match(/userid=(\w+)/)[1],}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.status == 0){
        console.log('\n蛋咖新闻阅读奖励回执:成功🌝 '+result.msg+'等待15秒继续')
         await $.wait(15000);
        await dkaxw();
} else {
       console.log('\n蛋咖新闻阅读奖励回执:失败🚫 '+result.msg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//蛋咖签到
function dkaqd(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof $.getdata('dkahd') === "undefined") {
        $.msg($.name,"",'请先获取蛋咖数据!😓',)
        $.done()
      }
let fqjs = 1
//console.log(dkaurl.match(/m.(.*?)reada/)[1])

let url = {
        url : "http://ifsapp.pceggs.com/IFS/SignIn/SignIn_SignIn.ashx",
        headers : JSON.parse($.getdata('dkahd')),
        body : dkaqdbody,}
      $.post(url, async (err, resp, data) => {
        try {
          
    const result = JSON.parse(data)
        if(result.status == 0){
        console.log('\n蛋咖签到回执:成功🌝 '+result.msg)
   
} else {
console.log('蛋咖签到回执:失败🚫 '+result.msg)
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


//蛋咖签到时段
function dkasd(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http://ifsapp.pceggs.com/IFS/SignIn/SignIn_GetTaskAward.ashx",
        headers : JSON.parse($.getdata('dkahd')),
        body : 'readLastKey='+fqkey,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log('\n蛋咖领取阅读奖励回执:成功🌝 '+result.msg+'\n今日阅读次数: '+result.data.infoView.num+' 今日阅读奖励: '+result.data.infoView.score)
        await dka1();
} else {
       console.log('\n蛋咖领取阅读奖励回执:失败🚫 '+result.msg+'\n今日阅读次数: '+result.data.infoView.num+' 今日阅读奖励: '+result.data.infoView.score)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//蛋咖签到看看赚
function dkaqdkkz(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http://ifsapp.pceggs.com/IFS/SignIn/SignIn_GetTaskAward.ashx",
        headers : JSON.parse($.getdata('dkahd')),
        body : 'readLastKey='+fqkey,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log('\n蛋咖领取阅读奖励回执:成功🌝 '+result.msg+'\n今日阅读次数: '+result.data.infoView.num+' 今日阅读奖励: '+result.data.infoView.score)
        await dka1();
} else {
       console.log('\n蛋咖领取阅读奖励回执:失败🚫 '+result.msg+'\n今日阅读次数: '+result.data.infoView.num+' 今日阅读奖励: '+result.data.infoView.score)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//蛋咖签到用户信息
function dkaxx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "http://ifsapp.pceggs.com/IFS/BaseData/GetUserInfo.ashx",
        headers : JSON.parse($.getdata('dkahd')),
        body : dkabody,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.status == 0){
        console.log('\n蛋咖用户信息回执:成功🌝 \n当前账户信息金币:'+data.match(/goldmoney":(.+?)}/)[1]+'个\n约等于 '+data.match(/goldmoney":(.+?)}/)[1] / 120000+'元')
} else {
       console.log('\n蛋咖用户信息回执:失败🚫 '+result.msg)
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

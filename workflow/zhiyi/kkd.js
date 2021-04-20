/*
羊毛很少、自己取舍，每天2-3毛，但是比较稳，没听说过封号，可能玩的人少，公司比较大（快手）阅读全是签名，这个脚本基于小bug用的签名随时可能失效

github：https://github.com/Ariszy/script
转载留个名字，谢谢
邀请码：JFN4M3
作者：执意Ariszy
目前包含：
签到
时段奖励
大转盘
红包雨
金币悬赏任务

#签到或者签到详情页面获取ck
kkdsign
#获取一次时段奖励获得cookie
kkdheader和kkdcookie

ACTION YML
KKDHEADER-kkdheader
KKDCOOKIE-kkdcookie
KKDSIGN-kkgsign

[mitm]
hostname = api.yuncheapp.cn
#圈x
[rewrite local]
^https:\/\/api\.yuncheapp\.cn\/pearl-incentive\/api\/v1\/task\/intervalAward\/receive url script-request-header https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/kkd.js
^https://api.yuncheapp.cn/pearl-incentive/api/v1/task/signIn/* url script-request-header https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/kkd.js

#loon
http-request ^https:\/\/api\.yuncheapp\.cn\/pearl-incentive\/api\/v1\/task\/intervalAward\/receive script-path=https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/kkd.js, requires-body=true, timeout=10, tag=快看点cookie
http-request ^https://api.yuncheapp.cn/pearl-incentive/api/v1/task/signIn/* script-path=https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/kkd.js, requires-body=true, timeout=10, tag=快看点kkdsign

#surge
kkdcookie = type=http-request,pattern=^https:\/\/api\.yuncheapp\.cn\/pearl-incentive\/api\/v1\/task\/intervalAward\/receive,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/kkd.js,script-update-interval=0
kkdcookie = type=http-request,pattern=^https://api.yuncheapp.cn/pearl-incentive/api/v1/task/signIn/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/kkd.js,script-update-interval=0

*/
const jsname='快看点'
const $ = Env(jsname)
const notify = $.isNode() ? require('./sendNotify') : '';
$.idx = ($.idx = ($.getval("kkdcount") || "1") - 1) > 0 ? `${$.idx + 1}` : ""; // 账号扩展字符
const kkdheaderArr=[]
const kkdcookieArr=[]
const kkdsignArr=[]
let kkdheader = $.getdata('kkdheader')
let kkdcookie = $.getdata('kkdcookie')
let kkdsign = $.getdata('kkdsign')
const logs = false //日志
const invite = 1; //邀请码1为邀请
let tz = ($.getval('tz') || '1');//通知
const invited = '';
let lTadlist = '15884282854261489762';
let gRadlist = '15884282854261489762';
let eXadlist = '15884282854261489762';
var message='';

if ($.isNode()) {
   hour = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getHours();
   minute = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getMinutes();
}else{
   hour = (new Date()).getHours();
   minute = (new Date()).getMinutes();
}
//CK运行

let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
   GetCookie();
   $.done()
}
if ($.isNode()) {
//  if (process.env.KKDHEADER && process.env.KKDHEADER.indexOf('#') > -1) {
//   kkdheader = process.env.KKDHEADER.split('#');
//   console.log(`您选择的是用"#"隔开\n`)
//  }
//  else if (process.env.KKDHEADER && process.env.KKDHEADER.indexOf('\n') > -1) {
//   kkdheader = process.env.KKDHEADER.split('\n');
//   console.log(`您选择的是用换行隔开\n`)
//  } else {
//   kkdheader = process.env.KKDHEADER.split()
//  };
//  if (process.env. KKDCOOKIE&& process.env.KKDCOOKIE.indexOf('#') > -1) {
//   kkdcookie = process.env.KKDCOOKIE.split('#');
//  }
//  else if (process.env.KKDCOOKIE && process.env.KKDCOOKIE.split('\n').length > 0) {
//   kkdcookie = process.env.KKDCOOKIE.split('\n');
//  } else  {
//   kkdcookie = process.env.KKDCOOKIE.split()
//  };
//  if (process.env. KKDSIGN&& process.env.KKDSIGN.indexOf('#') > -1) {
//   kkdsign = process.env.KKDSIGN.split('#');
//  }
//  else if (process.env.KKDSIGN && process.env.KKDSIGN.split('\n').length > 0) {
//   kkdsign = process.env.KKDSIGN.split('\n');
//  } else  {
//   kkdsign = process.env.KKDSIGN.split()
//  };
//  Object.keys(kkdheader).forEach((item) => {
//        if (kkdheader[item]) {
//          kkdheaderArr.push(kkdheader[item])
//        }
//    });
//    Object.keys(kkdcookie).forEach((item) => {
//        if (kkdcookie[item]) {
//          kkdcookieArr.push(kkdcookie[item])
//        }
//    });
//   Object.keys(kkdsign).forEach((item) => {
//        if (kkdsign[item]) {
//          kkdsignArr.push(kkdsign[item])
//        }
//    });
    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)

    kkdheaderArr.push('oc=apple&lon=&dpbs=3sCt3iAAMzE4MjQ4OTQxAQIQAIinM9cIsaW3TBAAAAC1e4eqFnhrRLWwUK%2BwfrGN&kpf=IPHONE&isp=460_01&kpn=pearl&fr=iOS&os=14.5&md=iPhone%20XS%20Max&app=pearl&mi=&ve=3.20.2&did=21C69612-FAEE-4572-9669-60CF14E48CA5&sr=1242*2688&egid=DFPB8106424AD422CA33B0BD290BC8D0BA63698697EEA567ABC76FFA4255164E&nt=WIFI&lat=&__clientSign2=mYjLMGB84zczMTgyNDg5MzA4YzViMDgxNTVlZWMzMWZiYzdkODM2YmE0NmU5NTAxNjc%3D&ss=')
    kkdcookieArr.push('did=21C69612-FAEE-4572-9669-60CF14E48CA5;userId=31660881;pearl.api_st=CgxwZWFybC5hcGkuc3QSkAFdVwZ55ShW5IOFeh7XMWwDgCRAhZCsDRrg1B_1CjTy-6NQQNGg3Smx2PHHFbCVjBX4NiwwL24pvz6bG_pVdOBHefkjcx9aFEniEH0Jyh4N1DC3wEUb7jkGUZLGoBWWoMtSyz9n8XkksdoES7SDehjGSwxhuEHqrl4wo7OAdoE9RPLH6lgXE8ANuybnnJrXRhkaEk7860Gh8V1I1ONadugAuRpZOiIgLFFtuuf0zhbPTUdZkV8RvXZzO7afx80UdkuLmbmQaAkoBTAB')
    kkdsignArr.push('oc=apple&lon=&dpbs=3sCt3iAAMzE4MjQ4OTQxAQIQAIinM9cIsaW3TBAAAAC1e4eqFnhrRLWwUK%2BwfrGN&kpf=IPHONE&isp=460_01&kpn=pearl&fr=iOS&os=14.5&md=iPhone%20XS%20Max&app=pearl&mi=&ve=3.20.2&did=21C69612-FAEE-4572-9669-60CF14E48CA5&sr=1242*2688&egid=DFPB8106424AD422CA33B0BD290BC8D0BA63698697EEA567ABC76FFA4255164E&nt=WIFI&lat=&__clientSign2=0g1Ys2B84tkzMTgyNDg5Mzk4YzViOTUxNmZjNTdkY2JjMjk3YTU4ZGVhOWY5ZWY5MGQ%3D&ss=')

    kkdheaderArr.push('oc=apple&lon=&dpbs=3sCt3iAAMzE4MjQ4OTI2AQIQAIinM9cIsaW3TBAAAAC1e4eqFnhrRLWwUK%2BwfrGN&kpf=IPHONE&isp=&kpn=pearl&fr=iOS&os=14.4&md=iPhone%206s&app=pearl&mi=D4204F1D-51E4-4070-AD17-5AB3874E3BCA&ve=3.20.2&did=DB4848B6-F7C3-45FC-9F5E-275D65498E86&sr=750*1334&egid=DFP12CBC34F894C9A96D255183573716B55CE010DBECF74672A673751342F2AA&nt=WIFI&lat=&__clientSign2=D3ymvWB845ozMTgyNDg5MjA4YzVhZjFkNTI1YjliM2Q5OTVhOTFjNjE0YTRmODJhOTY%3D&ss=')
    kkdcookieArr.push('did=DB4848B6-F7C3-45FC-9F5E-275D65498E86;userId=70357288;pearl.api_st=CgxwZWFybC5hcGkuc3QSkAEvsmhFKjueeUPKte7lNYlLMRrt-jXfT9beol901BAomaaiL8npkM77xhDky3rCntww6NdKbKBXkINRpxgQmsY0VwYlQDdbrxT3E36qIFcZVDREP5c7Cl0xcjsqlofgfjo71H4r4oHMZWRC1nOShN5stgPiSbu7GIyHBEzJovaQ5EtRwGzFJu98TrBaZtoYYz0aEpAOFbt6py2vDBy_9uhF_kBUtSIg8vvhguy4Y4bdb0z_FiHWFoWula3IOmZK5gt_PBL3TgAoBTAB')
    kkdsignArr.push('oc=apple&lon=&dpbs=3sCt3iAAMzE4MjQ4OTI2AQIQAIinM9cIsaW3TBAAAAC1e4eqFnhrRLWwUK%2BwfrGN&kpf=IPHONE&isp=&kpn=pearl&fr=iOS&os=14.4&md=iPhone%206s&app=pearl&mi=D4204F1D-51E4-4070-AD17-5AB3874E3BCA&ve=3.20.2&did=DB4848B6-F7C3-45FC-9F5E-275D65498E86&sr=750*1334&egid=DFP12CBC34F894C9A96D255183573716B55CE010DBECF74672A673751342F2AA&nt=WIFI&lat=&__clientSign2=TM-khWB8420zMTgyNDg5MjE4YzVlOTA1YThkMzdmZDVlZjA3NTYxNGEzZTc0ZGRlODU%3D&ss=')

 } else {
    kkdheaderArr.push($.getdata('kkdheader'))
    kkdcookieArr.push($.getdata('kkdcookie'))
    kkdsignArr.push($.getdata('kkdsign'))
    let kkdcount = ($.getval('kkdcount') || '1');
  for (let i = 2; i <= kkdcount; i++) {
    kkdheaderArr.push($.getdata(`kkdheader${i}`))
    kkdcookieArr.push($.getdata(`kkdcookie${i}`))
    kkdsignArr.push($.getdata(`kkdsign${i}`))
  }
}
!(async () => {
if (!kkdcookieArr[0]) {
    $.msg($.name, '【提示】请先获取快看点一cookie')
    return;
  }
   console.log(`------------- 共${kkdcookieArr.length}个账号----------------\n`)
  for (let i = 0; i < kkdcookieArr.length; i++) {
    if (kkdcookieArr[i]) {
      other = ''
      kkdheader = kkdheaderArr[i];
      kkdcookie = kkdcookieArr[i];
      kkdsign = kkdsignArr[i];
      $.index = i + 1;
      console.log(`\n开始【快看点${$.index}】`)
      await userinfo()
      await signin()
      await control()
      await intervalAward()
      await lotteryTable()
      await lotteryTable_getcoins()
      //广告来源大转盘
      await lotteryTable1()
      await extra_getcoins()
      await giftRain()
      await giftRain_getcoins()
      await showmsg()
  }
 }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())
function GetCookie() {
 if($request&&$request.url.indexOf("intervalAward")>=0) {
  const kkdheader = $request.url.split(`?`)[1]
    if (kkdheader) $.setdata(kkdheader,`kkdheader${$.idx}`)
    $.log(`[${jsname}] 获取kkdheader请求: 成功,kkdheader: ${kkdheader}`)
    $.msg(`获取kkdheader: 成功🎉`, ``)
  const kkdcookie = $request.headers['Cookie']
    if (kkdcookie) $.setdata(kkdcookie,`kkdcookie${$.idx}`)
    $.log(`[${jsname}] 获取kkdcookie请求: 成功,kkdcookie: ${kkdcookie}`)
    $.msg(`获取kkdcookie: 成功🎉`, ``)
    }
if($request&&$request.url.indexOf("finish")>=0) {
  const kkdbody = $request.body
    if (kkdbody) $.setdata(kkdbody,`kkdbody${$.idx}`)
    $.log(`[${jsname}] 获取kkdbody请求: 成功,kkdbody: ${kkdbody}`)
    $.msg(`获取kkdbody: 成功🎉`, ``)
    }
if($request&&$request.url.indexOf("signIn")>=0) {
  const kkdsign = $request.url.split(`?`)[1]
    if (kkdsign) $.setdata(kkdsign,`kkdsign${$.idx}`)
    $.log(`[${jsname}] 获取kkdsign请求: 成功,kkdsign: ${kkdsign}`)
    $.msg(`获取kkdsign: 成功🎉`, ``)
    }
  }
async function control(){
   if(invite == 1){
      await invitation();
   }
}
function invitation() {
return new Promise((resolve, reject) => {
  let invitatonurl ={
    url: `https://api.yuncheapp.cn/pearl-incentive/api/v1/task/invite/verify?${kkdheader}`,
    headers: {
              Cookie: kkdcookie,
              'Connection': 'keep-alive',
              'Content-Type': 'application/json',
              'Host': 'api.yuncheapp.cn',
              'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
          },
     body:'{"code": "JFN4M3"}'
}
   $.post(invitatonurl,(error, response, data) =>{
     const result = JSON.parse(data)
      resolve()
    })
   })
  }
//个人信息
function userinfo() {
return new Promise((resolve, reject) => {
  let userinfourl ={
    url: `https://api.yuncheapp.cn/pearl-incentive/api/v1/user/tabV2?${kkdheader}`,
    headers: {
              Cookie: kkdcookie,
              'Connection': 'keep-alive',
              'Content-Type': 'application/json',
              'Host': 'api.yuncheapp.cn',
              'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
          },
     body:'{}'
}
   $.post(userinfourl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs) $.log(data)
      if(result.message == 'success') {
          message +='🎉'+result.data.userInfo.nickname+'-今日已得:'+result.data.userInfo.todayCoins+'-现有余额:'+result.data.userInfo.coins+'\n'

}     else{
          message += '⚠️异常'+result.message+'\n'
}
          resolve()
    })
   })
  }
//signin
function signin() {
return new Promise((resolve, reject) => {
  let signinurl ={
    url: `https://api.yuncheapp.cn/pearl-incentive/api/v1/task/signIn/add?${kkdsign}`,
    headers: {
              Cookie: kkdcookie,
              'Connection': 'keep-alive',
              'Content-Type': 'application/json',
              'Host': 'api.yuncheapp.cn',
              'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
          },
     body:'{}'
}
   $.get(signinurl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs) $.log(data)
      message += '📣签到\n'
      if(result.message == 'success') {
          message +='🎉'+result.data.title+','+result.data.subtitle+'\n'

}     else{
          message += '⚠️异常'+result.message+'\n'
}
          resolve()
    })
   })
  }
//大转盘
function lotteryTable() {
return new Promise((resolve, reject) => {
  let lotteryTableurl ={
    url: `https://api.yuncheapp.cn/pearl-incentive/api/v1/lotteryTable/drawV2?${kkdheader}`,
    headers: {
              Cookie: kkdcookie,
              'Connection': 'keep-alive',
              'Content-Type': 'application/json',
              'Host': 'api.yuncheapp.cn',
              'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
          },
     body:'{}'
}

   $.post(lotteryTableurl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs) $.log(data)
        message += '📣超级大转盘\n'
      if(result.message == 'success') {
        message += '🔔恭喜获得:'+result.data.content+','
        lTadlist = result.data.adPondInfo.adInfos[0].adLlsid
        }
      else{
        message += '⚠️异常:'+result.message+'\n'
        }
          resolve()
    })
   })
  }

//大转盘双倍or神秘宝箱
function lotteryTable_getcoins() {
//const lTbody = kkdbody.replace("GIFTRAIN_INCENTIVE","LOTTERYTABLE_INCENTIVE");
//const lTbody = kkdbody.replace(/adLlsid":"\d+/,`adLlsid":"${lTadlist}`);
//$.log('111111'+lTadlist)
return new Promise((resolve, reject) => {
  let lotteryTable_getcoinsurl ={
    url: `https://api.yuncheapp.cn/pearl-incentive/api/v1/ad/finish?${kkdheader}`,
    headers: {
              Cookie: kkdcookie,
              'Connection': 'keep-alive',
              'Content-Type': 'application/json',
              'Host': 'api.yuncheapp.cn',
              'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
          },
     body:`{"adPositionType":"LOTTERYTABLE_INCENTIVE","insertCnt":0,"adCodeId":"1300213002001","serverEcpm":0,"ttl":0,"requestCnt":0,"adProvider":"KS_NEW","adRet":true,"resultExpire":0,"keyString":"1300213002001KS_NEW","endAd":false,"requestStartTime":0,"adBizType":"LOTTERY_TABLE","renderType":0,"adToken":"","adLlsid":"${lTadlist}","isPreload":false,"adAward":0}`
}

   $.post(lotteryTable_getcoinsurl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs)  $.log(data)
      if(result.message == 'success') {
        message += +result.data.coins+'金币\n'
        }
      else{
        message +='⚠️异常:'+result.message+'\n'
           }
          resolve()
    })
   })
  }
//时段奖励
function intervalAward() {
return new Promise((resolve, reject) => {
  let intervalAwardurl ={
    url: `https://api.yuncheapp.cn/pearl-incentive/api/v1/task/intervalAward/receive?${kkdheader}`,
    headers: {
              Cookie: kkdcookie,
              'Connection': 'keep-alive',
              'Content-Type': 'application/json',
              'Host': 'api.yuncheapp.cn',
              'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
          }
}
   $.post(intervalAwardurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs)  $.log(data)
       message +='📣时段奖励\n'
      if(result.message == 'success') {
        message += result.data.title+',获得:'+result.data.coins+'金币\n'
        }
      else{
        message +='⚠️异常:'+result.message+'\n'
           }
          resolve()
    })
   })
  }
//红包雨
function giftRain() {
return new Promise((resolve, reject) => {
  let giftRainurl ={
    url: `https://api.yuncheapp.cn/pearl-incentive/api/v1/giftRain/receive?${kkdheader}`,
    headers: {
              Cookie: kkdcookie,
              'Connection': 'keep-alive',
              'Content-Type': 'application/json',
              'Host': 'api.yuncheapp.cn',
              'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
          },
    body:'{"coins":40}'
}

   $.post(giftRainurl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs)  $.log(data)
      message +='📣红包雨\n'
      if(result.message == 'success') {
        message += result.data.adPondInfo.buttonText+'\n'
        gRadlist = result.data.adPondInfo.adInfos[0].adLlsid
        }else{
        message +='⚠️异常:'+result.message+'\n'
           }
          resolve()
    })
   })
  }
//红包雨奖励
function giftRain_getcoins() {
return new Promise((resolve, reject) => {
  let giftRain_getcoinsurl ={
    url: `https://api.yuncheapp.cn/pearl-incentive/api/v1/ad/finish?${kkdheader}`,
    headers: {
              Cookie: kkdcookie,
              'Connection': 'keep-alive',
              'Content-Type': 'application/json',
              'Host': 'api.yuncheapp.cn',
              'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
          },
   body:`{"adPositionType":"GIFTRAIN_INCENTIVE","insertCnt":0,"adCodeId":"1300213002003","serverEcpm":0,"ttl":0,"requestCnt":0,"adProvider":"KS_NEW","adRet":true,"resultExpire":0,"keyString":"1300213002003KS_NEW","endAd":false,"requestStartTime":0,"renderType":0,"adToken":"","adLlsid":"${gRadlist}","isPreload":false,"adAward":0}`
}
   $.post(giftRain_getcoinsurl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs)  $.log(data)
      if(result.message == 'success') {
        message += result.data.coins+'金币\n'
        }
      else{
        message +='⚠️异常:'+result.message+'\n'
           }
          resolve()
    })
   })
  }
//大转盘
function lotteryTable1() {
return new Promise((resolve, reject) => {
  let lotteryTableurl ={
    url: `https://api.yuncheapp.cn/pearl-incentive/api/v1/lotteryTable/drawV2?${kkdheader}`,
    headers: {
              Cookie: kkdcookie,
              'Connection': 'keep-alive',
              'Content-Type': 'application/json',
              'Host': 'api.yuncheapp.cn',
              'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
          },
     body:'{}'
}

   $.post(lotteryTableurl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs) $.log(data)
        //message += '📣超级大转盘\n'
      if(result.message == 'success') {
        //message += '🔔恭喜获得:'+result.data.content+','
        eXadlist = result.data.adPondInfo.adInfos[0].adLlsid
        }
      else{
        //message += '⚠️异常:'+result.message+'\n'
        }
          resolve()
    })
   })
  }

//金币悬赏任务
function extra_getcoins() {
return new Promise((resolve, reject) => {
  let giftRain_getcoinsurl ={
    url: `https://api.yuncheapp.cn/pearl-incentive/api/v1/ad/finish?${kkdheader}`,
    headers: {
              Cookie: kkdcookie,
              'Connection': 'keep-alive',
              'Content-Type': 'application/json',
              'Host': 'api.yuncheapp.cn',
              'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
          },
   body:`{"adRet":true,"adCodeId":"1300213002001","adProvider":"KS_NEW","adLlsid":"${eXadlist}","adToken":"","adPositionType":"COIN_REWARD_INCENTIVE","adBizType":"COIN_REWARD"}`
}
   $.post(giftRain_getcoinsurl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs)  $.log(data)
      message +='📣金币悬赏任务\n'
      if(result.message == 'success') {
        message += result.data.toast+'\n'
        }
      else{
        message +='⚠️异常:'+result.message+'\n'
           }
          resolve()
    })
   })
  }
var Time = new Date(new Date().getTime() + 8 * 60 * 60 * 1000);
async function showmsg(){
if(tz==1){
    if ($.isNode()&& (Time.getHours() == 12 && Time.getMinutes() <= 20) || (Time.getHours() == 23 && Time.getMinutes() >= 40)) {
       await notify.sendNotify($.name,message)
     }else{
       $.msg(jsname,'',message)
}
   }else{
       $.log(message)
    }

}
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
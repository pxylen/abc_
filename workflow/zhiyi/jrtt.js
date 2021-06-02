/*

tgchannel：https://t.me/Ariszy_Script
github：https://github.com/Ariszy/script
转载给我留个名字，谢谢


邀请码：1980436898
我的--输入邀请码，立得一元，直接提现，谢谢

作者：执意Ariszy
目前包含：
签到
开首页宝箱
读文章30篇（具体效果自测）
开农场宝箱
农场浇水
done 农场离线奖励(农场宝箱开完后，需要进农场再运行脚本才能开，有点问题)
##通过农场浇水激活上线，达到获取理想奖励目的，目前测试每天的离线奖励足够开启农场5个宝箱，不需要做其他任务，具体情况看后期是否需要，再添加除虫，开地，施肥，三餐奖励以及农场签到活动
20点睡觉，获取完全后（3600）或睡觉12小时，自动醒来（防止封号）
自动收取睡觉金币


脚本初成，非专业人士制作，欢迎指正

#右上角签到即可获取签到cookie
#进一次农场即可获取农场cookie
#读文章弹出金币获取读文章cookie

[mitm]
hostname = *.toutiaoapi.com

#圈x
[rewrite local]
\/score_task\/v1\/task\/(sign_in|get_read_bonus) url script-request-header https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/jrtt.js
\/ttgame\/game_farm\/home_info url script-request-header https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/jrtt.js
[task]
5,35 8-23 * * * https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/jrtt.js, tag=今日头条极速版, enabled=true
#loon
http-request \/score_task\/v1\/task\/(sign_in|get_read_bonus) script-path=https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/jrtt.js, requires-body=true, timeout=10, tag=今日头条极速版sign
http-request \/ttgame\/game_farm\/home_info script-path=https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/jrtt.js, requires-body=true, timeout=10, tag=今日头条极速版farm
cron "5,35 8-23 * * *" script-path=https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/jrtt.js, tag=今日头条极速版
#surge
jrttsign = type=http-request,pattern=\/score_task\/v1\/task\/(sign_in|get_read_bonus),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/jrtt.js,script-update-interval=0
jrttfarm = type=http-request,pattern=\/ttgame\/game_farm\/home_info,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/jrtt.js,script-update-interval=0
jrtt = type=cron,cronexp="5,35 8-23 * * *",wake-system=1,script-path=https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/jrtt.js,script-update-interval=0
*/

const jsname='今日头条极速版'
const $ = Env(jsname)
const notify = $.isNode() ?require('./sendNotify') : '';
$.idx = ($.idx = ($.getval("jrttcount") || "1") - 1) > 0 ? `${$.idx + 1}` : ""; // 账号扩展字符
const signurlArr = [],signkeyArr=[]
const farmurlArr = [],farmkeyArr=[]
const readurlArr = [],readkeyArr=[]
let signurl = $.getdata('signurl')
let signkey = $.getdata('signkey')

let farmurl = $.getdata('farmurl')
let farmkey = $.getdata('farmkey')

let readurl = $.getdata('readurl')
let readkey = $.getdata('readkey')
//var articles =''
let tz = ($.getval('tz') || '1');//0关闭通知，1默认开启
const invit=1;//新用户自动邀请，0关闭，1默认开启
const logs =0;//0为关闭日志，1为开启
var coins=''
var article =''
var collect = ''
var invited =''
var hour=''
var minute=''
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
//sign
//  if (process.env.JRTTSIGNURL && process.env.JRTTSIGNURL.indexOf('#') > -1) {
//   signurl = process.env.JRTTSIGNURL.split('#');
//   console.log(`您选择的是用"#"隔开\n`)
//  }
//  else if (process.env.JRTTSIGNURL && process.env.JRTTSIGNURL.indexOf('\n') > -1) {
//   signurl = process.env.JRTTSIGNURL.split('\n');
//   console.log(`您选择的是用换行隔开\n`)
//  } else {
//   signurl = process.env.JRTTSIGNURL.split()
//  };
//  if (process.env. JRTTSIGNKEY&& process.env.JRTTSIGNKEY.indexOf('#') > -1) {
//   signkey = process.env.JRTTSIGNKEY.split('#');
//  }
//  else if (process.env.JRTTSIGNKEY && process.env.JRTTSIGNKEY.split('\n').length > 0) {
//   signkey = process.env.JRTTSIGNKEY.split('\n');
//  } else  {
//   signkey = process.env.JRTTSIGNKEY.split()
//  };
////farm
//if (process.env.JRTTFARMURL && process.env.JRTTFARMURL.indexOf('#') > -1) {
//   farmurl = process.env.JRTTFARMURL.split('#');
//   console.log(`您选择的是用"#"隔开\n`)
//  }
//  else if (process.env.JRTTFARMURL && process.env.JRTTFARMURL.indexOf('\n') > -1) {
//   farmurl = process.env.JRTTFARMURL.split('\n');
//   console.log(`您选择的是用换行隔开\n`)
//  } else {
//   farmurl = process.env.JRTTFARMURL.split()
//  };
//  if (process.env. JRTTFARMKEY&& process.env.JRTTFARMKEY.indexOf('#') > -1) {
//   farmkey = process.env.JRTTFARMKEY.split('#');
//  }
//  else if (process.env.JRTTFARMKEY && process.env.JRTTFARMKEY.split('\n').length > 0) {
//   farmkey = process.env.JRTTFARMKEY.split('\n');
//  } else  {
//   farmkey = process.env.JRTTFARMKEY.split()
//  };
////read
//if (process.env.JRTTREADURL && process.env.JRTTREADURL.indexOf('#') > -1) {
//   readurl = process.env.JRTTREADURL.split('#');
//   console.log(`您选择的是用"#"隔开\n`)
//  }
//  else if (process.env.JRTTREADURL && process.env.JRTTREADURL.indexOf('\n') > -1) {
//   readurl = process.env.JRTTREADURL.split('\n');
//   console.log(`您选择的是用换行隔开\n`)
//  } else {
//   readurl = process.env.JRTTREADURL.split()
//  };
//  if (process.env. JRTTREADKEY&& process.env.JRTTREADKEY.indexOf('#') > -1) {
//   readkey = process.env.JRTTREADKEY.split('#');
//  }
//  else if (process.env.JRTTREADKEY && process.env.JRTTREADKEY.split('\n').length > 0) {
//   readkey = process.env.JRTTREADKEY.split('\n');
//  } else  {
//   readkey = process.env.JRTTREADKEY.split()
//  };
////sign
//  Object.keys(signurl).forEach((item) => {
//        if (signurl[item]) {
//          signurlArr.push(signurl[item])
//        }
//    });
//    Object.keys(signkey).forEach((item) => {
//        if (signkey[item]) {
//          signkeyArr.push(signkey[item])
//        }
//    });
////farm
//Object.keys(farmurl).forEach((item) => {
//        if (farmurl[item]) {
//          farmurlArr.push(farmurl[item])
//        }
//    });
//    Object.keys(farmkey).forEach((item) => {
//        if (farmkey[item]) {
//          farmkeyArr.push(signkey[item])
//        }
//    });
////read
//Object.keys(readurl).forEach((item) => {
//        if (readurl[item]) {
//          readurlArr.push(readurl[item])
//        }
//    });
//    Object.keys(readkey).forEach((item) => {
//        if (readkey[item]) {
//          readkeyArr.push(readkey[item])
//        }
//    });
    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)

    signurlArr.push('version_code=8.2.8&caid1=b9265c96b4b16c517d4a437f1adb09f9&tma_jssdk_version=2.10.1.1&app_name=news_article_lite&vid=72AC456D-69E9-43F4-8CF6-FB3EB53B9165&device_id=59870356682&channel=beta_version&resolution=1242*2688&aid=35&ab_version=668905,2756072,668906,2756080,668904,2756063,668907,2738367,2756104,668903,2756098,1859937,668908,2756108&ab_feature=794528&review_flag=0&ab_group=794528&update_version_code=82806&openudid=479ca9fb638626bee699aed00487f5e6a1c69136&cdid=9145D189-1C0A-4879-8F93-6F17BE3C0D85&idfv=72AC456D-69E9-43F4-8CF6-FB3EB53B9165&ac=WIFI&os_version=14.7&ssmix=a&device_platform=iphone&caid2=&iid=3342975283773236&ab_client=a1,f2,f7,e1&device_type=iPhone%20XS%20Max&idfa=00000000-0000-0000-0000-000000000000')
    signkeyArr.push('{"Host":"api3-normal-hl.toutiaoapi.com","Connection":"keep-alive","Accept":"application/json","x-Tt-Token":"002d3dee503c0b2ab5ef82d39947bba3c2050ce6daf103c1465ffb511ebfb804a5209206b9bfc508ace5fd8d25c320cd2958df5f4d934de5c8f776419b93940293dc12b8782431473879b9ed8bfb2dd23c79496760d93efece935ea4767c899a1bd9e-1.0.1","Cookie":"d_ticket=85275c08c05004c693305fd6935be9bcc85fb; odin_tt=d44153eb553403bde5c7c5f40f047dc8c9108e1b66bf3cc54dfa9438706450c0ea22051ca389452170548729542cb227; gftoken=MmQzZGVlNTAzY3wxNjE1MjE2Mjc1OTB8fDAGBgYGBgY; i18next=score_task; sessionid=2d3dee503c0b2ab5ef82d39947bba3c2; sessionid_ss=2d3dee503c0b2ab5ef82d39947bba3c2; sid_guard=2d3dee503c0b2ab5ef82d39947bba3c2%7C1621897685%7C5170877%7CFri%2C+23-Jul-2021+19%3A29%3A22+GMT; sid_tt=2d3dee503c0b2ab5ef82d39947bba3c2; uid_tt=6e3967abbc6e300d1864fd7a01506b44; uid_tt_ss=6e3967abbc6e300d1864fd7a01506b44; install_id=3342975283773236; ttreq=1$ad5a213fa38c7f331f995e22e2a752a219f590bd","Content-Type":"application/json; encoding=utf-8","X-SS-Cookie":"install_id=3342975283773236; ttreq=1$ad5a213fa38c7f331f995e22e2a752a219f590bd; ssr_fs=m; ssr_sbh__=44; ssr_tz=Asia/Shanghai; FRM=new; PIXIEL_RATIO=3; WIN_WH=414_795; sessionid=2d3dee503c0b2ab5ef82d39947bba3c2; sessionid_ss=2d3dee503c0b2ab5ef82d39947bba3c2; sid_guard=2d3dee503c0b2ab5ef82d39947bba3c2%7C1621897685%7C5170877%7CFri%2C+23-Jul-2021+19%3A29%3A22+GMT; sid_tt=2d3dee503c0b2ab5ef82d39947bba3c2; uid_tt=6e3967abbc6e300d1864fd7a01506b44; uid_tt_ss=6e3967abbc6e300d1864fd7a01506b44; odin_tt=d44153eb553403bde5c7c5f40f047dc8c9108e1b66bf3cc54dfa9438706450c0ea22051ca389452170548729542cb227; d_ticket=85275c08c05004c693305fd6935be9bcc85fb","tt-request-time":"1622598991629","User-Agent":"NewsLite 8.2.8 rv:8.2.8.06 (iPhone; iOS 14.7; zh_CN) Cronet","sdk-version":"2","x-tt-dt":"AAAQUFMQMYBOF3SH4M22Z7EZK7NEXHAK26ISHEVOI3KWMCPXSIL4NEDZCUE6RSL5CDUVHGGLCOVK637JLHULHMOVAIBAIVI3B2WVENFB5KVN5ZS23CXKZS2J5CZXXQYIA2RW2VL54VNKVU4HXDR3DCA","passport-sdk-version":"5.13.7-rc.48","X-SS-STUB":"D41D8CD98F00B204E9800998ECF8427E","X-SS-DP":"35","x-tt-trace-id":"00-ca6fc08609df08d24cae07ebe2000023-ca6fc08609df08d2-01","Accept-Encoding":"gzip, deflate","X-Ladon":"wkc7DuIp+WxudQAo5hbN/B0q9vlOUkNjQvnu2Zt6rWZqwXbY","X-Khronos":"1622598991","X-Argus":"kEyww4bXCsqvKITYO07JhD927peLNzfr9fmVX1k8v8IcgFXyJZ7v8VhI1MFlZ3GJ8Q9N5iWUTuDN+vHpuxnXerpoq1gWQjk6jeoyxTyaXkdTRx4gE4eYa6dK1+GoiGrzeyrkaTIn2KcQgBqqCjd9NYIfVSgvgXWWr+JjI6+1TePnAPU4ksArXFXCucis+uR1nNHnSje1WcF43sDZE9Gjf5w2OcVWPy0DBEuCpNtC546nPeh4346Li5d1Cu3zMEKZNTY=","X-Gorgon":"8404604800004188a663d5ef865f7176aa9501ed3e4693284158"}')
    farmurlArr.push('device_id=59870356682&device_platform=iphone&aid=35&os_version=14.7&update_version_code=82806&tma_jssdk_version=2.10.1.1&sid=&version_code=8.2.8&install_id=3342975283773236&app_name=news_article_lite&device_type=iPhone%20XS%20Max&channel=beta_version&host_app_name=undefined&activity_id=&credit_type=&use_tomato=0&ios_new_version=false')
    farmkeyArr.push('{"Host":"api3-normal-hl.toutiaoapi.com","Connection":"keep-alive","Cookie":"install_id=3342975283773236;ttreq=1$ad5a213fa38c7f331f995e22e2a752a219f590bd;ssr_fs=m;ssr_sbh__=44;ssr_tz=Asia/Shanghai;FRM=new;PIXIEL_RATIO=3;WIN_WH=414_795;sessionid=2d3dee503c0b2ab5ef82d39947bba3c2;sessionid_ss=2d3dee503c0b2ab5ef82d39947bba3c2;sid_guard=2d3dee503c0b2ab5ef82d39947bba3c2%7C1621897685%7C5170877%7CFri%2C+23-Jul-2021+19%3A29%3A22+GMT;sid_tt=2d3dee503c0b2ab5ef82d39947bba3c2;uid_tt=6e3967abbc6e300d1864fd7a01506b44;uid_tt_ss=6e3967abbc6e300d1864fd7a01506b44;odin_tt=d44153eb553403bde5c7c5f40f047dc8c9108e1b66bf3cc54dfa9438706450c0ea22051ca389452170548729542cb227;d_ticket=85275c08c05004c693305fd6935be9bcc85fb;MONITOR_WEB_ID=59870356682;i18next=score_task;gftoken=MmQzZGVlNTAzY3wxNjIxMjQ4NzMzNTl8fDAGBgYGBgY","x-Tt-Token":"002d3dee503c0b2ab5ef82d39947bba3c2050ce6daf103c1465ffb511ebfb804a5209206b9bfc508ace5fd8d25c320cd2958df5f4d934de5c8f776419b93940293dc12b8782431473879b9ed8bfb2dd23c79496760d93efece935ea4767c899a1bd9e-1.0.1","X-SS-Cookie":"install_id=3342975283773236; ttreq=1$ad5a213fa38c7f331f995e22e2a752a219f590bd; MONITOR_WEB_ID=59870356682; ssr_fs=m; ssr_sbh__=44; ssr_tz=Asia/Shanghai; FRM=new; PIXIEL_RATIO=3; WIN_WH=414_795; sessionid=2d3dee503c0b2ab5ef82d39947bba3c2; sessionid_ss=2d3dee503c0b2ab5ef82d39947bba3c2; sid_guard=2d3dee503c0b2ab5ef82d39947bba3c2%7C1621897685%7C5170877%7CFri%2C+23-Jul-2021+19%3A29%3A22+GMT; sid_tt=2d3dee503c0b2ab5ef82d39947bba3c2; uid_tt=6e3967abbc6e300d1864fd7a01506b44; uid_tt_ss=6e3967abbc6e300d1864fd7a01506b44; i18next=score_task; gftoken=MmQzZGVlNTAzY3wxNjIxMjQ4NzMzNTl8fDAGBgYGBgY; odin_tt=d44153eb553403bde5c7c5f40f047dc8c9108e1b66bf3cc54dfa9438706450c0ea22051ca389452170548729542cb227; d_ticket=85275c08c05004c693305fd6935be9bcc85fb","tt-request-time":"1622599004265","Content-Type":"application/json","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NewsArticle/8.2.8.06 JsSdk/2.0 NetType/4G (NewsLite 8.2.8 14.700000) NewsLite/8.2.8 Mobile ToutiaoMicroApp/2.10.1.1","sdk-version":"2","x-tt-dt":"AAAQUFMQMYBOF3SH4M22Z7EZK7NEXHAK26ISHEVOI3KWMCPXSIL4NEDZCUE6RSL5CDUVHGGLCOVK637JLHULHMOVAIBAIVI3B2WVENFB5KVN5ZS23CXKZS2J5CZXXQYIA2RW2VL54VNKVU4HXDR3DCA","passport-sdk-version":"5.13.7-rc.48","X-SS-DP":"35","x-tt-trace-id":"00-ca6ff1e209df08d24ca76e100d9b0023-ca6ff1e209df08d2-01","Referer":"https://tmaservice.developer.toutiao.com/?appid=tta539d3843a134f3d&version=1.2.29","Accept-Encoding":"gzip, deflate","X-Ladon":"Q7B7R5lUMO151nCuEQri42i9ev7ia5spnmedCsznP00aXmgP","X-Khronos":"1622599004","X-Argus":"3M4Pqnoso16+Ql+t+yqZYIy5g6agmCPrzDACTmZhv/SSLqc6bAXNF+gCy8nIBLaKOFgL0UdxzPow9weWBXbPTF9AmGwvhaR36i71kcDCPSGtL/Q5llmBOn4+D8HU7LPF8rMJQ8jylJ1nqg5shkaNVdYwS+p8oFDf0ZOFffaWwgClaBd84yJmYvpOI++K6h2YP9eVODHLl9JEkRDCA2AfdTDa9I82GmBqIaFdM1aa+cllKN4YpuhwEY3/Lx7S80EBxl0=","X-Gorgon":"8404e05b0000c2d5ee73d065aabe6f3a3b0f5de3812418dca3f8"}')
    readurlArr.push('version_code=8.2.8&caid1=b9265c96b4b16c517d4a437f1adb09f9&tma_jssdk_version=2.10.1.1&app_name=news_article_lite&vid=72AC456D-69E9-43F4-8CF6-FB3EB53B9165&device_id=59870356682&channel=beta_version&resolution=1242*2688&aid=35&ab_version=668905,2756072,668906,2756080,668904,2756063,668907,2738367,2756104,668903,2756098,1859937,668908,2756108&ab_feature=794528&review_flag=0&ab_group=794528&update_version_code=82806&openudid=479ca9fb638626bee699aed00487f5e6a1c69136&cdid=9145D189-1C0A-4879-8F93-6F17BE3C0D85&idfv=72AC456D-69E9-43F4-8CF6-FB3EB53B9165&ac=WIFI&os_version=14.7&ssmix=a&device_platform=iphone&caid2=&iid=3342975283773236&ab_client=a1,f2,f7,e1&device_type=iPhone%20XS%20Max&idfa=00000000-0000-0000-0000-000000000000&group_id=6968810494949999136')
    readkeyArr.push('{"Host":"api3-normal-hl.toutiaoapi.com","Connection":"keep-alive","Cookie":"d_ticket=85275c08c05004c693305fd6935be9bcc85fb; odin_tt=d44153eb553403bde5c7c5f40f047dc8c9108e1b66bf3cc54dfa9438706450c0ea22051ca389452170548729542cb227; gftoken=MmQzZGVlNTAzY3wxNjE1MjE2Mjc1OTB8fDAGBgYGBgY; i18next=score_task; sessionid=2d3dee503c0b2ab5ef82d39947bba3c2; sessionid_ss=2d3dee503c0b2ab5ef82d39947bba3c2; sid_guard=2d3dee503c0b2ab5ef82d39947bba3c2%7C1621897685%7C5170877%7CFri%2C+23-Jul-2021+19%3A29%3A22+GMT; sid_tt=2d3dee503c0b2ab5ef82d39947bba3c2; uid_tt=6e3967abbc6e300d1864fd7a01506b44; uid_tt_ss=6e3967abbc6e300d1864fd7a01506b44; install_id=3342975283773236; ttreq=1$ad5a213fa38c7f331f995e22e2a752a219f590bd","x-Tt-Token":"002d3dee503c0b2ab5ef82d39947bba3c2050ce6daf103c1465ffb511ebfb804a5209206b9bfc508ace5fd8d25c320cd2958df5f4d934de5c8f776419b93940293dc12b8782431473879b9ed8bfb2dd23c79496760d93efece935ea4767c899a1bd9e-1.0.1","X-SS-Cookie":"install_id=3342975283773236; ttreq=1$ad5a213fa38c7f331f995e22e2a752a219f590bd; ssr_fs=m; ssr_sbh__=44; ssr_tz=Asia/Shanghai; FRM=new; PIXIEL_RATIO=3; WIN_WH=414_795; sessionid=2d3dee503c0b2ab5ef82d39947bba3c2; sessionid_ss=2d3dee503c0b2ab5ef82d39947bba3c2; sid_guard=2d3dee503c0b2ab5ef82d39947bba3c2%7C1621897685%7C5170877%7CFri%2C+23-Jul-2021+19%3A29%3A22+GMT; sid_tt=2d3dee503c0b2ab5ef82d39947bba3c2; uid_tt=6e3967abbc6e300d1864fd7a01506b44; uid_tt_ss=6e3967abbc6e300d1864fd7a01506b44; odin_tt=d44153eb553403bde5c7c5f40f047dc8c9108e1b66bf3cc54dfa9438706450c0ea22051ca389452170548729542cb227; d_ticket=85275c08c05004c693305fd6935be9bcc85fb","tt-request-time":"1622599028078","User-Agent":"NewsLite 8.2.8 rv:8.2.8.06 (iPhone; iOS 14.7; zh_CN) Cronet","sdk-version":"2","x-tt-dt":"AAAQUFMQMYBOF3SH4M22Z7EZK7NEXHAK26ISHEVOI3KWMCPXSIL4NEDZCUE6RSL5CDUVHGGLCOVK637JLHULHMOVAIBAIVI3B2WVENFB5KVN5ZS23CXKZS2J5CZXXQYIA2RW2VL54VNKVU4HXDR3DCA","passport-sdk-version":"5.13.7-rc.48","X-SS-DP":"35","x-tt-trace-id":"00-ca704ee909df08d24caed303c5830023-ca704ee909df08d2-01","Accept-Encoding":"gzip, deflate","X-Ladon":"o6yJRgFNh7KWdbUB5JWUqIpsscblrLn1PFu2GtETW0Vgx4Ra","X-Khronos":"1622599028","X-Argus":"kE5g4S38x4l2ENzEnF4ienTaMjPiDJ1Ms3WeEPQGz5el1ZhSWOKlzsQZ6AdyKUSGTNXM2Hsmlqkv5bCocQJSge7XnYPnvT5T5b7CJD3tJhS3z2YaBQSYP+1tWP9FCgi9rXzfCvi23lvNWAn7+XHGVDr1H3kOYXVLc565j70Rim4t927e+xjBsB+OsVJ+kLf+W4R8DNEytt2lglHJN3cXrkUCFd9ufHWxbmV8jbc7md9BLoHnh89yJO7Bx7fzpGG+kW4=","X-Gorgon":"8404000b00000981bb6f151760fde3bf4b47312937032a3e61cd"}')

    signurlArr.push('version_code=8.2.8&caid1=0f61b01661e02634d91fb569a77766fa&tma_jssdk_version=2.10.1.1&app_name=news_article_lite&vid=69EAF096-6415-47B0-AC83-0A9B721BC2B6&device_id=1917963847872823&channel=beta_version&resolution=750*1334&aid=35&ab_version=668904,2756063,668907,2738367,2756104,668903,2756098,1859936,668908,2756108,668905,2756072,668906,2756080&ab_feature=794527&review_flag=0&ab_group=794527&update_version_code=82806&openudid=dd1b1657380fb0389e6bed96fe3f54870f0d9f4c&cdid=2FFB5A90-CE6C-4B17-8460-793DBF8E58F7&idfv=69EAF096-6415-47B0-AC83-0A9B721BC2B6&ac=WIFI&os_version=14.4&ssmix=a&device_platform=iphone&caid2=&iid=3571673769710541&ab_client=a1,f2,f7,e1&device_type=iPhone%206S&idfa=9D5E9451-916A-4F1B-9251-3F48F0B2F853')
    signkeyArr.push('{"Host":"api3-normal-lf.toutiaoapi.com","Connection":"keep-alive","Accept":"application/json","x-Tt-Token":"002d2b4a381c6275b067aa8cf7adfb21ba014dc0baabf1bc8bcc099e8c932cb928388302262026d3974e91d451a14aa99e4b51a209be25dc1cf1ec7870a2067ae391f81e849edfc2fd5b7996a338cf116e0925dd22caf246b10052d3225fcdb606d21-1.0.1","Cookie":"gftoken=MzYyMjUzMjk4MXwxNjE1ODYxNTk2Njl8fDAGBgYGBgY; d_ticket=2a7d70e6327cf8408b2df52198a95b7c6a305; n_mh=9Jyn1kzvR6SHKdgrUdFj6aAWtmBnE0xjzxi9YnWLLQ4; odin_tt=6d9c408954e530401142b355a0290374a437a21217be3922310ab62e27865896cedd39ab50c0e4992c0a1ca1887f7557cd605383f1bc0f297f22c30349d9291b; i18next=score_task; install_id=3571673769710541; ttreq=1$c89f393986245cfa664c8d8b569d22385744747c; sessionid=2d2b4a381c6275b067aa8cf7adfb21ba; sessionid_ss=2d2b4a381c6275b067aa8cf7adfb21ba; sid_guard=2d2b4a381c6275b067aa8cf7adfb21ba%7C1622348797%7C5180950%7CThu%2C+29-Jul-2021+03%3A35%3A47+GMT; sid_tt=2d2b4a381c6275b067aa8cf7adfb21ba; uid_tt=4e1c31c13cad28fa8af44b3182ea8c6c; uid_tt_ss=4e1c31c13cad28fa8af44b3182ea8c6c","Content-Type":"application/json; encoding=utf-8","X-SS-Cookie":"sessionid=2d2b4a381c6275b067aa8cf7adfb21ba; sessionid_ss=2d2b4a381c6275b067aa8cf7adfb21ba; sid_guard=2d2b4a381c6275b067aa8cf7adfb21ba%7C1622348797%7C5180950%7CThu%2C+29-Jul-2021+03%3A35%3A47+GMT; sid_tt=2d2b4a381c6275b067aa8cf7adfb21ba; uid_tt=4e1c31c13cad28fa8af44b3182ea8c6c; uid_tt_ss=4e1c31c13cad28fa8af44b3182ea8c6c; install_id=3571673769710541; ttreq=1$c89f393986245cfa664c8d8b569d22385744747c; tt_webid=6960166200751949325; d_ticket=2a7d70e6327cf8408b2df52198a95b7c6a305; n_mh=9Jyn1kzvR6SHKdgrUdFj6aAWtmBnE0xjzxi9YnWLLQ4; odin_tt=6d9c408954e530401142b355a0290374a437a21217be3922310ab62e27865896cedd39ab50c0e4992c0a1ca1887f7557cd605383f1bc0f297f22c30349d9291b","tt-request-time":"1622598619615","User-Agent":"NewsLite 8.2.8 rv:8.2.8.06 (iPhone; iOS 14.4; zh_CN) Cronet","sdk-version":"2","x-tt-dt":"AAAZ7OTE7E3NTFXU2JTGT4JI6ZBVOV2E3I3RWNMDSAM37L2BGTN75QBLASGQOSMA6IS6ITKRQ7HVAOZF2C624SV2BAGYIA5TPSPGCRHRCQ7YWYJYCAVP4Z32BZWQCM2MOMZSXAABLNZU6N7UJXNDBBQ","passport-sdk-version":"5.13.7-rc.48","X-SS-STUB":"D41D8CD98F00B204E9800998ECF8427E","X-SS-DP":"35","x-tt-trace-id":"00-ca6a13590d6d060c1d8313726dc60023-ca6a13590d6d060c-01","Accept-Encoding":"gzip, deflate","X-Ladon":"9V9UAw7utnZFGM3GlO6oOXkR9E4U81mVy+N/ErJUIIaMOfzc","X-Khronos":"1622598619","X-Argus":"jD0LtvpJ2+ppJEwx3QT6aevjd/UDPc55Flwu9ep9paVzGCfbbQczNitRuDRQ3p2HPrOqJZdFt1rSx5ojvK1W4mBojUcIngwlsY4CaWSKH8MdnsISPQca4H6fi8PtvGgP0EuIaAc4T5VG6jJs25YGdywq5+C1uXLshwlBqvmxFbXVcVM+dNPtXIGNmxcBKNgRK4P4EH9FmDZk18nlXQWClTw6j1Q9chYrKE6/A7WiAMIjkgaiK4se9bSE7dY0uImvhZM=","X-Gorgon":"8404005200005e2316651879e6c92a3462f182fcc72e375b9b4a"}')
    farmurlArr.push('device_id=1917963847872823&device_platform=iphone&aid=35&os_version=14.4&update_version_code=82806&tma_jssdk_version=2.10.1.1&sid=&version_code=8.2.8&install_id=3571673769710541&app_name=news_article_lite&device_type=iPhone%206S&channel=beta_version&host_app_name=undefined&activity_id=&credit_type=&use_tomato=0&ios_new_version=false')
    farmkeyArr.push('{"Host":"api3-normal-lf.toutiaoapi.com","Connection":"keep-alive","Cookie":"sessionid=2d2b4a381c6275b067aa8cf7adfb21ba;sessionid_ss=2d2b4a381c6275b067aa8cf7adfb21ba;sid_guard=2d2b4a381c6275b067aa8cf7adfb21ba%7C1622348797%7C5180950%7CThu%2C+29-Jul-2021+03%3A35%3A47+GMT;sid_tt=2d2b4a381c6275b067aa8cf7adfb21ba;uid_tt=4e1c31c13cad28fa8af44b3182ea8c6c;uid_tt_ss=4e1c31c13cad28fa8af44b3182ea8c6c;install_id=3571673769710541;ttreq=1$c89f393986245cfa664c8d8b569d22385744747c;tt_webid=6960166200751949325;d_ticket=2a7d70e6327cf8408b2df52198a95b7c6a305;n_mh=9Jyn1kzvR6SHKdgrUdFj6aAWtmBnE0xjzxi9YnWLLQ4;odin_tt=6d9c408954e530401142b355a0290374a437a21217be3922310ab62e27865896cedd39ab50c0e4992c0a1ca1887f7557cd605383f1bc0f297f22c30349d9291b;i18next=feoffline;gftoken=MmQyYjRhMzgxY3wxNjE2NzM2NTY5OTN8fDAGBgYGBgY","x-Tt-Token":"002d2b4a381c6275b067aa8cf7adfb21ba014dc0baabf1bc8bcc099e8c932cb928388302262026d3974e91d451a14aa99e4b51a209be25dc1cf1ec7870a2067ae391f81e849edfc2fd5b7996a338cf116e0925dd22caf246b10052d3225fcdb606d21-1.0.1","X-SS-Cookie":"sessionid=2d2b4a381c6275b067aa8cf7adfb21ba; sessionid_ss=2d2b4a381c6275b067aa8cf7adfb21ba; sid_guard=2d2b4a381c6275b067aa8cf7adfb21ba%7C1622348797%7C5180950%7CThu%2C+29-Jul-2021+03%3A35%3A47+GMT; sid_tt=2d2b4a381c6275b067aa8cf7adfb21ba; uid_tt=4e1c31c13cad28fa8af44b3182ea8c6c; uid_tt_ss=4e1c31c13cad28fa8af44b3182ea8c6c; install_id=3571673769710541; ttreq=1$c89f393986245cfa664c8d8b569d22385744747c; tt_webid=6960166200751949325; i18next=feoffline; gftoken=MmQyYjRhMzgxY3wxNjE2NzM2NTY5OTN8fDAGBgYGBgY; d_ticket=2a7d70e6327cf8408b2df52198a95b7c6a305; n_mh=9Jyn1kzvR6SHKdgrUdFj6aAWtmBnE0xjzxi9YnWLLQ4; odin_tt=6d9c408954e530401142b355a0290374a437a21217be3922310ab62e27865896cedd39ab50c0e4992c0a1ca1887f7557cd605383f1bc0f297f22c30349d9291b","tt-request-time":"1622598626655","Content-Type":"application/json","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NewsArticle/8.2.8.06 JsSdk/2.0 NetType/WIFI (NewsLite 8.2.8 14.400000) NewsLite/8.2.8 Mobile ToutiaoMicroApp/2.10.1.1","sdk-version":"2","x-tt-dt":"AAAZ7OTE7E3NTFXU2JTGT4JI6ZBVOV2E3I3RWNMDSAM37L2BGTN75QBLASGQOSMA6IS6ITKRQ7HVAOZF2C624SV2BAGYIA5TPSPGCRHRCQ7YWYJYCAVP4Z32BZWQCM2MOMZSXAABLNZU6N7UJXNDBBQ","passport-sdk-version":"5.13.7-rc.48","X-SS-DP":"35","x-tt-trace-id":"00-ca6a2ed90d6d060c1d8313708aba0023-ca6a2ed90d6d060c-01","Referer":"https://tmaservice.developer.toutiao.com/?appid=tta539d3843a134f3d&version=1.2.26","Accept-Encoding":"gzip, deflate","X-Ladon":"WrkyO3S07gXAWGpHshykRLBj1ks2jt52GlSh3is/MgXRhPTD","X-Khronos":"1622598626","X-Argus":"+EdkFefv1f7pOJQ1tE0p3yOt8ReXqGfYvYGS4LIs55E9dggJRalzHBpmAIQUrU1l+97nKPzyEQs0YNxObm++sWNNrw/PBbaGdasLPu1PUQm7GZ1H/zRcESln1neuaPHy3xC1ww/CkDlpQcZ1zrgGI9Fe7i8zATUGSNpGgr5rig+bOkZ8hMZa8w/DAKDJ/hR35cdwQQengWOXHaEbxpajDEXLMaej6Eli+nHFsAPmun4zYReAy84as2zGC+vNjoGNJfQ=","X-Gorgon":"8404a0500000f7e672e993005b4ae705dfeb62dea07492b222e8"}')
    readurlArr.push('version_code=8.2.8&caid1=0f61b01661e02634d91fb569a77766fa&tma_jssdk_version=2.10.1.1&app_name=news_article_lite&vid=69EAF096-6415-47B0-AC83-0A9B721BC2B6&device_id=1917963847872823&channel=beta_version&resolution=750*1334&aid=35&ab_version=668904,2756063,668907,2738367,2756104,668903,2756098,1859936,668908,2756108,668905,2756072,668906,2756080&ab_feature=794527&review_flag=0&ab_group=794527&update_version_code=82806&openudid=dd1b1657380fb0389e6bed96fe3f54870f0d9f4c&cdid=2FFB5A90-CE6C-4B17-8460-793DBF8E58F7&idfv=69EAF096-6415-47B0-AC83-0A9B721BC2B6&ac=WIFI&os_version=14.4&ssmix=a&device_platform=iphone&caid2=&iid=3571673769710541&ab_client=a1,f2,f7,e1&device_type=iPhone%206S&idfa=9D5E9451-916A-4F1B-9251-3F48F0B2F853&group_id=6968812417987904007')
    readkeyArr.push('{"Host":"api3-normal-lf.toutiaoapi.com","Connection":"keep-alive","Cookie":"gftoken=MzYyMjUzMjk4MXwxNjE1ODYxNTk2Njl8fDAGBgYGBgY; d_ticket=2a7d70e6327cf8408b2df52198a95b7c6a305; n_mh=9Jyn1kzvR6SHKdgrUdFj6aAWtmBnE0xjzxi9YnWLLQ4; odin_tt=6d9c408954e530401142b355a0290374a437a21217be3922310ab62e27865896cedd39ab50c0e4992c0a1ca1887f7557cd605383f1bc0f297f22c30349d9291b; i18next=score_task; install_id=3571673769710541; ttreq=1$c89f393986245cfa664c8d8b569d22385744747c; sessionid=2d2b4a381c6275b067aa8cf7adfb21ba; sessionid_ss=2d2b4a381c6275b067aa8cf7adfb21ba; sid_guard=2d2b4a381c6275b067aa8cf7adfb21ba%7C1622348797%7C5180950%7CThu%2C+29-Jul-2021+03%3A35%3A47+GMT; sid_tt=2d2b4a381c6275b067aa8cf7adfb21ba; uid_tt=4e1c31c13cad28fa8af44b3182ea8c6c; uid_tt_ss=4e1c31c13cad28fa8af44b3182ea8c6c","x-Tt-Token":"002d2b4a381c6275b067aa8cf7adfb21ba014dc0baabf1bc8bcc099e8c932cb928388302262026d3974e91d451a14aa99e4b51a209be25dc1cf1ec7870a2067ae391f81e849edfc2fd5b7996a338cf116e0925dd22caf246b10052d3225fcdb606d21-1.0.1","X-SS-Cookie":"sessionid=2d2b4a381c6275b067aa8cf7adfb21ba; sessionid_ss=2d2b4a381c6275b067aa8cf7adfb21ba; sid_guard=2d2b4a381c6275b067aa8cf7adfb21ba%7C1622348797%7C5180950%7CThu%2C+29-Jul-2021+03%3A35%3A47+GMT; sid_tt=2d2b4a381c6275b067aa8cf7adfb21ba; uid_tt=4e1c31c13cad28fa8af44b3182ea8c6c; uid_tt_ss=4e1c31c13cad28fa8af44b3182ea8c6c; install_id=3571673769710541; ttreq=1$c89f393986245cfa664c8d8b569d22385744747c; tt_webid=6960166200751949325; d_ticket=2a7d70e6327cf8408b2df52198a95b7c6a305; n_mh=9Jyn1kzvR6SHKdgrUdFj6aAWtmBnE0xjzxi9YnWLLQ4; odin_tt=6d9c408954e530401142b355a0290374a437a21217be3922310ab62e27865896cedd39ab50c0e4992c0a1ca1887f7557cd605383f1bc0f297f22c30349d9291b","tt-request-time":"1622598646343","User-Agent":"NewsLite 8.2.8 rv:8.2.8.06 (iPhone; iOS 14.4; zh_CN) Cronet","sdk-version":"2","x-tt-dt":"AAAZ7OTE7E3NTFXU2JTGT4JI6ZBVOV2E3I3RWNMDSAM37L2BGTN75QBLASGQOSMA6IS6ITKRQ7HVAOZF2C624SV2BAGYIA5TPSPGCRHRCQ7YWYJYCAVP4Z32BZWQCM2MOMZSXAABLNZU6N7UJXNDBBQ","passport-sdk-version":"5.13.7-rc.48","X-SS-DP":"35","x-tt-trace-id":"00-ca6a7bc20d6d060c1d83137215400023-ca6a7bc20d6d060c-01","Accept-Encoding":"gzip, deflate","X-Ladon":"+5s3VJ0ddsqajy7a4iOaoO1+uzQEAwy5exC3gigi7omF4eL7","X-Khronos":"1622598646","X-Argus":"kgp7Ux5A3sLNLRzemBkoLHVr2OMZILjORK/pvLji43feNng4FmbFHqUWo4eYCK8lWOKgr9+KkzJiXFSIGeCO4rdhTTx43zZVqBoIsVy8/Sx6vHAobjisYCxpFkDC1XjqYJ8gpRM+LmGAMQLwcKgvjx/e0jKKypCXZcYDnE75oTJqbmXcrNwy9ov5qOlZaCGV01GBNUQeq2zB2SxIk7RRcUb3vXVs2G8YO2gb7Jkp0yvKHt+DI+1ulCVPPfh6qUCftLU=","X-Gorgon":"840420d700006f536ae979aaff282a2ba63bf230bfd84802cbc9"}')

 } else {
    signurlArr.push($.getdata('signurl'))
    signkeyArr.push($.getdata('signkey'))
    farmurlArr.push($.getdata('farmurl'))
    farmkeyArr.push($.getdata('farmkey'))
    readurlArr.push($.getdata('readurl'))
    readkeyArr.push($.getdata('readkey'))
    let jrttcount = ($.getval('jrttcount') || '1');
  for (let i = 2; i <= jrttcount; i++) {
    signurlArr.push($.getdata(`signurl${i}`))
    signkeyArr.push($.getdata(`signkey${i}`))
    farmurlArr.push($.getdata(`farmurl${i}`))
    farmkeyArr.push($.getdata(`farmkey${i}`))
    readurlArr.push($.getdata(`readurl${i}`))
    readkeyArr.push($.getdata(`readkey${i}`))
  }
}
!(async () => {
if (!signurlArr[0]) {
    $.msg($.name, '【提示】请先获取今日头条极速版一cookie')
    return;
  }
   console.log(`------------- 共${signurlArr.length}个账号----------------\n`)
  for (let i = 0; i < signurlArr.length; i++) {
    if (signurlArr[i]) {
      other = ''
      signurl = signurlArr[i];
      signkey = signkeyArr[i];
      farmurl = farmurlArr[i];
      farmkey = farmkeyArr[i];
      readurl = readurlArr[i];
      readkey = readkeyArr[i];
      $.index = i + 1;
      console.log(`\n开始【今日头条极速版${$.index}】`)
      await invite()
      await userinfo()
      await profit()
      await sign_in()
      await openbox()
      await reading()
      await farm_sign_in()
      await openfarmbox()
      await landwarer()
      await double_reward()
      await sleepstatus()
      await control()
      //await sleepstart()
      //await sleepstop()
      //await collectcoins(coins)
      await showmsg()
  }
 }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())
function GetCookie() {
 if($request&&$request.url.indexOf("info")>=0) {
  const farmurlVal = $request.url.split(`?`)[1]
    if (farmurlVal) $.setdata(farmurlVal,
`farmurl${$.idx}`)
    $.log(`[${jsname}] 获取farm请求: 成功,farmirlVal: ${farmurl}`)
    $.msg(`获取farmurl: 成功🎉`, ``)
   const jrttfarmKey = JSON.stringify($request.headers)
$.log(jrttfarmKey)
  if(jrttfarmKey)        $.setdata(jrttfarmKey,`farmkey${$.idx}`)
    $.log(`[${jsname + $.idx}] 获取farm请求: 成功,jrttfarmKey: ${farmkey}`)
    $.msg(`获取farmkey: 成功🎉`, ``)
}
  if($request&&$request.url.indexOf("sign_in")>=0) {
  const signurlVal = $request.url.split(`?`)[1]
    if (signurlVal) $.setdata(signurlVal,
`signurl${$.idx}`)
    $.log(`[${jsname + $.idx}] 获取sign请求: 成功,signurlVal: ${signurl}`)
    $.msg(`获取signurl: 成功🎉`, ``)
   const jrttsignKey = JSON.stringify($request.headers)
//$.log(jrttsignKey)
  if(jrttsignKey.indexOf("STUB")>=0)
    $.setdata(jrttsignKey,`signkey${$.idx}`)
    $.log(`[${jsname + $.idx}] 获取sign请求: 成功,jrttsignKey: ${signkey}`)
    $.msg(`获取signkey: 成功🎉`, ``)
}

if($request&&$request.url.indexOf("get_read_bonus")>=0) {
  const readurlVal = $request.url.split(`?`)[1]

  //const article = readurlVal.replace(/\d{3}$/,Math.floor(Math.random()*1000));
//article = article.replace(/\d{3}$/, (Math.random()*1e3).toFixed(0).padStart(3,"0"));

    if(article) $.setdata(article,
'article')
    if (readurlVal) $.setdata(readurlVal,
`readurl${$.idx}`)
    $.log(`[${jsname + $.idx}] 获取read请求: 成功,readurlVal: ${readurl}`)
    $.msg(`获取readurl: 成功🎉`, ``)
   const jrttreadKey = JSON.stringify($request.headers)
$.log(jrttreadKey)
  if(jrttreadKey)        $.setdata(jrttreadKey,`readkey${$.idx}`)
    $.log(`[${jsname}] 获取read请求: 成功,jrttreadKey: ${readkey}`)
    $.msg(`获取readkey: 成功🎉`, ``)
    }
  }
function sign_in() {
return new Promise((resolve, reject) => {
  let sign_inurl ={
    url: `https://api3-normal-c-lq.snssdk.com/score_task/v1/task/sign_in/?${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.post(sign_inurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
      if(result.err_no == 0) {
          other +='📣首页签到\n'
          other +='签到完成\n'
          other +='获得'+result.data.score_amount+'金币\n'
          other +='连续签到'+result.data.sign_times+'天\n'

}else{
          other +='📣首页签到\n'
          other +='今日已完成签到\n'
           }
          resolve()
    })
   })
  }

async function control(){
   if(collect == 0){
      await sleepstart();
   }
   if(collect == 1){
      await sleepstop();
      await collectcoins(coins);
   }
   if(collect == 2){
      //$.log('no opreation')
      other +='\n\n生前何必久睡，死后自会长眠\n'
   }
   if(collect == 3){
      await collectcoins(coins);
   }
   if(invited == 4 && invit== 1){
      await invitation();
   }
}
function invite() {
return new Promise((resolve, reject) => {
  let inviteurl ={
    url: `https://api3-normal-c-lq.snssdk.com/score_task/v1/user/new_tabs/?${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.get(inviteurl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs)$.log(data)
      if(result.data.section[10].key=='mine_input_code') {
          invited=4;
           }else{
          invited=5;
}
          resolve()
    })
   })
  }
function invitation() {
return new Promise((resolve, reject) => {
  let invitatonurl ={
    url: `https://api3-normal-c-lq.snssdk.com/luckycat/lite/v1/invite/post_invite_code/?_request_from=web&device_platform=ios&ac=4G&${signurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
    body: JSON.stringify({"invitecode" : "1980436898"})
}

   $.post(invitatonurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs)$.log(data)
          resolve()
    })
   })
  }

function userinfo() {
return new Promise((resolve, reject) => {
  let userinfourl ={
    url: `https://api3-normal-c-hl.snssdk.com/passport/account/info/v2/?${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.get(userinfourl,(error, response, data) =>{
     const result = JSON.parse(data)
      //$.log(signurl+'\n'+signkey+'\n'+farmurl+'\n'+farmkey+'\n'+readurl+'\n'+readkey)
       if(logs) $.log(data)
      if(result.message == 'success') {
          other +='🎉'+result.data.name+'\n'

}     else if(result.message == 'error'){
          other += '⚠️异常:'+result.data.description+'\n'
           }else{
          other += '⚠️异常'
}
          resolve()
    })
   })
  }

function profit() {
return new Promise((resolve, reject) => {
  let profiturl ={
    url: `https://api3-normal-c-lq.snssdk.com/score_task/v1/user/info/?${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.get(profiturl,(error, response, data) =>{
     const result = JSON.parse(data)
        if(logs)$.log(data)
      if(result.err_no == 0) {
          other +='🎉金币收益:'+result.data.score.amount+'\n🎉估计兑换现金:'+(result.data.score.amount/30000).toFixed(2)+'\n🎉'+'现金收益:'+result.data.cash.amount+'\n'
}else{
          other += '⚠️异常\n'
           }
          resolve()
    })
   })
  }

//文章阅读30篇每天
function reading() {
const articles = readurl.replace(/\d{3}$/,Math.floor(Math.random()*1000));
return new Promise((resolve, reject) => {
  let readurl ={
    url: `https://api3-normal-c-lq.snssdk.com/score_task/v1/task/get_read_bonus/?${articles}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.post(readurl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs)  $.log(data)
      other +='📣文章阅读\n'
      if(result.err_no == 0) {
          other +='阅读完成'
          other +='获得'+result.data.score_amount+'金币\n'
          other +='阅读进度'+result.data.icon_data.done_times+'/'+result.data.icon_data.read_limit+'\n'
      }
       if(result.err_no == 4){
          other +='文章阅读已达上限\n'
        }
       if(result.err_no == 1028){
          other +='这篇文章已经读过了\n'
        }
          resolve()
    })
   })
  }
//农场签到
function farm_sign_in() {
return new Promise((resolve, reject) => {
  let farm_sign_inurl ={
    url: `https://api3-normal-c-lq.snssdk.com/ttgame/game_farm/reward/sign_in?watch_ad=1&${signurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
}

   $.get(farm_sign_inurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
       other +='📣农场签到\n'
      if(result.status_code == 0) {
          other +='签到完成\n'

}else{
          other +=result.message+'\n'
           }
          resolve()
    })
   })
  }

function openbox() {
return new Promise((resolve, reject) => {
  let openboxurl ={
    url: `https://it-lq.snssdk.com/score_task/v1/task/open_treasure_box/?${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.post(openboxurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
       other +='📣首页宝箱\n'
      if(result.err_no == 0) {
        other += '开启成功'
        other += '获得金币'+result.data.score_amount+'个\n'
        }
      else{
         if(result.err_no == 9){
        other += result.err_tips+'\n'
        }else{
        other +="不在开宝箱时间\n"
           }
    }
          resolve()
    })
   })
  }


function openfarmbox() {
return new Promise((resolve, reject) => {
  let openfarmboxurl ={
    url: `https://api3-normal-c-lq.snssdk.com/ttgame/game_farm/box/open?${farmurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
}

   $.get(openfarmboxurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
       other +='📣农场宝箱\n'
      if(result.status_code == 0) {
        other += "第"+(5-result.data.box_num)+"开启成功"
        other += "还可以开启"+result.data.box_num+"个\n"
        }
      else if(result.status_code == 5003){
        other +="已全部开启\n"
        }
          resolve()
    })
   })
  }
function landwarer() {
return new Promise((resolve, reject) => {
  let landwaterurl ={
    url: `https://api3-normal-c-lq.snssdk.com/ttgame/game_farm/land_water?tentimes=0${farmurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
}

   $.get(landwaterurl,(error, response, data) =>{
     const result = JSON.parse(data)
        if(logs)$.log(data)
       other +='📣农场浇水\n'
      if(result.status_code == '0') {
        other += result.message+'\n'
        other += '💧水滴剩余'+result.data.water+'\n'
        }
      else{
        other +=result.message+'\n'
           }
          resolve()
    })
   })
  }
//done 这个离线奖励当宝箱全部开完后，需要进入农场再运行脚本，才能获取离线奖励，应该有一个判定，目前没有找到
//利用浇水激活进农场状态获取离线奖励，目前测试每天离线奖励足够开启农场5个宝箱，不需要做游戏加快生产，具体情况看后期是否需要，再考虑加做除虫，开地，三餐奖励
function double_reward() {
return new Promise((resolve, reject) => {
  let double_rewardurl ={
    url: `https://api3-normal-c-lq.snssdk.com/ttgame/game_farm/double_reward?watch_ad=1&${farmurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
}

   $.get(double_rewardurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
        other +='📣农场视频双倍离线奖励\n'
      if(result.status_code == 0) {
        other += '获得成功\n'
        }else if(result.status_code==5033){
            other += result.message+'\n'
          }
        else{
        other +='📣农场视频双倍离线奖励\n'
        other +="无离线产量可领取\n"
           }
          resolve()
    })
   })
  }


//睡觉状态
function sleepstatus() {
return new Promise((resolve, reject) => {
  let sleepstatusurl ={
    url: `https://api3-normal-c-lq.snssdk.com/luckycat/lite/v1/sleep/status/?_request_from=web&${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.get(sleepstatusurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs)$.log(data)
      if(result.err_no == 0) {
          other +='📣查询睡觉状态\n🎉查询'+result.err_tips+'\n'
           }
      if(result.data.sleeping == false){
          other +='当前状态:清醒着呢\n'
        if(hour >= 20||hour<=2){
           collect=0 //await sleepstart()
           }else{
if(result.data.history_amount!==0){
//即使没有满足3600也在睡觉12小时后停止，以防封号
         coins=result.data.history_amount
         collect =3 //collect coins
          }else{
         collect=2
}
}}
          else{
         other  +='当前状态:酣睡中,已睡'+parseInt(result.data.sleep_last_time/3600)+'小时'+parseInt((result.data.sleep_last_time%3600)/60)+'分钟'+parseInt((result.data.sleep_last_time%3600)%60)+'秒\n'
          other +='预计可得金币'+result.data.sleep_unexchanged_score+'\n'
          coins=result.data.sleep_unexchanged_score
         if(result.data.sleep_unexchanged_score == 3600 || parseInt(result.data.sleep_last_time/3600) >= 12){
//即使没有满足3600也在睡觉12小时后停止，以防封号
         collect =1 //collect coins&sleepstop
          }else{
         collect =2
}

     }
          resolve()
    })
   })
  }
//开始睡觉
function sleepstart() {
return new Promise((resolve, reject) => {
  let sleepstarturl ={
    url: `https://api3-normal-c-lq.snssdk.com/luckycat/lite/v1/sleep/start/?_request_from=web&${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.post(sleepstarturl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
      if(result.err_no == 0) {
          other +='📣开始睡觉\n该睡觉了，开始睡觉'+result.err_tips+'\n'

}     else if(result.err_no == 1052){
          other +='📣开始睡觉\n'+result.err_tips+'\n'
           }else{
          other += '📣开始睡觉:'+'⚠️异常'
}
          resolve()
    })
   })
  }
//停止睡觉
function sleepstop() {
return new Promise((resolve, reject) => {
  let sleepstopurl ={
    url: `https://api3-normal-c-lq.snssdk.com/luckycat/lite/v1/sleep/stop/?_request_from=web&${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.post(sleepstopurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
      if(result.err_no == 0) {
          other +='📣停止睡觉\n'+result.err_tips+'\n'

}     else if(result.err_no == 1052){
          other += '📣停止睡觉\n'+'还没开始睡觉\n'
           }else{
          other +='📣停止睡觉:'+'\n⚠️异常'
}
          resolve()
    })
   })
  }
//收取睡觉金币
function collectcoins(coins) {
return new Promise((resolve, reject) => {
  let collectcoinsurl ={
    url: `https://api3-normal-c-lq.snssdk.com/luckycat/lite/v1/sleep/done_task/?_request_from=web&device_platform=undefined&${signurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
    body :JSON.stringify({score_amount: coins}),

}

   $.post(collectcoinsurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs)$.log(data)
      if(result.err_no == 0) {
          other +='📣收取金币\n'+result.err_tips+'     获得金币:'+coins

}     else{
          other +='📣收取金币:'+'\n⚠️异常:'+result.err_tips+''
}
          resolve()
    })
   })
  }
async function showmsg() {
    if (tz == 1) {
      if ($.isNode()) {
        if ((hour == 12 && minute <= 20) || (hour == 23 && minute >= 40)) {
          await notify.sendNotify($.name, other)
        } else {
          $.log(other)
        }
      } else {
        if ((hour == 12 && minute <= 20) || (hour == 23 && minute >= 40)) {
          $.msg(jsname, '', other)
        } else {
          $.log(other)
        }
      }
    } else {
      $.log(other)
  }
}
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
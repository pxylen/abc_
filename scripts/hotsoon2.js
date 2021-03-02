/*
github：https://github.com/ZhiYi-N/script
boxjs：https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/ZhiYi-N.boxjs.json
转载留个名字，谢谢
作者：执意ZhiYi-N
目前包含：
签到
看广告获取金币
看视频获取金币
随机宝箱
脚本初成，非专业人士制作，欢迎指正
#签到详情获取signheader and signkey，一定要签到详情界面获取到的
#看广告获取adheader and adkey
#看一个视频获取readheader and readkey
[mitm]
hostname = *.snssdk.com
#圈x
[rewrite local]
https://(\w+-\w+||\w+).snssdk.com/luckycat/hotsoon/v1/task/done/daily_read_\d+m? url script-request-header https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon.js

https://(\w+-\w+||\w+).snssdk.com/luckycat/hotsoon/v1/task/done/draw_excitation_ad? url script-request-header https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon.js

https://(\w+-\w+||\w+).snssdk.com/luckycat/hotsoon/v1/task/sign_in_detail? script-request-header https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon.js

#loon
http-request ^https://(\w+-\w+||\w+).snssdk.com/luckycat/hotsoon/v1/task/done/daily_read_\d+m? script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon.js, requires-body=true, timeout=10, tag=hotsoonread

http-request https://(\w+-\w+||\w+).snssdk.com/luckycat/hotsoon/v1/task/done/draw_excitation_ad? script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon.js, requires-body=true, timeout=10, tag=hotsoonad

http-request https://(\w+-\w+||\w+).snssdk.com/luckycat/hotsoon/v1/task/sign_in_detail? script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon.js, requires-body=true, timeout=10, tag=hotsoonsign

#surge
hotsoonsign = type=http-request,pattern=^https://(\w+-\w+||\w+).snssdk.com/luckycat/hotsoon/v1/task/sign_in_detail?,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon.js,script-update-interval=0
hotsoonad = type=http-request,pattern=^https://(\w+-\w+||\w+).snssdk.com/luckycat/hotsoon/v1/task/done/draw_excitation_ad?,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon.js,script-update-interval=0
hotsoonread = type=http-request,pattern=https://(\w+-\w+||\w+).snssdk.com/luckycat/hotsoon/v1/task/done/daily_read_\d+m?,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon.js,script-update-interval=0

*/


const jsname='火山视频极速版_151'
const $ = Env(jsname)
const notify = $.isNode() ?require('./sendNotify') : '';
$.idx = ($.idx = ($.getval("hotsooncount") || "1") - 1) > 0 ? `${$.idx + 1}` : ""; // 账号扩展字符
const hotsoonsignheaderArr = [],hotsoonsignkeyArr=[]
const hotsoonadheaderArr = [],hotsoonadkeyArr=[]
const hotsoonreadheaderArr = [],hotsoonreadkeyArr=[]
let hotsoonsignheader = $.getdata('hotsoonsignheader')
let hotsoonsigncookie = $.getdata('hotsoonsigncookie')

let hotsoonadheader = $.getdata('hotsoonadheader')
let hotsoonadkey = $.getdata('hotsoonadkey')
let no = 1;
let hotsoonreadheader = $.getdata('hotsoonreadheader')
let hotsoonreadkey = $.getdata('hotsoonreadkey')
let hotsoonaccount = ($.getval('hotsoonaccount') || 0);
let tz = ($.getval('tz') || '0');//0关闭通知，1默认开启
const logs =0;//0为关闭日志，1为开启
var hour=''
var minute=''
let cash = 0;
let coins;

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
//  if (process.env.HOTSOONSIGNHEADER && process.env.HOTSOONSIGNHEADER.indexOf('#') > -1) {
//   hotsoonsignheader = process.env.HOTSOONSIGNHEADER.split('#');
//   console.log(`您选择的是用"#"隔开\n`)
//  }
//  else if (process.env.HOTSOONSIGNHEADER && process.env.HOTSOONSIGNHEADER.indexOf('\n') > -1) {
//   hotsoonsignheader = process.env.HOTSOONSIGNHEADER.split('\n');
//   console.log(`您选择的是用换行隔开\n`)
//  } else {
//   hotsoonsignheader = process.env.HOTSOONSIGNHEADER.split()
//  };
//  if (process.env.HOTSOONSIGNKEY&& process.env.HOTSOONSIGNKEY.indexOf('#') > -1) {
//   hotsoonsignkey = process.env.HOTSOONSIGNKEY.split('#');
//  }
//  else if (process.env.HOTSOONSIGNKEY && process.env.HOTSOONSIGNKEY.split('\n').length > 0) {
//   hotsoonsignkey = process.env.HOTSOONSIGNKEY.split('\n');
//  } else  {
//   hotsignkey = process.env.HOTSOONSIGNKEY.split()
//  };
////AD
//if (process.env.HOTSOONADHEADER && process.env.HOTSOONADHEADER.indexOf('#') > -1) {
//   hotsoonadheader = process.env.HOTSOONADHEADER.split('#');
//   console.log(`您选择的是用"#"隔开\n`)
//  }
//  else if (process.env.HOTSOONADHEADER && process.env.HOTSOONADHEADER.indexOf('\n') > -1) {
//   hotsoonadheader = process.env.HOTSOONADHEADER.split('\n');
//   console.log(`您选择的是用换行隔开\n`)
//  } else {
//   hotsoonadheader = process.env.HOTSOONADHEADER.split()
//  };
//  if (process.env. HOTSOONADKEY&& process.env.HOTSOONADKEY.indexOf('#') > -1) {
//   hotsoonadkey = process.env.HOTSOONADKEY.split('#');
//  }
//  else if (process.env.HOTSOONADKEY && process.env.HOTSOONADKEY.split('\n').length > 0) {
//   hotsoonadkey = process.env.HOTSOONADKEY.split('\n');
//  } else  {
//   hotsoonadkey = process.env.HOTSOONADKEY.split()
//  };
////video
//if (process.env.HOTSOONREADHEADER && process.env.HOTSOONREADHEADER.indexOf('#') > -1) {
//   hotsoonreadheader = process.env.HOTSOONREADHEADER.split('#');
//   console.log(`您选择的是用"#"隔开\n`)
//  }
//  else if (process.env.HOTSOONREADHEADER && process.env.HOTSOONREADHEADER.indexOf('\n') > -1) {
//   hotsoonreadheader = process.env.HOTSOONREADHEADER.split('\n');
//   console.log(`您选择的是用换行隔开\n`)
//  } else {
//   hotsoonreadheader = process.env.HOTSOONREADHEADER.split()
//  };
//  if (process.env. HOTSOONREADKEY&& process.env.HOTSOONREADKEY.indexOf('#') > -1) {
//   hotsoonreadkey = process.env.HOTSOONREADKEY.split('#');
//  }
//  else if (process.env.HOTSOONREADKEY && process.env.HOTSOONREADKEY.split('\n').length > 0) {
//   hotsoonreadkey = process.env.HOTSOONREADKEY.split('\n');
//  } else  {
//   hotsoonreadkey = process.env.HOTSOONREADKEY.split()
//  };
////sign
//  Object.keys(hotsoonsignheader).forEach((item) => {
//        if (hotsoonsignheader[item]) {
//          hotsoonsignheaderArr.push(hotsoonsignheader[item])
//        }
//    });
//    Object.keys(hotsoonsignkey).forEach((item) => {
//        if (hotsoonsignkey[item]) {
//          hotsoonsignkeyArr.push(hotsoonsignkey[item])
//        }
//    });
////step
//Object.keys(hotsoonadheader).forEach((item) => {
//        if (hotsoonadheader[item]) {
//          hotsoonadheaderArr.push(hotsoonadheader[item])
//        }
//    });
//    Object.keys(hotsoonadkey).forEach((item) => {
//        if (hotsoonadkey[item]) {
//          hotsoonadkeyArr.push(hotsoonadkey[item])
//        }
//    });
////read
//Object.keys(hotsoonreadheader).forEach((item) => {
//        if (hotsoonreadheader[item]) {
//          hotsoonreadheaderArr.push(hotsoonreadheader[item])
//        }
//    });
//    Object.keys(hotsoonreadkey).forEach((item) => {
//        if (hotsoonreadkey[item]) {
//          hotsoonreadkeyArr.push(hotsoonreadkey[item])
//        }
//    });

  hotsoonsignheaderArr.push('version_code=7.6.4&app_name=live_stream_lite&vid=DF9365D8-4BDB-4CEB-AE89-F25308471FFC&device_id=1917963847872823&new_nav=0&channel=App%20Store&aid=1350&screen_width=750&client_request_id=7dd258cc607f5b5a132445c6e109e7ff&openudid=4eabf4eb1a2ef73c6639584082c0cc51a5f92d1f&live_sdk_version=7.6.4&update_version_code=7642&os_api=18&ws_status=CLOSED&ac=WIFI&mccmnc=&os_version=14.4&client_version_code=764&device_platform=iphone&iid=3800329006880295&device_type=iPhone8,1&idfa=15AD1997-C544-4409-851A-35E97E7451AF')
  hotsoonsignkeyArr.push('{"Cookie":"passport_csrf_token=e1bc2ce3d7e004607acb4d3e33f5a35a; passport_csrf_token_default=e1bc2ce3d7e004607acb4d3e33f5a35a; d_ticket=4f4fd8968f8d56d007c9fa789b6fb8656a305; odin_tt=2c7683d83d447dbe5fb403e7cd4bd2814d906134e522e2718a20a3c9eb837040aba40b109d12b87db833b17a9bbf8f12b4ed97f2a16c181349a5c6f8011e880e; n_mh=9Jyn1kzvR6SHKdgrUdFj6aAWtmBnE0xjzxi9YnWLLQ4; sid_guard=0b56a8f7cd19b5bac650e1ceb4765f29%7C1611732198%7C5184000%7CSun%2C+28-Mar-2021+07%3A23%3A18+GMT; uid_tt=667cb6e6763f70192fa4958b6ebba097; uid_tt_ss=667cb6e6763f70192fa4958b6ebba097; sid_tt=0b56a8f7cd19b5bac650e1ceb4765f29; sessionid=0b56a8f7cd19b5bac650e1ceb4765f29; sessionid_ss=0b56a8f7cd19b5bac650e1ceb4765f29; excgd=20210129; install_id=3800329006880295; ttreq=1$b4149f23dd3126c8c78fea5b17713123ac9d5e09","Connection":"keep-alive","x-Tt-Token":"000b56a8f7cd19b5bac650e1ceb4765f29009010a72b8217a66d9c5f768568cb4cb10779abfd9d30f9565a9d26e3c4f9ffc4dc4d925235b01ce3af6775583350e63b5e8684ed642c6bbbffeedc7313d07afe785319e56147f9853bab8e4200b923b35-1.0.1","X-Gorgon":"8402c0ab0000821d79234d1df6db8089bdd9d4e34935c07cb878","X-Khronos":"1611890915","Host":"ib.snssdk.com","x-tt-trace-id":"00-4c2f78630d6d060c1d83137334b60546-4c2f78630d6d060c-01","User-Agent":"HotsoonLite 7.6.4 rv:7642 (iPhone; iOS 14.4; zh_CN) Cronet","sdk-version":"1","Accept-Encoding":"gzip, deflate"}')
  hotsoonadheaderArr.push('version_code=7.6.2&app_name=live_stream_lite&vid=75D271D7-7FB1-4730-9BC7-9A06B3775577&device_id=756105817104215&new_nav=0&channel=App%20Store&aid=1350&ab_group=1568501&screen_width=750&client_request_id=203e7bfc71b6a4247625e50733ac3a77&openudid=2fc0d2774bf0ce6b4957c1992855fc66c054697c&live_sdk_version=7.6.2&update_version_code=7621&os_api=18&ws_status=CONNECTED&ac=WIFI&mccmnc=&os_version=12.2&client_version_code=762&device_platform=iphone&iid=704101862878590&device_type=iPhone8,1&idfa=D51C144F-7F7C-4553-A617-DC8018C5573F')
  hotsoonadkeyArr.push('{"Content-Type":"application/json; encoding=utf-8","x-Tt-Token":"00e3da51150747a1b8892a68f3fdcaa2c105513e6d13eefff94e503cb99e7db16325c428dc273a76bfee5361cec3e144f0082f5322ff6f3a5098335652a5320006c5a837fed70a82f3db49adf6301266aceab7a7e03ef92f6e130661462ecf8d9cf41-1.0.1","x-tt-trace-id":"00-1ea232990d2afac9aa41f57026c70546-1ea232990d2afac9-01","Accept":"application/json","sdk-version":"1","Host":"ib-hl.snssdk.com","Accept-Encoding":"gzip, deflate","X-Gorgon":"840280c500000dcb5c8a3e0745102dba55d0934ac11fc8491a75","X-SS-Cookie":"d_ticket=33b70eede5af3daca931787baca46a04906e2; n_mh=9Jyn1kzvR6SHKdgrUdFj6aAWtmBnE0xjzxi9YnWLLQ4; odin_tt=12c9fcf2890c9b6fc8807ed86b2935507cc174bb889d8359e1a4f8e7a098dcaf4b0c8ed2df16c9cb1b42f03255926401073eb02d8ac3ecab2a47d63c40d4e677; sessionid=e3da51150747a1b8892a68f3fdcaa2c1; sessionid_ss=e3da51150747a1b8892a68f3fdcaa2c1; sid_guard=e3da51150747a1b8892a68f3fdcaa2c1%7C1611126481%7C5184000%7CSun%2C+21-Mar-2021+07%3A08%3A01+GMT; sid_tt=e3da51150747a1b8892a68f3fdcaa2c1; uid_tt=5557855586c0870c9ee6b3fcd61941fc; uid_tt_ss=5557855586c0870c9ee6b3fcd61941fc; passport_csrf_token=57903fa5b93e1d0d26f84ec3e8efa0ad; passport_csrf_token_default=57903fa5b93e1d0d26f84ec3e8efa0ad; install_id=704101862878590; ttreq=1$83af4ec93f9dd0df293cf53df7a0fe487ee87904","tt-request-time":"1611126681890","User-Agent":"HotsoonLite 7.6.2 rv:7621 (iPhone; iOS 12.2; zh_CN) Cronet","Content-Length":"4","Connection":"keep-alive","X-SS-STUB":"22E67CC3AE278CB47BCA0058382D3330","Cookie":"install_id=704101862878590; ttreq=1$83af4ec93f9dd0df293cf53df7a0fe487ee87904; passport_csrf_token=57903fa5b93e1d0d26f84ec3e8efa0ad; passport_csrf_token_default=57903fa5b93e1d0d26f84ec3e8efa0ad; d_ticket=33b70eede5af3daca931787baca46a04906e2; n_mh=9Jyn1kzvR6SHKdgrUdFj6aAWtmBnE0xjzxi9YnWLLQ4; odin_tt=12c9fcf2890c9b6fc8807ed86b2935507cc174bb889d8359e1a4f8e7a098dcaf4b0c8ed2df16c9cb1b42f03255926401073eb02d8ac3ecab2a47d63c40d4e677; sessionid=e3da51150747a1b8892a68f3fdcaa2c1; sessionid_ss=e3da51150747a1b8892a68f3fdcaa2c1; sid_guard=e3da51150747a1b8892a68f3fdcaa2c1%7C1611126481%7C5184000%7CSun%2C+21-Mar-2021+07%3A08%3A01+GMT; sid_tt=e3da51150747a1b8892a68f3fdcaa2c1; uid_tt=5557855586c0870c9ee6b3fcd61941fc; uid_tt_ss=5557855586c0870c9ee6b3fcd61941fc","X-Khronos":"1611126681"}')
  hotsoonreadheaderArr.push('version_code=7.6.4&app_name=live_stream_lite&vid=DF9365D8-4BDB-4CEB-AE89-F25308471FFC&device_id=1917963847872823&new_nav=0&channel=App%20Store&aid=1350&screen_width=750&client_request_id=1c10887241f51be0fe8f59d4fc7a6cb8&openudid=4eabf4eb1a2ef73c6639584082c0cc51a5f92d1f&live_sdk_version=7.6.4&update_version_code=7642&os_api=18&ws_status=CONNECTED&ac=WIFI&mccmnc=&os_version=14.4&client_version_code=764&device_platform=iphone&iid=3800329006880295&device_type=iPhone8,1&idfa=15AD1997-C544-4409-851A-35E97E7451AF')
  hotsoonreadkeyArr.push('{"Content-Type":"application/json; encoding=utf-8","x-Tt-Token":"000b56a8f7cd19b5bac650e1ceb4765f29009010a72b8217a66d9c5f768568cb4cb10779abfd9d30f9565a9d26e3c4f9ffc4dc4d925235b01ce3af6775583350e63b5e8684ed642c6bbbffeedc7313d07afe785319e56147f9853bab8e4200b923b35-1.0.1","x-tt-trace-id":"00-4c2fbaea0d6d060c1d831370d5b80546-4c2fbaea0d6d060c-01","Accept":"application/json","sdk-version":"1","Host":"ib.snssdk.com","Accept-Encoding":"gzip, deflate","X-Gorgon":"8402809000009b42e4dcdcb2063b50b20296f991c909f1afea15","X-SS-Cookie":"install_id=3800329006880295; ttreq=1$b4149f23dd3126c8c78fea5b17713123ac9d5e09; excgd=20210129; d_ticket=4f4fd8968f8d56d007c9fa789b6fb8656a305; n_mh=9Jyn1kzvR6SHKdgrUdFj6aAWtmBnE0xjzxi9YnWLLQ4; odin_tt=2c7683d83d447dbe5fb403e7cd4bd2814d906134e522e2718a20a3c9eb837040aba40b109d12b87db833b17a9bbf8f12b4ed97f2a16c181349a5c6f8011e880e; sessionid=0b56a8f7cd19b5bac650e1ceb4765f29; sessionid_ss=0b56a8f7cd19b5bac650e1ceb4765f29; sid_guard=0b56a8f7cd19b5bac650e1ceb4765f29%7C1611732198%7C5184000%7CSun%2C+28-Mar-2021+07%3A23%3A18+GMT; sid_tt=0b56a8f7cd19b5bac650e1ceb4765f29; uid_tt=667cb6e6763f70192fa4958b6ebba097; uid_tt_ss=667cb6e6763f70192fa4958b6ebba097; passport_csrf_token=e1bc2ce3d7e004607acb4d3e33f5a35a; passport_csrf_token_default=e1bc2ce3d7e004607acb4d3e33f5a35a","tt-request-time":"1611890932081","User-Agent":"HotsoonLite 7.6.4 rv:7642 (iPhone; iOS 14.4; zh_CN) Cronet","Content-Length":"0","Connection":"keep-alive","X-SS-STUB":"D41D8CD98F00B204E9800998ECF8427E","Cookie":"passport_csrf_token=e1bc2ce3d7e004607acb4d3e33f5a35a; passport_csrf_token_default=e1bc2ce3d7e004607acb4d3e33f5a35a; d_ticket=4f4fd8968f8d56d007c9fa789b6fb8656a305; odin_tt=2c7683d83d447dbe5fb403e7cd4bd2814d906134e522e2718a20a3c9eb837040aba40b109d12b87db833b17a9bbf8f12b4ed97f2a16c181349a5c6f8011e880e; n_mh=9Jyn1kzvR6SHKdgrUdFj6aAWtmBnE0xjzxi9YnWLLQ4; sid_guard=0b56a8f7cd19b5bac650e1ceb4765f29%7C1611732198%7C5184000%7CSun%2C+28-Mar-2021+07%3A23%3A18+GMT; uid_tt=667cb6e6763f70192fa4958b6ebba097; uid_tt_ss=667cb6e6763f70192fa4958b6ebba097; sid_tt=0b56a8f7cd19b5bac650e1ceb4765f29; sessionid=0b56a8f7cd19b5bac650e1ceb4765f29; sessionid_ss=0b56a8f7cd19b5bac650e1ceb4765f29; excgd=20210129; install_id=3800329006880295; ttreq=1$b4149f23dd3126c8c78fea5b17713123ac9d5e09","X-Khronos":"1611890932"}')

    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
 } else {

  hotsoonsignheaderArr.push('version_code=7.6.4&app_name=live_stream_lite&vid=DF9365D8-4BDB-4CEB-AE89-F25308471FFC&device_id=1917963847872823&new_nav=0&channel=App%20Store&aid=1350&screen_width=750&client_request_id=7dd258cc607f5b5a132445c6e109e7ff&openudid=4eabf4eb1a2ef73c6639584082c0cc51a5f92d1f&live_sdk_version=7.6.4&update_version_code=7642&os_api=18&ws_status=CLOSED&ac=WIFI&mccmnc=&os_version=14.4&client_version_code=764&device_platform=iphone&iid=3800329006880295&device_type=iPhone8,1&idfa=15AD1997-C544-4409-851A-35E97E7451AF')
  hotsoonsignkeyArr.push('{"Cookie":"passport_csrf_token=e1bc2ce3d7e004607acb4d3e33f5a35a; passport_csrf_token_default=e1bc2ce3d7e004607acb4d3e33f5a35a; d_ticket=4f4fd8968f8d56d007c9fa789b6fb8656a305; odin_tt=2c7683d83d447dbe5fb403e7cd4bd2814d906134e522e2718a20a3c9eb837040aba40b109d12b87db833b17a9bbf8f12b4ed97f2a16c181349a5c6f8011e880e; n_mh=9Jyn1kzvR6SHKdgrUdFj6aAWtmBnE0xjzxi9YnWLLQ4; sid_guard=0b56a8f7cd19b5bac650e1ceb4765f29%7C1611732198%7C5184000%7CSun%2C+28-Mar-2021+07%3A23%3A18+GMT; uid_tt=667cb6e6763f70192fa4958b6ebba097; uid_tt_ss=667cb6e6763f70192fa4958b6ebba097; sid_tt=0b56a8f7cd19b5bac650e1ceb4765f29; sessionid=0b56a8f7cd19b5bac650e1ceb4765f29; sessionid_ss=0b56a8f7cd19b5bac650e1ceb4765f29; excgd=20210129; install_id=3800329006880295; ttreq=1$b4149f23dd3126c8c78fea5b17713123ac9d5e09","Connection":"keep-alive","x-Tt-Token":"000b56a8f7cd19b5bac650e1ceb4765f29009010a72b8217a66d9c5f768568cb4cb10779abfd9d30f9565a9d26e3c4f9ffc4dc4d925235b01ce3af6775583350e63b5e8684ed642c6bbbffeedc7313d07afe785319e56147f9853bab8e4200b923b35-1.0.1","X-Gorgon":"8402c0ab0000821d79234d1df6db8089bdd9d4e34935c07cb878","X-Khronos":"1611890915","Host":"ib.snssdk.com","x-tt-trace-id":"00-4c2f78630d6d060c1d83137334b60546-4c2f78630d6d060c-01","User-Agent":"HotsoonLite 7.6.4 rv:7642 (iPhone; iOS 14.4; zh_CN) Cronet","sdk-version":"1","Accept-Encoding":"gzip, deflate"}')
  hotsoonadheaderArr.push('version_code=7.6.2&app_name=live_stream_lite&vid=75D271D7-7FB1-4730-9BC7-9A06B3775577&device_id=756105817104215&new_nav=0&channel=App%20Store&aid=1350&ab_group=1568501&screen_width=750&client_request_id=203e7bfc71b6a4247625e50733ac3a77&openudid=2fc0d2774bf0ce6b4957c1992855fc66c054697c&live_sdk_version=7.6.2&update_version_code=7621&os_api=18&ws_status=CONNECTED&ac=WIFI&mccmnc=&os_version=12.2&client_version_code=762&device_platform=iphone&iid=704101862878590&device_type=iPhone8,1&idfa=D51C144F-7F7C-4553-A617-DC8018C5573F')
  hotsoonadkeyArr.push('{"Content-Type":"application/json; encoding=utf-8","x-Tt-Token":"00e3da51150747a1b8892a68f3fdcaa2c105513e6d13eefff94e503cb99e7db16325c428dc273a76bfee5361cec3e144f0082f5322ff6f3a5098335652a5320006c5a837fed70a82f3db49adf6301266aceab7a7e03ef92f6e130661462ecf8d9cf41-1.0.1","x-tt-trace-id":"00-1ea232990d2afac9aa41f57026c70546-1ea232990d2afac9-01","Accept":"application/json","sdk-version":"1","Host":"ib-hl.snssdk.com","Accept-Encoding":"gzip, deflate","X-Gorgon":"840280c500000dcb5c8a3e0745102dba55d0934ac11fc8491a75","X-SS-Cookie":"d_ticket=33b70eede5af3daca931787baca46a04906e2; n_mh=9Jyn1kzvR6SHKdgrUdFj6aAWtmBnE0xjzxi9YnWLLQ4; odin_tt=12c9fcf2890c9b6fc8807ed86b2935507cc174bb889d8359e1a4f8e7a098dcaf4b0c8ed2df16c9cb1b42f03255926401073eb02d8ac3ecab2a47d63c40d4e677; sessionid=e3da51150747a1b8892a68f3fdcaa2c1; sessionid_ss=e3da51150747a1b8892a68f3fdcaa2c1; sid_guard=e3da51150747a1b8892a68f3fdcaa2c1%7C1611126481%7C5184000%7CSun%2C+21-Mar-2021+07%3A08%3A01+GMT; sid_tt=e3da51150747a1b8892a68f3fdcaa2c1; uid_tt=5557855586c0870c9ee6b3fcd61941fc; uid_tt_ss=5557855586c0870c9ee6b3fcd61941fc; passport_csrf_token=57903fa5b93e1d0d26f84ec3e8efa0ad; passport_csrf_token_default=57903fa5b93e1d0d26f84ec3e8efa0ad; install_id=704101862878590; ttreq=1$83af4ec93f9dd0df293cf53df7a0fe487ee87904","tt-request-time":"1611126681890","User-Agent":"HotsoonLite 7.6.2 rv:7621 (iPhone; iOS 12.2; zh_CN) Cronet","Content-Length":"4","Connection":"keep-alive","X-SS-STUB":"22E67CC3AE278CB47BCA0058382D3330","Cookie":"install_id=704101862878590; ttreq=1$83af4ec93f9dd0df293cf53df7a0fe487ee87904; passport_csrf_token=57903fa5b93e1d0d26f84ec3e8efa0ad; passport_csrf_token_default=57903fa5b93e1d0d26f84ec3e8efa0ad; d_ticket=33b70eede5af3daca931787baca46a04906e2; n_mh=9Jyn1kzvR6SHKdgrUdFj6aAWtmBnE0xjzxi9YnWLLQ4; odin_tt=12c9fcf2890c9b6fc8807ed86b2935507cc174bb889d8359e1a4f8e7a098dcaf4b0c8ed2df16c9cb1b42f03255926401073eb02d8ac3ecab2a47d63c40d4e677; sessionid=e3da51150747a1b8892a68f3fdcaa2c1; sessionid_ss=e3da51150747a1b8892a68f3fdcaa2c1; sid_guard=e3da51150747a1b8892a68f3fdcaa2c1%7C1611126481%7C5184000%7CSun%2C+21-Mar-2021+07%3A08%3A01+GMT; sid_tt=e3da51150747a1b8892a68f3fdcaa2c1; uid_tt=5557855586c0870c9ee6b3fcd61941fc; uid_tt_ss=5557855586c0870c9ee6b3fcd61941fc","X-Khronos":"1611126681"}')
  hotsoonreadheaderArr.push('version_code=7.6.4&app_name=live_stream_lite&vid=DF9365D8-4BDB-4CEB-AE89-F25308471FFC&device_id=1917963847872823&new_nav=0&channel=App%20Store&aid=1350&screen_width=750&client_request_id=1c10887241f51be0fe8f59d4fc7a6cb8&openudid=4eabf4eb1a2ef73c6639584082c0cc51a5f92d1f&live_sdk_version=7.6.4&update_version_code=7642&os_api=18&ws_status=CONNECTED&ac=WIFI&mccmnc=&os_version=14.4&client_version_code=764&device_platform=iphone&iid=3800329006880295&device_type=iPhone8,1&idfa=15AD1997-C544-4409-851A-35E97E7451AF')
  hotsoonreadkeyArr.push('{"Content-Type":"application/json; encoding=utf-8","x-Tt-Token":"000b56a8f7cd19b5bac650e1ceb4765f29009010a72b8217a66d9c5f768568cb4cb10779abfd9d30f9565a9d26e3c4f9ffc4dc4d925235b01ce3af6775583350e63b5e8684ed642c6bbbffeedc7313d07afe785319e56147f9853bab8e4200b923b35-1.0.1","x-tt-trace-id":"00-4c2fbaea0d6d060c1d831370d5b80546-4c2fbaea0d6d060c-01","Accept":"application/json","sdk-version":"1","Host":"ib.snssdk.com","Accept-Encoding":"gzip, deflate","X-Gorgon":"8402809000009b42e4dcdcb2063b50b20296f991c909f1afea15","X-SS-Cookie":"install_id=3800329006880295; ttreq=1$b4149f23dd3126c8c78fea5b17713123ac9d5e09; excgd=20210129; d_ticket=4f4fd8968f8d56d007c9fa789b6fb8656a305; n_mh=9Jyn1kzvR6SHKdgrUdFj6aAWtmBnE0xjzxi9YnWLLQ4; odin_tt=2c7683d83d447dbe5fb403e7cd4bd2814d906134e522e2718a20a3c9eb837040aba40b109d12b87db833b17a9bbf8f12b4ed97f2a16c181349a5c6f8011e880e; sessionid=0b56a8f7cd19b5bac650e1ceb4765f29; sessionid_ss=0b56a8f7cd19b5bac650e1ceb4765f29; sid_guard=0b56a8f7cd19b5bac650e1ceb4765f29%7C1611732198%7C5184000%7CSun%2C+28-Mar-2021+07%3A23%3A18+GMT; sid_tt=0b56a8f7cd19b5bac650e1ceb4765f29; uid_tt=667cb6e6763f70192fa4958b6ebba097; uid_tt_ss=667cb6e6763f70192fa4958b6ebba097; passport_csrf_token=e1bc2ce3d7e004607acb4d3e33f5a35a; passport_csrf_token_default=e1bc2ce3d7e004607acb4d3e33f5a35a","tt-request-time":"1611890932081","User-Agent":"HotsoonLite 7.6.4 rv:7642 (iPhone; iOS 14.4; zh_CN) Cronet","Content-Length":"0","Connection":"keep-alive","X-SS-STUB":"D41D8CD98F00B204E9800998ECF8427E","Cookie":"passport_csrf_token=e1bc2ce3d7e004607acb4d3e33f5a35a; passport_csrf_token_default=e1bc2ce3d7e004607acb4d3e33f5a35a; d_ticket=4f4fd8968f8d56d007c9fa789b6fb8656a305; odin_tt=2c7683d83d447dbe5fb403e7cd4bd2814d906134e522e2718a20a3c9eb837040aba40b109d12b87db833b17a9bbf8f12b4ed97f2a16c181349a5c6f8011e880e; n_mh=9Jyn1kzvR6SHKdgrUdFj6aAWtmBnE0xjzxi9YnWLLQ4; sid_guard=0b56a8f7cd19b5bac650e1ceb4765f29%7C1611732198%7C5184000%7CSun%2C+28-Mar-2021+07%3A23%3A18+GMT; uid_tt=667cb6e6763f70192fa4958b6ebba097; uid_tt_ss=667cb6e6763f70192fa4958b6ebba097; sid_tt=0b56a8f7cd19b5bac650e1ceb4765f29; sessionid=0b56a8f7cd19b5bac650e1ceb4765f29; sessionid_ss=0b56a8f7cd19b5bac650e1ceb4765f29; excgd=20210129; install_id=3800329006880295; ttreq=1$b4149f23dd3126c8c78fea5b17713123ac9d5e09","X-Khronos":"1611890932"}')


//    hotsoonsignheaderArr.push($.getdata('hotsoonsignheader'))
//    hotsoonsignkeyArr.push($.getdata('hotsoonsignkey'))
//    hotsoonadheaderArr.push($.getdata('hotsoonadheader'))
//    hotsoonadkeyArr.push($.getdata('hotsoonadkey'))
//    hotsoonreadheaderArr.push($.getdata('hotsoonreadheader'))
//    hotsoonreadkeyArr.push($.getdata('hotsoonreadkey'))
//    let hotsooncount = ($.getval('hotsooncount') || '1');
//  for (let i = 2; i <= hotsooncount; i++) {
//    hotsoonsignheaderArr.push($.getdata(`hotsoonsignheader${i}`))
//    hotsoonsignkeyArr.push($.getdata(`hotsoonsignkey${i}`))
//    hotsoonadheaderArr.push($.getdata(`hotsoonadheader${i}`))
//    hotsoonadkeyArr.push($.getdata(`hotsoonadkey${i}`))
//    hotsoonreadheaderArr.push($.getdata(`hotsoonreadheader${i}`))
//    hotsoonreadkeyArr.push($.getdata(`hotsoonreadkey${i}`))
//  }
}
!(async () => {
if (!hotsoonsignheaderArr[0]) {
    $.msg($.name, '【提示】请先获取火山视频极速版一cookie')
    return;
  }
   console.log(`------------- 共${hotsoonsignheaderArr.length}个账号----------------\n`)
  for (let i = 0; i < hotsoonsignheaderArr.length; i++) {
    if (hotsoonsignheaderArr[i]) {
      message = ''
      hotsoonsignheader = hotsoonsignheaderArr[i];
      hotsoonsignkey = hotsoonsignkeyArr[i];
      hotsoonadheader = hotsoonadheaderArr[i];
      hotsoonadkey = hotsoonadkeyArr[i];
      hotsoonreadheader = hotsoonreadheaderArr[i];
      hotsoonreadkey = hotsoonreadkeyArr[i];
      $.index = i + 1;
      console.log(`\n开始【火山视频极速版${$.index}】`)
      //await userinfo()
      await sign_in()
      await treasure_task()
      await control()
      await tasklist()
      //await withdraw()
      await watch_video(no)
      await showmsg()
  }
 }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())
function GetCookie() {
 if($request&&$request.url.indexOf("hotsoon"&&"sign_in_detail")>=0) {
  const hotsoonsignheader = $request.url.split(`?`)[1]
    if (hotsoonsignheader) $.setdata(hotsoonsignheader,`hotsoonsignheader${$.idx}`)
    $.log(`[${jsname}] 获取sign请求: 成功,hotsoonsignheader: ${hotsoonsignheader}`)
    $.msg(`获取hotsoonsignheader: 成功🎉`, ``)
   const hotsoonsignkey = JSON.stringify($request.headers)
  if(hotsoonsignkey)        $.setdata(hotsoonsignkey,`hotsoonsignkey${$.idx}`)
    $.log(`[${jsname}] 获取sign请求: 成功,hotsoonsignkey: ${hotsoonsignkey}`)
    $.msg(`获取hotsoonsignkey: 成功🎉`, ``)
 }
 if($request&&$request.url.indexOf('hotsoon'&&"daily_read")>=0) {
	  const hotsoonreadheader = $request.url.split(`?`)[1]
	    if (hotsoonreadheader) $.setdata(hotsoonreadheader,`hotsoonreadheader${$.idx}`)
	    $.log(`[${jsname}] 获取read请求: 成功,hotsoonreadheader: ${hotsoonreadheader}`)
	    $.msg(`获取hotsoonreadheader: 成功🎉`, ``)
	   const hotsoonreadkey = JSON.stringify($request.headers)
	  if(hotsoonreadkey)        $.setdata(hotsoonreadkey,`hotsoonreadkey${$.idx}`)
	    $.log(`[${jsname}] 获取read请求: 成功,readkey: ${hotsoonreadkey}`)
	    $.msg(`获取hotsoonreadkey: 成功🎉`, ``)
	 }
 if($request&&$request.url.indexOf('hotsoon' && "draw_excitation_ad")>=0) {
	  const hotsoonadheader = $request.url.split(`?`)[1]
	    if (hotsoonadheader) $.setdata(hotsoonadheader,`hotsoonadheader${$.idx}`)
	    $.log(`[${jsname}] 获取AD请求: 成功,hotsoonadheader: ${hotsoonadheader}`)
	    $.msg(`获取hotsoonadheader: 成功🎉`, ``)
	   const hotsoonadkey = JSON.stringify($request.headers)
	  if(hotsoonadkey)        $.setdata(hotsoonadkey,`hotsoonadkey${$.idx}`)
	    $.log(`[${jsname}] 获取AD请求: 成功,hotsoonadkey: ${hotsoonadkey}`)
	    $.msg(`获取hotsoonadkey: 成功🎉`, ``)
	 }
    }
//签到
function sign_in() {
return new Promise((resolve, reject) => {
  let sign_inurl ={
    url: `https://ib-hl.snssdk.com/luckycat/hotsoon/v1/task/done/sign_in?${hotsoonsignheader}`,
    headers: JSON.parse(hotsoonsignkey),
}
   $.post(sign_inurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
          message += '📣签到\n'
      if(result.err_no == 0) {
          message += result.err_tips+'\n'
      }else{
          message +='⚠️异常'+result.err_tips+'\n'
           }
          resolve()
    })
   })
  }
//随机宝箱
function treasure_task() {
return new Promise((resolve, reject) => {
  let treasure_taskurl ={
	url: `https://ib-hl.snssdk.com/luckycat/hotsoon/v1/task/done/treasure_task?${hotsoonsignheader}`,
    headers: JSON.parse(hotsoonsignkey),
}
   $.post(treasure_taskurl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs) $.log(data)
      message += '📣随机宝箱\n'
      if(result.err_no == 0) {
           message += result.err_tips+result.data.tips+'\n'
       }else{
    	   message += '⚠️异常'+result.err_tips+'\n'
       }
          resolve()
    })
   })
  }
async function control(){
   if(hotsoonadkey){
      await ad();
   }else{
     $.log("跳过广告收益，您没有此活动")
     }
    if(hotsoonaccount){
     await profit()
     }
    if(cash == 1 && coins >= 20){
     await withdraw()
     }
}
//广告
function ad() {
return new Promise((resolve, reject) => {
  let adurl ={
      url: `https://ib-hl.snssdk.com/luckycat/hotsoon/v1/task/done/draw_excitation_ad?${hotsoonadheader}`,
      headers: JSON.parse(hotsoonadkey),
      body:`{

}`,
	 timeout: 60000,
}
   $.post(adurl,(error, response, data) =>{
     const result = JSON.parse(data)
     if(logs) $.log(data)
     message += '📣广告收益\n'
     if(result.err_no == 0) {
          message += '🎉'+result.err_tips+"获得:"+result.data.amount+'\n'
      }else{
   	   message += '⚠️异常'+result.err_tips+'\n'
      }
         resolve()
   })
  })
 }
//tasklist
/*function tasklist() {
return new Promise((resolve, reject) => {
  let tasklisturl ={
    url: `https://i.snssdk.com/luckycat/hotsoon/v1/task/page?&polaris_${hotsoonsignheader}`,
    headers :JSON.parse(hotsoonsignkey),
}
   $.get(tasklisturl,(error, response, data) =>{
     const result = JSON.parse(data)
        if(logs)$.log(data)
      for(let i = 2;i<=7;i++){
        if(result.data.daily_tasks[i].completed == false) {
         no = result.data.daily_tasks[i].name.match(/\d+/)
          break;
       }
         else if(result.data.daily_tasks[i].completed == true){
          no = result.data.daily_tasks[i+1].name.match(/\d+/)
           if(no == 'undefined') done;
         }
}
          resolve()
    })
   })
  }
*/
//tasklist
function tasklist() {
return new Promise((resolve, reject) => {
  let tasklisturl ={
    url: `https://i.snssdk.com/luckycat/hotsoon/v1/task/page?&polaris_${hotsoonsignheader}`,
    headers :JSON.parse(hotsoonsignkey),
}
   $.get(tasklisturl,(error, response, data) =>{
     const result = JSON.parse(data)
        if(logs)$.log(data)
      var a = result.data.daily_tasks.find(item => item.task_id === 1001).completed
      var b = result.data.daily_tasks.find(item => item.task_id === 1017).completed
      var c = result.data.daily_tasks.find(item => item.task_id === 1006).completed
      var d = result.data.daily_tasks.find(item => item.task_id === 1003).completed
      var e = result.data.daily_tasks.find(item => item.task_id === 1005).completed
      var f = result.data.daily_tasks.find(item => item.task_id === 1009).completed
      var g = result.data.daily_tasks.find(item => item.task_id === 1010).completed
      if(a) no=2
      if(b) no=5
      if(c) no=10
      if(d) no=20
      if(e) no=30
      if(f) no=60
      if(g) {
      $.log('视频任务完成')
      message += '视频任务完成\n'
      if(!a)
      no=1
     }
      resolve()
    })
   })
  }
//skill
/*function skill() {
return new Promise((resolve, reject) => {
  let skillurl ={
    url: `https://i-hl.snssdk.com/luckycat/hotsoon/v1/wallet/profit_detail_page?income_type=2&num=50&${hotsoonsignheader}`,
    headers :JSON.parse(hotsoonsignkey),
}
   $.get(skillurl,(error, response, data) =>{
     const result = JSON.parse(data)
        //if(logs)$.log(data)
  if(data.match(/\-\d+/)){
     message += '昨日金币'+data.match(/\-\d+/)+'\n'
     operate = 1;
   }else{
     operate = 0;
}
  return watch_video(no);
          resolve()
    })
   })
  }
*/
//看视频
function watch_video(no) {
return new Promise((resolve, reject) => {
  let watch_videourl ={
    url: `https://ib-hl.snssdk.com/luckycat/hotsoon/v1/task/done/daily_read_${no}m?${hotsoonreadheader}`,
    headers: JSON.parse(hotsoonreadkey),
    timeout: 60000,
}
   $.post(watch_videourl,(error, response, data) =>{
     const result = JSON.parse(data)
       $.log('hotsoon'+no)
       if(logs) $.log(data)
       message += '📣看视频\n'
      if(result.err_no == 10012){
          message += '⚠️异常:'+no+'时段任务完成\n'
      }
      else if(result.err_no == 0) {
          message +='🎉'+result.err_tips+'获得:'+result.data.amount+"\n"
           return showmsg()
        }
      else{
          message += '⚠️异常:'+result.err_tips+'\n'+'请重新获取readkey\n'
          let other = '⚠️异常:'+result.err_tips+'请重新获取readkey\n'
          $.msg(jsname,'',other)
          return showmsg()
      }
          resolve()
    })
   })
  }
//profit page
function profit() {
return new Promise((resolve, reject) => {
  let profiturl ={
    url: `https://i-hl.snssdk.com/luckycat/hotsoon/v1/wallet/profit_detail_page?&aid=1350&profit_type=score&polaris_version=2.0.0&income_type=1&${hotsoonsignheader}`,
    headers: JSON.parse(hotsoonsignkey),
}
   $.get(profiturl,async(error, response, data) =>{
     const result = JSON.parse(data)
     if(logs) $.log(data)
     let time = Math.round(new Date(new Date().toLocaleDateString()).getTime()/1000)
coins = result.data.income_data.cash_balance
if(result.data.profit_detail.cash_income_list.find(item => item.time >= time) && result.data.profit_detail.cash_income_list.find(item => item.task_id == "215")){
     cash = 0;
     }
          resolve()
    })
   })
  }
//withdraw
function withdraw() {
return new Promise((resolve, reject) => {
  let withdrawurl ={
    url: `https://i-hl.snssdk.com/luckycat/hotsoon/v1/wallet/take_cash?polaris_version=2.0.0&${hotsoonreadheader}`,
    headers: JSON.parse(hotsoonreadkey),
    body:`{
  "task_id" : 215,
  "account" : "${hotsoonaccount}",
  "cash_amount" : -20,
  "is_auto" : true,
  "name" : "",
  "take_cash_way" : "alipay"
}`
}
   $.post(withdrawurl,(error, response, data) =>{
     const result = JSON.parse(data)
        $.log(data)
       message += '📣提现0.2元\n'
      if(result.err_no == 0){
          console.log(result.err_tips+'提现0.2元\n')
          message += result.err_tips+'提现0.2元\n'
      }
      else{
          console.log(result.err_tips+"\n")
        }
          resolve()
    })
   })
  }
async function showmsg(){
if(tz==1){
    if ($.isNode()){
     $.log(message)
    if ((hour == 12 && minute <= 20) || (hour == 23 && minute >= 40)) {
       await notify.sendNotify($.name,message)
     }
   }else{
      $.log(message)
    if ((hour == 12 && minute <= 20) || (hour == 23 && minute >= 40)) {
       $.msg(jsname,'',message)
}
}
   }else{
       $.log(message)
    }
$.done();
 }
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

/*
更新时间: 2021-03-22 21:30

腾讯新闻签到修改版，可以自动阅读文章获取红包，该活动为瓜分百万现金挑战赛，针对幸运用户参与，本脚本已不能自动打开红包，需每天要打开腾讯新闻app一次，请须知

*/
const $ = new Env('腾讯新闻');
const notify = $.isNode() ? require('./sendNotify') : '';
let notifyInterval =$.getdata('notifynum')||50; //阅读篇数间隔通知开为1，常关为0;

let SignArr = [],SignUrl = "";
    cookiesArr = [],CookieTxnews = "";
    VideoArr = [],SignUrl = "",order = "",
    detail = ``, subTitle = ``;
    prizeArr = [],prizeUrl= "";
let read_finish = "",video_finish="";
//if ($.isNode()) {
//    if (process.env.TXNEWS_COOKIE && process.env.TXNEWS_COOKIE.indexOf('&') > -1) {
//        CookieTxnews = process.env.TXNEWS_COOKIE.split('&');
//    } else {
//        CookieTxnews = process.env.TXNEWS_COOKIE.split()
//    };
//    if (process.env.TXNEWS_SIGN && process.env.TXNEWS_SIGN.indexOf('#') > -1) {
//        SignUrl = process.env.TXNEWS_SIGN.split('#');
//    } else {
//        SignUrl = process.env.TXNEWS_SIGN.split()
//    };
//    if (process.env.TXNEWS_VIDEO && process.env.TXNEWS_VIDEO.indexOf('#') > -1) {
//        VideoUrl = process.env.TXNEWS_VIDEO.split('#');
//    } else {
//        VideoUrl = process.env.TXNEWS_VIDEO.split()
//    };
//    Object.keys(CookieTxnews).forEach((item) => {
//        if (CookieTxnews[item]) {
//            cookiesArr.push(CookieTxnews[item])
//        }
//    })
//    Object.keys(SignUrl).forEach((item) => {
//        if (SignUrl[item]) {
//            SignArr.push(SignUrl[item])
//        }
//    })
//    Object.keys(VideoUrl).forEach((item) => {
//        if (VideoUrl[item]) {
//            VideoArr.push(VideoUrl[item])
//        }
//    })
//} else {
//    cookiesArr.push($.getdata('sy_cookie_txnews'));
//    SignArr.push($.getdata('sy_signurl_txnews'));
//    VideoArr.push($.getdata('video_txnews'));
//    prizeArr.push($.getdata('prize_txnews'))
//}

 cookiesArr.push('open_access_token=4492407257961BD0AC572D4C20E023AB;vqq_access_token=4492407257961BD0AC572D4C20E023AB;open_openid=EF7667AC00306AEAAEB1C688042AD743;vqq_openid=EF7667AC00306AEAAEB1C688042AD743;open_appid=100383922;vqq_appid=100383922;open_pay_token=214C064466F51D5EA3F302E8F5C07DD0;vqq_pay_token=214C064466F51D5EA3F302E8F5C07DD0;uin=1217079729;luin=1217079729;openid=oI6CFjhofzeNRW6jBAI6d2t0WaNM;appid=wx073f4a4daff0abe8;access_token=45_JGlXMy_RHZhy4mVeZq_QOZLwzmUReTUxF9tdgzb0fT8Sb_h27o4gaKoDYY0UOPefqEPCAvOuF6S8ANJVQX2VJsJSD2V15RMFbwTmZSeFm4c;refresh_token=45_329sITQTWRtdZt20Olfks01ZV7iSjla9EoyWfqFeJelP-gE_5mMIeMwjPUJnlPmPrfTdxY7IY_D-awlVeUw78gUMqPQGjH3LWCB8T1hzpE0;unionid=onCs1uDDPwyyIfKXTvu9wRIZ1CCE;logintype=11;suid=8QMf3H9a7YMVvj3Q;main_login=qq');
 SignArr.push('https://api.inews.qq.com/event/v1/user/event/report?mac=020000000000&isJailbreak=0&currentSetId=group_news&qn-rid=1005_B310940D-9BB8-4BE9-8577-3C4FAFD5E896&device_model=iPhone11%2C6&deviceToken=7769ea531e2144f850aaa1fb5c15863ac80674869339b960a9607fd4cdf291f6&device_appin=1E248E83-E84E-4330-9CAB-414EC9D99363&currentTabId=news_news&qn-time=1623032472881&isMainUserLogin=1&qqnews_refpage=QNCommonListController&__qnr=266dba186edc&qn-sig=E7BED12EA0E285469E82913E02462679&network_type=wifi&hippy_res_ver=hippy_memory_B%3A%28null%29%2Chippy_audio%3A202105141422%2Chippy_vendor%3A680004%2Chippy_list%3A680035%2Chippy_memory%3A%28null%29%2Chippy_cell%3A680043%2Chippy_memory_A%3A%28null%29%2Chippy_negative_screen%3A680043&cookie=open_access_token%3D4492407257961BD0AC572D4C20E023AB%3Bvqq_access_token%3D4492407257961BD0AC572D4C20E023AB%3Bopen_openid%3DEF7667AC00306AEAAEB1C688042AD743%3Bvqq_openid%3DEF7667AC00306AEAAEB1C688042AD743%3Bopen_appid%3D100383922%3Bvqq_appid%3D100383922%3Bopen_pay_token%3D214C064466F51D5EA3F302E8F5C07DD0%3Bvqq_pay_token%3D214C064466F51D5EA3F302E8F5C07DD0%3Buin%3D1217079729%3Bluin%3D1217079729%3Bopenid%3DoI6CFjhofzeNRW6jBAI6d2t0WaNM%3Bappid%3Dwx073f4a4daff0abe8%3Baccess_token%3D45_JGlXMy_RHZhy4mVeZq_QOZLwzmUReTUxF9tdgzb0fT8Sb_h27o4gaKoDYY0UOPefqEPCAvOuF6S8ANJVQX2VJsJSD2V15RMFbwTmZSeFm4c%3Brefresh_token%3D45_329sITQTWRtdZt20Olfks01ZV7iSjla9EoyWfqFeJelP-gE_5mMIeMwjPUJnlPmPrfTdxY7IY_D-awlVeUw78gUMqPQGjH3LWCB8T1hzpE0%3Bunionid%3DonCs1uDDPwyyIfKXTvu9wRIZ1CCE%3Blogintype%3D11%3Bsuid%3D8QMf3H9a7YMVvj3Q%3Bmain_login%3Dqq&wx_openid=EF7667AC00306AEAAEB1C688042AD743&startTimestamp=1623032440&hw=iPhone11%2C6&QQ=EF7667AC00306AEAAEB1C688042AD743&page_type=detail&adcode=310113&mainUserUin=ec6aa5b2af98a6e60e865c0179fbbbe28c&qimei=97da8e9e6cd2bbde63fd0c5e00001f615308&omgbizid=b3b67a27561b8f4d83ebb3d7cb7becf58508006011640c&imsi=460-02&screen_height=896&trueVersion=6.5.11&global_session_id=1623032440478&omgid=f38f84ece527214e503b4fa5ee8415839b23001011640c&user_vip_type=0&qn_user_type=2&idfa=00000000-0000-0000-0000-000000000000&qn-newsig=88a360133d0988180471218725ededb933d753d2c224feff0190a1c9363b3579&currentChannelId=news_news_top&global_info=1%7C2135846%3A2172152%3A2181734%3A2182680%3A2187014%3A2193879%3A2194191%3A2194478%7C%7C1%7C1%7C13%7C7%7C1%7C0%7C6%7C1%7C1%7C1%7C%7C0%7CA901P200792101%3AA901P100866801%3AB901P000841302%3AA096P000890603%3AB403P000945802%3AA060P200944903%3AA060P100949003%3AA060P090918302%3AJ060P112000000%3AA405P700810608%3AB405P100943502%3AA704P400949701%3AB704P200847802%3AA903P400939101%3AB602P900702602%3AB602P800732802%3AB602P500898202%3AA602P200744501%3AA602P050728001%3AA602P020835501%3AA602P010946301%3AA602P901257901%3AA602P714855001%3AA602P710324701%3AA602P702269101%3AJ602P617000000%3AA602P613271701%3AA602P611253801%3AA602P516234601%3AA602P414259901%3AA602P323807701%3AA602P216284701%3AA602P208205801%3AA602P118426601%3AA602P117262101%3AJ602P043000000%3AJ602P042000000%3AA602P041835501%3AA602P039822701%3AA602P036794601%3AJ602P035000000%3AA602P033768701%3AA602P024614001%3AA602P023571101%3AJ602P022000000%3AA602P012492501%3AA602P011422801%3AJ602P007000000%3AA602P003136401%3AA703P200847701%3AA605P100940801%3AB605P000948803%3AB055P300879804%3AB055P100914107%3AB055P020890102%3AB055P000906103%3AJ055P001000000%3AA601P800886001%3AA601P700893201%3AA601P400759901%3AB601P300844504%3AA601P100932601%3AB601P040771003%3AB601P030899602%3AB601P000840203%3AJ601P999000000%3AA601P902266601%3AJ601P817000000%3AA601P815363101%3AJ601P813000000%3AJ601P706000000%3AJ601P705000000%3AJ601P704000000%3AA601P622269601%3AA601P620269601%3AJ601P504000000%3AA601P501350301%3AA601P405759901%3AJ601P315000000%3AJ601P314000000%3AJ601P117000000%3AA601P112360801%3AA601P105118803%3AJ601P036000000%3AJ601P035000000%3AA601P031621301%3AA601P029620501%3AA601P022299301%3AA601P019237403%3AA601P016212405%3AB073P400949603%7C1429%7C0%7C1%7C27%7C27%7C0%7C0%7C0%7C3765%3A1003765%3A1003766%3A3779%3A1003779%3A3801%3A1003801%7C3%7C3%7C1%7C1%7C1%7C1%7C1%7C1%7C-1%7C0%7C0%7C0%7C2%7C0%7C0%7C0%7C3%7C0%7C0%7C1%7C0%7C0%7C0%7C0%7C0%7C0%7C0%7C0%7C1%7C0%7C1%7C1%7C1%7C0%7C1%7C0%7C0%7C1%7C1%7C0%7C11%7C20%7C1%7C2%7C1%7C0%7C0%7C0%7C1%7C4%7C0%7C1%7C1%7C41%7C0%7C51%7C60%7C0%7C1%7C0%7C0%7C1%7C0%7C2%7C0%7C0%7C71%7C0%7C0%7C1%7C71&preStartTimestamp=1623032437&screen_scale=3&pagestartfrom=icon&appver=14.7_qqnews_6.5.11&store=1&screen_width=414&devid=46D09B3C-F4A9-4E78-94D4-4F47F9151B0C&QIMEI36=fdea3b7a5bf3a8a397c66add000015f1530b&activefrom=icon&apptype=ios&suid=8QMf3H9a7YMVvj3Q&httpRequestUid=266dba1862ba');
 VideoArr.push('https://api.inews.qq.com/event/v1/user/event/report?mac=020000000000&isJailbreak=0&currentSetId=group_news&qn-rid=1005_C626324D-0D1F-436D-AE4E-1E7FB4DFB8CE&device_model=iPhone11%2C6&deviceToken=7769ea531e2144f850aaa1fb5c15863ac80674869339b960a9607fd4cdf291f6&device_appin=1E248E83-E84E-4330-9CAB-414EC9D99363&currentTabId=news_news&qn-time=1623032545865&isMainUserLogin=1&qqnews_refpage=QNCommonListController&__qnr=266dba612193&qn-sig=6D6AF27D36AD555D3E927A9127852CEA&network_type=wifi&hippy_res_ver=hippy_memory_B%3A%28null%29%2Chippy_audio%3A202105141422%2Chippy_vendor%3A680004%2Chippy_list%3A680035%2Chippy_memory%3A%28null%29%2Chippy_cell%3A680043%2Chippy_memory_A%3A%28null%29%2Chippy_negative_screen%3A680043&cookie=open_access_token%3D4492407257961BD0AC572D4C20E023AB%3Bvqq_access_token%3D4492407257961BD0AC572D4C20E023AB%3Bopen_openid%3DEF7667AC00306AEAAEB1C688042AD743%3Bvqq_openid%3DEF7667AC00306AEAAEB1C688042AD743%3Bopen_appid%3D100383922%3Bvqq_appid%3D100383922%3Bopen_pay_token%3D214C064466F51D5EA3F302E8F5C07DD0%3Bvqq_pay_token%3D214C064466F51D5EA3F302E8F5C07DD0%3Buin%3D1217079729%3Bluin%3D1217079729%3Bopenid%3DoI6CFjhofzeNRW6jBAI6d2t0WaNM%3Bappid%3Dwx073f4a4daff0abe8%3Baccess_token%3D45_JGlXMy_RHZhy4mVeZq_QOZLwzmUReTUxF9tdgzb0fT8Sb_h27o4gaKoDYY0UOPefqEPCAvOuF6S8ANJVQX2VJsJSD2V15RMFbwTmZSeFm4c%3Brefresh_token%3D45_329sITQTWRtdZt20Olfks01ZV7iSjla9EoyWfqFeJelP-gE_5mMIeMwjPUJnlPmPrfTdxY7IY_D-awlVeUw78gUMqPQGjH3LWCB8T1hzpE0%3Bunionid%3DonCs1uDDPwyyIfKXTvu9wRIZ1CCE%3Blogintype%3D11%3Bsuid%3D8QMf3H9a7YMVvj3Q%3Bmain_login%3Dqq&wx_openid=EF7667AC00306AEAAEB1C688042AD743&startTimestamp=1623032517&hw=iPhone11%2C6&QQ=EF7667AC00306AEAAEB1C688042AD743&page_type=detail&startarticleid=IFO2020111000547700&adcode=310113&mainUserUin=ec6aa5b2af98a6e60e865c0179fbbbe28c&qimei=97da8e9e6cd2bbde63fd0c5e00001f615308&omgbizid=b3b67a27561b8f4d83ebb3d7cb7becf58508006011640c&imsi=460-02&screen_height=896&trueVersion=6.5.11&global_session_id=1623032440478&omgid=f38f84ece527214e503b4fa5ee8415839b23001011640c&user_vip_type=0&qn_user_type=2&idfa=00000000-0000-0000-0000-000000000000&qn-newsig=830f0b460eb0573964aacf202edb5c8d907d13ab79c3bbafceeba5056a193a27&currentChannelId=news_news_top&global_info=1%7C2135846%3A2172152%3A2181734%3A2182680%3A2187014%3A2193879%3A2194191%3A2194478%7C%7C1%7C1%7C13%7C7%7C1%7C0%7C6%7C1%7C1%7C1%7C%7C0%7CA901P200792101%3AA901P100866801%3AB901P000841302%3AA096P000890603%3AB403P000945802%3AA060P200944903%3AA060P100949003%3AA060P090918302%3AJ060P112000000%3AA405P700810608%3AB405P100943502%3AA704P400949701%3AB704P200847802%3AA903P400939101%3AB602P900702602%3AB602P800732802%3AB602P500898202%3AA602P200744501%3AA602P050728001%3AA602P020835501%3AA602P010946301%3AA602P901257901%3AA602P714855001%3AA602P710324701%3AA602P702269101%3AJ602P617000000%3AA602P613271701%3AA602P611253801%3AA602P516234601%3AA602P414259901%3AA602P323807701%3AA602P216284701%3AA602P208205801%3AA602P118426601%3AA602P117262101%3AJ602P043000000%3AJ602P042000000%3AA602P041835501%3AA602P039822701%3AA602P036794601%3AJ602P035000000%3AA602P033768701%3AA602P024614001%3AA602P023571101%3AJ602P022000000%3AA602P012492501%3AA602P011422801%3AJ602P007000000%3AA602P003136401%3AA703P200847701%3AA605P100940801%3AB605P000948803%3AB055P300879804%3AB055P100914107%3AB055P020890102%3AB055P000906103%3AJ055P001000000%3AA601P800886001%3AA601P700893201%3AA601P400759901%3AB601P300844504%3AA601P100932601%3AB601P040771003%3AB601P030899602%3AB601P000840203%3AJ601P999000000%3AA601P902266601%3AJ601P817000000%3AA601P815363101%3AJ601P813000000%3AJ601P706000000%3AJ601P705000000%3AJ601P704000000%3AA601P622269601%3AA601P620269601%3AJ601P504000000%3AA601P501350301%3AA601P405759901%3AJ601P315000000%3AJ601P314000000%3AJ601P117000000%3AA601P112360801%3AA601P105118803%3AJ601P036000000%3AJ601P035000000%3AA601P031621301%3AA601P029620501%3AA601P022299301%3AA601P019237403%3AA601P016212405%3AB073P400949603%7C1429%7C0%7C1%7C27%7C27%7C0%7C0%7C0%7C3765%3A1003765%3A1003766%3A3779%3A1003779%3A3801%3A1003801%7C3%7C3%7C1%7C1%7C1%7C1%7C1%7C1%7C-1%7C0%7C0%7C0%7C2%7C0%7C0%7C0%7C3%7C0%7C0%7C1%7C0%7C0%7C0%7C0%7C0%7C0%7C0%7C0%7C1%7C0%7C1%7C1%7C1%7C0%7C1%7C0%7C0%7C1%7C1%7C0%7C11%7C20%7C1%7C2%7C1%7C0%7C0%7C0%7C1%7C4%7C0%7C1%7C1%7C41%7C0%7C51%7C60%7C0%7C1%7C0%7C0%7C1%7C0%7C2%7C0%7C0%7C71%7C0%7C0%7C1%7C71&preStartTimestamp=1623032503&screen_scale=3&pagestartfrom=icon&appver=14.7_qqnews_6.5.11&store=1&screen_width=414&devid=46D09B3C-F4A9-4E78-94D4-4F47F9151B0C&QIMEI36=fdea3b7a5bf3a8a397c66add000015f1530b&activefrom=icon&apptype=ios&suid=8QMf3H9a7YMVvj3Q&httpRequestUid=266dba61d38c');
 prizeArr.push('https://api.prize.qq.com/v1/newsapp/chajianrp/sendprize?actname=chajian_shouqi&mac=020000000000&isJailbreak=0&startarticletype=5&currentSetId=group_news&device_model=iPhone11%2C6&deviceToken=7769ea531e2144f850aaa1fb5c15863ac80674869339b960a9607fd4cdf291f6&device_appin=1E248E83-E84E-4330-9CAB-414EC9D99363&currentTabId=news_news&qn-rid=1005_5CC40CA6-27E9-43D6-8168-26E7AAE06E3D&isMainUserLogin=1&qqnews_refpage=QNPreloadViewController&__qnr=266dba38950a&qn-time=1623032504903&qn-sig=24B04732297D93DDF73A027FACBF2787&network_type=wifi&hippy_res_ver=hippy_memory_B%3A%28null%29%2Chippy_audio%3A202105141422%2Chippy_vendor%3A680004%2Chippy_list%3A680035%2Chippy_memory%3A%28null%29%2Chippy_cell%3A680043%2Chippy_memory_A%3A%28null%29%2Chippy_negative_screen%3A680043&cookie=open_access_token%3D4492407257961BD0AC572D4C20E023AB%3Bvqq_access_token%3D4492407257961BD0AC572D4C20E023AB%3Bopen_openid%3DEF7667AC00306AEAAEB1C688042AD743%3Bvqq_openid%3DEF7667AC00306AEAAEB1C688042AD743%3Bopen_appid%3D100383922%3Bvqq_appid%3D100383922%3Bopen_pay_token%3D214C064466F51D5EA3F302E8F5C07DD0%3Bvqq_pay_token%3D214C064466F51D5EA3F302E8F5C07DD0%3Buin%3D1217079729%3Bluin%3D1217079729%3Bopenid%3DoI6CFjhofzeNRW6jBAI6d2t0WaNM%3Bappid%3Dwx073f4a4daff0abe8%3Baccess_token%3D45_JGlXMy_RHZhy4mVeZq_QOZLwzmUReTUxF9tdgzb0fT8Sb_h27o4gaKoDYY0UOPefqEPCAvOuF6S8ANJVQX2VJsJSD2V15RMFbwTmZSeFm4c%3Brefresh_token%3D45_329sITQTWRtdZt20Olfks01ZV7iSjla9EoyWfqFeJelP-gE_5mMIeMwjPUJnlPmPrfTdxY7IY_D-awlVeUw78gUMqPQGjH3LWCB8T1hzpE0%3Bunionid%3DonCs1uDDPwyyIfKXTvu9wRIZ1CCE%3Blogintype%3D11%3Bsuid%3D8QMf3H9a7YMVvj3Q%3Bmain_login%3Dqq&wx_openid=EF7667AC00306AEAAEB1C688042AD743&startTimestamp=1623032503&hw=iPhone11%2C6&QQ=EF7667AC00306AEAAEB1C688042AD743&page_type=other&startarticleid=IFO2020111000547700&adcode=310113&mainUserUin=ec6aa5b2af98a6e60e865c0179fbbbe28c&qimei=97da8e9e6cd2bbde63fd0c5e00001f615308&omgbizid=b3b67a27561b8f4d83ebb3d7cb7becf58508006011640c&imsi=460-02&screen_height=896&trueVersion=6.5.11&global_session_id=1623032440478&omgid=f38f84ece527214e503b4fa5ee8415839b23001011640c&user_vip_type=0&qn_user_type=2&idfa=00000000-0000-0000-0000-000000000000&qn-newsig=44ef1a49de903ba88eddeed06eadbb37cce5c08c38ced51c6c38b01223db8d9f&currentChannelId=news_news_top&global_info=1%7C2135846%3A2172152%3A2181734%3A2182680%3A2187014%3A2193879%3A2194191%3A2194478%7C%7C1%7C1%7C13%7C7%7C1%7C0%7C6%7C1%7C1%7C1%7C%7C0%7CA901P200792101%3AA901P100866801%3AB901P000841302%3AA096P000890603%3AB403P000945802%3AA060P200944903%3AA060P100949003%3AA060P090918302%3AJ060P112000000%3AA405P700810608%3AB405P100943502%3AA704P400949701%3AB704P200847802%3AA903P400939101%3AB602P900702602%3AB602P800732802%3AB602P500898202%3AA602P200744501%3AA602P050728001%3AA602P020835501%3AA602P010946301%3AA602P901257901%3AA602P714855001%3AA602P710324701%3AA602P702269101%3AJ602P617000000%3AA602P613271701%3AA602P611253801%3AA602P516234601%3AA602P414259901%3AA602P323807701%3AA602P216284701%3AA602P208205801%3AA602P118426601%3AA602P117262101%3AJ602P043000000%3AJ602P042000000%3AA602P041835501%3AA602P039822701%3AA602P036794601%3AJ602P035000000%3AA602P033768701%3AA602P024614001%3AA602P023571101%3AJ602P022000000%3AA602P012492501%3AA602P011422801%3AJ602P007000000%3AA602P003136401%3AA703P200847701%3AA605P100940801%3AB605P000948803%3AB055P300879804%3AB055P100914107%3AB055P020890102%3AB055P000906103%3AJ055P001000000%3AA601P800886001%3AA601P700893201%3AA601P400759901%3AB601P300844504%3AA601P100932601%3AB601P040771003%3AB601P030899602%3AB601P000840203%3AJ601P999000000%3AA601P902266601%3AJ601P817000000%3AA601P815363101%3AJ601P813000000%3AJ601P706000000%3AJ601P705000000%3AJ601P704000000%3AA601P622269601%3AA601P620269601%3AJ601P504000000%3AA601P501350301%3AA601P405759901%3AJ601P315000000%3AJ601P314000000%3AJ601P117000000%3AA601P112360801%3AA601P105118803%3AJ601P036000000%3AJ601P035000000%3AA601P031621301%3AA601P029620501%3AA601P022299301%3AA601P019237403%3AA601P016212405%3AB073P400949603%7C1429%7C0%7C1%7C27%7C27%7C0%7C0%7C0%7C3765%3A1003765%3A1003766%3A3779%3A1003779%3A3801%3A1003801%7C3%7C3%7C1%7C1%7C-1%7C1%7C1%7C1%7C-1%7C0%7C0%7C0%7C2%7C0%7C0%7C0%7C0%7C0%7C0%7C1%7C0%7C0%7C0%7C0%7C0%7C0%7C0%7C0%7C1%7C0%7C1%7C1%7C1%7C0%7C1%7C0%7C0%7C1%7C1%7C0%7C11%7C20%7C1%7C2%7C1%7C0%7C0%7C0%7C1%7C4%7C0%7C1%7C1%7C41%7C0%7C51%7C60%7C0%7C1%7C0%7C0%7C1%7C0%7C2%7C0%7C0%7C71%7C0%7C0%7C1%7C71&preStartTimestamp=1623032485&screen_scale=3&pagestartfrom=wx_bonus&appver=14.7_qqnews_6.5.11&store=1&screen_width=414&devid=46D09B3C-F4A9-4E78-94D4-4F47F9151B0C&QIMEI36=fdea3b7a5bf3a8a397c66add000015f1530b&activefrom=wx_bonus&apptype=ios&suid=8QMf3H9a7YMVvj3Q&httpRequestUid=266dba3841ed')

let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
    GetCookie();
    $.done()
}!(async() => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】🉐登录腾讯新闻app获取cookie', "qqnews://article_9500?tab=news_news&from=self", {
            "open-url": "qqnews://article_9500?tab=news_news&from=self"
        });
        return
    }
    if ($.isNode()) {
        timeZone = new Date().getTimezoneOffset() / 60;
        timestamp = Date.now() + (8 + timeZone) * 60 * 60 * 1000;
        bjTime = new Date(timestamp).toLocaleString('zh', {
            hour12: false,
            timeZoneName: 'long'
        });
        console.log(`\n === 脚本执行 ${bjTime} ===\n`);
    }
    for (let i = 0; i < cookiesArr.length; i++) {
        if (cookiesArr[i]) {
            cookieVal = cookiesArr[i];
            signurlVal = SignArr[i];
            videoVal = VideoArr[i];
            prizeVal = prizeArr[i] 
            $.index = i + 1;
            console.log(`-------------------------\n\n开始【腾讯新闻账号${$.index}】`)
            ID = signurlVal.match(/devid=([a-zA-Z0-9_-]+)/)[1]
            token = signurlVal.split("mac")[1]
            await getsign();
            prizeVal?await open():"";
            prizeVal?await treesign():"";
            await activity();
            await getTotal();
            await $.wait(1000);
            await StepsTotal();
            await showmsg();
            if ($.isNode() && process.env.TXNEWS_NOTIFY_CONTROL) {
                if (readnum % notifyInterval == 0 && cashtotal > 2) {
                    await notify.sendNotify($.name, subTile + '\n' + detail)
                }
            }
        }
    }
})()
.catch((e) => $.logErr(e))
    .finally(() => $.done())


function GetCookie() {
    if ($request && $request.url.indexOf("api.prize.qq.com") > -1) {
        const prizeVal = $request.url
        $.log(`prizeVal:${prizeVal}`)
        if (prizeVal) $.setdata(prizeVal, 'prize_txnews')
        $.msg($.name, `获取天天领红包地址: 成功🎉`, ``)
    } else if ($request && $request.body.indexOf("article_read") > -1) {
        const signurlVal = $request.url
        const cookieVal = $request.headers['Cookie'];
        $.log(`signurlVal:${signurlVal}`)
        $.log(`cookieVal:${cookieVal}`)
        if (signurlVal) $.setdata(signurlVal, 'sy_signurl_txnews')
        if (cookieVal) $.setdata(cookieVal, 'sy_cookie_txnews')
        $.msg($.name, `获取Cookie: 成功🎉`, ``)
    }
    else if ($request && $request.body.indexOf("video_read") > -1) {
        const videoVal = $request.url
        $.log(`videoVal:${videoVal}`)
        if (videoVal) $.setdata(videoVal, 'video_txnews')
        $.msg($.name, `获取视频地址: 成功🎉`, ``)
    }
}

function Host(api, body, taskurl) {
    return {
        url: 'https://api.inews.qq.com/activity/v1/' + api + '&isJailbreak=0&devid=' + ID,
        headers: {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8',
            'Connection': 'keep-alive',
            'Cookie': cookieVal,
            'Host': 'api.inews.qq.com',
            'Referer': taskurl,
            'store': '1',
            'devid': ID,
            'User-Agent': 'QQNews/6.4.40 (iPhone; iOS 14.2; Scale/3.00)'
        },
        body: body
    }
}

//签到
function getsign() {
    return new Promise((resolve, reject) => {
        const signUrl = {
            url: `https://api.inews.qq.com/task/v1/user/signin/add?`,
            headers: Host().headers
        };
        $.post(signUrl, (error, resp, data) => {
            let obj = JSON.parse(data)
                // $.log(JSON.stringify(obj,null,2))
            if (obj.info == "success") {
                next = obj.data.next_points
                tip = obj.data.tip_soup || obj.data.share_tip
                imgurl = obj.data.share_img
                Dictum = tip.replace(/<br>/g, "") + " " + obj.data.author
                signinfo = '【签到信息】连续签到' + obj.data.signin_days + '天 ' + '明日+' + next + '金币 成功🎉\n'
            } else {
                $.msg($.name, '签到失败，🉐登录腾讯新闻app获取cookie', "")
                console.log('签到失败，🉐登录腾讯新闻app获取cookie' + data)
                return
            }
            resolve()
        })
    })
}

function open() {
 return new Promise((resolve, reject) => {
 let url = {
     url: prizeVal,
     headers: Host().headers,
     body: "actname=chajian_shouqi"
 };
     url.headers['Referer'] = 'http://inews.qq.com/inews/iphone/';
     url.headers['Host'] = 'api.prize.qq.com';
 $.post(url, async(error, resp, data) => {
     if(resp.statusCode ==200){
       obj = JSON.parse(data);
       if(obj.code==0){
         amount = obj.data.type=="rp" ? "天天领红包获得"+obj.data.amount/100+"元": "天天领红包获得"+obj.data.amount+"个金币"
         $.log(amount);
         $.msg($.name, amount,"");
         await zhuli()
       }
     } else if(resp.statusCode !== 403){
       $.log(JSON.stringify(resp,null,2))
     }
     resolve()
    })
  })
}

function zhuli() {
 return new Promise((resolve, reject) => {
    treetoken = prizeVal.split("?")[1]
 let url = {
     url: 'https://api.prize.qq.com/v1/newsapp/rpinvite/zhuli?actname=hongbaozhongxinyaoqing&activefrom=invitetask&'+treetoken,
     headers: Host().headers,
     body: "inviter_openid=17A2385EE6D27888DB9F9D6B0BE90EEA&source=main"
 };
     url.headers['Referer'] = 'http://inews.qq.com/inews/iphone/';
     url.headers['Host'] = 'api.prize.qq.com';
 $.post(url, (error, resp, data) => {
     if(resp.statusCode ==200){
       obj=JSON.parse(data);
       if(obj.code==0){
         //$.log(obj.message)
       }
      }
      resolve()
     })
   })
}
function treesign() {
 return new Promise((resolve, reject) => {
  treetoken = prizeVal.split("?")[1]
 let url = {
     url: 'https://api.prize.qq.com/v1/newsapp/tree/sign?'+treetoken,
     headers: Host().headers,
     body: "current_day="+Math.round(new Date(new Date().toLocaleDateString()).getTime()/1000).toString()
 }
 $.post(url, (error, resp, data) => {
     if(resp.statusCode ==200){
       obj = JSON.parse(data);
       if(obj.code==0){
         amount = obj.data.prize_type=="10" ? "摇钱树签到"+obj.data.prize_num+"经验": "摇钱树签到获得收益"+obj.data.prize_num
         $.log(data)
         $.msg($.name, amount,"")
       }
     } else if(resp.statusCode !== 403){
       $.log(JSON.stringify(resp,null,2))
     }
     resolve()
    })
  })
}



function activity() {
    return new Promise((resolve, reject) => {
        $.get(Host('user/task/list?'), async(error, resp, data) => {
            try {
                let taskres = JSON.parse(data);
                //$.log(JSON.stringify(taskres,null,2))
                if (taskres.ret == 0) {
                    actid = taskres.data.award_notice.activity_id;
                    if (!actid) {
                        actid = $.getdata('txnews_id')
                    } else {
                    $.log(`\n您的活动ID为: ` + actid + "\n\n********* 开始阅读任务 ********\n");
                $.setdata(actid,"txnews_id")
                    }
                    $.desc = ""
                    for (tasks of taskres.data.list) {
                        taskname = tasks.task_title,
                        tasktype = tasks.task_type,
                        taskstatus = tasks.task_status,
                        ratepack = tasks.rate,
                        totalpack = tasks.quota,
                        eventnum = tasks.task_desc,
                        taskurl = tasks.task_url;
                        $.log("去" + taskname + "\n");
                        if (taskstatus == 3) {
                            $.desc += "【" + taskname + "】✅ 已完成\n";
                            $.log(taskname + "已完成")
                        } else {
                            if (tasktype == "article") {
                                readnum = eventnum.match(/>(\d+)</)[1]
                                    //$.desc = "【" + taskname + "】 已领" + ratepack + "个红包 已阅"+readnum+"篇资讯\n";
                                await $.wait(3000);
                                await toRead(signurlVal, 'event=article_read')
                            } else if (tasktype == "video") {
                                videonum = eventnum.match(/>(.+)<\/span>分钟/)[1]
                                    //$.desc += "【" + taskname + "】 已领" + ratepack + "个红包 已看"+videonum+"分钟\n";
                                await $.wait(5000);
                                await toRead(videoVal, 'event=video_read')
                            } else if (tasktype == "cooperation") {
                                await openapp(tasks.task_id)
                            }
                        }
                    }
                }
            } catch (error) {
                $.msg($.name, "获取活动ID失败，详情请看日志", "", "");
                console.log("活动ID日志:" + data);
                return
            }
            resolve()
        })
    })
}

//阅读阶梯
function toRead(urlVal, body) {
    return new Promise((resolve, reject) => {
        $.post({
            url: urlVal,
            headers: Host().headers,
            body: body
        }, (error, resp, data) => {
            try {
                let obj = JSON.parse(data)
                    //$.log(JSON.stringify(obj,null,2))
                if (obj.ret == 0) {
                    console.log("本次阅读成功，获取收益" + obj.data.countdown_timer.countdown_tips + "\n");
                } else if (body.indexOf("article") > -1) {
                    console.log("本次阅读文章失败，" + obj.info + "\n");
                } else if (body.indexOf("video") > -1) {
                    console.log("本次观看视频失败，" + obj.info + "\n");
                }
            } catch (error) {
                console.log("本次阅读失败" + data + "\n")
            }
            resolve()
        })
    })
}

function openapp(taskid) {
    return new Promise((resolve, reject) => {
        $.get(Host('activity/do?activity_id=' + taskid + '&' + token), async(error, resp, data) => {
            try {
                let obj = JSON.parse(data)
                $.log(JSON.stringify(obj, null, 2))
                if (obj.ret == 0) {
                    $.log(taskname + "成功")
                } else {
                    $.log(taskname + "失败，" + obj.info + "\n");
                }
            } catch (error) {
                console.log("本次任务失败" + data + "\n")
            }
            resolve()
        })
    })
}


//阅读文章统计
function StepsTotal() {
    return new Promise((resolve, reject) => {
        $.get(Host('activity/info/get?activity_id=' + actid), async(error, resp, data) => {
            totalred = JSON.parse(data);
            //$.log(JSON.stringify(totalred,null,2))
            totalcion = totalred.data.extends.today_total_coin;
            if (totalred.ret == 0) {
                for (awards of totalred.data.award) {
                    taskType = awards.type,
                        red_get = awards.can_get,
                        redtotal = awards.total,
                        red_opened = awards.opened,
                        task_num = awards.event_num,
                        //readtitle = awards.title.split("，")[0].replace(/[\u4e00-\u9fa5]/g,``)
                        title = awards.title.match(/\d+/)
                    over_red = Number(redtotal - red_opened);
                    if (taskType == "article") {
                        read_res = over_red;
                        $.desc += "【阅读资讯】 已领" + awards.opened + "个红包 已看" + readnum + "篇/再读" + title + "篇\n";
                        if (awards.openable !== 0) {
                            $.log("可以打开" + awards.openable + "个阅读红包，去打开红包");
                            await $.wait(1000);
                            await Redpack(taskType)
                        }
                    }
                    if (taskType == "video") {
                        video_res = over_red;
                        $.desc += "【观看视频】 已领" + awards.opened + "个红包 已看" + videonum + "分钟/再读" + title + "分钟\n";
                        if (awards.openable !== 0) {
                            $.log("可以打开" + awards.openable + "个视频红包，去打开红包");
                            await $.wait(1000);
                            await Redpack(taskType)
                        }
                    }
                }
            }
            resolve()
        })
    })
}


//阶梯红包到账
function Redpack(red_body) {
    return new Promise((resolve, reject) => {
        $.post(Host('activity/redpack/get?', `redpack_type=${red_body}&activity_id=${actid}`,'http://inews.qq.com/inews/iphone/'), (error, resp, data) => {
            let rcash = JSON.parse(data);
            try {
                if (rcash.data.award.length == 1) {
                    redpacks = rcash.data.award.num / 100;
                    if (rcash.ret == 0 && redpacks > 0 && red_body == "article") {
                        redpackres = `【阅读红包】到账` + redpacks + `元🌷\n`;
                        $.log("阅读红包到账" + redpacks + "元\n")
                    } else if (rcash.ret == 0 && redpacks > 0 && red_body == "video") {
                        redpackres = `【视频红包】到账` + redpacks + `元🌷\n`;
                        $.log("视频红包到账" + redpacks + "元\n")
                    }
                } else {
                    $.log(rcash.data.award.length + "个红包到账\n")
                }
            } catch (error) {
                console.log("打开红包失败,响应数据: " + data);
                $.msg($.name, "开红包失败，详情请看日志 ❌", error)
            };
            resolve()
        })
    })
}

//收益总计
function getTotal() {
    return new Promise((resolve, reject) => {
        $.post(Host('usercenter/activity/list?'), (error, resp, data) => {
            if (error) {
                $.msg("获取收益信息失败‼️", "", error)
            } else {
                const Total_Earn = JSON.parse(data)
                cashtotal = Total_Earn.data.wealth[1].title
                $.sub = '【收益总计】' + Total_Earn.data.wealth[0].title + '金币  ' + "钱包: " + cashtotal + '元'
                    // $.log("钱包收益共计"+obj.data.wealth[1].title+"元")
            }
            resolve()
        })
    })
}

function showmsg() {
    return new Promise((resolve, reject) => {
        $.desc += '【每日一句】' + Dictum
        if (readnum && readnum % notifyInterval == 0) {
            $.msg($.name, $.sub, $.desc, {
                'open-url': "https://news.qq.com/FERD/cjRedDown.htm",
                'media-url': imgurl
            })
        } else if (read_res == 0 && video_res == 0) {
            $.msg($.name + ` 今日任务已完成✅`, $.sub, $.desc, {
                'open-url': "https://news.qq.com/FERD/cjRedDown.htm",
                'media-url': imgurl
            })
        } else {
            console.log($.sub + '\n' + $.desc)
        }
        resolve()
    })
}

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GIT_HUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:i,...r}=t;this.got[s](i,r).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

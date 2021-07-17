/*
#圈x
^https?+:\/\/api\.wolong\.tv\/wolong\/user\/myinfo url script-response-body https://raw.githubusercontent.com/pxylen/abc_/master/scripts/wolong-vip.js
#Loon
http-response ^https?+:\/\/api\.wolong\.tv\/wolong\/user\/myinfo script-path=https://raw.githubusercontent.com/pxylen/abc_/master/scripts/wolong-vip.js, requires-body=true, timeout=10, tag=picsew专业版
#[mitm]
hostname=api.wolong.tv
*/
var obj = JSON.parse($response.body);
obj = {"data": {
    "inviteCode": "WL39931",
    "name": "雷赛猴",
    "phone" : "15114894880",
    "avatar" : "",
    "userid" : 39931,
    "introduction" : "",
    "coin" : 999,
    "vip": {
      "isVip": 1,
    }
  },
  "code": 200,
  "message": "ok"
  }
$done({body: JSON.stringify(obj)});

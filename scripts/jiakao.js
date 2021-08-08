/*
#圈x

https:\/\/sirius\.kakamobi\.cn\/api\/open\/goods\/is-vip.htm url script-response-body https://raw.githubusercontent.com/pxylen/abc_/master/scripts/jiakao.js
#[mitm]
hostname=sirius.kakamobi.cn
*/
var obj = JSON.parse($response.body);
obj = {"data": {
    "isVip": true
    }
  },
  "errorCode": 0,
  "message": null,
  "success": true
  }
$done({body: JSON.stringify(obj)});

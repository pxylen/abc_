/*
     强制增加中青看点看看赚入口，和签到Cookie有冲突，请使用时添加，不用时请禁用
   
   https:\/\/kd\.youth\.cn\/WebApi\/NewTaskIos\/getTaskList url script-response-body youdata.js
*/

let obj = JSON.parse($response.body);
let look = {"title":"看看赚","event":"task_lookmaking","logo":"http://res.youth.cn/img-cover/24c833abc8f19c6d97bb962bbc50890f:88:88.png","topIcon":"+1元","minlogo":"","action":"","url":"https://kd.youth.cn/h5/20190527watchMoney","jump_type":1};
let data = obj.list.heard.push(look)
$done({body: JSON.stringify(obj)})
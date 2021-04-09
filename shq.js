/*
软件名称:生活圈 商店搜索下载
更新时间：2021-04-09 @肥皂
脚本说明：生活圈自动阅读
脚本为自动完成生活圈的评论任务

4.9修改评论内容为本地词库随机评论,可以自己适当添加一些。我精力有限,只加了65个

请不要分享此脚本,请不要分享此脚本,请不要分享此脚本。
单纯跑脚本每天低保三块钱。手动去转载文章到生活圈,两毛一条，
请转账自己生活圈定位地区的文章。文章可以去微信搜索定位地区的一些本地新闻号转载。文章可转载或直接复制粘贴当原创发布,只要上了推送十块钱一篇。判定原创1元一贴

本人公众号,有些脚本可能只会发布到公众号,比如自己偷撸的,bug无限刷之类的,不定期更新一些文章吧。下面的链接是公众号二维码
https://ae01.alicdn.com/kf/Ub229d86c9337410ebe479afe22226c9aV.jpg

复制此文章链接到微信打开阅读并下载生活圈,我会有两分钱的收益,谢谢大家。
https://tz.fafengtuqiang.cn/weizhan/article/109912864/31896564367/1568637/510227705367/1080334
或者商店搜索下载,微信秒到,注册后七天可提现,之后每天可提

本脚本以学习为主！
使用方法:首页找到评论有奖,点进去即获取数据成功

TG电报群: https://t.me/hahaha8028

注意事项:必看。
脚本默认评论方式为使用文章标题评论,最好去boxjs自定义评论内容里添加自定义的内容,否则太多人评论都是相同的内容,这样容易出问题，部分地区可能没有评论有奖的任务，需要自己切换地区,首次打开软件最好把软件的定位权限关闭

可参与评论有奖的地区: 这些地区由@ziye测试提供,辛苦大佬。
无锡 徐州 泰州 莆田 泉州 南昌 赣州 烟台 威海 临沂 郑州 开封 洛阳 周口 十堰 荆门 孝感 荆州 重庆 自贡 宜宾

以上地区请不要批量扎堆到一个地方,自己随机选一个地区。多账号直接退出登录,换号就行,不需要使用卸载大法,去生活圈公众号绑定一下账号就行了,多账号请尽量错开地区玩，最好每天去boxjs修改一下自定义评论的内容,最大限度的防止黑号。

boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json

生活圈
圈X配置如下，其他软件自行测试
[task_local]
#生活圈
0-59 9,12,22 * * * https://raw.githubusercontent.com/age174/-/main/shq.js, tag=生活圈, img-url=https://ftp.bmp.ovh/imgs/2021/04/e2b32e2eb2ad0cd3.png, enabled=true

[rewrite_local]
#生活圈
https://ex.jwshq.cn/app/commentator/getActivityItemPage url script-request-header https://raw.githubusercontent.com/age174/-/main/shq.js

#loon
https://ex.jwshq.cn/app/commentator/getActivityItemPage script-path=https://raw.githubusercontent.com/age174/-/main/shq.js, requires-header=true, timeout=10, tag=生活圈

#surge
生活圈 = type=http-request,pattern=https://ex.jwshq.cn/app/commentator/getActivityItemPage,requires-header=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/shq.js,script-update-interval=0

[MITM]
hostname = ex.jwshq.cn
*/

const $ = new Env('生活圈自动评论');
let status;
status = (status = ($.getval("shqstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const shqurlArr = [], shqhdArr = [],shqcount = ''
let times = Math.round(Date.now() / 1000)
let shqurl = $.getdata('shqurl')
let shqhd = $.getdata('shqhd')
let shqkey = '',id = '',uid='',tid=''
let nr = ($.getval('nr') || '');//自定义评论内容
let txje = 15 //在此处修改一下需要提现的金额,可对照自己的余额修改提现,支持小数点提现,改完手动运行脚本即可提现,微信秒到,记得绑定自己的微信
let kg = 0  //提现开关,默认关闭,改为1手动执行一次可提现
let sjpl = ['精品音画精妙绝伦赏心悦目如痴如醉…','美丽的家园,曼妙的音乐.是梦?还是人间仙境?字字珠玑，情真意切','余音绕梁，精彩华章！唯美的文字让人心醉','美文佳作，情在其中，感人至深','美得令人心乱情迷，美得令人窒息，这哪里的网络，分明另一个纯美的世界。','女性文章，细腻、浪漫。充满诗意。拜读分享了！很凄美','太到位了精辟文笔极具魅力网脉相连共创家园！','清亮明快，感情真挚，文笔流畅，结构奇特，学习欣赏了朋友的佳作！','言简义长，道出了热爱父母人们的心声！','暂时响应环保的概念还不允许自己有买车的欲望，不过楼上的总结精辟，笑纳了！','拜读分享了，精品、经典、精辟。从字里行间里折射出当今的一些社会现象，实在是高','华彩文章从字里行间里折射出（当今的一些社会现象、社会学系）政治、经济、文化的内涵愤懑妄言  精辟  笑纳了','所言极是   煞有介事缩衣节食内涵深刻','阅我军《八一赋》经典华章、文采飞扬、感悟深刻！阅后心情激动、心潮澎湃、思绪万千！','本文笔调凝重而深情，语言绮丽而精工，构思精巧，令人赞赏！','文笔清新词意优美，内涵深刻，情景交融，欣赏佳作！（欣赏学习。）','精妙绝伦，欣赏佳作！精品经典  极品精髓','清新典雅，意境幽远落笔幽默 意境悠远','制作精美~~惬意陶醉。。。充满诗情画意，欣赏！转了','当之无愧，真正为人民服务，甘心为孺子牛；血汗眼泪流；．．．。圣君贤相载春秋，亿万百姓顿首。','当之无愧，真正为人民服务，甘心为孺子牛；血汗眼泪流圣君贤相载春秋，亿万百姓顿首','评论得很合适，温总无愧于国民  皓如明月  淡如清风','体恤民情同处事能力是两回事！国家真正要的是有智慧有魄力的领导者','山与水的灵动，喜欢，我拿了，谢谢好友','幽静的古典画面，清新的天籁之音！陶醉情操！愉悦心情！非常喜欢！谢谢！','有创意，我顶有趣有趣，值得味。','归纳总结是知识积累的好方法之一。感谢楼主','虽然烦恼会他寻，但快乐可以自找呵','哟，真让我大跌眼。有些有点哲理','我只是觉得很有意思，有些还是有点哲理，有些甚至是现实生活中的缩影，工作烦、心情不好的时候可以用来缓解一下','生命之灯因热情而点燃，生命之舟因拼搏而前行','再长的路，一步步也能走完，再短的路，不迈开双脚也无法到达','有志者自有千计万计，无志者只感千难万难','有一种人可以百看不厌，有一种人一认识就觉得温馨.','拥有梦想只是一种智力，实现梦想才是一种能力','把一腔柔情写得如此气势磅礴，如泣如诉，风情万种，佩服佩服!!!','有诗味诗韵诗情，但有点零碎。供参考','欣赏那些动人心扉的诗词！看来你是个情感丰富，多愁善感的人！','一笔相思债难还，但愿来世化蝶还','玉笙弹尽断人肠，只缘一梦枕黄粱','极目远山生黛色，水中花语梦婵娟','父爱如山，沉稳，却诗意万千','有一种爱绚丽如朝霞，有一种情深沉似大海，有一种爱无私又无畏，有一种情真诚满胸怀','怅望着被一袭月华薄纱笼罩着的秋水伊人，沉浸在一种不可名状的迷离困惑中，我突然觉得连周围的空气都变得恍惚起来','懦弱无为 振我中华，扬我国威','这等刁民，应予严惩！缺乏素质的人怎么越来越多！真是世风日下啊','西游记里告诉我一个真理:有后台的妖精都给带回家了，没后台的就直接给打死了','學而不思則罔，思而不學則殆','不自爱谁又尊重她呢？人格裂变','人以群分，物以类聚。一个字“贱”','今天中国特色社会，只要“银子”到位, 许多怪事都可能发生','好玩吗？男友带着小宠物逛街爬行，，林子大了什么鸟都有','今天中国特色社会，只要“银子”到位, 许多怪事都可能发生','爱情是很需要，重要的让你失去理智。可是别失去人格','非常高兴与你一起度过的每一分钟，希望能使你每时每刻都开心，想起你的名字感觉很甜蜜，期望着与你再见！','學而不思則罔，思而不學則殆','从一个理性务实的大局出发来思考这个问题，','我们需要一个理智中带着强硬的政府','感谢上苍，使我与你相遇。愿上苍保佑你的善良和真诚，愿我们常相聚，永不分离','自从我得到你的爱，好像在漫漫的黑暗中见到了光明，好像在无边的沙漠中得到了清泉，更好像在山石中发现了一枝鲜花，我怎能不感谢你呢？','生活是海，距离是舟，生活是舟。距离是海，有你相伴，绝对精彩！','很痛苦很受伤，地震让人脚发慌；很担忧很不安，流感让人心发狂；很焦虑很郁闷，危机让人碗发抖；很平静很欣慰，有你让我心坚强！很感动很感谢--你！','能又一次接到你的祝福好高兴，也好意外。真的谢谢你能记得我！愿好运常伴你身边，天天好心情！','我们未来的道路是山路崎岖。但是只要有你陪伴，再苦也不觉得累。而且爬上山顶后看到的风景是最美的','感谢上苍给了我一个特别的礼物，那就是你！长长的人生旅程，有你相伴是我一生的幸福']
let sjs = Math.floor(Math.random() * 65); //生成随机数目前为65个随机评论,可以自己添加,添加完几个就在65上面相加自己添加的数量。如自己添加了5个,65改成70,添加方式为在上方数组里加入评论语句。英文逗号相隔,''单引号里加入评论语句。🌰:    这是一个例子 ,'这是一个栗子'

!(async () => {
  if (typeof $request !== "undefined") {
    await shqck()
   
  } else {shqurlArr.push($.getdata('shqurl'))
    shqhdArr.push($.getdata('shqhd'))
    let shqcount = ($.getval('shqcount') || '1');
  for (let i = 2; i <= shqcount; i++) {
    shqurlArr.push($.getdata(`shqurl${i}`))
    shqhdArr.push($.getdata(`shqhd${i}`))
  }
    console.log(`------------- 共${shqhdArr.length}个账号-------------\n`)
      for (let i = 0; i < shqhdArr.length; i++) {
        if (shqhdArr[i]) {
         
          shqurl = shqurlArr[i];
          shqhd = shqhdArr[i];
          $.index = i + 1;
          console.log(`\n开始【生活圈${$.index}】`)
          await shqlb();
          await shqxx();
          if(kg == 1){
          await shqtx();
}
          

  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//生活圈数据获取


function shqck() {
   if ($request.url.indexOf("start=") > -1) {
 const shqurl = $request.url
  if(shqurl)     $.setdata(shqurl,`shqurl${status}`)
    $.log(shqurl)
  const shqhd = JSON.stringify($request.headers)
        if(shqhd)    $.setdata(shqhd,`shqhd${status}`)
$.log(shqhd)
   $.msg($.name,"",'生活圈'+`${status}` +'数据获取成功！')
  }
}






//生活圈任务列表
function shqlb(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : `https://ex.jwshq.cn/app/commentator/getActivityItemPage?start=0&limit=1`,
        headers : JSON.parse(shqhd),
       
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code== 0){
if(result.data.data[0] == undefined){
$.log('\n生活圈没有匹配到任务列表')
}
name = result.data.data[0].title
name = encodeURI(sjpl[sjs]+nr)
key = result.data.data[0].articleId
        console.log('\n生活圈获取任务ID成功\n当前任务ID: '+key+'\n文章标题:'+result.data.data[0].title+'\n开始提交随机评论:'+sjpl[sjs]+nr)
  //$.log(name)
        await $.wait(1000);
        await shqtj()
} else {
       console.log('\n生活圈获取任务ID失败  '+result.msg)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}



//生活圈提交
function shqtj(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "https://ex.jwshq.cn/app/commentator/comment",
        headers : JSON.parse(shqhd),
        body : `imageId=&articleId=${key}&text=${name}&sign=0`,
}
      $.post(url, async (err, resp, data) => {
        try {

           
    const result = JSON.parse(data)
        if(result.data.award == 3){
        console.log('\n生活圈提交评论成功,获得'+result.data.award+'分现金奖励')
       await $.wait(1000);
       await shqtq()
       
} else {
       console.log('\n生活圈错误'+result.data.message)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//生活圈领取现金
function shqtq(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "https://ex.jwshq.cn/app/commentator/increaseBalance",
        headers : JSON.parse(shqhd),
        
}
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.data == true){
        console.log('\n生活圈任务提取现金成功')
       //await $.wait(1000);
        //await shqlb()
} else {
       console.log('\n生活圈任务提取现金失败')

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//生活圈提现
function shqtx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "https://ex.jwshq.cn/app/wx/withdraw",
        headers : JSON.parse(shqhd),
        body : 'amount='+txje,
        
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log(`\n生活圈提现:${result.data.message}`)
      
} else {
       console.log('\n生活圈提现错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//生活圈信息
function shqxx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "https://ex.jwshq.cn/app/commentator/commentAwardInfo",
        headers : JSON.parse(shqhd),
}
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
uid = result.data.awardAmountToday / 100
tid = result.data.awardAmountTotal / 100
        console.log(`\n生活圈今日评论文章数:${result.data.commentNum}\n今日共获得:${uid}元\n我的总收入:${tid}元`)
      
} else {
       console.log('\n生活圈错误'+data)

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

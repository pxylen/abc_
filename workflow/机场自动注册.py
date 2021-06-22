# Code in Python
import time
import requests
import json
import re

print("请输入免验证，无邮箱后缀限制得V2BROAD面板机场地址")
air_address=input()
if "http" not in air_address:
    print("请输入带http开头得地址")
print("如需邀请码请输入邀请码")
air_invte=input()
print("请输入注册个数")
reqs=input()


def get_verification_code(email):
    # We want to get account validation code in email
    validation_code = None
    # We will retry the request every 6 seconds to get the email
    for i in range(50):
        # Get emails from an email box
        req = requests.get('https://www.snapmail.cc/emailList/' + email)
        if req.status_code == 200:
            # Get email text of the first email,
            # take "This is a test email." for example,
            # email_text = "This is a test email."
            #email_text = json.loads(req.text)[0]['text']
            email_text = req.text
            #print(req.text)
            # Use regex to get the validation code, we'll get "test" here.
            # validation_code = "test"
            validation_code = re.search(r'您的验证码是：([a-zA-Z0-9]{6})', email_text)
            break

        print("获取验证码中.......")
        time.sleep(6)
    if validation_code:
        #print('您的验证码是：:' + validation_code.group(1))
        return validation_code.group(1)

def post_v2broad_register(address,air_invte):
    air_address_sendemail=address+"/api/v1/passport/comm/sendEmailVerify"
    air_address_regis = address +"/api/v1/passport/auth/register"
    air_address_login =address+"/api/v1/passport/auth/login"
    email="kidwuom"+time.strftime("%Y%m%d%H%M%S", time.localtime())+"@snapmail.cc"  #构建一个邮箱地址
    reques_email_code=requests.post(air_address_sendemail,data={"email":email}) #让v2b服务器发送验证码
    if "true" in reques_email_code.text:
        #print("机场v2b注册状态：",regist_post.text)
        print("机场验证码发送成功")
        #print("验证码发送状态：",reques_email_code.text)

    email_code_request=email+"?isPrefix=True&count=1"  #构建邮箱组并获取最近一封邮件请求
    email_code=get_verification_code(email_code_request) #获取验证码
    data={"email":email,"password":email,"invite_code":air_invte,"email_code":email_code}

    regist_post=requests.post(air_address_regis,data)#进行注册
    if "true" in regist_post.text:
        #print("机场v2b注册状态：",regist_post.text)
        print("注册成功")
    login_post=requests.post(air_address_login,data={"email":email,"password":email})#进行登录获取token
    if "token" in login_post.text:
        print("获取订阅成功")
        #print(login_post.text)
    token=json.loads(login_post.text)
    sub_address= address + "/api/v1/client/subscribe?token="+token["data"]['token']
    print("机场订阅地址：",sub_address)
    with open("list.txt", "a+") as dump_f:
        dump_f.write("机场："+air_address+"邮箱："+email + "密码："+email+"订阅链接："+sub_address+"\r\n")
for a in range(0,int(reqs)):
    print("开始注册第"+str(a+1)+"个")
    post_v2broad_register(air_address,air_invte)

#!/usr/bin/env python3
# _*_ coding:utf-8 _*_

# 此脚本参考 https://github.com/Sunert/Scripts/blob/master/Task/youth.js

import traceback
import time
import re
import json
import sys
import os
from util import send, requests_session
from datetime import datetime, timezone, timedelta

# YOUTH_HEADER 为对象, 其他参数为字符串
# 选择微信提现30元，立即兑换，在请求包中找到withdraw2的请求，拷贝请求body类型 p=****** 的字符串，放入下面对应参数即可 YOUTH_WITHDRAWBODY
# 分享一篇文章，找到 put.json 的请求，拷贝请求体，放入对应参数 YOUTH_SHAREBODY
# 清除App后台，重新启动App，找到 start.json 的请求，拷贝请求体，放入对应参数 YOUTH_STARTBODY

cookies1 = {
  'YOUTH_HEADER': {"Cookie":"sensorsdata2019jssdkcross=%7B%22distinct_id%22%3A%2251588723%22%2C%22%24device_id%22%3A%221762cb7bac231c-00cda555c687f5-754c1551-370944-1762cb7bac361a%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%221762cb7bac231c-00cda555c687f5-754c1551-370944-1762cb7bac361a%22%7D; Hm_lvt_268f0a31fc0d047e5253dd69ad3a4775=1607829925,1607829938,1607830056,1607830065; Hm_lvt_6c30047a5b80400b0fd3f410638b8f0c=1607829255,1607829607,1607829666,1607829923; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2251588723%22%2C%22%24device_id%22%3A%221764a9c379985-022856cfe98f5a8-754c1551-370944-1764a9c379aff0%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%221764a9c379985-022856cfe98f5a8-754c1551-370944-1764a9c379aff0%22%7D; Hm_lvt_b161e73c7240a915db9a5c171d7fd6c5=1606753583,1607790495","Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Connection":"keep-alive","Host":"kd.youth.cn","Accept-Language":"zh-cn","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148","Referer":"https://kd.youth.cn/html/taskCenter/index.html?uuid=d7c11d0afc94bf0193702a2d2d37e455&sign=9e1ca75e5521b04ff913c158b2347572&channel_code=80000000&uid=51588723&channel=80000000&access=WIfI&app_version=1.8.0&device_platform=iphone&cookie_id=cf0ac89b18d33b5ded619b901fb978ba&openudid=d7c11d0afc94bf0193702a2d2d37e455&device_type=1&device_brand=iphone&sm_device_id=202011191042385c2a0dc85220a736e6501f9d2baf385901e71d1d26c0b271&device_id=48555420&version_code=180&os_version=14.3&cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualq2jmrCarWOwt4lthnyY367eqmqXr6NthJl7mI-shMmXeqDau4StacS3o7GFonaZsKmqaIKvebKEY2Ft&device_model=iPhone_6_Plus&subv=1.5.1&&cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualq2jmrCarWOwt4lthnyY367eqmqXr6NthJl7mI-shMmXeqDau4StacS3o7GFonaZsKmqaIKvebKEY2Ft&cookie_id=cf0ac89b18d33b5ded619b901fb978ba","X-Requested-With":"XMLHttpRequest"},
  'YOUTH_READBODY': 'p=9NwGV8Ov71o%3DgW5NEpb6rjb84bkaCQyOq-myT0C-Ktb_lgXXENBlMWjgdt2eFsJi4FV71nWDXdXT6C5gioHBTSn7rK0dXFkhDeJIZ5oDXpx9Vt3jnAJ4AwMkOK-OCcx0IflI9Z3ixeEvV284ONFvvktkFa9VEcsPdQR1YwXfcKpDcqzkFTEBdQU2fWKjy0TxL49mKLwT7nCeEWEOqXtxP4qi3Cym3GipOxTBuaEHzPmbUAMPV02OnBqN78U8vXAQPqNLx9aByHOR2C4nZfgjmbeOERXE4nu90uzDhQCTOphXLmJGCdfeuudW3brb6zKb3MRdv-sxvgeqbHq_KZf3SeGOIB7oL6I1WedlfWHpL40H697gehUdPalFCSzBwpvDlsCiJlHBZW05OPNjmb58R8d7uNLCzpwApF_Qe1FWJlQW6WowSlfa4bZoDtgphvC9p0_7SwhXwvDaEMCP3zynFrhf3CKgVX2-y0GptIVeC-IJiVVkB47z3K3gKZEg65EOv3oHLVuhc30jRKXNOIEZ64WAUsvVkrwt9CPLmL7RJRdZ_FvBaObVJTbdtBEmPNXcbyuVVeE6v91mWCOxTs5Kzm7n3at-_-Xarmhmf0erm8sClIgIXw6caqoxN-3pqGvELUsV7Nw5vlCOr6gaV4ZkAW1rQcv44FNEvHs_XcUKbTqMNNcNGChtLOs58QLtDeDem5KTwcqj7ROR3P4msE6t6lvFTQp8ba-ZIhQDQbkQ5lcyazfIOVnZBacJ1eMCfcw0PSIafWxg-okh_U9lCBXbVPc-ww8kDCNHho0k53PAi7-74s5Prbv6whhasDGzMBe8EnQQWcoq6gddR7b_4BJxoqM%3D',
  'YOUTH_REDBODY': 'p=9NwGV8Ov71o%3DgW5NEpb6rjazbBlBp4-3VBqIE6FTR2KhfyLVi7Pl1_m0wwPJgXu-Fmh7S-5HqV6oWj7JJ4qWtBJt0fh-qv29p69GkFSZXyiVpfk2fLyJ64mS6psDlfOAi5bst2-zG2GXOelpGEJGIBg-CpPfjVwRzWA7TQsOs3s2Ui7VRWxMyWShEQDVHFFJf7i293v1ez48s6k0YKoAy2yMCXgJFa_g6mLuM0NseSqQsm32hQ9cHwtqn8wRQTSod6BWMbTM1GEofoiKvVrZfHHMIBN5e07blCC81mhqm8nMVLnywBw38yFgt1_S81NbveEN4gt0cfNUumXLYBPmboxdugRWQ4jn7Ry5mt9KrpENOXp9qrocI5uGlm8gALOGSLs2dcP0fjWehBq_pgr5O933JFVltb3pzTU6OuyWryCLYM3DFljf79jVfv3NIb1NU9laLCnWJxD7iZUZRtv9RXNyI-Fs7sivU6Upfk0snvfnqdtWTS6vnNT2r1owZ1M2ZE2fdkiQbJf5M5E1n1dnbOknk6lOZ_PZTZg6xNjrU67bTV5cXeCtLxCBQBpilrCw5FUsxms4-98zOXvIqGgGxRCMHln4_5SmQzEzl8SywGmdfHcQXOJHufbiyIdAmZWRFk3_YY1BZ3i8hiDVMdEJucDkiUMj5bEP0aLKc4Aihk0atLyXxHspEwcxBhdpwyK-Cwyo3_4p_m4zrJ-f05L1uftD1fpvbt-JijJ2Iia99a8k4HYlYeX-SsmCddFqt-Xsaazz1OjxrP9aveGbEVG6Xv2e5ToeXsb3zGkpKYj1I6t_umENtxAdt2-yTl5AFatJaMR0us0_Y3PIu0G1ypjx5EU%3D',
  'YOUTH_READTIMEBODY': 'p=9NwGV8Ov71o%3DgW5NEpb6rjb84bkaCQyOq-myT0C-Ktb_nHSVk1s5Pk1lOQlYKzDUPU9y0FiOH2nIRqKp1NEljKT7rNHR8sm-zNM1uYF037ZLhJ3Xl0xswFUmY-cQ_hr0wixkQsFjVI3HBBKV9Vi7Arv9ucr9IYetIj9Zqs0mPLwQax27ryeUONmpOJjDtMyvEfm8Ff7eywmwYmEn9dK65rauEP6rRuWvqGPKyAmuhEUJwanXW31_m3gIPmW2bKSwt-Fdw-wmSMpy2hkQTONg9aXmHZTi_uhHCAuPIccyOaxuBl6ZZGoc-HvB7vTkRXQQeg-xDL59BrNxbbmj4uOQ7_iPLRCrAxV1yrBVMWrg-1h8zNpIQmCuTs1Aq764wGAhljouGGy-FHgRRQa0qoKGzQfnC265wDeQlPnSK7u5V_BnoDFIeikxDZNbtlh4BTdisZPogG8nsakg1m4crNA-_HJFluB-Ak9Xvf_lwGxKlXxZvhYP1e5uKFsZRINjZyKqKFhWFTHcXc4iLNSsfBP7isNT5TJlHdjL98vLTS8dlU2UvsF1dv4QfLggrHPyqfgtuoRP2x9JXDAkE77PWzGocQUrFsQxwN7BcrVIo5pIRjwt0Gh6InDlQ5PwZGcGTQY2yX2rIE3RFBKlVawygy1KAhCrJt_8wM16t4_RqdwrkQ-XQLLSZhyiZoG4Gqk0JO8gpEbK5kmsgQsZzXHcacVzFEJUZaUC1u7GFPF_b4nA_oSmymWybCFRMES90oMNlFCwY_z42qtuoAx8LkTfMI_ljEQ5mtYNTGHxco6ym0ywP50X1MGD0IZ1NIqDwrO1dgYF-2NqMMevfoesYA4JIoltYWw%3D',
  'YOUTH_WITHDRAWBODY': 'p=9NwGV8Ov71o%3DgW5NEpb6rjb84bkaCQyOq-myT0C-Ktb_mEtDEGsOrBruuZzIpWlevTEf2n4e6SDtwtHI8jh7tGLFm1iscPtbZwlhO1--2rPMqEVay5SHQZ0Xa5om9y_QnFioIoDSg-ArtrfwznZt1IhRAOspLNm4F1Z4mRILDUTDM9AS-u45jBAHpRMEOlwzc5JqpcKjMMGbYB0wYiHVu-G8zkefV4u_eZ1bkZ-Q_nMw-obs5BUBKxO8xSwMxf_WbjfTaMFdjTnYfT2eOlJnrJxTxsO8dvmRn9YYFcXsHc9LcNCs5lIQnTifo1qRei2gcLfoh5G-R_CrmzRjXzF03J624ZZTwrg3qsau6QfyP25pknAxxeJ7WiMAwyS-0P9nxGtTIjkb9TZQ-jPvHneVVwTtofa2RYLfXvmC6CiX-cypZ6byinGtN_fC8tNqc5j39hTbcrweWQ7pfb5dmhUefswNG-f9H2erOlIDzkMilzai2iyde6o8ovoVji6T0D_qPPsKV86qA0Gqufkvy6RDk3w1HlpLEqtzLBoYqUhaHRi8rutp7G8g4HhiT9de1XlDp9XxJdV8ZJm7JgkUsLBF_TOOtUtJihWIW6IMVBM2ljwTUYDI_gD7AaILCiESd0YRxrDiPc1vhfDYPmJ3BBunqy7__zSBtTe07kvbNhj0UuHVYkm-V-oAN_VtuVkvXrY9AAjeO9lH1vnnT4LcNYDGPyqDNS2c5gNYfy8EPrqMjV4Vjv-3po98lUKAOrdC-hwgtpSWDUa2Zb0J0JU4gTLsttXAM-FgEhyEIGx2Pg3s468ynBoYgFEOdrybKNvv_DKPecjSTOS1di-LgBEjSXyAjSI%3D',
  'YOUTH_SHAREBODY': 'access=WIFI&app_version=2.0.0&article_id=36228401&channel=80000000&channel_code=80000000&cid=80000000&client_version=2.0.0&device_brand=iphone&device_id=48555420&device_model=iPhone&device_platform=iphone&device_type=iphone&from=0&is_hot=0&isnew=1&mobile_type=2&net_type=1&openudid=d7c11d0afc94bf0193702a2d2d37e455&os_version=14.4&phone_code=d7c11d0afc94bf0193702a2d2d37e455&phone_network=WIFI&platform=3&request_time=1613207449&resolution=828x1792&sign=e694d3dd492d9049888134eb89f8b1c2&sm_device_id=202011191042385c2a0dc85220a736e6501f9d2baf385901e71d1d26c0b271&stype=WEIXIN&szlm_ddid=D2qeYlHbw8gsQ0wdf3jMSEhmak4qTkFhm5t6UZzFTN47wX41&time=1613207449&uid=51588723&uuid=d7c11d0afc94bf0193702a2d2d37e455',
  'YOUTH_STARTBODY': 'access=WIFI&app_version=2.0.0&channel=80000000&channel_code=80000000&cid=80000000&client_version=2.0.0&device_brand=iphone&device_id=48555420&device_model=iPhone&device_platform=iphone&device_type=iphone&isnew=1&mobile_type=2&net_type=1&openudid=d7c11d0afc94bf0193702a2d2d37e455&os_version=14.5&phone_code=d7c11d0afc94bf0193702a2d2d37e455&phone_network=WIFI&platform=3&request_time=1613737438&resolution=828x1792&sm_device_id=202011191042385c2a0dc85220a736e6501f9d2baf385901e71d1d26c0b271&szlm_ddid=D2qeYlHbw8gsQ0wdf3jMSEhmak4qTkFhm5t6UZzFTN47wX41&time=1613737438&token=171efe18fdcb17456aef307e3e1d06aa&uid=51588723&uuid=d7c11d0afc94bf0193702a2d2d37e455'
}
cookies2 = {
  'YOUTH_HEADER': {"Cookie":"sensorsdata2019jssdkcross=%7B%22distinct_id%22%3A%2217152179%22%2C%22%24device_id%22%3A%221768933821e302-0abdd14277f3dd8-734c1551-250125-1768933821f68e%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%221768933821e302-0abdd14277f3dd8-734c1551-250125-1768933821f68e%22%7D; Hm_lvt_268f0a31fc0d047e5253dd69ad3a4775=1608619623; sajssdk_2019_cross_new_user=1","Accept":"*/*","Accept-Encoding":"br, gzip, deflate","Connection":"keep-alive","Host":"kd.youth.cn","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148","Accept-Language":"zh-cn","Referer":"https://kd.youth.cn/html/taskCenter/index.html?uuid=44f19eacae46b39caf09d6a4b2a027db&sign=8bd06b5add5c814a97699f3e5f680433&channel_code=80000000&uid=17152179&channel=80000000&access=WIfI&app_version=1.8.0&device_platform=iphone&cookie_id=afbba847690a9908e74c699bd93c9bf0&openudid=44f19eacae46b39caf09d6a4b2a027db&device_type=1&device_brand=iphone&sm_device_id=20200318135918cdbb215496a5e7f64e46535ab982b00601b60f98950f17e9&device_id=49128135&version_code=180&os_version=12.2&cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIej3q-rqWOwzXlshoyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLCnm2uEjKCar6mmapqGcXY&device_model=iPhone_6&subv=1.5.1&&cookie=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIej3q-rqWOwzXlshoyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLCnm2uEjKCar6mmapqGcXY&cookie_id=afbba847690a9908e74c699bd93c9bf0","X-Requested-With":"XMLHttpRequest"},
  'YOUTH_READBODY': 'p=9NwGV8Ov71o%3DgW5NEpb6rjazbBlBp4-3VBqIE6FTR2KhfyLVi7Pl1_m0wwPJgXu-Fmh7S-5HqV6o2kNNfxbTBdHNeGGUACeILyWR3zMN6Iw3IXfZs4Lu-yb9ynQmQje6lCx_IwxRVvI2SNym5MJ3oH5lFqmbtpdkJfwhB1sUJEdEgJ5iEwGnEtnWJDQPgSUh_43T95feCdA6znUBf7UdpUNuu05JsguiVgA3zNG_8zQwE0LU-bf-hzxqL8KQzdrABkZ5U--QVWM6cOzDEnPQ7O65GzEiVOXu-V2m1VcWaWlwui8nwIgMz2XDikj0OhbEgXVsx8zq19tuFciPTfVsWQT8z2aq-qwtbYKEW05VZHqir9tn1MmzGg9xn_RyBvqVLQGinkiuLa8Ygkj_RFcxp3co8KKLMlOamuFRlY9h1Wkjn1RHH-MwBNbBstlJH6_sE7rLqwH7CxYnF1XZH2J9LXMfLw1k-G8MgwUxNSyVXswnox0x_Rt8FRGd19WqtDRDIrWoBHnQ6au2Jx13O5lUo6aJIsgNTihoh-Ny7uZ5lVLXj-Z7aVizpoGOnschBkSlul8vLnhMqB4ISDDYA5gExYZju96ukdJ-DIYA3vwTEJx21cljZQsc7KrQpxw06u-qDv0UwVTLI2L9bIir5yU_bLysz36vaFkI573lGA6aVS_Pq8Y169LNnFKDuag6eZDsiUoRuSK0_dIIRWEEeccn2Iwo5CPC4bQb4kKFeE60GkNAfqWkhUNS10UdVHCH53zBcmVWaXCNGiIHgaVrIfb01jGgIqdsLoa-xcbirjrHS6ROmAFGHmDrS9HUr8Q_WtkjK8gBZ5xAWnTbYDgaz532IKnnNMUGCkrtOw%3D%3D',
  'YOUTH_REDBODY': 'p=9NwGV8Ov71o%3DgW5NEpb6rjb84bkaCQyOq-myT0C-Ktb_lgXXENBlMWjgdt2eFsJi4FV71nWDXdXT6C5gioHBTSn7rK0dXFkhDeJIZ5oDXpx9Vt3jnAJ4AwMkOK-OCcx0IflI9Z3ixeEvV284ONFvvktkFa9VEcsPdQR1YwXfcKpDcqzkFTEBdQU2fWKjy0TxL49mKLwT7nCeEWEOqXtxP4qi3Cym3GipOxTBuaEHzPmbUAMPV02OnBqN78U8vXAQPqNLx9aByHOR2C4nZfgjmbeOERXE4nu90uzDhQCTOphXLmJGCdfeuudW3brb6zKb3MRdv-sxvgeqbHq_KZf3SeGOIB7oL6I1WedlfWHpL40H697gehUdPalFCSzBwpvDlsCiJlHBZW05OPNjmb58R8d7uNLCzpwApF_Qe1FWJlQW6WowSlfa4bZoDtgphvC9p0_7SwhXwvDaEMCP3zynFrhf3CKgVX2-y0GptIVeC-IJiVVkB47z3K3gKZEg65EOv3oHLVuhc30jRKXNOIEZ64WAUsvVkrwt9CPLmL7RJRdZ_FvBaObVJTbdtBEmPNXcbyuVVeE6v91mWCOxTs5Kzm7n3at-_-Xarmhmf0erm8sClIgIXw6caqoxN-3pqGvELUsV7Nw5vlCOr6gaV4ZkAW1rQcv44FNEvHs_XcUKbTqMNNcNGChtLOs58QLtDeDem5KTwcqj7ROR3P4msE6t6lvFTQp8ba-ZIhQDQbkQ5lcyazfIOVnZBacJ1eMCfcw0PSIafWxg-okh_U9lCBXbVPc-ww8kDCNHho0k53PAi7-74s5Prbv6whhasDGzMBe8EnQQWcoq6gddR7b_4BJxoqM%3D',
  'YOUTH_READTIMEBODY': 'p=9NwGV8Ov71o%3DgW5NEpb6rjb84bkaCQyOq-myT0C-Ktb_nHSVk1s5Pk1lOQlYKzDUPU9y0FiOH2nIRqKp1NEljKT7rNHR8sm-zNM1uYF037ZLhJ3Xl0xswFUmY-cQ_hr0wixkQsFjVI3HBBKV9Vi7Arv9ucr9IYetIj9Zqs0mPLwQax27ryeUONn6pEl5i6NGO5ubbgrzkkMy9OkI0hGY1IMO3QlFKKkzb9NOMYRih9kQeEwlBOjsRWPtA7ouAE8YHVy0D1Jfr4kSxBvuvtLlvTx3o4caBz1Rzvojmb2ATpZkHzAZtA2q-pPVjNcsOsbfTv5WWxjUf4pcZ-j0C7vljluycFiZ0oL8PiTA_RXpso-LNg-2ea5U3zgG8TTwI5Tt2W8YX4X3sRcaT6ws_NwPFO5H5Np6rWCOCcI3MuoX5lP67qPHSPuoCpnpHLsBSR2EQYcE1hw9Pm2ZtsmaMEpR6RzihlHJBtkLzn9enMUAwdVQvF3AD1CpmSknp5Agwg7lyl_f2fQDeCndxpDHAXpLtZXljWYxzNOfzeZfeisq3pKjWXegP75x5Al94uozVLnj7iamT15w9ZpmL25DyGoW1ZIksD3CxhAK-mCbx6Tr-XPcuKe6NGhwXd7wK-CeqryKH3Fs7PyrUf6rft1aYe4fMZk1rHhr2bhL9VMUrheMNyQ1cC3Aa8VeY3GuIzjVkcbYsaZe9Y9uUldffOR3tfYCXPRH-gdkigXWqbv4ooPI6bpvk8VAlnCSDZRjLVfGSW3EmJ-zmusXq-crSlgtYWnpy_wJIg9PpP1RS7Vd7gYuMHvku8V5WhxfEgTfBZGJt55R1exy4zExGg2M4okJO3i6cpk%3D',
  'YOUTH_WITHDRAWBODY': 'p=9NwGV8Ov71o%3DgW5NEpb6rjb84bkaCQyOq-myT0C-Ktb_mEtDEGsOrBruuZzIpWlevTEf2n4e6SDtwtHI8jh7tGLFm1iscPtbZwlhO1--2rPMqEVay5SHQZ0Xa5om9y_QnFioIoDSg-ArtrfwznZt1IhRAOspLNm4F1Z4mRILDUTDM9AS-u45jBBoO9KsrIJlso1jfH8ltz0a3B_UWDULPHsqIPi2q4tvX_0Xp2WV7uDPVTv5oLngKa0W7-tEkvsC9AkyHVexk912yJo_zAGYRZvAH7m71bwKOtwq0vhaDucJl_kY3Kr-MRlGYsQq1piqrTG3gBGGExqEx6smGrsdalVjS0WEf4ng4lz-xaJbmY7VQb7CV3-qdPeFSQF2pY49vCgynhh80JW6uYj_etKXVfSDCIBgAdtr1-vtgSohBBpiik-S291gpnavMlnkvuC31t3VyWmeQCnYYGVTBqyxl45B7dzZMqofgeD_9gtEpWeQeG7d-HaQJGLogRWJIP_bggbbw22aP3Gpq-rRGBRq-WoPvWKuUXWZaJRfCQLGu0nh9DWMgIccIzHAI7eVLPOw3FJsa9I2UHmM89AGCSd_g9lteMcBb-Y1hu8lZO7daZKaCU6kiBji4ZR6R9YYwYao5W4ll7aeJlK57jhQTeBcLqplH1E0wpZnrJyiZbvt64vJlzJW53gcAVHMExhVkG4q5m4rF5XB-mGEs2Ns8noccBk3jkoN8-tdBEMdFCI-h-FCWekD144zyD4UAZFpL4qxMqppmUS-qOnzUMQZbe97tLl1i_50PgWl9xL1j02vRaHMMHMX3zOywdN2FMiYPQVTQQ4_X9f-bjiygjrKVqlDWYw%3D',
  'YOUTH_SHAREBODY': 'access=WIFI&app_version=2.0.0&article_id=36294792&channel=80000000&channel_code=80000000&cid=80000000&client_version=2.0.0&device_brand=iphone&device_id=50154457&device_model=iPhone&device_platform=iphone&device_type=iphone&from=0&is_hot=0&isnew=1&mobile_type=2&net_type=1&openudid=184b31a359a71321d6c75ae8b537702d&os_version=14.4&phone_code=184b31a359a71321d6c75ae8b537702d&phone_network=WIFI&platform=3&request_time=1613207644&resolution=750x1334&sign=646c6d9da892ac04e5e2f38bb143b13b&sm_device_id=202101311306559fee8a0fd6fb33e54789d2a45b50c8d801885ba9ee925e9f&stype=WEIXIN&szlm_ddid=D29J0P1UdWH0oUooU/OdD7B0DFC4RMth2/ECXmh7wlq7AX54&time=1613207644&uid=17152179&uuid=184b31a359a71321d6c75ae8b537702d',
  'YOUTH_STARTBODY': 'access=WIFI&app_version=2.0.0&channel=80000000&channel_code=80000000&cid=80000000&client_version=2.0.0&device_brand=iphone&device_id=50154457&device_model=iPhone&device_platform=iphone&device_type=iphone&isnew=1&mobile_type=2&net_type=1&openudid=184b31a359a71321d6c75ae8b537702d&os_version=14.4&phone_code=184b31a359a71321d6c75ae8b537702d&phone_network=WIFI&platform=3&request_time=1613737590&resolution=750x1334&sm_device_id=202101311306559fee8a0fd6fb33e54789d2a45b50c8d801885ba9ee925e9f&szlm_ddid=D29J0P1UdWH0oUooU/OdD7B0DFC4RMth2/ECXmh7wlq7AX54&time=1613737590&token=32baea450f7763541c494104900e2d74&uid=17152179&uuid=184b31a359a71321d6c75ae8b537702d'
}

COOKIELIST = [cookies1,cookies2]  # 多账号准备

# ac读取环境变量
if "YOUTH_HEADER1" in os.environ:
  COOKIELIST = []
  for i in range(5):
    headerVar = f'YOUTH_HEADER{str(i+1)}'
    readBodyVar = f'YOUTH_READBODY{str(i+1)}'
    readTimeBodyVar = f'YOUTH_READTIMEBODY{str(i+1)}'
    withdrawBodyVar = f'YOUTH_WITHDRAWBODY{str(i+1)}'
    shareBodyVar = f'YOUTH_SHAREBODY{str(i+1)}'
    startBodyVar = f'YOUTH_STARTBODY{str(i+1)}'
    if headerVar in os.environ and os.environ[headerVar] and readBodyVar in os.environ and os.environ[readBodyVar] and readTimeBodyVar in os.environ and os.environ[readTimeBodyVar]:
      globals()['cookies'+str(i + 1)]["YOUTH_HEADER"] = json.loads(os.environ[headerVar])
      globals()['cookies'+str(i + 1)]["YOUTH_READBODY"] = os.environ[readBodyVar]
      globals()['cookies' + str(i + 1)]["YOUTH_READTIMEBODY"] = os.environ[readTimeBodyVar]
      globals()['cookies' + str(i + 1)]["YOUTH_WITHDRAWBODY"] = os.environ[withdrawBodyVar]
      globals()['cookies' + str(i + 1)]["YOUTH_SHAREBODY"] = os.environ[shareBodyVar]
      globals()['cookies' + str(i + 1)]["YOUTH_STARTBODY"] = os.environ[startBodyVar]
      COOKIELIST.append(globals()['cookies'+str(i + 1)])
  print(COOKIELIST)

cur_path = os.path.abspath(os.path.dirname(__file__))
root_path = os.path.split(cur_path)[0]
sys.path.append(root_path)
YOUTH_HOST = "https://kd.youth.cn/WebApi/"

def get_standard_time():
  """
  获取utc时间和北京时间
  :return:
  """
  # <class 'datetime.datetime'>
  utc_datetime = datetime.utcnow().replace(tzinfo=timezone.utc)  # utc时间
  beijing_datetime = utc_datetime.astimezone(timezone(timedelta(hours=8)))  # 北京时间
  return beijing_datetime

def pretty_dict(dict):
    """
    格式化输出 json 或者 dict 格式的变量
    :param dict:
    :return:
    """
    return print(json.dumps(dict, indent=4, ensure_ascii=False))

def sign(headers):
  """
  签到
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = 'https://kd.youth.cn/TaskCenter/sign'
  try:
    response = requests_session().post(url=url, headers=headers, timeout=30).json()
    print('签到')
    print(response)
    if response['status'] == 1:
      return response
    else:
      return
  except:
    print(traceback.format_exc())
    return

def signInfo(headers):
  """
  签到详情
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = 'https://kd.youth.cn/TaskCenter/getSign'
  try:
    response = requests_session().post(url=url, headers=headers, timeout=30).json()
    print('签到详情')
    print(response)
    if response['status'] == 1:
      return response['data']
    else:
      return
  except:
    print(traceback.format_exc())
    return

def punchCard(headers):
  """
  打卡报名
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = f'{YOUTH_HOST}PunchCard/signUp'
  try:
    response = requests_session().post(url=url, headers=headers, timeout=30).json()
    print('打卡报名')
    print(response)
    if response['code'] == 1:
      return response
    else:
      return
  except:
    print(traceback.format_exc())
    return

def doCard(headers):
  """
  早起打卡
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = f'{YOUTH_HOST}PunchCard/doCard'
  try:
    response = requests_session().post(url=url, headers=headers, timeout=30).json()
    print('早起打卡')
    print(response)
    if response['code'] == 1:
      shareCard(headers=headers)
      return response['data']
    else:
      return
  except:
    print(traceback.format_exc())
    return

def shareCard(headers):
  """
  打卡分享
  :param headers:
  :return:
  """
  time.sleep(0.3)
  startUrl = f'{YOUTH_HOST}PunchCard/shareStart'
  endUrl = f'{YOUTH_HOST}PunchCard/shareEnd'
  try:
    response = requests_session().post(url=startUrl, headers=headers, timeout=30).json()
    print('打卡分享')
    print(response)
    if response['code'] == 1:
      time.sleep(0.3)
      responseEnd = requests_session().post(url=endUrl, headers=headers, timeout=30).json()
      if responseEnd['code'] == 1:
        return responseEnd
    else:
      return
  except:
    print(traceback.format_exc())
    return

def luckDraw(headers):
  """
  打卡分享
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = f'{YOUTH_HOST}PunchCard/luckdraw'
  try:
    response = requests_session().post(url=url, headers=headers, timeout=30).json()
    print('七日签到')
    print(response)
    if response['code'] == 1:
      return response['data']
    else:
      return
  except:
    print(traceback.format_exc())
    return

def timePacket(headers):
  """
  计时红包
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = f'{YOUTH_HOST}TimePacket/getReward'
  try:
    response = requests_session().post(url=url, data=f'{headers["Referer"].split("?")[1]}', headers=headers, timeout=30).json()
    print('计时红包')
    print(response)
    return
  except:
    print(traceback.format_exc())
    return

def watchWelfareVideo(headers):
  """
  观看福利视频
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = f'{YOUTH_HOST}NewTaskIos/recordNum?{headers["Referer"].split("?")[1]}'
  try:
    response = requests_session().get(url=url, headers=headers, timeout=30).json()
    print('观看福利视频')
    print(response)
    return
  except:
    print(traceback.format_exc())
    return

def shareArticle(headers, body):
  """
  分享文章
  :param headers:
  :return:
  """
  url = 'https://ios.baertt.com/v2/article/share/put.json'
  headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
  try:
    response = requests_session().post(url=url, data=body, headers=headers, timeout=30).json()
    print('分享文章')
    print(response)
    return
  except:
    print(traceback.format_exc())
    return

def threeShare(headers, action):
  """
  三餐分享
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = f'{YOUTH_HOST}ShareNew/execExtractTask'
  headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
  body = f'{headers["Referer"].split("?")[1]}&action={action}'
  try:
    response = requests_session().post(url=url, data=body, headers=headers, timeout=30).json()
    print('三餐分享')
    print(response)
    return
  except:
    print(traceback.format_exc())
    return

def openBox(headers):
  """
  开启宝箱
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = f'{YOUTH_HOST}invite/openHourRed'
  try:
    response = requests_session().post(url=url, headers=headers, timeout=30).json()
    print('开启宝箱')
    print(response)
    if response['code'] == 1:
      share_box_res = shareBox(headers=headers)
      return response['data']
    else:
      return
  except:
    print(traceback.format_exc())
    return

def shareBox(headers):
  """
  宝箱分享
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = f'{YOUTH_HOST}invite/shareEnd'
  try:
    response = requests_session().post(url=url, headers=headers, timeout=30).json()
    print('宝箱分享')
    print(response)
    if response['code'] == 1:
      return response['data']
    else:
      return
  except:
    print(traceback.format_exc())
    return

def friendList(headers):
  """
  好友列表
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = f'{YOUTH_HOST}ShareSignNew/getFriendActiveList'
  try:
    response = requests_session().get(url=url, headers=headers, timeout=30).json()
    print('好友列表')
    print(response)
    if response['error_code'] == '0':
      if len(response['data']['active_list']) > 0:
        for friend in response['data']['active_list']:
          if friend['button'] == 1:
            time.sleep(1)
            friendSign(headers=headers, uid=friend['uid'])
      return response['data']
    else:
      return
  except:
    print(traceback.format_exc())
    return

def friendSign(headers, uid):
  """
  好友签到
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = f'{YOUTH_HOST}ShareSignNew/sendScoreV2?friend_uid={uid}'
  try:
    response = requests_session().get(url=url, headers=headers, timeout=30).json()
    print('好友签到')
    print(response)
    if response['error_code'] == '0':
      return response['data']
    else:
      return
  except:
    print(traceback.format_exc())
    return

def sendTwentyScore(headers, action):
  """
  每日任务
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = f'{YOUTH_HOST}NewTaskIos/sendTwentyScore?{headers["Referer"].split("?")[1]}&action={action}'
  try:
    response = requests_session().get(url=url, headers=headers, timeout=30).json()
    print(f'每日任务 {action}')
    print(response)
    if response['status'] == 1:
      return response
    else:
      return
  except:
    print(traceback.format_exc())
    return

def watchAdVideo(headers):
  """
  看广告视频
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = 'https://kd.youth.cn/taskCenter/getAdVideoReward'
  headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
  try:
    response = requests_session().post(url=url, data="type=taskCenter", headers=headers, timeout=30).json()
    print('看广告视频')
    print(response)
    if response['status'] == 1:
      return response
    else:
      return
  except:
    print(traceback.format_exc())
    return

def watchGameVideo(body):
  """
  激励视频
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = 'https://ios.baertt.com/v5/Game/GameVideoReward.json'
  headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
  try:
    response = requests_session().post(url=url, headers=headers, data=body, timeout=30).json()
    print('激励视频')
    print(response)
    if response['success'] == True:
      return response['items']
    else:
      return
  except:
    print(traceback.format_exc())
    return

def visitReward(body):
  """
  回访奖励
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = 'https://ios.baertt.com/v5/mission/msgRed.json'
  headers = {
    'User-Agent': 'KDApp/1.8.0 (iPhone; iOS 14.2; Scale/3.00)',
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
  try:
    response = requests_session().post(url=url, data=body, headers=headers, timeout=30).json()
    print('回访奖励')
    print(response)
    if response['success'] == True:
      return response['items']
    else:
      return
  except:
    print(traceback.format_exc())
    return

def articleRed(body):
  """
  惊喜红包
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = 'https://ios.baertt.com/v5/article/red_packet.json'
  headers = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
  try:
    response = requests_session().post(url=url, data=body, headers=headers, timeout=30).json()
    print('惊喜红包')
    print(response)
    if response['success'] == True:
      return response['items']
    else:
      return
  except:
    print(traceback.format_exc())
    return

def readTime(body):
  """
  阅读时长
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = 'https://ios.baertt.com/v5/user/stay.json'
  headers = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
  try:
    response = requests_session().post(url=url, data=body, headers=headers, timeout=30).json()
    print('阅读时长')
    print(response)
    if response['error_code'] == '0':
      return response
    else:
      return
  except:
    print(traceback.format_exc())
    return

def rotary(headers, body):
  """
  转盘任务
  :param headers:
  :return:
  """
  time.sleep(0.3)
  currentTime = time.time()
  url = f'{YOUTH_HOST}RotaryTable/turnRotary?_={currentTime}'
  try:
    response = requests_session().post(url=url, data=body, headers=headers, timeout=30).json()
    print('转盘任务')
    print(response)
    return response
  except:
    print(traceback.format_exc())
    return

def rotaryChestReward(headers, body):
  """
  转盘宝箱
  :param headers:
  :return:
  """
  time.sleep(0.3)
  currentTime = time.time()
  url = f'{YOUTH_HOST}RotaryTable/getData?_={currentTime}'
  try:
    response = requests_session().post(url=url, data=body, headers=headers, timeout=30).json()
    print('转盘宝箱')
    print(response)
    if response['status'] == 1:
      i = 0
      while (i <= 3):
        chest = response['data']['chestOpen'][i]
        if response['data']['opened'] >= int(chest['times']) and chest['received'] != 1:
          time.sleep(1)
          runRotary(headers=headers, body=f'{body}&num={i+1}')
        i += 1
      return response['data']
    else:
      return
  except:
    print(traceback.format_exc())
    return

def runRotary(headers, body):
  """
  转盘宝箱
  :param headers:
  :return:
  """
  time.sleep(0.3)
  currentTime = time.time()
  url = f'{YOUTH_HOST}RotaryTable/chestReward?_={currentTime}'
  try:
    response = requests_session().post(url=url, data=body, headers=headers, timeout=30).json()
    print('领取宝箱')
    print(response)
    if response['status'] == 1:
      return response['data']
    else:
      return
  except:
    print(traceback.format_exc())
    return

def doubleRotary(headers, body):
  """
  转盘双倍
  :param headers:
  :return:
  """
  time.sleep(0.3)
  currentTime = time.time()
  url = f'{YOUTH_HOST}RotaryTable/toTurnDouble?_={currentTime}'
  try:
    response = requests_session().post(url=url, data=body, headers=headers, timeout=30).json()
    print('转盘双倍')
    print(response)
    if response['status'] == 1:
      return response['data']
    else:
      return
  except:
    print(traceback.format_exc())
    return

def incomeStat(headers):
  """
  收益统计
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = f'https://kd.youth.cn/wap/user/balance?{headers["Referer"].split("?")[1]}'
  try:
    response = requests_session().get(url=url, headers=headers, timeout=50).json()
    print('收益统计')
    print(response)
    if response['status'] == 0:
      return response
    else:
      return
  except:
    print(traceback.format_exc())
    return

def withdraw(body):
  """
  自动提现
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = 'https://ios.baertt.com/v5/wechat/withdraw2.json'
  headers = {
    'User-Agent': 'KDApp/1.8.0 (iPhone; iOS 14.2; Scale/3.00)',
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
  try:
    response = requests_session().post(url=url, headers=headers, data=body, timeout=30).json()
    print('自动提现')
    print(response)
    if response['success'] == True:
      return response['items']
    else:
      return
  except:
    print(traceback.format_exc())
    return

def bereadRed(headers):
  """
  时段红包
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = f'{YOUTH_HOST}Task/receiveBereadRed'
  try:
    response = requests_session().post(url=url, headers=headers, timeout=30).json()
    print('时段红包')
    print(response)
    if response['code'] == 1:
      return response['data']
    else:
      return
  except:
    print(traceback.format_exc())
    return

def startApp(headers, body):
  """
  启动App
  :param headers:
  :return:
  """
  time.sleep(0.3)
  url = 'https://ios.baertt.com/v6/count/start.json'
  headers = {
    'User-Agent': 'KDApp/1.8.0 (iPhone; iOS 14.2; Scale/3.00)',
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
  try:
    response = requests_session().post(url=url, headers=headers, data=body, timeout=30).json()
    print('启动App')
    print(response)
    if response['success'] == True:
      return response
    else:
      return
  except:
    print(traceback.format_exc())
    return

def run():
  title = f'📚中青看点'
  content = ''
  result = ''
  beijing_datetime = get_standard_time()
  print(f'\n【中青看点】{beijing_datetime.strftime("%Y-%m-%d %H:%M:%S")}')
  hour = beijing_datetime.hour
  for i, account in enumerate(COOKIELIST):
    headers = account.get('YOUTH_HEADER')
    readBody = account.get('YOUTH_READBODY')
    readTimeBody = account.get('YOUTH_READTIMEBODY')
    withdrawBody = account.get('YOUTH_WITHDRAWBODY')
    shareBody = account.get('YOUTH_SHAREBODY')
    startBody = account.get('YOUTH_STARTBODY')
    rotaryBody = f'{headers["Referer"].split("&")[15]}&{headers["Referer"].split("&")[8]}'

    if startBody:
      startApp(headers=headers, body=startBody)
    sign_res = sign(headers=headers)
    if sign_res and sign_res['status'] == 1:
      content += f'【签到结果】：成功 🎉 明日+{sign_res["nextScore"]}青豆'
    elif sign_res and sign_res['status'] == 2:
      send(title=title, content=f'【账户{i+1}】Cookie已过期，请及时重新获取')
      continue

    sign_info = signInfo(headers=headers)
    if sign_info:
      content += f'\n【账号】：{sign_info["user"]["nickname"]}'
      content += f'\n【签到】：+{sign_info["sign_score"]}青豆 已连签{sign_info["total_sign_days"]}天'
      result += f'【账号】: {sign_info["user"]["nickname"]}'
    friendList(headers=headers)
    if hour > 12:
      punch_card_res = punchCard(headers=headers)
      if punch_card_res:
        content += f'\n【打卡报名】：打卡报名{punch_card_res["msg"]} ✅'
    if hour >= 5 and hour <= 8:
      do_card_res = doCard(headers=headers)
      if do_card_res:
        content += f'\n【早起打卡】：{do_card_res["card_time"]} ✅'
    luck_draw_res = luckDraw(headers=headers)
    if luck_draw_res:
      content += f'\n【七日签到】：+{luck_draw_res["score"]}青豆'
    visit_reward_res = visitReward(body=readBody)
    if visit_reward_res:
      content += f'\n【回访奖励】：+{visit_reward_res["score"]}青豆'
    if shareBody:
      shareArticle(headers=headers, body=shareBody)
      for action in ['beread_extra_reward_one', 'beread_extra_reward_two', 'beread_extra_reward_three']:
        time.sleep(5)
        threeShare(headers=headers, action=action)
    open_box_res = openBox(headers=headers)
    if open_box_res:
      content += f'\n【开启宝箱】：+{open_box_res["score"]}青豆 下次奖励{open_box_res["time"] / 60}分钟'
    watch_ad_video_res = watchAdVideo(headers=headers)
    if watch_ad_video_res:
      content += f'\n【观看视频】：+{watch_ad_video_res["score"]}个青豆'
    watch_game_video_res = watchGameVideo(body=readBody)
    if watch_game_video_res:
      content += f'\n【激励视频】：{watch_game_video_res["score"]}个青豆'
    read_time_res = readTime(body=readTimeBody)
    if read_time_res:
      content += f'\n【阅读时长】：共计{int(read_time_res["time"]) // 60}分钟'
    if (hour >= 6 and hour <= 8) or (hour >= 11 and hour <= 13) or (hour >= 19 and hour <= 21):
      beread_red_res = bereadRed(headers=headers)
      if beread_red_res:
        content += f'\n【时段红包】：+{beread_red_res["score"]}个青豆'
    for i in range(0, 5):
      time.sleep(5)
      rotary_res = rotary(headers=headers, body=rotaryBody)
      if rotary_res:
        if rotary_res['status'] == 0:
          break
        elif rotary_res['status'] == 1:
          content += f'\n【转盘抽奖】：+{rotary_res["data"]["score"]}个青豆 剩余{rotary_res["data"]["remainTurn"]}次'
          if rotary_res['data']['doubleNum'] != 0 and rotary_res['data']['score'] > 0:
            double_rotary_res = doubleRotary(headers=headers, body=rotaryBody)
            if double_rotary_res:
              content += f'\n【转盘双倍】：+{double_rotary_res["score"]}青豆 剩余{double_rotary_res["doubleNum"]}次'

    rotaryChestReward(headers=headers, body=rotaryBody)
    for i in range(5):
      watchWelfareVideo(headers=headers)
    timePacket(headers=headers)
    for action in ['watch_article_reward', 'watch_video_reward', 'read_time_two_minutes', 'read_time_sixty_minutes', 'new_fresh_five_video_reward', 'first_share_article']:
      time.sleep(5)
      sendTwentyScore(headers=headers, action=action)
    stat_res = incomeStat(headers=headers)
    if stat_res['status'] == 0:
      for group in stat_res['history'][0]['group']:
        content += f'\n【{group["name"]}】：+{group["money"]}青豆'
      today_score = int(stat_res["user"]["today_score"])
      score = int(stat_res["user"]["score"])
      total_score = int(stat_res["user"]["total_score"])

      if score >= 300000 and withdrawBody:
        with_draw_res = withdraw(body=withdrawBody)
        if with_draw_res:
          result += f'\n【自动提现】：发起提现30元成功'
          content += f'\n【自动提现】：发起提现30元成功'
          send(title=title, content=f'【账号】: {sign_info["user"]["nickname"]} 发起提现30元成功')

      result += f'\n【今日收益】：+{"{:4.2f}".format(today_score / 10000)}'
      content += f'\n【今日收益】：+{"{:4.2f}".format(today_score / 10000)}'
      result += f'\n【账户剩余】：{"{:4.2f}".format(score / 10000)}'
      content += f'\n【账户剩余】：{"{:4.2f}".format(score / 10000)}'
      result += f'\n【历史收益】：{"{:4.2f}".format(total_score / 10000)}\n\n'
      content += f'\n【历史收益】：{"{:4.2f}".format(total_score / 10000)}\n'

  print(content)

  # 每天 23:00 发送消息推送
  if beijing_datetime.hour == 23 and beijing_datetime.minute >= 0 and beijing_datetime.minute < 5:
    send(title=title, content=result)
  elif not beijing_datetime.hour == 23:
    print('未进行消息推送，原因：没到对应的推送时间点\n')
  else:
    print('未在规定的时间范围内\n')

if __name__ == '__main__':
    run()
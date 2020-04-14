import 'whatwg-fetch'
import 'es6-promise'
import QS from 'qs'
import { Toast } from 'antd-mobile';

//count是用于统计get请求发送了多少次
let count = 0;

export function fetchGet(url) {
    if (count == 0) {
        Toast.loading('Loading...', 0, true);
    }
    count++;
    let result = fetch(url, {
        method: 'GET',
        /*
        fetch不管在同域还是在跨域的情况下，默认都不携带cookie的，所以那些需要权限验证的请求就无法正常获取到数据，这时候需要配置credentials项，有一下三个选项可添：
         	 omit： 默认值，忽略cookie的发送
       		 same-origin： 表示cookie只能同域发送，不能跨域发送
       		 include： 表示既可以同域发送，也可以跨域发送
        */
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    })
    //有三种方式解析获取到的数据：
    //1 json数据      用reponse.json()来解析
    //2 xml格式文件     用response.text()来解析
    //3 图片文件      用response.blob()来解析
    return result.then((response) => {
        count--;
        if (count == 0) {
            Toast.hide()
        }
        return response.json()
    }, (err) => {
        count--;
        if (count == 0) {
            Toast.hide()
        }
    })
}

/*
{
  name:"zhangsan",
  age:18  
}

body: name=zhangsan&age=18
*/
export function fetchPost(url, paramsObj) {
    let result = fetch(url, {
        method: 'POST',
        /*
        fetch不管在同域还是在跨域的情况下，默认都不携带cookie的，所以那些需要权限验证的请求就无法正常获取到数据，这时候需要配置credentials项，有一下三个选项可添：
         	 omit： 默认值，忽略cookie的发送
       		 same-origin： 表示cookie只能同域发送，不能跨域发送
       		 include： 表示既可以同域发送，也可以跨域发送
        */
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: QS.stringify(paramsObj)
    })
    return result.then((response) => {
        return response.json()
    })
}

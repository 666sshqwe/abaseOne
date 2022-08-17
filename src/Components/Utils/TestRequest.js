import axios from "axios";


/**
 * 封装post请求
   试例
 //post请求可以使用通用方法，请求体body只需要和后端实体类字段对应即可
 let data = {
            "roleName":"陈小川",
            "taskInfo":"隐藏自己的身份",
            "info":"第一幕"
        };
 Request("post","/store/updateInfo",data).then(
 (res)=>{
                console.log("执行post完成，返回值："+res);
            });
 *
 * */
export function post(url,data={}) {
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then(
            (response)=>{
                resolve(response.data);
            },
            (err)=>{
                reject(err);
            }
        )
    })
}


/**
 * 封装get方法
 * 感觉get请求无法做封装，url传参，后端需要对应的参数名
 *
 // //通用写法
 // axios.get("/store/roleInfo",{
 //     params:{
 //         roleID:"1102"
 //     }
 // })
 //     .then(res =>res.data)
 //     .then(data=>{
 //         console.log("接受到的消息是："+data);
 //     })
 * */
export function get(url,params={}) {
    return new Promise((resolve,reject)=>{
        axios.get(url,{
            /** params是总的参数，代表会拼接参数再路径上，后面具体写上拼接的参数名和值
             * 就成了 "http://192.168.43.66:8015/stores/xxx?roleID={params}"
             * */
            params:{
                roleID:params
            },
        }).then((response)=>{
            resolve(response.data)
        })
            .catch((error)=>{
                reject(error);
            });
    });
}
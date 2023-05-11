import axios from "axios";

axios.defaults.timeout = 10000;
axios.defaults.baseURL = "http://172.20.10.6:8015/stores";



/**
 * request请求拦截
 * */
axios.interceptors.request.use(
    (config)=>{
        config.data = JSON.stringify(config.data);
        config.headers = {
            "Content-Type":"application/json"
        };
        return config;
    },
    (error => {
        return Promise.reject("你的请求失败了")
    })
);

/**
 * responese请求拦截
 * */
axios.interceptors.response.use(
    (response)=>{
        if(response.data.errorCode === 2){
            console.log("过期！");
        }
        return response;
    },
    (error => {
        console.log("你的请求失败了",error);
    })
);

/**
 * 查看返回的数据
 *
 *
 * */
function landing(url,params,data) {
    if(data.code === -1){
        console.log("请求有问题====landing");
    }
}


/**
 * 封装get方法
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

/**
 * 封装post请求
 *
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
 * 封装put请求
 *
 *
 * */
export function put(url,data={}) {
    return new Promise((resolve,reject)=>{
        axios.put(url,data).then(
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
 * 统一的接口处理，对外暴露
 *
 * */
export default function (fecth,url,param,headsValue) {
    let _data = "";
    return new Promise((resolve,reject)=>{
        switch (fecth) {
            case "get":
                console.log("begin a get request,url: ",url);
                get(url,param)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log("get request GET failed",error);
                        reject(error);
                    });
            break;
            case "post":
                console.log("begin a post request,url: ",url);
                post(url,param)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log("get request POST failed",error);
                        reject(error);
                    });
                break;
            default:
                break;
        }
    })
}

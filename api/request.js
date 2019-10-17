import axios from 'axios';

// const baseURL = process.env.VUE_APP_AJAX; // 请求的服务器地址，根据.env.development 和.env.production 的配置改变
const baseURL = 'http://lzw.vipgz2.idcfengye.com'
const ajax = (options) => {
  // var self = this;
  const {
    url = '',
    api = '',
    method = 'GET', 
    data = {},
    timeout = 60 * 1000,            //1分钟
    withCredentials = true,        //`withCredentials`选项表明了是否是跨域请求
    LoadingText = '加载中...',       //Loading提示文字
    describe = '',                  //接口介绍
    showLoad = true, // 加载动画
    // showTips = true, // 提示
  } = options;

  return new Promise((resolve, reject) => {

    var formData = (method === 'POST' || method === 'post') ? (JSON.stringify(data) || JSON.stringify({})) : (data || {});
    axios({
      baseURL: url || baseURL,
      url: api || '',
      method: method,
      data: formData,
      params: method === 'get' || method === 'delete' ? data : null,
      // responseType: 'text',
      headers: {
        // 'Authorization': getTokenKey(), 
        'Content-Type': 'application/json;charset=UTF-8'
      },
      timeout: timeout,  
      withCredentials: withCredentials,  
    }).then(res => {
      if (res.data.hasOwnProperty('errno')) {
        resolve(res.data);
      } else {
        if (res.data) {
          resolve(res.data)
        }
      }
    }).catch(err => {
      // this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
      // });
      reject(err)
      console.log("请求：" + (describe || api))
      console.log("返回：", JSON.parse(JSON.stringify(err)))
    });
  })
}

export default ajax
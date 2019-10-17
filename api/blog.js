import ajax from './request';

const config = {
    getList: '/api/blog/list',   
    new: '/api/blog/new', 
    detail: '/api/blog/detail?id=',
    del: '/api/blog/del',
    update: '/api/blog/update'
}


export const getList = function () {
  return new Promise ((resolve, reject) => {
    ajax({
      api: config.getList,
      describe: '博客列表',
      method: 'get',
    }).then(data => {
      resolve(data)
    }).catch(err => {
      reject(err)
    })
  })
}
  
export  const detail = function (data) {
  return new Promise ((resolve, reject) => {
    ajax({
      api: config.detail + data.id,
      describe: '博客详情',
      method: 'get',
    }).then(data => {
      resolve(data)
    }).catch(err => {
      reject(err)
    })
  })
}
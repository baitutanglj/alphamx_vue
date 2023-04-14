import request from '@/api/request'
export function getListen(url,data) {
    // console.log(data);
    return request({
        url:url,
        method: 'post',
        data: data,

    })
}
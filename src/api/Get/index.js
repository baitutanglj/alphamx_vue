import request from '@/api/request'
export function getListen(url,data) {
    return request({
        url:url,
        method: 'get',
        params: data,

    })
}

import request from '@/utils/request'

export function postList (data) {
  return request({
    url: 'communityData/council_list',
    method: 'post',
    data: data
  })
}

export function getList (data) {
  return request({
    url: 'communityData/council_list',
    method: 'get',
    params: data
  })
}

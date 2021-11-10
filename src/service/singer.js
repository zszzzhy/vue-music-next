import { get } from './base'

export function getSingerList () {
  return get('/api/getSingerList')
}
// 获取歌手详情数据
export function getSingerDetail (singer) {
  return get('/api/getSingerDetail', {
    mid: singer.mid
  })
}

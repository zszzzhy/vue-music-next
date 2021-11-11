import { get } from './base'

export function processSongs (songs) {
  if (!songs.length) {
    return Promise.resolve(songs)
  }

  return get('/api/getSongsUrl', {
    mid: songs.map(song => {
      return song.mid
    })
  }).then(result => {
    const { map } = result
    return songs.map((song) => {
      song.url = map[song.mid]
      return song
    }).filter(song => {
      // 过滤掉不能播放的歌曲
      return song.url && song.url.indexOf('vkey') > -1
    })
  })
}

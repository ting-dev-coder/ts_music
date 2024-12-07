import httpRequest from '@/service'

export function getPlaylistById() {
  return httpRequest.get({
    url: '/search',
    params: { limit: 5, q: 'q=genre:hip-hop', type: 'track' }
  })
}

export function getCategoryPlaylist(genre: string) {
  return httpRequest.get({
    url: '/search',
    params: {
      limit: 5,
      q: `q=genre:${genre},tag:${new Date().getFullYear()}`,
      type: 'track'
    }
  })
}

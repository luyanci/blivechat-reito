import { apiClient as axios } from './base'

export async function getServerInfo() {
  return (await axios.get('/api/server_info')).data
}

export async function uploadEmoticon(file) {
  let body = new FormData()
  body.set('file', file)
  return (await axios.post('/api/emoticon', body)).data
}

export async function uploadCustomCSS(file) {
  let body = new FormData()
  body.set('file', file)
  return (await axios.post('/api/custom_css', body)).data
}

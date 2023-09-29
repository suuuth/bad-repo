import http from '@/services/http'

export const setup = (store) => {
  http.interceptors.request.use(
  request => {

    if (request.url.includes('api')) {
      request.credentials = true
      request.headers['Authorization'] = `Bearer ${store.getters.StateToken}`
    }

    console.log(request)

    return request
  },
  error => {
      return Promise.reject(error)
    }
  )
}

export default setup;

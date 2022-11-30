import axios from 'axios'
//import AuthenticationHelper from './authenticationHelper'
import { notification } from 'antd'

//axios.defaults.baseURL = `${window.location.protocol}//${window.location.host}/api/`
axios.defaults.baseURL = `${window.location.protocol}//localhost:8000/api`

const errorHandler = error => {
  if(error.response){
    let message
    try {
      message = typeof error.response.data !== 'object' ? error.response.data
        : error.response.data.error ? error.response.data.error 
          : error.response.data.ExceptionMessage ? error.response.data.ExceptionMessage
            : error.response.data.Message ? error.response.data.Message
              : error.response.data.message ? error.response.data.message
                : 'Ocurrio un error...'
    } catch (e) {
      message = 'Ocurrio un error...'
    }

    switch(error.response.status){
      // case 401:
      //   AuthenticationHelper.logout(() => {
      //     window.location.replace("/login")
      //   })
      //   message = message.length > 300 ? message.substring(0, 300) + '...' : message
      //   notification.error({ message: 'Error', description: message, placement: 'bottomRight' })
      //   break
      case 404:
        message = "[Endpoint No encontrado] " + error.response.config.baseURL + error.response.config.url
        notification.error({ message: 'Error', description: message, placement: 'bottomRight' })
        break
      case 500:
        if(message.indexOf('Foreign key violation') > -1){
          let idxStart = message.indexOf('referenced from table') + 'referenced from table'.length
          let idxEnd = message.indexOf('(SQL:')
          message = 'El registro esta siendo utilizado en otra entidad. ' + message.substring(idxStart, idxEnd)
        }
        message = message.length > 300 ? message.substring(0, 300) + '...' : message
        notification.error({ message: 'Error', description: message, placement: 'bottomRight' })
        break
      default: 
        message = message.length > 300 ? message.substring(0, 300) + '...' : message
        notification.error({ message: 'Error', description: message, placement: 'bottomRight' })
    }
    return Promise.reject(error)
  }
  notification.error({ message: 'Error', description: error.data ? error.data : error, placement: 'bottomRight' })  
  return Promise.reject(error)
}

// axios.interceptors.request.use(config => {
//   config.headers = AuthenticationHelper.isJwtTokenStored() ? { ...config.headers, Authorization: `Bearer ${AuthenticationHelper.getJwtToken()}` } : config.headers
//   return config
// })

axios.interceptors.response.use(
  response => {
    if(response.data.ValidationErrors){
      let  validationMessage = ''
      for (const validationType in response.data.ValidationErrors) {
        validationMessage += response.data.ValidationErrors[validationType] + '\n'
      }
      response.status = 400
      return errorHandler(validationMessage)
    }
    return response
  },
  error => errorHandler(error)
)

export default class Request {
  static get(path, callback) {
    return axios.get(path, { callback })
  }

  static post(path, data = {}, callback) {
    return axios.post(path, data, { callback })
  }

  static postMultipart(path, data = {}, callback) {
    return axios.post(path, data, { callback, headers: {'Content-Type': `multipart/form-data boundary=${data._boundary}` } })
  }

  static put(path, data = {}, callback) {
    return axios.put(path, data, { callback })
  }

  static delete(path, callback) {
    return axios.delete(path, { callback })
  }

  static patch(path, data = {}, callback) {
    return axios.patch(path, data, { callback })
  }

  static download(path){
    return axios({ url: path, method: 'GET', responseType: 'blob'})
  }
}

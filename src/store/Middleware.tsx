// inspired by https://leanpub.com/redux-book
import axios, {Method} from 'axios'
import {API, apiEnd, apiError, apiStart} from './Api'
import settings from '../settings'
import md5 from 'js-md5'

const apiMiddleware = ({dispatch}: any) => (
  next: (arg0: any) => void
) => (action: {
  type: string
  payload: {
    url: string
    method: Method
    data: any
    onSuccess: Function
    onFailure: Function
    label: string
    headers: string
  }
}) => {
  next(action)

  if (action.type !== API) {
    return
  }

  let {url, method, data, onSuccess, onFailure, label, headers} = action.payload

  axios.defaults.baseURL = settings.api_service.url
  axios.defaults.headers.common['Content-Type'] = 'application/json'

  const private_key = settings.private_key
  const public_key = settings.public_key
  const timestamp = Number(new Date())
  const hash = md5.create()
  hash.update(timestamp + private_key + public_key)

  url = `${
    settings.api_service.url
  }${url}&ts=${timestamp}&apikey=${public_key}&hash=${hash.hex()}`

  if (label) {
    dispatch(apiStart(label))
  }

  axios
    .request({
      url,
      method,
      headers,
      data,
    })
    .then((payload) => {
      dispatch(onSuccess(payload.data))
    })
    .catch((error) => {
      dispatch(apiError(error))
      dispatch(onFailure(error))
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label))
      }
    })
}

export default apiMiddleware

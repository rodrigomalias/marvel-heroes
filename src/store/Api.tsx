export const API = 'API'
export const API_START = 'API_START'
export const API_END = 'API_END'
export const ACCESS_DENIED = 'ACCESS_DENIED'
export const API_ERROR = 'API_ERROR'

export const apiStart = (label: string) => ({
  type: API_START,
  payload: label,
})

export const apiEnd = (label: string) => ({
  type: API_END,
  payload: label,
})

export const accessDenied = (url: string) => ({
  type: ACCESS_DENIED,
  payload: {
    url,
  },
})

export const apiError = (error: string) => ({
  type: API_ERROR,
  error,
})

export function apiRequest({
  url = '',
  method = 'GET',
  data = null,
  onSuccess = (_data: any) => {},
  onFailure = (_data: any) => {},
  label = '',
  headersOverride = null,
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      onSuccess,
      onFailure,
      label,
      headersOverride,
    },
  }
}

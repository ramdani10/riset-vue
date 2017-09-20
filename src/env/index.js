// define main url to the API end point
const API_BASE_URL = 'http://localhost:8000'
const API_BASE_GRAPHQL = 'http://127.0.0.1:8000/graphql/query'

// create function for build url base on payload or query params
/*
const MEDIA = (mid = '') => {
  const type = typeof mid

  switch (type) {
    case 'string':
      return mid === '' ? `${API_BASE_URL}/media` : `${API_BASE_URL}/media/${mid}`
    case 'object':
      return `${API_BASE_URL}/media${toQueryParams(mid)}`
  }
}

const LOGIN = () => {
  return `${API_BASE_URL}/login`
}

const USER = (uid = null) => {
  return uid === '' ? `${API_BASE_URL}/user` : `${API_BASE_URL}/user/${uid}`
}

const REGISTER = () => {
  return `${API_BASE_URL}/register`
}

const BOOK = (bid = '') => {
  const type = typeof bid

  switch (type) {
    case 'string':
      return bid === '' ? `${API_BASE_URL}/book` : `${API_BASE_URL}/book/${bid}`
    case 'object':
      return `${API_BASE_URL}/book${toQueryParams(bid)}`
  }
}

const PAGE_GROUP = () => {
  return `${API_BASE_URL}/page_group`
}
const DEBUG = true
*/

export {
  API_BASE_URL,
  API_BASE_GRAPHQL
}

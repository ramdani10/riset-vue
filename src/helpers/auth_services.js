/* eslint-disable */
// import { isJson } from './helpers'
// import store from './../store'
const KEY_USER = 'token'

export const authenticated = (to, from, next) => {
  if (hasValidUser()) {
    return hasValidUser()
  }

  // store.commit('setAuthenticated', false)
  return next('/login')
}

export const guest = (to, from, next) => {
  if (!user()) {
    return next()
  }

  return next('/intro')
}

export const hasValidUser = () => {
  return user() 
  // && userNotExpired()
}

export const user = () => {
  return localStorage.getItem(KEY_USER)
}

export const userNotExpired = () => {
  const user = localStorage.getItem(KEY_USER) ? getUser() : null
  const createdAt = new Date(user.createdAt).getTime()
  const now = new Date().getTime()
  const diff = (now - createdAt)

  if (Math.floor(diff / 1000 / 60) <= 120) {
    return true
  }

  destroyUserToken()
  return false
}

export const getUser = () => {
  // if (isJson(localStorage.getItem(KEY_USER)) && localStorage.getItem(KEY_USER) !== null) {
  //   return JSON.parse(localStorage.getItem(KEY_USER))
  // }

  if (localStorage.getItem(KEY_USER) && localStorage.getItem(KEY_USER) !== null) {
    return localStorage.getItem(KEY_USER)
  }

  destroyUserToken()
  return {
    // _id: '',
    token: ''
    // createdAt: ''
  }
}

export const storeUserToken = (userData) => {
  const user = {
    _id: userData._id,
    token: userData.token,
    username: userData.username,
    email: userData.email,
    createdAt: new Date()
  }

  localStorage.setItem(KEY_USER, JSON.stringify(user))
}

export const destroyUserToken = () => {
  localStorage.setItem(KEY_USER, null)
  localStorage.removeItem(KEY_USER)
  // store.commit('setAuthenticated', false)
}

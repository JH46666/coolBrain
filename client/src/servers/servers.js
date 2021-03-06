/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http"

//验证Ticket是否有效
export const getResultData_auth = (postData) => {
  return HTTPREQUEST.post('auth/', postData)
}

//获取徽章接口
export const getResultData_badges = (postData) => {
  return HTTPREQUEST.get('badges/', postData)
}

//获取我的徽章
export const getResultData_MyBadge = (postData) => {
  return HTTPREQUEST.get('badges/my/', postData)
}

export const getUserId = (postData) => {
  return HTTPREQUEST.post('users/{id}', postData)
}

//获取评论
export const getResultData_getComment = (postData) => {
  return HTTPREQUEST.get('comments/', postData)
} 

//发送评论
export const getResultData_postComment = (postData) => {
  return HTTPREQUEST.post('comments/', postData)
} 

//冥想音频获取接口
export const getResultData_frequencies = (postData) => {
  return HTTPREQUEST.get('frequencies/', postData)
}

//获取欢迎语
export const getResultData_greeting = (postData) => {
  return HTTPREQUEST.get('greeting/now/', postData)
}

//写日记
export const getResultData_postsDiary = (postData) => {
  return HTTPREQUEST.post('posts/', postData)
}

//获取日记
export const getResultData_getDiary = (postData) => {
  return HTTPREQUEST.get('posts/', postData)
}

//获取我的个人信息
export const getResultData_profiles = (postData) => {
  return HTTPREQUEST.put('profiles/my/', postData)
}

//获取每日登录弹窗内容
export const getResultData_sentencesTody = (postData) => {
  return HTTPREQUEST.get('sentences/today/', postData)
}
//发送心情
export const getResultData_moodTody = (postData) => {
  return HTTPREQUEST.post('mood/today/', postData)
}

//发送心情
export const getResultData_checkMood = (postData) => {
  return HTTPREQUEST.get('mood/', postData)
}

//获取我的详情
export const getResultData_myDetail = (postData)=>{
  return HTTPREQUEST.get('profiles/my_detail/', postData)
}

//发送评论
export const getResultData_putPost = (postData)=>{
  return HTTPREQUEST.put(`posts/${postData.id}/`, postData)
}
//获取tick
export const getResultData_tickValid = (postData)=>{
  return HTTPREQUEST.get(`ticket/isvalid/`, postData, {
    lockOthers: true,
    hasErr: false
  })
}

// 获取音频时长
export const getResultData_subtype_duration= (postData)=>{
  return HTTPREQUEST.get(`subtype-duration/`, postData)
}

// 重置日期
export const getResultData_reset_punch= (postData)=>{
  return HTTPREQUEST.get(`debug/reset-punch/`, postData)
}


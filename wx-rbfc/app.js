//app.js
var aldstat = require("utils/ald-stat.js");
function req(){//
var code=""
 wx.login({
        success: function(r){
          code=r.code  
        }
      })
wx.getUserInfo({
          success: function(re){
            console.log(re)
           cre(code,re.userInfo)
          }
        })
}
function cre(code,ur){
wx.request({
  url: 'https://jphouse.wechatapp.net/Default.aspx',
  data: {'Code':'1001',
  'bs':code,
  'name':ur.nickName,
  'logo':ur.avatarUrl,
  'sex':ur.gender,
  'address':ur.province},
  method: 'GET', 
  success: function(res){
    
    wx.setStorageSync('openid', res.data)
      
  },
  fail: function(res) {
 
  },
  complete: function(res) {
    // complete
  }
})


}
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  //全局方法 用户创建
  createUser:function(url){
     req(url)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
    }
  },
  globalData:{
    userInfo:null
  }
  //分享


})
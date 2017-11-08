// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  login : function(){
    wx.redirectTo({
        url: '../index/index',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
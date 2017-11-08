//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
  },
  detail : function(){
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  // 搜索结果
  result : function(){
    wx.navigateTo({
      url: '../list/list',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

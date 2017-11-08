//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
      hiddenLoading : false
  },
  goList : function(){
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

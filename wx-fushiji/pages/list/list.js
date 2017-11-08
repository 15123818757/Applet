// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  // 辅食详情
  goDetail : function(){
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
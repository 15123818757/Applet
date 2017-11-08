// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  // 收藏
  collect : function(){
    wx.navigateTo({
      url: '../collect/collect',
    })
  },
  // 产品收藏
  goods : function(){
    wx.navigateTo({
      url: '../collect_goods/collect_goods',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
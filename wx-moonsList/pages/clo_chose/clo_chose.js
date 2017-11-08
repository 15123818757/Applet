// pages/clo_chose/clo_chose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  goDetail : function(){
    wx.navigateTo({
      url: '../clo_detail/clo_detail',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
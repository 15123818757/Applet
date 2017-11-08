// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  back : function(){
   wx.redirectTo({
     url: '../onlineShop/onlineShop',
   })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
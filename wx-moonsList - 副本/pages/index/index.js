// pages/onlineShop/onlineShop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  // 商品
  goClo : function(){
    wx.navigateTo({
      url: '../clo_chose/clo_chose',
    })
  },
  // 跳转到购物车
  goCart : function(){
    wx.navigateTo({
      url: '../cart/cart',
    })
  },
  // 跳转到我的订单
  goMyOrder: function () {
    wx.navigateTo({
      url: '../myOrder/myOrder',
    });
  },
  // 返回用户
  goUser : function(){
    wx.navigateTo({
      url: '../index_2/index_2',
    })
  },
  goShop : function(){
    wx.navigateTo({
      url: '../clothes/clothes'
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
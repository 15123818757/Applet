//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    loginDis : "block",
    afterDis : "none"
  },
  onLoad: function () {
    
  },
  // 跳转到申请会员页面
  login : function(){
    wx.navigateTo({
      url: '../login/login',
    })
    this.setData({
      loginDis: "none",
      afterDis: "block"
    });
  },
  // 跳转到在线商城页面
  goOnlineShop : function(){
    wx.navigateTo({
      url: '../clothes/clothes',
    })
  },
  // 跳转到我的订单
  goMyOrder : function(){
    wx.navigateTo({
      url: '../myOrder/myOrder',
    });
  },
  // 修改资料
  goUser : function(){
    wx.navigateTo({
      url: '../user/user',
    })
  },
  // 会员福利
  goGift : function(){
    wx.navigateTo({
      url: '../gift/gift',
    })
  },
  // 购物袋
  goCart : function(){
    wx.navigateTo({
      url: '../cart/cart',
    })
  },
//   修改密码页面
    update : function(){
        wx.navigateTo({
            url: '../update/update',
        })
    },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

// pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cImg: "../img/d_icon1.png",
    cText : "收藏",
    PLDis : 'none'
  },
  // 收藏
  collect : function(){
    var cc = this;
    if (cc.data.cImg == '../img/d_icon1.png' ){
      cc.setData({
        cImg: "../img/d_icon1_2.png",
        cText: "已收藏"
      })
    }else{
      cc.setData({
        cImg: "../img/d_icon1.png",
        cText: "收藏"
      })
    }
  },
  // 显示评论框
  showPL : function(){
    this.setData({
      PLDis : "block"
    })
  },
  // 隐藏评论框
  hidePL : function(){
    this.setData({
      PLDis: "none"
    })
  },
  text : function(){

  },
  sub : function(){

  },
  // 产品详情
  product : function(){
    wx.navigateTo({
      url: '../product/product',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
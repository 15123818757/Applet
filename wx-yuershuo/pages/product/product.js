// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cImg: "../img/d_icon1.png",
    cText: "收藏",
  },
  // 收藏
  collect: function () {
    var cc = this;
    if (cc.data.cImg == '../img/d_icon1.png') {
      cc.setData({
        cImg: "../img/d_icon1_2.png",
        cText: "已收藏"
      })
    } else {
      cc.setData({
        cImg: "../img/d_icon1.png",
        cText: "收藏"
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
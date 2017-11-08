// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxImg: '../img/er.jpg',
    zfbImg: '../img/er.jpg',
  },
  go : function(){
    wx.redirectTo({
      url: '../add/add',
    })
  },
  // 下载微信二维码
  downWx : function(){
    var imgSrc = this.data.wxImg;
    wx.downloadFile({
      url: imgSrc, //仅为示例，并非真实的资源
        success: function (res) {
        wx.showToast({
          title: res.tempFilePath,
        })
      }
    });
  },
  // 下载支付宝二维码
  downZfb: function () {
    var imgSrc = this.data.wxImg;
    wx.downloadFile({
      url: imgSrc, //仅为示例，并非真实的资源
      success: function (res) {
        wx.showToast({
          title: res.tempFilePath,
        })
      }
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
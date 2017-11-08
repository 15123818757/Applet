// pages/testWebView/testWebView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      if (wx.openBluetoothAdapter) {
          wx.openBluetoothAdapter()
      } else {
          // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
          wx.showModal({
              title: '提示',
              content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
          })
      }
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
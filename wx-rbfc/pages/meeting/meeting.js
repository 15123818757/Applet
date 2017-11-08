var WxParse = require('../../wxParse/wxParse.js');

function loadDt(table,that){
wx.request({
   url: 'https://jphouse.wechatapp.net/Default.aspx',
   data: {'Code':'1006','table':table},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
    console.log(res.data)
    that.setData({
        all:res.data[0]
    })
     WxParse.wxParse('article', 'html', res.data[0].content1, that, 5);
      WxParse.wxParse('article2', 'html', res.data[0].content2, that, 5);
  },
  fail: function(res) {
    // fail
  },
  complete: function(res) {
    // complete
  }
})



}
Page({

  /**
   * 页面的初始数据
   */
  data: {
      all:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
  
    var article = ``;
		loadDt("xiangtanhui",that)
    
   
  },
  // 打开在线留言
  goSignUp : function(){
    wx.navigateTo({
      url: '../signUp/signUp',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
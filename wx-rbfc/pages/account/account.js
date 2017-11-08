// pages/account/account.js
var app=new getApp();
var id="0"
function getUser(openid,that){
wx.request({
  url: 'https://jphouse.wechatapp.net/Default.aspx',
  data: {'Code':'1003','openid':openid},
  method: 'GET', 
  success: function(res){
    console.log(res)
     that.setData({
     img:res.data[0].logo,
      name:res.data[0].name
     })
  }
})}
Page({

  /**
   * 页面的初始数据
   */
  data: {
     img:"",
     name:''
  },
  goEdit : function(){
    wx.navigateTo({
      url: '../editInfo/editInfo',
    })
  },
  goCollect : function(){
      wx.navigateTo({
        url: '../collect/collect',
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var that = this
 var openid= wx.getStorageSync('openid')
         if(openid=='' || openid=='undefined'){
             app.createUser()
         }
          getUser(openid,that)
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
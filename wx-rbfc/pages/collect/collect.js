// pages/collect/collect.js
var x_start = 0;
var x_end = 0;
var x_final = 0;
var id="0"
var phone="110";
var collLengh = 0;
function loadsc(openid,that){
wx.request({
  url: 'https://jphouse.wechatapp.net/Default.aspx',
  data: {'Code':'1010','openid':openid},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
    console.log(res);
    collLengh = res.data.length;
    console.log("从数据库获得的收藏数量"+collLengh);
    that.setData({
all:res.data
    })
  },
  fail: function(res) {
    // fail
  },
  complete: function(res) {
    // complete
  }
})
}
function request(table,that) {
  //注意：可以对params加密等处理
  wx.request({
   url: 'https://jphouse.wechatapp.net/Default.aspx',
   data: {'Code':'1006','table':table},
   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
   // header: {}, // 设置请求的 header
   success: function(res){
    //注意：可以对参数解密等处理
      
  if(table=="jichu"){
        phone=res.data[0].phone
         console.log(res.data[0])
 that.setData({
      jichu:res.data[0]
      })
      }
     
   },
   fail: function() {
    requestHandler.fail()
   },
   complete: function() {
    // complete
   }
  })
}
function delsc(openid,id,that){
wx.request({
  url: 'https://jphouse.wechatapp.net/Default.aspx',
   data: {'Code':'1011','openid':openid,'id':id},
  method: 'GET', 
  success: function(res){
    console.log(res)
    loadsc(openid,that);
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
    // 盒子位子
    jichu:[],
    all:[],
    cityPos1: 0,
    cityPos2: 0,
    cityPos3: 0,
    cityPos4: 0,
    // 盒子显示
    collDis : "none",
    erDis : "none",
    zxViewDis: "none",
  },
  goHouseInfo: function (e) {
    var id=  e.currentTarget.dataset.tidd;

    wx.navigateTo({
      url: '../houseInfo/houseInfo?id='+id,
    })
  },
  botClick: function (e) {
   id=  e.currentTarget.dataset.id
   console.log(id)
    this.setData({ zxViewDis: "block" })
  },
   zxClick: function () {
    this.setData({ zxViewDis: "none" })
  },
  // 打开二维码
  showEr : function(){
    this.setData({ erDis: "block" })
  },
  // 关闭二维码
  closeEr : function(){
    this.setData({ erDis: "none" })
  }, // 打开留言
  showMessage : function(e){
    wx.navigateTo({
      url: '../message/message?id='+id,
    })
  },
  // 打开相谈会
  goMeeting : function(){
    wx.switchTab({
      url: '../meeting/meeting',
    })
  },  // 拨打电话
  call: function () {
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },
  
  // 隐藏点击删除的盒子
  del : function(e){
     var openid= wx.getStorageSync('openid')
   var id=  e.currentTarget.dataset.tidd;
   var that=this
   console.log(id)
   delsc(openid,id,that);
   setTimeout(function(){
     if( collLengh == 0){
        that.setData({ collDis : "block" });
      }
   },1000);
  },
  // 触摸开始
  touchStart : function(e){
      x_start = e.touches[0].pageX;
  },
  // 触摸移动
  touchMove: function (e) {
    x_end = e.touches[0].pageX;
  },
  // 触摸结束
  touchEnd: function (e) {

    x_start = 0;
    x_end = 0;
    x_final = 0;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var openid= wx.getStorageSync('openid')
   var that=this;
   loadsc(openid,that);
   request('jichu',that);
   setTimeout(function(){
      if( collLengh == 0){
        that.setData({ collDis : "block" });
      }
   },1000);
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
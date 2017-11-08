// pages/houseInfo/houseInfo.js
var banner=new Array();
var phone="";
var id="0"
function sc(openid){
wx.request({
  url: 'https://jphouse.wechatapp.net/Default.aspx',
  data: {'Code':'1009','id':id,'openid':openid},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
    
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
      
      if(table=="fangmj"){
 that.setData({
      mianDt:res.data
      })
      }else if(table=="jichu"){
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
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collDis : "none",
    c_ViewTop : "-100%",
    jichu:[],
    bannerDt:[],
    all:"",
    zxViewDis : "none",
    erDis: "none"
  },
  botClick : function(){
    this.setData({ zxViewDis: "block" })
  },
  zxClick : function(){
    this.setData({ zxViewDis: "none" })
  },
  // 拨打电话
  // 打开留言
  showMessage: function (e) {
    var id=  e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../message/message?id='+id,
    })
  },
  // 打开相谈会
  goMeeting: function () {
    wx.switchTab({
      url: '../meeting/meeting',
    })
  },
  showColl:function(){
    var cc = this;
    this.setData({ collDis : "block" });
    setTimeout(function(){
      cc.setData({c_ViewTop : "45%"});
    },200);
  },
  // 点击确定
  hideColl : function(){
    this.setData({ 
        collDis : "none" ,
        c_ViewTop : "-100%"
    });
    var openid= wx.getStorageSync('openid')
    sc(openid);
  },
  // 打开二维码
  showEr: function () {
    this.setData({ erDis: "block" })
  },
  // 关闭二维码
  closeEr: function () {
    this.setData({ erDis: "none" })
  },
  botClick: function () {
    this.setData({ zxViewDis: "block" })
  },
  zxClick: function () {
    this.setData({ zxViewDis: "none" })
  },
  // 拨打电话
  call: function () {
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    id=options.id
     request('jichu',that);
    wx.request({
      url: 'https://jphouse.wechatapp.net/Default.aspx',
      data: {'Code':'1005','id':options.id},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res)
        banner= res.data[0].banner.split("}№{")
        banner.splice(0,1);
      that.setData({
           bannerDt:banner,
           all:res.data[0]
         })
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
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
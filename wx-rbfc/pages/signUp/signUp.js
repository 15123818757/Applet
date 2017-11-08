// pages/signUp/signUp.js
function getUser(openid,that){
wx.request({
  url: 'https://jphouse.wechatapp.net/Default.aspx',
  data: {'Code':'1003','openid':openid},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
    // succes
    console.log(res)
  that.setData({
    all:res.data[0]
  })
  }
})}
function loadDt(table,that){
wx.request({
   url: 'https://jphouse.wechatapp.net/Default.aspx',
   data: {'Code':'1006','table':table},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
    console.log(res.data)
    that.setData({
        allr:res.data[0]
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
function creBao(name,phone,num,riqi,time,formId,openid){
  wx.request({
    url: 'https://jphouse.wechatapp.net/Default.aspx',
  data: {'Code':'1012','name':name
  ,'phone':phone,'num':num,'riqi':riqi,'time':time,'fomrid':formId,'openid':openid
  },
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // header: {}, // 设置请求的 header
    success: function(res){
      // success
      console.log(res)
      wx.navigateBack({})
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
       collDis : "none",
    c_ViewTop : "-100%",
    tips:"",
     all:[],
     allR:[]
  },
  goBack: function () {
    wx.navigateBack({})
  },
  formBindsubmit: function (e) {
    var formid= e.detail.formId
    console.log(formid)
    var name=e.detail.value.name;
    var tel=e.detail.value.tel
    var num=e.detail.value.num
    var riqi=e.detail.value.time
    var time=e.detail.value.time_detail
        if(name==""){

 this.setData({ 
   collDis : "block",
 c_ViewTop : "45%",
 tips:"请输入名称！" });

     return false;
    }
    else if(tel==""){

       this.setData({ 
   collDis : "block",
 c_ViewTop : "45%",
 tips:"请输入电话号码！" });
     return false;
    }else if(time==""){
this.setData({ 
   collDis : "block",
 c_ViewTop : "45%",
 tips:"请输入参加时间！" });
return false;
    }
    else if(num==""){
this.setData({ 
   collDis : "block",
 c_ViewTop : "45%",
 tips:"请输入参加人数！" });
return false;
    }
      var openid= wx.getStorageSync('openid')
     creBao(name,tel,num,riqi,time,formid,openid)
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
   var openid= wx.getStorageSync('openid')
   getUser(openid,that)
   loadDt("xiangtanhui",that)
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
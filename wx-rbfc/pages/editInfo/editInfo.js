// pages/editInfo/editInfo.js
var sex="1"
var id="0"
function getUser(openid,that){
wx.request({
  url: 'https://jphouse.wechatapp.net/Default.aspx',
  data: {'Code':'1003','openid':openid},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
    // succes
    id=res.data[0].id
    sex=res.data[0].sex
  that.setData({
    user:res.data[0],
    order:sex=="1"?true:false,
    order2:sex=="2"?true:false
  })
  }
})}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tips:"修改成功！",
    collDis : "none",
    c_ViewTop : "-100%",
     order:false,
     order2:true,
     user:[]
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
  // 表单提交
  formBindsubmit : function(e){
    var name= e.detail.value.name
    var tel=e.detail.value.tel
    var sex=e.detail.value.sex
    var age=e.detail.value.age
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
    }else if(age==""){
this.setData({ 
   collDis : "block",
 c_ViewTop : "45%",
 tips:"请输入年龄！" });
return false;
    }
   
    wx.request({
      url: 'https://jphouse.wechatapp.net/Default.aspx',
      data: {"Code":"1007","id":id,"name":name,"phone":tel,"sex":sex,"age":age},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
         wx.navigateTo({
      url: '../editInfo/editInfo',
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
  listenerRadioGroup:function(e) {
  sex=e.detail.value;
 },
  // 返回
  goBack : function(){
    wx.navigateBack({})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var that = this
 var openid= wx.getStorageSync('openid')
         if(openid=='' || openid=='undefined'){
             app.createUser('../account/account')
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
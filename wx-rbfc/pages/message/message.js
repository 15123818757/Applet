// pages/message/message.js
var id="0"
var userid="0"
function getUser(openid,that){
wx.request({
  url: 'https://jphouse.wechatapp.net/Default.aspx',
  data: {'Code':'1003','openid':openid},
  method: 'GET', 
  success: function(res){
    console.log(res)
    userid=res.data[0].id;
     that.setData({
     phone:res.data[0].phone,
      name:res.data[0].name
     })
  }
})}
function creliuyan(name,content,phone,formid,openid){
  console.log(name)
  console.log(content)
  console.log(phone)
  console.log(id)
 wx.request({
 url: 'https://jphouse.wechatapp.net/Default.aspx',
   data: {'Code':'1008','name':name,'content':content,'fwid':id,'phone':phone,'formid':formid,'openid':openid},
   method: 'GET',
   success: function(res){
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
    name:"",
    phone:"",
    collDis : "none",
    c_ViewTop : "-100%",
    tips:"",
  },
  // 返回
  goBack: function () {
    wx.navigateBack({})
  },
  formBindsubmit: function (e) {
    var name=e.detail.value.name;
    var tel=e.detail.value.tel;
    var content=e.detail.value.text
    var formid=e.detail.formId;
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
    }else if(content==""){
         this.setData({ 
   collDis : "block",
 c_ViewTop : "45%",
 tips:"请输入留言内容！" });
     return false;
    }
     var openid= wx.getStorageSync('openid')
    creliuyan(name,content,tel,formid,openid)
    // wx.navigateBack();
  }, //点击确定
  hideColl : function(){
    this.setData({ 
        collDis : "none" ,
        c_ViewTop : "-100%"
    });
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that=this
  id=options.id;//房屋id
  var openid= wx.getStorageSync('openid')
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
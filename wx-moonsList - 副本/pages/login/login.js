// pages/login/login.js
var flag = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hy_detail : "none",
    hySM_detail : "none",
    items: [
      { name: 'chose', value: '选中' }
    ]
  },
  // 改变checkbox时候
  checkboxChange: function (e) {
    //console.log(e.detail.value[0]);
    if (e.detail.value[0] != undefined){
      flag = true;
    }else{
      flag = false;
    }
    //console.log(flag);
  },
  sub : function(){
    // 如果勾选checkbox
    if (flag){
      wx.navigateBack({});
    }else{
      wx.showToast({
        title: '请勾选并阅读使用声明',
      });
    }
  },
  showHy_detail : function(){
    this.setData({ hy_detail: "block" });
  },
  hideHy_detail : function(){
    this.setData({ hy_detail: "none" });
  },
  showHySM_detail: function () {
    this.setData({ hySM_detail: "block" });
  },
  hideHySM_detail: function () {
    this.setData({ hySM_detail: "none" });
  },
  call : function(){
    wx.makePhoneCall({
      phoneNumber: '023-888888',
    })
  },
  sss : function(e){
    console.log(e.target);
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
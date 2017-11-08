// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date : "请选择日期",
    sex: ['性选择性别', '男', '女'],
    sexIndex : 0,
    yuyan: ['语言偏好', '简体', '繁体','英文'],
    yuyanIndex : 0,
    pinpai: ['请选择偏好品牌', 'GAP', 'Old Navy', 'Gap Outlet','以上品牌都偏好'],
    pinpaiIndex: 0,
    shouceDis : 'none'
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sexIndex: e.detail.value
    })
  },
  bindYuYanChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      yuyanIndex: e.detail.value
    })
  },
  bindPinPaiChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      pinpaiIndex: e.detail.value
    })
  },
  back : function(){
    wx.navigateBack({});
  },
  showSC : function(){
    this.setData({ shouceDis : "block" });
  },
  hideSC : function(){
    this.setData({ shouceDis: "none" });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
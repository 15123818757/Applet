// pages/clothes/clothes.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    class_1 : "active",
    class_2 : "",
    class_3: "",
    class_4: "",
    class_5: "",
    class_6: "",
    class_7: "",
    class_8: "",
    class_9: ""
  },
  clo_1 : function(){
    this.setData({
      class_1: "active",
      class_2: "",
      class_3: "",
      class_4: "",
      class_5: "",
      class_6: "",
      class_7: "",
      class_8: "",
      class_9: ""
    })
  },
  clo_2: function () {
    this.setData({
      class_1: "",
      class_2: "active",
      class_3: "",
      class_4: "",
      class_5: "",
      class_6: "",
      class_7: "",
      class_8: "",
      class_9: ""
    })
  },
  clo_3: function () {
    this.setData({
      class_1: "",
      class_2: "",
      class_3: "active",
      class_4: "",
      class_5: "",
      class_6: "",
      class_7: "",
      class_8: "",
      class_9: ""
    })
  },
  clo_4: function () {
    this.setData({
      class_1: "",
      class_2: "",
      class_3: "",
      class_4: "active",
      class_5: "",
      class_6: "",
      class_7: "",
      class_8: "",
      class_9: ""
    })
  },
  clo_5: function () {
    this.setData({
      class_1: "",
      class_2: "",
      class_3: "",
      class_4: "",
      class_5: "active",
      class_6: "",
      class_7: "",
      class_8: "",
      class_9: ""
    })
  },
  clo_6: function () {
    this.setData({
      class_1: "",
      class_2: "",
      class_3: "",
      class_4: "",
      class_5: "",
      class_6: "active",
      class_7: "",
      class_8: "",
      class_9: ""
    })
  },
  clo_7: function () {
    this.setData({
      class_1: "",
      class_2: "",
      class_3: "",
      class_4: "",
      class_5: "",
      class_6: "",
      class_7: "active",
      class_8: "",
      class_9: ""
    })
  },
  clo_8: function () {
    this.setData({
      class_1: "",
      class_2: "",
      class_3: "",
      class_4: "",
      class_5: "",
      class_6: "",
      class_7: "",
      class_8: "active",
      class_9: ""
    })
  },
  clo_9: function () {
    this.setData({
      class_1: "",
      class_2: "",
      class_3: "",
      class_4: "",
      class_5: "",
      class_6: "",
      class_7: "",
      class_8: "",
      class_9: "active"
    })
  },
  goChose : function(){
    wx.navigateTo({
      url: '../clo_chose/clo_chose',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
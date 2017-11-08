// pages/clo_detail/clo_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color_1: "activeColor",
    color_2: "",
    color_3: "",
    color_4: "",
    color_5: "",
    xize_1: "activeColor",
    xize_2: "",
    xize_3: "",
    xize_4: "",
    xize_5: "",
    num : "1",
    textDis : "block",
    imgDis : 'none'
  },
  choseColor_1 : function(){
    this.setData({
      color_1: "activeColor",
      color_2: "",
      color_3: "",
      color_4: "",
      color_5: ""
    })
  },
  choseColor_2: function () {
    this.setData({
      color_1: "",
      color_2: "activeColor",
      color_3: "",
      color_4: "",
      color_5: ""
    })
  },
  choseColor_3: function () {
    this.setData({
      color_1: "",
      color_2: "",
      color_3: "activeColor",
      color_4: "",
      color_5: ""
    })
  },
  choseColor_4: function () {
    this.setData({
      color_1: "",
      color_2: "",
      color_3: "",
      color_4: "activeColor",
      color_5: ""
    })
  },
  choseColor_5: function () {
    this.setData({
      color_1: "",
      color_2: "",
      color_3: "",
      color_4: "",
      color_5: "activeColor"
    })
  },
  choseSize_1 : function(){
    this.setData({
      xize_1: "activeColor",
      xize_2:"",
      xize_3: "",
      xize_4: "",
      xize_5: ""
    })
  },
  choseSize_2: function () {
    this.setData({
      xize_1: "",
      xize_2: "activeColor",
      xize_3: "",
      xize_4: "",
      xize_5: ""
    })
  },
  choseSize_3: function () {
    this.setData({
      xize_1: "",
      xize_2: "",
      xize_3: "activeColor",
      xize_4: "",
      xize_5: ""
    })
  },
  choseSize_4: function () {
    this.setData({
      xize_1: "",
      xize_2: "",
      xize_3: "",
      xize_4: "activeColor",
      xize_5: ""
    })
  },
  choseSize_5: function () {
    this.setData({
      xize_1: "",
      xize_2: "",
      xize_3: "",
      xize_4: "",
      xize_5: "activeColor"
    })
  },
  // 加
  jia : function(){    
    var getNum = parseInt(this.data.num);
    this.setData({ num : getNum+1 });
  },
  // 减
  jian: function () {
    var cc = this;
    var getNum = parseInt(cc.data.num);
    if( getNum > 1 ){
      cc.setData({ num : getNum-1 });
    }
  },
  showImg : function(){
    this.setData({
      textDis : "none",
      imgDis : 'block'
    })
  },
  addCart : function(){
    wx.showToast({
      title: '已加入购物车',
    })
  },
  goBuy : function(){
    console.log(111);
    wx.navigateTo({
      url: '../jiesuan/jiesuan',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
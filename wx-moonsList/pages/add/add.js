// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc: "../img/add.png"
  },
  // 选择图片
  choseImg : function(){
    var cc = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        cc.setData({ imgSrc: tempFilePaths })
      }
    });
  },
  // 上传
  sub : function(){
    wx.showToast({
      title: '上传成功',
    });
    setTimeout(function(){
      wx.navigateBack({})
    },1500);
  },
  // 取消
  cancel : function(){
    wx.navigateBack({})
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
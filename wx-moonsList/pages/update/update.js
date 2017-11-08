// pages/update/update.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
//   确定
    makeSure : function(){
        wx.showToast({
            title: '修改成功',
        });
        setTimeout(function(){
            wx.navigateBack({})
        },1500);
    },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
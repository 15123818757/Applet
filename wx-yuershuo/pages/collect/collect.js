// pages/collect/collect.js
var x_start = 0;
var x_end = 0;
var x_final = 0;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    dis1 : 'block',
    dis2: 'block',
    dis3 : 'block',
    dis4 : 'block'
  },
  // 删除
  del : function(e){
    var cc = this;
    var index = e.currentTarget.dataset.index;
    if (index == 1) cc.setData({ dis1: 'none' });
    if (index == 2) cc.setData({ dis2: 'none' });
    if (index == 3) cc.setData({ dis3: 'none' });
    if (index == 4) cc.setData({ dis4: 'none' }); 
  },
  // 辅食详情
  goDetail: function () {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
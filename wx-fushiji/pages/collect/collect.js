// pages/collect/collect.js
var x_start = 0;
var x_end = 0;
var x_final = 0;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tranX_1 : 0,
    tranX_2: 0,
    tranX_3: 0,
    tranX_4: 0,
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
//   // 触摸开始
//   touchStart: function (e) {
//     x_start = e.touches[0].pageX;
//   },
//   // 触摸移动
//   touchMove: function (e) {
//     x_end = e.touches[0].pageX;
//   },
//   // 触摸结束
//   touchEnd: function (e) {
//     var cc = this;
//     var id = e.currentTarget.id;
//     x_final = x_end - x_start;
//     // 右滑
//     if(x_final > 50){
//       if (id == 1) cc.setData({ tranX_1 : "0" });
//       if (id == 2) cc.setData({ tranX_2: "0" });
//       if (id == 3) cc.setData({ tranX_3: "0" });
//       if (id == 4) cc.setData({ tranX_4: "0" });
//     }
//     // 左滑
//     if (x_final < -50){
//       if (id == 1) cc.setData({ tranX_1: "-35%" });
//       if (id == 2) cc.setData({ tranX_2: "-35%" });
//       if (id == 3) cc.setData({ tranX_3: "-35%" });
//       if (id == 4) cc.setData({ tranX_4: "-35%" });
//     }
//     x_start = 0;
//     x_end = 0;
//     x_final = 0;
//   },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
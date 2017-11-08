// pages/jiesuan/jiesuan.js
var price = 0;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name : "孙悟空",
    tel : "110120119114",
    address: "花果山",
    items : [
      { name: 'jifen', value: '积分抵扣' }
    ],
    price : "0",
    last : 96.3
  },
  // 改变checkbox时候
  checkboxChange: function (e) {
    var cc = this;
    var getLast = parseInt(cc.data.last);
    if (e.detail.value[0] != undefined) {
      cc.setData({ price : 5.5 });
      var getPrice = parseInt(cc.data.price);
      cc.setData({ last: getLast - getPrice });
    } else {
      cc.setData({ price: 0 });
      cc.setData({ last: price });
    }
  },
  // 取消订单
  cancel : function(){
    wx.navigateBack({});
  },
  // 跳转到订单详情
  goOrder : function(){
    wx.redirectTo({
      url: '../myOrder/myOrder',
    })
  },
  // 我的地址
  goMyaddress : function(){
    var cc = this;
    wx.chooseAddress({
      success: function (res) {
        cc.setData({
          name: res.userName,
          tel: res.telNumber,
          address: res.detailInfo
        });
        console.log(res.postalCode)
        console.log(res.provinceName)
        console.log(res.cityName)
        console.log(res.countyName)
        console.log(res.nationalCode)
      }
    })
  },
  onLoad : function(){
    price = this.data.last;

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
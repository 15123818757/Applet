// pages/cart/cart.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        checked: '', 
        name: [
          "0",
          "../img/cartImg1.jpg",
          "GapFit舒适背部挖剪直筒背心石楠灰",
          "165/84A(XS)",
          "129",
          "1"
        ]
      },
      {
        checked: '', 
        name: [
          "1",
          "../img/cartImg1.jpg",
          "GapFit背心2",
          "170/84A(M)",
          "150",
          "1"
        ]
      }
    ],
    checkAll : "",
    allPrice : "0"
  },
  checkboxChange : function(e){
    console.log('你选中的是', e.detail.value);
  },
  // 选择商品自己
  checkMy : function(e){
    var cc = this;
    // 总价格
    var price = 0;
    // 获取当前商品下标
    var getIndex = parseInt(e.target.dataset.index);
    // obj用来存放临时的数组
    var obj = cc.data.items;
    console.log(obj[getIndex].name[4]);
    if (obj[getIndex].checked == ""){
      obj[getIndex].checked = "true";
    }else{
      obj[getIndex].checked = "";
    }
    // 遍历所有checkBox
    for (var i = 0; i < obj.length; i++) {
      (function (i) {
        if (obj[i].checked != "") {
          price += obj[i].name[4] * obj[i].name[5]; 
        }
      })(i)
    }
    cc.setData({
      items: obj,
      allPrice: price
    });
  },
  // 选择全部
  checkAll : function(){
    var cc = this;
    // 总价格
    var price = 0;
    var obj = cc.data.items;
    if (cc.data.checkAll == ""){
      cc.setData({ checkAll : "true" });
      for (var i = 0;i < obj.length;i++){
        (function(i){
          obj[i].checked = "true";
        })(i)
      }
      cc.setData({ items : obj });
    }else{
      cc.setData({ checkAll: "" });
      for (var i = 0; i < obj.length; i++) {
        (function (i) {
          obj[i].checked = "";
        })(i)
      }
    }
    // 遍历所有checkBox
    for (var i = 0; i < obj.length; i++) {
      (function (i) {
        if (obj[i].checked != "") {
          price += obj[i].name[4] * obj[i].name[5];
        }
      })(i)
    }
    cc.setData({
      items: obj,
      allPrice: price
    });
  },
  // 减
  jian : function(e){
    var cc = this;
    // 总价格
    var price = 0;
    // 获取当前商品下标
    var getIndex = parseInt(e.target.dataset.index);
    // obj用来存放临时的数组
    var obj = cc.data.items;
    if (obj[getIndex].name[5] > 1 ){
      obj[getIndex].name[5] --;
      // 遍历所有checkBox
      for (var i = 0; i < obj.length; i++) {
        (function (i) {
          if (obj[i].checked != "") {
            price += obj[i].name[4] * obj[i].name[5];
          }
        })(i)
      }
      cc.setData({
        items: obj,
        allPrice: price
      });
    }
  },
  // 加
  jia : function(e){
    var cc = this;
    // 总价格
    var price = 0;
    // 获取当前商品下标
    var getIndex = parseInt(e.target.dataset.index);
    // obj用来存放临时的数组
    var obj = cc.data.items;
    obj[getIndex].name[5] ++;
    // 遍历所有checkBox
    for (var i = 0; i < obj.length; i++) {
      (function (i) {
        if (obj[i].checked != "") {
          price += obj[i].name[4] * obj[i].name[5];
        }
      })(i)
    }
    cc.setData({
      items: obj,
      allPrice: price
    });
  },
  // 结算
  clear : function(){
    var obj = this.data.items;
    var choseNum = 0;
    for (var i = 0; i < obj.length; i++) {
      (function (i) {
        if (obj[i].checked != "" ){
          choseNum ++;
        }
      })(i)
    }
    if( choseNum ==0 ){
      wx.showToast({
        title: '请至少选择一个商品',
      })
    }else{
      wx.redirectTo({
        url: '../jiesuan/jiesuan',
      });
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
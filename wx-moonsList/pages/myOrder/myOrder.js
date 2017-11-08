// pages/myOrder/myOrder.js
var tPrice = 0;
// 商品数组
var goodsArr = [
    {
        src : "../img/cartImg1.jpg",  //商品图片路径
        name : "中筒背心",  //商品名称
        price :  "45.15"  //商品价格
    },{
        src: "../img/chose_1.jpg",
        name: "舒适背心",
        price: "45.15",
    }
];

var goodsArr2 = [
    {
        src: "../img/cartImg1.jpg",
        name: "中筒背心",
        price: "20"
    }, {
        src: "../img/chose_1.jpg",
        name: "舒适背心",
        price: "20",
    },
    {
        src: "../img/chose_2.jpg",
        name: "智能手表",
        price: "30",
    }
];

Page({
  /**
   * 页面的初始数据
   */
  data: {
    arr : goodsArr,
    left : "0",
    items: [
      {
        checked: '',
        name: [
          "0",
          "200135226",
          "待支付",
            goodsArr,   //订单中商品数组
          "90.3",   //订单的总价格
          "2"  // 订单中商品的数量
        ]
      },
      {
        checked: '',
        name: [
          "1",
          "200135226",
          "待支付",
            goodsArr2,  //订单中商品数组
            "70",  //订单的总价格
            "3"  // 订单中商品的数量
        ]
      }
    ],
    checkAll: "",
    allPrice: "0",
    jCheck : "",
    cPrice : 0,
    checkPrice: "",
    tPrice: 226.4,
    payDis : "none",
    wlDis : "none"
  },
  checkboxChange: function (e) {
    console.log('你选中的是', e.detail.value);
  },
  // 选择商品自己
  checkMy: function (e) {
    var cc = this;
    // 总价格
    var price = 0;
    // 获取当前商品下标
    var getIndex = parseInt(e.target.dataset.index);
    // obj用来存放临时的数组
    var obj = cc.data.items;
    // console.log(obj[getIndex].name[4]);
    if (obj[getIndex].checked == "") {
      obj[getIndex].checked = "true";
    } else {
      obj[getIndex].checked = "";
    }
    // 遍历所有checkBox
    for (var i = 0; i < obj.length; i++) {
      (function (i) {
        if (obj[i].checked != "") {
          price += parseFloat(obj[i].name[4]);
        }
      })(i)
    }
    cc.setData({
      items: obj,
      allPrice: price
    });
  },
  // 选择全部
  checkAll: function () {
    var cc = this;
    // 总价格
    var price = 0;
    var obj = cc.data.items;
    if (cc.data.checkAll == "") {
      cc.setData({ checkAll: "true" });
      for (var i = 0; i < obj.length; i++) {
        (function (i) {
          obj[i].checked = "true";
        })(i)
      }
      cc.setData({ items: obj });
    } else {
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
          price += parseFloat(obj[i].name[4]);
          console.log(obj[i].name[4]);
        }
      })(i)
    }
    cc.setData({
      items: obj,
      allPrice: price
    });
  },
  // 结算
  clear: function () {
    var cc = this;
    var obj = this.data.items;
    var choseNum = 0;
    for (var i = 0; i < obj.length; i++) {
      (function (i) {
        if (obj[i].checked != "") {
          choseNum++;
        }
      })(i)
    }
    if (choseNum == 0) {
      wx.showToast({
        title: '请至少选择一个商品',
      })
    } else {
      cc.setData({ payDis : "block" })
    }
  },
  // 积分抵扣
  checkPrice : function(){
    var cc = this;
    // 总价格
    var price = 0;
    if (cc.data.checkPrice == "") {
      cc.setData({ 
        checkPrice : true,
        cPrice : "2.5"
       });
      cc.setData({ tPrice: parseFloat(tPrice) - parseFloat(cc.data.cPrice) })
    }else{
      cc.setData({
        checkPrice: "",
        cPrice: "0",
        tPrice: tPrice 
      })
    }
  },
  // 隐藏支付
  hidePay : function(){
    this.setData({ payDis : "none" })
  },
  cat : function(){

  },
  show_1 : function(){
    this.setData({ left : "0" })
  },
  show_2: function () {
    this.setData({ left: "20%" })
  },
  show_3: function () {
    this.setData({ left: "40%" })
  },
  show_4: function () {
    this.setData({ left: "60%" })
  },
  show_5: function () {
    this.setData({ left: "80%" })
  },
  goPay : function(){
    wx.navigateTo({
      url: '../jiesuan/jiesuan',
    })
  },
  onLoad : function(){
    tPrice = this.data.tPrice;
  },
  // 支付二维码
  pay : function(){
    wx.navigateTo({
      url: '../pay/pay',
    });
    this.setData({ payDis : "none" });
  },
//   物流信息
showWL : function(){
    this.setData({ wlDis : "block" })
},
// 隐藏物流
hideWl : function(){
    this.setData({ wlDis : "none" })
},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
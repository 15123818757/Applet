// pages/index/index.js
var app=new getApp();
var fang=new Array();
var phone="110"
//搜索需要的参数
var page=1;
var mianji=0;
var zongjia=0;
var huibaolv=0;
var diqu=0;
var huxing=0;
var leixin=0;
var zk=0;
var time=0;
var sou="";
//跳转链接需要的id
var id="0"
var tiao=0;


function sc(openid){
wx.request({
  url: 'https://jphouse.wechatapp.net/Default.aspx',
  data: {'Code':'1009','id':id,'openid':openid},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
  },
  fail: function(res) {
    // fail
  },
  complete: function(res) {
    // complete
  }
})
}
function load(page,mianji,zongjia,huibaolv,diqu,huxing,leixin,zk,time,sou,that){
  var openid= wx.getStorageSync('openid')
         if(openid=='' || openid=='undefined'){
             app.createUser()
         }
console.log("当前页："+page+"面积id："+mianji+"总价:"+zongjia+"回报率："+huibaolv+"地区："+diqu+"户型："+huxing+"类型:"+leixin+"状况:"+zk+"竣工时间:"+time+"搜素内容"+sou+"当前加载页面"+page)
wx.request({
  url: 'https://jphouse.wechatapp.net/Default.aspx',
   data: {'Code':'1013','mian':mianji,'zong':zongjia,'hui':huibaolv,'diqu':diqu,'huxing':huxing,'leixing':leixin,'zk':zk,'time':time,'con':sou,'page':page},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
    // success
    console.log(res)
    that.setData({fangDt:res.data})
    if(res.data.length%10==0 && res.data.length!=0){
           if(page==1){
             tiao=res.data.length
that.setData({loadZi:"加载更多资源"})
           }else{
               if(tiao==res.data.length){
                  
that.setData({loadZi:"没有更多了"})
               }else{

that.setData({loadZi:"加载更多资源"})

               }
           }
           
    }
    else{
 that.setData({loadZi:"没有更多了"})
   
    }

},
  fail: function(res) {
    // fail
  },
  complete: function(res) {
    // complete
  }
})
}

function request(table,that) {
  //注意：可以对params加密等处理
  wx.request({
   url: 'https://jphouse.wechatapp.net/Default.aspx',
   data: {'Code':'1006','table':table},
   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
   // header: {}, // 设置请求的 header
   success: function(res){
    //注意：可以对参数解密等处理
      
      if(table=="fangmj"){
 that.setData({
      mianDt:res.data
      })

      }else if(table=="huibaolv"){
 that.setData({
      huibaolv:res.data
      })

      }else if(table=="zongjia"){
 that.setData({
      zongjia:res.data
      })

      }else if(table=="fangdq"){
 that.setData({
      diqu:res.data
      })


      }else if(table=="fanghx"){

 that.setData({
      huxing:res.data
      })
        
      }else if(table=="fangtype"){

 that.setData({
      fangtype:res.data
      })
        
      }else if(table=="fangjg"){
 that.setData({
      jg:res.data
      })
      }else if(table=="jichu"){
        phone=res.data[0].phone
         console.log(res.data[0])
 that.setData({
      jichu:res.data[0]
      })
      }
     
   },
   fail: function() {
    requestHandler.fail()
   },
   complete: function() {
    // complete
   }
  })
}
Page({

  /**
   * 页面的初始数据
   */
 
  data: {
    loadZi:"加载更多房源",
    fangDt:[],
    mianDt:[],
    zongjia:[],
    huibaolv:[],
    diqu:[],
    huxing:[],
    fangtype:[],
    jg:[],
    jichu:[],
    erDis : "none",
    zxViewDis: "none",
    selectDis1 : "none",
    selectDis2: "none",
    selectDis3: "none",
    selectDis4: "none",
    city : "面积",
    price : "总价",
    backGet : "回报率",
    more : "更多",
    mPlaceDis : "inline-block",
    mHDis: "none",
    mLeiDis: "none",
    mZKDis: "none",
    mTimeDis: "none",collDis : "none",
    c_ViewTop : "-100%",
  },
  imgClick:function(e){

    
  },
  // 打开留言
  showMessage : function(e){
    wx.navigateTo({
      url: '../message/message?id='+id,
    })
  },
  // 打开相谈会
  goMeeting : function(){
    wx.switchTab({
      url: '../meeting/meeting',
    })
  },
  // 打开二维码
  showEr : function(){
    this.setData({ erDis: "block" })
  },
  // 关闭二维码
  closeEr : function(){
    this.setData({ erDis: "none" })
  },
  botClick: function (e) {
   id=  e.currentTarget.dataset.id
    this.setData({ zxViewDis: "block" })
  },
  zxClick: function () {
    this.setData({ zxViewDis: "none" })
  },
  // 拨打电话
  call: function () {
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },
  // 跳转到房源信息页面
  goHouseInfo : function(e){
    var id=  e.currentTarget.dataset.tidd;

    wx.navigateTo({
      url: '../houseInfo/houseInfo?id='+id,
    })
  },
  EventHandle:function(e){
    page=1;
    sou= e.detail.value.like
    var that=this
load(page,mianji,zongjia,huibaolv,diqu,huxing,leixin,zk,time,sou,that)


  },
  //点击导航
  navClick : function(e){
    var index = e.currentTarget.dataset.index;
    if (index == 1) { this.setData({ selectDis1: "block" })}
    if (index == 2) { this.setData({ selectDis2: "block" }) }
    if (index == 3) { this.setData({ selectDis3: "block" }) }
    if (index == 4) { this.setData({ selectDis4: "block" }) }
  },
  // 关闭选择框
  BoxClose : function(){
    this.setData({ 
      selectDis1: "none", 
      selectDis2: "none", 
      selectDis3: "none", 
      selectDis4: "none", 
      })
  },
  loadClick:function(){
page+=1;
 var that=this
load(page,mianji,zongjia,huibaolv,diqu,huxing,leixin,zk,time,sou,that)

  },
  
  // 确认更多
  choseMore : function(e){
    this.setData({ more: e.currentTarget.dataset.value });
  },


// 确认面积
  citySelectClick :function(e){
    page=1
    var _city = e.currentTarget.dataset.value;
     mianji = e.currentTarget.dataset.id;
 var that=this
load(page,mianji,zongjia,huibaolv,diqu,huxing,leixin,zk,time,sou,that)
    this.setData({ city : _city });
  },
  // 确认价格
  priceSelectClick : function(e){
        page=1
       var _city = e.currentTarget.dataset.value;
     zongjia = e.currentTarget.dataset.id;
    var that=this
load(page,mianji,zongjia,huibaolv,diqu,huxing,leixin,zk,time,sou,that)
    this.setData({ price: e.currentTarget.dataset.value });
  },
  // 确认回报率
  backSelectClick: function (e) {
        page=1
     var _city = e.currentTarget.dataset.value;
     huibaolv = e.currentTarget.dataset.id;
    var that=this
load(page,mianji,zongjia,huibaolv,diqu,huxing,leixin,zk,time,sou,that)
    this.setData({ backGet: e.currentTarget.dataset.value });
  },
//确认地区
diqu:function(e){
      page=1
var dq= e.currentTarget.dataset.value;
diqu=e.currentTarget.dataset.id
 var that=this
load(page,mianji,zongjia,huibaolv,diqu,huxing,leixin,zk,time,sou,that)},
//确认户型
   hxclick:function(e){
         page=1
var dq= e.currentTarget.dataset.value;
huxing=e.currentTarget.dataset.id
 var that=this
load(page,mianji,zongjia,huibaolv,diqu,huxing,leixin,zk,time,sou,that)},
//确认类型
   typeclick:function(e){
         page=1
var dq= e.currentTarget.dataset.value;
leixin=e.currentTarget.dataset.id
 var that=this
load(page,mianji,zongjia,huibaolv,diqu,huxing,leixin,zk,time,sou,that)},
//确认状况
    zkclick:function(e){
    page=1
var dq= e.currentTarget.dataset.value;
zk=e.currentTarget.dataset.id
 var that=this
load(page,mianji,zongjia,huibaolv,diqu,huxing,leixin,zk,time,sou,that)
  },
  //确认竣工时间
  jgclick:function(e){
        page=1
var dq= e.currentTarget.dataset.value;
time=e.currentTarget.dataset.id
 var that=this
load(page,mianji,zongjia,huibaolv,diqu,huxing,leixin,zk,time,sou,that)

  },
  // 选择地区
  mClick : function(e){
    var index = e.currentTarget.dataset.index;
    var cc = this;
    if (index == 1) { 
      cc.setData({ 
        mPlaceDis : "inline-block",
        mHDis: "none",
        mLeiDis: "none",
        mZKDis: "none",
        mTimeDis: "none"
      })
    }
    if (index == 2) {
      cc.setData({
        mPlaceDis: "none",
        mHDis: "inline-block",
        mLeiDis: "none",
        mZKDis: "none",
        mTimeDis: "none"
      })
    }
    if (index == 3) {
      cc.setData({
        mPlaceDis: "none",
        mHDis: "none",
        mLeiDis: "inline-block",
        mZKDis: "none",
        mTimeDis: "none"
      })
    }
    if (index == 4) {
      cc.setData({
        mPlaceDis: "none",
        mHDis: "none",
        mLeiDis: "none",
        mZKDis: "inline-block",
        mTimeDis: "none"
      })
    }
    if (index == 5) {
      cc.setData({
        mPlaceDis: "none",
        mHDis: "none",
        mLeiDis: "none",
        mZKDis: "none",
        mTimeDis: "inline-block"
      })
    }
  },
  sc:function(){
  var cc = this;
    this.setData({ collDis : "block" });
    setTimeout(function(){
      cc.setData({c_ViewTop : "45%"});
    },200);
 //var openid= wx.getStorageSync('openid')
 //sc(openid);
  }, // 点击确定
  hideColl : function(){
    this.setData({ 
        collDis : "none" ,
        c_ViewTop : "-100%"
    });
    var openid= wx.getStorageSync('openid')
    sc(openid);
  },
  // 显示底部栏
  buttomSlider : function(){
    
  },
  /**
   * 生命周期函数--监听页面加载
   */

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
    onLoad: function () {
   
      var that=this
    load(page,mianji,zongjia,huibaolv,diqu,huxing,leixin,zk,time,sou,that)
 request('fangmj',that);
 request('huibaolv',that);
 request('zongjia',that);
  request('fangdq',that);
 request('fanghx',that);
 request('fangjg',that);
  request('fangtype',that);
 request('jichu',that);
 
  }
})
// pages/case1/case1.js
var srcWid = 0;
var srcHei = 0;
var ul="https://p.weiyunzuo.com"
var requrl='https://p.weiyunzuo.com/m.aspx'
var dt2=new Array()
var dt3=new Array()
wx.getSystemInfo({
  success: function(res) {
    // 设备名称 
    //console.log(res.model);
    // 微信版本号
    //console.log(res.version);
    srcWid = res.windowWidth;
    srcHei = res.windowHeight;
    //console.log("宽   "+srcWid+"\n高   "+srcHei);
  }
});
Page({
  data:{
    sImgWid : "",
    sImgHei : "",
    textImgWid : "",
    textImgHei : "",
    ImgWid_1 : "",
    ImgHei_1 : "",
    ImgWid_2 : "",
    ImgHei_2 : "",
    ImgWid_3 : "",
    ImgHei_3 : "",
    ImgWid_4 : "",
    ImgHei_4 : "",
    ImgWid_5 : "",
    ImgHei_5 : "",
    ImgWid_6 : "",
    ImgHei_6 : "",
    img_data:"",
    img_data2:"",
    img_data3:"",
    logo:"",
    title:"",
    content:"",
    logoImgWid : "",
    logoImgHei : "",
  },
  // 分享
    onShareAppMessage: function () {
        return {
            title: '微运作',
            desc: '最具人气的小程序开发团队!',
            path: '/pages/index/index',
            success : function(){
                console.log("分享成功");
            },
            fail : function(){
                console.log("分享失败");
            }
        }
    },
  back : function(){
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })
  },
  // 设置图片宽为百分比的自适应
  myImgLoadWid : function(e,size){
        var arr = [];
        var $width=e.detail.width,    //获取图片真实宽度
            $height=e.detail.height,
            ratio=$width/$height;    //图片的真实宽高比例
        var viewWidth=size*srcWid,   //设置图片显示宽度，左右留有16rpx边距
            viewHeight=(size*srcWid)/ratio;    //计算的高度值
        arr.push(viewWidth);
        arr.push(viewHeight);
        return arr;
    },
    // 让logo自适应
    loadLogoImg : function(e){
        this.setData({
           logoImgWid:this.myImgLoadWid(e,0.2)[0],
           logoImgHei:this.myImgLoadWid(e,0.2)[1]
       });
    },
    // 图片1
  imageLoad_1: function(e) {
      this.setData({
           ImgWid_1:this.myImgLoadWid(e,0.7)[0],
           ImgHei_1:this.myImgLoadWid(e,0.7)[1]
       });
  },
  // 图片2
  imageLoad_2: function(e) {
      this.setData({
           ImgWid_2:this.myImgLoadWid(e,0.9)[0],
           ImgHei_2:this.myImgLoadWid(e,0.9)[1]
       });
  },
  // 图片3
  imageLoad_3: function(e) {
      this.setData({
           ImgWid_3:this.myImgLoadWid(e,0.9)[0],
           ImgHei_3:this.myImgLoadWid(e,0.9)[1]
       });
  },
 onLoad:function(options){
   var cc=this
  // console.log("ok")
  var oid=options.id;
  wx.request({
    url: requrl,
    data: {Code:"1010",id:oid},
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // header: {}, // 设置请求的 header
    success: function(res){
      // success
     // console.log(res.data)
      var s= res.data.split("=");
      var b=s[0].split("|")
      var lo=b[0];
      var tit=b[1];
      var cons= b[2];
      var con=cons.replace(/<br\/>/gi,"\n");
      con=con.replace(/<\/br>/gi,"\n")
      var t=s[1].split("|")
      dt2=new Array();
      dt3=new Array();
      console.log(t.length)
      if(t.length==3){
      dt2.push(t[1])
      dt3.push(t[2])

      }else if(t.length==5){
      dt2.push(t[1]) 
      dt2.push(t[2])
      dt3.push(t[3])
      dt3.push(t[4])
      }else{
      for(var i=1;i<t.length;i++){
          dt2.push(t[i])
      }}

      cc.setData({
        img_data:t[0],
        img_data2:dt2,
        img_data3:dt3,
        logo:lo,
        title:tit,
        content:con
      })
    },
    fail: function(res) {
      // fail
    },
    complete: function(res) {
      // complete
    }
  })
    //console.log(options.id)
  } 
})

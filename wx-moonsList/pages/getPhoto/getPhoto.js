// pages/getPhoto/getPhoto.js

var canWid = 0;
var canHei = 0;
//  商品图片路径
var imgSrc = "../img/chose_1.jpg";
var logoSrc = "../img/logo.jpg";
var logoErSrc = "../img/logo_er.jpg";

Page({
  /**
   * 页面的初始数据
   */
  data: {
      imgSrc: "../img/indexImg7.jpg",
      canHei : 0,
      canWid : 0
  },
  //  saveImg
  saveImg : function(e){
    //   把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径
      wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: canWid,
          height: canHei,
          destWidth: canWid,
          destHeight: canHei,
          canvasId: 'myCan',
          success: function (res) {
              console.log(res.tempFilePath);
              wx.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
              });
          }
      })
  },
    onReady : function(){
        var _this = this;
        wx.getSystemInfo({
            success: function (res) {
                canHei = res.windowHeight*0.74428 ;
                canWid = res.windowWidth*0.8 ;
                // 设置canvas的宽高
                _this.setData({ 
                    canHei: canHei,
                    canWid: canWid
                  });
                      var ctx = wx.createCanvasContext("myCan");
                      // 画出商品图片
                      ctx.drawImage(imgSrc, 0, 0, canWid, canHei * 0.84);
                      // 画一个白块扯住多出来的图片
                      ctx.setFillStyle("rgb(255,255,255)");
                      ctx.fillRect(0, canHei * 0.45, canWid, canHei * 0.55);
                      // 画出文字
                      ctx.setFontSize(19);
                      ctx.setFillStyle("rgb(81,81,81)");
                      ctx.fillText("夏季清凉T恤", canWid * 0.05, canHei * 0.53);
                      ctx.setFillStyle("rgb(252,176,29)");
                      ctx.fillText("￥99.8", canWid * 0.05, canHei * 0.6);
                      ctx.setFillStyle("rgb(238,238,238)");
                      ctx.fillRect(0, canHei * 0.65, canWid, 1);
                      //   logo
                      ctx.drawImage(logoSrc, canWid * 0.05, canHei * 0.68, canWid * 0.4, canWid * 0.4 );
                      ctx.drawImage(logoErSrc, canWid * 0.6, canHei * 0.68, canWid * 0.29 , canWid * 0.29 );
                    // saoyisao
                    ctx.setFontSize(13);
                    ctx.setFillStyle("rgb(158,158,158)");
                    ctx.fillText("长按识别二维码", canWid * 0.6, canHei * 0.92);


                    ctx.draw();
            }
        });
    },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
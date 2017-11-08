//index.js
//获取应用实例
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    num1 : "0",
    num2: "0",
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(58)
  },
  funtimeupdate: function (u) {
    var cc = this; 
    var second = parseInt(u.detail.currentTime);
    console.log(second);
    if( second >=60 ){
      cc.setData({
        num1: parseInt(second / 60) + ":" + parseInt(second % 60)
      })
    }else{
      cc.setData({
        num1: parseInt(second),
        num2: parseInt(u.detail.duration),
      })
    }
    
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  onLoad : function(){
    var cc = this;
    setTimeout(function(){
      console.log("播放");
     // cc.audioCtx.play();
    },1000)
    wx.playBackgroundAudio({
      dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      title: '开心',
      coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    });
    setInterval(function(){
      wx.getBackgroundAudioPlayerState({
        success: function (res) {
          var status = res.status
          var dataUrl = res.dataUrl
          var currentPosition = res.currentPosition
          var duration = res.duration
          var downloadPercent = res.downloadPercent
          console.log("当前进度：" + currentPosition);
        }
      })
    },1000)
    
  }
  
})

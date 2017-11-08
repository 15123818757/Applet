//index.js

// 点击页面的开始和结束位置
var yStart = 0;
var yEnd = 0;
var final = 0;
// 当前的位置
var numIndex = 0;
var srcWid = 0;
var srcHei = 0;
// 服务动画定时器
var abInt;
// 经典案例动画定时器
var caseInt;
// 联系我们动画定时器
var conInt;
// 获得系统信息
var Sylogo='';                                                                                                                                                                                                                                                                                                                                                                                                            var an_data=new Array();                                                                                  
//服务板块的数据
var fwdata=new Array();  
//经典案例的数据
var jddata=new Array();  

var ul="https://p.weiyunzuo.com"
var requrl='https://p.weiyunzuo.com/m.aspx'
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
})


   



Page({
     // 设置数据
    data : {
            conName:"",
            conIphone:"",
            conRequest:"",
            tipHide:true,
            current : 0,
            cid1:"",
            cid2:"",
            cid3:"",
            cid4:"",
            cid5:"",
            cid6:"",
            cid7:"",
            cid8:"",
            cid9:"",
            cid10:"",
            cid11:"",
            cid12:"",
            cid13:"",
            cid14:"",
            cid15:"",
            cid16:"",
        //banner上的标题 logo 背景
        banner_1_0:"https://p.weiyunzuo.com/images/mobile/m_banner0.png",
        banner_1_1:"一站式互联网服务",
        banner_1_2:"解决方案提供商",
        banner_1_3:"从策划,设计,开发,传播,13年专业化经验",
        banner_2_0:"https://p.weiyunzuo.com/images/mobile/m_banner1.png",
        banner_2_1:"以微营销",
        banner_2_2:"为主导的广告公司",
        banner_2_3:"微营销首选品牌，专业移动营销服务商",
        banner_3_0:"https://p.weiyunzuo.com/images/mobile/m_banner2.png",
        banner_3_1:"移动及互联网服务",
        banner_3_2:"定制开发服务商",
        banner_3_3:"专注定制化服务、微信、网站、app、代运营", 
        banner_logo:Sylogo,
   /*关于我们 logo 视频 标题 内容*/
        gvideo: "https://p.weiyunzuo.com/video/about.mp4", glogo:"https://p.weiyunzuo.com/images/img/logoImg01.png",
gtitle_1 :"我们洞察商业所需",
gtitle_2 :"创造富有影响力的微营销体验",
gtitle_3 :"助力品牌价值提升",
gcontent:"微运作是属于上海追浪网络科技有限公司基于移动及互联网服务定制的开发服务商；微运作是以微营销为主导的广告公司，微营销首选品牌，专业移动营销服务商。微运作可以为品牌提供一站式互联网服务解决方案",
        an_cdata:"",
        //加载页面是否隐藏
        loadHidden : false,
        // 自动切换时间间隔
        interval: 5000,
        // 滑动动画时长
        duration: 1000,
        // 是否采用衔接滑动
        circular:true,
        // box的位置
        boxTop : 'boxTop0',
        banner1_ani1 : "",
        banner1_ani2 : "",
        banner1_ani3 : "",
        banner1_ani4 : "",
        banner2_ani1 : "",
        banner2_ani2 : "",
        banner2_ani3 : "",
        banner2_ani4 : "",
        banner3_ani1 : "",
        banner3_ani2 : "",
        banner3_ani3 : "",
        banner3_ani4 : "",
        //banner1节点的位置
        ban1_init : "-100%",
        ban2_init : "-100%",
        ban3_init : "-100%",
        // 首页的图片
        imgWidLogo:0,
        imgHeiLogo:0,
        // 关于我们
        num2_1 : 0,
        num2_2 : 0,
        num2_3 : 0,
        num2_4 : 0,
        num2_5 : 0,
        aniNum2_1 : "",
        aniNum2_2 : "",
        aniNum2_3 : "",
        aniNum2_4 : "",
        aniNum2_5 : "",
        abVideoHei : "",
        abViewHei : "",
        // 服务项目
        abnames1:"",
        abnames2:"",
        abnames3:"",
        abnames4:"",
        abnames5:"",
        abnames6:"",
        abhtml1:"",
        abhtml2:"",
        abhtml3:"",
        abhtml4:"",
        abhtml5:"",
        abhtml6:"",
        serImgWid:0,
        serImgHei:0,
        abAni1 : "",
        abAni2 : "",
        abAni3 : "",
        abAni4 : "",
        abAni5 : "",
        abAni6 : "",
        abAni7 : "",
        abAni8 : "",
        abAni9 : "",
        abScale1 : 0,
        abScale2 : 0,
        abScale3 : 0,
        abScale4 : 0,
        abScale5 : 0,
        abScale6 : 0,
        abOpt1 : 0,
        abOpt2 : 0,
        abOpt3 : 0,
        abText1 : "",
        abText2 : "",
        abText3 : "",
        abText4 : "",
        abText5 : "",
        abText6 : "",
        abImgClass1 :"",
        abImgClass2 :"",
        abImgClass3 :"",
        abImgClass4 :"",
        abImgClass5 :"",
        abImgClass6 :"",
        //服务模块的 6个图标
        abImg1: "https://p.weiyunzuo.com/images/icon/Sicon1.png",
        abImg2: "https://p.weiyunzuo.com/images/icon/Sicon2.png",
        abImg3: "https://p.weiyunzuo.com/images/icon/Sicon3.png",
        abImg4: "https://p.weiyunzuo.com/images/icon/Sicon4.png",
        abImg5: "https://p.weiyunzuo.com/images/icon/Sicon5.png",
        abImg6: "https://p.weiyunzuo.com/images/icon/Sicon6.png",
        // 联系我们
        con1 : "-100%",
        con2 : "-100%",
        con3 : "-100%",
        con4 : "-100%",
        con5 : "-100%",
        con6 : "-100%",
        con7 : "-100",
        con8 : "-100%",
        codeImgWid : 0,
        codeImgHei : 0,
        codeImgWid2 : 0,
        codeImgHei2 : 0,
        con_height : "0",
        hideTextHeight : "0",
        moveBoxTop : "-100%",
        // 经典案例
        caseView1 : 0,
        caseView2 : 0,
        caseView3 : 0,
        caseView4 : 0,
        caseView5 : 0,
        caseView6 : 0,
        caseView7 : 0,
        caseView8 : 0,
        caseView9 : 0,
        caseView10 : 0,
        caseView11 : 0,
        caseView12 : 0,
        caseView13 : 0,
        caseView14 : 0,
        caseView15 : 0,
        caseView16 : 0,
        // 案例 下排title 图片 标题 id
        serarray:[],
        tid1:"",
        tid2:"",
        tid3:"",
        tid4:"",
        tid5:"",
        tid6:"",
        tid7:"",
        tid8:"",
        tid9:"",
        tid10:"",
        tid11:"",
        tid12:"",
        tid13:"",
        serPosition : 0,
        serImg1 : "",
        serImg2: "",
        serImg3: "",
        serImg4: "",
        serImg5: "",
        serImg6: "",
        serImg7: "",
        serImg8: "",
        serImg9: "",
        serImg10: "",
        serImg11: "",
        serImg12: "",
        serImg13: "",
        sertit1:"",
        sertit2:"",
        sertit3:"",
        sertit4:"",
        sertit5:"",
        sertit6:"",
        sertit7:"",
        sertit8:"",
        sertit9:"",
        sertit10:"",
        sertit11:"",
        sertit12:"",
        sertit13:"",
        serText1 : "inBoxP activeSerFont",
        serText2 : "inBoxP",
        serText3 : "inBoxP",
        serText4 : "inBoxP",
        serText5 : "inBoxP",
        serText6 : "inBoxP",
        serText7 : "inBoxP",
        serText8 : "inBoxP",
        serText9 : "inBoxP",
        serText10 : "inBoxP",
        serText11 : "inBoxP",
        serText12 : "inBoxP",
        serText13 : "inBoxP",
        //案例图片
        animg1:"",
        animg2:"",
        animg3:"",
        animg4:"",
        animg5:"",
        animg6:"",
        animg7:"",
        animg8:"",
        animg9:"",
        animg10:"",
        animg11:"",
        animg12:"",
        animg13:"",
        animg14:"",
        animg15:"",
        animg16:"",
        serImgClass1 : "inBoxImg",
        serImgClass2 : "inBoxImg",
        serImgClass3 : "inBoxImg",
        serImgClass4 : "inBoxImg",
        serImgClass5 : "inBoxImg",
        serImgClass6 : "inBoxImg",
        serImgClass7 : "inBoxImg",
        serImgClass8 : "inBoxImg",
        serImgClass9 : "inBoxImg",
        serImgClass10 : "inBoxImg",
        serImgClass11 : "inBoxImg",
        serImgClass12 : "inBoxImg",
        serImgClass13 : "inBoxImg",
        serImgWid1 : "",
        serImgHei1 : "",
        serImgWid2 : "",
        serImgHei2 : "",
        serImgWid3 : "",
        serImgHei3 : "",
        serTopBox1 : "block",
        serTopBox2 : "none",
        serTopBox3 : "none",
        serTopBox4 : "none",
        serTopBox5 : "none",
        serTopBox6 : "none",
        serTopBox7 : "none",
        serTopBox8 : "none",
        serTopBox9 : "none",
        serTopBox10 : "none",
        serTopBox11 : "none",
        serTopBox12 : "none",
        serTopBox13 : "none",
        topClass1 : "tBannerBox",
        topClass2 : "tBannerBox",
        topClass3 : "tBannerBox",
        topClass4 : "tBannerBox",
        topClass5 : "tBannerBox",
        topClass6 : "tBannerBox",
        topClass7 : "tBannerBox",
        topClass8 : "tBannerBox",
        topClass9 : "tBannerBox",
        topClass10 : "tBannerBox",
        topClass11 : "tBannerBox",
        topClass12 : "tBannerBox",
        topClass13 : "tBannerBox",
        //关于我们 电话 地址 联系我们二维码
        tel:"",
        erweima:"",
        address1:"",
        address2:"",
        // 视频
        controls : false,
        /***************************  兼容性    ********************/ 
        // 关于我们
        x_abLogo : "",
        x_abText1_fontSize : "",
        x_abText1_lineHeight : "",
        x_abText2_fontSize : "",
        x_abText2_marginTop : "",
        // 经典案例
        x_caseClass : "num3View",
        // 案例
        x_cCaseClass : "",
        x_cCaseClass2 : "inBox",
        x_ccClass : "caseDiv",
        x_cTopBox : "12%",
        // 联系我们
        x_con : ""        

        /***************************  兼容性    ********************/ 
    },
    // 视频播放结束时
    videoEnd : function(e){
        var myVideo = wx.createVideoContext('myVideo');
        myVideo.play();
    },
    // 根据传入的size来设置图片自适应的长度(size  相当于设置图片的宽度)
    myImgLoadWid : function(e,size){
        var arr = [];
        var $width=e.detail.width,    //获取图片真实宽度
            $height=e.detail.height,
            ratio=$width/$height;    //图片的真实宽高比例
        var viewWidth=size,           //设置图片显示宽度，左右留有16rpx边距
            viewHeight=size/ratio;    //计算的高度值
        arr.push(viewWidth);
        arr.push(viewHeight);
        return arr;
    },
    // 加载图片时
    imageLoad: function(e) {
        this.setData({
            imgWidLogo:this.myImgLoadWid(e,120)[0],
            imgHeiLogo:this.myImgLoadWid(e,120)[1]
        });
    },
    // 服务项目图片
    serImgLoad : function(e){
        this.setData({
            serImgWid:this.myImgLoadWid(e,50)[0],
            serImgHei:this.myImgLoadWid(e,50)[1]
        });
    },
    // 案例上里面的图片
    imageLoadSer1 : function(e){
        this.setData({
            serImgWid1:this.myImgLoadWid(e,187)[0],
            serImgHei1:this.myImgLoadWid(e,187)[1]
        });
    },
    imageLoadSer2 : function(e){
        this.setData({
            serImgWid2:this.myImgLoadWid(e,320)[0],
            serImgHei2:this.myImgLoadWid(e,320)[1]
        });
    },
    imageLoadSer3 : function(e){
        this.setData({
            serImgWid3:this.myImgLoadWid2(e,0.4)[0],
            serImgHei3:this.myImgLoadWid2(e,0.4)[1]
        });
    },
    // 设置图片宽为百分比的自适应
  myImgLoadWid2 : function(e,size){
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
    // 联系我们二维码加载
    conImgLoad : function(e){
        this.setData({
            codeImgWid:this.myImgLoadWid(e,srcWid*0.4)[0],
            codeImgHei:this.myImgLoadWid(e,srcWid*0.4)[1]
        });
    },
    // 联系我们点击按钮图标
    conImgLoad2 : function(e){
        this.setData({
            codeImgWid2:this.myImgLoadWid(e,15)[0],
            codeImgHei2:this.myImgLoadWid(e,15)[1]
        });
    },
    // 点击留言显示表单
    showMo : function(){
        var cc = this;
        this.setData({
            con_height : "100%",
            hideTextHeight : "90px"
        });
        setTimeout(function(){
            cc.setData({
               moveBoxTop : "17.5%"
            });
        },20);
    },
    // 隐藏表单
    hidMo : function(){
        var cc = this;
        cc.setData({
            moveBoxTop : "100%"
        });
        var t = setTimeout(function(){
            cc.setData({
                con_height : "0",
                hideTextHeight : "0"
            });    
            cc.setData({
                moveBoxTop : "-100%"
            });
            clearTimeout(t);
        },550);

    },
    /*********    banner的动画   **********/ 
    ban1Ani : function(index){
        var b1_ani1 = wx.createAnimation({delay:0});
        var b1_ani2 = wx.createAnimation({delay: 500});
        var b1_ani3 = wx.createAnimation({delay: 1000});
        var b1_ani4 = wx.createAnimation({delay: 1500});
        b1_ani1.translateX(srcWid*0.33+"px").step();
        b1_ani2.translateX(srcWid*0+"px").step();
        b1_ani3.translateX(srcWid*0+"px").step();
        b1_ani4.translateX(srcWid*0+"px").step();
        switch(index){
            case 0:
                this.setData({
                    banner1_ani1 : b1_ani1.export(),
                    banner1_ani2 : b1_ani2.export(),
                    banner1_ani3 : b1_ani3.export(),
                    banner1_ani4 : b1_ani4.export()
                });
                break;
            case 1:
                this.setData({
                    banner2_ani1 : b1_ani1.export(),
                    banner2_ani2 : b1_ani2.export(),
                    banner2_ani3 : b1_ani3.export(),
                    banner2_ani4 : b1_ani4.export()
                });
                break;
            case 2:
                this.setData({
                    banner3_ani1 : b1_ani1.export(),
                    banner3_ani2 : b1_ani2.export(),
                    banner3_ani3 : b1_ani3.export(),
                    banner3_ani4 : b1_ani4.export()
                });
                break;
        }
    },
    //让banner的logo回到最左边
    banLogoInit : function(index){
        switch(index){
            case 0:
                var b1_ani1 = wx.createAnimation();
                b1_ani1.translateX("-100%").step();
                this.setData({
                    banner1_ani1 : b1_ani1.export()
                });
                break;
            case 1:
                 var b1_ani1 = wx.createAnimation();
                b1_ani1.translateX("-100%").step();
                this.setData({
                    banner2_ani1 : b1_ani1.export()
                });
                break;
            case 2:
                 var b1_ani1 = wx.createAnimation();
                b1_ani1.translateX("-100%").step();
                this.setData({
                    banner3_ani1 : b1_ani1.export()
                });
                break;
        }
        
    },
    // 关于我们动画
    aniNum2 : function(){
        var b1 = wx.createAnimation();
        var b2 = wx.createAnimation();
        var b3 = wx.createAnimation();
        var b4 = wx.createAnimation();
        var b5 = wx.createAnimation();
        b1.opacity(1).step({delay:0});
        b2.opacity(1).step({delay:300});
        b3.opacity(1).step({delay:600});
        b4.opacity(1).step({delay:900});
        b5.opacity(1).step({delay:1200});
        this.setData({
            aniNum2_1 : b1.export(),
            aniNum2_2 : b2.export(),
            aniNum2_3 : b3.export(),
            aniNum2_4 : b4.export(),
            aniNum2_5 : b5.export()
        });
    },
    // 服务项目动画
    abAnimate : function(){
        var cc = this;
        var i = 0;
        var opt1 = this.data.abOpt1;
        var opt2 = this.data.abOpt2;
        var opt3 = this.data.abOpt3;
        abInt = setInterval(function(){
            switch(i){
                case 0:cc.setData({abScale1:1});break;
                case 1:cc.setData({abScale2:1});break;
                case 2:cc.setData({abScale3:1});break;
                case 3:cc.setData({abScale4:1});break;
                case 4:cc.setData({abScale5:1});break;
                case 5:cc.setData({abScale6:1});break;
                case 6:cc.setData({abOpt1:1});break;
                case 7:cc.setData({abOpt2:1});break;
                case 8:cc.setData({abOpt3:1});break;
            }
            i ++;
            if(i >= 9){
                clearInterval(abInt);
                i = 0;
            }
        },300);
    },
    // 经典案例动画
    caseAni : function(){
        var i = 0;
        var cc = this;
        caseInt = setInterval(function(){
            switch(i){
                case 0:cc.setData({caseView1 : 1});break;
                case 1:cc.setData({caseView2 : 1});break;
                case 2:cc.setData({caseView3 : 1});break;
                case 3:cc.setData({caseView4 : 1});break;
                case 4:cc.setData({caseView5 : 1});break;
                case 5:cc.setData({caseView6 : 1});break;
                case 6:cc.setData({caseView7 : 1});break;
                case 7:cc.setData({caseView8 : 1});break;
                case 8:cc.setData({caseView9 : 1});break;
                case 9:cc.setData({caseView10 : 1});break;
                case 10:cc.setData({caseView11 : 1});break;
                case 11:cc.setData({caseView12 : 1});break;
                case 12:cc.setData({caseView13 : 1});break;
                case 13:cc.setData({caseView14 : 1});break;
                case 14:cc.setData({caseView15 : 1});break;
                case 15:cc.setData({caseView16 : 1});break;
            }
            i ++;
            if(i >= 16){
                i = 0;
                clearInterval(caseInt);    
            }
        },80);
    },
    // 联系我们动画
    conAni : function(){
        var cc = this;
        var i=0;
        conInt = setInterval(function(){
            switch(i){
                case 0:cc.setData({con1 : "-350px"}); break;
                case 1:cc.setData({con2 : "13%",con3 : "41%"}); break;
                case 2:cc.setData({con4 : "36%"}); break;
                case 3:cc.setData({con5 : "0%"}); break;
                case 4:cc.setData({con6 : "0%"}); break;
                case 5:cc.setData({con7 : "0%"}); break;
                case 6:cc.setData({con8 : "35%"}); break;
            }
            i ++;
            if(i >= 7){
                i=0;
                clearInterval(conInt);
            }
        },300);
    },
    // iphone4
    conAniX : function(){
        var cc = this;
        var i=0;
        conInt = setInterval(function(){
            switch(i){
                case 0:cc.setData({con1 : "-390px"}); break;
                case 1:cc.setData({con2 : "13%",con3 : "44%"}); break;
                case 2:cc.setData({con4 : "31%"}); break;
                case 3:cc.setData({con5 : "0%"}); break;
                case 4:cc.setData({con6 : "0%"}); break;
                case 5:cc.setData({con7 : "0%"}); break;
                case 6:cc.setData({con8 : "35%"}); break;
            }
            i ++;
            if(i >= 7){
                i=0;
                clearInterval(conInt);
            }
        },300);
    },
    // 案例选项向左
    goLeft : function(){
        var cc = this;
        if(cc.data.serPosition != 0){
            var serPo = cc.data.serPosition;
            cc.setData({
                serPosition : serPo+80
            });
        }
        console.log("左");
    },
    // 案例选项向右
    goRight : function(){
       var cc = this;
       if(cc.data.serPosition >= -640){
            var serPo = cc.data.serPosition;
            cc.setData({
                serPosition : serPo-80
            });
        }
        console.log("右");
    },
    // 点击服务项目切换样式
    abTap : function(e){
        var getId = e.target.id
        var cc = this;
        switch(getId){
            case "ab1":
              cc.setData({
                abImgClass1 :"abAin",
                abImgClass2 : "",
                abImgClass3 : "",
                abImgClass4 : "",
                abImgClass5 : "",
                abImgClass6 : "",
                abText1 : "activeAb",
                abText2 : "",
                abText3 : "",
                abText4 : "",
                abText5 : "",
                abText6 : "",
                abImg1 : ul+fwdata[0].bgimg,
                abImg2 : ul+fwdata[1].img,
                abImg3 : ul+fwdata[2].img,
                abImg4 : ul+fwdata[3].img,
                abImg5 : ul+fwdata[4].img,
                abImg6 : ul+fwdata[5].img
               });
                break;
            case "ab2":
                cc.setData({
                abImgClass1 :"",
                abImgClass2 : "abAin",
                abImgClass3 : "",
                abImgClass4 : "",
                abImgClass5 : "",
                abImgClass6 : "",    
                abText1 : "",
                abText2 : "activeAb",
                abText3 : "",
                abText4 : "",
                abText5 : "",
                abText6 : "",
                abImg1 : ul+fwdata[0].img,
                abImg2 : ul+fwdata[1].bgimg,
                abImg3 : ul+fwdata[2].img,
                abImg4 : ul+fwdata[3].img,
                abImg5 : ul+fwdata[4].img,
                abImg6 : ul+fwdata[5].img,
               });
                break;
            case "ab3":
                cc.setData({
                abImgClass1 :"",
                abImgClass2 : "",
                abImgClass3 : "abAin",
                abImgClass4 : "",
                abImgClass5 : "",
                abImgClass6 : "",  
                abText1 : "",
                abText2 : "",
                abText3 : "activeAb",
                abText4 : "",
                abText5 : "",
                abText6 : "",
                abImg1 : ul+fwdata[0].img,
                abImg2 : ul+fwdata[1].img,
                abImg3 : ul+fwdata[2].bgimg,
                abImg4 : ul+fwdata[3].img,
                abImg5 : ul+fwdata[4].img,
                abImg6 : ul+fwdata[5].img,
               });
                break;
            case "ab4":
                cc.setData({
                abImgClass1 :"",
                abImgClass2 : "",
                abImgClass3 : "",
                abImgClass4 : "abAin",
                abImgClass5 : "",
                abImgClass6 : "",
                abText1 : "",
                abText2 : "",
                abText3 : "",
                abText4 : "activeAb",
                abText5 : "",
                abText6 : "",
                abImg1 : ul+fwdata[0].img,
                abImg2 : ul+fwdata[1].img,
                abImg3 : ul+fwdata[2].img,
                abImg4 : ul+fwdata[3].bgimg,
                abImg5 : ul+fwdata[4].img,
                abImg6 : ul+fwdata[5].img,
               });
                break;
            case "ab5":
                cc.setData({
                abImgClass1 :"",
                abImgClass2 : "",
                abImgClass3 : "",
                abImgClass4 : "",
                abImgClass5 : "abAin",
                abImgClass6 : "",
                abText1 : "",
                abText2 : "",
                abText3 : "",
                abText4 : "",
                abText5 : "activeAb",
                abText6 : "",
                abImg1 : ul+fwdata[0].img,
                abImg2 : ul+fwdata[1].img,
                abImg3 : ul+fwdata[2].img,
                abImg4 : ul+fwdata[3].img,
                abImg5 : ul+fwdata[4].bgimg,
                abImg6 : ul+fwdata[5].img,
               });
                break;
            case "ab6": 
                cc.setData({
                abImgClass1 :"",
                abImgClass2 : "",
                abImgClass3 : "",
                abImgClass4 : "",
                abImgClass5 : "",
                abImgClass6 : "abAin",
                abText1 : "",
                abText2 : "",
                abText3 : "",
                abText4 : "",
                abText5 : "",
                abText6 : "activeAb",
                abImg1 : ul+fwdata[0].img,
                abImg2 : ul+fwdata[1].img,
                abImg3 : ul+fwdata[2].img,
                abImg4 : ul+fwdata[3].img,
                abImg5 : ul+fwdata[4].img,
                abImg6 : ul+fwdata[5].bgimg,
               });
                break;
        }
    },
    // 点击案例选项切换
    serClick : function(e){
        this.setData({current:0});
        var id = e.target.id;
        var cc = this;
        var tid=e.currentTarget.dataset.tid;
        wx.request({
          url: requrl,
          data: {Code:"1002",id:tid},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
            //console.log(res.data)
            an_data=res.data;
            console.log(an_data)
            cc.setData({
            an_cdata:an_data
            })
            
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })
 switch(id){
            case "ser1":
                this.setData({
            serImg1:ul+jddata[12].two,
            serImg2:ul+jddata[11].one,
            serImg3:ul+jddata[10].one,
            serImg4:ul+jddata[9].one,
            serImg5:ul+jddata[8].one,
            serImg6:ul+jddata[7].one,
            serImg7:ul+jddata[6].one,
            serImg8:ul+jddata[5].one,
            serImg9:ul+jddata[4].one,
            serImg10:ul+jddata[3].one,
            serImg11:ul+jddata[2].one,
            serImg12:ul+jddata[1].one,
            serImg13:ul+jddata[0].one,
        serText1 : "inBoxP activeSerFont",
        serText2 : "inBoxP",
        serText3 : "inBoxP",
        serText4 : "inBoxP",
        serText5 : "inBoxP",
        serText6 : "inBoxP",
        serText7 : "inBoxP",
        serText8 : "inBoxP",
        serText9 : "inBoxP",
        serText10 : "inBoxP",
        serText11 : "inBoxP",
        serText12 : "inBoxP",
        serText13 : "inBoxP",
        serImgClass1 : "inBoxImg abAin",
        serImgClass2 : "inBoxImg",
        serImgClass3 : "inBoxImg",
        serImgClass4 : "inBoxImg",
        serImgClass5 : "inBoxImg",
        serImgClass6 : "inBoxImg",
        serImgClass7 : "inBoxImg",
        serImgClass8 : "inBoxImg",
        serImgClass9 : "inBoxImg",
        serImgClass10 : "inBoxImg",
        serImgClass11 : "inBoxImg",
        serImgClass12 : "inBoxImg",
        serImgClass13 : "inBoxImg",
        serTopBox1 : "none",
        serTopBox2 : "none",
        serTopBox3 : "none",
        serTopBox4 : "none",
        serTopBox5 : "block",
        serTopBox6 : "none",
        serTopBox7 : "none",
        serTopBox8 : "none",
        serTopBox9 : "none",
        serTopBox10 : "none",
        serTopBox11 : "none",
        serTopBox12 : "none",
        serTopBox13 : "none",
        topClass1 : "tBannerBox SerAin",
        topClass2 : "tBannerBox",
        topClass3 : "tBannerBox",
        topClass4 : "tBannerBox",
        topClass5 : "tBannerBox",
        topClass6 : "tBannerBox",
        topClass7 : "tBannerBox",
        topClass8 : "tBannerBox",
        topClass9 : "tBannerBox",
        topClass10 : "tBannerBox",
        topClass11 : "tBannerBox",
        topClass12 : "tBannerBox",
        topClass13 : "tBannerBox",
                });
                break;
            case "ser2":
                this.setData({
                    serImg1:ul+jddata[12].one,
            serImg2:ul+jddata[11].two,
            serImg3:ul+jddata[10].one,
            serImg4:ul+jddata[9].one,
            serImg5:ul+jddata[8].one,
            serImg6:ul+jddata[7].one,
            serImg7:ul+jddata[6].one,
            serImg8:ul+jddata[5].one,
            serImg9:ul+jddata[4].one,
            serImg10:ul+jddata[3].one,
            serImg11:ul+jddata[2].one,
            serImg12:ul+jddata[1].one,
            serImg13:ul+jddata[0].one,
        serText1 : "inBoxP",
        serText2 : "inBoxP activeSerFont",
        serText3 : "inBoxP",
        serText4 : "inBoxP",
        serText5 : "inBoxP",
        serText6 : "inBoxP",
        serText7 : "inBoxP",
        serText8 : "inBoxP",
        serText9 : "inBoxP",
        serText10 : "inBoxP",
        serText11 : "inBoxP",
        serText12 : "inBoxP",
        serText13 : "inBoxP",
        serImgClass1 : "inBoxImg",
        serImgClass2 : "inBoxImg abAin",
        serImgClass3 : "inBoxImg",
        serImgClass4 : "inBoxImg",
        serImgClass5 : "inBoxImg",
        serImgClass6 : "inBoxImg",
        serImgClass7 : "inBoxImg",
        serImgClass8 : "inBoxImg",
        serImgClass9 : "inBoxImg",
        serImgClass10 : "inBoxImg",
        serImgClass11 : "inBoxImg",
        serImgClass12 : "inBoxImg",
        serImgClass13 : "inBoxImg",
        serTopBox1 : "none",
        serTopBox2 : "none",
        serTopBox3 : "none",
        serTopBox4 : "none",
        serTopBox5 : "block",
        serTopBox6 : "none",
        serTopBox7 : "none",
        serTopBox8 : "none",
        serTopBox9 : "none",
        serTopBox10 : "none",
        serTopBox11 : "none",
        serTopBox12 : "none",
        serTopBox13 : "none",
        topClass1 : "tBannerBox",
        topClass2 : "tBannerBox SerAin",
        topClass3 : "tBannerBox",
        topClass4 : "tBannerBox",
        topClass5 : "tBannerBox",
        topClass6 : "tBannerBox",
        topClass7 : "tBannerBox",
        topClass8 : "tBannerBox",
        topClass9 : "tBannerBox",
        topClass10 : "tBannerBox",
        topClass11 : "tBannerBox",
        topClass12 : "tBannerBox",
        topClass13 : "tBannerBox",
                });
                break;
            case "ser3":
                 this.setData({
                   serImg1:ul+jddata[12].one,
            serImg2:ul+jddata[11].one,
            serImg3:ul+jddata[10].two,
            serImg4:ul+jddata[9].one,
            serImg5:ul+jddata[8].one,
            serImg6:ul+jddata[7].one,
            serImg7:ul+jddata[6].one,
            serImg8:ul+jddata[5].one,
            serImg9:ul+jddata[4].one,
            serImg10:ul+jddata[3].one,
            serImg11:ul+jddata[2].one,
            serImg12:ul+jddata[1].one,
            serImg13:ul+jddata[0].one,
        serText1 : "inBoxP",
        serText2 : "inBoxP",
        serText3 : "inBoxP activeSerFont",
        serText4 : "inBoxP",
        serText5 : "inBoxP",
        serText6 : "inBoxP",
        serText7 : "inBoxP",
        serText8 : "inBoxP",
        serText9 : "inBoxP",
        serText10 : "inBoxP",
        serText11 : "inBoxP",
        serText12 : "inBoxP",
        serText13 : "inBoxP",
        serImgClass1 : "inBoxImg",
        serImgClass2 : "inBoxImg",
        serImgClass3 : "inBoxImg abAin",
        serImgClass4 : "inBoxImg",
        serImgClass5 : "inBoxImg",
        serImgClass6 : "inBoxImg",
        serImgClass7 : "inBoxImg",
        serImgClass8 : "inBoxImg",
        serImgClass9 : "inBoxImg",
        serImgClass10 : "inBoxImg",
        serImgClass11 : "inBoxImg",
        serImgClass12 : "inBoxImg",
        serImgClass13 : "inBoxImg",
        serTopBox1 : "none",
        serTopBox2 : "none",
        serTopBox3 : "none",
        serTopBox4 : "none",
        serTopBox5 : "block",
        serTopBox6 : "none",
        serTopBox7 : "none",
        serTopBox8 : "none",
        serTopBox9 : "none",
        serTopBox10 : "none",
        serTopBox11 : "none",
        serTopBox12 : "none",
        serTopBox13 : "none",
        topClass1 : "tBannerBox",
        topClass2 : "tBannerBox",
        topClass3 : "tBannerBox SerAin",
        topClass4 : "tBannerBox",
        topClass5 : "tBannerBox",
        topClass6 : "tBannerBox",
        topClass7 : "tBannerBox",
        topClass8 : "tBannerBox",
        topClass9 : "tBannerBox",
        topClass10 : "tBannerBox",
        topClass11 : "tBannerBox",
        topClass12 : "tBannerBox",
        topClass13 : "tBannerBox",
                });
                break;
            case "ser4":
                this.setData({
            serImg1:ul+jddata[12].one,
            serImg2:ul+jddata[11].one,
            serImg3:ul+jddata[10].one,
            serImg4:ul+jddata[9].two,
            serImg5:ul+jddata[8].one,
            serImg6:ul+jddata[7].one,
            serImg7:ul+jddata[6].one,
            serImg8:ul+jddata[5].one,
            serImg9:ul+jddata[4].one,
            serImg10:ul+jddata[3].one,
            serImg11:ul+jddata[2].one,
            serImg12:ul+jddata[1].one,
            serImg13:ul+jddata[0].one,
        serText1 : "inBoxP",
        serText2 : "inBoxP",
        serText3 : "inBoxP",
        serText4 : "inBoxP activeSerFont",
        serText5 : "inBoxP",
        serText6 : "inBoxP",
        serText7 : "inBoxP",
        serText8 : "inBoxP",
        serText9 : "inBoxP",
        serText10 : "inBoxP",
        serText11 : "inBoxP",
        serText12 : "inBoxP",
        serText13 : "inBoxP",
        serImgClass1 : "inBoxImg",
        serImgClass2 : "inBoxImg",
        serImgClass3 : "inBoxImg",
        serImgClass4 : "inBoxImg abAin",
        serImgClass5 : "inBoxImg",
        serImgClass6 : "inBoxImg",
        serImgClass7 : "inBoxImg",
        serImgClass8 : "inBoxImg",
        serImgClass9 : "inBoxImg",
        serImgClass10 : "inBoxImg",
        serImgClass11 : "inBoxImg",
        serImgClass12 : "inBoxImg",
        serImgClass13 : "inBoxImg",
        serTopBox1 : "none",
        serTopBox2 : "none",
        serTopBox3 : "none",
        serTopBox4 : "none",
        serTopBox5 : "block",
        serTopBox6 : "none",
        serTopBox7 : "none",
        serTopBox8 : "none",
        serTopBox9 : "none",
        serTopBox10 : "none",
        serTopBox11 : "none",
        serTopBox12 : "none",
        serTopBox13 : "none",
        topClass1 : "tBannerBox",
        topClass2 : "tBannerBox",
        topClass3 : "tBannerBox",
        topClass4 : "tBannerBox SerAin",
        topClass5 : "tBannerBox",
        topClass6 : "tBannerBox",
        topClass7 : "tBannerBox",
        topClass8 : "tBannerBox",
        topClass9 : "tBannerBox",
        topClass10 : "tBannerBox",
        topClass11 : "tBannerBox",
        topClass12 : "tBannerBox",
        topClass13 : "tBannerBox",
                });
                break;
            case "ser5":
                this.setData({
                   serImg1:ul+jddata[12].one,
            serImg2:ul+jddata[11].one,
            serImg3:ul+jddata[10].one,
            serImg4:ul+jddata[9].one,
            serImg5:ul+jddata[8].two,
            serImg6:ul+jddata[7].one,
            serImg7:ul+jddata[6].one,
            serImg8:ul+jddata[5].one,
            serImg9:ul+jddata[4].one,
            serImg10:ul+jddata[3].one,
            serImg11:ul+jddata[2].one,
            serImg12:ul+jddata[1].one,
            serImg13:ul+jddata[0].one,
        serText1 : "inBoxP",
        serText2 : "inBoxP",
        serText3 : "inBoxP",
        serText4 : "inBoxP",
        serText5 : "inBoxP activeSerFont",
        serText6 : "inBoxP",
        serText7 : "inBoxP",
        serText8 : "inBoxP",
        serText9 : "inBoxP",
        serText10 : "inBoxP",
        serText11 : "inBoxP",
        serText12 : "inBoxP",
        serText13 : "inBoxP",
        serImgClass1 : "inBoxImg",
        serImgClass2 : "inBoxImg",
        serImgClass3 : "inBoxImg",
        serImgClass4 : "inBoxImg",
        serImgClass5 : "inBoxImg abAin",
        serImgClass6 : "inBoxImg",
        serImgClass7 : "inBoxImg",
        serImgClass8 : "inBoxImg",
        serImgClass9 : "inBoxImg",
        serImgClass10 : "inBoxImg",
        serImgClass11 : "inBoxImg",
        serImgClass12 : "inBoxImg",
        serImgClass13 : "inBoxImg",
        serTopBox1 : "none",
        serTopBox2 : "none",
        serTopBox3 : "none",
        serTopBox4 : "none",
        serTopBox5 : "block",
        serTopBox6 : "none",
        serTopBox7 : "none",
        serTopBox8 : "none",
        serTopBox9 : "none",
        serTopBox10 : "none",
        serTopBox11 : "none",
        serTopBox12 : "none",
        serTopBox13 : "none",
        topClass1 : "tBannerBox",
        topClass2 : "tBannerBox",
        topClass3 : "tBannerBox",
        topClass4 : "tBannerBox",
        topClass5 : "tBannerBox SerAin",
        topClass6 : "tBannerBox",
        topClass7 : "tBannerBox",
        topClass8 : "tBannerBox",
        topClass9 : "tBannerBox",
        topClass10 : "tBannerBox",
        topClass11 : "tBannerBox",
        topClass12 : "tBannerBox",
        topClass13 : "tBannerBox",
                });
                break;
            case "ser6":
                this.setData({
                 serImg1:ul+jddata[12].one,
            serImg2:ul+jddata[11].one,
            serImg3:ul+jddata[10].one,
            serImg4:ul+jddata[9].one,
            serImg5:ul+jddata[8].one,
            serImg6:ul+jddata[7].two,
            serImg7:ul+jddata[6].one,
            serImg8:ul+jddata[5].one,
            serImg9:ul+jddata[4].one,
            serImg10:ul+jddata[3].one,
            serImg11:ul+jddata[2].one,
            serImg12:ul+jddata[1].one,
            serImg13:ul+jddata[0].one,
        serText1 : "inBoxP",
        serText2 : "inBoxP",
        serText3 : "inBoxP",
        serText4 : "inBoxP",
        serText5 : "inBoxP",
        serText6 : "inBoxP activeSerFont",
        serText7 : "inBoxP",
        serText8 : "inBoxP",
        serText9 : "inBoxP",
        serText10 : "inBoxP",
        serText11 : "inBoxP",
        serText12 : "inBoxP",
        serText13 : "inBoxP",
        serImgClass1 : "inBoxImg",
        serImgClass2 : "inBoxImg",
        serImgClass3 : "inBoxImg",
        serImgClass4 : "inBoxImg",
        serImgClass5 : "inBoxImg",
        serImgClass6 : "inBoxImg abAin",
        serImgClass7 : "inBoxImg",
        serImgClass8 : "inBoxImg",
        serImgClass9 : "inBoxImg",
        serImgClass10 : "inBoxImg",
        serImgClass11 : "inBoxImg",
        serImgClass12 : "inBoxImg",
        serImgClass13 : "inBoxImg",
        serTopBox1 : "none",
        serTopBox2 : "none",
        serTopBox3 : "none",
        serTopBox4 : "none",
        serTopBox5 : "block",
        serTopBox6 : "none",
        serTopBox7 : "none",
        serTopBox8 : "none",
        serTopBox9 : "none",
        serTopBox10 : "none",
        serTopBox11 : "none",
        serTopBox12 : "none",
        serTopBox13 : "none",
        topClass1 : "tBannerBox",
        topClass2 : "tBannerBox",
        topClass3 : "tBannerBox",
        topClass4 : "tBannerBox",
        topClass5 : "tBannerBox",
        topClass6 : "tBannerBox SerAin",
        topClass7 : "tBannerBox",
        topClass8 : "tBannerBox",
        topClass9 : "tBannerBox",
        topClass10 : "tBannerBox",
        topClass11 : "tBannerBox",
        topClass12 : "tBannerBox",
        topClass13 : "tBannerBox",
                });
                break;
            case "ser7":
                 this.setData({
                    serImg1:ul+jddata[12].one,
            serImg2:ul+jddata[11].one,
            serImg3:ul+jddata[10].one,
            serImg4:ul+jddata[9].one,
            serImg5:ul+jddata[8].one,
            serImg6:ul+jddata[7].one,
            serImg7:ul+jddata[6].two,
            serImg8:ul+jddata[5].one,
            serImg9:ul+jddata[4].one,
            serImg10:ul+jddata[3].one,
            serImg11:ul+jddata[2].one,
            serImg12:ul+jddata[1].one,
            serImg13:ul+jddata[0].one,
        serText1 : "inBoxP",
        serText2 : "inBoxP",
        serText3 : "inBoxP",
        serText4 : "inBoxP",
        serText5 : "inBoxP",
        serText6 : "inBoxP",
        serText7 : "inBoxP activeSerFont",
        serText8 : "inBoxP",
        serText9 : "inBoxP",
        serText10 : "inBoxP",
        serText11 : "inBoxP",
        serText12 : "inBoxP",
        serText13 : "inBoxP",
        serImgClass1 : "inBoxImg",
        serImgClass2 : "inBoxImg",
        serImgClass3 : "inBoxImg",
        serImgClass4 : "inBoxImg",
        serImgClass5 : "inBoxImg",
        serImgClass6 : "inBoxImg",
        serImgClass7 : "inBoxImg abAin",
        serImgClass8 : "inBoxImg",
        serImgClass9 : "inBoxImg",
        serImgClass10 : "inBoxImg",
        serImgClass11 : "inBoxImg",
        serImgClass12 : "inBoxImg",
        serImgClass13 : "inBoxImg",
        serTopBox1 : "none",
        serTopBox2 : "none",
        serTopBox3 : "none",
        serTopBox4 : "none",
        serTopBox5 : "block",
        serTopBox6 : "none",
        serTopBox7 : "none",
        serTopBox8 : "none",
        serTopBox9 : "none",
        serTopBox10 : "none",
        serTopBox11 : "none",
        serTopBox12 : "none",
        serTopBox13 : "none",
        topClass1 : "tBannerBox",
        topClass2 : "tBannerBox",
        topClass3 : "tBannerBox",
        topClass4 : "tBannerBox",
        topClass5 : "tBannerBox",
        topClass6 : "tBannerBox",
        topClass7 : "tBannerBox SerAin",
        topClass8 : "tBannerBox",
        topClass9 : "tBannerBox",
        topClass10 : "tBannerBox",
        topClass11 : "tBannerBox",
        topClass12 : "tBannerBox",
        topClass13 : "tBannerBox",
                });
                break;
            case "ser8":
                 this.setData({
                   serImg1:ul+jddata[12].one,
            serImg2:ul+jddata[11].one,
            serImg3:ul+jddata[10].one,
            serImg4:ul+jddata[9].one,
            serImg5:ul+jddata[8].one,
            serImg6:ul+jddata[7].one,
            serImg7:ul+jddata[6].one,
            serImg8:ul+jddata[5].two,
            serImg9:ul+jddata[4].one,
            serImg10:ul+jddata[3].one,
            serImg11:ul+jddata[2].one,
            serImg12:ul+jddata[1].one,
            serImg13:ul+jddata[0].one,
        serText1 : "inBoxP",
        serText2 : "inBoxP",
        serText3 : "inBoxP",
        serText4 : "inBoxP",
        serText5 : "inBoxP",
        serText6 : "inBoxP",
        serText7 : "inBoxP",
        serText8 : "inBoxP activeSerFont",
        serText9 : "inBoxP",
        serText10 : "inBoxP",
        serText11 : "inBoxP",
        serText12 : "inBoxP",
        serText13 : "inBoxP",
        serImgClass1 : "inBoxImg",
        serImgClass2 : "inBoxImg",
        serImgClass3 : "inBoxImg",
        serImgClass4 : "inBoxImg",
        serImgClass5 : "inBoxImg",
        serImgClass6 : "inBoxImg",
        serImgClass7 : "inBoxImg",
        serImgClass8 : "inBoxImg abAin",
        serImgClass9 : "inBoxImg",
        serImgClass10 : "inBoxImg",
        serImgClass11 : "inBoxImg",
        serImgClass12 : "inBoxImg",
        serImgClass13 : "inBoxImg",
        serTopBox1 : "none",
        serTopBox2 : "none",
        serTopBox3 : "none",
        serTopBox4 : "none",
        serTopBox5 : "block",
        serTopBox6 : "none",
        serTopBox7 : "none",
        serTopBox8 : "none",
        serTopBox9 : "none",
        serTopBox10 : "none",
        serTopBox11 : "none",
        serTopBox12 : "none",
        serTopBox13 : "none",
        topClass1 : "tBannerBox",
        topClass2 : "tBannerBox",
        topClass3 : "tBannerBox",
        topClass4 : "tBannerBox",
        topClass5 : "tBannerBox",
        topClass6 : "tBannerBox",
        topClass7 : "tBannerBox",
        topClass8 : "tBannerBox SerAin",
        topClass9 : "tBannerBox",
        topClass10 : "tBannerBox",
        topClass11 : "tBannerBox",
        topClass12 : "tBannerBox",
        topClass13 : "tBannerBox",
                });
                break;
            case "ser9":
                 this.setData({
                   serImg1:ul+jddata[12].one,
            serImg2:ul+jddata[11].one,
            serImg3:ul+jddata[10].one,
            serImg4:ul+jddata[9].one,
            serImg5:ul+jddata[8].one,
            serImg6:ul+jddata[7].one,
            serImg7:ul+jddata[6].one,
            serImg8:ul+jddata[5].one,
            serImg9:ul+jddata[4].two,
            serImg10:ul+jddata[3].one,
            serImg11:ul+jddata[2].one,
            serImg12:ul+jddata[1].one,
            serImg13:ul+jddata[0].one,
        serText1 : "inBoxP",
        serText2 : "inBoxP",
        serText3 : "inBoxP",
        serText4 : "inBoxP",
        serText5 : "inBoxP",
        serText6 : "inBoxP",
        serText7 : "inBoxP",
        serText8 : "inBoxP",
        serText9 : "inBoxP activeSerFont",
        serText10 : "inBoxP",
        serText11 : "inBoxP",
        serText12 : "inBoxP",
        serText13 : "inBoxP",
        serImgClass1 : "inBoxImg",
        serImgClass2 : "inBoxImg",
        serImgClass3 : "inBoxImg",
        serImgClass4 : "inBoxImg",
        serImgClass5 : "inBoxImg",
        serImgClass6 : "inBoxImg",
        serImgClass7 : "inBoxImg",
        serImgClass8 : "inBoxImg",
        serImgClass9 : "inBoxImg abAin",
        serImgClass10 : "inBoxImg",
        serImgClass11 : "inBoxImg",
        serImgClass12 : "inBoxImg",
        serImgClass13 : "inBoxImg",
        serTopBox1 : "none",
        serTopBox2 : "none",
        serTopBox3 : "none",
        serTopBox4 : "none",
        serTopBox5 : "block",
        serTopBox6 : "none",
        serTopBox7 : "none",
        serTopBox8 : "none",
        serTopBox9 : "none",
        serTopBox10 : "none",
        serTopBox11 : "none",
        serTopBox12 : "none",
        serTopBox13 : "none",
        topClass1 : "tBannerBox",
        topClass2 : "tBannerBox",
        topClass3 : "tBannerBox",
        topClass4 : "tBannerBox",
        topClass5 : "tBannerBox",
        topClass6 : "tBannerBox",
        topClass7 : "tBannerBox",
        topClass8 : "tBannerBox",
        topClass9 : "tBannerBox SerAin",
        topClass10 : "tBannerBox",
        topClass11 : "tBannerBox",
        topClass12 : "tBannerBox",
        topClass13 : "tBannerBox",
                });
                break;
            case "ser10":
                this.setData({
                  serImg1:ul+jddata[12].one,
            serImg2:ul+jddata[11].one,
            serImg3:ul+jddata[10].one,
            serImg4:ul+jddata[9].one,
            serImg5:ul+jddata[8].one,
            serImg6:ul+jddata[7].one,
            serImg7:ul+jddata[6].one,
            serImg8:ul+jddata[5].one,
            serImg9:ul+jddata[4].one,
            serImg10:ul+jddata[3].two,
            serImg11:ul+jddata[2].one,
            serImg12:ul+jddata[1].one,
            serImg13:ul+jddata[0].one,
        serText1 : "inBoxP",
        serText2 : "inBoxP",
        serText3 : "inBoxP",
        serText4 : "inBoxP",
        serText5 : "inBoxP",
        serText6 : "inBoxP",
        serText7 : "inBoxP",
        serText8 : "inBoxP",
        serText9 : "inBoxP",
        serText10 : "inBoxP activeSerFont",
        serText11 : "inBoxP",
        serText12 : "inBoxP",
        serText13 : "inBoxP",
        serImgClass1 : "inBoxImg",
        serImgClass2 : "inBoxImg",
        serImgClass3 : "inBoxImg",
        serImgClass4 : "inBoxImg",
        serImgClass5 : "inBoxImg",
        serImgClass6 : "inBoxImg",
        serImgClass7 : "inBoxImg",
        serImgClass8 : "inBoxImg",
        serImgClass9 : "inBoxImg",
        serImgClass10 : "inBoxImg abAin",
        serImgClass11 : "inBoxImg",
        serImgClass12 : "inBoxImg",
        serImgClass13 : "inBoxImg",
        serTopBox1 : "none",
        serTopBox2 : "none",
        serTopBox3 : "none",
        serTopBox4 : "none",
        serTopBox5 : "block",
        serTopBox6 : "none",
        serTopBox7 : "none",
        serTopBox8 : "none",
        serTopBox9 : "none",
        serTopBox10 : "none",
        serTopBox11 : "none",
        serTopBox12 : "none",
        serTopBox13 : "none",
        topClass1 : "tBannerBox",
        topClass2 : "tBannerBox",
        topClass3 : "tBannerBox",
        topClass4 : "tBannerBox",
        topClass5 : "tBannerBox",
        topClass6 : "tBannerBox",
        topClass7 : "tBannerBox",
        topClass8 : "tBannerBox",
        topClass9 : "tBannerBox",
        topClass10 : "tBannerBox SerAin",
        topClass11 : "tBannerBox",
        topClass12 : "tBannerBox",
        topClass13 : "tBannerBox",
                });
                break;
            case "ser11":
                 this.setData({
                  serImg1:ul+jddata[12].one,
            serImg2:ul+jddata[11].one,
            serImg3:ul+jddata[10].one,
            serImg4:ul+jddata[9].one,
            serImg5:ul+jddata[8].one,
            serImg6:ul+jddata[7].one,
            serImg7:ul+jddata[6].one,
            serImg8:ul+jddata[5].one,
            serImg9:ul+jddata[4].one,
            serImg10:ul+jddata[3].one,
            serImg11:ul+jddata[2].two,
            serImg12:ul+jddata[1].one,
            serImg13:ul+jddata[0].one,
        serText1 : "inBoxP",
        serText2 : "inBoxP",
        serText3 : "inBoxP",
        serText4 : "inBoxP",
        serText5 : "inBoxP",
        serText6 : "inBoxP",
        serText7 : "inBoxP",
        serText8 : "inBoxP",
        serText9 : "inBoxP",
        serText10 : "inBoxP",
        serText11 : "inBoxP activeSerFont",
        serText12 : "inBoxP",
        serText13 : "inBoxP",
        serImgClass1 : "inBoxImg",
        serImgClass2 : "inBoxImg",
        serImgClass3 : "inBoxImg",
        serImgClass4 : "inBoxImg",
        serImgClass5 : "inBoxImg",
        serImgClass6 : "inBoxImg",
        serImgClass7 : "inBoxImg",
        serImgClass8 : "inBoxImg",
        serImgClass9 : "inBoxImg",
        serImgClass10 : "inBoxImg",
        serImgClass11 : "inBoxImg abAin",
        serImgClass12 : "inBoxImg",
        serImgClass13 : "inBoxImg",
        serTopBox1 : "none",
        serTopBox2 : "none",
        serTopBox3 : "none",
        serTopBox4 : "none",
        serTopBox5 : "block",
        serTopBox6 : "none",
        serTopBox7 : "none",
        serTopBox8 : "none",
        serTopBox9 : "none",
        serTopBox10 : "none",
        serTopBox11 : "none",
        serTopBox12 : "none",
        serTopBox13 : "none",
        topClass1 : "tBannerBox",
        topClass2 : "tBannerBox",
        topClass3 : "tBannerBox",
        topClass4 : "tBannerBox",
        topClass5 : "tBannerBox",
        topClass6 : "tBannerBox",
        topClass7 : "tBannerBox",
        topClass8 : "tBannerBox",
        topClass9 : "tBannerBox",
        topClass10 : "tBannerBox",
        topClass11 : "tBannerBox SerAin",
        topClass12 : "tBannerBox",
        topClass13 : "tBannerBox",
                });
                break;
            case "ser12":
                 this.setData({
                         serImg1:ul+jddata[12].one,
            serImg2:ul+jddata[11].one,
            serImg3:ul+jddata[10].one,
            serImg4:ul+jddata[9].one,
            serImg5:ul+jddata[8].one,
            serImg6:ul+jddata[7].one,
            serImg7:ul+jddata[6].one,
            serImg8:ul+jddata[5].two,
            serImg9:ul+jddata[4].one,
            serImg10:ul+jddata[3].one,
            serImg11:ul+jddata[2].one,
            serImg12:ul+jddata[1].two,
            serImg13:ul+jddata[0].one,
        serText1 : "inBoxP",
        serText2 : "inBoxP",
        serText3 : "inBoxP",
        serText4 : "inBoxP",
        serText5 : "inBoxP",
        serText6 : "inBoxP",
        serText7 : "inBoxP",
        serText8 : "inBoxP",
        serText9 : "inBoxP",
        serText10 : "inBoxP",
        serText11 : "inBoxP",
        serText12 : "inBoxP activeSerFont",
        serText13 : "inBoxP",
        serImgClass1 : "inBoxImg",
        serImgClass2 : "inBoxImg",
        serImgClass3 : "inBoxImg",
        serImgClass4 : "inBoxImg",
        serImgClass5 : "inBoxImg",
        serImgClass6 : "inBoxImg",
        serImgClass7 : "inBoxImg",
        serImgClass8 : "inBoxImg",
        serImgClass9 : "inBoxImg",
        serImgClass10 : "inBoxImg",
        serImgClass11 : "inBoxImg",
        serImgClass12 : "inBoxImg abAin",
        serImgClass13 : "inBoxImg",
        serTopBox1 : "none",
        serTopBox2 : "none",
        serTopBox3 : "none",
        serTopBox4 : "none",
        serTopBox5 : "block",
        serTopBox6 : "none",
        serTopBox7 : "none",
        serTopBox8 : "none",
        serTopBox9 : "none",
        serTopBox10 : "none",
        serTopBox11 : "none",
        serTopBox12 : "none",
        serTopBox13 : "none",
        topClass1 : "tBannerBox",
        topClass2 : "tBannerBox",
        topClass3 : "tBannerBox",
        topClass4 : "tBannerBox",
        topClass5 : "tBannerBox",
        topClass6 : "tBannerBox",
        topClass7 : "tBannerBox",
        topClass8 : "tBannerBox",
        topClass9 : "tBannerBox",
        topClass10 : "tBannerBox",
        topClass11 : "tBannerBox",
        topClass12 : "tBannerBox SerAin",
        topClass13 : "tBannerBox",
                });
                break;
            case "ser13":
                this.setData({
                        serImg1:ul+jddata[12].one,
            serImg2:ul+jddata[11].one,
            serImg3:ul+jddata[10].one,
            serImg4:ul+jddata[9].one,
            serImg5:ul+jddata[8].one,
            serImg6:ul+jddata[7].one,
            serImg7:ul+jddata[6].one,
            serImg8:ul+jddata[5].two,
            serImg9:ul+jddata[4].one,
            serImg10:ul+jddata[3].one,
            serImg11:ul+jddata[2].one,
            serImg12:ul+jddata[1].one,
            serImg13:ul+jddata[0].two,
        serText1 : "inBoxP",
        serText2 : "inBoxP",
        serText3 : "inBoxP",
        serText4 : "inBoxP",
        serText5 : "inBoxP",
        serText6 : "inBoxP",
        serText7 : "inBoxP",
        serText8 : "inBoxP",
        serText9 : "inBoxP",
        serText10 : "inBoxP",
        serText11 : "inBoxP",
        serText12 : "inBoxP",
        serText13 : "inBoxP activeSerFont",
        serImgClass1 : "inBoxImg",
        serImgClass2 : "inBoxImg",
        serImgClass3 : "inBoxImg",
        serImgClass4 : "inBoxImg",
        serImgClass5 : "inBoxImg",
        serImgClass6 : "inBoxImg",
        serImgClass7 : "inBoxImg",
        serImgClass8 : "inBoxImg",
        serImgClass9 : "inBoxImg",
        serImgClass10 : "inBoxImg",
        serImgClass11 : "inBoxImg",
        serImgClass12 : "inBoxImg",
        serImgClass13 : "inBoxImg abAin",
        serTopBox1 : "none",
        serTopBox2 : "none",
        serTopBox3 : "none",
        serTopBox4 : "none",
        serTopBox5 : "block",
        serTopBox6 : "none",
        serTopBox7 : "none",
        serTopBox8 : "none",
        serTopBox9 : "none",
        serTopBox10 : "none",
        serTopBox11 : "none",
        serTopBox12 : "none",
        serTopBox13 : "none",
        topClass1 : "tBannerBox",
        topClass2 : "tBannerBox",
        topClass3 : "tBannerBox",
        topClass4 : "tBannerBox",
        topClass5 : "tBannerBox",
        topClass6 : "tBannerBox",
        topClass7 : "tBannerBox",
        topClass8 : "tBannerBox",
        topClass9 : "tBannerBox",
        topClass10 : "tBannerBox",
        topClass11 : "tBannerBox",
        topClass12 : "tBannerBox",
        topClass13 : "tBannerBox SerAin",
                });
                break;
        }
    
    },
    // 重置所有元素的位置
    goInit : function(){
        this.setData({
            // 关于我们
            num2_1 : 0,
            num2_2 : 0,
            num2_3 : 0,
            num2_4 : 0,
            num2_5 : 0,
            // 服务项目
            abScale1 : 0,
            abScale2 : 0,
            abScale3 : 0,
            abScale4 : 0,
            abScale5 : 0,
            abScale6 : 0,
            abOpt1 : 0,
            abOpt2 : 0,
            abOpt3 : 0,
            abImgClass1 :"",
            abImgClass2 : "",
            abImgClass3 : "",
            abImgClass4 : "",
            abImgClass5 : "",
            abImgClass6 : "",
            abText1 : "",
            abText2 : "",
            abText3 : "",
            abText4 : "",
            abText5 : "",
            abText6 : "",
            abImg1: "https://p.weiyunzuo.com/images/icon/Sicon1.png",
            abImg2: "https://p.weiyunzuo.com/images/icon/Sicon2.png",
            abImg3: "https://p.weiyunzuo.com/images/icon/Sicon3.png",
            abImg4: "https://p.weiyunzuo.com/images/icon/Sicon4.png",
            abImg5: "https://p.weiyunzuo.com/images/icon/Sicon5.png",
            abImg6: "https://p.weiyunzuo.com/images/icon/Sicon6.png",
            // 经典案例
            caseView1 : 0,
            caseView2 : 0,
            caseView3 : 0,
            caseView4 : 0,
            caseView5 : 0,
            caseView6 : 0,
            caseView7 : 0,
            caseView8 : 0,
            caseView9 : 0,
            caseView10 : 0,
            caseView11 : 0,
            caseView12 : 0,
            caseView13 : 0,
            caseView14 : 0,
            caseView15 : 0,
            caseView16 : 0,
            // 联系我们
            con1 : "-100%",
            con2 : "-100%",
            con3 : "-100%",
            con4 : "-100%",
            con5 : "-100%",
            con6 : "-100%",
            con7 : "-100%",
            con8 : "-100%",
           
        });


        clearInterval(abInt);
        clearInterval(caseInt);
        clearInterval(conInt);
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
    //  轮播播改变时发生的事件
    swChange : function(e){
        var index = e.detail.current;
        // 让banner的元素回到最左边
        switch(index){
            case 0:
                this.ban1Ani(0);
                this.banLogoInit(1);
                this.banLogoInit(2);
                this.setData({
                    ban2_init : "-100%",
                    ban3_init : "-100%",
                });
                break;
            case 1:
                this.ban1Ani(1);
                this.banLogoInit(0);
                this.banLogoInit(2);
                this.setData({
                    ban1_init : "-100%",
                    ban3_init : "-100%",
                });
                break;
            case 2:
                this.ban1Ani(2);
                this.banLogoInit(0);
                this.banLogoInit(1);
                this.setData({
                    ban1_init : "-100%",
                    ban2_init : "-100%"
                });
                break;
        }
    },
    // 触摸开始
    mytouchstart: function(e){    
           yStart = e.touches[0].pageY;
    },
    // 触摸移动
    mytouchmove : function(e){
          yEnd = e.touches[0].pageY;
    },
    // 触摸结束
    mytouchend: function(e){   
            var cc = this;
          final = yEnd - yStart;
           if(final != 0 && yEnd != 0){
               if(final > 30){
                   if(numIndex != 0){
                       numIndex --;
                   }
                   console.log("up   当前位置："+numIndex);
               }
               if(final < -30){
                    if(numIndex != 5){
                       numIndex ++;
                     }
                     console.log("down  当前位置："+numIndex);
               }   
               // 取滑动距离的绝对值
               if(Math.abs(final) >= 30){
                     //   重置所有元素的位置
                    this.goInit();
                    //   再执行对应的动画
                    switch(numIndex){
                        //首页
                            case 0:
                                break;
                            //关于我们
                            case 1:
                                this.aniNum2();
                                break;
                            //服务项目
                            case 2:
                                this.abAnimate();
                                break;
                            //案例
                            case 3:

                                break;
                            //经典案例
                            case 4:
                                this.caseAni();
                                break;
                            //联系我们
                            case 5:
                                if(srcWid < 360 && srcHei < 500){
                                    this.conAniX();
                                }else{
                                    this.conAni();
                                }
                                break;
                    }
               }
          }
          //设置box 的位置
            this.setData({
                boxTop : 'boxTop'+numIndex
            });

        //  归零
           yStart = 0;
           yEnd = 0;
           final = 0;
    },
    // 拨打电话
    call : function(e){
        wx.makePhoneCall({
          phoneNumber: '800-820-8295',
        });
    },
    // 打开页面
    caseTap : function(e){
          var cid=e.currentTarget.dataset.cid;
        console.log(cid)
                wx.navigateTo({
                  url: '../case1/case1?id='+cid
                })
           

    },
    serClick2:function(e){
          var cid=e.currentTarget.dataset.tidd;
          var vid=cid.split("=")[1]
                wx.navigateTo({
                  url: '../case1/case1?id='+vid
                })
           

    },
    // 点击提示按钮
    tipTap : function(){
        var cc = this;
        cc.setData({
            moveBoxTop : "100%",
            tipHide : true
        });
        var t = setTimeout(function(){
            cc.setData({
                con_height : "0",
                hideTextHeight : "0",
                moveBoxTop : "-100%",
                conName : "",
                conIphone : "",
                conRequest : ""
            });    
            clearTimeout(t);
        },550);
    },
    //加载之前
    formBind :function(e){  
        this.setData({tipHide:false});
    var name_= e.detail.value.username;
    var tel_=e.detail.value.phone;
    var xuqiu_=e.detail.value.xuqiu;
    wx.request({
      url: requrl,
      data: {
      Code:'1006',
      name:name_,
      tel:tel_,
      xuqiu:xuqiu_
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success\
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
    
        

    },
    onLoad: function(){
        var cc = this;
  wx.request({
  url: 'https://p.weiyunzuo.com/m.aspx',
  data: {
      Code:'1007'
  },
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, D ELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
   var content= res.data.split("~")
   var banner=content[0].split("}№{")
   var title1=content[1].split("-")
   var title2=content[2].split("-")
   var title3=content[3].split("-")
  
    cc.setData({banner_logo:ul+content[4],
    banner_1_1:title1[0],
    banner_1_2:title2[0],
    banner_1_3:title3[0],
    banner_2_1:title1[1],
    banner_2_2:title2[1],
    banner_2_3:title3[1],
    banner_3_1:title1[2],
    banner_3_2:title2[2],
    banner_3_3:title3[2],
    banner_1_0:ul+banner[1],
    banner_2_0:ul+banner[2],
    banner_3_0:ul+banner[3]
})
   },
  fail: function(res) {
    // fail
  },
  complete: function(res) {
    // complete
  }
})
wx.request({
  url: 'https://p.weiyunzuo.com/m.aspx',
  data: {Code:'1008'},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
    var content= res.data.split("~");
  
     cc.setData({
         gtitle_1:content[0].split("，")[0],
         gtitle_2:content[0].split("，")[1],
         gtitle_3:content[0].split("，")[2],
         gcontent:content[1],
         gvideo:ul+content[2],
         glogo:ul+content[3]
     })
  },
  fail: function(res) {
    // fail
  },
  complete: function(res) {
    // complete
  }
})
wx.request({
  url:requrl,
  data: {Code:'1004'},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
       
    // success
   // for(var i=0;i<res.data.length;i++){
       fwdata=res.data
        cc.setData({
            abImg1:ul+res.data[0].img,
            abImg2:ul+res.data[1].img,
            abImg3:ul+res.data[2].img,
            abImg4:ul+res.data[3].img,
            abImg5:ul+res.data[4].img,
            abImg6:ul+res.data[5].img,
            abnames1:res.data[0].names,
            abnames2:res.data[1].names,
            abnames3:res.data[2].names,
            abnames4:res.data[3].names,
            abnames5:res.data[4].names,
            abnames6:res.data[5].names,
            abhtml1:res.data[0].html,
            abhtml2:res.data[1].html,
            abhtml3:res.data[2].html,
            abhtml4:res.data[3].html,
            abhtml5:res.data[4].html,
            abhtml6:res.data[5].html,
            })
    //}
  },
  fail: function(res) {
    // fail
  },
  complete: function(res) {
    // complete
  }
})
wx.request({
  url: requrl,
  data: {Code:'1003'},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
      //console.log(res.data)
      var andata=res.data;
      console.log(andata)
    cc.setData({
            cid1:andata[0].url.split("?")[1].split("=")[1],
            cid2:andata[1].url.split("?")[1].split("=")[1],
            cid3:andata[2].url.split("?")[1].split("=")[1],
            cid4:andata[3].url.split("?")[1].split("=")[1],
            cid5:andata[4].url.split("?")[1].split("=")[1],
            cid6:andata[5].url.split("?")[1].split("=")[1],
            cid7:andata[6].url.split("?")[1].split("=")[1],
            cid8:andata[7].url.split("?")[1].split("=")[1],
            cid9:andata[8].url.split("?")[1].split("=")[1],
            cid10:andata[9].url.split("?")[1].split("=")[1],
            cid11:andata[10].url.split("?")[1].split("=")[1],
            cid12:andata[11].url.split("?")[1].split("=")[1],
            cid13:andata[12].url.split("?")[1].split("=")[1],
            cid14:andata[13].url.split("?")[1].split("=")[1],
            cid15:andata[14].url.split("?")[1].split("=")[1],
            cid16:andata[15].url.split("?")[1].split("=")[1],
      animg1:ul+andata[0].three,
      animg2:ul+andata[1].three,
      animg3:ul+andata[2].three,
      animg4:ul+andata[3].three,
      animg5:ul+andata[4].three,
      animg6:ul+andata[5].three,
      animg7:ul+andata[6].three,
      animg8:ul+andata[7].three,
      animg9:ul+andata[8].three,
      animg10:ul+andata[9].three,
      animg11:ul+andata[10].three,
      animg12:ul+andata[11].three,
      animg13:ul+andata[12].three,
      animg14:ul+andata[13].three,
      animg15:ul+andata[14].three,
      animg16:ul+andata[15].three,
    })
    wx.request({
      url: requrl,
      data: {Code:"1001"},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(r){
        // success
        console.log(r.data)
        jddata=r.data;
        wx.request({
          url: requrl,
          data: {Code:"1002",id:jddata[12].id},
          method: 'GET',
          success: function(res){
           var an_data_=res.data;
            console.log(an_data_)
            cc.setData({
            an_cdata:an_data_,
            serTopBox1 : "none",
        serTopBox2 : "none",
        serTopBox3 : "none",
        serTopBox4 : "none",
        serTopBox5 : "block",
        serTopBox6 : "none",
        serTopBox7 : "none",
        serTopBox8 : "none",
        serTopBox9 : "none",
        serTopBox10 : "none",
        serTopBox11 : "none",
        serTopBox12 : "none",
        serTopBox13 : "none",
            })
            
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })

        cc.setData({
            serImg1:ul+jddata[12].two,
            serImg2:ul+jddata[11].one,
            serImg3:ul+jddata[10].one,
            serImg4:ul+jddata[9].one,
            serImg5:ul+jddata[8].one,
            serImg6:ul+jddata[7].one,
            serImg7:ul+jddata[6].one,
            serImg8:ul+jddata[5].one,
            serImg9:ul+jddata[4].one,
            serImg10:ul+jddata[3].one,
            serImg11:ul+jddata[2].one,
            serImg12:ul+jddata[1].one,
            serImg13:ul+jddata[0].one,
            tid1:jddata[12].id,
            tid2:jddata[11].id,
            tid3:jddata[10].id,
            tid4:jddata[9].id,
            tid5:jddata[8].id,
            tid6:jddata[7].id,
            tid7:jddata[6].id,
            tid8:jddata[5].id,
            tid9:jddata[4].id,
            tid10:jddata[3].id,
            tid11:jddata[2].id,
            tid12:jddata[1].id,
            tid13:jddata[0].id,

            sertit1:jddata[12].names,
            sertit2:jddata[11].names,
            sertit3:jddata[10].names,
            sertit4:jddata[9].names,
            sertit5:jddata[8].names,
            sertit6:jddata[7].names,
            sertit7:jddata[6].names,
            sertit8:jddata[5].names,
            sertit9:jddata[4].names,
            sertit10:jddata[3].names,
            sertit11:jddata[2].names,
            sertit12:jddata[1].names,
            sertit13:jddata[0].names,

        })
      },
      fail: function(r) {
        // fail
      },
      complete: function(r) {
        // complete
      }
    })
  },
  fail: function(res) {
    // fail
  },
  complete: function(res) {
    // complete
  }
})
wx.request({
  url: requrl,
  data: {Code:'1009'},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
    // success
   // var t= JSON.parse(res.data)
   var lxdata=res.data.split(",");
   cc.setData({
       erweima:ul+lxdata[0],
       tel:lxdata[1],
       address1:lxdata[2],
       address2:lxdata[3]
   })
  },
  fail: function(res) {
    // fail
  },
  complete: function(res) {
    // complete
  }
})
     console.log("加载完毕！");
        //wx.hideLoading(); 
        this.setData({  
            loadHidden : true
        });
        // 执行banner动画
        this.ban1Ani(0);
        
        // 小屏
        if(srcWid < 360){
            console.log("小屏");
            cc.setData({
                // 关于我们
                x_abLogo : "8% 0% 2% 32.5%",
                x_abText1_fontSize : "12px",
                x_abText1_lineHeight : "25px",
                x_abText2_fontSize : "12px",
                x_abText2_marginTop : "3%",
                // 经典案例
                x_caseClass : "num3View x_caseClass",
                // 案例
                x_cCaseClass : "x_cCaseClass",
                x_cCaseClass2 : "inBox x_cCaseClass2",
                // 方块
                x_ccClass : "caseDiv x_ccClass",
            });
        }
        // 设置方块的位置
        if(srcHei <= 580 && srcWid == 360){
            cc.setData({
                x_cTopBox : "5%"
            })
        }
        // iphone4
        if(srcWid < 360 && srcHei < 500){
            cc.setData({
                x_cTopBox : "5%",
                x_con : "x_con"
            });
        }
    },
    
    

})



















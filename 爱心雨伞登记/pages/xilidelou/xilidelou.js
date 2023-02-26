Page({

  data:{
    borrow_Hidden:true, //控制借伞按钮的显示状态(默认隐藏)
    BIANHAO:null,
    progress_Hidden:true, //控制进度条是否隐藏(默认隐藏)
    percentValue:0, //控制进度条
    Hidden_status:false //控制输入框的显示
  },

  //增加进度条数据
  add_Percent(add_Value){
    let value = this.data.percentValue
    this.setData({
      percentValue:value+add_Value
    })
  },

  //显示添加记录成功提示
  show_Success(){
    wx.showToast({
      title: '借伞成功',
      icon: 'success',
      duration: 2000 //持续的时间
    })
  },

  //当有人借伞没有及时归将显示弹窗 
  overTime(){
    wx.cloud.callFunction({
      name: "getOpenid",
      success:function (res) {
        var openID = res.result.openid
        wx.cloud.database().collection("xlidelou").where({
          _openid:openID
        }).get({
          success:function(ress){
            console.log('获取借伞记录')
            console.log(ress.data[0])
            if(ress.data.length == 0){
              console.log('未借伞')
            }else if(ress.data.length == 1) {
              if(ress.data[0].didian=="立德楼:A"){
                var temp = ress.data[0].time
                var start_Time = new Date(temp)
                //console.log(start_Time)
                var now_Time = new Date
                //console.log(now_Time)
                var now_Time_h = now_Time.getTime()
                var start_Time_h = start_Time.getTime()
                var now_start = now_Time_h-start_Time_h
                //console.log(now_start)
                var judge_day = Math.floor(now_start/(24*3600*1000))
                console.log('超时'+judge_day+'天')
                if(judge_day >3){
                  wx.cloud.database().collection('xlidelou').where({
                    _openid:openID
                  }).update({
                    data:{
                      ststus:'超时'+judge_day+'天'
                    },
                    success:function (res) {
                      console.log('数据更新成功!')
                      //弹窗显示用户是否有超时伞
                      wx.showToast({
                        title: '您好,您目前有一把雨伞未及时归还,请及时归还!',
                        icon:'none',//显示图标
                        duration:3000
                      })    
                    }
                  })
                }
              }
            }
          }
        })
      }
    })
  },


  //打电话
  freeTell1(){
    wx.makePhoneCall({
      phoneNumber: '13962861192',
      success:function(){
        console.log("打电话成功")
      },
      fail:function(){
        console.log("打电话失败")
      }
    })
  },
  freeTell2(){
    wx.makePhoneCall({
      phoneNumber: '19816553630',
      success:function(){
        console.log("打电话成功")
      },
      fail:function(){
        console.log("打电话失败")
      }
    })
  },



  //保存数据
  save(){
    this.setData({
      borrow_Hidden:true,
      progress_Hidden:false,
      Hidden_status:true
    })
    var that=this; 
    //获取时间
    let dataTime
    let yy = new Date().getFullYear()
    let mm = new Date().getMonth()+1
    let dd = new Date().getDate()
    let hh = new Date().getHours()
    let mf = new Date().getMinutes()<10?'0'+new Date().getMinutes():
      new Date().getMinutes()
    let ss = new Date().getSeconds()<10?'0'+new Date().getSeconds():
      new Date().getSeconds()
      dataTime = `${yy}-${mm}-${dd} ${hh}:${mf}:${ss}`; 
        // login云函数查询用户授权登陆的appid,openid
   wx.cloud.callFunction({
    name: "getOpenid",
    success(res){
    // 授权用户的openid
    let openId= res.result.openid
    // 判断openid是否存在于数据库
    wx.cloud.database().collection("yonghuxinxi").where({
      _openid:openId
    }).get().then(ress => {  
      const db = wx.cloud.database().collection("xlidelou")
      db.add({
        data:{
          Banji:ress.data[0].userBANJI,
          Name:ress.data[0].userNAME,
          Phone:ress.data[0].userPHONE,
          time:dataTime,
          didian:"立德楼:A",
          userBIANHAO:that.data.BIANHAO ,//雨伞编号
        }})})

    wx.cloud.database().collection("yonghuxinxi").where({
      _openid:openId
    }).get().then(ress=>{
      const db=wx.cloud.database().collection("allshuju")
      db.add({
        data:{
          Banji:ress.data[0].userBANJI,
          Name:ress.data[0].userNAME,
          Phone:ress.data[0].userPHONE,
          time:dataTime,
          didian:"立德楼:A",
          userBIANHAO:that.data.BIANHAO ,//雨伞编号
        }})
    })
      
      }})
      
          //删除残余数据
        wx.cloud.database().collection("xlidelou").where({
         userBIANHAO:that.data.BIANHAO
        }).remove({})
        that.add_Percent(100)
      },
   //编号事件
   bianhao(e){
    console.log(e)
    if(e.detail.value <= 14 && e.detail.value >=1 && (e.detail.value.length <=2) ){
      let BIANHAO = e.detail.value;
      if (BIANHAO.length==1){
        this.setData({
          BIANHAO:'0'+e.detail.value,
          borrow_Hidden:false
        })
      }else{
        this.setData({
          BIANHAO:e.detail.value,
          borrow_Hidden:false
        })       
      }
    }else{
      if(e.detail.value == 0){
        this.setData({
          borrow_Hidden:true,
          BIANHAO:null
        })
      }else{
        this.setData({
          borrow_Hidden:true,
          BIANHAO:null
        })
        wx.showToast({
          title: '错误输入',
          icon:'error',
          duration:500
        })
      }
    }
},
  onLoad(){
  },
  onShow(){
      this.overTime()
  }
})

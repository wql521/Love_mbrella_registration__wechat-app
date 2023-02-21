const db = wx.cloud.database().collection("xlidelou") //数据库存放用户信息
Page({




  //保存数据
  save(){
    wx.showToast({
      title: '借伞成功',
      icon: 'success',
      duration: 2000 //持续的时间
    })

    this.setData({
      Hidden1:true
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




      },
  //编号事件
  bianhao(e){
    if(e.detail.value >16){
      this.setData({Hidden1:true})

      if(e.detail.value ==1008611){
        wx.navigateTo({
          url: '/pages/x0/x0',
        })
      } //跳转到管理员界面

      wx.showToast({
        title: '超出雨伞编号,请重新输入',
        icon:'none'
      })
    }else{
      this.setData({Hidden1:false})


      let BIANHAO = e.detail.value;
      if (BIANHAO.length==1){
        var that =this
        that.setData({
          BIANHAO:'0'+e.detail.value
        })
        
      }else{
        var that =this
        that.setData({
          BIANHAO:e.detail.value
        })
        
      }


    }

  },
  onLoad(){
    this.setData({
      Hidden1:true
    })
  }
})

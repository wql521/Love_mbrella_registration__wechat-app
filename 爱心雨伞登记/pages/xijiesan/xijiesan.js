// pages/jiesan/jiesan.js
Page({

  //跳转到常大猫咪图鉴
  touch5:function(param){
    wx.navigateTo({
      url: '/pages/allcat/allcat',
    })
  },

//跳转到立德楼页面
  touch1:function(param){
    wx.navigateTo({
      url: '/pages/xilidelou/xilidelou',
      })
  },

//跳转到一食堂页面
  touch2:function(param){
    wx.navigateTo({
  
      url: '/pages/xyishitang/xyishitang',
  
      })
  },

//跳转到二食堂页面
  touch3:function(param){
    wx.navigateTo({
  
      url: '/pages/xershitang/xershitang',
  
      })
  },
  
  touch4:function(){

    this.setData({

      guanbi:true
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
    //立德楼开始
    wx.cloud.database().collection("xlidelou").where({
      _openid:openId
    }).get().then(ress=>{
      const db=wx.cloud.database().collection("allhuansan")
      db.add({
        data:{
          Banji:ress.data[0].Banji,
          Name:ress.data[0].Name,
          Phone:ress.data[0].Phone,
          huansantime:dataTime,
          didian:"立德楼:A",
          userBIANHAO:ress.data[0].userBIANHAO ,//雨伞编号
        }
      }).then(ress=>{
        wx.cloud.database().collection("xlidelou").where({
          _openid:openId
        }).remove({})
      })
    })

    //一食堂
    wx.cloud.database().collection("xshitang1").where({
      _openid:openId
    }).get().then(ress=>{
      const db=wx.cloud.database().collection("allhuansan")
      db.add({
        data:{
          Banji:ress.data[0].Banji,
          Name:ress.data[0].Name,
          Phone:ress.data[0].Phone,
          huansantime:dataTime,
          didian:"一食堂:B",
          userBIANHAO:ress.data[0].userBIANHAO ,//雨伞编号
        }
      }).then(ress=>{
        wx.cloud.database().collection("xshitang1").where({
          _openid:openId
        }).remove({})
      })
    })

    //二食堂
    wx.cloud.database().collection("xshitang2").where({
      _openid:openId
    }).get().then(ress=>{
      const db=wx.cloud.database().collection("allhuansan")
      db.add({
        data:{
          Banji:ress.data[0].Banji,
          Name:ress.data[0].Name,
          Phone:ress.data[0].Phone,
          huansantime:dataTime,
          didian:"二食堂:C",
          userBIANHAO:ress.data[0].userBIANHAO ,//雨伞编号
        }
      }).then(ress=>{
        wx.cloud.database().collection("xshitang2").where({
          _openid:openId
        }).remove({})
      })
    })


  }})

  wx.showToast({
    title: '还伞成功',
    icon: 'success',
    duration: 2000 //持续的时间
  })


  },
  
  


  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  
    

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
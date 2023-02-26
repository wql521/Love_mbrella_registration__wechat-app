// pages/jiesan/jiesan.js
Page({
  //跳转到青协
  touch6:function(){
    wx.navigateTo({
      url: '/pages/QX/QX',
    })
  },

  //跳转到常大猫咪图鉴
  touch5:function(param){
    wx.navigateTo({
      url: '/pages/allcat/allcat',
    })
  },


//跳转到主楼页面
  touch1:function(param){
    wx.navigateTo({
      url: '/pages/one/one',
      })
  },

//跳转到辅楼页面
  touch2:function(param){
    wx.navigateTo({
  
      url: '/pages/two/two',
  
      })
  },

//跳转到图书馆页面
  touch3:function(param){
    wx.navigateTo({
  
      url: '/pages/three/three',
  
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
    //主楼开始
    wx.cloud.database().collection("zhulou").where({
      _openid:openId
    }).get().then(ress=>{
      const db=wx.cloud.database().collection("allhuansan")
      db.add({
        data:{
          Banji:ress.data[0].Banji,
          Name:ress.data[0].Name,
          Phone:ress.data[0].Phone,
          huansantime:dataTime,
          didian:"主楼:A",
          userBIANHAO:ress.data[0].userBIANHAO ,//雨伞编号
        }
      }).then(ress=>{
        wx.cloud.database().collection("zhulou").where({
          _openid:openId
        }).remove({})
      })
    })
    //主楼结束

    //辅楼开始
    wx.cloud.database().collection("fulou").where({
      _openid:openId
    }).get().then(ress=>{
      const db=wx.cloud.database().collection("allhuansan")
      db.add({
        data:{
          Banji:ress.data[0].Banji,
          Name:ress.data[0].Name,
          Phone:ress.data[0].Phone,
          huansantime:dataTime,
          didian:"辅楼:B",
          userBIANHAO:ress.data[0].userBIANHAO ,//雨伞编号
        }
      }).then(ress=>{
        wx.cloud.database().collection("fulou").where({
          _openid:openId
        }).remove({})
      })
    })
    //辅楼结束

    //图书馆开始
    wx.cloud.database().collection("tushuguan").where({
      _openid:openId
    }).get().then(ress=>{
      const db=wx.cloud.database().collection("allhuansan")
      db.add({
        data:{
          Banji:ress.data[0].Banji,
          Name:ress.data[0].Name,
          Phone:ress.data[0].Phone,
          huansantime:dataTime,
          didian:"图书馆:C",
          userBIANHAO:ress.data[0].userBIANHAO ,//雨伞编号
        }
      }).then(ress=>{
        wx.cloud.database().collection("tushuguan").where({
          _openid:openId
        }).remove({})
      })
    })
    //图书馆结束
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
    //控制青协按钮
    Hidden:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //加载青协按钮
    //固定写法,用于获取当前数据库中QX这个表的实例对象
    wx.cloud.database().collection('QX').doc('fc8e646563f47501014f258102ddd49d').get().then(res =>{
      console.log('请求成功',res)
      console.log(res.data.Hidden)
      this.setData({
        Hidden:res.data.Hidden
      })
     })
     //请求失败
    .catch(err =>{
        console.log('请求失败',err)
     })
     this.onShow()
  },

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
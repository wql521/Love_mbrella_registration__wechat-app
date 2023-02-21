// pages/index/index.js
//index.js


Page({
  

  go(){
  

  },

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {


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
      if(ress.data.length==0){
        wx.navigateTo({
          url: '/pages/per/per'
        })
      }else{

        if (ress.data[0].userNAME=='韩新' || ress.data[0].userNAME=='王钱龙') {
          console.log('韩新和王钱龙')
          wx.navigateTo({
            url: '/pages/All/All',
          })          
        }else{
        if(ress.data[0].userSCHOOL=='行政部'){
          console.log('青协行政部')
          wx.navigateTo({
            url: '/pages/All/All',
          })
        }
        else{
        console.log(ress.data[0].userSCHOOL)
        if(ress.data[0].userSCHOOL=='武进'){
          console.log('1')
          wx.navigateTo({
            url: '/pages/jiesan/jiesan'
          })
        }
        else if(ress.data[0].userSCHOOL=='西太湖'){
          console.log('2')
          wx.navigateTo({
            url: '/pages/xijiesan/xijiesan'
          })
        }
      } //第三个else
      

    } //第二个else


      } //第一个else
     
    
    })
    },fail(res){
      console.log("云函数调用失败")
    }
  })    
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
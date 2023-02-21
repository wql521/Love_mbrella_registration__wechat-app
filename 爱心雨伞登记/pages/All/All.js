// pages/All/All.js
Page({
  //跳到猫咪途径
  Click3(){
    wx.navigateTo({
      url: '/pages/allcat/allcat',
    })
  },

  //跳到主楼管理员界面
  go1(){
    wx.navigateTo({
      url: '/pages/guanliyuan/guanliyuan',
    })
  },
  //跳到辅楼管理员界面
  go2(){
    wx.navigateTo({
      url: '/pages/guanliyuan2/guanliyuan2',
    })
  },
  //跳到图书馆管理员界面
  go3(){
    wx.navigateTo({
      url: '/pages/guanliyuan3/guanliyuan3',
    })
  },
  //跳到武进借伞界面
  go4(){
    wx.navigateTo({
      url: '/pages/jiesan/jiesan',
    })
  },

  //跳到立德楼管理员界面
  go5(){
    wx.navigateTo({
      url: '/pages/x0/x0',
    })
  },
  //跳到一食堂管理员界面
  go6(){
    wx.navigateTo({
      url: '/pages/x1/x1',
    })
  },
  //跳到二食堂管理员界面
  go7(){
    wx.navigateTo({
      url: '/pages/x2/x2',
    })
  },
  //跳到西太湖借伞界面
  go8(){
    wx.navigateTo({
      url: '/pages/xijiesan/xijiesan',
    })
  },




  //跳转总体界面(目前行政部)
  goxz(){
    wx.navigateTo({
      url: '/pages/qx/xz/xz'
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
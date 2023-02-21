// pages/x2/x2.js
Page({


  bianhao(e){
    this.setData({
      NAME:e.detail.value
    })
  },

  shanchu(){
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 2000 //持续的时间
    })
    wx.cloud.database().collection("xshitang2").where({
      Name:this.data.NAME
    }).remove({})
    this.onLoad()
  },

  /**
   * 页面的初始数据
   */
  data: {
    List:[],
    BIANHAO:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.cloud.database().collection('xshitang2').get().then(res => {
      console.log("res",res.data)
      this.setData({
        List:res.data
      })
    
    })

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
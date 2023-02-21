// pages/onlyone/onlyone.js
Page({

  //倒计时函数
  countdown(){
    var second=this.data.time
    console.log(second)
    if(second>0){
      this.setData({
        time:this.data.time-1
      })
      setTimeout(this.countdown,1000)
    }else{
      this.setData({
        back:'',
        time:'新年快乐',
        imagesrc:"cloud://cloud1-6g5n7d3da0d9860e.636c-cloud1-6g5n7d3da0d9860e-1313177812/2023年图标.jpg",
        imagesrc1:"cloud://cloud1-6g5n7d3da0d9860e.636c-cloud1-6g5n7d3da0d9860e-1313177812/兔子1.jpg",
        imagesrc2:"cloud://cloud1-6g5n7d3da0d9860e.636c-cloud1-6g5n7d3da0d9860e-1313177812/兔子2.jpg"
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    time:11,
    back:'倒计时:',
    imagesrc:"cloud://cloud1-6g5n7d3da0d9860e.636c-cloud1-6g5n7d3da0d9860e-1313177812/跨越.jpg",
    imagesrc1:"cloud://cloud1-6g5n7d3da0d9860e.636c-cloud1-6g5n7d3da0d9860e-1313177812/最好的我们.jpeg",
    imagesrc2:"cloud://cloud1-6g5n7d3da0d9860e.636c-cloud1-6g5n7d3da0d9860e-1313177812/奔跑.jpg"
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
    this.countdown()

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    wx.getBackgroundAudioManager().stop();

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    wx.getBackgroundAudioManager().stop();

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
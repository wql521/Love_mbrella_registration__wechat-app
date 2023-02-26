// app.js
App({
  onLaunch:function(){
    console.log('小程序开始启动')
    //云开发初始化
    wx.cloud.init({
      env:'cloud1-6g5n7d3da0d9860e',
      traceUser: true,
    })
  },
  globalData: {
    userInfo: null,
    url: "cloud://cloud1-6g5n7d3da0d9860e.636c-cloud1-6g5n7d3da0d9860e-1313177812/",
  }
})

wx.showShareMenu({
  withShareTicket: true
})

wx.setInnerAudioOption({ obeyMuteSwitch: false });

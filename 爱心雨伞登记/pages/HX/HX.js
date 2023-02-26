// pages/HX/HX.js
//韩新
Page({

  //还伞
  huansan(){
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
  console.log('数据删除成功')
  },

  //显示借伞成功
  over_Success(){
    wx.showToast({
      title: '借伞成功',
      icon:'success'
    })
  },

  //保存数据
  save(adress,number,didian){
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
      const db = wx.cloud.database().collection(adress)
      db.add({
        data:{
          Banji:ress.data[0].userBANJI,
          Name:ress.data[0].userNAME,
          Phone:ress.data[0].userPHONE,
          time:dataTime,
          didian:didian,
          userBIANHAO:number ,//雨伞编号
        }
      })
    })   
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
            didian:didian,
            userBIANHAO:number ,//雨伞编号
          }
        })
      })
    }})
    //删除残余数据
    wx.cloud.database().collection(adress).where({
      userBIANHAO:number
    }).remove({})
},

  //借伞函数
  jiesan(){
    var Index = this.data.multiIndex
    if(Index[0]==0){
      console.log("武进")
      switch(Index[1]){
        case 0:{
          console.log('主楼')
          var number = this.data.multiArray[2][Index[2]]
          this.save('zhulou',number,'主楼:A')
          console.log('写入数据成功')
          this.over_Success()
          break;
        }
        case 1:{
          console.log('辅楼')
          var number = this.data.multiArray[2][Index[2]]
          this.save('fulou',number,'辅楼:B')
          console.log('写入数据成功')
          this.over_Success()
          break;
        }
        case 2:{
          console.log('图书馆')
          var number = this.data.multiArray[2][Index[2]]
          this.save('tushuguan',number,'图书馆:C')
          console.log('写入数据成功')
          this.over_Success()
          break;
        }
      }
    }else if(Index[0]==1){
      console.log('西太湖')
      switch(Index[1]){
        case 0:{
          console.log('立德楼')
          var number = this.data.multiArray[2][Index[2]]
          this.save('xlidelou',number,'立德楼:A')
          console.log('写入数据成功')
          this.over_Success()
          break;
        }
        case 1:{
          console.log('一食堂')
          var number = this.data.multiArray[2][Index[2]]
          this.save('xshitang1',number,'一食堂:B')
          console.log('写入数据成功')
          this.over_Success()
          break;
        }
        case 2:{
          console.log('二食堂')
          var number = this.data.multiArray[2][Index[2]]
          this.save('xshitang2',number,'二食堂:C')
          console.log('写入数据成功')
          this.over_Success()
          break;
        }
      }
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    multiArray:[['武进','西太湖'],['主楼','辅楼','图书馆'],['01','02','03','04','05','06','07','08','09','10','11','12','13','14']],
    multiIndex:[0,0,0],
    all_Place:[['主楼','辅楼','图书馆'],['立德楼','一食堂','二食堂']]
  },

  //多列选择器点击确认触发
  bindMultiPickerChange(event){
    this.setData({
      multiIndex:event.detail.value
    })
    console.log(this.data.multiIndex)
    this.jiesan()
  },
  //多列选择器列改变时触发
  bindMultiPickerColumnChange(event){
    const data={
      multiArray : this.data.multiArray,
      multiIndex : this.data.multiIndex
    }
    data.multiIndex[event.detail.column]=event.detail.value
    if(event.detail.column==0){
      data.multiIndex[0]=event.detail.value
      data.multiArray[1]=this.data.all_Place[event.detail.value]
    }
    this.setData(data)
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
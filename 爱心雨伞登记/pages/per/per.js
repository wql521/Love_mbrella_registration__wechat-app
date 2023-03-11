
const db = wx.cloud.database().collection("yonghuxinxi") //数据库存放用户信息
Page({


data:{
  Hidden:true,
  array: ['武进', '西太湖']
},
bindPickerChange: function(e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  this.setData({
    index: e.detail.value
  })
  if(this.data.index==0){
    this.setData({Hidden:false})
    var that=this
    that.setData({
      SCHOOL:'武进'
    })
  }
  else if(this.data.index==1){
    this.setData({Hidden:false})
    var that=this
    that.setData({
      SCHOOL:'西太湖'
    })
  }
  
},

  //保存数据
  save(){
    var that=this; 
    db.add({
  data:{
    userSCHOOL:that.data.SCHOOL, //校区
    userNAME:that.data.NAME ,//姓名
    userPHONE:that.data.PHONE, //手机号
    userBANJI:that.data.BANJI, //班级
  }
})

wx.showModal({
  title: '《隐私政策》',
  content: '本软件尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，本软件会按照本隐私权政策的规定使用和披露您的个人信息。但本软件将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下，本软件不会将这些信息对外披露或向第三方提供。本软件会不时更新本隐私权政策。您在同意本软件服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私权政策属于本软件服务使用协议不可分割的一部分。1.适用范围a)在您使用本软件网络服务，本软件自动接收并记录的您的手机上的信息，包括但不限于您的健康数据、使用的语言、访问日期和时间、软硬件特征信息等数据；2.信息的使用a)在获得您的数据之后，本软件会将其上传至服务器，以便您能够更好地使用服务。3.信息披露a)本软件不会将您的信息披露给不受信任的第三方。b)根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；c)如您出现违反中国有关法律、法规或者相关规则的情况，需要向第三方披露；',
  success (res) {
    if (res.confirm) {
      console.log('用户点击确定')
      wx.showModal({
  title: '用户告知及《用户服务协议》',
  content: '本软件将获取您的相关数据用于借伞活动,本协会在此承诺不会将您的信息泄露给第三方,严格遵守《隐私政策》',
  success (res) {
    if (res.confirm) {
      console.log('第二次用户点击确定')
      if(that.data.NAME=='王钱龙'){
        wx.navigateTo({
        
          url: '/pages/HX/HX',
      
          })
      }
      else if(that.data.SCHOOL=='西太湖'){
        wx.navigateTo({
        
          url: '/pages/xijiesan/xijiesan',
      
          })
      }
      
      else if (that.data.SCHOOL=='武进') {
        wx.navigateTo({
        
          url: '/pages/jiesan/jiesan',
      
          })
      }
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
})
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
})

  },
  //姓名事件
  name(e){
    var that =this
    that.setData({
      NAME:e.detail.value
    })
  },

  //手机号事件
  phone(e){
    var that =this
    that.setData({
      PHONE:e.detail.value
    })
  },

  //班级事件
  banji(e){
    var that =this
    that.setData({
      BANJI:e.detail.value
    })}
})


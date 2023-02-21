
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
if(that.data.NAME=='王钱龙'){
  wx.navigateTo({
  
    url: '/pages/All/All',

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


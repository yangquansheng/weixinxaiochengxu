Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    pwd:""
  },
  //登录按钮
  login: function () {
    wx.request({
      url: 'http://127.0.0.1:3001/users/find', //仅为示例，并非真实的接口地址
      data: {
        findType: "exact", 
        phone: this.data.phone,
        pwd: this.data.pwd
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.length)
        if (res.data.length==0){
          wx.showToast({
            title: '登录失败',
            icon: 'success',
            duration: 2000
          })  
        }
        else{
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 2000
          })  
        }
        console.log(res.data)
      }
    })
  },
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  pwdInput: function (e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  reg:function(){
    wx.navigateTo({
      url: '../wxapp/wxapp'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
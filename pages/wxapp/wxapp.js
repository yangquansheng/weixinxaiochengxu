 Page({

  /**
   * 页面的初始数据
   */
  data: {
      sum:0,
      pwd:"",
      phone:"",
  },
  //加
  add: function () {
    console.log(this.data.sum)
    this.setData({
      sum: this.data.sum+1
    })
  },
  //减
  red: function () {
    console.log(this.data.sum)
    this.setData({
      sum: this.data.sum - 1
    })
  },
  //提交按钮
  formSubmit:function(){
    wx.request({
      url: 'http://127.0.0.1:3001/users/add', //仅为示例，并非真实的接口地址
      data: {
        phone: this.data.phone,
        pwd: this.data.pwd
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        wx.navigateTo({
          url: '../login/login'
        })
        console.log(res.data)
      }
    })
  },
  phoneInput:function(e){
  this.setData({
    phone: e.detail.value
  })
},
  pwdInput: function (e) {
    this.setData({
      pwd: e.detail.value
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
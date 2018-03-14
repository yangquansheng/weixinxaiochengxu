Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let nowthis = this;
    wx.request({
      url: 'http://127.0.0.1:8080/movie/find', //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
      
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].maxImg = res.data[i].maxImg.replace(/\\/g, '/')
  
        }
        nowthis.setData({
          msg: res.data,
        })
      }
    })
  },
  btn: function (e) {
    wx.navigateTo({
      url: '../xiangqing/xiangqing?id='+e.target.id
    })
  },
  add: function (e) {
    wx.navigateTo({
      url: '../yingyuan/yingyuan?id=' + e.target.id
    })
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
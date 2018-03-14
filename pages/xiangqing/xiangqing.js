Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: ""  //这里的msg必须和HTML中的传的参数一样比如msg._id 又或者msg.Chinese(获取电影的中文名一一对应)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let nowthis = this;
    wx.request({
      url: 'http://127.0.0.1:8080/movie/find', //仅为示例，并非真实的接口地址
      data: {
        submitType: "findJoin",
         ref: ["actor", ""],
        _id: options.id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        res.data.maxImg = res.data.maxImg.replace(/\\/g, '/') 
        for (let i = 0; i < res.data.actor.length;i++){      //联合查询获取数据
          res.data.actor[i].img = res.data.actor[i].img.replace(/\\/g, '/')
        }                              //把从数据库中获取的东西渲染到页面上            
        console.log(nowthis)         //由于获取的数据不再是数组而是一个对象，所以获取的方式会比以前有些不一样
        nowthis.setData({
          msg: res.data
        })
        // console.log(res.data)
        console.log(nowthis.data.msg)






      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.msg)
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
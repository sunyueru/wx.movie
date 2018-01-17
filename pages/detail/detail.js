var API_URL = "https://api.douban.com/v2/movie/subject/";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)
    const that =this;
    wx.showToast({
      title: '加载中',
      icon:'loading',
      duration:5000,
    })
    wx.request({
      url: API_URL+ options.id,
      data: {},
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        // console.log(res.data)
        wx.hideToast();
        const data = res.data;
        that.setData({
          item: data,
        });
      }
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
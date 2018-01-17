var API_URL = 'https://api.douban.com/v2/movie/';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    movies:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 5000,
    })
    const that = this;
    wx.request({
      url: API_URL + options.type,
      data: {},
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        // console.log(res.data)
        wx.hideToast();
        const data = res.data;
        that.setData({
          title: data.title,
          movies: data.subjects,
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
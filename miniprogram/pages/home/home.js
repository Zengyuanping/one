// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleShowToast(){
    wx.showToast({
      title:'Lisa榕',
      duration:3000,
      icon:"loading",
      mask:true,
      success: function(){
        console.log('展示弹窗成功')
      },
      fail:function(){
        console.log('展示弹窗失败')
      },
      complete:function(){
        console.log("完成函数调用")
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: 'Lisa榕',
      content: '你好骚啊',
      // showCancel:false,
      // cancelText:"再见",
      cancelColor:"red",
      success:function(res){
        console.log(res)
        if(res.cancel){
          console.log('jacky平点击了取消按钮')
        }
        if(res.confirm){
          console.log('jacky平点击了确定按钮')
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: 'Aily榕',
      mask: true
    })
    setTimeout(()=>{
      //必须手动
      wx.hideLoading()
    },2000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['艾莉','品如',"高珊珊"],
      itemColor:'red',
      success:function(res){
        console.log(res)
      }
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
  onShareAppMessage: function (options) {
    return{
      title: '你好啊，Lisa榕',
      path:'/pages/about/about',
      imageUrl:''
    }

  }
})
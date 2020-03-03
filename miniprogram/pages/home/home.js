// pages/home/home.js
//getApp()获取App()产生的示例对象
// const app = getApp()
// console.log(app.globalData.name);
// console.log(app.globalData.age);
// const name = app.globalData.name;
// const age = app.globalData.age;

//注册一个页面
//页面也有自己的生命周期函数
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "Lisa 榕",
    age: 18,
    students: [{
        id: 1,
        name: "小罗",
        age: 18
      },
      {
        id: 2,
        name: "江江",
        age: 28
      },
      {
        id: 3,
        name: "榕榕",
        age: 38
      },
      {
        id: 4,
        name: "Lisa榕",
        age: 16
      },
    ],
    counter:0,
    list:[],
    message:"Lisa榕"

  },
  handleGetUserInfo(event){
    console.log(event)
  },
  handleBtnClick(){
    // 1.错误的做法：界面是不会刷新的
    // this.data.counter+=1
    // console.log(this.data.counter)
    
    // 2.this.setData()
    this.setData({
      counter:this.data.counter +1
    })
  },
  handleSubClick(){
    this.setData({
      counter:this.data.counter -1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url:'http://123.207.32.32:8000/api/wh/recommend',
      success:(res)=>{
        console.log(res)
        const data = res.data.data.list;
        this.setData({
          list:data
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
//----------监听wxml中相关的一些事件------
  handleViewClick(){
    console.log("Lisa榕被点了")
  },

  // ---------其他事件------------
  // 监听页面滚动
  onPageScroll(obj){},
  //监听页面滚动到顶部
  onReachBottom(){},
  onPullDownRefresh(){
    console.log('下拉刷新的事件');
  }
})
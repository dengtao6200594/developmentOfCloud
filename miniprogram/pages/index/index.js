const db = wx.cloud.database()
Page({
	/**
	 * 页面的初始数据
	 */
	data: {},
	getData() {
		db.collection('demoList')
			// 是不同数据下的细筛
			.where({ name: '苹果' })
			// 只能查询id
			// .doc("5b5be87f610c939300d790357f5491b6")
			.get()
			.then(res => console.log(res))
	},
	addData() {
		wx.showLoading({
			title: '数据加载中，稍等！'
		})
		db.collection('demoList')
			.add({
				data: {
					name: '桃子',
					number: 77
				}
			})
			.then(res => {
				wx.hideLoading({
					complete: res => {
						console.log('数据加载完成')
					}
				})
			})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {}
})

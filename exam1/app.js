//app.js
App({
    onLaunch: function() {
        //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        console.log('onLaunch is called' + Date.now())
    },
    onShow: function() {
        //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        console.log('onShow is called' + Date.now())
    },
    onHide: function() {
        //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now().toString())
        wx.setStorageSync('logs', logs)
        console.log('onHide is called' + Date.now())
    },
    getUserInfo: function(cb) {
        var that = this
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.getUserInfo({
                withCredentials: false,
                success: function(res) {
                    that.globalData.userInfo = res.userInfo
                    typeof cb == "function" && cb(that.globalData.userInfo)
                }
            })
        }
    },

    globalData: {
        userInfo: null
    }
})
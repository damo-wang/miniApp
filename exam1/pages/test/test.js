Page({
    data: {
        per: 10
    },
    tap: function() {
        this.data.per += 5
        if (this.data.per == 100) {
            this.data.per = 0
        }
        this.setData({
            per: this.data.per
        })
        setTimeout(this.tap(), 1000)
    }
})
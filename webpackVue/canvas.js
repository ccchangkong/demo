// 画图
  drawImg: function (e) {
    console.log('draw')
    let val = e.currentTarget.dataset.cl
    this.getClassTask(val.classId)
    this.setData({
      shareWork: val
    })
    const ctx = wx.createCanvasContext('myCanvas')
    ctx.drawImage('../../../img/teacher/share_bac.png', 0, 0, 500, 400)
    ctx.setFontSize(24)
    ctx.setFillStyle('#fff')
    ctx.fillText(val.className + '今日作业', 40, 60)
    ctx.setFontSize(34)
    if (val.stepTaskNum === 0 && val.bookTaskNum === 0) {
      ctx.fillText('今日无作业', 40, 125)
    } else {
      if (val.stepTaskNum > 0) {
        ctx.setFontSize(34)
        ctx.setFillStyle('#fff')
        ctx.fillText('篇阶梯阅读', 80, 125)
        ctx.setFillStyle('#ffff33')
        ctx.setFontSize(38)
        ctx.fillText(val.stepTaskNum, 40, 125)
      }
      if (val.bookTaskNum > 0) {
        ctx.setFontSize(34)
        ctx.setFillStyle('#fff')
        ctx.fillText('篇课外书阅读', 80, 175)
        ctx.setFillStyle('#ffff33')
        ctx.setFontSize(38)
        ctx.fillText(val.bookTaskNum, 40, 175)
      }
    }
    ctx.setFontSize(22)
    ctx.setFillStyle('#fff')
    ctx.fillText('查看详情>>', 40, 260)
    ctx.setFontSize(24)
    ctx.fillText(this.timeGet(new Date().getTime()), 360, 60)
    ctx.draw()
    var _this = this
    setTimeout(() => {
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 500,
        height: 400,
        destWidth: 500,
        destHeight: 400,
        canvasId: 'myCanvas',
        success: function (res) {
          _this.setData({
            path: res.tempFilePath,
            modalShare: true
          })
          console.log(res.tempFilePath)
        }
      })
    }, 300)
  }
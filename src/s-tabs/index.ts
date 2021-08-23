var title: string[] = [];
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    active: {
      type: Number
    }
  },
  relations: {
    '../s-tab/index': {
      type: 'child',
      linked: function (e) {
        title.push(e.data.title);
      }
    }
  },
  pageLifetimes: {
    show: function () {
      this.setData({
        title: title
      });
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: [] as string[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeHandle: function (e: any) {
      var idx = e.currentTarget.dataset.idx;
      const elements = this.getRelationNodes('../s-tab/index')
      this.changeCurrent(idx, elements)
      this.setData({
        active: idx
      })
    },
    changeCurrent(activeKey: number, elements: any) {
      if (elements.length > 0) {
        elements.forEach((element: any) => {
          element.changeCurrent({
            activeKey
          })
        })
      }
    },
  }
})

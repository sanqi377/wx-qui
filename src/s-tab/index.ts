var title: string[] = [];
let active = 0
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    }
  },
  relations: {
    '../s-tabs/index': {
      type: 'parent',
      linked: function (e) {
        title.push(this.data.title);
        active = e.data.active
      }
    }
  },
  pageLifetimes: {
    show: function () {
      this.setData({
        titles: title,
        active
      });
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    titles: [] as string[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCurrent({ activeKey }) {
      this.setData({
        active: activeKey,
      })
    },
  }
})

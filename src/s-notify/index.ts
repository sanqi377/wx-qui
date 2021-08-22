
const default_data = {
  visible: false,
  content: '',
  duration: 2,
  type: 'default', // default || success || warning || error
};

let timmer: any = 0;

Component({
  data: {
    ...default_data
  },

  methods: {
    handleShow(options: any) {
      const { type = 'default', duration = 2 } = options;

      this.setData({
        ...options,
        type,
        duration,
        visible: true
      });

      const d = this.data.duration * 1000;

      if (timmer) clearTimeout(timmer);
      if (d !== 0) {
        timmer = setTimeout(() => {
          this.handleHide();
          timmer = 0;
        }, d);
      }
    },

    handleHide() {
      this.setData({
        ...default_data
      });
    }
  },
})

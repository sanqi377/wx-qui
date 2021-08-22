export { }

const default_data = {
  visible: false,
  message: '',
  title: '内容',
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonText: '确认',
  cancelButtonText: '取消',
}

Component({
  data: {
    ...default_data,
    callback: (action?: any, instance?: any) => {
      console.log(action, instance)
    }
  },
  methods: {
    onConfirm() {
      this.handleAction('confirm');
    },
    onCancel() {
      this.handleAction('cancel');
    },
    handleAction(action: any) {
      this.setData({ visible: false });
      const { callback } = this.data;
      if (callback) {
        callback(action, this);
      }
    }
  }
})

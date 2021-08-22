export { }
interface options {
  visible: boolean
  title: string
  message: string
  selector: string
  showConfirmButton?: boolean
  showCancelButton?: boolean
  confirmButtonText?: string
  cancelButtonText?: string
}

const currentOptions: options = {
  visible: false,
  title: '',
  message: '内容',
  selector: '#dialog',
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonText: '确认',
  cancelButtonText: '取消',
}

const Dialog = (options: options) => {
  options = Object.assign(Object.assign({}, currentOptions), options)
  return new Promise((resolve, reject) => {
    const context = getCurrentPages()[getCurrentPages().length - 1];
    const dialog = context.selectComponent(options.selector)
    if (dialog) {
      dialog.setData(
        Object.assign(
          {
            callback: (action: any, instance: any) => {
              action === 'confirm' ? resolve(instance) : reject(instance)
            },
          },
          options
        )
      )
      wx.nextTick(() => {
        dialog.setData({ visible: true });
      })
    } else {
      console.warn(
        '未找到 dialog 节点，请确认 selector 是否正确'
      )
    }
  })
}

module.exports = {
  $Dialog: Dialog
}
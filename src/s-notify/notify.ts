const getCtx = (selector: string) => {
  const pages = getCurrentPages();
  const ctx = pages[pages.length - 1];

  const componentCtx = ctx.selectComponent(selector);

  if (!componentCtx) {
    console.error('无法找到对应的组件，请按文档说明使用组件');
    return null;
  }
  return componentCtx;
}

const Notify = (options: any) => {
  const { selector = '#notify' } = options;
  const ctx: any = getCtx(selector);

  ctx.handleShow(options);
}

module.exports = {
  $Notify: Notify
};
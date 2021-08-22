---
title: "弹出框"
---

# Dialog 弹出框

### 介绍

> 弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

### 引入

> 在 `app.json` 或 `index.json` 中引入组件

```json
"usingComponents": {
  "s-dialog": "@sanqi377/qui/s-dialog/"
}
```

<a-alert
      message="Dialog 组件主要依靠 JavaScript 主动调用，所以只需在 wxml 中添加一个组件，并设置 id，其余配置在 .js 里完成。"
      description="如果只有一个 Dialog 组件，建议将 id 设置为 #dialog selector 属性来指定。"
      type="info"
      show-icon
    />

### 代码演示

```xml
<view bindtap="handle">弹出框</view>

<s-dialog id="dialog" />
```

```js
const { $Dialog } = require('@sanqi377/qui/s-dialog/dialog')

Page({
    handleDefault () {
        $Dialog({
            title: '标题',
            message: '内容',
            showCancelButton: true
        }).then(() => {
          console.log("点击确认按钮回调")
        }).catch(() => {
          console.log("点击取消按钮回调")
        })
    }
})
```

### Options

| 属性              | 说明             | 类型    | 默认值  |
| ----------------- | ---------------- | ------- | ------- |
| title             | 标题             | String  | -       |
| message           | 模态框内容       | String  | default |
| showConfirmButton | 是否展示确认按钮 | Boolean | true    |
| showCancelButton  | 是否展示取消按钮 | Boolean | false   |
| confirmButtonText | 确认按钮的文案   | String  | 确认    |
| cancelButtonText  | 取消按钮的文案   | String  | 取消    |
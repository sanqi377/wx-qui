---
title: "消息提示"
---

# Notify 消息提示

### 介绍

> 在页面顶部展示消息提示，支持函数调用和组件调用两种方式。

### 引入

> 在 `app.json` 或 `index.json `中引入组件

```json
"usingComponents": {
  "s-notify": "@sanqi377/qui/s-notify/"
}
```

<a-alert
      message="Notify 组件主要依靠 JavaScript 主动调用，所以只需在 wxml 中添加一个组件，并设置 id，其余配置在 .js 里完成。"
      description="如果只有一个 Notify 组件，建议将 id 设置为 #notify selector 属性来指定。"
      type="info"
      show-icon
    />

### 代码演示

```html
<view bindtap="handleDefault">默认提醒</view>

<s-notify id="notify" />
```

```js
const { $Notify } = require('@sanqi377/qui/s-notify/notify')

Page({
    handleDefault () {
        $Notify({
            type: 'success',
            content: '这是一条普通提醒'
        })
    }
})
```

### Options

| 属性     | 说明                                                                    | 类型   | 默认值  |
| -------- | ----------------------------------------------------------------------- | ------ | ------- |
| content  | 内容                                                                    | String | -       |
| type     | 指定警告提示的样式，有四种选择 `default`、`success`、`warning`、`error` | String | default |
| duration | 持续时间，单位秒                                                        | Number | 2       |
| selector | 组件标识                                                                | String | #notify |
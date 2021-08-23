---
title: 标签页
---

# 标签页

### 介绍

> 选项卡组件，用于在不同的内容区域之间进行切换。

### 引入

> 在 `app.json` 或 `index.json `中引入组件

```json
"usingComponents": {
  "s-tabs": "@sanqi377/qui/s-tabs/",
  "s-tab": "@sanqi377/qui/s-tab/"
}
```

### 代码演示

> 通过 `active` 设定当前激活标签对应的索引值，默认情况下启用第一个标签。

```html
<s-tabs active="{{active}}">
  <s-tab title="标签 1">内容 1</s-tab>
  <s-tab title="标签 2">内容 2</s-tab>
  <s-tab title="标签 3">内容 3</s-tab>
</s-tabs>
```
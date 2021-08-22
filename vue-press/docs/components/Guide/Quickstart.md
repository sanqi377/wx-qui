---
title: 快速上手
---


## 安装

<a-alert
      message="开发者工具创建的项目，miniprogramRoot 默认为 miniprogram，package.json 在其外部，npm 构建无法正常工作。"
      description="需要手动在 project.config.json 内添加如下配置，使开发者工具可以正确索引到 npm 依赖的位置。"
      type="info"
      show-icon
    />

```json
{
  ...
  "setting": {
    ...
    "packNpmManually": true,
    "packNpmRelationList": [
      {
        "packageJsonPath": "./package.json",
        "miniprogramNpmDistDir": "./miniprogram/"
      }
    ]
  }
}
```

通过 `npm` 安装

```
npm i @sanqi377/qui -S
```

构建 `npm` 包

> 打开微信开发者工具，点击 工具 -> 构建 npm，并勾选 使用 npm 模块 选项，构建完成后，即可引入组件。

![构建npm包](../../.vuepress/public/img/fa0549210055976cb63798503611ce3d.png)

## 使用

> 以 `Button` 组件为例，只需要在 `app.json` 或 `index.json `中配置 `Button` 对应的路径即可。所有组件文档中的引入路径均以 `npm` 安装为例，如果你是通过下载源代码的方式使用 `@sanqi377/qui`，请将路径修改为项目中 `@sanqi377/qui` 所在的目录。

```json
// index.json
"usingComponents": {
  "s-button": "@sanqi377/qui/s-button"
}
```

```xml
<!-- index.wxml -->
<s-button type="primary">按钮</s-button>
```
# [vuepress-plugin-element-tabs](https://superbiger.github.io/vuepress-plugin-tabs/)

<a href="https://www.npmjs.com/package/vuepress-plugin-element-tabs"><img src="https://img.shields.io/npm/v/vuepress-plugin-element-tabs.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vuepress-plugin-element-tabs"><img src="https://img.shields.io/npm/l/vuepress-plugin-element-tabs.svg" alt="License"></a>
<img src="https://img.shields.io/badge/thanks-element-brightgreen.svg"/>

Vuepress plugin - markdown custom container to display content in tabs from [Element UI](https://github.com/ElemeFE/element)

## Docs
> https://superbiger.github.io/vuepress-plugin-tabs

## Install
> This plugin requires VuePress >= 1.0.0, for now you can try it via yarn add vuepress@next -D 

```shell
yarn add vuepress-plugin-element-tabs -D
```

```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    'vuepress-plugin-element-tabs'
  ]
}
```

## Usage

~~~ md
:::: tabs

::: tab title
__markdown content__
:::


::: tab javascript
``` javascript
() => {
  console.log('Javascript code example')
}
```
:::

::::

~~~

## Docs
> https://superbiger.github.io/vuepress-plugin-tabs

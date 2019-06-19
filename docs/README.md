---
sidebar: auto
---
# element-tabs

<a href="https://www.npmjs.com/package/vuepress-plugin-element-tabs"><img src="https://img.shields.io/npm/v/vuepress-plugin-element-tabs.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vuepress-plugin-element-tabs"><img src="https://img.shields.io/npm/l/vuepress-plugin-element-tabs.svg" alt="License"></a>
<img src="https://img.shields.io/badge/thanks-element-brightgreen.svg"/>

Vuepress plugin - markdown custom container to display content in tabs from [Element UI](https://github.com/ElemeFE/element)

## Preview

### Demo 1
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

### Demo 2
:::: tabs type:card
::: tab demo1
__markdown content__
:::
::: tab demo2
```javascript
function func() {
  // TODO Demo 2
}
```
:::
::::

## Install
::: warning Note
This plugin requires VuePress >= 1.0.0
:::

```
yarn add vuepress-plugin-element-tabs -D
```

## Usage
```
// .vuepress/config.js
module.exports = {
  plugins: [
    'vuepress-plugin-element-tabs'
  ]
}
```

## Documents
> Accepted Value Like That
~~~md
:::: tabs type:board-card
::: tab title lazy
__markdown content__
:::
::::
~~~

### Tabs Attributes
|Attribute|Description|Type|Accepted Values|Default|
|:--|:--|:--|:--|:--|
|type|type of Tab|String|card/border-card|border-card|
|tab-position|position of tabs|String|top/right/bottom/left|top|
|stretch|whether width of tab automatically fits its container|Boolean|-|false|


### Tab Attributes
|Attribute|Description|Type|Accepted Values|Default|
|:--|:--|:--|:--|:--|
|label|title of the tab|String|-|-|
|lazy|whether Tab is lazily rendered|Boolean|-|false|

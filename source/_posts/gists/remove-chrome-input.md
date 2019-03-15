
---
title: 移除chrome自动填写时的背景色
date: 2019-03-11 15:05:27 +0800
tags: []
categories: 
---
chrome 的自动填写会导致输入框的背景颜色变化，不符合设计稿，可修复如下：

```css
/* 移除浏览器自动填写导致的输入框背景色 */
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill,
input:-webkit-autofill:focus,
textarea:-webkit-autofill:focus,
select:-webkit-autofill:focus {
  box-shadow: 0 0 0 1000px white inset;
  -webkit-box-shadow: 0 0 0 1000px white inset;
}
```




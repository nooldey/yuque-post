
---
title: 数字格式化
date: 2019-03-09 13:16:41 +0800
tags: []
categories: 
---
<a name="dc6609d8"></a>
## **将输入格式化为带2位小数**
```javascript
/*
    期望输入： 123.321等任意数字串
    期望输出：123.45带两位小数的浮点数或整数
*/

fixVal(e) {
    let v = e.trim();
    v = v && v.match(/\d+(\.\d+)?/)[0]
    const n = (!v || isNaN(v) || v==0) ? 0 : Math.abs(parseFloat(v).toFixed(2));
    return n
}
```



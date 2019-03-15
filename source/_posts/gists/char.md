
---
title: 英文格式化
date: 2019-03-09 13:10:14 +0800
tags: []
categories: 
---
<a name="24ef528e"></a>
## 首字母大写

```javascript
const hump = char => {
    /* 首字母大写 */
    if (!char) return;
    if (!(/^\w+$/).test(char)) return char;
    char = char.toLowerCase();
    let cs = char.split('');
    cs[0] = cs[0].toString().toUpperCase();
    return cs.join('');
}
```

<a name="e0e1b542"></a>
## 将下划线格式改为驼峰格式
```javascript
const toHump = char => {
    /* 将下划线格式改为驼峰格式 */
    /* eg: Demang_ddd => Demang Ddd */
    if (!char) return;
    if (!(/^\w+_\w+$/).test(char)) return char;
    let cs = [];
    const chars = char.split('_');
    chars.forEach(item => {
        cs.push(hump(item))
    })
    return cs.join(' ');
}
```



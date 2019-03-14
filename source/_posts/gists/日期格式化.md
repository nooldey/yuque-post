
---
title: 日期格式化
date: 2019-03-09 13:13:33 +0800
tags: []
categories: 
---
<a name="606aca26"></a>
## 时间格式化
```javascript
const timeFormat = (stamp, format='yyyy-MM-dd') => {
    /* 时间格式化 */
    let d = new Date(stamp);
    let year = d.getFullYear(),
        month = d.getMonth()+1,
        date = d.getDate(),
        hour = d.getHours(),
        min = d.getMinutes(),
        sec = d.getSeconds();
    let output = '';
    switch (format) {
        case 'yyyy-MM-dd':
            output = [year,month,date].join('-');
            break;
        default:
            output = [year,month,date].join('-')+' '+[hour,min].join(':');
            break;
    }
    return output;
}
```

<a name="a7bfb8a8"></a>
## **将零时区转化为当地时间**
```javascript
/* 依赖时间格式化函数 */

const zeroToLocal = (stamp, format='yyyy-MM-dd') => {
    /* 将传入的零时区的时间转化为当地时间显示 */
    /*
     * 参数：
     * offset: 当前时区时间差 = 零时区时间-当地时间 单位：min
     *       eg: 中国时区+0800 时间差为-480(min),-480/60 = -8小时
     * localtime: 转换后输出的当地时间
    */
    if (!stamp) return;
    let d = new Date(stamp);
    if (!d) return stamp;
    let offset = new Date().getTimezoneOffset();
    let localtime = d.getTime() - offset*60*1000;
    let output = timeFormat(localtime,format);
    return output;
}
```

<a name="38c57d19"></a>
## **将当地时间转化为零时区时间**
```javascript
const localToZero = (stamp, format='yyyy-MM-dd') => {
    /* 将当地时间转化为零时区时间 */
    /*
     * 参数：
     * offset: 当前时区时间差 = 零时区时间-当地时间 单位：min
     *       eg: 中国时区+0800 时间差为-480(min),-480/60 = -8小时
     * zeroTime: 转换后输出的当地时间
    */
    if (!stamp) return;
    let d = new Date(stamp).toJSON().substr(0, 19);
    let [date,time] = d.split('T');
    let [year,month,day] = date.split('-');
    let [hour,min,sec] = time.split(':');
    let output = '';
    switch (format) {
        case 'yyyy-MM-dd':
            output = [year,month,date].join('-');
            break;
        default:
            output = [year,month,date].join('-')+' '+[hour,min].join(':');
            break;
    }
    return output;
}
```




---
title: 实现对象属性值监听
date: 2019-03-20 10:46:18 +0800
tags: []
categories: 
---

```javascript
function watch(obj, key, onchange){
  Object.defineProperty(obj, key, {
    get: function(){
      return data;
    },
    set: function(newValue){
      data = newValue;
      if (typeof onchange === 'function') {
        onchange(newValue);
      }
    }
  })
}

var obj = {};
watch(obj,'sheet',function(val){
  console.log(val);
});

obj.sheet = {a:'b'};

setTimeout(() => {
  obj.sheet = {a:'c'};
}, 1000);
```




// 防抖
// 在一段时间内只执行最后一次(触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间)
// 场景：在输入框搜索调取 api 时可以使用防抖方式
// 思路：每次触发事件时都取消之前的延时调用方法

function debounce(fn, delay) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

// 节流
// 在一段时间内执行第一次，当这段时间结束后再执行下个第一次
// 场景：在滚动条滚动加载时可以使用节流的方式
// 思路：每次触发事件时都判断当前是否有等待执行的延时函数

function throttle(fn, delay) {
  let flag = true;
  return function () {
    if (flag) {
      setTimeout(() => {
        fn.apply(this, arguments);
        flag = true;
      }, delay);
    }
    flag = false;
  };
}

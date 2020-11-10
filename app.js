var a = [0, 1, 2, 3, 4, 5, 5, 4, 3];
var b = ['a', 'b', 'c', 'd', 'e', 'b', 'c'];
console.log(a.join(''));

console.log(Array.isArray(a));
console.log(typeof a);
console.log(a instanceof Array);
console.log(a.every(function (x) { return x > 2; })); // 返回的是bool值 满足所有条件
console.log(a.some(item => item > 2)); // 返回的是bool值 只要有一个满足条件
console.log("数组过滤:");
console.log(a.filter(item => item > 2));// 得到的是新数组
console.log("find:");
console.log(a.find(item => item > 2)); // 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

var initValue = 1; // 初始值:initValue  累加值:allValue
var allNumbers = a.reduce((allValue, value) => allValue + value, initValue); // 数组内部可以是 数字，字符，对象，
console.log("数组累加:");
console.log(allNumbers);

// 数组去重
// 如果你正在使用一个可以兼容Set 和 Array.from() 的环境， 你可以使用let orderedArray = Array.from(new Set(myArray)); 来获得一个相同元素被移除的数组。

var allValues = a.sort().reduce((acc, currentValue) => {
  if (acc.length === 0 || acc[acc.length - 1] !== currentValue) {
    acc.push(currentValue);
  }
  return acc;
}, []);
console.log("数组去重:");
console.log(allValues);
console.log("反转函数：");
a.reverse();
console.log(a);
console.log("取出第一个数值"); // 改变数组长度
console.log(a);
console.log(a.shift()); // 移除数组下标为0的值 ，返回原数组
console.log(a);

console.log('切割数组：');
console.log(a.slice(3)); // 返回新的数组

console.log("数组splice：");

// console.log(a.splice(5)); // 仅仅是删除，则改变原有数组的值
b.splice(4, 0, 'acb'); // 由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。
console.log(b);
console.log("unshift:");
console.log(b.unshift(1, 3));
console.log(b); // 返回一个新数组

console.log("values:");
let iterators = b.values();
for (const iterator of iterators) {
  console.log(iterator);
}

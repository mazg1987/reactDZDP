//CommonJS模块化规范
console.log("testtesttesttest")

var counter = 3;
var obj = {
    name:"zhangsan"
}
function incCounter() {
  counter++; 
  obj.name = "lisi"
}

//导出模块 
//模块输出的是值的拷贝，一旦输出一个值，模块内部的变化就影响不到这个值。
module.exports = {
  counter: counter,  //拷贝
  obj:obj,  //引用
  incCounter: incCounter,
};


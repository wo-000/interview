// call
/////第一个参数是this的指向
/////第二个参数是函数接受的参数，以参数列表的形式传入，且当第一个参数为null、undefined的时候，默认指向window
let arr=[1,10,5];
console.log(Math.max.call(null, arr[0], arr[1], arr[2])); //10


// apply
/////第一个参数是this的指向
/////第二个参数是函数接受的参数，以数组的形式传入，且当第一个参数为null、undefined的时候，默认指向window
let arr2=[1,10,5,8,3];
console.log(Math.max.apply(null, arr2)); //10


//// call，apply自动调用，bind需要手动调用

// bind
// 参数和call方法一样，区别是需要手动调用才会执行，参数列表可以分多次传入（在手动调用时可传入参数）
var arr3=[1,10,5,12,8];
var max=Math.max.bind(null,arr3[0],arr3[1],arr3[2],arr3[3])
console.log(max(arr3[4]),888); 



/// 手动实现call
function callTest(x,y){
    console.log(x,y,this.arr)
}
let callObj2={
    arr:[1,2,4,52,90,8,9]
}

Function.prototype.myCall = function (ctx){
    const obj = ctx||window
    obj.fn=this
    const [,...args]=arguments
    // console.log(...args,'--',args)
    const result = obj.fn(...args)
    delete obj.fn
    return result
}

callTest.myCall(callObj2,'asa','das')
callTest.call(callObj2,'asa','das')


// 手动实现apply
function applyTest(x,y){
    console.log(x,y,this.arr)
}
let applyObj2={
    arr:[1,2,4,52,90]
}
Function.prototype.myApply = function(ctx,arr){
    const obj = ctx||window
    obj.fn=this
    const result = arr?obj.fn(...arr):obj.fn()
    delete obj.fn
    return result
}
applyTest.myApply(applyObj2,['asa','das'])
applyTest.apply(applyObj2,['asa','das'])

// 手动实现bind
function bindTest(x,y){
    console.log(x,y,this.arr,this.s)
}
let bindObj2={
    s:111,
    arr:[4,52,90]
}
Function.prototype.myBind = function (ctx){
    let fn = this
    const [,...args] = arguments
    return function(){
        const params = Array.prototype.slice.call(arguments)
        return fn.apply(ctx,args.concat(params))
    }
}

const bindFn = bindTest.bind(bindObj2,'zas777aa','dsa')
bindFn()

const myBindFn = bindTest.myBind(bindObj2,'zasaa888sa','dsa')
myBindFn()

const max2=Math.max.myBind(null,arr3[0],arr3[1],arr3[2],arr3[3])
console.log(max2(arr3[4]),999);

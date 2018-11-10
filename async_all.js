// let obj={
//     strArr:[],
//     index:0
// }
// function result(){
//     ++obj.index;
//     if(obj.index==2){
//         return obj.strArr.join()
//     }
// }
// setTimeout(() => {
//     obj.strArr[0]='11'
//     result()
// }, 1000);
// setTimeout(() => {
//     obj.strArr[1]='22'
//     result()
// }, 500);
let obj={
    strArr:[]
}
let result=(function (){
    var $i=0
    return function (){
        if(++$i==obj.strArr.length){
            console.log(obj.strArr.join())
        }
    }
})()
setTimeout(() => {
    obj.strArr[0]='11'
    result()
}, 1000);
setTimeout(() => {
    obj.strArr[1]='22'
    result()
}, 500);
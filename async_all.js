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
let obj = {
	strArr: []
}
let result = (function() {
	var $i = 0
	return function() {
		if (++$i == obj.strArr.length) {
			console.log(obj.strArr.join())
		}
	}
})()
setTimeout(() => {
	obj.strArr[0] = '11'
	result()
}, 1000);
setTimeout(() => {
	obj.strArr[1] = '22'
	result()
}, 500);


//jquery
var d1 = function() {

	var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象

	var tasks = function() {
		console.log("执行完毕！")
		dtd.resolve("执行完毕！"); // 改变Deferred对象的执行状态

	};

	setTimeout(tasks, 2000);

	return dtd.promise(); // 返回promise对象

};
var d2 = $.Deferred();
setTimeout(function() {
	d2.resolve("Pizza");
}, 2000)

$.when(d1, d2).done(function(v1, v2) {
	console.log(v1); // "Fish"
	console.log(v2); // "Pizza"
});

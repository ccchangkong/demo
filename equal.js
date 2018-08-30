if (!Number.EPSILON) {
	Number.EPSILON = Math.pow(2, -52);
}

function equal(n1, n2) {
	return Math.abs(n1 - n2) < Number.EPSILON;
}


~42;//-(42+1)=>-43
var a='hello world';
~a.indexOf('lo');//-1 =>true
~a.indexOf('ol');//0 =>false

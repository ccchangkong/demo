Function.prototype.before = function(beforefn) {
	var _self = this;
	return function () {
		beforefn.apply(this, arguments);
		return _self.apply(this, arguments);
	}
};

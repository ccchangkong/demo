// 	var Widget = {
// 		init: function (width, height) {
// 			this.width = width || 50;
// 			this.height = height || 50;
// 			this.$el = null;
// 		},
// 		insert: function ($where) {
// 			if (this.$el) {
// 				this.$el.css({
// 					width: this.width + 'px',
// 					height: this.height + 'px'
// 				}).appendTo($where)
// 			}
// 		}
// 	};
// 
// 	var Button = Object.create(Widget);
// 
// 	Button.setup = function (w, h, label) {
// 		this.init(w, h);
// 		this.label = label || 'Default';
// 		this.$el = $('<button>').text(this.label);
// 	};
// 
// 	Button.build = function ($where) {
// 		this.insert($where);
// 		this.$el.click(this.onClick.bind(this));
// 	};
// 	Button.onClick = function (e) {
// 		console.log(this.label);
// 	};
// 
// 
// 	function test1() {
// 		console.log(2222222)
// 	}
// 
// 	function test2() {
// 		console.log(3333333)
// 	}
// 
// 
// 	$(function () {
// 		var $body = $('body');
// 		var btn1 = Object.create(Button);
// 		btn1.setup(125, 30, '111');
// 		btn1.onClick = test1
// 		btn1.build($body);
// 		var btn2 = Object.create(Button);
// 		btn2.setup(125, 30, '222');
// 		btn2.onClick = test2
// 		btn2.build($body);
// 	})


	var Widget = {
		init: function (width, height) {
			this.width = width || 50;
			this.height = height || 50;
			this.$el = null;
		},
		insert: function ($where) {
			if (this.$el) {
				this.$el.css({
					width: this.width + 'px',
					height: this.height + 'px'
				}).appendTo($where)
			}
		}
	};

	var Button = Object.create(Widget);

	Button.setup = function (obj) {
		this.init(obj.width, obj.height);
		this.label = obj.label || 'Default';
		this.$el = $('<button>').text(this.label);
		this.onClick=obj.click
		this.build(obj.where)
		
	};

	Button.build = function ($where) {
		this.insert($where);
		this.$el.click(this.onClick.bind(this));
	};
	Button.onClick = function (e) {
		console.log(this.label);
	};


	function test1() {
		console.log(2222222)
	}

	function test2() {
		console.log(3333333)
	}


	$(function () {
		var $body = $('body');
		var btn1 = Object.create(Button);
		var btnModel={
			width:125,
			height:30,
			label:'111',
			where:$body,
			click:test1
		}
		btn1.setup(btnModel);


	})
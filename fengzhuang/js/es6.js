// class Widget {
// 	constructor(w, h) {
// 		this.w = w || 50;
// 		this.h = h || 50;
// 		this.$el = null;
// 	}
// 	render($where) {
// 		if (this.$el) {
// 			this.$el.css({
// 				width: this.w + 'px',
// 				height: this.h + 'px'
// 			}).appendTo($where)
// 		}
// 	}
// }
// class Button extends Widget {
// 	constructor(w, h, label) {
// 		super(w, h)
// 		this.label = label || 'Default';
// 		this.$el = $('<button>').text(this.label);
// 	}
// 	render($where) {
// 		super.render($where)
// 		this.$el.click(this.onClick.bind(this));
// 	}
// 	onClick(e) {
// 		console.log(this.label);
// 	}
// }
// 
// function test2() {
// 	console.log(23333)
// }
// $(function () {
// 	var $body = $('body');
// 	var btn1 = new Button(125, 30, '111');
// 	btn1.onClick = test2
// 	btn1.render($body)
// 
// })

class Widget {
	constructor(w, h) {
		this.w = w || 50;
		this.h = h || 50;
		this.$el = null;
	}
	render($where) {
		if (this.$el) {
			this.$el.css({
				width: this.w + 'px',
				height: this.h + 'px'
			}).appendTo($where)
		}
	}
}
class Button extends Widget {
	constructor(obj) {
		super(obj.width, obj.height)
		this.label = obj.label || 'Default';
		this.$el = $('<button>').text(this.label);
		this.onClick=obj.click||this.onClick
		this.render(obj.where)
	}
	
	render($where) {
		super.render($where)
		this.$el.click(this.onClick.bind(this));
	}
	onClick(e) {
		console.log(this.label);
	}
}

function test2() {
	console.log(23333)
}
$(function () {
	var $body = $('body');
	var btnModel={
		width:125,
		height:30,
		label:'111',
		where:$body,
		// click:test2
	}
	var btn1 = new Button(btnModel);

})


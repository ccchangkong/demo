(function () {
	function Window() {
		this.config = {
			color: '#333',
			content: '',
			handler: null
		}
	}
	Window.prototype = {
		alert: function (config) {
			var CONFIG = $.extend(this.config, config);
			var box = $('<div class="aa"></div>')
			box.appendTo('body');
			box.html(CONFIG.content)

			var btn = $('<div>111</div>')
			btn.appendTo(box)
			btn.click(function () {
				CONFIG.handler && CONFIG.handler()
				box.remove()
			})


			box.css({
				color: CONFIG.color
			})
			return this;
		},
		confirm: function () {},
		prompt: function () {}
	}
	window.w = Window;
})()

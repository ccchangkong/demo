function preload(b, e) {
	if (!b) return !1;
	for (var c = [], d = 0, a = 0; a < b.length; a++) c[a] = new Image, c[a].src = b[a], c[a].onload = function() {
		d += 1;
		d == b.length && e()
	}
};
//获取url中的参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象

	var r = window.location.search.substr(1).match(reg); //匹配目标参数

	if (r != null) return decodeURIComponent(r[2]);
	return null; //返回参数值
}

function getTime(d) {
	var now = new Date(d);
	return {
		'Y': now.getFullYear(),
		'M': now.getMonth() + 1,
		'W': now.getDay(),
		'D': now.getDate(),
		'h': now.getHours(),
		'm': now.getMinutes(),
		's': now.getSeconds()
	};
}

function getRemainderTime(startTime, endTime) {
	var runTime = parseInt((endTime - startTime) / 1000);
	var year = Math.floor(runTime / 86400 / 365);
	runTime = runTime % (86400 * 365);
	var month = Math.floor(runTime / 86400 / 30);
	runTime = runTime % (86400 * 30);
	var day = Math.floor(runTime / 86400);
	runTime = runTime % 86400;
	var hour = Math.floor(runTime / 3600);
	runTime = runTime % 3600;
	var minute = Math.floor(runTime / 60);
	runTime = runTime % 60;
	var second = runTime;
	return {
		'Y': year,
		'M': month,
		'D': day,
		'h': hour,
		'm': minute,
		's': second
	};

}
window.onpageshow = function(event) {
	if (event.persisted) {
		window.location.reload()
	}
};
window.onbeforeunload = function() {
		window.scrollTo(0, 0);
	}
	(function rotate() {
		var orientation = window.orientation;
		var pd = null;

		function createPd() {
			if (document.getElementById('preventTran') === null) {
				var imgData =
					'data:image/png;base64,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';
				pd = document.createElement('div');
				pd.setAttribute('id', 'preventTran');
				pd.style.position = 'fixed';
				pd.style.left = '0';
				pd.style.top = '0';
				pd.style.width = '100%';
				pd.style.height = '100%';
				pd.style.overflow = 'hidden';
				pd.style.backgroundColor = '#2e2e2e';
				pd.style.textAlign = 'center';
				pd.style.zIndex = '99999';
				document.getElementsByTagName('body')[0].appendChild(pd);
				var img = document.createElement('img');
				img.src = imgData;
				pd.appendChild(img);
				img.style.margin = '60px auto 30px'
				var br = document.createElement('br');
				var p = document.createElement('p');
				p.style.width = '100%';
				p.style.height = 'auto';
				p.style.fontSize = '22px';
				p.style.color = '#626262';
				p.style.lineHeight = '34px';
				p.style.textAlign = 'center';
				p.innerHTML = '为了您的良好体验';
				p.appendChild(br);
				p.innerHTML += '请将手机/平板竖屏操作';
				pd.appendChild(p);
			}
		}
		if (orientation == 90 || orientation == -90) {
			if (pd == null && document.getElementById('preventTran') === null) createPd();
			document.getElementById('preventTran').style.display = 'block';
		}
		window.onorientationchange = function() {
			if (pd == null && document.getElementById('preventTran') == null) createPd();
			document.getElementById('preventTran').style.display = 'none';
			rotate();
		};
	})();


$(function() {
	(function() {
		function Popup() {}
		Popup.prototype = {
			render: function(config, type) {
				document.documentElement.style.overflow = 'hidden';
				var CONFIG = $.extend({
					title: '提示',
					className: '',
					content: '',
					btn: '确认',
					handler: null,
					btnAutoClose: true,
					cancelBtn: '取消',
					cancelhandler: null,
					cancelAutoClose: true,
					startHandler: null,

				}, config);
				var btnStr = [
					'<div class="c_btn active_btn"></div>',
					'<div class="c_btn cancel_btn"></div><div class="c_btn active_btn"></div>',
				];

				var box_str =
					'<div class="confirm_box ' + CONFIG.className + '">'
				box_str +=
					'<div class="confirm">\
						<img src="images/c_close.png" class="c_close">\
							<div class="c_title">\
							</div>\
							<div class="c_content">\
							</div>\
							<div class="c_action">';
				box_str += btnStr[type];
				box_str += '</div>\
						</div>\
					</div>'
				var box = $(box_str)
				box.appendTo('body');

				this.bind(box, CONFIG)
			},
			bind: function($el, config) {
				var CONFIG = config
				var _this = this
				$el.find('.c_title').html(CONFIG.title)
					.end()
					.find('.c_content').html(CONFIG.content)
					.end()
					.find('.c_close').click(function() {
						_this.remove($el)
					})
					.end()
					.find('.active_btn').html(CONFIG.btn).click(function() {
						CONFIG.handler && CONFIG.handler($el)
						if (CONFIG.btnAutoClose) {
							_this.remove($el)
						}
					})
					.end()
					.find('.cancel_btn').html(CONFIG.cancelBtn).click(function() {
						CONFIG.cancelhandler && CONFIG.cancelhandler($el)
						if (CONFIG.cancelAutoClose) {
							_this.remove($el)
						}
					})
					.find('.c_close').click(function() {
						CONFIG.cancelhandler && CONFIG.cancelhandler($el)
						if (CONFIG.cancelAutoClose) {
							_this.remove($el)
						}
					})
				CONFIG.startHandler && CONFIG.startHandler($el)
			},
			alert: function(config) {
				this.render(config, 0)
			},
			confirm: function(config) {
				this.render(config, 1)

			},
			remove: function($el) {
				$('body,html').off('touchmove', function(e) {
					e.preventDefault();
				});
				document.documentElement.style.overflow = '';
				$el.remove()
			}
		}
		window.c_popup = Popup;
	})()
	// FastClick.attach(document.body);
	$('.wrapper').show();
	var ua = window.navigator.userAgent;
	if (ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1) {} else if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
		$('textarea,input').on('blur', function() {
			setTimeout(function() {
				window.scrollTo(0, 0)
			}, 100)
		})
	}
})

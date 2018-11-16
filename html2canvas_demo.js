$(function() {
				// <script src="https://lib.baomitu.com/html2canvas/0.5.0-beta4/html2canvas.min.js"></script>

				//获取像素密度
				function getPixelRatio(context) {
					var backingStore = context.backingStorePixelRatio ||
						context.webkitBackingStorePixelRatio ||
						context.mozBackingStorePixelRatio ||
						context.msBackingStorePixelRatio ||
						context.oBackingStorePixelRatio ||
						context.backingStorePixelRatio || 1;
					return (window.devicePixelRatio || 1) / backingStore;
				}

				// 或者
				function backingScale() {
					if (window.devicePixelRatio && window.devicePixelRatio > 1) {
						return window.devicePixelRatio;
					}
					return 1;
				};





				function html_Canvas() {
					var shareContent = $('body')[0]; // 需要绘制的部分的 (原生）dom 对象 ，注意容器的宽度不要使用百分比，使用固定宽度，避免缩放问题
					var width = shareContent.offsetWidth; // 获取(原生）dom 宽度
					var height = shareContent.offsetHeight; // 获取(原生）dom 高
					var offsetTop = shareContent.offsetTop; //元素距离顶部的偏移量
					var canvas = document.createElement('canvas'); //创建canvas 对象
					var context = canvas.getContext('2d');
					var scaleBy = getPixelRatio(context); //获取像素密度的方法 (也可以采用自定义缩放比例)
					canvas.width = width * scaleBy; //这里 由于绘制的dom 为固定宽度，居中，所以没有偏移
					canvas.height = (height + offsetTop) * scaleBy; // 注意高度问题，由于顶部有个距离所以要加上顶部的距离，解决图像高度偏移问题
					context.scale(scaleBy, scaleBy);

					var opts = {
						useCORS: true,
						allowTaint: true, //允许加载跨域的图片
						tainttest: true, //检测每张图片都已经加载完成
						scale: scaleBy, // 添加的scale 参数
						canvas: canvas, //自定义 canvas
						logging: false, //日志开关，发布的时候记得改成false
						width: width, //dom 原始宽度
						height: height //dom 原始高度
					};
					html2canvas(shareContent, opts).then(function(canvas) {
						// var img = Canvas2Image.convertToImage(canvas, canvas.width, canvas.height);
						var imgurl = canvas.toDataURL();
						var $html = '<img src="' + imgurl + '" alt="" style="width:100%">'
						$('body').html($html)
					});
				}
				//解决跨域，将跨域图片路径转为base64格式
				function printScreen() {
					var img = new Image();
					var canvas2 = document.createElement('canvas');
					var ctx = canvas2.getContext('2d');
					img.crossOrigin = 'Anonymous';
					setTimeout(function() {
						img.src = $('#ossImg').attr('222');
					}, 1000)

					img.onload = function() {
						canvas2.height = img.height;
						canvas2.width = img.width;
						ctx.drawImage(img, 0, 0);
						var dataURL = canvas2.toDataURL('image/png');
						// 　　　　　　$('#ossImg').attr('src',dataURL);
						canvas2 = null;

						//重新给img赋值成功后，执行截图方法
						html_Canvas()

					}
				}
				$('body').show()

				setTimeout(function() {
					printScreen()
				}, 100)

			})

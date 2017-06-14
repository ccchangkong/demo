//基础目录
UE.FormDesignBaseUrl = 'plugin';
//文本控制器
UE.plugins['textarea'] = function() {
    var me = this,
        thePlugins = 'textarea';
    me.commands[thePlugins] = {
        execCommand: function() {
            var dialog = new UE.ui.Dialog({
                iframeUrl: this.options.UEDITOR_HOME_URL + UE.FormDesignBaseUrl + '/config/textarea.html',
                name: thePlugins,
                editor: this,
                title: '文本框',
                cssRules: "width:600px;height:380px;",
                buttons: [{
                    className: 'edui-okbutton',
                    label: '确定',
                    onclick: function() {
                        dialog.close(true);
                    }
                }, {
                    className: 'edui-cancelbutton',
                    label: '取消',
                    onclick: function() {
                        dialog.close(false);
                    }
                }]
            });
            dialog.render();
            dialog.open();
        }
    };
    var popup = new baidu.editor.ui.Popup({
        editor: this,
        content: '',
        className: 'edui-bubble',
        _edittext: function() {
            baidu.editor.plugins[thePlugins].editdom = popup.anchorEl;
            me.execCommand(thePlugins);
            this.hide();
        },
        _delete: function() {
            if (window.confirm('确认删除该控件吗？')) {
                baidu.editor.dom.domUtils.remove(this.anchorEl, false);
            }
            this.hide();
        }
    });
    popup.render();
    me.addListener('mouseover', function(t, evt) {
        evt = evt || window.event;
        var el = evt.target || evt.srcElement;
        var leipiPlugins = el.getAttribute('plugins');
        if (/input/ig.test(el.tagName) && leipiPlugins == thePlugins) {
            var html = popup.formatHtml(
                '<nobr>文本框: <span onclick=$$._edittext() class="edui-clickable">编辑</span>&nbsp;&nbsp;<span onclick=$$._delete() class="edui-clickable">删除</span></nobr>');
            if (html) {
                popup.getDom('content').innerHTML = html;
                popup.anchorEl = el;
                popup.showAnchor(popup.anchorEl);
            } else {
                popup.hide();
            }
        }
    });
};

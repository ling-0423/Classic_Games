cc.Class({
    extends: cc.Component,

    properties: {
        backButton: cc.Node,  // BackButton 节点
    },

    onLoad() {
        // 为 BackButton 添加点击事件监听
        this.backButton.on('click', this.onBackButtonClick, this);
    },

    onBackButtonClick() {
        // 跳转到 HomePage 界面
        cc.director.loadScene('HomePage');
    },

    start () {

    },

});

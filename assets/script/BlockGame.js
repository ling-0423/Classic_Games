cc.Class({
    extends: cc.Component,

    properties: {
        backButton: cc.Node,  // BackButton 节点
        gridSize: 10,            // 网格大小
        blockSize: 40,           // 每个方块的大小
    },

    onLoad() {
        // 为 BackButton 添加点击事件监听
        this.backButton.on('click', this.onBackButtonClick, this);
    },

    onBackButtonClick() {
        // 跳转到 HomePage 界面
        cc.director.loadScene('HomePage');
    },
    
    start() {
        // 初始化代码
    },

    createGrid() {
        // 删除与Block预制体相关的代码
    }
});

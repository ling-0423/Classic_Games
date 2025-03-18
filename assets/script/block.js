

cc.Class({
    extends: cc.Component,

    properties: {
        spacing: 5,
    },

    onLoad() {
        this.gridSize = 10;
        // 获取屏幕大小
        const screenSize = cc.view.getVisibleSize();
        // 设置边距
        const margin = 20;
        // 动态计算方块大小
        this.blockSize = (screenSize.width - 2 * margin - (this.gridSize - 1) * this.spacing) / this.gridSize;
        this.node.width = this.blockSize;
        this.node.height = this.blockSize;
    },

    start() {
        // 设置为棕色
        this.node.color = new cc.Color(139, 69, 19);
    },

    update(dt) {
    },
});

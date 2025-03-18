cc.Class({
    extends: cc.Component,

    properties: {
        blockPrefab: cc.Prefab, // 预制体属性，用于创建block
        spacing: 5, // 每个block之间的间隔
    },

    start () {
        this.createLShape();
    },

    createLShape() {
        // 创建五个block
        for (let i = 0; i < 5; i++) {
            let block = cc.instantiate(this.blockPrefab);
            this.node.addChild(block);

            // 设置block的位置
            if (i < 3) {
                // 竖直部分
                block.setPosition(0, -i * (block.height + this.spacing));
            } else {
                // 水平部分
                block.setPosition((i - 2) * (block.width + this.spacing), -2 * (block.height + this.spacing));
            }
        }
    },
});

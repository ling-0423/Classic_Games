cc.Class({
    extends: cc.Component,

    properties: {
        blockPrefab: cc.Prefab, // 预制体属性，用于创建block
        spacing: 5, // 每个block之间的间隔
    },

    start () {
        this.createZShape();
    },

    createZShape() {
        // 创建四个block
        for (let i = 0; i < 4; i++) {
            let block = cc.instantiate(this.blockPrefab);
            this.node.addChild(block);

            // 设置block的位置
            if (i < 2) {
                // 上水平部分
                block.setPosition(i * (block.width + this.spacing), 0);
            } else {
                // 下水平部分，向右移动一小格
                block.setPosition((i - 1) * (block.width + this.spacing), -(block.height + this.spacing));
            }
        }
    },
});

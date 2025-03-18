cc.Class({
    extends: cc.Component,

    properties: {
        // 返回按钮节点
        backButton: cc.Node,
        // 方块预制体
        blockPrefab: cc.Prefab,
        // 方块之间的间距
        spacing: 5,
        shapeL: cc.Prefab,
        shapeT: cc.Prefab,
        shapeZ: cc.Prefab,
    },

    onLoad() {
        // 设置网格大小
        this.gridSize = 10;
        // 为返回按钮添加点击事件监听
        this.backButton.on('click', this.onBackButtonClick, this);
    },

    onBackButtonClick() {
        // 跳转到主页场景
        cc.director.loadScene('HomePage');
    },

    start() {
        // 获取屏幕大小
        const screenSize = cc.view.getVisibleSize();
        // 设置边距
        const margin = 20;
        // 动态计算方块大小
        this.blockSize = (screenSize.width - 2 * margin - (this.gridSize - 1) * this.spacing) / this.gridSize;

        // 设置节点大小
        this.node.setContentSize(cc.size(this.blockSize, this.blockSize));
        // 设置节点位置
        this.node.setPosition(cc.v2(0, 0));
        // 初始化网格，传递边距
        this.createGrid(margin);
    },

    createGrid(margin) {
        // 获取屏幕大小
        const screenSize = cc.view.getVisibleSize();
        // 计算网格总大小
        const totalSize = this.gridSize * (this.blockSize + this.spacing) - this.spacing;
        // 计算网格起始X位置，加入边距
        const startX = -(totalSize - this.blockSize) / 2;
        // 计算网格起始Y位置
        const startY = -(screenSize.height - totalSize) / 2;

        for (let i = 0; i < this.gridSize; i++) {
            for (let j = 0; j < this.gridSize; j++) {
                // 实例化方块
                const block = cc.instantiate(this.blockPrefab);
                // 将方块添加到节点
                this.node.addChild(block);

                // 计算方块X位置
                const x = startX + j * (this.blockSize + this.spacing);
                // 计算方块Y位置
                const y = startY + i * (this.blockSize + this.spacing);
                // 设置方块大小
                block.setContentSize(cc.size(this.blockSize, this.blockSize));
                // 设置方块位置
                block.setPosition(x, y);
            }
        }
    },
});

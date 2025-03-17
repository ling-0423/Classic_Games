cc.Class({
    extends: cc.Component,

    properties: {
        blockButton: cc.Node,  // BlockButton 节点
        sudokuButton: cc.Node, // SudokuButton 节点

    },

    onLoad() {
        // 为 BlockButton 添加点击事件监听
        this.blockButton.on('click', this.onBlockButtonClick, this);

        // 为 SudokuButton 添加点击事件监听
        this.sudokuButton.on('click', this.onSudokuButtonClick, this);
    },

    start() {
        // 初始化代码
    },

    onBlockButtonClick() {
        // 跳转到 BlockGame 界面
        cc.director.loadScene('BlockGame');
    },

    onSudokuButtonClick() {
        // 跳转到 SudokuGame 界面
        cc.director.loadScene('SudokuGame');
    },

    // update (dt) {},
});

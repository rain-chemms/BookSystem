const btn = document.getElementById('input-submit-button');

const initColor = '#9d14ffff';
const hoverColor = '#c466ffff';
const activeColor = '#7919ffff';

const normalScale = '1.00';
const bigScale = '1.05';
const smallScale = '0.95';

btn.style.background = initColor; // 设置初始背景色
btn.style.width = '450px';
btn.style.height = '50px';
btn.style.borderRadius = '14px';
btn.style.outline = 'none';

btn.addEventListener('mouseover', function () {
    this.style.background = hoverColor; // 背景变深
    this.style.outline = 'none'; // 添加轮廓线
    this.style.scale = bigScale; // 放大按钮
});

// 鼠标离开时（mouseout）恢复原样式
btn.addEventListener('mouseout', function () {
    this.style.background = initColor; // 回到初始背景
    this.style.outline = 'none'; // 移除轮廓线
    this.style.scale = normalScale;
});

// 点击时效果
btn.addEventListener('mousedown', function () {
    this.style.scale = smallScale; // 按下时缩小
    this.style.background = activeColor; // 按下时颜色变深
});
btn.addEventListener('mouseup', function () {
    this.style.scale = normalScale;
});
/*
 * @Author: wynnxin 
 * @Date: 2018-05-20 01:20:05 
 * @Last Modified by: wynnxin
 * @Last Modified time: 2018-05-20 11:56:41
 */

/**
 * coordinate:
 * x = 16sint^3
 * y = 13cost-5cos2t-2cos3t-cos4t
 */

window.onload = () => {
  startAnimation();
};
var ctx;
//弧度
var radian;
//弧度增量
const radianDecrement = Math.PI / 360;
//起始弧度
const startRadian = Math.PI;

const startAnimation = () => {
  //get canvas
  ctx = document.getElementById("canvas").getContext("2d");
  loveHeart();
};

// x坐标 => 4倍放大曲线
const coordinateX = t => 150 + 4 * (16 * Math.pow(Math.sin(t), 3));

//y坐标 => 4倍放大曲线
const coordinateY = t => {
  return (
    75 -
    4 *
      (13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t))
  );
};

const loveHeart = () => {
  //填充色
  ctx.strokeStyle = "#ff80ab";
  //设置线的宽度
  ctx.lineWidth = 0.5;
  //弧度设为初始弧度
  radian = startRadian;

  //初始点
  ctx.moveTo(coordinateX(radian), coordinateY(radian));
  //设置循环连点
  setInterval(() => {
    dotToLine();
  }, 5);
};

const dotToLine = () => {
  radian += radianDecrement;
  //更新点的位置
  ctx.lineTo(coordinateX(radian), coordinateY(radian));
  ctx.stroke(); //画线
};

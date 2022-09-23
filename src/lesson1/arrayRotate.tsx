const rotate1 = (arr: number[], k: number): number[] => {
  if (!Array.isArray(arr) || typeof k !== "number") return arr;
  const length = arr.length;
  const step = Math.abs(k % length);
  for (let i = 0; i < step; i++) {
    const n = arr.pop();
    if (n) {
      arr.unshift(n);
    }
  }
  return arr;
};
const rotate2 = (arr: number[], k: number): number[] => {
  if (!Array.isArray(arr) || typeof k !== "number") return arr;
  const length = arr.length;
  const step = Math.abs(k % length);
  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, length - step);
  const part3 = part1.concat(part2);
  return part3;
};
const ArrayRotate = () => {
  //  旋转数组
  //  把一个数组旋转K步
  //  思路1  直接在原数组进行 pop 和 unshift 操作 判断输入的 arr 是否是数组  以及 判断输入的 k 是否是 number 类型
  //  思路2  拆分成两个数组  最后concat
  //  重点代码
  //  const length = arr.length;
  //  const step = Math.abs(k % length);
  //  1. 配合for 循环 如果步长为0 则直接跳过  返回原数组
  //  2. 取余运算
  // 功能测试部分
  console.info(rotate1([1, 2, 3, 4, 5, 6, 7], 3));
  console.info(rotate2([1, 2, 3, 4, 5, 6, 7], 3));

  // 性能测试部分
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < 10 * 10000; i++) {
    arr1.push(i);
    arr2.push(i);
  }
  console.time("rotate1");
  rotate1(arr1, 9 * 10000);
  console.timeEnd("rotate1");
  console.log("------------------------------------------------");
  console.time("rotate2");
  rotate2(arr2, 9 * 10000);
  console.timeEnd("rotate2");
  return <div>旋转数组k位 array Rotate</div>;
};
export default ArrayRotate;

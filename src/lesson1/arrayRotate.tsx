import React, { memo } from "react";

const arrayRotate = memo(() => {
  // 把一个数组旋转K步
  // 思路1  直接在原数组进行 pop 和 unshift 操作
  // 思路2  拆分成两个数组  最后concat

  const rotate1 = (arr: number[], k: number): number[] => {
    return arr;
  };
  return <div>arrayRotate</div>;
});

export default arrayRotate;

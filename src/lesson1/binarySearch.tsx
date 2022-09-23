import React, { memo } from "react";

export const binarySearchFun = (arr: number[], target: number): number => {
  const length = arr.length;
  if (length === 0) return -1;

  let startIndex = 0;
  let endIndex = length - 1;

  while (startIndex < endIndex) {
    let midIndex = Math.floor((startIndex + endIndex) / 2); //关键部分
    let midValue = arr[midIndex];
    if (target < midValue) {
      endIndex = midIndex - 1;
    } else if (target > midValue) {
      startIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }
  return -1;
};
export const binarySearchFun1 = (
  arr: number[],
  target: number,
  startIndex?: number,
  endIndex?: number
): number => {
  const length = arr.length;
  if (length === 0) return -1;

  // 初始时如果没传递 start 和 end  则手动初始化参数
  if (startIndex == null) startIndex = 0;
  if (endIndex == null) endIndex = length - 1;

  // 代表递归遍历结束还是没有找到target  返回 -1
  if (startIndex > endIndex) return -1;

  // 二分查找 对 开始和结束索引的 和 进行 二分
  const midIndex = Math.floor((startIndex + endIndex) / 2);
  const midValue = arr[midIndex];

  if (target < midValue) {
    return binarySearchFun1(arr, target, startIndex, midIndex - 1);
  } else if (target > midValue) {
    return binarySearchFun1(arr, target, midIndex + 1, endIndex);
  } else {
    // 等于情况
    return midIndex;
  }
};
const binarySearch = memo(() => {
  const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
  const target = 40;
  console.info("fun1", binarySearchFun(arr, target));
  console.info("fun2", binarySearchFun1(arr, target));

  return <div>binarySearch</div>;
});

export default binarySearch;

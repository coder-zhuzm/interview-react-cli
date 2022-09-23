import React, { memo } from "react";
export function findTowNumbers1(arr: number[], n: number): number[] {
  const res: number[] = [];

  const length = arr.length;
  if (length === 0) return res;

  // O(n^2)
  for (let i = 0; i < length - 1; i++) {
    const n1 = arr[i];
    let flag = false; // 是否得到了结果

    for (let j = i + 1; j < length; j++) {
      const n2 = arr[j];

      if (n1 + n2 === n) {
        res.push(n1);
        res.push(n2);
        flag = true;
        break;
      }
    }

    if (flag) break;
  }

  return res;
}
export function findTowNumbers2(arr: number[], n: number): number[] {
  const res: number[] = [];
  const length = arr.length;
  if (length === 0) return res;
  let i = 0;
  let j = length - 1;
  while (i < j) {
    const n1 = arr[i];
    const n2 = arr[j];
    const sum = n1 + n2;
    if (sum > n) {
      j--;
    } else if (sum < n) {
      i++;
    } else {
      res.push(n1);
      res.push(n2);
      break;
    }
  }
  return res;
}
const twoNumberSum = memo(() => {
  const arr = [1, 2, 4, 7, 11, 15];
  console.info("fun1", findTowNumbers1(arr, 15));
  console.info("fun2", findTowNumbers2(arr, 6));

  return <div>twoNumberSum</div>;
});

export default twoNumberSum;

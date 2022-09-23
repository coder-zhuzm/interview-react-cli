import React, { memo } from "react";
import { cloneDeep } from "lodash";

interface ILinkListNode {
  value: number | string;
  next?: ILinkListNode;
}
export const createLinkList = (arr: number[]): ILinkListNode => {
  const length = arr.length;
  if (length === 0) throw new Error("array is empty");
  let curNode: ILinkListNode = {
    value: arr[length - 1],
  };
  if (arr.length === 1) return curNode;

  for (let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode,
    };
  }
  return curNode;
};

const reverseLinkListFun = (listNode: ILinkListNode): ILinkListNode => {
  // 三个指针
  let curNode: ILinkListNode | undefined = undefined;
  let prevNode: ILinkListNode | undefined = undefined;
  let nextNode: ILinkListNode | undefined = listNode;

  while (nextNode) {
    // 第一个元素，删掉 next ，防止循环引用
    if (curNode && !prevNode) {
      delete curNode.next;
    }
    // 反转单向链表
    if (curNode && prevNode) {
      curNode.next = prevNode;
    }
    // 整体向后移动指针
    prevNode = curNode;
    curNode = nextNode;
    nextNode = nextNode.next;
  }
  curNode!.next = prevNode;
  return curNode!;
};
const reverseLinkList = memo(() => {
  const arr = [100, 200, 300, 400, 500];
  const linkList = createLinkList(arr);
  console.info("111", linkList);
  const _linkList = cloneDeep(linkList);
  const linkList1 = reverseLinkListFun(_linkList);
  console.log("222", linkList1);

  return <div>reverseLinkList</div>;
});

export default reverseLinkList;

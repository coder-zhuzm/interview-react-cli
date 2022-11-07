import React, { memo } from "react";
import ArrayRotate from "./arrayRotate";
// import MatchBracket from "./matchBracket";
// import ReverseLinkList from "./reverseLinkList";
// import BinarySearch from "./binarySearch";
// import TwoNumberSum from "./twoNumberSum";
export interface ITreeNode {
  value: number;
  left: ITreeNode | null;
  right: ITreeNode | null;
}

const arr: number[] = [];
/**
 * 二叉树前序遍历
 * @param node tree node
 */
// function preOrderTraverse(node: ITreeNode | null) {
//   if (node == null) return;
//   // console.log(node.value)
//   arr.push(node.value);
//   preOrderTraverse(node.left);
//   preOrderTraverse(node.right);
// }

// /**
//  * 二叉树中序遍历
//  * @param node tree node
//  */
// function inOrderTraverse(node: ITreeNode | null) {
//   if (node == null) return;
//   inOrderTraverse(node.left);
//   // console.log(node.value)
//   arr.push(node.value);
//   inOrderTraverse(node.right);
// }

/**
 * 二叉树后序遍历
 * @param node tree node
 */
function postOrderTraverse(node: ITreeNode | null) {
  if (node == null) return;
  postOrderTraverse(node.left);
  postOrderTraverse(node.right);
  // console.log(node.value)
  arr.push(node.value);
}
const Lesson = memo(() => {
  const bst: ITreeNode = {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 7,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 8,
        left: null,
        right: null,
      },
    },
  };

  // preOrderTraverse(bst);

  // inOrderTraverse(bst);

  postOrderTraverse(bst);
  console.log(arr);

  return (
    <div>
      Lesson1
      {/* <ArrayRotate /> */}
      {/* <MatchBracket /> */}
      {/* <ReverseLinkList /> */}
      {/* <BinarySearch /> */}
      {/* <TwoNumberSum /> */}
      <br />
      ================================================================
    </div>
  );
});

export default Lesson;

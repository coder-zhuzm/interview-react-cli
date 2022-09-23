import React, { memo } from "react";

const matchBracket = memo(() => {
  // 栈   先进后出 后进先出
  // 队列 先进先出

  const isMatch = (left: string, right: string) => {
    if (left === "{" && right === "}") return true;
    if (left === "[" && right === "]") return true;
    if (left === "(" && right === ")") return true;
    return false;
  };
  const matchBracket1 = (str: string) => {
    const length = str.length;
    if (length === 0) return true;
    let stack: string[] = [];
    const leftSymbols = "{[(";
    const rightSymbols = "}])";
    for (let i = 0; i < length; i++) {
      const s = str[i];
      if (leftSymbols.includes(s)) {
        stack.push(s);
      } else if (rightSymbols.includes(s)) {
        const top = stack[stack.length - 1];
        if (isMatch(top, s)) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
  };
  const bracketStr1 = "{a(b[c]d)e}f";
  console.log(matchBracket1(bracketStr1));

  return <div>括号匹配 matchBracket</div>;
});

export default matchBracket;

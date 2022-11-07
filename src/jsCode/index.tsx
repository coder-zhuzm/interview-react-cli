import React, { memo } from "react";

const jsCode = memo(() => {
  function myNew(fun: any, ...args: any[]) {
    let newObj = null;
    newObj = Object.create(fun.prototype);
    const result = fun.apply(newObj, [...args]);
    let flag =
      result && (typeof result === "object" || typeof result === "function");
    //  // 判断返回结果
    return flag ? result : newObj;
  }

  function Fun(this: any, name: any) {
    this.name = name;
  }
  Fun.prototype.getName = function () {
    console.log(this.name);
  };
  const fun = myNew(Fun, "zhangsan");
  fun.getName();

  console.log("================================");

  var obj = { foo: "bar", baz: 42 };
  console.log(Object.values(obj)); // ['bar', 42]

  return <div>jsCode</div>;
});

export default jsCode;

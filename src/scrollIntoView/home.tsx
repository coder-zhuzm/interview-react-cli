import React, { Component } from "react";
import "./index.css";
export default class Home extends Component {
  toLocation = (id: any) => {
    const dom = document.getElementById(id);
    if (dom) {
      dom.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.toLocation("div4");
          }}
        >
          跳转按钮
        </button>
        <div className="div1"></div>
        <div className="div2"></div>
        <div id={"div3"} className="div3"></div>
        <div className="div4" id={"div4"}></div>
        <div className="div5"></div>
        <div className="div6"></div>
        <div className="div7"></div>

      </div>
    );
  }
}

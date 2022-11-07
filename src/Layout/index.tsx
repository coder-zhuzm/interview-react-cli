import React, { memo } from "react";
// import "./layout.css";

// import Lesson1 from "../lesson1/";
// import JsCode from "../jsCode/index";
// import Home from "../scrollIntoView//home";
import AudioCpn from "../audio/indexback";

const Layout = memo(() => {
  return (
    <div className="codeRenderArea">
      {/* <Lesson1 /> */}
      {/* <JsCode /> */}
      {/* <Home /> */}
      <AudioCpn />
    </div>
  );
});

export default Layout;

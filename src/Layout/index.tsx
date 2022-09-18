import React, { memo } from "react";
import "./layout.css";

import Lesson1 from "../lesson1/";

const Layout = memo(() => {
  return (
    <div className="codeRenderArea">
      <Lesson1 />
    </div>
  );
});

export default Layout;

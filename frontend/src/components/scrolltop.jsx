import React from "react";

const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="top" onClick={scrollToTop}>
      ↑
    </div>
  );
};

export default ScrollTop;

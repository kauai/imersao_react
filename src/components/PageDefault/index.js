import React from "react";
import Menu from '../Nav'
import Footer from '../Footer'

function PageDefault({ children }) {
  return (
    <>
      <div style={{ background: "#141414" }}>
        <Menu />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default PageDefault

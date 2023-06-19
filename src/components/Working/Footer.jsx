import React from "react";

// css
import "../../style/footer.scss";

function Footer() {
  return (
    <React.StrictMode>
      <section className="footer">
        <h1>© 1999-2022 Alibaba.com. All rights reserved.</h1>
        <p>create by Muhammad Danish Khan</p>

        <a href="#">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </section>
    </React.StrictMode>
  );
}

export default Footer;

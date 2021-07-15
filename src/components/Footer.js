import React from "react";
import "../styles/footer.css";

const Footer = () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="/">@careercrew</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved Career Crew.
        </span>
      </div>
    </footer>
  </div>
);

export default Footer;

import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div id="footer">
        <div className="footer-follow">
          <a href="https://www.facebook.com/dani.admaso" target="_blank">
            <i className="fa fa-facebook-square" style={{ fontSize: 26 }} />
          </a>
          <a href="mailto:AdmasoDaniel@gmail.com">
            <i className="fa fa-google" style={{ fontSize: 26 }} />
          </a>
          <a href="https://github.com/DanielAdmaso" target="_blank">
            <i className="fa fa-github" style={{ fontSize: 26 }} />
          </a>
          <a href="https://www.linkedin.com/in/danieladmaso/" target="_blank">
            <i className="fa fa-linkedin" style={{ fontSize: 26 }} />
          </a>
          <a href="+972528042666">
            <i className="fa fa-phone" style={{ fontSize: 26 }} />
          </a>
        </div>
        <div className="footer-copyright">
          <p>
            Copyright © 2019. All Rights Reserved.
            <a href="#">DanielAdmaso</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;

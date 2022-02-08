import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import logo from "../../assets/images/logo-white.svg";
import NavList from "../Nav-list/NavList";

import "./Footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container padding-main-x">
      <footer className="footer  row">
        <div className="footer__flag"></div>
        <div className="footer__top">
          <img className="footer__logo" src={logo} alt="logo" />
          <NavList />
        </div>
        <p className="footer__mid">
          Audiophile is an all in one stop to fulfill your audio needs. We‘re a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we‘re open 7 days a week.
        </p>
        <div className="footer__down">
          <p className="footer__copyright">
            Copyright {currentYear}. All Rights Reserved
          </p>
          <div className="footer__icons">
            <FacebookOutlined className="footer__icon" />
            <TwitterOutlined className="footer__icon" />
            <InstagramOutlined className="footer__icon" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

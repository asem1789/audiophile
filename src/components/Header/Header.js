import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import LogoImg from "../../assets/images/logo-white.svg";
import NavList from "../Nav-list/NavList";
import Portal from "../Portal";
import { useOutsideClick, useStickyNav } from "../../hooks";

import "./Header.scss";
import SideNav from "../SideNav/SideNav";
import Cart from "../Cart";
import { useState, useRef } from "react";

function Header() {
  const { pathname } = useLocation();
  const isNoHome = pathname.length !== 1;
  const portalRef = useRef(null);
  const buttonRef = useRef(null);

  const buttonCartRef = useRef(null);
  const cartBoxRef = useRef(null);

  const isSticky = useStickyNav();

  const [isOpen, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { count } = cart;

  const closeSide = () => {
    setOpen(false);
  };

  const toggleSideNav = () => {
    if (isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useOutsideClick({
    refs: [buttonRef, portalRef],
    handler: closeSide,
  });

  const hideCart = () => {
    setShowCart(false);
  };

  const toggleCart = () => {
    if (showCart) {
      hideCart();
    } else {
      setShowCart(true);
    }
  };

  useOutsideClick({
    refs: [buttonCartRef, cartBoxRef],
    handler: hideCart,
  });

  const renderPortal = () => (
    <>
      <Portal>
        <div className="backdrop" />
      </Portal>
      <Portal
        ref={portalRef}
        className={`sidenav-modal ${isSticky && "sidenav-modal--up"}`}
      >
        <SideNav onClick={closeSide} />
      </Portal>
    </>
  );

  return (
    <>
      {isOpen && renderPortal()}
      <div
        className={`header padding-main-x ${isNoHome && "header__bg--black"} ${
          isSticky && "sticky"
        }`}
      >
        <div className="header__inner row">
          {showCart && (
            <div ref={cartBoxRef} className="header__cart">
              <Cart onClick={hideCart} />
            </div>
          )}

          {showCart && (
            <Portal>
              <div className="backdrop" />
            </Portal>
          )}
          <button
            ref={buttonRef}
            onClick={toggleSideNav}
            type="button"
            className="btn btn_menu hide-gt-lg header__menu"
          >
            <MenuOutlined className="btn_menu_icon" />
          </button>
          <Link className="header__logo" to="/">
            <img src={LogoImg} alt="logo" />
          </Link>
          <div className="hide-lt-lg">
            <NavList />
          </div>

          <button
            ref={buttonCartRef}
            onClick={toggleCart}
            type="button"
            className="btn btn_menu header__btnCart"
          >
            <ShoppingCartOutlined className="btn_menu_icon" />
            {!!count && <span className="header__hint">{count}</span>}
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;

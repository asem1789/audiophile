import { Link } from "react-router-dom";
import { ROUTES } from "../../services/routes";
import "./SideNav.scss";

const SideNavMenu = [
  {
    id: "1",
    name: "headphones",
    link: ROUTES.CATEGORY_HEADPHONES,
    img: require("../../assets/images/cat-headphones.jpg"),
  },
  {
    id: "2",
    name: "speakers",
    link: ROUTES.CATEGORY_SPEAKERS,
    img: require("../../assets/images/cat-speaker.jpg"),
  },
  {
    id: "3",
    name: "earphones",
    link: ROUTES.CATEGORY_EARPHONES,
    img: require("../../assets/images/cat-earphones.jpg"),
  },
];

const SideNav = ({ onClick }) => {
  return (
    <nav className="sidenav">
      <ul className="sidenav__menu">
        <Link
          onClick={onClick}
          className="sidenav__link sidenav__link--home"
          to={ROUTES.HOME_PAGE}
        >
          Home
        </Link>
        {SideNavMenu.map(({ id, name, link, img }) => (
          <Link onClick={onClick} key={id} className="sidenav__link" to={link}>
            <li className="sidenav__item">
              <div className="sidenav__imgBox">
                <img src={img} alt="cat img" />
              </div>
              <span className="sidenav__text">{name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;

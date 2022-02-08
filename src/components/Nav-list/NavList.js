import { Link } from "react-router-dom";
import { ROUTES } from "../../services/routes";
import "./NavList.scss";

const NavMenu = [
  { id: "1", name: "home", link: ROUTES.HOME_PAGE },
  { id: "2", name: "headphones", link: ROUTES.CATEGORY_HEADPHONES },
  { id: "3", name: "speakers", link: ROUTES.CATEGORY_SPEAKERS },
  { id: "4", name: "earphones", link: ROUTES.CATEGORY_EARPHONES },
];

function NavList() {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        {NavMenu.map((el) => (
          <li className="nav__item" key={el.id}>
            <Link className="nav__link" to={el.link}>
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavList;

import { Link } from "react-router-dom";
import Image from "./Image";

function Nav() {
  const closeMenu = () => {
    document.getElementById("navi-toggle").checked = false;
  };

  return (
    <section className="nav">
      <Link to={"/"} className="nav__home">
        <Image
          className="nav__home--img"
          src="/assets/images/logo-transparent.png"
        />
      </Link>

      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link
                to={"/despre"}
                className="navigation__link"
                onClick={closeMenu}
              >
                <span>01</span>Despre
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                to={"/tarife"}
                className="navigation__link"
                onClick={closeMenu}
              >
                <span>02</span>Tarife
              </Link>
            </li>
            <li className="navigation__item">
              <Link to={"/contact"} className="navigation__link">
                <span>03</span>Contact
              </Link>
            </li>
            <li className="navigation__item">
              <Link to={"/blog"} className="navigation__link">
                <span>04</span>Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Nav;

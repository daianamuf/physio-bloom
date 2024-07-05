import Image from "./Image";

function Nav() {
  return (
    <nav className="nav">
      <button className="nav__home">
        <Image className="nav__home--img" src="/assets/images/logo.jpeg" />
      </button>

      <button className="nav__menu">
        <span>----</span>
        <span>----</span>
        <span>----</span>
      </button>
    </nav>
  );
}

export default Nav;

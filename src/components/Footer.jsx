import useElementIntersectionObserver from "../useElementIntersectionObserver";
import Image from "./Image";

function Footer() {
  const { elementRef, isVisible } = useElementIntersectionObserver({
    root: null,
    treshold: 0.3,
  });

  return (
    <footer ref={elementRef} className="footer">
      <section className="footer__content">
        <div
          className={`footer__content--group footer__content--studio ${
            isVisible ? "slideFromLeft" : ""
          }`}
        >
          <p>PHYSIO BLOOM STUDIO</p>
        </div>
        <div
          className={`footer__content--group footer__content--adress ${
            isVisible ? "slideFromLeft" : ""
          }`}
        >
          <ion-icon
            className="footer__content--icon"
            name="pin-outline"
          ></ion-icon>
          <p>Cluj-Napoca, str. Grigore Moisil, nr.12</p>
        </div>
        <div
          className={`footer__content--group footer__content--socials ${
            isVisible ? "slideFromLeft" : ""
          }`}
        >
          <a
            className="footer__content--link"
            href="https://www.instagram.com/physio_bloom_studio?igsh=MWtyM2d3cnlobHkxcw=="
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon
              className="footer__content--icon"
              name="logo-instagram"
            ></ion-icon>
          </a>
          <a
            className="footer__content--link"
            href="https://www.facebook.com/profile.php?id=61553467981003"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon
              className="footer__content--icon"
              name="logo-facebook"
            ></ion-icon>
          </a>
        </div>
        <div className="footer__content--group footer__content--copyright">
          <p>© Copyright 2024 - Physio Bloom Studio</p>
        </div>
      </section>
      <Image
        className={`footer__image  ${isVisible ? "slideFromRight" : ""}`}
        alt="Footer image"
        src="/assets/images/img4.jpeg"
      />
    </footer>
  );
}

export default Footer;

import { useEffect, useRef } from "react";

function Blog() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.setProperty("--hero-height", "100%");
    }
  }, []);

  return (
    <section className="blog">
      <div className="blog__hero" ref={heroRef}></div>
      <div className="contact__data">
        <p>OWNER - Bianca Deceanu</p>
        <p>0747 486 770</p>
        <p>physiobloom@gmail.com</p>
      </div>
      <div className="contact__form"></div>
    </section>
  );
}

export default Blog;

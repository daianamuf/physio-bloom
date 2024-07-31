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
      <div className="blog__posts"></div>
    </section>
  );
}

export default Blog;

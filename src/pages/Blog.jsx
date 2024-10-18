import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import useElementIntersectionObserver from "../useElementIntersectionObserver";
import Masonry from "react-masonry-css";
import { Helmet } from "react-helmet-async";

//update when more posts are created
const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 2,
  500: 1,
};

function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const canonicalUrl = "https://physiobloom.ro/blog";

  const { elementRef, isVisible } = useElementIntersectionObserver({
    root: null,
    treshold: 0.3,
  });

  useEffect(() => {
    const query = encodeURIComponent(`*[_type == "post"]{
      _id,
      title,
      "slug": slug.current,
      author,
      "mainImageUrl": mainImage.asset->url,
      publishedAt,
     }
     `);
    const url = `https://e7rbl2wq.api.sanity.io/v1/data/query/production?query=${query}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const formatDate = (publishedAt) => {
    const date = new Date(publishedAt);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    if (!publishedAt) {
      return "";
    }

    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <Helmet>
        <title>
          Blog PhysioBloom - Informații despre Recuperare și Pilates în Cluj
        </title>
        <meta
          name="description"
          content="Citește blogul PhysioBloom pentru articole despre recuperare medicală, pilates clinic, pilates pre și post-natal și Peak Pilates."
        />
        <meta
          name="keywords"
          content="PhysioBloom, blog, recuperare medicală, pilates clinic, pre și post-natal, Peak Pilates, Cluj, Cluj-Napoca, pilates"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <section className="blog">
        {isLoading && <Loader />}
        <div className="blog__hero"></div>
        <div
          className={`blog__posts ${isVisible ? "slideInFromBottom" : ""}`}
          ref={elementRef}
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {posts.map((post) => (
              <div key={post._id} className="blog__post">
                <Link to={`/blog/${post.slug}`} className="blog__post--btn">
                  <img
                    src={post.mainImageUrl}
                    alt={post.title}
                    className="blog__post--img"
                  />

                  <h1 className="blog__post--heading">{post.title}</h1>
                  <p className="blog__post--publishedAt">
                    {post.author}, {formatDate(post.publishedAt)}
                  </p>
                </Link>
              </div>
            ))}
          </Masonry>
        </div>
      </section>
    </>
  );
}

export default Blog;

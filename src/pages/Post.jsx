import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../utils/sanityClient";
import { Helmet } from "react-helmet-async";

const SampleImageComponent = ({ value }) => {
  return (
    <img
      className="post__img"
      src={urlFor(value).url()}
      alt="Image"
      loading="lazy"
    />
  );
};

const components = {
  block: ({ value, children }) => {
    switch (value.style) {
      case "h1":
        return <h1 className="post__heading">{children}</h1>;
      case "h2":
        return <h2 className="post__heading--secondary">{children}</h2>;
      case "h3":
        return <h3 className="post__heading--tertiary">{children}</h3>;
      case "blockquote":
        return <blockquote className="post__blockquote">{children}</blockquote>;
      default:
        return <p className="post__content">{children}</p>;
    }
  },
  types: {
    image: SampleImageComponent,
  },

  list: {
    bullet: ({ children }) => <ul className="post__list">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="post__list--item">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="post__strong">{children}</strong>
    ),
    em: ({ children }) => <em className="post__em">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="post__link"
      >
        {children}
      </a>
    ),
  },
};

function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const query = encodeURIComponent(
      `*[_type == "post" && slug.current == "${slug}"]{
        _id,
        title,
        "slug": slug.current,
        author,
        "mainImageUrl": mainImage.asset->url,
        publishedAt,
        body
      }`
    );
    const url = `https://e7rbl2wq.api.sanity.io/v1/data/query/production?query=${query}`;

    fetch(url)
      .then((res) => res.json())
      .then(({ result }) => {
        if (result?.length > 0) {
          setPost(result[0]);
        } else {
          console.error("No post found");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [slug]);

  const formatDate = (publishedAt) => {
    if (!publishedAt) return "";
    const date = new Date(publishedAt);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  if (isLoading) return <Loader />;
  if (!post) return <div>Post not found</div>;

  const canonicalUrl = `https://physiobloom.ro/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title} | PhysioBloom Blog</title>
        <meta
          name="description"
          content={`Află mai multe despre ${post.title}, scris de ${post.author}. `}
        />
        <meta
          name="keywords"
          content="PhysioBloom, recuperare medicală, pilates pre și post-natal, pilates clinic, Peak Pilates, terapie fizică, Cluj, Cluj-Napoca, România, pilates, kinetoterapie, kineto"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <section className="post">
        <article className="post slideFromLeft">
          {post.mainImageUrl ? (
            <img
              src={post.mainImageUrl}
              alt={post.title || "Main Image"}
              className="post__mainImage"
            />
          ) : (
            <div>No main image available</div>
          )}
          <h1 className="post__heading">{post.title}</h1>
          <div className="post__text">
            <p className="post__info">
              {post.author}, {formatDate(post.publishedAt)}
            </p>
          </div>
          {post.body ? (
            <PortableText value={post.body} components={components} />
          ) : (
            <div>Conținutul nu este disponibil</div>
          )}
          <Link to="/blog" className="post__btn--back">
            Înapoi
          </Link>
        </article>
      </section>
    </>
  );
}

export default Post;

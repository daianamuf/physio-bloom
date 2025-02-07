async function fetchAllBlogSlugs() {
  const query = encodeURIComponent(`*[_type == "post"]{
        "slug": slug.current,
       }
       `);
  const url = `https://e7rbl2wq.api.sanity.io/v1/data/query/production?query=${query}`;

  try {
    const posts = await fetch(url);
    const res = await posts.json();
    const slugs = res.result.map((r) => r.slug);
    return slugs;
  } catch (error) {
    console.error("Error fetching blog slugs", error);
    return [];
  }
}

export default fetchAllBlogSlugs;

export default function sitemap() {
  const lastModified = new Date().toISOString();

  const paths = [
    "/",
    "/manufacturing",
    "/collection",
    "/blog",
    "/blog/custom-uniform-shirts",
    "/blog/private-label-shirt-manufacturer",
    "/blog/shirt-sleeve-types",
    "/blog/summer-shirt-guide",
    "/contact",
    "/tr",
    "/tr/manufacturing",
    "/tr/collection",
    "/tr/blog",
    "/tr/blog/custom-uniform-shirts",
    "/tr/blog/shirt-sleeve-types",
    "/tr/blog/summer-shirt-guide",
    "/tr/contact",
  ];

  return paths.map((path) => ({
    url: `https://www.mayagmurtextile.com${path}`,
    lastModified,
  }));
}

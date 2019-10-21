const path = require(`path`);
const slash = require(`slash`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve("./src/templates/blogpost.js");
  const collectiveShowTemplate = path.resolve("./src/templates/collectiveShow.js");

  const collectiveEntries = await graphql(`
    {
      allContentfulCollectiveEntry {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  collectiveEntries.data.allContentfulCollectiveEntry.edges.forEach(edge => {
    const { slug, id } = edge.node;

    createPage({
      path: `/collective/${edge.node.slug}`,
      component: slash(collectiveShowTemplate),
      context: {
        slug, 
        id
      }
    })
  })
};
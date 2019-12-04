const postQuery = `{
    posts:  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/docs-pages/"}}) {
        nodes {
            objectID: id
            frontmatter {
              auth
              author
              category
              excert
              title
            }
          }
      }
}`

const queries = [
    {
        query: postQuery,
        transformer: ({ data }) => data.posts.nodes,
        indexName: `APIS_DOCS`,
    },
]

module.exports = queries

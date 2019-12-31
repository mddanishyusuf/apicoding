const learnQuery = `{
    learn:  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog-posts/"}}) {
        nodes {
            objectID: id
            frontmatter {
                title
                excert
                keywords
            }
          }
      }
}`

const collectionQuery = `{
    apis:  allPaApis{
        nodes {
            objectID: id
            title
            description
        }
    }
}`

const toolsQuery = `{
    tools:  allPaTools {
        nodes {
            objectID: id
            description
            title
        }
    }
}`

const resourceQuery = `{
    resources:  allPaResources{
        nodes {
            objectID: id
            description
            title
        }
    }
}`

// const records = []

// learnNodes.forEach(item => {
//     records.push({ title: item.frontmatter.title, description: item.frontmatter.excert })
// })

// collectionNodes.forEach(item => {
//     records.push({ title: item.title, description: item.description })
// })

// toolsNodes.forEach(item => {
//     records.push({ title: item.title, description: item.description })
// })

// resourcesNodes.forEach(item => {
//     records.push({ title: item.title, description: item.description })
// })

const queries = [
    {
        query: learnQuery,
        transformer: ({ data }) => data.learn.nodes,
        indexName: `API_CODING`,
    },
    {
        query: collectionQuery,
        transformer: ({ data }) => data.apis.nodes,
        indexName: `API_CODING`,
    },
    {
        query: toolsQuery,
        transformer: ({ data }) => data.tools.nodes,
        indexName: `API_CODING`,
    },
    {
        query: resourceQuery,
        transformer: ({ data }) => data.resources.nodes,
        indexName: `API_CODING`,
    },
    {
        query: learnQuery,
        transformer: ({ data }) => data.learn.nodes,
        indexName: `API_CODING_LEARN`,
    },
    {
        query: collectionQuery,
        transformer: ({ data }) => data.apis.nodes,
        indexName: `API_CODING_APIS`,
    },
    {
        query: toolsQuery,
        transformer: ({ data }) => data.tools.nodes,
        indexName: `API_CODING_TOOLS`,
    },
    {
        query: resourceQuery,
        transformer: ({ data }) => data.resources.nodes,
        indexName: `API_CODING_RESOURCES`,
    },
]

module.exports = queries

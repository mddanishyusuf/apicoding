const learnQuery = `{
    learn:  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog-posts/"}}) {
        nodes {
            objectID: id
            frontmatter {
                path
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
            auth
            cat_id
            category
            color
            description
            link
            slug
            title
        }
    }
}`

const toolsQuery = `{
    tools:  allPaTools {
        nodes {
            objectID: id
            description
            image
            logo
            pricing
            publisher
            title
            type
            url
        }
    }
}`

const resourceQuery = `{
    resources:  allPaResources{
        nodes {
            objectID: id
            author
            image
            description
            logo
            publisher
            title
            url
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

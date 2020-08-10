const path = require(`path`)
const _ = require('lodash')
const { createRemoteFileNode } = require('gatsby-source-filesystem')

const POST_PER_PAGE = 20
const API_PER_PAGE = 36
const TOOLS_PER_PAGE = 24

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    
    const learnTemplate = path.resolve(`src/template/learn.js`)
    const learnPostTemplate = path.resolve(`src/template/learnPost.js`)
    
    const learning = await graphql(`
        {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/(blog-posts)/.*\\\\.md$/" } }
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `)

    // Handle errors
    if (learning.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
    }

    const learningChunks = _.chunk(learning.data.allMarkdownRemark.edges, POST_PER_PAGE)
    const LEARN_TOTAL_OBJECT = learning.data.allMarkdownRemark.edges.length

    learning.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: learnPostTemplate,
            context: {}, // additional data can be passed via context
        })
    })

    learningChunks.forEach((chunk, index) => {
        if (index === 0) {
            createPage({
                path: `/learn`,
                component: learnTemplate,
                context: {
                    first: POST_PER_PAGE / 2,
                    skip: POST_PER_PAGE * index,
                    limit: POST_PER_PAGE,
                    pageNumber: index + 1,
                    hasNextPage: index !== learningChunks.length - 1,
                    hasPreviousPage: index !== 0,
                    total: LEARN_TOTAL_OBJECT,
                },
            })
        }
        if (index > 0) {
            createPage({
                path: `/learn/page/${index + 1}`,
                component: learnTemplate,
                context: {
                    first: POST_PER_PAGE / 2,
                    skip: POST_PER_PAGE * index,
                    limit: POST_PER_PAGE,
                    pageNumber: index + 1,
                    hasNextPage: index !== learningChunks.length - 1,
                    hasPreviousPage: index !== 0,
                    total: LEARN_TOTAL_OBJECT,
                },
            })
        }
    })
}

exports.onCreateNode = async ({ node, actions: { createNode }, store, cache, createNodeId }) => {
    // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
    if (node.internal.type === 'pa__resources' && node.image !== null) {
        const fileNode = await createRemoteFileNode({
            url: node.image, // string that points to the URL of the image
            parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
            createNode, // helper function in gatsby-node to generate the node
            createNodeId, // helper function in gatsby-node to generate the node id
            cache, // Gatsby's cache
            store, // Gatsby's redux store
        })
        // if the file was created, attach the new node to the parent node
        if (fileNode) {
            node.featuredImg___NODE = fileNode.id
        }
    }
}

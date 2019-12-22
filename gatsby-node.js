const path = require(`path`)
const _ = require('lodash')

const POST_PER_PAGE = 20

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const apiDocsTemplate = path.resolve(`src/template/apiDocs.js`)
    const apisTemplate = path.resolve(`src/template/apis.js`)

    const result = await graphql(`
        {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/(docs-pages)/.*\\\\.md$/" } }
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
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: apiDocsTemplate,
            context: {}, // additional data can be passed via context
        })
    })

    const chunks = _.chunk(result.data.allMarkdownRemark.edges, POST_PER_PAGE)
    const TOTAL_OBJECT = result.data.allMarkdownRemark.edges.length

    chunks.forEach((chunk, index) => {
        if (index === 0) {
            createPage({
                path: `/docs`,
                component: apisTemplate,
                context: {
                    first: POST_PER_PAGE / 2,
                    skip: POST_PER_PAGE * index,
                    limit: POST_PER_PAGE,
                    pageNumber: index + 1,
                    hasNextPage: index !== chunks.length - 1,
                    hasPreviousPage: index !== 0,
                    total: TOTAL_OBJECT,
                },
            })
        }
        createPage({
            path: `/docs/page/${index + 1}`,
            component: apisTemplate,
            context: {
                first: POST_PER_PAGE / 2,
                skip: POST_PER_PAGE * index,
                limit: POST_PER_PAGE,
                pageNumber: index + 1,
                hasNextPage: index !== chunks.length - 1,
                hasPreviousPage: index !== 0,
                total: TOTAL_OBJECT,
            },
        })
    })
}

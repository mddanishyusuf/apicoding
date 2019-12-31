const path = require(`path`)
const _ = require('lodash')
const { createRemoteFileNode } = require('gatsby-source-filesystem')

const POST_PER_PAGE = 20
const API_PER_PAGE = 36
const TOOLS_PER_PAGE = 24

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    // const apiDocsTemplate = path.resolve(`src/template/apiDocs.js`)
    // const apisTemplate = path.resolve(`src/template/apis.js`)
    const learnTemplate = path.resolve(`src/template/learn.js`)
    const collectionTemplate = path.resolve(`src/template/collection.js`)
    const collectionCatTemplate = path.resolve(`src/template/catAPI.js`)
    const toolTemplate = path.resolve(`src/template/tools.js`)
    const resourcesTemplate = path.resolve(`src/template/resources.js`)
    const learnPostTemplate = path.resolve(`src/template/learnPost.js`)

    // const result = await graphql(`
    //     {
    //         allMarkdownRemark(
    //             filter: { fileAbsolutePath: { regex: "/(docs-pages)/.*\\\\.md$/" } }
    //             sort: { order: DESC, fields: [frontmatter___date] }
    //             limit: 1000
    //         ) {
    //             edges {
    //                 node {
    //                     frontmatter {
    //                         path
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)

    // // Handle errors
    // if (result.errors) {
    //     reporter.panicOnBuild(`Error while running GraphQL query.`)
    //     return
    // }
    // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    //     createPage({
    //         path: node.frontmatter.path,
    //         component: apiDocsTemplate,
    //         context: {}, // additional data can be passed via context
    //     })
    // })

    // const chunks = _.chunk(result.data.allMarkdownRemark.edges, POST_PER_PAGE)
    // const TOTAL_OBJECT = result.data.allMarkdownRemark.edges.length

    // chunks.forEach((chunk, index) => {
    //     if (index === 0) {
    //         createPage({
    //             path: `/docs`,
    //             component: apisTemplate,
    //             context: {
    //                 first: POST_PER_PAGE / 2,
    //                 skip: POST_PER_PAGE * index,
    //                 limit: POST_PER_PAGE,
    //                 pageNumber: index + 1,
    //                 hasNextPage: index !== chunks.length - 1,
    //                 hasPreviousPage: index !== 0,
    //                 total: TOTAL_OBJECT,
    //             },
    //         })
    //     }
    //     createPage({
    //         path: `/docs/page/${index + 1}`,
    //         component: apisTemplate,
    //         context: {
    //             first: POST_PER_PAGE / 2,
    //             skip: POST_PER_PAGE * index,
    //             limit: POST_PER_PAGE,
    //             pageNumber: index + 1,
    //             hasNextPage: index !== chunks.length - 1,
    //             hasPreviousPage: index !== 0,
    //             total: TOTAL_OBJECT,
    //         },
    //     })
    // })

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

    const collection = await graphql(`
        {
            allPaApis(filter: { title: { ne: null } }) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    // Handle errors
    if (collection.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
    }

    const collectionChunks = _.chunk(collection.data.allPaApis.edges, API_PER_PAGE)
    const COLLECTION_TOTAL_OBJECT = collection.data.allPaApis.edges.length

    collectionChunks.forEach((chunk, index) => {
        if (index === 0) {
            createPage({
                path: `/public-apis`,
                component: collectionTemplate,
                context: {
                    first: API_PER_PAGE / 2,
                    skip: API_PER_PAGE * index,
                    limit: API_PER_PAGE,
                    pageNumber: index + 1,
                    hasNextPage: index !== collectionChunks.length - 1,
                    hasPreviousPage: index !== 0,
                    total: COLLECTION_TOTAL_OBJECT,
                    linkSchema: `/public-apis/page`,
                },
            })
        }
        if (index > 0) {
            createPage({
                path: `/public-apis/page/${index + 1}`,
                component: collectionTemplate,
                context: {
                    first: API_PER_PAGE / 2,
                    skip: API_PER_PAGE * index,
                    limit: API_PER_PAGE,
                    pageNumber: index + 1,
                    hasNextPage: index !== collectionChunks.length - 1,
                    hasPreviousPage: index !== 0,
                    total: COLLECTION_TOTAL_OBJECT,
                    linkSchema: `/public-apis/page`,
                },
            })
        }
    })

    const collectionCat = await graphql(`
        {
            allPaApis(filter: { title: { ne: null } }) {
                group(field: category) {
                    fieldValue
                    totalCount
                    nodes {
                        title
                        _id
                        category
                        cat_id
                    }
                }
            }
        }
    `)

    // Handle errors
    if (collectionCat.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
    }

    const collectionCatChunks = collectionCat.data.allPaApis.group

    collectionCatChunks.forEach((obj, index) => {
        const chunks = _.chunk(obj.nodes, API_PER_PAGE)
        chunks.forEach((chunk, catIndex) => {
            const catSlug = chunk[0].cat_id
            if (catIndex === 0) {
                createPage({
                    path: `/public-apis/category/${catSlug}-apis`,
                    component: collectionCatTemplate,
                    context: {
                        first: API_PER_PAGE / 2,
                        skip: API_PER_PAGE * catIndex,
                        limit: API_PER_PAGE,
                        pageNumber: catIndex + 1,
                        hasNextPage: catIndex !== chunks.length - 1,
                        hasPreviousPage: index !== 0,
                        total: obj.totalCount,
                        cat_id: catSlug,
                    },
                })
            }
            if (catIndex > 0) {
                createPage({
                    path: `/public-apis/category/${catSlug}-apis/${catIndex + 1}`,
                    component: collectionCatTemplate,
                    context: {
                        first: API_PER_PAGE / 2,
                        skip: API_PER_PAGE * catIndex,
                        limit: API_PER_PAGE,
                        pageNumber: catIndex + 1,
                        hasNextPage: catIndex !== chunks.length - 1,
                        hasPreviousPage: catIndex !== 0,
                        total: obj.totalCount,
                        cat_id: catSlug,
                    },
                })
            }
        })
    })

    const tools = await graphql(`
        {
            allPaTools(filter: { title: { ne: null } }) {
                edges {
                    node {
                        url
                    }
                }
            }
        }
    `)

    // Handle errors
    if (tools.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
    }

    const toolsChunks = _.chunk(tools.data.allPaTools.edges, TOOLS_PER_PAGE)
    const TOOLS_TOTAL_OBJECT = tools.data.allPaTools.edges.length

    toolsChunks.forEach((chunk, index) => {
        if (index === 0) {
            createPage({
                path: `/tools`,
                component: toolTemplate,
                context: {
                    first: TOOLS_PER_PAGE / 2,
                    skip: TOOLS_PER_PAGE * index,
                    limit: TOOLS_PER_PAGE,
                    pageNumber: index + 1,
                    hasNextPage: index !== toolsChunks.length - 1,
                    hasPreviousPage: index !== 0,
                    total: TOOLS_TOTAL_OBJECT,
                },
            })
        }
        if (index > 0) {
            createPage({
                path: `/tools/page/${index + 1}`,
                component: toolTemplate,
                context: {
                    first: TOOLS_PER_PAGE / 2,
                    skip: TOOLS_PER_PAGE * index,
                    limit: TOOLS_PER_PAGE,
                    pageNumber: index + 1,
                    hasNextPage: index !== toolsChunks.length - 1,
                    hasPreviousPage: index !== 0,
                    total: TOOLS_TOTAL_OBJECT,
                },
            })
        }
    })

    const resources = await graphql(`
        {
            allPaResources(filter: { title: { ne: null } }) {
                edges {
                    node {
                        url
                    }
                }
            }
        }
    `)

    // Handle errors
    if (resources.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
    }

    const resourcesChunks = _.chunk(resources.data.allPaResources.edges, POST_PER_PAGE)
    const RESOURCES_TOTAL_OBJECT = resources.data.allPaResources.edges.length

    resourcesChunks.forEach((chunk, index) => {
        if (index === 0) {
            createPage({
                path: `/resources`,
                component: resourcesTemplate,
                context: {
                    first: POST_PER_PAGE / 2,
                    skip: POST_PER_PAGE * index,
                    limit: POST_PER_PAGE,
                    pageNumber: index + 1,
                    hasNextPage: index !== resourcesChunks.length - 1,
                    hasPreviousPage: index !== 0,
                    total: RESOURCES_TOTAL_OBJECT,
                },
            })
        }
        if (index > 0) {
            createPage({
                path: `/resources/page/${index + 1}`,
                component: resourcesTemplate,
                context: {
                    first: POST_PER_PAGE / 2,
                    skip: POST_PER_PAGE * index,
                    limit: POST_PER_PAGE,
                    pageNumber: index + 1,
                    hasNextPage: index !== resourcesChunks.length - 1,
                    hasPreviousPage: index !== 0,
                    total: RESOURCES_TOTAL_OBJECT,
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

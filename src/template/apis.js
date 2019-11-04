import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/apis.scss'

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const allNodes = data.allMarkdownRemark.nodes
    // const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <SEO title="Home" />
            <div className="apis-container">
                <div className="apis-items">
                    <div className="row">
                        {allNodes.length > 0 &&
                            allNodes.map((node, key) => (
                                <div className="col-md-4" key={key}>
                                    <div className="api-card">
                                        <div
                                            className="card-head"
                                            style={{
                                                backgroundColor: node.frontmatter.featuredImage.colors.lightVibrant,
                                            }}
                                        >
                                            <Link to={node.frontmatter.path}>
                                                <div className="head-content">
                                                    <Img
                                                        fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                                                        style={{
                                                            width: '35px',
                                                            height: '35px',
                                                        }}
                                                    />
                                                    <div className="card-title">
                                                        <h2>{node.frontmatter.title}</h2>
                                                        <span>{node.frontmatter.category}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="card-content">
                                            <p>{node.frontmatter.excert}</p>
                                            <div className="read-more">
                                                <Link to={node.frontmatter.path}>Read Docs</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <Link to={node.frontmatter.path}>
                                        <div className="blog-card">
                                            <Img
                                                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                                                style={{
                                                    left: 0,
                                                    top: 0,
                                                    width: '100%',
                                                    height: '160px',
                                                }}
                                            />
                                            <div className="card-content">
                                                <h2>{node.frontmatter.title}</h2>
                                                <div className="excert">{node.frontmatter.excert}</div>
                                                <div className="read-more">Read More -></div>
                                            </div>
                                        </div>
                                    </Link> */}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export const pageQuery = graphql`
    query($skip: Int, $limit: Int) {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/(docs-pages)/.*\\\\.md$/" } }
            skip: $skip
            limit: $limit
        ) {
            nodes {
                html
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    path
                    title
                    excert
                    category
                    featuredImage {
                        colors {
                            lightVibrant
                        }
                        childImageSharp {
                            fluid(maxWidth: 500) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`

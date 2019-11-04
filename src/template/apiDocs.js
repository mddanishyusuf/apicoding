import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { ExternalLink } from 'react-feather'

import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/api-docs.scss'

const readingTime = require('reading-time')

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    return (
        <Layout>
            <SEO title={frontmatter.title} metadata={frontmatter} />
            <div className="docs-post-container">
                <div className="row">
                    <div className="col-md-3 docs-meta">
                        <Img
                            fluid={frontmatter.featuredImage.childImageSharp.fluid}
                            style={{
                                width: '80px',
                                height: '80px',
                            }}
                        />
                        <h2>{frontmatter.title}</h2>
                        <div className="excert">{frontmatter.excert}</div>
                        <a className="view-original" href={frontmatter.officialDocsLink}>
                            Original Docs <ExternalLink size={15} />
                        </a>
                        <hr />
                        <div className="date">{frontmatter.date}</div>
                    </div>
                    <div className="col-md-9 docs-content">
                        <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "DD-MMM-YY")
                path
                title
                excert
                author
                twitter
                officialDocsLink
                featuredImage {
                    publicURL
                    colors {
                        vibrant
                    }
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                authorPic {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 80) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

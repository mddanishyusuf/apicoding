import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { ExternalLink, Edit } from 'react-feather'

import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/api-docs.scss'

const readingTime = require('reading-time')

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html, fileAbsolutePath } = markdownRemark

    const dirBase = '/src/docs-pages'
    const fileName = fileAbsolutePath.split(dirBase)[1]

    return (
        <Layout>
            <SEO title={`${frontmatter.title} Simple And Easy Docs`} metadata={frontmatter} />
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
                        <div className="date">Last Updated: {frontmatter.date}</div>
                        <div className="edit-this-doc">
                            <div>
                                <Edit size={14} />
                                <a href={`https://github.com/mddanishyusuf/apis-docs/blob/master${dirBase}${fileName}`}>
                                    Edit this docs
                                </a>
                            </div>
                        </div>
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
            fileAbsolutePath
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

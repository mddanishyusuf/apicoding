import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const readingTime = require('reading-time')

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    return (
        <Layout>
            <SEO title={frontmatter.title} metadata={frontmatter} />
            <div className="blog-post-container">
                <div className="blog-post">
                    <h1>{frontmatter.title}</h1>
                    <div className="excert">{frontmatter.excert}</div>
                    <div className="date">
                        {frontmatter.date} | {readingTime(html).text}
                    </div>

                    <div className="about-author">
                        <Img
                            fluid={frontmatter.authorPic.childImageSharp.fluid}
                            style={{
                                width: '40px',
                                height: '40px',
                            }}
                        />
                        <div className="author">
                            <div className="name">{frontmatter.author}</div>
                            <a href={frontmatter.twitter}>Twitter</a>
                        </div>
                    </div>
                    <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
                    <div className="written-by">
                        Written by{' '}
                        <Img
                            fluid={frontmatter.authorPic.childImageSharp.fluid}
                            style={{
                                width: '40px',
                                height: '40px',
                            }}
                        />{' '}
                        {frontmatter.author} (<a href={frontmatter.twitter}>follow on Twitter</a>)
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
                date(formatString: "MMMM DD, YYYY")
                path
                title
                excert
                author
                twitter
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

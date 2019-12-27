import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import readingTime from 'reading-time'
import { BookOpen } from 'react-feather'

import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/blog-post.scss'

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    const stats = readingTime(html)
    return (
        <Layout>
            <SEO title={`${frontmatter.title} Simple And Easy Docs`} metadata={frontmatter} />
            <div className="blog-post-container">
                <div className="blog-section">
                    <div className="blog-meta">
                        <h1>{frontmatter.title}</h1>
                        <div className="post-info">
                            <div className="updated">Updated {frontmatter.date}</div>
                            <div className="reading-time">
                                <BookOpen size={14} />
                                <span>{stats.text}</span>
                            </div>
                            <div className="keywords">
                                {frontmatter.keywords.map((keyword, key) => (
                                    <div className="keyword" key={key}>
                                        {keyword}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="blog-content">
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
                date(formatString: "MMMM D, YYYY")
                path
                title
                excert
                author
                twitter
                officialDocsLink
                keywords
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

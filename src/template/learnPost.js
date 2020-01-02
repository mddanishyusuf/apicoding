import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import readingTime from 'reading-time'
import { BookOpen, Edit } from 'react-feather'

import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/blog-post.scss'

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html, fileAbsolutePath } = markdownRemark
    const dirBase = '/src/blog-posts'
    const fileName = fileAbsolutePath.split(dirBase)[1]
    const stats = readingTime(html)
    return (
        <Layout>
            <SEO title={`${frontmatter.title}`} metadata={frontmatter} />
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
                            <div className="edit-article">
                                <a
                                    href={`https://github.com/mddanishyusuf/apis-docs/tree/master/src/blog-posts${fileName}`}
                                >
                                    <Edit size={14} /> Edit
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="blog-content">
                        <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                    <div className="post-footer">
                        <div className="author">
                            <div className="profile-pic">
                                <Img fluid={frontmatter.authorPic.childImageSharp.fluid} />
                            </div>
                            <a href={frontmatter.twitter} target="_blank" rel="noopener noreferrer">
                                <div className="author-meta">
                                    <h4>{frontmatter.author}</h4>
                                    <span>{frontmatter.twitter}</span>
                                </div>
                            </a>
                        </div>
                        <div className="edit-this-post">
                            <a
                                href={`https://github.com/mddanishyusuf/apis-docs/tree/master/src/blog-posts${fileName}`}
                            >
                                <Edit size={14} /> Edit this article
                            </a>
                        </div>
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

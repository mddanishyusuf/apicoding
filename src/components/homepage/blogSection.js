import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import BlogCard from '../blogCard'
import '../../styles/blog-card.scss'

const BlogSection = () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(blog-posts)/.*\\\\.md$/" } }, limit: 4) {
                    nodes {
                        html
                        frontmatter {
                            date(formatString: "MMMM DD, YYYY")
                            path
                            title
                            excert
                            keywords
                            featuredImage {
                                colors {
                                    lightVibrant
                                }
                                childImageSharp {
                                    fluid(maxWidth: 800) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `
    )

    const list = allMarkdownRemark.nodes

    return (
        <div className="blog-container">
            <div className="blog-items">
                <div className="blog-card-box">
                    {list.length > 0 &&
                        list.map((node, key) => (
                            <div
                                className={`card-box card-style-${key + 1}`}
                                style={{ backgroundColor: node.frontmatter.featuredImage.colors.lightVibrant }}
                                key={key}
                            >
                                <BlogCard node={node} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default BlogSection

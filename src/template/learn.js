import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogCard from '../components/blogCard'
import '../styles/blog-card.scss'

const LearningSection = ({ data }) => {
    const list = data.allMarkdownRemark.nodes

    return (
        <Layout>
            <SEO
                title="Public APIs Docs in Simple Way"
                description="APIs docs is an website for public and free APIs simple documentation. How to use Public APIs and INtegrate into React, Angular, JAMstack Applications in easy and simple way"
            />
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
        </Layout>
    )
}

export default LearningSection

export const pageQuery = graphql`
    query($skip: Int, $limit: Int) {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/(blog-posts)/.*\\\\.md$/" } }
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

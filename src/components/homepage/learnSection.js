import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import LearnCard from '../learnCard'
import '../../styles/learn-card.scss'

const LearningSection = () => {
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
                                <LearnCard node={node} />
                            </div>
                        ))}
                </div>
            </div>
            <br />
        </div>
    )
}

export default LearningSection

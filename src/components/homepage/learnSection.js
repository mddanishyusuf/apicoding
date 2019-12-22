import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import DocCard from '../docCard'

const LearnSection = () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(docs-pages)/.*\\\\.md$/" } }, limit: 6) {
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
    )

    const list = allMarkdownRemark.nodes

    return (
        <div className="apis-container">
            <div className="apis-items">
                <div className="row">
                    {list.length > 0 &&
                        list.map((node, key) => (
                            <div className="col-md-4" key={key}>
                                <DocCard node={node} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default LearnSection

import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LandingSection from '../components/landingSection'
import DocCard from '../components/docCard'
import '../styles/apis.scss'

export default function Template({ data }) {
    const allNodes = data.allMarkdownRemark.nodes
    return (
        <Layout>
            <SEO
                title="Public APIs Docs in Simple Way"
                description="APIs docs is an website for public and free APIs simple documentation. How to use Public APIs and INtegrate into React, Angular, JAMstack Applications in easy and simple way"
            />
            <LandingSection />
            <div className="apis-container">
                <div className="apis-items">
                    <div className="row">
                        {allNodes.length > 0 &&
                            allNodes.map((node, key) => (
                                <div className="col-md-4" key={key}>
                                    <DocCard node={node} />
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

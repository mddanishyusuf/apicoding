import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LearnCard from '../components/learnCard'
import LearningImg from '../images/learning.png'
import '../styles/learn-card.scss'

const LearningSection = ({ data, pageContext }) => {
    const list = data.allMarkdownRemark.nodes
    const page = pageContext.pageNumber

    return (
        <Layout>
            <SEO
                title="Articles about API developments and hacks"
                description="Learn about APIs development. How to build Nodejs API, How to build Python API, API hosting, Free website for Nodejs hosting, list of APIs tools."
                keywords={[
                    'learning',
                    'free',
                    'tutorials',
                    'api',
                    'nodejs',
                    'python',
                    'mongodb',
                    'hosting',
                    'tools',
                    'build',
                ]}
            />
            <div className="blog-container">
                <br />
                <h4>
                    <img src={LearningImg} width="40px" alt="documentation" />
                    Learning
                </h4>
                <ul className="breadcrumb-box">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>{page === 1 ? <span>learning</span> : <Link to="/learn">learning</Link>}</li>
                    {page > 1 && (
                        <li>
                            <span>page {page}</span>
                        </li>
                    )}
                </ul>
                <br />
                <br />
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
            sort: { fields: frontmatter___date, order: DESC }
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

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const DocCard = ({ node }) => (
    <div className="api-card">
        <div
            className="card-head"
            style={{
                background: `linear-gradient(90deg,${node.frontmatter.featuredImage.colors.lightVibrant},#a9a9a9)`,
            }}
        >
            <Link to={node.frontmatter.path}>
                <div className="head-content">
                    <Img
                        fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                        style={{
                            width: '35px',
                            height: '35px',
                        }}
                    />
                    <div className="card-title">
                        <h2>{node.frontmatter.title}</h2>
                        <span>{node.frontmatter.category}</span>
                    </div>
                </div>
            </Link>
        </div>
        <div className="card-content">
            <p>{node.frontmatter.excert}</p>
            <div className="read-more">
                <Link to={node.frontmatter.path}>Read Docs</Link>
            </div>
        </div>
    </div>
)

export default DocCard

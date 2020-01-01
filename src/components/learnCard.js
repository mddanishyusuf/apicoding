import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import readingTime from 'reading-time'
import '../styles/learn-card.scss'

const LearnCard = ({ node }) => {
    const card = node.frontmatter
    const stats = readingTime(node.html)
    return (
        <Link to={`/${card.path}`}>
            <div className="blog-card">
                <div className="card-image">
                    <Img fluid={card.featuredImage.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" />
                </div>
                <div className="card-content">
                    <div className="keywords">
                        {card.keywords !== undefined && card.keywords.map((word, key) => <span key={key}>{word}</span>)}
                    </div>
                    <h2>{card.title}</h2>
                    <div className="reading-time">{stats.text}</div>
                </div>
            </div>
        </Link>
    )
}

export default LearnCard

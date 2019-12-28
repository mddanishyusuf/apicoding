import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { Calendar, Lock, Key, Tag, ExternalLink } from 'react-feather'

import { getHostname } from '../utils/functions'
import '../styles/resource-card.scss'

const ResourceCard = ({ node }) => (
    <div className="resources-card">
        <div className="card-head">
            {node.featuredImg !== null ? (
                <Img
                    fluid={node.featuredImg.childImageSharp.fluid}
                    objectFit="cover"
                    style={{
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '140px',
                    }}
                />
            ) : (
                <div className="card-img" style={{ backgroundImage: `url(${node.image})` }} />
            )}
        </div>
        <div className="content">
            <h2>{node.title}</h2>
            <p>{node.description}</p>
        </div>
        <div className="card-actions">
            <div className="copy">Read Later</div>
            <div className="view">
                <a href={node.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={12} /> View Now
                </a>
            </div>
        </div>
    </div>
)

export default ResourceCard

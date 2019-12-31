import React from 'react'
import Img from 'react-image'
import { Link } from 'gatsby'
import { ExternalLink, Lock, Key, Tag } from 'react-feather'

import { getHostname } from '../utils/functions'
import '../styles/api-card.scss'

const APICard = ({ node }) => (
    <div className="api-card">
        <div
            className="card-head"
            style={{
                background: node.color,
            }}
        >
            <div className="head-content">
                <Img
                    className="card-image"
                    width="30"
                    height="30"
                    alt=""
                    src={[
                        `//logo.clearbit.com/${getHostname(node.link)}`,
                        'https://github.githubassets.com/favicon.ico',
                    ]}
                />
                <div className="card-title">
                    <a href={node.link} target="_blank" rel="noopener noreferrer">
                        <h2>{node.title}</h2>{' '}
                    </a>
                    <ul className="api-meta">
                        {/* <li>
                            <Calendar size={12} /> {node.date}
                        </li> */}
                        <li>
                            <Key size={12} /> {node.auth}
                        </li>
                        <li>
                            <Link to={`/public-apis/category/${node.cat_id}-apis`}>
                                <Tag size={12} /> {node.category}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="external-link">
                    <ExternalLink size={13} />
                </div>
            </div>
        </div>
        <div className="card-content">
            <p>{node.description}</p>
        </div>
    </div>
)

export default APICard

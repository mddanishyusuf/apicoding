import React from 'react'
import Img from 'react-image'

import { ExternalLink } from 'react-feather'
import { getHostname, getIconComp } from '../utils/functions'
import '../styles/tool-card.scss'

const ToolCard = ({ node }) => (
    <div className="tool-card">
        <a href={node.url} target="_blank" rel="noopener noreferrer">
            <div className="head">
                <Img
                    className="card-image"
                    alt={node.title}
                    src={[
                        `//logo.clearbit.com/${getHostname(node.url)}`,
                        'https://github.githubassets.com/favicon.ico',
                    ]}
                />
                <div className="title">
                    <h2>{node.title}</h2>

                    <div className="pricing">
                        {node.pricing.map((type, key) => (
                            <div className="tool-price" key={key}>
                                {type}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="external-link">
                    <ExternalLink size={13} />
                </div>
            </div>

            <div className="card-content">
                <p>{node.description}</p>
            </div>
            <div className="keywords">
                {node.type.map((type, key) => (
                    <div className="keyword" key={key}>
                        {getIconComp(type)} {type}
                    </div>
                ))}
            </div>
        </a>
    </div>
)

export default ToolCard

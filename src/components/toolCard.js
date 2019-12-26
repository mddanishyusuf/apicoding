import React from 'react'
import Img from 'react-image'
import { Link } from 'gatsby'
import { Calendar, Lock, Key, Tag } from 'react-feather'

import { getHostname, getIconComp } from '../utils/functions'

const ToolCard = ({ node }) => (
    <div className="tool-card">
        <div className="head">
            <Img
                className="card-image"
                alt={node.title}
                src={[`//logo.clearbit.com/${getHostname(node.url)}`, 'https://github.githubassets.com/favicon.ico']}
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
    </div>
)

export default ToolCard

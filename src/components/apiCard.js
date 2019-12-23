import React from 'react'
import Img from 'react-image'
import { Link } from 'gatsby'
import { Calendar, Lock, Key, Tag } from 'react-feather'

import { getHostname } from '../utils/functions'

const APICard = ({ node }) => (
    <div className="api-card">
        <div
            className="card-head"
            style={{
                background: '#f5f8fa',
            }}
        >
            <div className="head-content">
                <Img
                    className="card-image"
                    width="30"
                    alt={node.title}
                    src={[
                        `//logo.clearbit.com/${getHostname(node.link)}`,
                        'https://github.githubassets.com/favicon.ico',
                    ]}
                />
                <div className="card-title">
                    <h2>{node.title}</h2>
                    <ul className="api-meta">
                        {/* <li>
                            <Calendar size={12} /> {node.date}
                        </li> */}
                        <li>
                            <Key size={12} /> {node.auth}
                        </li>
                        <li>
                            <Link href="/">
                                <Tag size={12} /> {node.category}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="card-content">
            <p>{node.description}</p>
        </div>
    </div>
)

export default APICard

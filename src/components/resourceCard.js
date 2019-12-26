import React from 'react'
import Img from 'react-image'
import { Link } from 'gatsby'
import { Calendar, Lock, Key, Tag } from 'react-feather'

import { getHostname } from '../utils/functions'

const ResourceCard = ({ node }) => (
    <div className="resources-card">
        <div className="card-head">
            <div className="card-img" style={{ backgroundImage: `url(${node.image})` }} />
        </div>
        <div className="content">
            <h2>{node.title}</h2>
            <p>{node.description}</p>
        </div>
    </div>
)

export default ResourceCard

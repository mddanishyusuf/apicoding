import React from 'react'
import { Link } from 'gatsby'

const ViewMore = ({ text, link }) => (
    <>
        <div className="top-border" />
        <div className="view-all">
            <Link to={link}>{text}</Link>
        </div>
    </>
)

export default ViewMore

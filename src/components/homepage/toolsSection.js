import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ToolCard from '../toolCard'

const ToolsSection = () => {
    const { allPaTools } = useStaticQuery(
        graphql`
            query {
                allPaTools(limit: 9, filter: { title: { ne: null } }) {
                    nodes {
                        added_date(fromNow: true)
                        author
                        date(fromNow: false)
                        description
                        id
                        image
                        logo
                        pricing
                        publisher
                        title
                        type
                        url
                    }
                }
            }
        `
    )

    const list = allPaTools.nodes

    return (
        <div className="apis-container">
            <div className="apis-items">
                <div className="row">
                    {list.length > 0 &&
                        list.map((node, key) => (
                            <div className="col-md-4" key={key}>
                                <ToolCard node={node} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default ToolsSection

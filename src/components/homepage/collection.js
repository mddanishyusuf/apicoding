import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import APICard from '../apiCard'

const CollectionSection = () => {
    const { allPaApis } = useStaticQuery(
        graphql`
            query {
                allPaApis(limit: 9) {
                    nodes {
                        id
                        auth
                        cat_id
                        category
                        color
                        date(fromNow: true)
                        description
                        link
                        slug
                        title
                    }
                }
            }
        `
    )

    const list = allPaApis.nodes

    console.log(list)

    return (
        <div className="apis-container">
            <div className="apis-items">
                <div className="row">
                    {list.length > 0 &&
                        list.map((node, key) => (
                            <div className="col-md-4" key={key}>
                                <APICard node={node} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default CollectionSection

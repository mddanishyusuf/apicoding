import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ResourceCard from '../resourceCard'

const ResourcesSection = () => {
    const { allPaResources } = useStaticQuery(
        graphql`
            query {
                allPaResources(limit: 8, filter: { title: { ne: null } }) {
                    nodes {
                        featuredImg {
                            childImageSharp {
                                fluid(maxWidth: 500) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        _id
                        author
                        date
                        description
                        id
                        image
                        logo
                        publisher
                        published_at(fromNow: true)
                        url
                        title
                    }
                }
            }
        `
    )

    const list = allPaResources.nodes

    return (
        <div className="apis-container">
            <div className="apis-items">
                <div className="row">
                    {list.length > 0 &&
                        list.map((node, key) => (
                            <div className="col-md-3" key={key}>
                                <ResourceCard node={node} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default ResourcesSection

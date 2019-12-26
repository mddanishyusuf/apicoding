import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResourceCard from '../components/resourceCard'

const ResourcesSection = ({ data }) => {
    const list = data.allPaResources.nodes

    console.log(list)

    return (
        <Layout>
            <SEO
                title="Public APIs Docs in Simple Way"
                description="APIs docs is an website for public and free APIs simple documentation. How to use Public APIs and INtegrate into React, Angular, JAMstack Applications in easy and simple way"
            />
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
        </Layout>
    )
}

export default ResourcesSection

export const pageQuery = graphql`
    query($skip: Int, $limit: Int) {
        allPaResources(filter: { title: { ne: null } }, skip: $skip, limit: $limit) {
            nodes {
                featuredImg {
                    childImageSharp {
                        fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                id
                _id
                author
                date(fromNow: false)
                image
                description
                logo
                published_at(fromNow: true)
                publisher
                title
                url
            }
        }
    }
`

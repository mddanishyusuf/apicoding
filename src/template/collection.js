import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import APICard from '../components/apiCard'

const CollectionSection = ({ data }) => {
    const list = data.allPaApis.nodes

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
                                <div className="col-md-4" key={key}>
                                    <APICard node={node} />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CollectionSection

export const pageQuery = graphql`
    query($skip: Int, $limit: Int) {
        allPaApis(filter: { title: { ne: null } }, skip: $skip, limit: $limit) {
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

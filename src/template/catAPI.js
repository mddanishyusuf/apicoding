import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import APICard from '../components/apiCard'
import CollectionImg from '../images/collection.png'

const CollectionCatSection = ({ data }) => {
    const list = data.allPaApis.nodes

    return (
        <Layout>
            <SEO
                title="Free Public APIs collections for software developments"
                description="API Coding has more than 1000 Public APIs collection like movie APIs, weather APIs, music APIs, games and comics APIs, sports APIs, science APIs, open data APIs, etc."
                keywords={[
                    'public',
                    'apis',
                    'development',
                    'free',
                    'coding',
                    'movie',
                    'ip',
                    'location',
                    'open data',
                    'games',
                    'movies',
                ]}
            />
            <div className="apis-container">
                <h4>
                    <img src={CollectionImg} width="40px" alt="Learning" />
                    API Collections
                </h4>
                <p>1000+ public apis colleactions to use into your applications.</p>
                <br />
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

export default CollectionCatSection

export const pageQuery = graphql`
    query($skip: Int, $limit: Int, $cat_id: String) {
        allPaApis(skip: $skip, limit: $limit, filter: { cat_id: { eq: $cat_id } }) {
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

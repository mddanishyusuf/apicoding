import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import APICard from '../components/apiCard'
import Pagination from '../components/pagination'
import CollectionImg from '../images/collection.png'

const CollectionSection = ({ data, pageContext }) => {
    const list = data.allPaApis.nodes
    const page = pageContext.pageNumber
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
                <ul className="breadcrumb-box">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>{page === 1 ? <span>public apis</span> : <Link to="/public-apis">public apis</Link>}</li>
                    {page > 1 && (
                        <li>
                            <span>page {page}</span>
                        </li>
                    )}
                </ul>
                <br />
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
                    <Pagination {...pageContext} />
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

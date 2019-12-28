import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResourceCard from '../components/resourceCard'
import ResourcesImg from '../images/resources.png'

const ResourcesSection = ({ data }) => {
    const list = data.allPaResources.nodes

    return (
        <Layout>
            <SEO
                title="Tutorials and Articles about APIs curated from Internet"
                description="Handcurated collections of articles, videos, tutorials and Knowledge base for apis developments and testing."
                keywords={[
                    'collections',
                    'tutorials',
                    'videos',
                    'apis',
                    'nodejs',
                    'free',
                    'knowledge',
                    'developments',
                    'testing',
                ]}
            />
            <div className="apis-container">
                <h4>
                    <img src={ResourcesImg} width="40px" alt="resources" />
                    Resources
                </h4>
                <p>I love to collect good articles those I found on the internet</p>
                <br />
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

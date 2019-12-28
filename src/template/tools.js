import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ToolCard from '../components/toolCard'

const ToolsSection = ({ data }) => {
    const list = data.allPaTools.nodes

    return (
        <Layout>
            <SEO
                title="Free APIs tools for testing and developments"
                description="Curated collections of APIs tools are requires into apis developments and testing. Free, Windows, MacOS and Linux APIs testing and developments tools"
                keywords={['tools', 'testing', 'developments', 'free', 'windows', 'macos', 'linux', 'collections']}
            />
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
        </Layout>
    )
}

export default ToolsSection

export const pageQuery = graphql`
    query($skip: Int, $limit: Int) {
        allPaTools(filter: { title: { ne: null } }, skip: $skip, limit: $limit) {
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

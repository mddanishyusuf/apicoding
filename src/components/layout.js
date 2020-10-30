import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/layout.scss'

const Layout = ({ children }) => {
    // console.log(props)
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
        <div className="banner" style={{backgroundColor: '#ffcd57', textAlign: 'center', lineHeight: '16px !important'}}><p style={{marginBottom: 0}}><span style={{backgroundColor: "#000", padding: "2px 5px", color: '#fff', fontSize: 11, marginRight: 10, borderRadius: 4}}>NoCodeAPI</span><a  style={{color: '#000'}} href="https://nocodeapi.com" target="_blank">Connect with third-party APIs</a></p></div>
        <div className="main-conatiner">
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
                <main>{children}</main>
                {/* {list down most used apis link for SEO} */}
                <Footer />
            </div>
        </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

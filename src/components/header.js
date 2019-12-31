import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import AdvancedSearch from './advancedSearch'

import '../styles/header.scss'

const drawerOpen = true
const Header = ({ siteTitle }) => (
    <>
        <header>
            <div className="header-navbar">
                <div className={drawerOpen ? 'nav-menu-with-search' : 'nav-menu'}>
                    <Navbar.Brand>
                        <Link to="/">API Coding</Link>
                    </Navbar.Brand>
                    <div className="search-box">
                        <AdvancedSearch />
                    </div>
                    <Navbar>
                        <Nav className="mr-auto">
                            {/* <Nav>
                                <a href="https://nocodeapi.com" target="_blank">
                                    NoCodeAPI
                                </a>
                            </Nav> */}
                        </Nav>
                        <Nav>
                            <Nav>
                                <a href="https://nocodeapi.com" target="_blank">
                                    Feedback
                                </a>
                            </Nav>
                            <Nav>
                                <a href="https://nocodeapi.com" target="_blank">
                                    Twitter
                                </a>
                            </Nav>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        </header>
        <div className="mobile-search">
            <AdvancedSearch />
        </div>
    </>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header

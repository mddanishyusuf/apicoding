import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import '../styles/header.scss'

const Header = ({ siteTitle }) => (
    <header>
        <div className="header-navbar">
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand>
                    <Link to="/">APIs Docs</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
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
                </Navbar.Collapse>
            </Navbar>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header

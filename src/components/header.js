import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Header = ({ siteTitle }) => (
    <header>
        <div className="header-navbar">
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand>
                    <Link to="/">🗎 APIs Docs</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav>
                            <Link to="/marketplace">marketplace</Link>
                        </Nav>
                    </Nav>
                    <Nav>
                        <Nav>
                            <Link to="/pricing">pricing</Link>
                        </Nav>
                        <Nav>
                            <Link to="/blog">blog</Link>
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

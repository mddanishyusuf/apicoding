import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, Nav, Form, InputGroup, FormControl } from 'react-bootstrap'

import '../styles/header.scss'

const Header = ({ siteTitle }) => (
    <header>
        <div className="header-navbar">
            <div className="nav-menu">
                <Navbar.Brand>
                    <Link to="/">API Coding</Link>
                </Navbar.Brand>
                <Form inline>
                    <InputGroup>
                        <InputGroup.Prepend className="search-icon">
                            <InputGroup.Text id="basic-addon1">
                                <svg
                                    width="20px"
                                    height="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 18"
                                    aria-hidden="true"
                                >
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Artboard-1" stroke="#777777" strokeWidth="1.3">
                                            <g id="Group">
                                                <path
                                                    d="M13.4044,7.0274 C13.4044,10.5494 10.5494,13.4044 7.0274,13.4044 C3.5054,13.4044 0.6504,10.5494 0.6504,7.0274 C0.6504,3.5054 3.5054,0.6504 7.0274,0.6504 C10.5494,0.6504 13.4044,3.5054 13.4044,7.0274 Z"
                                                    id="Stroke-3"
                                                />
                                                <path d="M11.4913,11.4913 L17.8683,17.8683" id="Stroke-7" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="youtube apis docs"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1" className="search-btn">
                                Search
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
                </Form>
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
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header

import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Navbar, Nav, Modal, Button, Form } from 'react-bootstrap'
import { Users } from 'react-feather'
import axios from 'axios'

import AdvancedSearch from './advancedSearch'

import '../styles/header.scss'

const Header = ({ siteTitle }) => {
    const [navAdjust, setNavAdjust] = useState('normal')
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    const updateContactInput = e => {
        e.preventDefault()
        if (e.target.name === 'email') {
            setEmail(e.target.value)
        }
        if (e.target.name === 'message') {
            setMessage(e.target.value)
        }
    }
    const submitContactForm = e => {
        e.preventDefault()
        axios
            .post(`https://v1.nocodeapi.com/mddanishyusuf/slack/GgFHCpoeQlmrIjqX`, {
                email,
                message,
            })
            .then(res => {
                setSuccessMsg('Thanks for submitting :)')
                setShow(false)
            })
            .catch(err => {
                setSuccessMsg('Opps! Sorry there are some issues. Can you please drop a email at hello@nocodeapi.com')
            })
    }

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const headNavAdjust = type => {
        setNavAdjust(type)
    }

    const normalNav = type => {
        setNavAdjust(type)
    }

    return (
        <>
            <header>
                <div className="header-navbar">
                    <div className={navAdjust === 'adjust' ? 'nav-menu-with-search' : 'nav-menu'}>
                        <Navbar.Brand>
                            <Link to="/">{siteTitle}</Link>
                        </Navbar.Brand>
                        <div className="search-box">
                            <AdvancedSearch headNavAdjust={headNavAdjust} normalNav={normalNav} />
                        </div>
                        <Navbar>
                            <Nav className="mr-auto">
                                <Nav>
                                    <a
                                        href="https://twitter.com/mddanishyusuf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Twitter
                                    </a>
                                </Nav>
                            </Nav>
                            <Nav>
                                <Nav>
                                    <div className="contribute" onClick={handleShow}>
                                        <Users size={14} /> <span> Contribute</span>
                                    </div>
                                </Nav>
                            </Nav>
                        </Navbar>
                    </div>
                </div>
            </header>
            <div className="mobile-search">
                <AdvancedSearch headNavAdjust={headNavAdjust} normalNav={normalNav} />
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contribution</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitContactForm}>
                        <Form.Group controlId="formBasicEmail" className="custom-input">
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Your email... (optional)"
                                onChange={updateContactInput}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="custom-input">
                            <Form.Control
                                as="textarea"
                                placeholder="API, Tools, Resources links?"
                                rows="3"
                                name="message"
                                onChange={updateContactInput}
                            />
                        </Form.Group>
                        <Button className="btn btn-design login-button" type="submit">
                            Send it
                        </Button>
                        <br />
                        <br />
                        {successMsg}
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header

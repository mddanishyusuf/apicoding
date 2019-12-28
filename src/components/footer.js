import React, { useState } from 'react'
import { Link } from 'gatsby'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { AlertCircle, CheckCircle, Twitter, Mail } from 'react-feather'

import '../styles/footer.scss'

const Footer = () => {
    const [email, setEmail] = useState('')
    const [newsletterWarningMsg, setNewsletterWarningMsg] = useState('')
    const [newsletterSuccessMsg, setNewsletterSuccessMsg] = useState('')

    const emailHandle = e => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const _handleSubmit = async e => {
        e.preventDefault()
        if (email === null || email.length === 0) {
            setNewsletterWarningMsg('please input your email')
        } else {
            setNewsletterWarningMsg('')
            const res = await addToMailchimp(email)
            if (res.result === 'error') {
                setNewsletterSuccessMsg(`${email} is already subscribed to list API Coding Weekly Newsletter.`)
            } else {
                setEmail('')
                setNewsletterSuccessMsg('Successfully Subscribed. Thanks!')
            }

            setTimeout(() => {
                setNewsletterSuccessMsg('')
                setEmail('')
            }, 4000)
        }
    }

    return (
        <footer>
            <div className="footer-section">
                <div className="footer-nav row">
                    <div className="col-md-6">
                        <Link to="/" className="footer-logo">
                            Hey, I'm Mohd Danish
                        </Link>
                        <p>
                            & Front-end Developer. I'm the curator and writer of this website. So, this is all my
                            development experience about APIs.{' '}
                            <a href="https://mohddanish.me/projects" target="_blank" rel="noopener noreferrer">
                                View all my projects.
                            </a>
                        </p>
                        <div className="social-links">
                            <ul>
                                <li>
                                    <a
                                        href="https://twitter.com/mddanishyusuf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Twitter size={12} /> <span>Follow on Twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:mddanishyusuf@gmail.com">
                                        <Mail size={12} /> <span>Email Me</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2" />
                    <div className="col-md-4 newsletter">
                        <h3>Need weekly email for fresh contents?</h3>
                        <form onSubmit={_handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={emailHandle}
                                placeholder="Yes, I'm sharing."
                            />
                            <button type="submit">Send Now</button>
                        </form>
                        <div className="warning-msg">
                            {newsletterWarningMsg !== '' && <AlertCircle size={13} />} {newsletterWarningMsg}
                        </div>
                        <div className="warning-success">
                            {newsletterSuccessMsg !== '' && <CheckCircle size={13} />} {newsletterSuccessMsg}
                        </div>
                    </div>
                </div>
                <div className="row bottom-links">
                    <div className="col-md-6">© 2019 APIs DOcs. All rights reserved.</div>
                    <div className="col-md-6">
                        {/* <ul>
                            <li>
                                <a href="mailto:mddanishyusuf@gmail.com">Contact</a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

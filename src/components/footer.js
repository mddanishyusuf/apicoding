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
                            & I build stuffs related with APIs. So, this is all my
                            development experience about APIs and share all my tricks, hacks, and tutorial here. I share every new article on my twitter.{' '}
                            <a href="https://twitter.com/mddanishyusuf" target="_blank" rel="noopener noreferrer">
                                Follow me on twitter
                            </a>
                        </p>
                    </div>
                </div>
                <div className="row bottom-links">
                    <div className="col-md-6">© 2019-{new Date().getFullYear()} API Coding. All rights reserved.</div>
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

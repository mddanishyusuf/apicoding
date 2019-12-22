import React from 'react'
import { Link } from 'gatsby'
import { FormControl, InputGroup } from 'react-bootstrap'
import { Edit, Mail, Twitter } from 'react-feather'

import '../styles/footer.scss'

const Footer = () => {
    console.log('footer')

    return (
        <footer>
            <div className="footer-section">
                <div className="footer-nav row">
                    <div className="col-md-6">
                        <Link to="/" className="footer-logo">
                            API Coding
                        </Link>
                        <div className="social-links">
                            <ul>
                                <li>
                                    <a href="https://twitter.com/mddanishyusuf">
                                        <Twitter size={12} /> <span>Follow on Twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:mddanishyusuf@gmail.com">
                                        <Mail size={12} /> <span>Email Us</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li>
                                <b>Other Products</b>
                            </li>
                            <li>
                                <a href="https://nocodeapi.com" target="_blank" rel="noopener noreferrer">
                                    nocodeapi.com
                                </a>
                            </li>
                            <li>
                                <a href="https://public-apis.xyz" target="_blank" rel="noopener noreferrer">
                                    public-apis.xyz
                                </a>
                            </li>
                            <li>
                                <a href="https://tweetjobs.dev" target="_blank" rel="noopener noreferrer">
                                    tweetjobs.dev
                                </a>
                            </li>
                            <li>
                                <a href="https://dailyhack.xyz" target="_blank" rel="noopener noreferrer">
                                    dailyhack.xyz
                                </a>
                            </li>
                            <li>
                                <a href="https://apiwithgithub.com/" target="_blank" rel="noopener noreferrer">
                                    apiwithgithub.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li>
                                <b>Menu</b>
                            </li>
                            <li>
                                <a href="https://airtable.com" target="_blank" rel="noopener noreferrer">
                                    Feedback
                                </a>
                            </li>
                            <li>
                                <a href="https://airtable.com" target="_blank" rel="noopener noreferrer">
                                    Need Help?
                                </a>
                            </li>
                        </ul>
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

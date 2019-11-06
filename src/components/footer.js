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
                            APIs Docs
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
                                <a href="https://public-apis.xyz">public-apis.xyz</a>
                            </li>
                            <li>
                                <a href="https://tweetjobs.dev">tweetjobs.dev</a>
                            </li>
                            <li>
                                <a href="https://dailyhack.xyz">dailyhack.xyz</a>
                            </li>
                            <li>
                                <a href="https://apiwithgithub.com/" to="/dashboard/marketplace">
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
                                <a href="">Feedback</a>
                            </li>
                            <li>
                                <a href="">Need Help?</a>
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

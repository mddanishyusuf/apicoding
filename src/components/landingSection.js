import React from 'react'

import DocImg from '../images/documentation.png'
import LearningImg from '../images/learning.png'
import CollectionImg from '../images/collection.png'
import ToolsImg from '../images/tools.png'
import ResourcesImg from '../images/resources.png'

import '../styles/landing-section.scss'

const LandingSection = () => (
    <div className="landing-section">
        <div className="inner-section">
            <div className="text-blocks">
                <div className="main-title">
                    <h1>
                        Learn everything
                        <br /> about APIs
                    </h1>
                    <div className="sub-heading">
                        A single place on the internet to learn about APIs like simple and minimal documentation,
                        learning, public APIs collections, tools & resources.
                    </div>
                </div>
                <div className="features-categories">
                    <div className="feature">
                        <img src={DocImg} width="40px" alt="documentation" /> Documentation
                    </div>
                    <div className="feature">
                        <img src={LearningImg} width="40px" alt="documentation" /> Learning
                    </div>
                    <div className="feature">
                        <img src={CollectionImg} width="40px" alt="documentation" /> Collections
                    </div>
                    <div className="feature">
                        <img src={ToolsImg} width="40px" alt="documentation" />
                        Tools
                    </div>
                    <div className="feature">
                        <img src={ResourcesImg} width="40px" alt="documentation" /> Resources
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default LandingSection

import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LandingSection from '../components/landingSection'
import DocSection from '../components/homepage/docSection'
import LearnSection from '../components/homepage/learnSection'

import DocImg from '../images/documentation.png'
import LearningImg from '../images/learning.png'
import CollectionImg from '../images/collection.png'
import ToolsImg from '../images/tools.png'
import ResourcesImg from '../images/resources.png'

import '../styles/home.scss'

const IndexPage = () => (
    <Layout>
        <SEO title="API Coding — Learn everything about APIs" keywords={[]} />
        <LandingSection />
        <div className="home-container">
            <h4>
                <img src={DocImg} width="40px" alt="documentation" />
                Documentation
            </h4>
            <DocSection />
            <h4>
                <img src={LearningImg} width="40px" alt="documentation" />
                Learning
            </h4>
            <LearnSection />
            <h4>
                <img src={CollectionImg} width="40px" alt="documentation" />
                Collections
            </h4>
            <h4>
                <img src={ToolsImg} width="40px" alt="documentation" />
                Tools
            </h4>
            <h4>
                <img src={ResourcesImg} width="40px" alt="documentation" />
                Resources
            </h4>
        </div>
    </Layout>
)

export default IndexPage

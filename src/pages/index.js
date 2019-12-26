import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LandingSection from '../components/landingSection'
import DocSection from '../components/homepage/docSection'
import LearningSection from '../components/homepage/learnSection'
import CollectionSection from '../components/homepage/collection'
import ToolsSection from '../components/homepage/toolsSection'
import ResourcesSection from '../components/homepage/resourcesSection'
import ViewMore from '../components/viewMore'

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
            <ViewMore text="View More Documentation" link="/docs" />
            <h4>
                <img src={LearningImg} width="40px" alt="documentation" />
                Learning
            </h4>
            <LearningSection />
            <ViewMore text="View More Learning" link="/learn" />
            <h4>
                <img src={CollectionImg} width="40px" alt="Learning" />
                Collections
            </h4>
            <CollectionSection />
            <ViewMore text="View More Collections" link="/public-apis" />
            <h4>
                <img src={ToolsImg} width="40px" alt="Public APIs" />
                Tools
            </h4>
            <ToolsSection />
            <ViewMore text="View More Tools" link="/tools" />
            <h4>
                <img src={ResourcesImg} width="40px" alt="resources" />
                Resources
            </h4>

            <ResourcesSection />
            <ViewMore text="View More Resources" link="/resources" />
        </div>
    </Layout>
)

export default IndexPage

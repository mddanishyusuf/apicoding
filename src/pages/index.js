import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LandingSection from '../components/landingSection'
import DocSection from '../components/homepage/docSection'
import BlogSection from '../components/homepage/blogSection'
import CollectionSection from '../components/homepage/collection'
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
            <BlogSection />
            <ViewMore text="View More Learning" link="/learning" />
            <h4>
                <img src={CollectionImg} width="40px" alt="documentation" />
                Collections
            </h4>
            <CollectionSection />
            <ViewMore text="View More Collections" link="/collections" />
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

import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LearningSection from '../components/homepage/learnSection'

import '../styles/home.scss'

const IndexPage = () => (
    <Layout>
        <SEO
            title="API Coding — Learn everything about APIs Development"
            description="A single place on the internet for APIs Development, Public APIs Collections, APIs tools and Resources from the internet."
            keywords={['apis', 'coding', 'learn', 'tools', 'resources', 'articles', 'development', 'public', 'free']}
        />
        <div className="home-container">
            <LearningSection />
        </div>
    </Layout>
)

export default IndexPage

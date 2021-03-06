import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import featuredImage from '../images/apicoding.png'

function SEO({ description, lang, meta, metadata, title, keywords }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        image
                        twitterUsername
                    }
                }
            }
        `
    )

    console.log(metadata)

    const metaDescription = description || metadata.excert
    const metaImage = metadata.featuredImage === undefined ? featuredImage : metadata.featuredImage.publicURL

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `keywords`,
                    content: keywords,
                },
                {
                    property: `og:image`,
                    content: `https://apicoding.io${metaImage}`,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    property: `twitter:image`,
                    content: `https://apicoding.io${metaImage}`,
                },
            ].concat(meta)}
        >
            <script async defer src="https://sa.apicoding.io/app.js" />
<link href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap" rel="stylesheet"/>
            <noscript>{`
            <img src="https://sa.apicoding.io/image.gif" alt=""/>
        `}</noscript>
        </Helmet>
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
    metadata: {
        excert: '',
    },
    keywords: `public, apis, docs, simple, list, movie, cryptocurrency, bundle APIs, free, open, APIs, github, collective, list, IoT, github, repository, development, games, comics, science, open data, music`,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    metadata: PropTypes.object,
    keywords: PropTypes.array,
}

export default SEO

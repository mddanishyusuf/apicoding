const queries = require('./src/utils/algolia')
require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: `API Coding`,
        description: `Clean and minimal documentation about Public APIs`,
        author: `@mddanishyusuf`,
        siteUrl: `https://apis-docs.com`,
        image: `/images/api-coding.png`,
        twitterUsername: '@mddanishyusuf',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.md`, `.mdx`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `apis-docs`,
                short_name: `apis-docs`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/apis-docs-favicon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Poppins`,
                        variants: [`400`, `500`, `600`, `700`],
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `docs-pages`,
                path: `${__dirname}/src/docs-pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog-posts`,
                path: `${__dirname}/src/blog-posts`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-plugin-extract-image-colors`,
                    {
                        resolve: 'gatsby-remark-embed-video',
                        options: {
                            width: 800,
                            ratio: 1.77,
                            height: 400,
                            related: false,
                            noIframeBorder: true,
                        },
                    },
                    'gatsby-remark-embed-video',
                    'gatsby-remark-responsive-iframe',
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            languageExtensions: [
                                {
                                    language: 'superscript',
                                    extend: 'javascript',
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            // Customize the prompt used in shell output
                            // Values below are default
                            prompt: {
                                user: 'root',
                                host: 'localhost',
                                global: false,
                            },
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 786,
                            backgroundColor: `#ffffff`,
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-source-apiserver',
            options: {
                // Type prefix of entities from server
                typePrefix: 'pa__',

                // The url, this should be the endpoint you are attempting to pull data from
                url: `https://apicoding.glitch.me/entries?page=1&per_page=10000&sort=desc`,

                method: 'get',

                headers: {
                    'Content-Type': 'application/json',
                },

                data: {},

                name: 'apis',

                entityLevel: `docs`,

                verboseOutput: true,
            },
        },
        {
            resolve: 'gatsby-source-apiserver',
            options: {
                // Type prefix of entities from server
                typePrefix: 'pa__',

                // The url, this should be the endpoint you are attempting to pull data from
                url: `https://apicoding.glitch.me/get-tools`,

                method: 'get',

                headers: {
                    'Content-Type': 'application/json',
                },

                data: {},

                name: 'tools',
            },
        },
        {
            resolve: 'gatsby-source-apiserver',
            options: {
                // Type prefix of entities from server
                typePrefix: 'pa__',

                // The url, this should be the endpoint you are attempting to pull data from
                url: `https://apicoding.glitch.me/get-resources`,

                method: 'get',

                headers: {
                    'Content-Type': 'application/json',
                },

                data: {},

                name: 'resources',
            },
        },
        {
            resolve: `gatsby-plugin-algolia`,
            options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                queries,
                chunkSize: 10000, // default: 1000
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint:
                    'https://iamnewbie.us10.list-manage.com/subscribe/post?u=d6aa14d1db1acb93b8125a0e1&amp;id=a494ca665f', // add your MC list endpoint here; see instructions below
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}

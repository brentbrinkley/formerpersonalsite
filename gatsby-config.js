module.exports = {
    // stuff for site wide data goes here
    siteMetadata: {
        title: `coming soon`,
        author: `Brent Brinkley`,
        jobTitle: `Software Engineer`,
        description: `updated fancy personal site`,
        siteUrl: `https://www.brentbrinkley.com/`,
        github: `https://github.com/brentbrinkley`,
        twitter: `https://twitter.com/EchelonIsBack`,
        linkedin: `https://www.linkedin.com/in/brent-brinkley-21932435/`,
        technologies: [
            ['SwiftUI', 'orange'],
            ['JavaScript', 'gold'],
            ['Python', 'green'],
            ['Clojure', 'lightgreen'],
            ['Ruby', 'crimson'],
            ['PHP', 'darkorchid'],
            ['Node', 'seagreen'],
            ['TypeScript', 'royalblue'],
            ['C#', 'darkorchid'],
            ['React', 'deepskyblue'],
            ['Vue', 'mediumaquamarine'],
            ['Elm', 'cadetblue'],
            ['Rails', 'red'],
            ['Django', 'darkgreen'],
            ['Laravel', 'coral'],
            ['SQL', 'midnightblue'],
            ['GraphQL', 'magenta'],
            ['Express', 'gold'],
        ],
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/projects`,
                name: `projects`,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/, // See below to configure properly
                },
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                    `gatsby-plugin-netlify-cms`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: `ADD YOUR TRACKING ID HERE`,
            },
        },
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gatsby Starter Blog`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `content/assets/gatsby-icon.png`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
}

module.exports = {
    siteMetadata: {
        title: `stefans.dev - Stefan Stankovic`,
        description: `Web Design & Development`,
        author: `@st3f4ns`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-plugin-mdx',
        `gatsby-plugin-transition-link`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Stefan Stankovic @stefans.dev`,
                short_name: `stefansdev`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/animoji.jpg`, // This path is relative to the root of the site.
            },
        },
        {
            // Removes unused css rules
            resolve: 'gatsby-plugin-purgecss',
            options: {
                develop: true,
                purgeOnly: ['style/app.scss'],
            },
        }, // must be after other CSS plugins
        `gatsby-plugin-offline`,
    ],
}

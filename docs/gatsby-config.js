module.exports = {
  pathPrefix: '/docs/ios',
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        subtitle: 'Apollo iOS Guide',
        description: 'A guide to using Apollo with iOS',
        githubRepo: 'apollographql/apollo-ios',
        checkLinksOptions: {
          ignore: [
            '/api/Apollo/README/',
            '/api/ApolloWebSocket/README/',
            '/api/ApolloSQLite/README/'
          ]
        },
        sidebarCategories: {
          null: [
            'index',
            'installation',
            'api-reference'
          ],
          Usage:[
            'downloading-schema',
            'initialization',
            'fetching-queries',
            'fragments',
            'watching-queries',
            'mutations',
          ]
        }
      }
    }
  ]
};

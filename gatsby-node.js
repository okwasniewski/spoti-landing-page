const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allPosts: allWpPost {
        nodes {
          content
          id
          title
          slug
        }
      }
    }
  `)

  result.data.allPosts.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve(`./src/templates/postTemplate.tsx`),
      context: {
        content: node.content,
        title: node.title,
      },
    })
  })
}

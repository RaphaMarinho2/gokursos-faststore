import type { GatsbyNode } from 'gatsby'

import { apiSchema } from './src/server'

const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }: any) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }: any) => {
  const { createPage } = actions
  const departmentPage = path.resolve(`src/pages/[...slug].tsx`)
  const result = await graphql(`
    query {
      allContentfulPageDepartmentCategory {
        edges {
          node {
            title
            subtitle
            slug
            seoTitle
            seoDescription
            bannerImageDesktop {
              url
            }
            bannerImageMobile {
              url
            }
          }
        }
      }
    }
  `)

  result.data.allContentfulPageDepartmentCategory.edges.forEach((edge: any) => {
    createPage({
      path: `${edge.node.slug}`,
      component: departmentPage,
      context: {
        title: edge.node.title,
        slug: edge.node.slug,
      },
    })
  })
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions: { setWebpackConfig },
  stage,
}) => {
  const isProfilingEnabled = process.env.GATSBY_STORE_PROFILING === 'true'

  if (stage === 'build-javascript') {
    if (isProfilingEnabled) {
      setWebpackConfig({
        optimization: {
          minimize: false,
          moduleIds: 'named',
          chunkIds: 'named',
          concatenateModules: false,
        },
      })
    } else {
      setWebpackConfig({
        optimization: {
          runtimeChunk: {
            name: `webpack-runtime`,
          },
          splitChunks: {
            name: false,
            cacheGroups: {
              styles: {
                name: `styles`,
                test: /\.(css|scss)$/,
                chunks: `initial`,
                enforce: true,
              },
            },
          },
        },
      })
    }
  }
}

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({
  actions,
}) => {
  actions.setBabelPlugin({
    name: `@vtex/graphql-utils/babel`,
    options: {},
  })
}

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  async (gatsbyApi) => {
    const { actions } = gatsbyApi

    const schema = await apiSchema

    actions.addThirdPartySchema({ schema })
  }

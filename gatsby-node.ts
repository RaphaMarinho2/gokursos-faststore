import 'dotenv/config'
import path from 'path'

import dotenv from 'dotenv'
import type { GatsbyNode } from 'gatsby'

import { apiSchema } from './src/server'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Log out information after a build is done
exports.onPostBuild = ({ reporter }: any) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create department pages dynamically
exports.createPages = async ({ graphql, actions }: any) => {
  const { createPage } = actions
  const departmentPage = path.resolve(`src/pages/[...slug].tsx`)
  const result = await graphql(`
    query {
      allContentfulPageDepartmentCategory {
        edges {
          node {
            slug
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
        slug: edge.node.slug,
      },
    })
  })

  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? process.env.GATSBY_CATALOG_BASE_URL
      : process.env.SERVER_CATALOG_BASE_URL

  // Create product pages dynamically
  const productPage = path.resolve(`src/pages/[slug]/p.tsx`)
  const resultPDP = await fetch(
    `${baseUrl}/odata/Catalog/v1/Products?$select=LinkId`
  ).then((response) => response.json())

  resultPDP.value.forEach((edge: any) => {
    createPage({
      path: `${edge.LinkId}/p`,
      component: productPage,
      context: {
        slug: edge.LinkId,
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

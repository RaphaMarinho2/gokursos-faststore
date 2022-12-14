import path from 'path'

import type { GatsbyNode } from 'gatsby'
import axios from 'axios'
import { copyLibFiles } from '@builder.io/partytown/utils'

import { apiSchema } from './src/server'

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

  // Create product pages dynamically
  const productPage = path.resolve(`src/pages/[slug]/p.tsx`)

  const resultPDP = await axios.get(
    `${
      process.env.GATSBY_CATALOG_BASE_URL ?? 'https://gde.godigitaledu.com'
    }/odata/Catalog/v1/Products?$select=LinkId`
  )

  resultPDP.data.value.forEach((edge: any) => {
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

export const onPreInit: GatsbyNode['onPreInit'] = async ({ reporter }) => {
  reporter.info('Copying Partytown Files')

  await copyLibFiles(path.resolve('./public/~partytown'))
}

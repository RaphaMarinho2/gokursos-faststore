import type { PageProps } from 'gatsby'
import { graphql, navigate } from 'gatsby'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { useEffect } from 'react'
import CreateUser from 'src/components/sections/CreateUser'
import type { RegisterPageQueryQuery } from '@generated/graphql'
import { windowGlobal } from 'src/constants'

import { locale } from '../../store.config'

export type Props = PageProps<RegisterPageQueryQuery>

function Page(props: Props) {
  const {
    data: { site },
    location: { pathname, host },
  } = props

  const title = 'Cadastro'

  useEffect(() => {
    if (windowGlobal?.localStorage.getItem('user')) navigate('/')
  }, [])

  const siteUrl = `https://${host}${pathname}`

  return (
    <>
      {/* SEO */}
      <GatsbySeo
        title={title}
        description={site?.siteMetadata?.description ?? ''}
        titleTemplate={site?.siteMetadata?.titleTemplate ?? ''}
        language={locale}
        canonical={siteUrl}
        openGraph={{
          type: 'website',
          url: siteUrl,
          title,
          description: site?.siteMetadata?.description ?? '',
        }}
      />
      <CreateUser />
    </>
  )
}

export const querySSG = graphql`
  query RegisterPageQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }
  }
`

export default Page

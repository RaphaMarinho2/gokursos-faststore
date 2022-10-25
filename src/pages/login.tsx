import type { PageProps } from 'gatsby'
import { graphql, navigate } from 'gatsby'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { useEffect } from 'react'
import Login from 'src/components/sections/Login'
import { windowGlobal } from 'src/constants'
import type { LoginPageQueryQuery } from '@generated/graphql'
import { useSession } from '@faststore/sdk'

export type Props = PageProps<LoginPageQueryQuery>

function Page(props: Props) {
  const {
    data: { site },
    location: { pathname, host },
  } = props

  const title = 'Login'

  useEffect(() => {
    if (windowGlobal?.localStorage.getItem('user')) navigate('/')
  }, [])

  const { locale } = useSession()
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
      <Login />
    </>
  )
}

export const querySSG = graphql`
  query LoginPageQuery {
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

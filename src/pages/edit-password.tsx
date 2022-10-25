import { useSession } from '@faststore/sdk'
import type { PageProps } from 'gatsby'
import { graphql, navigate } from 'gatsby'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { useEffect } from 'react'
import EditPassoword from 'src/components/sections/EditPassoword'
import type { EditPasswordPageQueryQuery } from '@generated/graphql'
import { windowGlobal } from 'src/constants'

export type Props = PageProps<EditPasswordPageQueryQuery>

function Page(props: Props) {
  const {
    data: { site },
    location: { pathname, host },
  } = props

  const title = 'Editar senha'

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
      <EditPassoword />
    </>
  )
}

export const querySSG = graphql`
  query EditPasswordPageQuery {
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

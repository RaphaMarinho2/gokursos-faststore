import { useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type { HomePageQueryQuery } from '@generated/graphql'
import 'src/styles/pages/homepage.scss'
import HomeProductShelf from 'src/components/sections/HomeProductShelf'
import BlockDesktop from 'src/components/sections/ShelfWithFilter'
import CommonQuestions from 'src/components/sections/CommonQuestions'
import MainBanner from 'src/components/sections/MainBanner'
import BannerMedium from 'src/components/sections/BannerMedium'
import VideoSection from 'src/components/sections/videosection'
import selectedTabs from 'src/mocks/bestSellerList.json'

export type Props = PageProps<HomePageQueryQuery>

function Page(props: Props) {
  const {
    data: {
      site,
      allContentfulCommonQuestions,
      allContentfulVideoSection,
      allContentfulBannerMedium,
      allContentfulMainBanner,
    },
    location: { pathname, host },
  } = props

  const { locale } = useSession()

  const title = site?.siteMetadata?.title ?? ''
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
          title: title ?? '',
          description: site?.siteMetadata?.description ?? '',
        }}
      />
      <JsonLd
        json={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: siteUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/s/?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      {/*
        WARNING: Do not import or render components from any
        other folder than '../components/sections' in here.

        This is necessary to keep the integration with the CMS
        easy and consistent, enabling the change and reorder
        of elements on this page.

        If needed, wrap your component in a <Section /> component
        (not the HTML tag) before rendering it here.
      */}

      <MainBanner nodes={allContentfulMainBanner.nodes} />

      <BlockDesktop
        title="Vendidos"
        pretitle="Mais"
        navigattionTabs={selectedTabs.data}
      />

      <VideoSection nodes={allContentfulVideoSection.nodes} />

      <HomeProductShelf
        pretitle="Confira os cursos"
        title="Lançados recentemente"
      />

      <BannerMedium nodes={allContentfulBannerMedium.nodes} />

      <HomeProductShelf
        pretitle="Disciplina Universitária"
        title="Em caráter especial"
      />

      <CommonQuestions nodes={allContentfulCommonQuestions.nodes} />
    </>
  )
}

export const querySSG = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }
    allContentfulCommonQuestions(sort: { order: ASC, fields: createdAt }) {
      nodes {
        question
        answer {
          answer
        }
      }
    }
    allContentfulMainBanner {
      nodes {
        title
        subtitle
        imageDesktop {
          url
        }
        imageMobile {
          url
        }
        slug
        buttonLabel
        buttonColor
        buttonTextColor
      }
    }
    allContentfulVideoSection {
      nodes {
        video {
          file {
            fileName
            url
          }
        }
        buttonText
        buttonUrl
        content
        title
      }
    }
    allContentfulBannerMedium {
      nodes {
        link
        imagemBannerMedium {
          url
        }
      }
    }
  }
`

Page.displayName = 'Page'
export default mark(Page)

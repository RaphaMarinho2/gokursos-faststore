interface GoogleTagProps {
  tagId: string
}

function GoogleTag({ tagId }: GoogleTagProps) {
  return (
    <>
      <script
        key="google-analytics"
        type="text/partytown"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`}
      />
      <script
        key="google-analytics-config"
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments);}
        gtag('js', new Date()); 
        gtag('config', '${tagId}')`,
        }}
      />
    </>
  )
}

export default GoogleTag

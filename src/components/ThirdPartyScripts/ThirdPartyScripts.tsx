import { Partytown } from '@builder.io/partytown/react'

import storeConfig from '../../../store.config'
import GoogleTag from './GoogleTag'

const tagId = storeConfig.analytics?.tagId

function ThirdPartyScripts() {
  return (
    <>
      <Partytown
        key="partytown"
        // Variables to forward to from main to worker
        forward={['dataLayer.push', 'gtag']}
      />
      <GoogleTag tagId={tagId} />
    </>
  )
}

export default ThirdPartyScripts

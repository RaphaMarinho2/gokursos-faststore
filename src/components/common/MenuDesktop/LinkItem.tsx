import { Link } from '@faststore/ui'
import Icon from 'src/components/ui/Icon'

import type { linkItemType } from './types/types'

const LinkItem = ({ submenuItem }: linkItemType) => {
  return (
    <>
      {submenuItem.submenu.length !== 0 ? (
        <p className="link-item">
          {submenuItem.label}
          <Icon name="CaretRight" width={24} height={24} color="#004E98" />
        </p>
      ) : (
        <Link
          className={
            submenuItem.label === 'Ver todos'
              ? 'link-item__blueText'
              : 'link-item'
          }
          href={submenuItem.link}
        >
          {submenuItem.label}
        </Link>
      )}
    </>
  )
}

export default LinkItem

import type { HTMLAttributes } from 'react'
import { useModal } from 'src/sdk/ui/modal/Provider'
import Button from 'src/components/ui/Button'
import MenuCategoria from 'src/components/icons/Menu-categoria'

interface RegionalizationBarProps extends HTMLAttributes<HTMLDivElement> {
  content?: string
  classes: string
}

export default function RegionalizationBar({
  content,
  classes,
  ...otherProps
}: RegionalizationBarProps) {
  const { setIsRegionalizationModalOpen } = useModal()

  return (
    <div data-fs-regionalization-bar className={classes} {...otherProps}>
      <Button onClick={() => setIsRegionalizationModalOpen(true)}>
        <MenuCategoria />
        {content ? (
          <>
            <span>{content}</span>
            <span>Edit</span>
          </>
        ) : (
          <span>Categorias</span>
        )}
      </Button>
    </div>
  )
}

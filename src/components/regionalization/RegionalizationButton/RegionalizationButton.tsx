import type { HTMLAttributes } from 'react'
import { useModal } from 'src/sdk/ui/modal/Provider'
import Button from 'src/components/ui/Button'
import MenuCategoria from 'src/components/icons/Menu-categoria'

interface RegionalizationButtonProps extends HTMLAttributes<HTMLDivElement> {
  content?: string
  classes: string
}

export default function RegionalizationButton({
  content,
  classes,
  ...otherProps
}: RegionalizationButtonProps) {
  const { setIsRegionalizationModalOpen } = useModal()

  return (
    <div data-fs-regionalization-button className={classes} {...otherProps}>
      <Button
        variant="tertiary"
        size="small"
        icon={<MenuCategoria />}
        iconPosition="left"
        onClick={() => setIsRegionalizationModalOpen(true)}
      >
        {content ? (
          <>
            <span>{content}</span>
          </>
        ) : (
          <span>Categorias</span>
        )}
      </Button>
    </div>
  )
}

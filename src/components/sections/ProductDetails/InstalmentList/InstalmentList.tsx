import { useEffect, useState } from 'react'
import { Button as UIButton, Modal } from '@faststore/ui'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'

import Section from '../../Section'
import IconClose from '../../../icons/IconClose'

interface PriceVariation {
  installment: number
  priceValue: number
}

interface InstalmentListProps {
  priceVariation: PriceVariation[]
}

interface InstalmentItemProps {
  value: PriceVariation
}

export const InstalmentList = ({ priceVariation }: InstalmentListProps) => {
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if (!priceVariation?.length) {
      return
    }

    setModal(false)
  }, [priceVariation.length])

  if (!priceVariation?.length) {
    return <></>
  }

  const showModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <Section className="product-details__price-list">
      <UIButton className="modal-open" onClick={showModal}>
        Ver todas as opções
      </UIButton>
      <Modal isOpen={modal}>
        <div className="product-details__price-modal">
          <div className="product-details__price-list--top">
            <h3>Opções de Parcelamento</h3>
            <UIButton className="modal-close" onClick={closeModal}>
              <IconClose />
            </UIButton>
          </div>
          <div>
            <ul className="product-details__price-list--content">
              {priceVariation
                .sort((a, b) => a.installment - b.installment)
                .map((value: PriceVariation, index: number) => (
                  <InstalmentItem value={value} key={index} />
                ))}
            </ul>
          </div>
        </div>
      </Modal>
    </Section>
  )
}

function InstalmentItem({ value }: InstalmentItemProps) {
  const formattedValue = useFormattedPrice(value?.priceValue)

  return (
    <li>
      {value?.installment !== 1 ? (
        <p>
          {value?.installment}x de {formattedValue}
        </p>
      ) : (
        <p>à vista {formattedValue}</p>
      )}
    </li>
  )
}

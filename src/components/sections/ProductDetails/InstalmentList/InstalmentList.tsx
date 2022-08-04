import { useEffect, useState } from 'react'
import { Button as UIButton, Modal } from '@faststore/ui'

import Section from '../../Section'
import IconClose from '../../../icons/IconClose'

interface PriceVariation {
  installment: number | string
  priceValue: number
}

interface InstalmentListProps {
  priceVariation: PriceVariation[]
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

  const listOfInstalment = priceVariation.map(
    (value: PriceVariation, index: number) => (
      <li key={index}>
        {value?.installment !== 1 ? (
          <p>
            Apenas {value?.installment}x de {value?.priceValue}
          </p>
        ) : (
          <p>à vista {value?.priceValue}</p>
        )}
      </li>
    )
  )

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
              {listOfInstalment}
            </ul>
          </div>
        </div>
      </Modal>
    </Section>
  )
}

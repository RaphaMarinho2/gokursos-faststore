import React from 'react'
import AmexIcon from 'src/components/icons/Amex'
import BoletoIcon from 'src/components/icons/Boleto'
import EloIcon from 'src/components/icons/Elo'
import HipercardIcon from 'src/components/icons/Hipercard'
import MastercardIcon from 'src/components/icons/Mastercard'
import PixIcon from 'src/components/icons/Pix'
import VisaIcon from 'src/components/icons/Visa'

type PaymentIcons = Record<string, React.ReactNode>

export const paymentIcons: PaymentIcons = {
  VISA: <VisaIcon />,
  'BOLETO BANCÁRIO': <BoletoIcon />,
  MASTERCARD: <MastercardIcon />,
  AMEX: <AmexIcon />,
  HIPERCARD: <HipercardIcon />,
  ELO: <EloIcon />,
  PIX: <PixIcon />,
}

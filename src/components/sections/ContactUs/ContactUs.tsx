import { useFormik } from 'formik'

import InstutionalMenu from '../InstutionalMenu'
import Section from '../Section'

import './contact-us.scss'

interface ContactUsProps {
  location: string
}

export default function ContactUs({ location }: ContactUsProps) {
  const formik = useFormik({
    initialValues: {
      customerName: '',
      email: '',
      phone: '',
      requestType: '',
      message: '',
    },
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log('values -->', values)
    },
  })

  return (
    <Section className="layout__content contact-us__content">
      <InstutionalMenu location={location} />
      <div className="contact-us__form-content">
        <h2 className="contact-us__form-title">Envia uma mensagem</h2>
        <form className="contact-us__form" onSubmit={formik.handleSubmit}>
          <div>
            <div className="contact-us__input-container">
              <label className="contact-us__input-label" htmlFor="customerName">
                Nome
              </label>
              <input
                className="contact-us__input"
                id="customerName"
                name="customerName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.customerName}
                placeholder="Digite seu nome"
              />
            </div>
            <div className="contact-us__input-container">
              <label className="contact-us__input-label" htmlFor="email">
                E-mail
              </label>
              <input
                className="contact-us__input"
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Digite seu e-mail"
              />
            </div>
          </div>
          <div className="contact-us__input-container">
            <label className="contact-us__input-label" htmlFor="phone">
              Telefone
            </label>
            <input
              className="contact-us__input"
              id="phone"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phone}
              placeholder="Digite seu telefone"
            />
          </div>
          <div className="contact-us__input-container">
            <label className="contact-us__input-label" htmlFor="requestType">
              Tipo de Solicitação
            </label>
            <select
              className="contact-us__input"
              id="requestType"
              name="requestType"
              onChange={formik.handleChange}
              value={formik.values.requestType}
            >
              <option value="Dúvida">Dúvida</option>
            </select>
          </div>
          <div className="contact-us__input-container">
            <label className="contact-us__input-label" htmlFor="message">
              Messagem
            </label>
            <textarea
              className="contact-us__text-area"
              id="message"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </div>
          <button className="contact-us__submit-button" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </Section>
  )
}

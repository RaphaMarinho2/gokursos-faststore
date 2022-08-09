import { useFormik } from 'formik'

import InstutionalMenu from '../InstutionalMenu'
import Section from '../Section'

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
    <Section className="layout__content">
      <InstutionalMenu location={location} />
      <div>
        <h2>Envia uma mensagem</h2>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <div>
              <label htmlFor="customerName">Nome</label>
              <input
                id="customerName"
                name="customerName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.customerName}
                placeholder="Digite seu nome"
              />
            </div>
            <div>
              <label htmlFor="customerName">E-mail</label>
              <input
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Digite seu e-mail"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone">Telefone</label>
            <input
              id="phone"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phone}
              placeholder="Digite seu telefone"
            />
          </div>
          <div>
            <label htmlFor="requestType">Tipo de Solicitação</label>
            <select
              id="requestType"
              name="requestType"
              onChange={formik.handleChange}
              value={formik.values.requestType}
            >
              <option value="Dúvida">Dúvida</option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Messagem</label>
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </Section>
  )
}

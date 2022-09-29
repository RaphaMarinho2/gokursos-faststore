import './contact-form.scss'

interface ContactFormProps {
  nodes: Array<{
    title: string | null
    subtitle: string | null
    image: {
      url: string | null
      filename: string
    } | null
  }>
}

function ContactForm({ nodes }: ContactFormProps) {
  const [{ title, subtitle, image }] = nodes

  return (
    <div className="contact-form">
      <div className="contact-form__form-section">
        <p className="contact-form__title">{title}</p>
        <p className="contact-form__subtitle">{subtitle}</p>
        <form className="contact-form__form">
          <input type="text" placeholder="Nome da Empresa" required />
          <input type="text" placeholder="CNPJ" required />
          <input type="text" placeholder="E-mail" required />
          <input type="text" placeholder="Telefone de contato" required />
          <textarea
            name=""
            id=""
            rows={8}
            placeholder="Qual a necessidade de treinamento"
            required
          />

          <span className="contact-form__privacy-policy">
            Ao informar meus dados eu concordo com a{' '}
            <a href="/">Política de Privacidade</a>.
          </span>

          <div className="contact-form__checkbox">
            <input type="checkbox" id="agree" name="agree" required />
            <label htmlFor="agree">Eu concordo em receber comunicações</label>
          </div>

          <button type="submit">ENVIAR</button>
        </form>
      </div>
      <div className="contact-form__image-section">
        <img src={image?.url ?? ''} alt={image?.filename ?? 'form-image'} />
      </div>
    </div>
  )
}

export default ContactForm

import { Icon as UIIcon, List as UIList } from '@faststore/ui'
import FacebookIcon from 'src/components/icons/Facebook'
import InstagramIcon from 'src/components/icons/Instagram'
import LinkedinIcon from 'src/components/icons/Linkedin'
import Link from 'src/components/ui/Link'
import { mark } from 'src/sdk/tests/mark'

import FooterLinks from './FooterLinks'

function Footer() {
  return (
    <footer className="footer layout__content">
      <div className="footer__section layout__content">
        <FooterLinks />

        <section className="footer__social">
          <p className="text__title-mini">Redes Sociais</p>
          <UIList variant="unordered">
            <li>
              <Link
                as="a"
                href="https://www.instagram.com/gokursos/"
                title="Go Kursos Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIIcon component={<InstagramIcon />} />
              </Link>
            </li>
            <li>
              <Link
                as="a"
                href="https://www.facebook.com/gokursos"
                title="Go Kursos Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIIcon component={<FacebookIcon />} />
              </Link>
            </li>
            <li>
              <Link
                as="a"
                href="https://www.linkedin.com/company/gokursosoficial/"
                title="Go Kursos LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIIcon component={<LinkedinIcon />} />
              </Link>
            </li>
          </UIList>
        </section>

        <section className="footer__copyright">
          <p>
            Em caso de divergência de preços no site, é válido o valor do
            Carrinho de Compras | Imagens dos produtos são meramente
            ilustrativas.
          </p>
          <p>
            www.gokursos.com | CNPJ:41.421.527/0001-77- 2021 Todos os direitos
            reservados
          </p>
        </section>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer'

export default mark(Footer)

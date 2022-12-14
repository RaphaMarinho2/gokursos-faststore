import { useState } from 'react'
import LoadMore from 'src/components/ui/LoadMore'
import InstitucionalBanner from 'src/pages/institucional/components'

import InstitutionalMenu from '../InstutionalMenu/InstitutionalMenu'
import './style.scss'

interface InstitutionalTermsProps {
  location: string
}

const InstitutionalTerms = ({ location }: InstitutionalTermsProps) => {
  const [maxHeight, setMaxHeight] = useState<string | undefined>(undefined)

  return (
    <>
      <InstitucionalBanner text="Termos de uso" />

      <div className="institucional-terms">
        <InstitutionalMenu location={location} />
        <div>
          <div
            className={`text-container ${maxHeight === '100%' ? 'open' : ''}`}
            style={{ maxHeight }}
          >
            <h1>ATUALIZADO PELA ÚLTIMA VEZ EM 30/09/2020</h1>
            <h1>Aviso de Privacidade - GoKursos</h1>
            <p>
              O site www.gokursos.com é um serviço interativo, oferecido por
              meio de página eletrônica na internet, que disponibiliza aos
              usuários uma variedade de serviços a partir da integração de
              diversas fontes de informação. Os Termos desta declaração serão
              aplicadas quando do uso do conteúdo e serviços do referido site da
              GoKursos . A GoKursos reserva-se no direito de alterar este
              acordo, sem aviso prévio. Deste modo, recomendamos que consulte a
              nossa política de privacidade com regularidade.
            </p>
            <h1>Uso das informações e confidencialidade</h1>
            <ol>
              <li>
                1. A GoKursos poderá, a partir do acesso do USUÁRIO, coletar e
                armazenar todas as informações a seu respeito, inclusive as
                pessoais, tais como: nome, profissão, telefone fixo/celular,
                data de nascimento, nível de escolaridade endereço de e-mail e
                quaisquer outras que possam aperfeiçoar a navegação;
              </li>
              <li>
                2. Todas as suas informações pessoais recolhidas serão usadas
                para ajudar a tornar a sua visita no site da GoKursos mais
                produtiva e agradável;
              </li>
              <li>
                3. A GoKursos garante a segurança das informações recolhidas por
                meio de protocolos de segurança, salvo as de domínio público,
                quando autorizado pelo USUÁRIO ou em circunstâncias previstas
                nesta presente política. Em alguns casos, essa identificação
                será necessária, quando o USUÁRIO adquira um determinado produto
                ou serviço ou ganhe um prêmio cuja entrega, para ser feita,
                necessite de suas informações pessoais. A identificação também
                pode ser pedida para que uma determinada transação comercial
                possa ser efetivada. A revelação dos dados do USUÁRIO poderá
                ainda acontecer devido a exigências legais ou por determinação
                judicial. Podemos também revelar suas informações pessoais para
                quaisquer das empresas que componham o GRUPO SER EDUCACIONAL;
              </li>
              <li>
                4. A GoKursos não concede qualquer garantia relacionada à
                disponibilidade, continuidade de funcionamento ou infalibilidade
                do seu endereço eletrônico, nem que os mesmos serão úteis para a
                realização de qualquer atividade em particular;
              </li>
              <li>
                5. A GoKursos não garante, ainda, a segurança e privacidade do
                conteúdo fora do seu endereço eletrônico, salvo se nos termos
                desta Política de Privacidade, nem que o mesmo será
                ininterrupto, livre de vírus ou outros problemas, erros e
                ataques e, em particular, não garante que terceiros não
                autorizados não possam acessar e, eventualmente, interceptar,
                eliminar, alterar, modificar ou manipular de qualquer modo os
                dados presentes e/ou transmitidos a seus servidores;
              </li>
              <li>
                6. A GoKursos garante que as informações armazenadas não serão,
                sob qualquer pretexto, comercializadas;
              </li>
              <li>
                7. A garantia da confidencialidade dos dados pessoais dos
                utilizadores do nosso site é importante para a GoKursos. Todas
                as informações pessoais relativas a membros, assinantes,
                clientes ou visitantes que usem a GoKursos serão tratadas em
                concordância com a Lei nº 12.965, de 23 de abril de 2014, que
                estabelece princípios, garantias, direitos e deveres para o uso
                da internet no Brasil;
              </li>
              <li>
                8. Não enviaremos mensagens ao seu correio eletrônico, sem
                prévia solicitação e/ou autorização do USUÁRIO;
              </li>
              <li>
                9. Com intuito de aperfeiçoar a disponibilização do Conteúdo, a
                GoKursos poderá, inclusive por questões de segurança,
                restringir, limitar e realizar a suspensão ou bloqueios, totais
                ou parciais, de disponibilização e acesso ao conteúdo;
              </li>
              <li>
                10. A GoKursos poderá descontinuar a disponibilidade ou
                distribuição de qualquer conteúdo ou mesmo o endereço
                eletrônico, a qualquer tempo e sem necessidade de prévio aviso;
              </li>
              <li>
                11. Ao utilizar o conteúdo disponibilizado pela GoKursos de
                qualquer forma, o USUÁRIO expressa sua aceitação plena e sem
                reservas aos Termos Gerais de Utilização aqui propostos. Caso o
                usuário não concorde com algum dos termos e regras aqui
                previstos, não deverá utilizar seu conteúdo.
              </li>
            </ol>
            <h1>Os anúncios</h1>
            <ol>
              <li>
                1. Tal como outros websites, coletamos e utilizamos informação
                contida nos anúncios.
              </li>
              <li>
                2. As informações contidas nos anúncios incluem o seu endereço
                IP (Internet Protocol), o seu ISP (Internet Service Provider,
                como o Sapo, Clix, ou outro), o browser que utilizou ao visitar
                o nosso website (como o Internet Explorer ou o Firefox), o tempo
                da sua visita e que páginas visitou dentro do nosso website.
              </li>
              <li>
                3. Todas as informações constantes nos anúncios são de
                responsabilidade única e exclusiva dos anunciantes.
              </li>
            </ol>
            <h1>Ligações e Sites Terceiros</h1>
            <ol>
              <li>
                1. O site da GoKursos possui ligações para outros sites, a fim
                de proporcionar uma melhor experiência aos usuários;
              </li>
              <li>
                2. A nossa política de privacidade não é aplicada a sites de
                terceiros, ficando o usuário responsável por conhecer e aceitar
                a politica de privacidade do site terceiro.
              </li>
              <li>
                3. A GoKursos não se responsabiliza por conteúdos ou quaisquer
                outras informações geradas por terceiros.
              </li>
            </ol>
            <p>
              Caso você tenha qualquer dúvida em relação a este Aviso de
              Privacidade ou a como tratamos os seus dados pessoais, você pode
              entrar em contato com nosso Encarregado pelo Tratamento de Dados
              Pessoais, através do e-mail privacidade@sereducacional.com. Para
              exercer os seus direitos previstos na LGPD, você poderá enviar sua
              solicitação para o mesmo canal de contato identificado acima.
            </p>
          </div>
          <LoadMore setMaxHeight={setMaxHeight} loadMoreText="CARREGAR MAIS" />
        </div>
      </div>
    </>
  )
}

export default InstitutionalTerms

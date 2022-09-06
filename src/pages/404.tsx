import { GatsbySeo } from 'gatsby-plugin-next-seo'
import SystemError from 'src/components/sections/SystemError'

const eventButton = () => {
  // eslint-disable-next-line no-restricted-globals
  window.location.href = '/'
}

const iconError =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc4IiBoZWlnaHQ9IjE3OCIgdmlld0JveD0iMCAwIDE3OCAxNzgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04OC45OTk5IDE2My4xNjdDMTI5Ljk2MSAxNjMuMTY3IDE2My4xNjcgMTI5Ljk2MSAxNjMuMTY3IDg5QzE2My4xNjcgNDguMDM4OSAxMjkuOTYxIDE0LjgzMzMgODguOTk5OSAxNC44MzMzQzQ4LjAzODggMTQuODMzMyAxNC44MzMzIDQ4LjAzODkgMTQuODMzMyA4OUMxNC44MzMzIDEyOS45NjEgNDguMDM4OCAxNjMuMTY3IDg4Ljk5OTkgMTYzLjE2N1oiIHN0cm9rZT0iI0ZGMzQ1MiIgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMTQuOTU4IDY2Ljc1VjcwLjQ1ODMiIHN0cm9rZT0iI0ZGMzQ1MiIgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYzLjA0MTcgNjYuNzVWNzAuNDU4MyIgc3Ryb2tlPSIjRkYzNDUyIiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTE0Ljk1OCAxMTQuOTU4QzExNC45NTggMTE0Ljk1OCAxMDcuNTQyIDEwMC4xMjUgODkuMDAwMSAxMDAuMTI1QzcwLjQ1ODQgMTAwLjEyNSA2My4wNDE3IDExNC45NTggNjMuMDQxNyAxMTQuOTU4IiBzdHJva2U9IiNGRjM0NTIiIHN0cm9rZS13aWR0aD0iOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='

function Page() {
  return (
    <>
      <GatsbySeo noindex nofollow />
      <SystemError
        icon={iconError}
        title="Ops! Página não encontrada."
        subtitle="A página que você tentou acessar está indisponível ou não existe."
        textButton="Retornar a página inicial"
        eventButton={eventButton}
      />
    </>
  )
}

export default Page

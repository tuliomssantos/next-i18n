import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

export const getLocale = (request: Request) => {
  const requestHeaders = request.headers

  const acceptLanguage =
    requestHeaders.get('accept-language') ?? 'pt-BR, en-US, en;q=0.5'

  const headers = {
    'accept-language': acceptLanguage,
  }

  const languages = new Negotiator({ headers }).languages()

  const locales = ['pt-BR', 'en-US']
  const defaultLocale = 'pt-BR'

  const locale = match(locales, languages, defaultLocale)

  return locale
}

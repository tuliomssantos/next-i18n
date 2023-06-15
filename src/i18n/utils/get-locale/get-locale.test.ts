import { describe, it, expect } from 'vitest'

import { getLocale } from './'

describe('getLocale', () => {
  it('should return pt-BR', () => {
    const req = {
      headers: {
        'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        get: (_header: string) => {
          return 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
        },
      },
    } as unknown as Request

    const locale = getLocale(req)

    expect(locale).toBe('pt-BR')
  })

  it('should return en-US', () => {
    const req = {
      headers: {
        'accept-language': 'en-US,en;q=0.9',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        get: (_header: string) => {
          return 'en-US,en;q=0.9'
        },
      },
    } as unknown as Request

    const locale = getLocale(req)

    expect(locale).toBe('en-US')
  })

  it('should return pt-BR when accept-language its not pt-BR, en-US or en', () => {
    const req = {
      headers: {
        'accept-language': 'es-ES,es;q=0.9',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        get: (_header: string) => {
          return 'es-ES,es;q=0.9'
        },
      },
    } as unknown as Request

    const locale = getLocale(req)

    expect(locale).toBe('pt-BR')
  })

  it('should return pt-BR when accept-language header is not present', () => {
    const req = {
      headers: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        get: (_header: string) => {
          return undefined
        },
      },
    } as unknown as Request

    const locale = getLocale(req)

    expect(locale).toBe('pt-BR')
  })
})

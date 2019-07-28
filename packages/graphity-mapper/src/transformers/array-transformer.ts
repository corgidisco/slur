import { ValueTransformer } from '../interfaces/relater'

export const arrayTransformer: ValueTransformer<any, any[]> = {
  to(source: any): any[] {
    if (source === null || typeof source === 'undefined') {
      return source
    }
    if (Array.isArray(source)) {
      return source
    }
    return [source]
  },
}

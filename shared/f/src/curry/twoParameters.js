import oneParameter from './oneParameter'
import { isGap } from '@kuba/f/src/gap'

export default (func) =>
  function callback (a, b) {
    switch (arguments.length) {
      case 0:
        return callback
      case 1:
        return isGap(a)
          ? callback
          : oneParameter((...args) => func(a, ...args))
      default:
        return isGap(a) && isGap(b)
          ? callback
          : isGap(a)
            ? oneParameter((_a, ...args) => func(_a, b, ...args))
            : isGap(b)
              ? oneParameter((...args) => func(a, ...args))
              : func(...arguments)
    }
  }

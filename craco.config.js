const path = require('path')

const resolvePath = (p) => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('src/components'),
      '@types': resolvePath('src/types'),
      '@services': resolvePath('src/services'),
      '@config': resolvePath('src/config'),
      '@assets': resolvePath('src/assets'),
      '@utils': resolvePath('src/utils'),
      '@pages': resolvePath('src/pages'),
      '@router': resolvePath('src/router'),
      '@hooks': resolvePath('src/hooks'),
      '@store': resolvePath('src/store'),
      '@ui': resolvePath('src/components/ui'),
      '@screens': resolvePath('src/components/screens'),
      '@layout': resolvePath('src/components/layout'),
      '@shared': resolvePath('src/components/shared'),
      '@i18n': resolvePath('src/i18n'),
    }
  }
}
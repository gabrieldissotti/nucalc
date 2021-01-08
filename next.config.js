const path = require('path')
const withImages = require('next-images')
const withPWA = require('next-pwa')

module.exports = withPWA({
  ...withImages(),
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  pwa: {
    dest: 'public'
  },
})
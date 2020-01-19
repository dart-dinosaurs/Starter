const path = require('path')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@sections': path.resolve(__dirname, 'src/sections'),
          '@styles': path.resolve(__dirname, 'src/styles')
        }
      }
    }
  ]
}
import React from 'react'
import Helmet from "react-helmet"
import { prefixLink } from 'gatsby-helpers'
import { GoogleFont, TypographyStyle } from 'react-typography'
import typography from './utils/typography'
import SNIPCART_API_KEY from './utils/constants'

const BUILD_TIME = new Date().getTime()

import '/css/images.css'

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render () {
    const { body } = this.props
    const head = Helmet.rewind();

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
          <link id="snipcart-theme" type="text/css" href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
          <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" type="text/javascript" id="snipcart" data-api-key={SNIPCART_API_KEY}></script>
        </body>
      </html>
    )
  },
})

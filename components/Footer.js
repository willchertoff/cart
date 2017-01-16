import React, { Component } from 'react'
import { rhythm } from 'utils/typography'

import '../css/footer.css'

const Footer = () =>
  <div className="footer" style={{
    marginTop: rhythm(1)
  }}>
    <hr
      style={{
        marginBottom: rhythm(2),
        }}
    />
    <ul style={{
      listStyle: 'none',
      paddingLeft: 0,
      display: 'block',
      margin: 'auto',
      fontSize: rhythm(1/2)
    }}>
      <li><a href="http://willchertoff.com" target="_blank">VSCO</a></li>
      <li><a href="http://willchertoff.com" target="_blank">Instagram</a></li>
      <li><a href="http://willchertoff.com" target="_blank">Web Development</a></li>
      <li><a href="http://willchertoff.com" target="_blank">Email</a></li>
    </ul>
  </div>

export default Footer;
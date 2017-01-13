import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={prefixLink(profilePic)}
          alt={`author ${config.authorName}`}
          style={{
            margin: 'auto',
            borderRadius: rhythm(2),
            marginBottom: rhythm(2),
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Essence is a collection of photos from <strong>{config.authorName}</strong> who lives and develops web applications in Portland, Oregon. <a href="https://instagram.com/behind_your_eye">You should follow him on Instagram</a>
      </p>
    )
  }
}

export default Bio

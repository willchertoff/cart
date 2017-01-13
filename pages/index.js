import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import Helmet from "react-helmet"
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'
import Bio from 'components/Bio'
import Image from 'components/Image';

import '../css/links.css'
import '../css/images.css'

class BlogIndex extends React.Component {
  render () {
    const pageLinks = []
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404') || access(page, 'data.date')) {
        const title = access(page, 'data.title') || page.path
        pageLinks.push(
          <li
            key={page.path}
            style={{
              marginBottom: rhythm(1/4),
              listStyle: 'none',
            }}
          >
            <Link className='hoverMe' style={{boxShadow: 'none', display: 'block'}} to={prefixLink(page.path)}>
              <span style={{fontSize: rhythm(1/2)}}>{page.data.title}</span>
              <Image
                src={`${page.path}/${page.data.image}`}
                style={{
                  display: 'block',
                  maxHeight: '400px',
                  margin: 'auto',
                }}
                />
            </Link>
          </li>
        )
      }
    })
    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            {"name": "description", "content": "Sample blog"},
            {"name": "keywords", "content": "blog, articles"},
          ]}
        />
        <Bio />
        <ul>
          {pageLinks}
        </ul>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

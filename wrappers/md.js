import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import classNames from 'classnames';
import Bio from 'components/Bio'
import Image from 'components/Image'

import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }
  componentDidMount() {
    console.log('mounted');
    this.setState({ loaded: true });
  }
  render () {
    const { route } = this.props
    const post = route.page.data
    const { className, ...props } = this.props;
    const rootClassName = classNames(className, 'image', 'markdown', {
      'image-loaded': this.state.loaded,
    });

    return (
      <div className={rootClassName}>
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <h1 style={{marginTop: 0}}>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <Image
          src={post.image}
          style={{
            margin: '0 auto',
            display: 'block'
          }}
        />
        <em
          style={{
            display: 'block',
            marginBottom: rhythm(2),
          }}
        >
          Posted {moment(post.date).format('MMMM D, YYYY')}
        </em>
        <hr
          style={{
            marginBottom: rhythm(2),
          }}
        />
        <a 
          href='#' 
          className='snipcart-add-item'
          data-item-id={post.id}
          data-item-price={post.price}
          data-item-image={post.image}
          data-item-name={post.title}
          data-item-description={post.description}
          data-item-url={"http://snipcart-gatsby.netlify.com" + post.path}>
          Buy
        </a>
        <ReadNext post={post} pages={route.pages} />
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper

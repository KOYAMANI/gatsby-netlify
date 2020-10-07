import React from "react"
import PropTypes from "prop-types"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share"

const Share = ({ socialConfig, tags }) => (
  <div className="post-social">
    <FacebookShareButton url={socialConfig.config.url} quote={socialConfig.config.title} hashtag={""}>
      <FacebookIcon size={32} round={true}/>
    </FacebookShareButton>
    <TwitterShareButton url={socialConfig.config.url} quote={socialConfig.config.title} hashtag={""}>
     <TwitterIcon size={32} round={true}/>
    </TwitterShareButton>
    <LineShareButton url={socialConfig.config.url} quote={socialConfig.config.title} hashtag={""}>
     <LineIcon size={32} round={true}/>
    </LineShareButton>
  </div>
)

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitter: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
}
Share.defaultProps = {
  tags: [],
}

export default Share
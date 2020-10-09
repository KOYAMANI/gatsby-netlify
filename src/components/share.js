// import React from "react"
// import PropTypes from "prop-types"
// import {
//   FacebookShareButton,
//   FacebookIcon,
//   TwitterShareButton,
//   TwitterIcon,
//   LineShareButton,
//   LineIcon,
// } from "react-share"

// const Share = ({ socialConfig, tags }) => (
//   <div className="post-social">
//     <FacebookShareButton url={socialConfig.config.url} quote={socialConfig.config.title} hashtag={""}>
//       <FacebookIcon size={32} round={true}/>
//     </FacebookShareButton>
//     <TwitterShareButton url={socialConfig.config.url} quote={socialConfig.config.title} hashtag={""}>
//      <TwitterIcon size={32} round={true}/>
//     </TwitterShareButton>
//     <LineShareButton url={socialConfig.config.url} quote={socialConfig.config.title} hashtag={""}>
//      <LineIcon size={32} round={true}/>
//     </LineShareButton>
//   </div>
// )

// Share.propTypes = {
//   socialConfig: PropTypes.shape({
//     twitter: PropTypes.string.isRequired,
//     config: PropTypes.shape({
//       url: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//     }),
//   }).isRequired,
//   tags: PropTypes.arrayOf(PropTypes.string),
// }
// Share.defaultProps = {
//   tags: [],
// }

// export default Share

import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  FacebookIcon,
  TwitterIcon,
  LineIcon,
} from "react-share";

const Share = props => {
  const articleTitle = props.title;
  const articleUrl = props.url;
  const articleDescription = props.description;
  const iconSize = 32;

  return (
    <React.Fragment>
      {/* <h3>SHARE!!</h3> */}
      <div className="social-links">
        {/* <div className="social-links__icon"> */}
          <TwitterShareButton url={articleUrl} title={articleTitle}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
        {/* </div>
        <div className="social-links__icon"> */}
          <FacebookShareButton url={articleUrl} quote={articleDescription}>
            <FacebookIcon round size={iconSize} />
          </FacebookShareButton>
        {/* </div>
        <div className="social-links__icon"> */}
          <LineShareButton url={articleUrl} quote={articleDescription}>
            <LineIcon round size={iconSize} />
          </LineShareButton>
        {/* </div> */}
      </div>
    </React.Fragment>
  );
};

export default Share;
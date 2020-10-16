import React from "react"
import { Link, graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react";

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
//SNS share buttons -NOT using-
// import Share from "../components/share"

// import Img from "gatsby-image"



const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  // const thumbnailIFluid = post.frontmatter.thumbnail.childImageSharp.fluid

  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const siteUrl = data.site.siteMetadata.siteUrl;
  const siteUrl = `https://yutaro-log.com`;
  const { slug, previous, next } = pageContext;
  const disqusShortname = "https-yutaro-log-com";
  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title,
  };

  return (
    <Layout location={location}　>
      {/* title={siteTitle}  */}
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          {/* <Img fluid={thumbnailIFluid} /> */}
          <br></br>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        {/* SNS share buttons -NOT using- */}
        {/* <Share
          title={post.frontmatter.title}
          url={`${siteUrl}${slug}`}
          description={post.excerpt}
        /> */}
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        description
      }
    }
  }
`
// date(formatString: "MMMM DD, YYYY")

// thumbnail {
//   childImageSharp {
//     fluid(maxWidth: 800) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }

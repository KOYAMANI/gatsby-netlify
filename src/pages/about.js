import React from "react"
// import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ location, title }) => (

  <Layout location={location} >
    <SEO title="about" />
    <div>
      <h1
        style={{
          margin: "0 0 1em 0",
        }}
      >
        About me
      </h1>
      <ul
        style={{
          margin: "1em 0",
          padding: "0 0 0 1.5em",
        }}
      >
        <li>I'm Yutaro, a Software Engineering student at <a href="https://code.berlin/en/">CODE University of Applied Science</a> in Berlin, Germany.
          <br></br>For the past few years, I'd been working as a sales executive for mechanical components in Panasonic for two years in Japan and one year in Singapore. </li>
      <br></br>
      </ul>
    </div>
  </Layout>
)

export default AboutPage
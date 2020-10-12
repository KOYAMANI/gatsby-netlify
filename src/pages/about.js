import React from "react"
// import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ location, title }) => (

  <Layout location={location} title="about">
    <SEO title="about" />
    <div>
      <h1
        style={{
          margin: "0 0 1em 0",
        }}
      >
        About me
      </h1>
      <p>
        自己紹介
      </p>
      <ul
        style={{
          margin: "1em 0",
          padding: "0 0 0 1.5em",
        }}
      >
        <li>1993年生まれ。</li>
        <li>2017年3月 5年間通った大学を卒業。</li>
        <li>2017年4月 家電メーカーに就職。関西で部品事業の国内外法人営業を担当。</li>
        <li>2019年7月 シンガポール拠点に海外駐在員として出向。</li>
        <li>2020年7月 退職。同9月より<a href="https://code.berlin/en/">CODE University of Applied Science</a>@ベルリン留学。エンジニア目指して絶賛修行中。</li>
      <br></br>
      </ul>
    </div>
  </Layout>
)

export default AboutPage
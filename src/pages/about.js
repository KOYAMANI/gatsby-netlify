import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
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
      <p>1993年11月生まれ</p>
      <p>2017年3月 5年間通った大学を卒業</p>
      <p>2017年4月 家電メーカーに就職。関西で部品事業の国内外法人営業を担当。</p>
      <p>2019年7月 シンガポール拠点に海外駐在員として出向。</p>
      <p>2020年7月 退職し同9月よりドイツベルリンの大学にてSoftware Engineering専攻。エンジニア目指して修行中</p>
      
      {/* <ul
        style={{
          margin: "1em 0",
          padding: "0 0 0 1.5em",
        }}
      >
        <li>
          <a href="https://twitter.com/isaacmaenu">twitter</a>
        </li>
        <li>
          <a href="https://github.com/IsaacTakuma">github</a>
        </li>
      </ul> */}
    </div>
  </Layout>
)

export default AboutPage
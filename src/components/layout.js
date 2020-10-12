import React from "react"
import { Link } from "gatsby" 
import NavBar from "./navbar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath} style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      marginTop: 80,
      // maxWidth: rhythm(30),
      // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      backgroundColor: `#fff`, //真ん中
      boxShadow: `0 0 10px rgba(0,0,0,0.2)`,
    }}>
      <NavBar />
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, copyright yutaro-log
        {/* {` `} */}
        {/* <a href="https://www.gatsbyjs.com">Gatsby</a> */}
      </footer>
    </div>
  )
}

export default Layout
// export default ({ children }) => (
//   <div className="page-root">
//       <Header />
//       <div className="page-body">
//           {children}
//       </div>
//   </div>
// )
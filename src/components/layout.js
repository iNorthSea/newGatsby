/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  // 调用 gatsby-config.js 中 siteMetadata
  // 加入 Contentful 动态数据 ，适当位置使用 .map展开，本项目案例在 Footer.js 中
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          description
          kewords
        }
      }
      allContentfulFootLink(sort:  {fields: [createdAt], order: [ASC]}) {
        edges {
          node {
            title
            url
            createdAt
          }
        }
      }
    }
  `)

  return (
      <div>
        <Header />
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
        <Footer data={data} />
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
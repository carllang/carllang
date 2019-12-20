/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Particles from "react-particles-js"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ backgroundColor: "#111111" }}>
      <Particles
        style={{
          position: "absolute",
          top: "100px",
          right: "10px",
        }}
        width="100%"
        height="100%"
        params={{
          particles: {
            number: {
              value: 100,
            },
            size: {
              value: 10,
            },
            color: {
              value: ["#2c60c1", "#333333", "999999"],
            },
          },
        }}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          backgroundColor: "#111111",
        }}
      >
        <main
          style={{
            minHeight: "900px",
            margin: "150px 0 0",
          }}
        >
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" style={{ color: "#ffffff" }}>
            Gatsby
          </a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

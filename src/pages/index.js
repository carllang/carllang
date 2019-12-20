import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my portfolio site</p>
    <p>Let's build something great</p>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          marginBottom: `1.45rem`,
          opacity: "1",
          zIndex: "999",
          width: `300px`,
        }}
      >
        <Image />
      </div>
      <h1>Under construction</h1>
    </div>
  </Layout>
)

export default IndexPage

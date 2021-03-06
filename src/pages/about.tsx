import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const AboutPage = () => (
  <Layout>
    <>
      <SEO title="About" />
      <h1>About Page</h1>
      <ul>
        <li>
          <Link to="/" activeStyle={{ color: "red" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about/" activeStyle={{ color: "red" }}>
            About
          </Link>
        </li>
      </ul>
    </>
  </Layout>
)

export default AboutPage

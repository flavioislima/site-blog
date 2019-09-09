import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug={"/about/"}
      title={"Post Title"}
      description={"Post Description"}
      category={"Misc"}
      background={"green"}
      date={"3 days ago"}
      timeToRead={5}
    />
  </Layout>
)

export default IndexPage

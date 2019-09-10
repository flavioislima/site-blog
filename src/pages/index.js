import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostItem from "../components/PostItem"

const IndexPage = () => {
  const {
    allMarkdownRemark: { edges }
  } = useStaticQuery(query)

  return (
    <Layout>
      <SEO title="Home" />
      {edges.map(
        ({
          node: {
            frontmatter: { title, description, category, background, date },
            timeToRead
          }
        }) => (
          <PostItem
            slug={"/about/"}
            title={title}
            description={description}
            category={category}
            background={background}
            date={date}
            timeToRead={timeToRead}
          />
        )
      )}
    </Layout>
  )
}

const query = graphql`
  query getPosts {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            background
            category
            date(formatString: "dddd[,] MMMM DD of YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default IndexPage

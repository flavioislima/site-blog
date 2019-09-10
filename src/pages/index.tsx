import * as React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/Seo"
import { EdgesProps } from "../types"

const IndexPage = () => {
  const {
    allMarkdownRemark: { edges }
  } = useStaticQuery(query)

  return (
    <Layout>
      <>
        <SEO title="Home" />
        {edges.map(
          (
            {
              node: {
                frontmatter: { title, description, category, background, date },
                timeToRead
              }
            }: EdgesProps,
            i: number
          ) => (
            <PostItem
              key={i}
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
      </>
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

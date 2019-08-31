import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        author
        description
        title
        position
      }
    }
  }
`

const Profile = () => {
  const siteMetada = useStaticQuery(query)
  const {
    site: {
      siteMetadata: { title, position, description, author },
    },
  } = siteMetada
  return (
    <div className="Profile-Wrapper">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{author}</p>
      <p>{position}</p>
    </div>
  )
}

export default Profile

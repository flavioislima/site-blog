import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

import * as S from "./styled"

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
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{author}</S.ProfilePosition>
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile

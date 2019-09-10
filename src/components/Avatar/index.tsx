import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.jpeg" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar

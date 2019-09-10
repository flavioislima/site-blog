import * as React from "react"

import links from "./content"
import Icons from "./Icons"

import * as S from "./styled"

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {links.map(({ name, url, id }) => {
        const Icon = Icons[name]
        return (
          <S.SocialLinksItem key={id}>
            <S.SocialLinksLink
              href={url}
              title={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks

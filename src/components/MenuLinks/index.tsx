import * as React from "react"

import links from "./content"

import * as S from "./styled"

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map(({ id, label, url }) => (
        <S.MenuLinksItem key={id}>
          <S.MenuLinksLink to={url} activeClassName="active">
            {label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks

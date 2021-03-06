import * as React from "react"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { Grid } from "styled-icons/boxicons-solid/Grid"
import { Home } from "styled-icons/boxicons-solid/Home"
import { LightBulb as Light } from "styled-icons/octicons/LightBulb"

import * as S from "./styled"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Back Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search" title="Search Posts">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Change Theme">
        <Light />
      </S.MenuBarItem>
      <S.MenuBarItem title="Change Layout">
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem title="Go to the Top">
        <Arrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar

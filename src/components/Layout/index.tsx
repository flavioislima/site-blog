import * as React from "react"

import GlobalStyles from "../../styles/global"
import MenuBar from "../MenuBar"
import Sidebar from "../Sidebar"
import * as S from "./styled"

interface Props {
  children: React.ReactChild
}

const Layout = ({ children }: Props) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

export default Layout

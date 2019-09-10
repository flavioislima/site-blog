import * as React from "react"

import { PostItemProps } from "../../types"
import * as S from "./styled"

const PostItem: React.FC<PostItemProps> = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description
}) => {
  return (
    <S.PostItemLink to={slug}>
      <S.PostItemWrapper>
        <S.PostItemTag background={background}>{category}</S.PostItemTag>
        <S.PostItemInfo>
          <S.PostItemDate>{`${date} - ${timeToRead} minutes to read`}</S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  )
}

export default PostItem

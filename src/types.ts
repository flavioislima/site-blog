export interface PostItemProps {
  slug: string
  category: string
  date: string
  timeToRead: string
  title: string
  description: string
  background?: string
}

export interface NodeProps {
  frontmatter: PostItemProps
  timeToRead: string
}

export interface EdgesProps {
  node: NodeProps
}

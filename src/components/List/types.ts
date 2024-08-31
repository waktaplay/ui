export interface IElementProps {
  icon: string
  content: string
  view: boolean
  createdAt: string
  category: string
  type: "calendar" | "favorite"
  time?: string | null
  link?: string
}

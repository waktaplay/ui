import styled from "styled-components"
import NotificationElement from "./Element"

const NotificationWrapper = styled.div`
  width: 354px;
  display: flex;
  flex-direction: column;
`

interface IElementProps {
  itemList: {
    icon: string
    content: string
    view: boolean
    createdAt: string
    category: string
    type: "calendar" | "favorit"
    time?: string | null
    link?: string
  }[]
}

const Notification = ({ itemList }: IElementProps) => {
  return (
    <NotificationWrapper>
      {itemList.map((item, i) => {
        return (
          <NotificationElement
            key={`notification-${i}`}
            icon={item.icon}
            content={item.content}
            view={item.view}
            createdAt={item.createdAt}
            category={item.category}
            time={item.time}
            type={item.type}
            link={item.link}
          />
        )
      })}
    </NotificationWrapper>
  )
}

export default Notification

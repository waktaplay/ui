import styled from "styled-components"

import PopupSVG from "@/assets/icons/popup.svg"
import Calender from "@/assets/icons/schedule_calendar.svg"

const ElementWrapper = styled.div`
  height: 40px;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 18px;
  padding: 22px 18px;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`

const IconWrapper = styled.div`
  flex: 0 0 40px;
  height: 40px;
  position: relative;
`

const DotWrapper = styled.div`
  width: 4px;
  height: 4px;
  background: #47f998;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
`

const IconBgWrapper = styled.div`
  background: #303133;
  border-radius: 50%;
  height: 40px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const BodyWrapper = styled.div`
  flex: 0 0 260px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 40px;
  overflow: hidden;
`

const InformationsWrapper = styled.div`
  display: flex;
  flex: 0 0 12px;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 500;

  .category {
    flex: 0 0 fit-content;
    font-size: 10px;
    color: #d3d5db;
  }

  .createdAt {
    flex: 0 0 fit-content;
    font-size: 9px;
    color: #b4b8c2;
  }
`

const DescriptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-weight: 600;
  justify-content: flex-start;
  height: 18px;
  font-size: 16px;

  .time {
    color: #95ffad;
    flex: 0 0 fit-content;
  }

  .content {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
    font-weight: 600;
    font-size: 16px;
  }

  .link {
    flex: 0 0 18px;
    &:hover {
      cursor: pointer;
    }
  }
`

export interface IElementProps {
  icon: string
  content: string
  view: boolean
  createdAt: string
  category: string
  type: "calendar" | "favorit"
  time?: string | null
  link?: string
}

const NotificationElement = ({ icon, content, view, createdAt, category, type, time, link }: IElementProps) => {
  // link icon click event - move to link
  const onClickLink = () => {
    location.href = link
  }

  return (
    <ElementWrapper>
      <IconWrapper>
        {!view && <DotWrapper />}
        <IconBgWrapper>
          {type === "calendar" && <img className="calendar" src={Calender} width={24} height={24} />}
          {type === "favorit" && <img src={icon} width={40} height={40} />}
        </IconBgWrapper>
      </IconWrapper>

      <BodyWrapper>
        <InformationsWrapper>
          <div className="category" title={category}>
            {category}
          </div>
          <div className="createdAt">{createdAt}</div>
        </InformationsWrapper>

        <DescriptionsWrapper>
          {/* type이 "calendar일 때 <시간>이 보임" */}
          {type === "calendar" && <div className="time">{time}</div>}
          <div className="content" title={content}>
            {content}
          </div>
          {/* [type]이 "favorit"이고, [link]값이 있으면 바로가기 아이콘이 보임 */}
          {link && type === "favorit" && (
            <img className="link" src={PopupSVG} width={18} height={18} onClick={onClickLink} />
          )}
        </DescriptionsWrapper>
      </BodyWrapper>
    </ElementWrapper>
  )
}

export default NotificationElement

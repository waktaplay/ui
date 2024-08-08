import styled from "styled-components"
import favoriteIcon from "@assets/icons/favorite.svg"
import favorateIcon from "@assets/icons/favorate.svg"
import personIcon from "@assets/icons/person.svg"
import { ReactElement } from "react"

const ThumbnailContainer = styled.div<{ width: string; height: string }>`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const TumbnailHoverBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 7px 3px 0 3px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > p {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
    }
    > img {
      opacity: 0;
    }
  }
  > span {
    font-size: 14px;
    color: #9da1a8;
  }
`

const MemberContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

const MemberMulti = styled.div`
  padding: 6px 8px;
  border-radius: 6px;
  display: flex;
  gap: 4px;
  background-color: #4e5053;
  align-items: center;
  & > p {
    margin: 0;
    font-size: 14px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  cursor: pointer;
  &:hover > ${TextContainer} img {
    opacity: 1;
  }
  &:hover ${TumbnailHoverBackground} {
    opacity: 0.4;
  }
`

const Main = ({
  size = "large",
  src,
  alt = "",
  favorite = false,
  onClick,
  favoriteOnclick,
  member = "single",
  memberSingleChip,
  memberMultiCount = 0,
  date,
  view,
}: {
  size?: "large" | "medium" | "small"
  src: string
  alt?: string
  favorite?: boolean
  onClick?: () => void
  favoriteOnclick?: () => void
  member?: "single" | "multi"
  memberMultiCount?: number | string
  memberSingleChip?: ReactElement
  date: string
  view: number | string
}) => {
  const sizeToStyle = {
    large: {
      width: "356px",
      height: "200px",
    },
    medium: {
      width: "341px",
      height: "189px",
    },
    small: {
      width: "267px",
      height: "150px",
    },
  }

  return (
    <Container onClick={onClick}>
      <ThumbnailContainer {...sizeToStyle[size]}>
        <img src={src} alt={alt} />
        {member && (
          <MemberContainer>
            {member === "single" && memberSingleChip}
            {member === "multi" && (
              <MemberMulti>
                <img src={personIcon} alt="" />
                <p>{memberMultiCount}</p>
              </MemberMulti>
            )}
          </MemberContainer>
        )}
        <TumbnailHoverBackground />
      </ThumbnailContainer>
      <TextContainer>
        <div>
          <p>title</p>
          <img
            src={favorite ? favorateIcon : favoriteIcon}
            alt=""
            onClick={e => {
              e.stopPropagation()
              favoriteOnclick()
            }}
          />
        </div>
        <span>
          {date} &#183; 조회수 {view}
        </span>
      </TextContainer>
    </Container>
  )
}

export default Main

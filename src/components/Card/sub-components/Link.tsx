import styled from "styled-components"

import jump from "@assets/icons/jump.svg"
import link from "@assets/icons/link.svg"
import youtube from "@assets/icons/youtube.svg"

const LinkIcons = {
  youtube,
  naver_cafe: link,
} satisfies Record<string, string>

interface CardLink {
  type?: keyof typeof LinkIcons
  isLive?: boolean
  children?: string
}

const CardLinkButton = styled.button`
  box-sizing: border-box;
  display: flex;
  padding: 4px 10px 4px 6px;
  align-items: center;
  border-radius: 6px;
  background-color: inherit;
  color: inherit;
  user-select: none;
  border: none;
`

const CardLinkCaption = styled.div<Pick<CardLink, "isLive">>`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%; /* 18.85px */
  letter-spacing: -0.13px;

  color: ${({ isLive }) => (isLive ? "rgba(183, 251, 156, 1)" : "rgba(145, 145, 145, 1)")};
`

const CardLink = ({ type, isLive, children }: CardLink) => {
  const iconSrc = type ? LinkIcons[type] : ""

  return (
    <CardLinkButton>
      <img src={iconSrc} alt="" />
      <CardLinkCaption isLive={isLive}>{isLive ? "ON AIR" : "OFF AIR"}</CardLinkCaption>

      <p>{children}</p>
      <img src={jump} alt="" />
    </CardLinkButton>
  )
}

export default CardLink

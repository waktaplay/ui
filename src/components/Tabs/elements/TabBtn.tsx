import React, { useState } from "react"
import styled from "styled-components"

interface IProps {
  children?: React.ReactNode
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void
  active?: boolean
  focused?: boolean
  text: string
  style?: React.CSSProperties
}
const TabBtn = ({ children, onClick = () => {}, active = false, focused = true, text = "", style }: IProps) => {
  const [hover, setHover] = useState(false)

  const renderButtonOpacity = () => {
    if (hover) return 0.1
    if (active) return 0.2
    return 0.0
  }

  return (
    <Container
      focused={focused}
      onClick={onClick}
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
    >
      <InnerWrapper opacity={renderButtonOpacity()}>
        {children}
        <Text focused={focused}> {text}</Text>
      </InnerWrapper>
    </Container>
  )
}

const Container = styled.button<{ focused: Boolean }>`
  width: 100%;
  display: flex;
  padding: 0px;
  padding-bottom: 6px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  border-bottom: ${({ focused }) => focused && "2px solid #47f998"};
`

const InnerWrapper = styled.div<{ opacity: number }>`
  width: 100%;
  border-radius: 6px;
  gap: 8px;
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ opacity }) => `rgba(255, 255, 255, ${opacity})`};
`

const Text = styled.span<{ focused: Boolean }>`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
  color: ${({ focused }) => (focused ? "#47f998" : "#b4b8c2")};
`

export default TabBtn

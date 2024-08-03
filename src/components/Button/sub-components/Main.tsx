import styled from "styled-components"

const MainButton = styled.button<{
  padding?: string
  radius?: string
  fontSize?: string
  background?: string
  height?: string
  border?: string
  color?: string
  hover?: string
  active?: string
}>`
  background-color: ${props => props.background || "transparent"};
  padding: ${props => props.padding};
  border-radius: ${props => props.radius};
  font-size: ${props => props.fontSize};
  height: ${props => props.height};
  border: ${props => props.border || "none"};
  color: ${props => props.color || "#E5E7EC"};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:hover {
    background: ${props =>
      `linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),linear-gradient(0deg, ${
        props.hover || props.background || "transparent"
      }, ${props.hover || props.background || "transparent"});`};
  }
  &:active {
    background: ${props => `linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
    linear-gradient(0deg, ${props.active || props.background || "transparent"}, ${
      props.active || props.background || "transparent"
    });`};
  }
`

const Main = (props: {
  children?: string
  onClick?: () => void
  padding?: string
  radius?: string
  fontSize?: string
  background?: string
  height?: string
  border?: string
  color?: string
  hover?: string
  active?: string
}) => {
  return <MainButton {...props} />
}

export default Main

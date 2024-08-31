import styled from "styled-components"
import CheckLineYellowgreen from "@assets/icons/check_line_yellowgreen.svg"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  width: fit-content;
  & p {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }
`

const Icon = styled.div<{ background: string }>`
  width: 165px;
  height: 165px;
  border-radius: 999px;
  overflow: hidden;
  background: ${props => props.background};
  position: relative;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Checked = styled.div<{ checked: boolean }>`
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  opacity: ${props => (props.checked ? "1" : "0")};
  border-radius: 999px;
  outline: 2px solid #47f998;
  outline-offset: -2px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 63px;
    height: 63px;
  }
`

const Circle = ({
  src,
  backgroundColor,
  label,
  checked = false,
}: {
  src: string
  backgroundColor?: string
  label?: string
  checked?: boolean
}) => {
  return (
    <Container>
      <Icon background={backgroundColor}>
        <Checked checked={checked}>
          <img src={CheckLineYellowgreen} alt="" />
        </Checked>
        <img src={src} alt="" />
      </Icon>
      <p>{label}</p>
    </Container>
  )
}

export default Circle

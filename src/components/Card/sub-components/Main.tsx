import styled from "styled-components"

interface CardMainProps {
  children?: React.ReactNode
}

const CardBorder = styled.div`
  width: 325px;
  border-radius: 10px 10px 0px 0px;
  background: #87ef63;
  height: 10px;
`

const CardMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0px 0px 10px 10px;
  background: rgba(78, 80, 83, 0.3);
  box-shadow: 0px 12px 90px 0px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(75px);
  color: #fff;
`

const CardMain = ({ children }: CardMainProps) => {
  return (
    <>
      <CardBorder />
      <CardMainDiv>{children}</CardMainDiv>
    </>
  )
}

export default CardMain

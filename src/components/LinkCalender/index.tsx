import styled from "styled-components"
import jump from "@assets/icons/jump.svg"

const Container = styled.button`
  padding: 4px 10px 4px 6px;
  border-radius: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  & > div {
    display: flex;
    align-items: center;
    gap: 4px;
    & p {
      margin: 0;
    }
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
`

const LinkCalender = ({ icon, onClick }: { icon: string; onClick?: () => void }) => {
  return (
    <Container onClick={onClick}>
      <img src={icon} alt="" />
      <div>
        <p>2023 연공전 다시보기</p>
        <img src={jump} alt="" />
      </div>
    </Container>
  )
}

export default LinkCalender

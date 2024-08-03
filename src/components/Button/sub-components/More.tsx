import styled from "styled-components"
import Main from "./Main"
import ArrowDown from "@assets/icons/arrow_small_down.svg"
import { useEffect, useState } from "react"

const MoreContainer = styled.div<{ $more?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  & > p {
    margin: 0;
  }
  & > img {
    width: 18px;
    height: 18px;
    transition: 0.15s;
    transform: ${props => (props.$more ? "rotate(180deg)" : "")};
  }
`

const More = ({ onChange, value = false }: { onChange?: (value: boolean) => void; value?: boolean }) => {
  const [more, setMore] = useState<boolean>(value)
  useEffect(() => {
    if (!value || value === more) return
    setMore(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <Main
      onClick={() => {
        onChange && onChange(!more)
        setMore(!more)
      }}
      padding="0 10px"
      height="38px"
      radius="6px"
      fontSize="16px"
    >
      <MoreContainer $more={more}>
        <p>{more ? "접기" : "더보기"}</p>
        <img src={ArrowDown} alt="" />
      </MoreContainer>
    </Main>
  )
}

export default More

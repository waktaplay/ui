import { SetStateAction, useState } from "react"
import styled from "styled-components"
import ArrowDownIcon from "@assets/icons/arrow_small_down.svg"
import ArrowUpIcon from "@assets/icons/arrow_small_up.svg"
// MEMO: Page Tab Header

const TabShowMore = ({
  isShowedMore,
  setIsShowedMore,
}: {
  isShowedMore: Boolean
  setIsShowedMore: React.Dispatch<SetStateAction<Boolean>>
}) => {
  return (
    <Container>
      <ShowMoreBtn
        onClick={() => {
          setIsShowedMore(!isShowedMore)
        }}
      >
        {isShowedMore ? (
          <>
            <Text>접기</Text>
            <img src={ArrowUpIcon} />
          </>
        ) : (
          <>
            <Text>더보기</Text>
            <img src={ArrowDownIcon} />
          </>
        )}
      </ShowMoreBtn>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15.5px;
  border-top: 0.5px solid #4e5053;
`

const ShowMoreBtn = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  border-radius: 6px;
  padding: 8px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const Text = styled.span`
  color: white;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.16px;
`

export default TabShowMore

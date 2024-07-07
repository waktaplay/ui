import { SetStateAction } from "react"
import styled from "styled-components"
import TabBtn from "./elements/TabBtn"

interface IItem {
  index: number
  title: string
}

interface IChip {
  index: number
  name: string
}

interface IProps {
  TABS: IItem[]
  CHIPS: IChip[]
  selectedTabIndex: Number
  setSelectedTabIndex: React.Dispatch<SetStateAction<number>>
}

const Tabs = ({ TABS, CHIPS, selectedTabIndex, setSelectedTabIndex }: IProps) => {
  return (
    <Container>
      <TopWrapper>
        <Wrapper>
          {TABS.map(TAB => {
            const focused = selectedTabIndex === TAB.index
            return (
              <TabBtn
                onClick={() => {
                  setSelectedTabIndex(TAB.index)
                }}
                focused={focused}
                key={TAB.index}
                text={TAB.title}
              />
            )
          })}
        </Wrapper>
        <Wrapper>
          {/* TODO : IMPORT FILTER COMPONENT */}
          <TabBtn text="FILTER" />
        </Wrapper>
      </TopWrapper>
      <BottomWrapper>
        <ChipWrapper>
          {CHIPS.map(CHIP => {
            return <FakeChip key={CHIP.index}># {CHIP.name}</FakeChip>
          })}
        </ChipWrapper>
        <Wrapper>
          {/* TODO : IMPORT MEMBER FILTER COMPONENT */}
          <TabBtn text="MEMBER FILTER" />
        </Wrapper>
      </BottomWrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const TopWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #4e5053;
`
const BottomWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
`

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 16px;
`

const ChipWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
`
//  TODO : ERASE CHIP CSS
const FakeChip = styled.span`
  width: fit-content;
  height: fit-content;
  border-radius: 5px;
  background-color: gray;
  padding: 8px 12px;
  font-size: 14px;
  color: white;
`

export default Tabs

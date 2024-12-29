import { SetStateAction } from "react"
import styled from "styled-components"
import TabBtn from "./elements/TabBtn"

interface IItem {
  index: number
  title: string
}

const Tabs = ({
  TABS,
  selectedTabIndex,
  setSelectedTabIndex,
  topButtonComponent,
  bottomButtonComponent,
  chipComponents,
}: {
  TABS: IItem[]
  selectedTabIndex: Number
  setSelectedTabIndex: React.Dispatch<SetStateAction<number>>
  topButtonComponent?: React.ReactElement // top Button (e.g. filter)
  bottomButtonComponent?: React.ReactElement // bottom Button(e.g. memberfilter)
  chipComponents?: React.ReactElement[] // render chips
}) => {
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
        <Wrapper>{topButtonComponent}</Wrapper>
      </TopWrapper>
      <BottomWrapper>
        <ChipWrapper>{chipComponents}</ChipWrapper>
        <Wrapper>{bottomButtonComponent}</Wrapper>
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

export default Tabs

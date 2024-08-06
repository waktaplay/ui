import styled from "styled-components"

const ChipMiddleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 8px 12px;
  background: #4e5053;
  height: 40px;
  width: fit-content;

  font-size: 18px;
  line-height: 25px;

  &:hover {
    cursor: pointer !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`

interface IChipProps {
  item: { icon: string; label: string; value: string }
}

const ChipMiddle = ({ item }: IChipProps) => {
  return (
    <ChipMiddleWrapper>
      <img src={item.icon} height={20} style={{ zIndex: 1 }} />
      {item.label}
    </ChipMiddleWrapper>
  )
}

export default ChipMiddle

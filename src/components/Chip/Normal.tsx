import styled from "styled-components"

const ChipNormalWrapper = styled.div`
  height: fit-content;
  width: fit-content;
  border-radius: 5px;
  padding: 8px 12px;
  gap: 4px;
  background: #242424;

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`

interface ChipNormalProps {
  item: { label: string; value: string }
}

const ChipNormal = ({ item }: ChipNormalProps) => {
  return <ChipNormalWrapper>{item.label}</ChipNormalWrapper>
}

export default ChipNormal

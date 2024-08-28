import styled from "styled-components"
import { IChipBaseProps } from "../types"

const ChipNormalWrapper = styled.div<{ primary: boolean }>`
  height: fit-content;
  width: fit-content;
  border-radius: 5px;
  padding: 8px 12px;
  gap: 4px;
  background: #242424;

  ${({ primary }) => primary && `color: #47F998;`};

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`

const ChipNormal = ({ item, onClick, primary }: IChipBaseProps) => {
  return (
    <ChipNormalWrapper primary={primary} onClick={() => onClick(item.value)}>
      {item.label}
    </ChipNormalWrapper>
  )
}

export default ChipNormal

import styled from "styled-components"

const ChipMediumWrapper = styled.div<{ primary: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 8px 12px;
  background: #242424;
  height: 40px;
  width: fit-content;

  font-size: 18px;
  line-height: 25px;

  ${({ primary }) => primary && `color: #47F998;`};

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`

interface IChipProps {
  item: { icon: string; label: string; value: string }
  onClick: (value: string) => void
  primary?: boolean
}

const ChipMiddle = ({ item, onClick, primary }: IChipProps) => {
  return (
    <ChipMediumWrapper primary={primary} onClick={() => onClick(item.value)}>
      <img src={item.icon} height={20} style={{ zIndex: 1 }} />
      {item.label}
    </ChipMediumWrapper>
  )
}

export default ChipMiddle

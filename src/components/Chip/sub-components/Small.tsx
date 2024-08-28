import styled from "styled-components"
import { IChipSmallProps } from "../types";

const ChipSmallWrapper = styled.div<{ primary: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 6px 8px;
  background: #242424;
  height: 40px;
  width: fit-content;

  ${({ primary }) => primary && `color: #47F998;`};

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`

const ProfileBgWrapper = styled.div<{ iconBgColor: string }>`
  background: ${({ iconBgColor }) => (iconBgColor ? iconBgColor : "##252627")};
  left: 8px;
  border-radius: 30px;
  height: 30px;
  width: 30px;
`

const ChipSmall = ({ item, onClick, primary }: IChipSmallProps) => {
  return (
    <ChipSmallWrapper primary={primary} onClick={() => onClick(item.value)}>
      <ProfileBgWrapper iconBgColor={item.iconBgColor}>
        <img src={item.icon} height={30} style={{ zIndex: 1 }} />
      </ProfileBgWrapper>
      {item.label}
    </ChipSmallWrapper>
  )
}

export default ChipSmall

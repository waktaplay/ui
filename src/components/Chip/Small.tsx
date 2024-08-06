import styled from "styled-components"

const ChipSmallWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 6px 8px;
  background: #4e5053;
  height: 40px;
  width: fit-content;

  &:hover {
    cursor: pointer !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`

interface IChipProps {
  item: { icon: string; label: string; value: string }
}

const ChipSmall = ({ item }: IChipProps) => {
  return (
    <ChipSmallWrapper>
      <div
        style={{
          background: "rgba(37, 38, 39, 1)",
          left: "8px",
          borderRadius: "30px",
          height: "30px",
          width: "30px",
        }}
      >
        <img src={item.icon} height={30} style={{ zIndex: 1 }} />
      </div>
      {item.label}
    </ChipSmallWrapper>
  )
}

export default ChipSmall

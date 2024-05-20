import styled from "styled-components"

const MenuWrapper = styled.div`
  padding: 4px 0;
  width: fit-content;
  border-radius: 10px;
  background-color: #191a1a;
`

const MenuItem = styled.div<{ selected: boolean }>`
  padding: 14px 24px;
  gap: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #e5e7ec;

  ${({ selected }) =>
    selected &&
    `
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.2);
    `}

  &:hover {
    cursor: pointer !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`

const Menu = ({
  itemList,
  onClick,
  selectedKey,
}: {
  itemList: {
    icon?: React.ReactNode
    label: string
    value: string
  }[]
  onClick: () => void
  selectedKey: string
}) => {
  return (
    <article>
      <MenuWrapper>
        {itemList.map(obj => {
          return (
            <MenuItem selected={selectedKey === obj.value} key={`menu-item-${obj.value}`} onClick={onClick}>
              {obj.icon}
              {obj.label}
            </MenuItem>
          )
        })}
      </MenuWrapper>
    </article>
  )
}

export default Menu

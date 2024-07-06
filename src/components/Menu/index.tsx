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
  onClick: (value: string) => void
  selectedKey: string
}) => {
  return (
    <article>
      <MenuWrapper>
        {itemList.map(item => {
          return (
            <MenuItem
              selected={selectedKey === item.value}
              key={`menu-item-${item.value}`}
              onClick={() => onClick(item.value)}
            >
              {item.icon}
              {item.label}
            </MenuItem>
          )
        })}
      </MenuWrapper>
    </article>
  )
}

export default Menu

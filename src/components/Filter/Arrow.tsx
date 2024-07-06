import { useEffect, useRef, useState } from "react"
import Base from "./Base"
import ArrowDown from "@assets/icons/arrow_small_down.svg"
import styled from "styled-components"
import Menu from "../Menu"

interface FilterMenuPosition {
  top: string
  bottom: string
  left: string
  right: string
  dir: string
}

const FilterMenuContainer = styled.div<{ $active: boolean; menuposition: FilterMenuPosition }>`
  position: fixed;
  top: ${props => props.menuposition.top};
  bottom: ${props => props.menuposition.bottom};
  left: ${props => props.menuposition.left};
  right: ${props => props.menuposition.right};
  transform-origin: ${props => props.menuposition.dir};
  visibility: ${props => (props.$active ? "visible" : "hidden")};
  transform: ${props => (props.$active ? "scale(1)" : "scale(0.8)")};
  opacity: ${props => (props.$active ? "1" : "0")};
  transition-property: visibility, transform, opacity;
  transition-duration: 250ms;
`

const FilterArrowImg = styled.img<{ $active: boolean }>`
  transition: 0.15s;
  transform: ${props => (props.$active ? "rotate(180deg)" : "")};
`

const Arrow = ({
  onChange,
  options,
  value,
}: {
  onChange?: (value: string) => void
  options: Array<{
    label: string
    value: string
  }>
  value?: string
}) => {
  const [selectOption, setSelectOption] = useState<{
    label: string
    value: string
  }>(options[0])
  const [active, setActive] = useState<boolean>(false)
  const [menuPosition, setMenuPosition] = useState<FilterMenuPosition>({
    top: "auto",
    bottom: "auto",
    left: "auto",
    right: "auto",
    dir: "top",
  })
  const menuContainer = useRef<null | HTMLDivElement>(null)

  // value 로 컨트롤
  useEffect(() => {
    if (!value || selectOption.value === value) return
    const index = options.findIndex(x => x.value === value)
    if (index === -1) return
    setSelectOption(options[index])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  // menu container position 조정
  useEffect(() => {
    if (!active) return
    // 메뉴 노드
    const menu = menuContainer.current
    // filter 의 위치 및 사이즈
    const filterRect = menuContainer.current.parentElement.getBoundingClientRect()
    // 화면 사이즈
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    // menu default position
    const menuPosition = {
      top: filterRect.bottom + "px",
      left: filterRect.left + "px",
      bottom: "auto",
      right: "auto",
      // 애니메이션 방향
      dir: "top",
    }
    // menu 펼쳐짐이 아래쪽으로 화면을 넘을 경우
    if (filterRect.bottom + menu.clientHeight > windowHeight) {
      menuPosition.bottom = "20px"
      menuPosition.top = "auto"
      menuPosition.dir = "bottom"
    }
    // menu 펼쳐짐이 오른쪽으로 화면을 넘을 경우
    if (filterRect.right + menu.clientWidth > windowWidth) {
      menuPosition.right = "20px"
      menuPosition.left = "auto"
    }
    setMenuPosition(menuPosition)
  }, [active])

  return (
    <Base active={active} setActive={setActive}>
      <span>{selectOption.label}</span>
      <FilterArrowImg $active={active} alt="down_arrow" src={ArrowDown} />
      <FilterMenuContainer $active={active} ref={menuContainer} menuposition={menuPosition}>
        <Menu
          selectedKey={selectOption.value}
          onClick={changedValue => {
            const index = options.findIndex(x => x.value === changedValue)
            setSelectOption(options[index])
            onChange && onChange(changedValue)
          }}
          itemList={options}
        />
      </FilterMenuContainer>
    </Base>
  )
}

export default Arrow

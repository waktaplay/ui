import { Dispatch, ReactElement, SetStateAction, useEffect, useRef } from "react"
import styled from "styled-components"

interface FilterBaseProps {
  children: Array<ReactElement | string>
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const FilterContainer = styled.div`
  position: relative;
`

const FilterButton = styled.button<{ $active: boolean }>`
  font-family: "pretendard";
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  background-color: ${props => (props.$active ? "rgba(255, 255, 255, 0.2)" : "inherit")};
  color: white;
  padding: 8px;
  align-items: center;
  gap: 8px;
  & > span {
    font-size: 14px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`

const FilterActiveControlInput = styled.input`
  width: 1px;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
`

const FilterBase = ({ children, active, setActive }: FilterBaseProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  // filter active 시 스크롤 disable
  useEffect(() => {
    const body = document.body
    if (active) {
      body.setAttribute("style", "overflow:hidden;")
    } else {
      body.setAttribute("style", "")
    }
    // unmounted 시 초기화
    return () => {
      body.setAttribute("style", "")
    }
  }, [active])

  // filter active 외부 클릭시 inactive
  useEffect(() => {
    if (!active) return
    inputRef.current?.focus()
  }, [active])

  return (
    <FilterContainer>
      <FilterButton
        $active={active}
        onMouseDown={() =>
          // blur 이벤트 순서 이슈로 timeout 추가
          setTimeout(() => {
            !active && setActive(true)
          })
        }
      >
        {children}
      </FilterButton>
      <FilterActiveControlInput onBlur={() => setActive(false)} ref={inputRef} />
    </FilterContainer>
  )
}

export default FilterBase

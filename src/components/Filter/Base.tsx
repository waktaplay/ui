import { ReactElement, useEffect, useRef, useState } from "react"
import styled from "styled-components"

interface FilterBaseProps {
  children: Array<ReactElement | string>
}

const FilterContainer = styled.div`
  position: relative;
  > input {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
  }
`

const FilterButton = styled.button<{ active: boolean }>`
  font-family: "pretendard";
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  background-color: ${props => (props.active ? "rgba(255, 255, 255, 0.2)" : "inherit")};
  color: white;
  padding: 8px;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  > .filter_align_arrow {
    transition: 0.15s;
    transform: ${props => (props.active ? "rotate(180deg)" : "")};
  }
`

const Base = ({ children }: FilterBaseProps) => {
  const [openSelectOption, setOpenSelectOption] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // filter active 시 스크롤 disable
  useEffect(() => {
    const body = document.body
    if (openSelectOption) {
      body.setAttribute("style", "overflow:hidden;")
    } else {
      body.setAttribute("style", "")
    }
    // unmounted 시 초기화
    return () => {
      body.setAttribute("style", "")
    }
  }, [openSelectOption])

  // filter active 외부 클릭시 inactive
  useEffect(() => {
    console.log(openSelectOption)
    if (!openSelectOption) return
    inputRef.current?.focus()
  }, [openSelectOption])

  return (
    <FilterContainer>
      <FilterButton
        active={openSelectOption}
        onMouseDown={() =>
          // blur 이벤트 순서 이슈로 timeout 추가
          setTimeout(() => {
            !openSelectOption && setOpenSelectOption(true)
          })
        }
      >
        {children}
      </FilterButton>
      <input onBlur={() => setOpenSelectOption(false)} ref={inputRef} />
    </FilterContainer>
  )
}

export default Base

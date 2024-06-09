import { useEffect, useState } from "react"
import Base from "./Base"
import ArrowDown from "@assets/icons/arrow_small_down.svg"

interface FilterAlignProps {
  /**
   * On Value Change Handler
   */
  onChange?: (value: string) => void
  options: Array<{
    label: string
    value: string
  }>
  value?: string
}

const Align = ({ onChange, options, value }: FilterAlignProps) => {
  const [selectOption, setSelectOption] = useState<number>(0)

  useEffect(() => {
    if (!onChange) return
    onChange(options[selectOption].value)
  }, [selectOption, options, onChange])

  useEffect(() => {
    if (!value) return
    const index = options.findIndex(item => item.value === value)
    if (index === -1) {
      console.error("options 에 일치하는 value 가 없습니다.")
      return
    }
    setSelectOption(index)
  }, [value, options])

  return (
    <Base>
      {options[selectOption].label}
      <img className="filter_align_arrow" alt="down_arrow" src={ArrowDown} />
    </Base>
  )
}

export default Align

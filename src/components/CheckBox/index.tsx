import React from "react"
import styled from "styled-components"
import CheckboxChecked from "@assets/icons/checkbox_filled.svg"
import CheckboxUnchecked from "@assets/icons/checkbox_unfilled.svg"

const CheckBox = React.forwardRef<
  HTMLInputElement,
  {
    text?: string
    id: string
    name?: string
    value?: string
    disabled?: boolean
    checked?: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }
>(({ text, id, name, value, disabled = false, checked = false, onChange }, ref) => {
  const renderImage = () => {
    if (disabled) {
      return CheckboxUnchecked
    }
    return checked ? CheckboxChecked : CheckboxUnchecked
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event)
    }
  }
  return (
    <Container htmlFor={id} text={text} disabled={disabled}>
      <HiddenCheckbox
        type="checkbox"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
        ref={ref}
      />
      <img src={renderImage()} />
      {text ? <Text disabled={disabled}>{text}</Text> : null}
    </Container>
  )
})

const Container = styled.label<{ text: string; disabled: boolean }>`
  background-color: transparent;
  cursor: ${({ disabled }) => !disabled && "pointer"};
  ${({ text, disabled }) =>
    text &&
    `
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border-radius: 6px;
    padding: 6px;
    ${
      !disabled &&
      `&:hover {
      background-color: rgba(255, 255, 255, 0.1);}`
    }`}
`

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`

const Text = styled.p<{ disabled: boolean }>`
  color: ${({ disabled }) => (disabled ? "#4E5053" : "#fff")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.14px;
  margin: 0px;
`

export default CheckBox

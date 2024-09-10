import React from "react"
import styled from "styled-components"
import CheckboxChecked from "@assets/icons/checkbox_filled.svg"
import CheckboxUnchecked from "@assets/icons/checkbox_unfilled.svg"

const CheckBox = ({
  id,
  name,
  value,
  text,
  isChecked = false,
  setIsChecked,
}: {
  id: string
  name?: string
  value?: string
  text?: string
  isChecked: boolean
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Container htmlFor={id} text={text}>
      <HiddenCheckbox
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked)
        }}
      />
      <img src={isChecked ? CheckboxChecked : CheckboxUnchecked} />
      {text ? <Text>{text}</Text> : null}
    </Container>
  )
}

const Container = styled.label<{ text: string }>`
  cursor: pointer;
  background-color: transparent;

  ${({ text }) =>
    text &&
    `
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border-radius: 6px;
    padding: 6px;
    &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }`}
`

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`

const Text = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.14px;
  margin: 0px;
`

export default CheckBox

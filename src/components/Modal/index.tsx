import { ReactNode } from "react"
import styled from "styled-components"

import CloseSVG from "@/assets/icons/close.svg"

const BgWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`

const CloseBtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  &:hover {
    cursor: pointer;
  }
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 16px;
`

const DefaultWrapper = styled.div`
  background: #191a1a;
  border-radius: 15px;
  padding: 24px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 440px;
  height: fit-content;
  text-align: center;

  z-index: 100;
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;

  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    margin: 0;
  }

  .description {
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    margin: 0;
  }
`

interface IDefault {
  title: string
  description: string
  onClose: () => void
  button?: ReactNode
}

const Default = ({ title, description, button, onClose }: IDefault) => {
  return (
    <div>
      <BgWrapper />
      <DefaultWrapper>
        <CloseBtnWrapper onClick={onClose}>
          <img src={CloseSVG} width={24} />
        </CloseBtnWrapper>
        <BodyWrapper>
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <p className="title">{title}</p>
            <p className="description" style={{ whiteSpace: "pre-wrap" }}>
              {description}
            </p>
          </div>
          {button}
        </BodyWrapper>
      </DefaultWrapper>
    </div>
  )
}

export default Default

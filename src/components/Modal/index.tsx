import styled from "styled-components"

import CloseSVG from "@/assets/icons/close.svg"
import Button from "../Button"

const BgWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`

const ModalWrapper = styled.div`
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

  .comments {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .description {
      white-space: pre-wrap;
    }
  }
`

const Default = ({ title, description, button = true, buttonComment, onClose, onClickBtn }: {
  title: string
  description: string
  onClose: () => void
  button?: boolean
  buttonComment?: string
  onClickBtn?: () => void
}) => {
  return (
    <div>
      <BgWrapper />
      <ModalWrapper>
        <CloseBtnWrapper onClick={onClose}>
          <img src={CloseSVG} width={24} />
        </CloseBtnWrapper>
        <BodyWrapper>
          <div className="comments">
            <p className="title">{title.slice(0, 18)}</p>
            <p className="description">{description.slice(0, 59)}</p>
          </div>

          {button && (
            <Button.Fill size="large" color="primary" onClick={onClickBtn}>
              {buttonComment}
            </Button.Fill>
          )}
        </BodyWrapper>
      </ModalWrapper>
    </div>
  )
}

export default Default

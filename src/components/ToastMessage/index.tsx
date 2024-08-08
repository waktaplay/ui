import { SetStateAction, useEffect } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"

interface IProps {
  message: string
  setMessage: React.Dispatch<SetStateAction<string>>
}

const ToastMessage = ({ message, setMessage }: IProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("")
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [message, setMessage])

  return (
    message &&
    createPortal(
      <Container>
        <Text>{message}</Text>
      </Container>,
      document.getElementById("root"),
    )
  )
}

const Container = styled.div`
  background-color: white;
  padding: 24px 38px;
  width: fit-content;
  height: fit-content;
  display: flex;
  border-radius: 10px;
  position: fixed;
  z-index: 99;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: fadeInUp 0.5s forwards;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate(-50%, 0%);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`

const Text = styled.p`
  color: black;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  margin: 0px;
  letter-spacing: -0.18px;
`

export default ToastMessage

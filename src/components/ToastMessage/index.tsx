import { SetStateAction, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"

const ToastMessage = ({ message, setMessage }: {
  message: string
  setMessage: React.Dispatch<SetStateAction<string>>
}) => {
  const [fadeType, setFadeType] = useState<"fadeInUp" | "fadeOutDown">("fadeInUp") // fadeOut 애니메이션도 추가하기

  const timer = useRef<number | null>(null) // FadeOut Timer
  const deleteTimer = useRef<number | null>(null) // Element 삭제하는 Timer

  useEffect(() => {
    if (message) {
      // 이미 타이머가 동작 중이라면 초기화
      if (timer.current || deleteTimer.current) {
        clearTimeout(deleteTimer.current)
        deleteTimer.current = null

        clearTimeout(timer.current)
        timer.current = null
      }

      setFadeType("fadeInUp")

      // 3초 뒤 fadeOut 토글
      timer.current = setTimeout(() => {
        setFadeType("fadeOutDown")

        deleteTimer.current = setTimeout(() => {
          setMessage(null) // fadeOut 끝난 뒤 element 삭제
          setFadeType("fadeInUp") // 나중에 다시 toggle될때 대비해서 초기화
        }, 500)
      }, 3000)

      return () => {
        clearTimeout(deleteTimer.current)
        deleteTimer.current = null

        clearTimeout(timer.current)
        timer.current = null
      }
    }
  }, [message, setMessage])

  return (
    message &&
    createPortal(
      <Container $isVisible={!!message} $fadeType={fadeType}>
        <Text>{message}</Text>
      </Container>,
      document.getElementById("root"),
    )
  )
}

const Container = styled.div<{ $fadeType: "fadeInUp" | "fadeOutDown"; $isVisible: boolean }>`
  background-color: white;
  padding: 24px 38px;
  border-radius: 10px;

  width: fit-content;
  height: fit-content;

  position: fixed;
  display: ${props => (props.$isVisible ? "flex" : "none")};

  z-index: 99;
  left: 50%;
  bottom: 2%;

  opacity: 0;
  transform: translate(-50%, 30px);
  animation: ${props => props.$fadeType} 0.5s forwards;

  // 아래에서 위로 올라오는 FadeIn
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate(-50%, 30px);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  // 다시 아래로 내려가는 FadeOut
  @keyframes fadeOutDown {
    0% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, 30px);
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

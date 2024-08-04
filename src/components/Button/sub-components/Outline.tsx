import Main from "./Main"

const Outline = ({
  children,
  onClick,
  size = "small",
}: {
  children?: string
  onClick?: () => void
  size?: "small" | "large"
}) => {
  const sizeToStyle = {
    height: {
      small: "36px",
      large: "48px",
    },
    padding: {
      small: "0px 24px 0px 24px",
      large: "0px 40px 0px 40px",
    },
    fontSize: {
      small: "14px",
      large: "16px",
    },
  }

  return (
    <Main
      onClick={onClick}
      padding={sizeToStyle.padding[size]}
      radius="999px"
      fontSize={sizeToStyle.fontSize[size]}
      height={sizeToStyle.height[size]}
      border="1px solid rgba(255,255,255,0.5)"
    >
      {children}
    </Main>
  )
}

export default Outline

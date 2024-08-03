import Main from "./Main"

const Fill = ({
  children,
  onClick,
  size = "small",
  color = "gray",
  cat = false,
}: {
  children?: string
  onClick?: () => void
  size?: "small" | "medium" | "large"
  color?: "gray" | "primary"
  cat?: boolean
}) => {
  const sizeToStyle = {
    height: {
      small: "36px",
      medium: "48px",
      large: "56px",
    },
    padding: {
      small: "0 16px",
      medium: "0 20px",
      large: "0 24px",
    },
    fontSize: {
      small: "14px",
      medium: "14px",
      large: "16px",
    },
  }

  const colorToStyle = {
    gray: {
      background: "#303133",
      color: "#E5E7EC",
      hover: "#303133",
      active: "#303133",
    },
    primary: {
      background: "#47F998",
      color: "#191A1A",
      hover: cat ? "#47F998" : "#83FFA0",
      active: cat ? "#47F998" : "#83FFA0",
    },
  }

  return (
    <Main
      onClick={onClick}
      padding={sizeToStyle.padding[size]}
      radius="10px"
      fontSize={sizeToStyle.fontSize[size]}
      height={sizeToStyle.height[size]}
      background={colorToStyle[color].background}
      color={colorToStyle[color].color}
      hover={colorToStyle[color].hover}
      active={colorToStyle[color].active}
    >
      {children}
    </Main>
  )
}

export default Fill

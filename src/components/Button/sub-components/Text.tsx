import Main from "./Main"

const Text = ({ children, onClick }: { children?: string; onClick?: () => void }) => {
  return (
    <Main onClick={onClick} padding="0px 12px 0px 12px" radius="6px" fontSize="14px" height="36px">
      {children}
    </Main>
  )
}

export default Text

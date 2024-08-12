import styled from "styled-components"
import ine from "@assets/icons/members/ine.svg"
import jingburger from "@assets/icons/members/jingburger.svg"
import lilpa from "@assets/icons/members/lilpa.svg"
import jururu from "@assets/icons/members/jururu.svg"
import gosegu from "@assets/icons/members/gosegu.svg"
import viichan from "@assets/icons/members/viichan.svg"
import CheckLineYellowgreen from "@assets/icons/check_line_yellowgreen.svg"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  width: fit-content;
  & p {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }
`

const Icon = styled.div<{ background: string }>`
  width: 165px;
  height: 165px;
  border-radius: 999px;
  overflow: hidden;
  background: ${props => props.background};
  position: relative;
`

const Checked = styled.div<{ checked: boolean }>`
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  opacity: ${props => (props.checked ? "1" : "0")};
  border-radius: 999px;
  outline: 2px solid #47f998;
  outline-offset: -2px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 63px;
    height: 63px;
  }
`

const Circle = ({
  artistId,
  checked = false,
}: {
  artistId: "ine" | "jingburger" | "lilpa" | "jururu" | "gosegu" | "viichan"
  checked?: boolean
}) => {
  const artistData = {
    ine: {
      icon: ine,
      label: "아이네",
      background: "#A55CE9",
    },
    jingburger: {
      icon: jingburger,
      label: "징버거",
      background: "#FFDE1F",
    },
    lilpa: {
      icon: lilpa,
      label: "릴파",
      background: "#6852EE",
    },
    jururu: {
      icon: jururu,
      label: "주르르",
      background: "#FF69B1",
    },
    gosegu: {
      icon: gosegu,
      label: "고세구",
      background: "#69D3FF",
    },
    viichan: {
      icon: viichan,
      label: "비챤",
      background: "#99F65B",
    },
  }

  return (
    <Container>
      <Icon background={artistData[artistId].background}>
        <Checked checked={checked}>
          <img src={CheckLineYellowgreen} alt="" />
        </Checked>
        <img src={artistData[artistId].icon} alt="" />
      </Icon>
      <p>{artistData[artistId].label}</p>
    </Container>
  )
}

export default Circle

import { useRef, useState } from "react"
import styled from "styled-components"

import "normalize.css"
import "@/main.css"

import Card from "@components/Card"
import Footer from "@components/Footer"
import Menu from "@components/Menu"
import Tabs from "@components/Tabs"
import TabShowMore from "@components/Tabs/elements/TabShowMore"
import Filter from "@components/Filter"
import CheckBox from "@components/CheckBox"
import Button from "@components/Button"
import ToastMessage from "@components/ToastMessage"
import Chip from "@components/Chip"
import Modal from "@components/Modal"
import Notification from "@components/List/Notification"
import LinkCalendar from "@components/LinkCalendar"
import Video from "@components/Video"
import Artist from "@components/Artist"

import FavorateSvg from "@assets/icons/favorate.svg"
import LogoutSvg from "@assets/icons/out.svg"
import Withdraw from "@assets/icons/withdraw.svg"
import Youtube from "@assets/icons/youtube.svg"
import Link from "@assets/icons/link.svg"
import SpacewakTextLogo from "@assets/logo/spacewak-text-logo.svg"
import WaktaplayTextLogo from "@assets/logo/waktaplay-text-logo.svg"
import WaktaverseSVG from "@assets/icons/group/waktaverse.svg"

import { IElementProps } from "@components/List/types"

// TODO : 아래 더미데이터들은 원하는 내용으로 바꾸시면 되고 unit은 지우셔도 무방합니다.
const TABS = [
  {
    index: 0,
    title: "전체",
  },
  {
    index: 1,
    title: "찜한 콘텐츠",
  },
  {
    index: 2,
    title: "최애 멤버",
  },
]

const CHIPS = [
  {
    label: "고정멤버",
    value: "고정멤버",
  },
  {
    label: "아카데미",
    value: "아카데미",
  },
  {
    label: "이세돌",
    value: "이세돌",
  },
]

const UNITS = [
  {
    index: 0,
    title: "UNIT 1",
  },
  {
    index: 1,
    title: "UNIT 2",
  },
  {
    index: 2,
    title: "UNIT 3",
  },
  {
    index: 3,
    title: "UNIT 3",
  },
  {
    index: 4,
    title: "UNIT 4",
  },
  {
    index: 5,
    title: "UNIT 5",
  },
  {
    index: 6,
    title: "UNIT 6",
  },
  {
    index: 7,
    title: "UNIT 7",
  },
  {
    index: 8,
    title: "UNIT 8",
  },
]

const notificationSample: IElementProps[] = [
  {
    icon: SpacewakTextLogo,
    content: "왁타버스 시작",
    view: false,
    createdAt: "2시간 전",
    category: "게시판",
    type: "favorite",
    time: null,
  },
  {
    icon: SpacewakTextLogo,
    content: "왁타버스 1 이렇게 길게 만들어 보면 어떻게 될까요 한번 가시보죠",
    view: true,
    createdAt: "2시간 전",
    category: "왁타플레이",
    time: "오후 12시 45분",
    type: "calendar",
  },
  {
    icon: SpacewakTextLogo,
    content: '"왁타버스" 님이 "스페이스왁"을 친구 추가 했습니다.',
    view: true,
    createdAt: "2시간 전",
    category: "왁타플레이",
    link: "https://www.youtube.com/@waktaverse",
    type: "favorite",
  },
]

const App = () => {
  //해당 selectedTabIndex,isShowedMore 두개의 state 들은 tabs UI 와 사용되는  state 입니다.
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const [isShowedMore, setIsShowedMore] = useState(false)

  //해당 message state 들은 toastMessage UI 와 사용되는  state 입니다.
  const [message, setMessage] = useState<string | null>(null)

  //해당 isChecked state는 checkbox 와 사용되는  state 입니다.
  const [isChecked, setIsChecked] = useState(false)
  const checkRef = useRef(null)
  const [modalToggle, setModalToggle] = useState(false)

  function handleAllCheckbox() {
    if (checkRef.current.checked) {
      console.log("✅", checkRef.current.checked)
      console.log("✅ : check 되었습니다 check 함수가 실행됩니다1")
      console.log("✅", isChecked)
    } else {
      console.log("❌", checkRef.current.checked)
      console.log("❌ : check 되지 않았습니다 check 함수가 절대 실행 안됩니다")
      console.log("❌", isChecked)
    }
  }

  return (
    <>
      <main>
        <h2>SpaceWak Design System</h2>

        <section>
          <h3>Card</h3>

          <Card>
            <Card.Header>
              <Card.Title>Lorem Ipsum</Card.Title>
              <Card.Date>2023. 9. 5</Card.Date>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Card.Link type="naver_cafe" isLive={true}>
                Hello World!
              </Card.Link>
            </Card.Body>
          </Card>
        </section>

        <section>
          <h3>Footer (SpaceWak)</h3>

          <Footer
            logoSrc={SpacewakTextLogo}
            onClickTos={() => {
              alert("이용약관 보여주세요")
            }}
            onClickPrivacyPolicy={() => {
              alert("개인정보처리방침 보여주세요")
            }}
            onClickContact={() => {
              alert("Modal Open!")
            }}
          />
        </section>

        <section>
          <h3>Footer (WAKTAPLAY)</h3>

          <Footer
            logoSrc={WaktaplayTextLogo}
            onClickTos={() => {
              alert("이용약관 보여주세요")
            }}
            onClickPrivacyPolicy={() => {
              alert("개인정보처리방침 보여주세요")
            }}
            onClickContact={() => {
              alert("Modal Open!")
            }}
          />
        </section>

        <section>
          <h3>Menu</h3>

          <Menu
            selectedKey=""
            itemList={[
              {
                icon: <img src={FavorateSvg} />,
                label: "즐겨찾기",
                value: "favorate",
              },
              {
                icon: <img src={LogoutSvg} />,
                label: "로그아웃",
                value: "logOut",
              },
              {
                icon: <img src={Withdraw} />,
                label: "회원탈퇴",
                value: "signOut",
              },
            ]}
            onClick={() => {
              alert("Menu Clicked!")
            }}
          />
        </section>

        <section>
          <h3>Tabs</h3>

          {/* INFO: 해당 tabs 컴포넌트는 탭 ui 자체 뿐만 아니라 useState로 탭 되는 부분이 바뀌는 기능이 더해져 있어 아래와 같은 형태를 띄어야 합니다. 좀더 한 파일에 넣고 싶었으나 사용성을 위해 살짝 재사용성과 가독성이 떨어진다는 점 유의 부탁드립니다
        
          ✅ props 는 TABS 와 CHIPS 가 있습니다. 원하는 tab 이름과 원하는 chip들을 삽입가능 합니다.
          ✅ uint은 임시로 넣어둔 것이니 원하는 컨텐츠를 넣어 사용하시면 됩니다 
          ✅ const [selectedTabIndex, setSelectedTabIndex] = useState(0) 해당 useState를 꼭 사용해주세요 */}

          <div>
            <div>
              <Tabs
                TABS={TABS}
                selectedTabIndex={selectedTabIndex}
                setSelectedTabIndex={setSelectedTabIndex}
                topButtonComponent={
                  <Filter.Arrow
                    options={[
                      { label: "최신순", value: "newest" },
                      { label: "오래된순", value: "oldest" },
                      { label: "조회순", value: "views" },
                    ]}
                    onChange={value => alert(`filter 의 options 이 선택되었습니다 "${value}"`)}
                  />
                }
                bottomButtonComponent={
                  <Button.Fill size="small" onClick={() => alert("Button Click!")}>
                    Button Fill small gray
                  </Button.Fill>
                }
                chipComponents={CHIPS.map((CHIP, index) => (
                  <Chip.Normal
                    key={index}
                    item={CHIP}
                    onClick={(value: string) => {
                      alert(`${value} selected`)
                    }}
                  />
                ))}
              />
            </div>
            {selectedTabIndex === 0 && (
              <>
                {/* INFO : 해당 태그에 들어가 있는 TabshowMore 테스트용 태그 입니다.

                ✅ const [isShowedMore, setIsShowedMore] = useState(false) 해당 useState를 꼭 함께 사용해주세요! */}

                <FlexContainer>
                  {UNITS.map(UNIT => {
                    return isShowedMore || UNIT.index < 8 ? <Unit key={UNIT.index}>{UNIT.title}</Unit> : null
                  })}
                </FlexContainer>
                <TabShowMore isShowedMore={isShowedMore} setIsShowedMore={setIsShowedMore} />
              </>
            )}
            {selectedTabIndex === 1 && <div>2content2</div>}
            {selectedTabIndex === 2 && <div>3content3</div>}
          </div>
        </section>

        <section>
          <h3>Filter Arrow</h3>
          <Filter.Arrow
            options={[
              { label: "최신순", value: "newest" },
              { label: "오래된순", value: "oldest" },
              { label: "조회순", value: "views" },
            ]}
            onChange={value => alert(`filter 의 options 이 선택되었습니다 "${value}"`)}
          />
        </section>

        <section>
          <h3>Button</h3>
          <article
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "start",
            }}
          >
            <Button.Text onClick={() => alert("Button Click!")}>Button Text</Button.Text>
            <Button.Outline onClick={() => alert("Button Click!")}>Button Outline Small</Button.Outline>
            <Button.Outline size="large" onClick={() => alert("Button Click!")}>
              Button Outline large
            </Button.Outline>
            <Button.Fill size="small" onClick={() => alert("Button Click!")}>
              Button Fill small gray
            </Button.Fill>
            <Button.Fill size="medium" color="primary" onClick={() => alert("Button Click!")}>
              Button Fill medium primary
            </Button.Fill>
            <Button.Fill size="medium" cat color="primary" onClick={() => alert("Button Click!")}>
              Button Fill medium CAT primary
            </Button.Fill>
            <Button.Fill size="large" onClick={() => alert("Button Click!")}>
              Button Fill large gray
            </Button.Fill>
            <Button.More onChange={value => alert(`More Button Change Value: ${value ? "true" : "false"}`)} />
          </article>
        </section>

        <section>
          {/* 체크되면 글자색이 바뀝니다 */}
          <H3 isChecked={isChecked}>CheckBox</H3>

          <CheckBox
            id="testId"
            text="checkbox"
            name="test"
            value="testValue"
            checked={isChecked}
            // disabled
            ref={checkRef}
            onChange={() => {
              setIsChecked(!isChecked)
              handleAllCheckbox()
            }}
          />
        </section>

        <section>
          <h3>ToastMessage</h3>
          <Button.Fill
            size="small"
            onClick={() => {
              try {
                throw new Error("My 일정은 최대 9개까지 등록할 수 있어요.")
              } catch (error) {
                setMessage(error.message)
              }
              console.log(message)
            }}
          >
            토스트 테스트 버튼 - My 일정은 최대 9개까지 등록할 수 있어요.
          </Button.Fill>
          &nbsp;&nbsp;
          <Button.Fill
            size="small"
            onClick={() => {
              try {
                throw new Error("잘못된 형식입니다")
              } catch (error) {
                setMessage(error.message)
              }
              console.log(message)
            }}
          >
            토스트 테스트 버튼2 - 잘못된 형식입니다
          </Button.Fill>
        </section>

        <section>
          <h3>Chips</h3>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <Chip.Normal
              primary
              item={{ label: "텍스트", value: "txt" }}
              onClick={(value: string) => {
                alert(`${value} selected`)
              }}
            />
            <Chip.Medium
              item={{ icon: WaktaverseSVG, label: "왁타버스", value: "waktaverse" }}
              onClick={(value: string) => {
                alert(`${value} selected`)
              }}
            />
          </div>
          <h3>Modal</h3>
          <Button.Fill
            size="small"
            onClick={() => {
              setModalToggle(!modalToggle)
            }}
          >
            모달 띄우기
          </Button.Fill>

          {modalToggle && (
            <Modal
              onClose={() => {
                setModalToggle(false)
              }}
              title="제목은 최대 18자 입력 가능해요"
              description={`설명은 최대 59자\n2줄까지 입력 가능해요`}
              button
              buttonComment="버튼"
              onClickBtn={() => {
                alert("Button Clicked")
              }}
            />
          )}
        </section>

        <section>
          <h3>Video</h3>
          <article
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "start",
            }}
          >
            <Video
              size="small"
              src="https://via.placeholder.com/267x150.png"
              onClick={() => alert("video Click")}
              favoriteOnclick={() => alert("favorite Click")}
              date="2024년 9월 10일"
              view={10}
            />
            <Video
              size="medium"
              src="https://via.placeholder.com/341x189.png"
              favorite
              date="2024년 9월 10일"
              view="10만"
              member="multi"
              memberMultiCount={3}
            />
            <Video
              size="large"
              src="https://via.placeholder.com/356x200.png"
              date="2024년 9월 10일"
              view="150"
              member="single"
              memberSingleChip={<div>chips</div>}
            />
          </article>
        </section>

        <section>
          <h3>Link Calendar</h3>
          <LinkCalendar icon={Youtube} onClick={() => alert("link click")} />
          <LinkCalendar icon={Link} onClick={() => alert("link click")} />
        </section>

        <section>
          <h3>Notification</h3>

          <Notification itemList={notificationSample} />
        </section>

        <section>
          <h3>Artist Circle</h3>
          <Artist.Circle
            src="https://i.namu.wiki/i/GDB3F3mWykOQhKUS9ftE_EvT3RTU1GicQSXLo2e3ZhzERSEwjKhMGMwl82bcgjV1v7tqE6QGtOZDnoXeLYXRTA5mF7JWAxrKkdUhO_9TO32odlNNgWpbOSd2N9Vjlwa-OhWTphBN8fbvfKgiH2lE4Q.webp"
            label="아이네"
            backgroundColor="#A55CE9"
          />
          <Artist.Circle
            src="https://i.namu.wiki/i/s_TcEjLRXSizSo8BFJiuBk63OmfUrYqm4yw2LxEDTBljT9Hg219IMINMZ2ZJzwVDOmVPdpFgsnBBE8x93xftea6skVMfWo0y8ekPZhi7j6mY7HZ54-eadbHPNi7SUAq2Jzu0CE9PgjirV3_-4YGy2w.webp"
            label="징버거"
            backgroundColor="#FFDE1F"
            checked
          />
        </section>
      </main>

      <ToastMessage message={message} setMessage={setMessage} />
    </>
  )
}

// TODO : 아래 스타일은 더미 내용물에 대한 스타일 이므로 지우셔도됩니다.

// FOR : TABS
const Unit = styled.div`
  width: 50px;
  height: 50px;
  background-color: #0000ff;
  flex: 0 0 24%;
  margin: 0.5%;
`

const FlexContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

// FOR : CHECKBOX
const H3 = styled.h3<{ isChecked: boolean }>`
  color: ${({ isChecked }) => (isChecked ? "#0000ff" : "#ff0000")};
`

export default App

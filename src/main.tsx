import React from "react"
import ReactDOM from "react-dom/client"

import "normalize.css"
import "./main.css"

import Card from "@components/Card"
import Footer from "@components/Footer"
import Menu from "@components/Menu"

import FavorateSvg from "@assets/icons/favorate.svg"
import LogoutSvg from "@assets/icons/out.svg"
import Withdraw from "@assets/icons/withdraw.svg"
import { FilterArrow } from "./components/Filter"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
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
      <h3>Footer</h3>

      <Footer
        onClickContact={() => {
          alert("Modal Open!")
        }}
        onClickTerm={() => {
          alert("이용약관 보여주세요")
        }}
        onClickUserInfo={() => {
          alert("개인정보처리방침 보여주세요")
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
      <h3>Filter Arrow</h3>
      <FilterArrow
        options={[
          { label: "최신순", value: "newest" },
          { label: "오래된순", value: "oldest" },
          { label: "조회순", value: "mostview" },
        ]}
      />
    </section>
  </React.StrictMode>,
)

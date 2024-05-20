import styled from "styled-components"

const FooterWrapper = styled.footer`
  margin: 0;
  padding: 0;
`

const FooterSection = styled.section`
  display: flex;
  padding: 40px 150px 60px;
  flex-direction: row;
  background: #171717;
  align-items: flex-start;
  justify-content: space-between;
  color: white;
  height: 200px;
`

const FooterInfo = styled.div`
  flex: 0 0 fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`

const FooterInfoAppName = styled.p`
  font-weight: 700;
  font-size: 18px;
  height: fit-content;
  margin: 0;
`

const FooterInfoCopyRight = styled.p`
  font-size: 14px;
  height: fit-content;
  margin: 0;
`

const FooterContact = styled.div`
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`

const FooterContactTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
  height: fit-content;
`

const FooterContactButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FooterButtonText = styled.p`
  margin: 0;
  font-weight: 500;
  line-height: 21px;
  &:hover {
    cursor: pointer;
    font-weight: 700;
  }
`

const FooterTermsButton = styled.div`
  flex: 0 0 20%;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  margin: 0;
  height: 100%;
`

const Footer = ({
  onClickContact,
  onClickTerm,
  onClickUserInfo,
}: {
  onClickContact: () => void
  onClickTerm: () => void
  onClickUserInfo: () => void
}) => {
  return (
    <FooterWrapper>
      <FooterSection>
        <FooterInfo>
          <FooterInfoAppName>SPACEWAK</FooterInfoAppName>
          <FooterInfoCopyRight>Copyright ⓒ 2023 spacewak. All rights reserved.</FooterInfoCopyRight>
        </FooterInfo>

        <FooterContact>
          <FooterContactTitle>Contact</FooterContactTitle>

          <FooterContactButton>
            <FooterButtonText onClick={onClickContact}>문의하기</FooterButtonText>
          </FooterContactButton>
        </FooterContact>

        <FooterTermsButton>
          <FooterButtonText onClick={onClickTerm}>이용약관</FooterButtonText>
          <FooterButtonText onClick={onClickUserInfo}>개인정보처리방침</FooterButtonText>
        </FooterTermsButton>
      </FooterSection>
    </FooterWrapper>
  )
}

export default Footer
import styled from "styled-components"

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.5rem;
  user-select: none;

  @media (min-width: 768px) { 
    margin-bottom: 3rem; 
  }
`

const FooterSection = styled.section`
  width: 100%; 
  max-width: 72rem;
`

const FooterLine1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;

  @media (min-width: 768px) { 
    flex-direction: row; 
  }
`

const FooterLogoWrapper = styled.div`
  display: flex; 
  gap: 0.25rem; 
  align-items: center;
`

const FooterLogo = styled.img`
  height: 1.5rem;
`

const FooterLinks = styled.div`
  display: flex; 
  gap: 2rem; 
  align-items: center;
`

const FooterLink = styled.button`
  appearance: none; cursor: pointer;
  border: 0; outline: 0;

  padding-block: 0;
  padding-inline: 0;

  background-color: transparent;

  font-size: 0.875rem;
  line-height: 1.25rem; 
  font-weight: 700;

  color: #ffffff;
`

const FooterLine2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin: 0 2rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    align-items: flex-start;
    gap: 0.625rem;
    margin-left: 10.8rem;
  }
`

const FooterAcknowledgementText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;

  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 200;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0.125rem;
  }
`

const Footer = ({
  logoSrc,
  onClickTos,
  onClickPrivacyPolicy,
  onClickContact,
}: {
  logoSrc: string
  onClickTos: () => void
  onClickPrivacyPolicy: () => void
  onClickContact: () => void
}) => {
  return (
    <FooterWrapper>
      <FooterSection>
        <FooterLine1>
          <FooterLogoWrapper>
            <FooterLogo src={logoSrc} alt="Logo" />
          </FooterLogoWrapper>

          <FooterLinks>
            <FooterLink onClick={onClickTos}>이용약관</FooterLink>
            <FooterLink onClick={onClickPrivacyPolicy}>개인정보 처리방침</FooterLink>
            <FooterLink onClick={onClickContact}>문의하기</FooterLink>
          </FooterLinks>
        </FooterLine1>
        <FooterLine2>
          <FooterAcknowledgementText>
            <span>스페이스왁에서 운영하는 모든 웹, 앱 서비스는</span>
            <span>왁타버스에서 제공하는 공식 컨텐츠가 아닙니다.</span>
          </FooterAcknowledgementText>

          <FooterAcknowledgementText>
            <span>Copyright &copy; 2024 Team SpaceWak.</span>
          </FooterAcknowledgementText>
        </FooterLine2>
      </FooterSection>
    </FooterWrapper>
  )
}

export default Footer
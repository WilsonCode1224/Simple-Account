// MUI Library
import styled from "@emotion/styled";
import { Button, Container, IconButton } from "@mui/material";

// MUI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

// Hooks
import { useNavigate } from "react-router-dom";
import "animate.css";
// Style components
const BodyColor = styled.div`
  background: linear-gradient(to bottom, #87ceeb, #1e90ff);
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  letter-spacing: 2rem;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeImage = styled.img`
  width: 100px;
  height: 100px;
  height: auto;
`;

const StyledButton = styled(Button)`
  letter-spacing: 0.1rem;

  @media (max-width: 390px) {
    padding: 8px 16px; /* 修改按鈕的 padding */
    font-size: 12px; /* 修改文字大小 */
  }
`;

// H2 styles:

const StyledH2 = styled.h2`
  color: black;
  position: relative;
  text-align: left;
  &:after {
    content: "";
    display: block;
    width: 20%;
    height: 2px; /* 底線高度 */
    background-color: white; /* 底線顏色 */
    position: absolute;
    bottom: 5;
    left: 0;
  }
`;

const HomePageDemo = () => {
  const navigate = useNavigate();
  return (
    <>
      <BodyColor>
        <Container maxWidth="md">
          <Header>
            <StyledButton
              variant="contained"
              size="medium"
              onClick={() => navigate("/apphome")}
            >
              使用試用版
            </StyledButton>
            <HomeImage
              className="animate__animated animate__rotateIn"
              src="/images/fubon.png"
            />
            <StyledButton
              variant="contained"
              size="medium"
              style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
            >
              登入帳戶
            </StyledButton>
          </Header>
          <Content>
            <StyledH2 className="animate__animated animate__backInLeft">
              Product interface
            </StyledH2>
            <StyledH2 className="animate__animated animate__backInRight">
              Product interface
            </StyledH2>
            <StyledH2>Product interface</StyledH2>
            <StyledH2>Product interface</StyledH2>
          </Content>

          <Footer>
            <div>
              <p>
                Copyright © SIMPLE ACCOUNT Inc. All Rights Reserved. <br />
                LINE ID number：3345678 <br />
                本網站僅作為學習使用 , 任何素材及 logo 非用於商業用途
              </p>
            </div>
            <IconButton color="primary">
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary">
              <InstagramIcon />
            </IconButton>
            <IconButton color="primary">
              <TwitterIcon />
            </IconButton>
          </Footer>
        </Container>
      </BodyColor>
    </>
  );
};

export default HomePageDemo;

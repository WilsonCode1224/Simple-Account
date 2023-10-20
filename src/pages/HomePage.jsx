import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const HomePage = () => {
  return (
    <>
      <Container>
        <AppBar position="static">
          <Link to="/apphome">暫時用的</Link>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ flex: 1, textAlign: "center" }}>
              <img
                src="/src/images/homepagelogo.png" // 記得替換成你的圖片路徑
                alt="HomeLogo"
                style={{
                  borderRadius: "50%",
                  width: "10%",
                  Height: "50%",
                  marginBottom: "1rem",
                  marginTop: "1rem",
                  marginLeft: 150,
                }}
              />
            </Typography>

            {/* 右側選單 */}
            <Link to="/login">
              <Button
                color="inherit"
                sx={{
                  "&:hover": {
                    backgroundColor: "#fff", // 設置 hover 時的背景顏色
                    color: "#2196F3", // 設置 hover 時的文字顏色
                  },
                }}
              >
                登入並開始使用
              </Button>
            </Link>
          </Toolbar>
        </AppBar>

        {/* 主要內容區域 */}
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          {/* 你的主要內容放在這裡 */}
          <Typography variant="h4">This is Contextbox!</Typography>
          {/* 可以添加其他內容，例如表格、圖片等 */}
        </div>

        {/* Footer */}
        <footer
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#f5f5f5",
          }}
        >
          {/* 左側兩行內容 */}
          <div>
            <Typography variant="body2">關於我們</Typography>
            <Typography variant="body2">
              Copyright © SIMPLE ACCOUNT Inc. All Rights Reserved. LINE ID
              number：3345678
            </Typography>
          </div>

          {/* 右側社交媒體圖標 */}
          <div style={{ display: "flex" }}>
            <IconButton color="primary">
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary">
              <InstagramIcon />
            </IconButton>
            <IconButton color="primary">
              <TwitterIcon />
            </IconButton>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default HomePage;

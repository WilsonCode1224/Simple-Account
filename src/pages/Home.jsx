// MUI
import { Container, Button } from "@mui/material";

// MUI Icon
import AddIcon from "@mui/icons-material/Add";
import SummarizeIcon from "@mui/icons-material/Summarize";

// Hooks
import { useEffect, useState, useContext } from "react";
// rrd
import { Link } from "react-router-dom";
// import Context
import { tryContext } from "../App";

// Home
const Home = () => {
  const [currentDate, setCurrentDate] = useState("");
  const { item } = useContext(tryContext);

  useEffect(() => {
    // get Date:
    setCurrentDate(getCurrentData());
  }, []);

  const getCurrentData = () => {
    const taipeiData = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Taipei",
    });
    return taipeiData;
  };

  const totalAmount = item.reduce(
    (acc, money) => acc + parseFloat(money.amount),
    0
  );

  // JSX
  return (
    <>
      <Container style={{ textAlign: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Simple Account</h1>
        </Link>
        <p>{currentDate}</p>
        <p>
          顯示金額: <b className="cost-color">${totalAmount}</b>
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "10px",
            paddingBottom: "10px",
            borderBottom: "2px solid #004466",
          }}
        >
          <Link to="/appnote">
            <Button variant="outlined">
              <AddIcon />
              紀錄你的消費
            </Button>
          </Link>
          <Link to="/apphistory">
            <Button variant="outlined">
              <SummarizeIcon />
              檢視歷史紀錄
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Home;

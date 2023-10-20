// Hooks
import { useContext } from "react";

// MUI
import { Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

// rrd
import { useNavigate } from "react-router-dom";
import CustomizedAccordions from "../components/Customization";
import { tryContext } from "../App";

// useContext

const History = () => {
  const navigate = useNavigate();
  const { item, setItem } = useContext(tryContext);
  console.log("History", item);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #004466",
        }}
      >
        <Button
          style={{ width: "10%", margin: "10px", padding: "10px" }}
          fullWidth
          variant="contained"
          color="success"
          onClick={() => navigate("/apphome")}
        >
          <HomeIcon />
        </Button>
        <Typography variant="h4" component="h2">
          歷史資料
        </Typography>
      </div>
      <div>
        <CustomizedAccordions />
      </div>
    </>
  );
};

export default History;

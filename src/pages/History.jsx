// Hooks
import { useContext } from "react";

// MUI
import { Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PieChartIcon from "@mui/icons-material/PieChart";

// rrd
import { useNavigate } from "react-router-dom";
import CustomizedAccordions from "../components/Customization";

// Context
import { ItemContext } from "../AppContext/ItemContext";

// Code
const History = () => {
  const navigate = useNavigate();
  const { item, setItem } = useContext(ItemContext);
  console.log("History", item);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #004466",
          justifyContent: "space-around",
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
        <Button
          style={{ width: "10%", margin: "10px", padding: "10px" }}
          fullWidth
          variant="outlined"
          color="success"
          onClick={() => navigate("/chartpages")}
        >
          <PieChartIcon />
        </Button>
      </div>
      <div>
        <CustomizedAccordions />
      </div>
    </>
  );
};

export default History;

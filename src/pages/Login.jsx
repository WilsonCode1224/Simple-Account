// MUI
import { Button } from "@mui/material";
// rrd
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Link to="/">
        <Button
          color="inherit"
          sx={{
            "&:hover": {
              backgroundColor: "#fff", // 設置 hover 時的背景顏色
              color: "#2196F3", // 設置 hover 時的文字顏色
            },
          }}
        >
          Back
        </Button>
      </Link>
      <div>Login</div>
    </>
  );
};

export default Login;

// Hooks:
import { useState, useEffect, useRef, useContext } from "react";

// rrd:
import { useNavigate } from "react-router-dom";

// components(MUI):
import { TextField, Button, css } from "@mui/material";
import ToastSnackbar from "../components/ToastSnackbar";
import ExpenseCategorySelect from "../components/ExpenseCategorySelect";
import HomeIcon from "@mui/icons-material/Home";
// import Components(Context):
import { tryContext } from "../App";

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const textFieldStyles = css`
  display: block;
  margin: 10px;
`;

const buttonStyles = css`
  display: block;
`;

// Note.jsx
const Note = () => {
  const { item, setItem } = useContext(tryContext);
  const navigate = useNavigate();

  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast({ ...toast, open: false });
  };

  const selectedCategoryRef = useRef("");

  const handleSave = () => {
    const dateValue = dateRef.current.value;
    const amountValue = amountRef.current.value;
    const descriptionValue = descriptionRef.current.value;

    const newItem = {
      date: dateValue,
      amount: amountValue,
      description: descriptionValue,
      category: selectedCategoryRef.current,
    };

    setItem([...item, newItem]);

    dateRef.current.value = "";
    amountRef.current.value = "";
    descriptionRef.current.value = "";

    setToast({
      open: true,
      message: "您已記錄一筆消費！",
      severity: "success",
    });
  };

  useEffect(() => {
    if (toast.open) {
      const timeoutId = setTimeout(() => {
        navigate("/apphome");
      }, 1800);

      return () => clearTimeout(timeoutId);
    }
  }, [toast.open]);

  const dateRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);

  // Delete method
  const handleDelete = () => {};

  return (
    <>
      <div style={{ textAlign: "center" }} css={containerStyles}>
        <div style={{ display: "flex" }}>
          <Button
            style={{ margin: "10px", padding: "10px", width: "10%" }}
            fullWidth
            variant="contained"
            color="success"
            onClick={() => navigate("/apphome")}
          >
            <HomeIcon />
            返回主頁面
          </Button>
        </div>

        <form>
          <TextField
            required
            css={textFieldStyles}
            label="日期"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            inputRef={dateRef}
          />

          <TextField
            required
            css={textFieldStyles}
            label="輸入金額"
            type="number"
            placeholder="輸入消費金額$$"
            inputRef={amountRef}
          />

          <TextField
            required
            css={textFieldStyles}
            label="消費描述"
            type="text"
            placeholder="花了什麼錢呢？"
            inputRef={descriptionRef}
          />
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <ExpenseCategorySelect
              onCategoryChange={(category) => {
                selectedCategoryRef.current = category;
              }}
            />
          </div>

          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <Button
              css={buttonStyles}
              variant="contained"
              onClick={handleSave}
              fullWidth
            >
              完成輸入
            </Button>
          </div>
        </form>

        {item.map((record, index) => (
          <div key={index}>
            <p>日期: {record.date}</p>
            <p>金額: {record.amount}</p>
            <p>描述: {record.description}</p>
            <p>消費分類: {record.category}</p>
            <Button onClick={handleDelete} variant="outlined" color="error">
              刪除該項目
            </Button>
            <hr />
          </div>
        ))}
        <ToastSnackbar
          open={toast.open}
          onClose={handleCloseToast}
          message={toast.message}
          severity={toast.severity}
        />
      </div>
    </>
  );
};

export default Note;

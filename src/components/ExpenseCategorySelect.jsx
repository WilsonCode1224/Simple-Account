// ExpenseCategorySelect.jsx

import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ExpenseCategorySelect = ({ onCategoryChange }) => {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    onCategoryChange(selectedCategory); // 將所選值傳遞給父元件
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">分類</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="分類"
          onChange={handleChange}
        >
          <MenuItem value="固定支出">固定支出</MenuItem>
          <MenuItem value="餐費">餐費</MenuItem>
          <MenuItem value="交通費">交通費</MenuItem>
          <MenuItem value="社交費">社交費</MenuItem>
          <MenuItem value="治裝費">治裝費</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ExpenseCategorySelect;

// useContext
import { useContext } from "react";
//  context Data
import { tryContext } from "../App";
// Hooks
import { useNavigate } from "react-router-dom";
// MUI
import { Button } from "@mui/material";
// Chart.js
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  // Link to:
  const navigate = useNavigate();
  // get context:
  const { item, setItem } = useContext(tryContext);
  console.log("chart pages:", item);
  // piechart:

  // 生成每個月份的 chartData
  const dataByMonth = item.reduce((acc, record) => {
    const month = record.date.slice(0, 7); // get year/month
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(record);
    return acc;
  }, {});

  const chartDataByMonth = Object.keys(dataByMonth).map((month) => {
    const monthData = dataByMonth[month];

    return {
      labels: monthData.map((record) => record.category),
      datasets: [
        {
          data: monthData.map((record) => record.amount),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    width: 200, // 設置寬度
    height: 200, // 設置高度
  };

  return (
    <>
      <div>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          onClick={() => navigate("/apphome")}
        >
          Back History page.
        </Button>
      </div>
      <div
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        className="chartdata"
      >
        <h1>View Charts</h1>
        {chartDataByMonth.map((chartData, index) => (
          <div key={index}>
            {/* 顯示月份 */}
            <h2>{Object.keys(dataByMonth)[index]}</h2>
            {/* 將對應月份的資料傳遞給 Pie 元件 */}
            <Pie data={chartData} options={chartOptions} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PieChart;

// labels: item.map((record) => record.category),
// datasets: [
//   {
//     data: item.map((record) => record.amount),
//     backgroundColor: [
//       "rgba(75,192,192,1)",
//       "#ecf0f1",
//       "#50AF95",
//       "#f3ba2f",
//       "#2a71d0",
//     ],
//     borderColor: "black",
//     borderWidth: 2,
//   },
// ],

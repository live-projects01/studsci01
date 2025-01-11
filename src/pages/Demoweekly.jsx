import React, { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Demoweekly = () => {
  const [chartData, setChartData] = useState(null);

  const fetchReport = async (type) => {
    try {
      const url =
        type === "weekly"
          ? "http://localhost:5001/api/weekly-report"
          : "http://localhost:5001/api/monthly-report";
      const response = await axios.get(url);
      const data = response.data;

      setChartData({
        labels: data.days,
        datasets: [
          {
            label: "Morning Reading",
            data: data.morning,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            tension: 0.4,
          },
          {
            label: "Afternoon Reading",
            data: data.afternoon,
            borderColor: "rgb(54, 162, 235)",
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            tension: 0.4,
          },
          {
            label: "Evening Reading",
            data: data.evening,
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            tension: 0.4,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching report:", error);
    }
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold text-center mb-4">
        Thermometer Reports
      </h1>
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => fetchReport("weekly")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Get Weekly Report
        </button>
        <button
          onClick={() => fetchReport("monthly")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Get Monthly Report
        </button>
      </div>
      {chartData && (
        <div className="max-w-4xl mx-auto">
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: "Temperature Readings",
                  font: { size: 20 },
                },
                legend: {
                  position: "top",
                },
              },
              scales: {
                x: {
                  title: { display: true, text: "Day Number" },
                },
                y: {
                  title: { display: true, text: "Temperature (°C)" },
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Demoweekly;

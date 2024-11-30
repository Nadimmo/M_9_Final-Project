import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import useMenu from "../Hooks/useMenu";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-sm font-bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComponent = () => {
  const [menu] = useMenu();

  // Filter data by category
  const data = [
    { name: "Offered", value: menu.filter((item) => item.category === "offered").length },
    { name: "Pizza", value: menu.filter((item) => item.category === "pizza").length },
    { name: "Dessert", value: menu.filter((item) => item.category === "dessert").length },
    { name: "Salad", value: menu.filter((item) => item.category === "salad").length },
    { name: "Soup", value: menu.filter((item) => item.category === "soup").length },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg lg:w-[420px] mx-auto lg:mt-0 mt-2">

      <div className="w-full h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Category Legend */}
      <div className="mt-4">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center text-sm">
            <div
              className="w-4 h-4 mr-2"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <p>{entry.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;

import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import useMenu from '../Hooks/useMenu';

// Colors for the bars
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red'];

// Function to generate a custom triangular bar shape
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = ({ fill, x, y, width, height }) => {
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const CustomBarChartComponent = () => {
  const [menu] = useMenu();

  // Filter data by category
  const data = [
    { name: 'Offered', value: menu.filter((item) => item.category === 'offered').length },
    { name: 'Pizza', value: menu.filter((item) => item.category === 'pizza').length },
    { name: 'Dessert', value: menu.filter((item) => item.category === 'dessert').length },
    { name: 'Salad', value: menu.filter((item) => item.category === 'salad').length },
    { name: 'Soup', value: menu.filter((item) => item.category === 'soup').length },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg lg:w-[420px] mx-auto">
      <div className="w-full h-80">
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="value"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: 'top' }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomBarChartComponent;

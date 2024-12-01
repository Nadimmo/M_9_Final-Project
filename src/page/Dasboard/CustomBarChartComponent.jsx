import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';

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

  // Filter data by category
  const { data: chartData = [] } = useQuery({
    queryKey: ['order-stats'],
    queryFn: async () => {
        const res = await useAxiosSecure.get('/order-stats');
        return res.data;
    }
})


  return (
    <div className="p-6 bg-white shadow-lg rounded-lg lg:w-[420px] mx-auto">
      <div className="w-full h-80">
        <ResponsiveContainer>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: 'top' }}
            >
              {chartData.map((entry, index) => (
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

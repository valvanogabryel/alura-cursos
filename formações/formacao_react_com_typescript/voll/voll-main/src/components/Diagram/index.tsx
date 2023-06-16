import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function Diagram() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
      >
        <XAxis type="number"></XAxis>
        <YAxis type="category" dataKey="nome"></YAxis>
        <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

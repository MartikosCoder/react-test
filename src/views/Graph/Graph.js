import React from "react";
import "./Graph.css";

import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function Graph() {
  const users = useSelector((state) => state.users.value);

  if (users.length === 0)
    return (
      <main>
        <h2>Нет данных</h2>
      </main>
    );

  return (
    <main>
      <div>
        <h2>Кол-во выполненных задач ( в шт. )</h2>
        <BarChart
          width={600}
          height={400}
          data={users}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="work" fill="#8884d8" />
        </BarChart>
      </div>

      <div>
        <h2>Кол-во затраченного времени ( в ч. )</h2>
        <BarChart
          width={600}
          height={400}
          data={users}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="time" fill="#8884d8" />
        </BarChart>
      </div>
    </main>
  );
}

export default Graph;

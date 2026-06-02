import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

const pieData = [
  { name: "Todo", value: 5 },
  { name: "In Progress", value: 8 },
  { name: "Done", value: 12 },
];

const barData = [
  { week: "Week 1", tasks: 4 },
  { week: "Week 2", tasks: 7 },
  { week: "Week 3", tasks: 10 },
];

const COLORS = [
  "#3b82f6",
  "#f59e0b",
  "#10b981"
];

export default function Dashboard() {
  return (
    <div
      style={{
        padding: "30px",
        background: "#f3f4f6",
        minHeight: "100vh"
      }}
    >

      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "30px"
        }}
      >
        Dashboard
      </h1>

      {/* KPI Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginBottom: "30px"
        }}
      >

        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
          <h3>Total Tasks</h3>
          <h1>25</h1>
        </div>

        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
          <h3>Completed</h3>
          <h1>12</h1>
        </div>

        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
          <h3>Pending</h3>
          <h1>8</h1>
        </div>

        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
          <h3>Delayed</h3>
          <h1>5</h1>
        </div>

      </div>

      {/* Charts */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px"
        }}
      >

        {/* Pie Chart */}

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}
        >

          <h2>Task Status</h2>

          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                label
              >

                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* Bar Chart */}

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}
        >

          <h2>Weekly Productivity</h2>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={barData}>

              <XAxis dataKey="week" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="tasks"
                fill="#6366f1"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

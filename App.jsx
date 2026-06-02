import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";

function Tasks() {
  return (
    <div style={{ padding: "30px", marginLeft: "270px" }}>
      <h1>Tasks Page</h1>
    </div>
  );
}

function Members() {
  return (
    <div style={{ padding: "30px", marginLeft: "270px" }}>
      <h1>Members Page</h1>
    </div>
  );
}

function DashboardLayout() {
  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div
        style={{
          marginLeft: "270px",
          width: "100%"
        }}
      >
        <Dashboard />
      </div>

    </div>
  );
}

function TasksLayout() {
  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div
        style={{
          marginLeft: "270px",
          width: "100%"
        }}
      >
        <Tasks />
      </div>

    </div>
  );
}

function MembersLayout() {
  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div
        style={{
          marginLeft: "270px",
          width: "100%"
        }}
      >
        <Members />
      </div>

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/dashboard" />}
        />

        <Route
          path="/dashboard"
          element={<DashboardLayout />}
        />

        <Route
          path="/tasks"
          element={<TasksLayout />}
        />

        <Route
          path="/members"
          element={<MembersLayout />}
        />

      </Routes>

    </BrowserRouter>
  );
}

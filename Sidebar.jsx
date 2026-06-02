import { useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#111827",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        position: "fixed",
        left: 0,
        top: 0
      }}
    >

      <h2
        style={{
          marginBottom: "20px",
          fontSize: "24px"
        }}
      >
        Management System
      </h2>

      {/* Dashboard */}

      <button
        onClick={() => navigate("/dashboard")}
        style={buttonStyle}
      >
        📊 Dashboard
      </button>

      {/* Tasks */}

      <button
        onClick={() => navigate("/tasks")}
        style={buttonStyle}
      >
        📋 Tasks
      </button>

      {/* Members */}

      <button
        onClick={() => navigate("/members")}
        style={buttonStyle}
      >
        👥 Members
      </button>

      {/* Export PDF */}

      <button
        style={buttonStyle}
      >
        📄 Export PDF
      </button>

      {/* Export Excel */}

      <button
        style={buttonStyle}
      >
        📊 Export Excel
      </button>

      {/* Back Button */}

      <button
        onClick={() => navigate(-1)}
        style={{
          ...buttonStyle,
          marginTop: "auto",
          background: "#374151"
        }}
      >
        ⬅ ย้อนกลับ
      </button>

    </div>
  );
}

const buttonStyle = {
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  background: "#2563eb",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
  textAlign: "left"
};

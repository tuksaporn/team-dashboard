export default function ExportButtons() {

  const exportPDF = () => {
    alert("Export PDF Success");
  };

  const exportExcel = () => {
    alert("Export Excel Success");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        marginBottom: "20px"
      }}
    >

      {/* Export PDF */}

      <button
        onClick={exportPDF}
        style={{
          padding: "12px 20px",
          border: "none",
          borderRadius: "10px",
          background: "#dc2626",
          color: "white",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: "bold"
        }}
      >
        📄 Export PDF
      </button>

      {/* Export Excel */}

      <button
        onClick={exportExcel}
        style={{
          padding: "12px 20px",
          border: "none",
          borderRadius: "10px",
          background: "#059669",
          color: "white",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: "bold"
        }}
      >
        📊 Export Excel
      </button>

    </div>
  );
}

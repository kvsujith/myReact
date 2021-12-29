import "./styles.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Report from "./routes/Report";
import Month from "./routes/Month";
import ReportList from "./routes/ReportList";
import Today from "./routes/Today";
export default function App() {
  let navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    margin: "20px 0px"
  };
  return (
    <div className="App">
      <nav style={navStyle}>
        <Link to="/"> Home </Link>
        <Link to="/report"> Report </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="report" element={<Report />}>
          <Route index element={<ReportList />} />
          <Route path="month" element={<Month />} />
          <Route path="today" element={<Today />} />
        </Route>
      </Routes>
    </div>
  );
}

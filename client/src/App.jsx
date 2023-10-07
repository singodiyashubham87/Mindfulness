import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AssessmentPage from "./components/AssessmentPage";
import ResultPage from "./components/ResultPage";
import TrackingPage from "./components/TrackingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/track" element={<TrackingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

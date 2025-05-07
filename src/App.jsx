import CppCompilerLoading from "./components/loading";
import { Routes, Route } from "react-router-dom";
import ProjectDetailPage from "./pages/projectView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CppCompilerLoading />} />
      {/* <Route path="/projectview" element={<ProjectDetailPage />} /> */}
    </Routes>
  );
}

export default App;

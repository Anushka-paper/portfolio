import { Route, Routes } from "react-router-dom";
import { Desktop } from "#components";
import AdminApp from "#admin/AdminApp.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Desktop />} />
      <Route path="/admin/*" element={<AdminApp />} />
    </Routes>
  );
};

export default App;

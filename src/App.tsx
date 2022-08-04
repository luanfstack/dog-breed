import { Navigate } from "react-router-dom";

function App() {
  return sessionStorage.getItem("token") ? (
    <Navigate to="/list" replace={true} />
  ) : (
    <Navigate to="/register" replace={true} />
  );
}

export default App;

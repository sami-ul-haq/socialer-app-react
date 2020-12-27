import "./App.css";
import Home from "./pages/home/Home";
import { UserContextProvider } from "./context/userContext";
function App() {
  return (
    <UserContextProvider>
      <div className="app">
        <Home />
      </div>
    </UserContextProvider>
  );
}

export default App;

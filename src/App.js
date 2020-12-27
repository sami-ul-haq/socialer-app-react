import Home from "./pages/home/Home";
import { UserContextProvider } from "./context/userContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/not-found/NotFound";
function App() {
  return (
    <UserContextProvider>
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;

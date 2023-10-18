import "./App.css";
import Dashboard from "./scenes/dashspace/Dashboard";
import Sidenav from "./scenes/global/Sidenav";
import Topbar from "./scenes/global/Topbar";

function App() {

  return (
    <>
      <div className="app">
        <Sidenav />
        <main className="content">
          <Topbar />
          <Dashboard/>
        </main>
      </div>
    </>
  );
}

export default App;

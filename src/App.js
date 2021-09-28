import logo from "./logo.svg";
import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserCard></UserCard>
      </header>
    </div>
  );
}

export default App;

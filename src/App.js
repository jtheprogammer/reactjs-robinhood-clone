import "./App.css";
import Header from "./components/Header/Header";
import Newsfeed from "./components/Newsfeed/Newsfeed";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="app__header">
        <Header />
      </div>

      {/* Body */}
      <div className="app__body">
        <div className="app__container">
          {/* Newsfeed */}
          <Newsfeed />
          {/* Stats */}
          <Stats />
        </div>
      </div>
      
    </div>
  );
}

export default App;

import "./App.css";
import Globe from "./components/Globe/magicui/globe";





function App() {

  return (
    <div>
        
      <Globe className='globe-bg'/>

      <h1 className="text-3xl font-bold welcome-msg">
        Welcome to IndiGo Flight Tracker
      </h1>
    </div>
  );
}

export default App;

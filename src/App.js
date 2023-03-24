import './App.css';
import Chart from './Components/Chart/Chart';
import NavBar from './Components/NavBar/NavBar';
import PhoneBar from './Components/PhoneBar/PhoneBar';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-3xl font-bold underline">Hello, Is tailwind here?</h1>
      <p>Yes it's here now.</p>
      <Pricing></Pricing>
      <Chart></Chart>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
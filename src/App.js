import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import FlightSchedule from './FlightSchedule';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to={'/reservar'}>Reservar</Link>
      </BrowserRouter>
      <FlightSchedule>

      </FlightSchedule>
    </div>
  );
}

export default App;

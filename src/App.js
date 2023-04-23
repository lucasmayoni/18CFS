import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import FlightSchedule from './components/FlightSchedule';
import ScheduleList from './components/ScheduleList';
import Navbar from './components/navigation/navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/reservar' element={<FlightSchedule />} />
          <Route path='/listado-reservas' element={<ScheduleList />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

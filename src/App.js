import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FlightSchedule from './components/FlightSchedule';
import ScheduleList from './components/ScheduleList';
import Navbar from './components/navigation/navbar';
import { Layout } from 'antd';
import { useState } from 'react';

const { Header, Content } = Layout;

function App() {
  return (

    <BrowserRouter>
      <Layout className="layout">
        <Header>
          <Navbar />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content" style={{ background: "white" }}>
            <Routes>
              <Route path='/reservar' element={<FlightSchedule />} />
              <Route path='/listado-reservas' element={<ScheduleList />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </BrowserRouter >


  );
}

export default App;

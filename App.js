import React from 'react';
import EventSchedule from './components/EventSchedule';
import NetworkingSection from './components/NetworkingSection';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>ConnectKof Event App</h1>
      <EventSchedule />
      <NetworkingSection />
      <UserProfile />
    </div>
  );
}

export default App;


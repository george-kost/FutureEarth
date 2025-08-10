import React, { useState, useEffect } from 'react';
import MapView from './components/MapView';
import ActionsPanel from './components/ActionsPanel';

function App() {
  const [climateData, setClimateData] = useState([]);
  const [year, setYear] = useState(2023);
  const [storyText, setStoryText] = useState("Welcome to FutureEarth!");

  useEffect(() => {
    fetch(`/api/climate?year=${year}`)
      .then(res => res.json())
      .then(data => setClimateData(data))
      .catch(err => console.error('Failed to load climate data', err));
  }, [year]);

  const handleAction = (actionType) => {
    fetch('/api/actions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: actionType, year })
    })
    .then(res => res.json())
    .then(response => {
      if (response.nextStory) setStoryText(response.nextStory);
      if (response.updatedData) setClimateData(response.updatedData);
    });
  };

  return (
    <div>
      <h1>FutureEarth</h1>
      <p>{storyText}</p>
      <MapView climateData={climateData} selectedYear={year} />
      <ActionsPanel onAction={handleAction} />
      <div>
        <button onClick={() => setYear(2023)}>Now</button>
        <button onClick={() => setYear(2030)}>2030</button>
        <button onClick={() => setYear(2050)}>2050</button>
      </div>
    </div>
  );
}

export default App;

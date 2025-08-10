import React from 'react';

function ActionsPanel({ onAction }) {
  return (
    <div>
      <h3>Choose an action:</h3>
      <button onClick={() => onAction('plantTree')}>🌳 Plant Tree</button>
      <button onClick={() => onAction('cleanRiver')}>🚮 Clean River</button>
      <button onClick={() => onAction('reduceEmissions')}>💡 Reduce Emissions</button>
    </div>
  );
}

export default ActionsPanel;

import React from 'react';
import ProgressBar from './ProgressBar';

function App() {
  return (
    <div className="App">
      <h1>React Progress Bar</h1>
      {/* Duration is in milliseconds, maxPercentage is the target percentage */}
      <ProgressBar duration={5000} maxPercentage={100} />
    </div>
  );
}

export default App;
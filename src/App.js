import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [value, setValue] = useState('Текст в инпуте')

  return (
    <div className="App">
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
      <Counter/>
    </div>
  );
}

export default App;

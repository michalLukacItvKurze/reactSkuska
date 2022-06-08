import React, { useState } from 'react';

function App({nadpis}) {


  const [cislo, zmenCislo] = useState(0);

  return (
    <div>
      <h1>{nadpis}</h1>
      <button onClick={() => zmenCislo(cislo + 1)}>+</button>
      <pre style={{display:'inline'}}>{cislo}</pre>
      <button onClick={() => zmenCislo(cislo - 1)}>-</button>
    </div>
  );
}

export default App;

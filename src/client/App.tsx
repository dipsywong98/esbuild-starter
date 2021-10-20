import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = (): JSX.Element => {
  const [str, setStr] = useState('loading');
  useEffect(() => {
    axios.get<string>('/api/ping').then(({ data }) => setStr(data)).catch((err: Error) => setStr(err.message));
  }, []);

  return (
    <div>{str}</div>
  );
};

export default App;

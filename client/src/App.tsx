import React from 'react';
import './App.css';
import Button from './Components/Common/Button';
// loading, handelClick, text, width
const App : React.FC = () => (
  <div className="App">

    <Button loading={false} handelClick={() => console.log('hellw')} text="button" width={2} />
  </div>
);

export default App;

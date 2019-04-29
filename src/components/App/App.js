import React from 'react';
import Form from '../Register/Form';
import Header from '../Register/Header';
import Link from '../Register/Link';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header 
        compName="Quick-tech" 
        title="Employees Register"
      />
      <Link 
        link="View all Employess" 
      />
      <Form />
    </div>
  );
}

export default App;

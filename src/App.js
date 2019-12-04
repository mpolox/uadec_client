import React from 'react';
import './App.css';
import UserContextProvider from './contexts/UserContext';
import Navbar from './components/Navbar';
import UserList from "./components/UserList"
import UserForm from './components/UserForm';
import TestComponent from './components/TestComponent';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <TestComponent/>
        <Navbar />
        <UserList />
        <UserForm />
      </UserContextProvider>
    </div>
  );
}

export default App;

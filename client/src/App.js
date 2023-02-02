import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Dashboard';
import Login from './Login'
import { useState, useEffect } from "react";

const accessToken = new URLSearchParams(window.location.search).get('access_token');
const refreshToken = new URLSearchParams(window.location.search).get('refresh_token');

function App() {
  if (accessToken) {
    console.log('hi')
  }

  return (
    accessToken ? <Dashboard accessToken={accessToken}/> : <Login />
    //<Login />
  );
}

export default App;

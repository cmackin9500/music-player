import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Dashboard';
import Login from './Login'

const accessToken = new URLSearchParams(window.location.search).get('access_token');
const refreshToken = new URLSearchParams(window.location.search).get('refresh_token');

function App() {
  return (
    code ? <Dashboard code={code}/> : <Login />
    //<Login />
  );
}

export default App;

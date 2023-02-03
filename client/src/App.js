import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Dashboard';
import Login from './Login'
import './index.css';
import Wrapper from './Wrapper';

const accessToken = new URLSearchParams(window.location.search).get('access_token');
const refreshToken = new URLSearchParams(window.location.search).get('refresh_token');

function App() {
  return (
    //<Wrapper>
      accessToken ? <Dashboard accessToken={accessToken}/> : <Login />
    //</Wrapper>
  );
}

export default App;

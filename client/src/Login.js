import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const querystring = require('querystring');

var client_id = '9a6bbb853c3b433fa34db94e0a2e2881';
var redirect_uri = 'http://localhost:3001';
var scope = 'streaming user-read-private user-read-email user-library-read user-library-modify user-read-playback-state user-modify-playback-state';
//var state = generateRandomString(16);
var state = "123456789123456"

const AUTH_URL = 'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
        client_id: client_id,
        response_type: 'code',
        redirect_uri: redirect_uri,
        scope: scope,
        state: state
    });

const Login = () => {
    return (
        <Container 
            className="d-flex"
            style={{ 
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh"}}>
            <Button className="btn" size="lg" variant="success" href={redirect_uri}> Login with Spotify </Button>
        </Container>
    )
};

export default Login;
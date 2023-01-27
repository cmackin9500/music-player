import { Container } from 'react-bootstrap'
const querystring = require('querystring');

var client_id = '9a6bbb853c3b433fa34db94e0a2e2881';
var redirect_uri = 'http://localhost:3000';
var scope = 'streaming user-read-private user-read-email user-library-read user-library-modify user-read-playback-state user-modify-playback-state';
//var state = generateRandomString(16);

const AUTH_URL = 'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
        client_id: client_id,
        response_type: 'code',
        redirect_uri: redirect_uri,
        scope: scope,
        //state: state
    });

const Login = () => {
    return (
        <Container>
            <a className="btn btn-success btn-lg" href={AUTH_URL}> Login with Spotify </a>
        </Container>
    )
};

export default Login;
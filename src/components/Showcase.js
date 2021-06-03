import './Showcase.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import donut from './images/Donut03.png';

function Showcase() {
    return (
        <div className="showcase" id="showcase">
            <h1>More Coming Soon.</h1>
            <div className="showcase-container">
                <Card style={{ width: '400px' }}>
                    <Card.Img variant="top" src={donut} className="showcase-img" />
                    <Card.Header>Full Stack Application</Card.Header>
                    <Card.Body>
                        <Card.Title>Social Networking Web App</Card.Title>

                        <Card.Text>
                            Sign up, log in, and post texts or images to a global feed.
                        </Card.Text>
                        <Button variant="outline-info" href="https://yapper-37102.firebaseapp.com/" target="_blank">Live</Button>
                        <Button className="ml-3" variant="outline-dark" href="https://github.com/marzamora/Social-Networking-Web-App" target="_blank">The Code</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Showcase;
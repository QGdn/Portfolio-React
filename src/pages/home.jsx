import '../css/style.css';
import '../css/home.css';
import img from '../img/john-doe-about.jpg';

const Home = () => {
    return (
      <div>
        <div className="container-fluid text-center text-white" id="background-section">
            <section className="presentation">
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
                <button type="button" className="btn btn-danger">En savoir plus</button>
            </section>
        </div>
        <div className="container-fluid">
            <section className="test">
                <section className="apropos">
                    <h3>A propos</h3>
                    <img src={img} alt="#" className="img-fluid"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis urna nec erat vestibulum pulvinar. Vivamus eget accumsan eros. Integer volutpat ornare est, vitae tristique dolor euismod eget. Aliquam nisl nunc, scelerisque vel est ac, commodo eleifend ligula. Fusce sed nunc dapibus, rhoncus enim a, vestibulum diam. Sed luctus metus sed eros egestas, sit amet convallis mauris rhoncus. Fusce auctor commodo quam, at blandit ligula gravida id. Donec quis massa quis lectus gravida commodo sed lacinia velit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis urna nec erat vestibulum pulvinar. Vivamus eget accumsan eros. Integer volutpat ornare est, vitae tristique dolor euismod eget. Aliquam nisl nunc, scelerisque vel est ac, commodo eleifend ligula. Fusce sed nunc dapibus, rhoncus enim a, vestibulum diam. Sed luctus metus sed eros egestas, sit amet convallis mauris rhoncus. Fusce auctor commodo quam, at blandit ligula gravida id. Donec quis massa quis lectus gravida commodo sed lacinia velit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis urna nec erat vestibulum pulvinar. Vivamus eget accumsan eros. Integer volutpat ornare est, vitae tristique dolor euismod eget. Aliquam nisl nunc, scelerisque vel est ac, commodo eleifend ligula. Fusce sed nunc dapibus, rhoncus enim a, vestibulum diam. Sed luctus metus sed eros egestas, sit amet convallis mauris rhoncus. Fusce auctor commodo quam, at blandit ligula gravida id. Donec quis massa quis lectus gravida commodo sed lacinia velit.</p>
                </section>
                <section className="skills">
                    <h3>Mes compétences</h3>
                    <h4>HTML5 90%</h4>
                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-danger" style={{width: 90 + "%"}}></div>
                    </div>
                    <h4>CSS3 80%</h4>
                    <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-info" style={{width: 80 + "%"}}></div>
                    </div>
                    <h4>Javascript 70%</h4>
                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-warning" style={{width: 70 + "%"}}></div>
                    </div>
                    <h4>PHP 60%</h4>
                    <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-success" style={{width: 60 + "%"}}></div>
                    </div>
                    <h4>React 50%</h4>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{width: 50 + "%"}}></div>
                    </div>
                </section>
            </section>
        </div>
      </div>
    )
}

export default Home;
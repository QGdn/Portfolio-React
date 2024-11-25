import '../css/style.css';
import '../css/home.css';
import img from '../img/john-doe-about.jpg';

import { useState, useEffect } from 'react';


const Home = () => {
  const [profil,setProfil] = useState([]);

    const getProfil = async () => {
      const res = await fetch("https://api.github.com/users/github-john-doe")
      const json = await res.json();
      setProfil(json);
    }

    useEffect(() => {
      getProfil();
    },[])

    return (
      <div>
        <div className="container-fluid text-center text-white" id="background-section">
            <section className="presentation">
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#profilGitHub">En savoir plus</button>
                <div className="modal fade" id="profilGitHub" tabIndex="-1" aria-labelledby="modalProfilGitHub" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="container-fluid modal-content bg-dark">
                      <div className="modal-header ">
                        <h1 className="modal-title fs-5" id="modalTitreProfilGitHub">Mon profil GitHub</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <section className='imgProfil'>
                          <img src={profil.avatar_url} alt='Photo de profil de John Doe' className='img-fluid'/>
                        </section>
                        <section className='infosProfil'>
                          <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                            </svg>
                            <a href="https://github.com/github-john-doe">{profil.name}</a>
                          </p>
                          <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                            {profil.location}
                          </p>
                          <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                            <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            {profil.bio}
                          </p>
                          <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
                            </svg>
                            Repositories : {profil.public_repos}
                          </p>
                          <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                            </svg>
                            Followers : {profil.followers}
                          </p>
                          <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                            </svg>
                            Following : {profil.following}
                          </p>
                        </section>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
        </div>
        <div className="container-fluid">
            <section className="content">
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